 const { userSchema, categorySchema } = require('./schemas');

const validateCategory = ({ name }) => {
  console.log('parametro schema', name);
  const { error } = categorySchema.validate({ name });
  console.log('erro schema', error);
  if (error) {
    return { type: 400, message: error.message };
  }
  return { type: null, message: '' };   
};

const validateCreateUser = (email, password, displayName) => {
  const { error } = userSchema.validate({ email, password, displayName });
  if (error) {
    return { type: 400, message: error.message };
  }
  return { type: null, message: '' };
};

module.exports = {
  validateCreateUser,
  validateCategory,
};  