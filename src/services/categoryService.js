const { Category } = require('../models');

const getCategory = async () => {
    const category = await Category.findAll();
    return category;
};

module.exports = {
    getCategory,
};