import Joi from 'joi';

export const refreshTokenValidationSchema = Joi.object({
  refreshToken: Joi.string().required().messages({
    'any.required': `وارد کردن کد بازیابی الزامی است`
  })
});
