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

 const updatePost = async (req, res) => {
    const { id } = req.params;
    console.log(req.user.data.userId);
    const { userId } = req.user.data;
const updatedPostInfo = await PostService.updatePost(id, req.body, userId);

if (updatedPostInfo.type === 400) {
    return res.status(updatedPostInfo.type).json({ message: updatedPostInfo.message });
} 
if (updatedPostInfo.type === 401) {
    return res.status(updatedPostInfo.type).json({ message: updatedPostInfo.message });
}
return res.status(200).json(updatedPostInfo);
}; 

/* const deletePost = async (req, res) => {
     await PostService.deletePost(req.params.id);
    return res.status(204);
}; */

module.exports = {
    getPost,
    getByIdPost,
    updatePost, 
  /* deletePost, */
};