const Blog = require("../Models/Blog.schema");


const blogCreate = async (req, res) =>{
    let {title, content, category, image} = req.body;
    const author = req.cookies.username;

    let data = await Blog.create(req.body)
    res.send({message: "Blog created successfully", data});
    res.cookie('blogId', newBlog._id.toString());
    res.status(201).send(`blog created by ${author}`);

}

const getBlog = async(req, res) =>{
    let data = await Blog.find()
    res.send({message: "Blog fetched successfully", data});
}

const getBlogById = async(req, res) =>{
    let {id} = req.body;
    let data = await Blog.findById(id)
    res.send({message: "Blog fetched successfully", data});
}

const getBlogcategory = async(req, res) =>{
    let {category} = req.body;

    if(category == "all"){
        let data = await Blog.find()
        res.send({message: "All Blogs fetched successfully", data});
    }else if(category == "technology"){
        let data = await Blog.find({category: "technology"})
        res.send({message: "Technology Blogs fetched successfully", data});
    }else if(category == "sport"){
        let data = await Blog.find({category: "sport"})
        res.send({message: "Sport Blogs fetched successfully", data});
    }else{
        let data = await Blog.find({category: "health"})
        res.send({message: "health Blogs fetched successfully", data});
    }

    
}

const deleteBlog = async(req, res) =>{
    let {id} = req.body;
    let data = await Blog.findByIdAndDelete(id)
    res.send({message: "Blog deleted successfully", data});
}

const patchBlog = async(req, res) =>{
    let {id, title, content, category, image} = req.body;
    let data = await Blog.findByIdAndUpdate(id, req.body, {new: true})
    res.send({message: "Blog updated successfully", data});
}


// router.post('/like/:id'
const BlogLike = async (req, res) => {
    try {
        const id = req.params.id;
        const blog = await Blog.findById(id);

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found.' });
        }

        blog.likes = (blog.likes || 0) + 1;
        await blog.save();

        res.json({ likes: blog.likes });
    } catch (error) {
        res.status(500).json({ message: 'Error liking the blog.' });
    }
}



// router.post('/comment/:id',
const BlogComment = async (req, res) => {
    try {
        const blogId = req.params.id;
        const comment = req.body.comment;

        const blog = await Blog.findById(blogId);

        if (!blog) {
            return res.status(404).send('Blog not found.');
        }

        blog.comments = blog.comments || [];
        blog.comments.push(comment);
        await blog.save();

        res.redirect(`/blog/singleBlog/${blogId}`);
    } catch (error) {
        res.status(500).send('Error adding comment.');
    }
}

const BlogLikePatch = async(req, res) =>{
    try {
        const id = req.params.id;
        const username = req.cookies.username; 

        if (!username) {
            return res.status(401).json({ message: 'Login or Signup required to like the blog.' });
        }

        const data = await Blog.findById(id);

        if (!data) {
            return res.status(404).json({ message: 'Blog not found.' });
        }

        data.likes = data.likes || [];
        if (!data.likes.includes(username)) {
            data.likes.push(username);
            await data.save();
        }

        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error adding like.', error });
    }
}

const BlogCommentpatch = async (req, res) => {

    try {
        const id = req.params.id;
        const username = req.cookies.username;
        const comment = req.body.comment;
        
        if (!username) {
            return res.status(401).json({ message: 'Login or Signup required to comment on the blog.' });
        }
        
        const data = await Blog.findById(id);
        
        if (!data) {
            return res.status(404).json({ message: 'Blog not found.' });
        }
        
        data.comments = data.comments || [];
        data.comments.push({ username, comment });
        await data.save();
        
        res.json(data);
        
    } catch (error) {
        res.status(500).json({ message: 'Error adding comment.', error });
    
    }
}

