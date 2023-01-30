  const Joi = require('joi');

const categorySchema = Joi.object({ name: Joi.string().required() });
const userSchema = Joi.object({
    displayName: Joi.string().min(8).required().label('displayName'),
    email: Joi.string().email().required().label('email'),
    password: Joi.string().min(6).required().label('password'),
  });

module.exports = {
  userSchema,
  categorySchema,
};   