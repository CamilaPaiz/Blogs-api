const { CategoryService } = require('../services');
/* const errorType = require('../utils/errorMap'); */

const getCategory = async (_req, res) => {
    const category = await CategoryService.getCategory();
    return res.status(200).json(category);
};

const createCategory = async (req, res) => {
    const category = await CategoryService.createCategory(req.body);
    console.log('controller', category);
     if (category.type === 400) {
        return res.status(category.type).json({ message: category.message });
    } 
 
    return res.status(201).json(category);
};

module.exports = {
    getCategory,
    createCategory,
};