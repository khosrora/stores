import HttpStatus from 'http-status-codes';
import Product from '@products/model/Products.model';
import { IProductDoc } from '@products/utils/productType';
import { createProductValidation } from '@products/schema/createValidation';
import { createRandomUniqueId } from '@products/utils/createRandomUniqueId';

export const getAllService = async () => {
  const products = await Product.find();
  return {
    status: HttpStatus.OK,
    message: 'OK !!',
    products
  };
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
  return {
    status: HttpStatus.OK,
    message: 'وضعیت محصول تغییر پیدا کرد'
  };
};

export const addSpecificationsService = async (id: string, data: any) => {
  const product = await Product.findById(id);
  if (!product) {
    return {
      status: HttpStatus.BAD_GATEWAY,
      message: 'محصولی با این اطلاعات پیدا نشد'
    };
  }
  product.specifications.push(...data);
  await product.save();
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
  return {
    status: HttpStatus.OK,
    message: 'وضعیت محصول تغییر کرد',
    product
  };
};

export const deleteTypesService = async (id: string, typesId: string) => {
  console.log(id);
  console.log(typesId);
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
    return {
      status: HttpStatus.OK,
      message: 'وضعیت محصول تغییر پیدا کرد',
      product
    };
  }
};
