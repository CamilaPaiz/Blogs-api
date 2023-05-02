  const Joi = require('joi');

const categorySchema = Joi.object({ name: Joi.string().required() });
const userSchema = Joi.object({
    displayName: Joi.string().min(8).required().label('displayName'),
    email: Joi.string().email().required().label('email'),
    password: Joi.string().min(6).required().label('password'),
  });

  const postSchema = Joi.object({ 
    title: Joi.string().required(),
    content: Joi.string().required(),
   });

module.exports = {
  userSchema,
  categorySchema,
  postSchema,
};   