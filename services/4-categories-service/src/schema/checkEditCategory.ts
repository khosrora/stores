import Joi from 'joi';

export const checkEditCategory = Joi.object({
  name: Joi.string().required().optional().messages({
    'any.required': 'وارد کردن نام دسته بندی الزامی است'
  }),
  description: Joi.string().optional().messages({
    'string.base': 'فرمت توضیحات اشتباه وارد شده است'
  })
});
