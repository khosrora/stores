import { IBrands, branch } from '@grouping/utils/Brand.interface';
import HttpStatus from 'http-status-codes';
import Brand from '@grouping/model/Brands.model';
import { checkCreateBrand, checkEditBrand, checkAddBranch } from '@grouping/schema/checkCreateBrand';

export const createBrandService = async (data: IBrands) => {
  const validation = checkCreateBrand.validate(data);
  if (validation.error) {
    return {
      status: HttpStatus.BAD_REQUEST,
      errors: validation.error
    };
  } else {
    const newBrand: IBrands = await createNewBrand(data);
    return {
      status: HttpStatus.CREATED,
      message: 'برند جدید با موفقیت ثبت شد',
      newBrand
    };
  }
};

export const editBrandService = async (id: string, data: IBrands) => {
  const validation = checkEditBrand.validate(data);
  if (validation.error) {
    return {
      status: HttpStatus.BAD_REQUEST,
      errors: validation.error
    };
  } else {
    const newBrand: IBrands | null = await editNewBrand(id, data);
    return {
      status: newBrand === null ? HttpStatus.BAD_REQUEST : HttpStatus.CREATED,
      message: newBrand === null ? 'برندی با این مشخصات پیدا نشد' : 'برند جدید با موفقیت ویرایش شد',
      newBrand: newBrand === null ? null : newBrand
    };
  }
};

export const addBranchService = async (id: string, data: IBrands) => {
  const validation = checkAddBranch.validate(data);
  if (validation.error) {
    return {
      status: HttpStatus.BAD_REQUEST,
      errors: validation.error
    };
  } else {
    const addBranchResult = await addNewBranch(id, data);
    return {
      status: HttpStatus.OK,
      message: 'اطلاعات شعبه جدید اضافه شد',
      data: addBranchResult
    };
  }
};

export const deleteBranchService = async (id: string, idBranch: string) => {
  const branch = await Brand.updateOne(
    {
      _id: id
    },
    {
      $pull: {
        branches: { _id: idBranch }
      }
    },
    {
      new: true
    }
  );

  if (branch.matchedCount === 1) {
    return {
      status: HttpStatus.OK,
      message: 'شعبه با موفقیت حذف شد',
      branch
    };
  } else {
    return {
      status: HttpStatus.BAD_REQUEST,
      message: 'شعیه ای با این اطبلاعات پیدا نشد'
    };
  }
};

export const editBranchService = async (id: string, idBranch: string, data: branch) => {
  const branch = await Brand.updateOne(
    {
      _id: id,
      'branches._id': idBranch
    },
    {
      $set: {
        'branches.$.name': data.name,
        'branches.$.province': data.province,
        'branches.$.city': data.city,
        'branches.$.address': data.address
      }
    },
    {
      new: true
    }
  );
  if (branch.matchedCount === 1) {
    return {
      status: HttpStatus.OK,
      message: 'شعبه با موفقیت ویرایش شد'
    };
  } else {
    return {
      status: HttpStatus.BAD_REQUEST,
      message: 'شعیه ای با این اطلاعات پیدا نشد'
    };
  }
};

const createNewBrand = async (data: IBrands): Promise<IBrands> => {
  return await Brand.create(data);
};

const editNewBrand = async (id: string, data: IBrands): Promise<IBrands | null> => {
  return await Brand.findOneAndUpdate({ _id: id }, data, { new: true });
};

const addNewBranch = async (id: string, data: IBrands): Promise<IBrands | null> => {
  return await Brand.findOneAndUpdate({ _id: id }, { $push: { branches: data } }, { new: true });
};
