const Router = require('express');
const { blogCreate, getBlog, deleteBlog, patchBlog, getBlogById, BlogLikePatch, BlogCommentpatch } = require('../controller/blog.contoller');

const blogRouter = Router();
blogRouter.get('/', getBlog)
blogRouter.get('/singleBlog/:id', getBlogById)
blogRouter.post('/create', blogCreate);
blogRouter.delete('/delete/:id', deleteBlog);
blogRouter.patch('/edit/:id', patchBlog)
blogRouter.patch('/like/:id', BlogLikePatch);
blogRouter.patch('/comment/:id', BlogCommentpatch)


module.exports = blogRouter