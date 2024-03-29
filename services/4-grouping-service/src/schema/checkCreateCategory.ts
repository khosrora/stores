import Joi from 'joi';

export const checkCreateCategory = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'وارد کردن نام دسته بندی الزامی است'
  }),
  description: Joi.string().optional().messages({
    'string.base': 'فرمت توضیحات اشتباه وارد شده است'
  })
});