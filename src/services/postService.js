/* const { UserService } = require('./userService'); */
const { BlogPost, User, Category } = require('../models');
const schema = require('./validations/validateSchema');

const getPost = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

const getByIdPost = async (id) => {
  const postId = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return postId;
};

/* const createPost = async () => {

}; */

const updatePost = async (id, { title, content }, userId) => {
    const error = schema.validatePost({ title, content });
    if (error.type === 400) {
        return error;
    }  
      const post = getByIdPost(id);  
  
      if (post.userId !== userId) return { type: 401, message: 'Unauthorized user' };

        await BlogPost.update({ title, content }, { where: { id } });
          const updatedPost = await getByIdPost(id);
    return updatedPost;
};

/* const deletePost = async (id) => {
const removedPost = await BlogPost.destroy(
    { where: { id } },
);
return removedPost;
}; */
module.exports = {
  getPost,
  getByIdPost,
  updatePost,
  /*  deletePost, */
};
