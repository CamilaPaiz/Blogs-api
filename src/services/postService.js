const { BlogPost, User, Category } = require('../models');

const getPost = async () => {
    const post = await BlogPost.findAll(
        {
            include: [{ model: User,
as: 'user', 
            attributes: { exclude: ['password'] } },
             { model: Category, as: 'categories', through: { attributes: [] } }], 
        },
    );
    return post;
};

const getByIdPost = async (id) => {
const postId = await BlogPost.findOne({ 
    where: { id }, 
    include: [{ model: User,
        as: 'user', 
                    attributes: { exclude: ['password'] } },
                     { model: Category, as: 'categories', through: { attributes: [] } }],
});
return postId;
};

module.exports = {
    getPost,
    getByIdPost,
};