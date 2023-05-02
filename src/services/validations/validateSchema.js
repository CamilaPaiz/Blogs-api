 const { userSchema, categorySchema, postSchema } = require('./schemas');

const validateCategory = ({ name }) => {
  const { error } = categorySchema.validate({ name });
  if (error) {
    return { type: 400, message: error.message };
  }
  return { type: null, message: '' };   
};

const validateCreateUser = ({ email, password, displayName }) => {
  const { error } = userSchema.validate({ email, password, displayName });
  if (error) {
    return { type: 400, message: error.message };
  }
  return { type: null, message: '' };
};

const validatePost = ({ title, content }) => {
  const { error } = postSchema.validate({ title, content });
  if (error) return { type: 400, message: 'Some required fields are missing' };
  return { type: null, message: '' };
};

module.exports = {
  validateCreateUser,
  validateCategory,
  validatePost,
};  