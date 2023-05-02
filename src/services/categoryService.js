const { Category } = require('../models');
const schema = require('./validations/validateSchema');
/* const errorType = require('../utils/errorMap');  */

const getCategory = async () => {
    const category = await Category.findAll();
    return category;
};

const createCategory = async ({ name }) => {
      const error = schema.validateCategory({ name });
    if (error.type === 400) {
        return error;
    }  
    const category = await Category.create({ name });
    return category;
};

module.exports = {
    getCategory,
    createCategory,
};
