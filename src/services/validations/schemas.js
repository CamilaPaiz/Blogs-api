/*  const Joi = require('joi');

const validateSchema = Joi.object({
    displayName: Joi.string().min(8).required().label('displayName'),
    email: Joi.string().email().required().label('email'),
    password: Joi.string().min(6).required().label('password')
      .messages({
        'any.required': '{{#label}} is required',
        'any.min': '{{#label}} length must be at least 6 characters long',
        'string.min': '{{#label}} length must be at least 8 characters long',
        'string.email': '"email" must be a valid email',
      }),
  });

module.exports = {
 validateSchema,
};  */