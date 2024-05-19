import HttpStatus from 'http-status-codes';
import Product from '@products/model/Products.model';
import { IProductDoc } from '@products/utils/productType';
import { createProductValidation } from '@products/schema/createValidation';
import { createRandomUniqueId } from '@products/utils/createRandomUniqueId';
import { elasticSearchClient } from '@products/elasticsearch';
import { config } from '@products/config';

import events from 'events';
const myEvents = new events();

export const getAllService = async () => {
  try {
    const products = await elasticSearchClient.search({
      index: config.INDEX_ELASTIC_SEARCH!,
      query: {
        match_all: {}
      }
    });
    return {
      status: HttpStatus.OK,
      message: 'OK !!',
      products: products.hits.hits
    };
  } catch (error) {
    return {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'مشکلی از سمت سرور رخ داده است',
      products: []
    };
  }
};

export const createProductService = async (data: IProductDoc) => {
  const validation = createProductValidation.validate(data);
  if (validation.error) {
    return {
      status: HttpStatus.BAD_REQUEST,
      errors: validation.error
    };
  } else {
    const uniqueCode = createRandomUniqueId();
    data.uniqueCode = uniqueCode;
    const newProduct = await Product.create(data);
    if (newProduct) {
      myEvents.emit('saveToElastic', createProductInElastic(newProduct));
    }
    return {
      status: HttpStatus.CREATED,
      message: 'محصول با موفقیت افزوده شد',
      newProduct
    };
  }
};

export const isActive_or_not = async (id: string) => {
  const product = await Product.findById(id);
  if (!!product) {
    product.isActive = !product.isActive;
    await product.save();
    myEvents.emit('updateInElasticSearch', updateProductInElastic(product));
    return {
      status: HttpStatus.OK,
      message: 'وضعیت محصول تغییر پیدا کرد'
    };
  } else {
    return {
      status: HttpStatus.BAD_GATEWAY,
      message: 'محصولی با این اطلاعات پیدا نشد'
    };
  }
};

export const deleteService = async (id: string) => {
  try {
    const product = await Product.findByIdAndDelete({ _id: id });

    if (!!product) {
      myEvents.emit('delete_product', deleteProductInElastic(product.uniqueCode));
      return {
        status: HttpStatus.OK,
        message: 'محصول با موفقیت حذف شد'
      };
    } else {
      return {
        status: HttpStatus.BAD_GATEWAY,
        message: 'محصولی با این اطلاعات پیدا نشد'
      };
    }
  } catch (error) {
    return {
      error,
      status: HttpStatus.INTERNAL_SERVER_ERROR
    };
  }
};

export const addAttributesService = async (id: string, data: any) => {
  const product = await Product.findById(id);
  if (!product) {
    return {
      status: HttpStatus.BAD_GATEWAY,
      message: 'محصولی با این اطلاعات پیدا نشد'
    };
  }
  product.attributes.push(...data);
  await product.save();
  myEvents.emit('updateInElasticSearch', updateProductInElastic(product));
  return {
    status: HttpStatus.OK,
    message: 'وضعیت محصول تغییر پیدا کرد'
  };
};

export const addSpecificationsService = async (id: string, data: any) => {
  const product: IProductDoc = (await Product.findById(id)) as IProductDoc;
  if (!product) {
    return {
      status: HttpStatus.BAD_GATEWAY,
      message: 'محصولی با این اطلاعات پیدا نشد'
    };
  }
  product.specifications.push(...data);
  const newProduct = await product.save();
  myEvents.emit('updateInElasticSearch', updateProductInElastic(newProduct));
  return {
    status: HttpStatus.OK,
    message: 'وضعیت محصول تغییر پیدا کرد'
  };
};

export const deleteAttributesService = async (id: string, attId: any) => {
  const product = await Product.findByIdAndUpdate(
    { _id: id },
    {
      $pull: {
        attributes: { _id: attId }
      }
    },
    {
      new: true
    }
  );

  if (!product) {
    return {
      status: HttpStatus.BAD_GATEWAY,
      message: 'محصولی با این اطلاعات پیدا نشد'
    };
  } else {
    myEvents.emit('updateInElasticSearch', updateProductInElastic(product));
    return {
      status: HttpStatus.OK,
      message: 'وضعیت محصول تغییر پیدا کرد',
      product
    };
  }
};

export const deleteSpecificationsService = async (id: string, specId: any) => {
  const product = await Product.findByIdAndUpdate(
    { _id: id },
    {
      $pull: {
        specifications: { _id: specId }
      }
    },
    {
      new: true
    }
  );
  if (!product) {
    return {
      status: HttpStatus.BAD_GATEWAY,
      message: 'محصولی با این اطلاعات پیدا نشد'
    };
  } else {
    myEvents.emit('updateInElasticSearch', updateProductInElastic(product));
    return {
      status: HttpStatus.OK,
      message: 'وضعیت محصول تغییر پیدا کرد',
      product
    };
  }
};

export const addTypesService = async (id: string, data: any) => {
  const product = await Product.findById(id);
  if (!product) {
    return {
      status: HttpStatus.NOT_FOUND,
      message: 'محصولی با این مشخصات ییدا نشد'
    };
  }
  await product.typesOf.push(...data);
  product.save();
  myEvents.emit('updateInElasticSearch', updateProductInElastic(product));
  return {
    status: HttpStatus.OK,
    message: 'وضعیت محصول تغییر کرد',
    product
  };
};

export const deleteTypesService = async (id: string, typesId: string) => {
  const product = await Product.findByIdAndUpdate(
    { _id: id },
    {
      $pull: {
        typesOf: { _id: typesId }
      }
    },
    {
      new: true
    }
  );
  if (!product) {
    return {
      status: HttpStatus.BAD_GATEWAY,
      message: 'محصولی با این اطلاعات پیدا نشد'
    };
  } else {
    myEvents.emit('updateInElasticSearch', updateProductInElastic(product));
    return {
      status: HttpStatus.OK,
      message: 'وضعیت محصول تغییر پیدا کرد',
      product
    };
  }
};

const createProductInElastic = async (product: IProductDoc) => {
  try {
    await elasticSearchClient.index({
      index: config.INDEX_ELASTIC_SEARCH!,
      document: {
        name: product.name,
        uniqueCode: product.uniqueCode,
        brand: product.brand,
        like: product.like,
        disLike: product.disLike,
        isActive: product.isActive,
        attributes: product.attributes,
        specifications: product.specifications,
        typesOf: product.typesOf
      }
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteProductInElastic = async (uniqueCode: string) => {
  try {
    await elasticSearchClient.deleteByQuery({
      index: config.INDEX_ELASTIC_SEARCH!,
      query: {
        match: {
          uniqueCode
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProductInElastic = async (product: IProductDoc) => {
  try {
    const res = await elasticSearchClient.search({
      index: config.INDEX_ELASTIC_SEARCH!,
      body: {
        query: {
          match: {
            uniqueCode: product.uniqueCode
          }
        }
      }
    });

    const documentId = res.hits.hits[0]._id;

    const update = await elasticSearchClient.update({
      index: config.INDEX_ELASTIC_SEARCH!,
      id: documentId,
      doc: {
        name: product.name,
        uniqueCode: product.uniqueCode,
        brand: product.brand,
        like: product.like,
        disLike: product.disLike,
        isActive: product.isActive,
        attributes: product.attributes,
        specifications: product.specifications,
        typesOf: product.typesOf
      }
    });
    console.log(update);
  } catch (error) {
    console.log(error);
  }
};
