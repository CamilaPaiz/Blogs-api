const { CategoryService } = require('../services');

const getCategory = async (_req, res) => {
    const category = await CategoryService.getCategory();
    return res.status(200).json(category);
};

module.exports = {
    getCategory,
};