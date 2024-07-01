const Blog = require('../models/Blog');

// Original exports for creating and fetching blogs
exports.createBlog = (req, res) => {
    const { title, content, categories } = req.body;
    const newBlog = new Blog({ title, content, categories });
    newBlog.save((err, blog) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(blog);
    });
};

exports.getBlogs = (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(blogs);
    });
};

exports.getBlogsByCategory = (req, res) => {
    const { category } = req.params;
    Blog.find({ categories: category }, (err, blogs) => {
        if (err) return res.status(500).send(err);
        res.status(200).send(blogs);
    });
};

// New exports for creating and fetching blog posts
const createBlogPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newBlogPost = new Blog({
            title,
            content,
            author: req.user._id // Assuming authenticated user is the author
        });
        await newBlogPost.save();
        res.status(201).json({ message: 'Blog post created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getBlogPosts = async (req, res) => {
    try {
        const blogPosts = await Blog.find().populate('author', 'username');
        res.status(200).json(blogPosts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Exporting all functions together
module.exports = {
    createBlog,
    getBlogs,
    getBlogsByCategory,
    createBlogPost,
    getBlogPosts,
};
