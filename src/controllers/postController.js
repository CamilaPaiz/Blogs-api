const { PostService } = require('../services');

const getPost = async (_req, res) => {
    const post = await PostService.getPost();
    return res.status(200).json(post);
};

const getByIdPost = async (req, res) => {
    const post = await PostService.getByIdPost(req.params.id);
    if (!post) {
        return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(post);
};
module.exports = {
    getPost,
    getByIdPost,
};