import Joi from 'joi';

export const checkCreateBrand = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'وارد کردن نام برند الزامی است'
  }),
  description: Joi.string().required().messages({
    'any.required': 'وارد کردن توضیحات برند الزامی است'
  })
});

export const checkEditBrand = Joi.object({
  name: Joi.string().optional().messages({
    'any.required': 'وارد کردن نام برند الزامی است',
    'string.base': 'فرمت وارد شده اشتباه است'
  }),
  description: Joi.string().optional().messages({
    'any.required': 'وارد کردن توضیحات برند الزامی است',
    'string.base': 'فرمت وارد شده اشتباه است'
  })
});

export const checkAddBranch = Joi.object({
  name: Joi.string().optional().messages({
    'any.required': 'وارد کردن نام برند الزامی است',
    'string.base': 'فرمت وارد شده اشتباه است'
  }),
  province: Joi.number().required().messages({
    'any.required': 'وارد کردن نام برند الزامی است',
    'number.base': 'فرمت وارد شده اشتباه است'
  }),
  city: Joi.number().required().messages({
    'any.required': 'وارد کردن نام برند الزامی است',
    'number.base': 'فرمت وارد شده اشتباه است'
  }),
  address: Joi.string().required().messages({
    'any.required': 'وارد کردن نام برند الزامی است',
    'string.base': 'فرمت وارد شده اشتباه است'
  }),
  workingTime: Joi.array()
    .optional()
    .items({
      day: Joi.string().required().messages({}),
      from: Joi.string().required().messages({}),
      to: Joi.string().required().messages({})
    })
});
