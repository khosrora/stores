import HttpStatus from 'http-status-codes';
import Category from '@grouping/model/Categories.model';
import { category, ICategories } from '@grouping/utils/Categories.interface';
import { checkCreateCategory } from '@grouping/schema/checkCreateCategory';

// ! for find _id in aggregate
import mongoose from 'mongoose';
import { checkEditCategory } from '@grouping/schema/checkEditCategory';
const ObjectId = mongoose.Types.ObjectId;

export const createCategoryService = async (data: category) => {
  const validation = checkCreateCategory.validate(data);
  if (validation.error) {
    return {
      status: HttpStatus.BAD_REQUEST,
      message: null,
      errors: validation.error
    };
  } else {
    const newCategory: ICategories = await createCategory(data);

    return {
      status: HttpStatus.CREATED,
      message: 'دسته بندی با موفقیت ایجاد شد',
      newCategory
    };
  }
};

export const createSubCategoryService = async (data: category, parentId: string) => {
  // TODO set validation parent ID
  const validation = checkCreateCategory.validate(data);
  if (validation.error) {
    return {
      status: HttpStatus.BAD_REQUEST,
      message: null,
      errors: validation.error
    };
  } else {
    const newCategory: ICategories = await createCategory(data, parentId);

    return {
      status: HttpStatus.CREATED,
      message: 'دسته بندی با موفقیت ایجاد شد',
      newCategory
    };
  }
};

export const getAllService = async () => {
  const categories = await Category.aggregate([
    { $sort: { order: 1 } },
    {
      $graphLookup: {
        from: 'categories',
        startWith: '$_id',
        connectFromField: '_id',
        connectToField: 'parent_id',
        as: 'children'
      }
    },
    {
      $match: {
        parent_id: null
      }
    }
  ]);
  return {
    status: HttpStatus.OK,
    categories
  };
};

export const getService = async (id: string) => {
  const category = await Category.aggregate([
    {
      $match: { _id: new ObjectId(id) }
    },
    {
      $graphLookup: {
        from: 'categories',
        startWith: '$_id',
        connectFromField: '_id',
        connectToField: 'parent_id',
        as: 'children',
        depthField: 'depth'
      }
    }
  ]);

  return {
    status: HttpStatus.OK,
    category
  };
};
export const deleteCategoryService = async (id: string) => {
  const deletedItem = await Category.findByIdAndDelete({ _id: id });
  return {
    status: HttpStatus.OK,
    message: 'دسته بندی با موفقیت حذف شد',
    deletedItem
  };
};
export const editCategoryService = async (id: string, data: category) => {
  const validation = checkEditCategory.validate(data);
  if (validation.error) {
    return {
      status: HttpStatus.OK,
      errors: validation.error
    };
  } else {
    const editedItem = await Category.findOneAndUpdate({ _id: id }, data, { new: true });
    return {
      status: HttpStatus.OK,
      message: 'دسته بندی با موفقیت ویرایش شد',
      editedItem
    };
  }
};

const createCategory = async (data: category, parent_id: string | null = null) => {
  return await Category.create({
    name: data.name,
    description: data.description,
    parent_id
  });
};
