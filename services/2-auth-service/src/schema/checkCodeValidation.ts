import Joi from 'joi';

export const checkCodeValidation = Joi.object({
  phoneNumber: Joi.string()
    .pattern(new RegExp(/^09[0-9]{9}$/))
    .required()
    .messages({
      'any.required': `وارد کردن شماره تماس الزامی است`,
      'string.pattern.base': 'شماره تماس معتبر نمی باشد'
    }),
  code: Joi.number().required().messages({
    'any.required': `وارد کردن کد تایید الزامی است`
  })
});
