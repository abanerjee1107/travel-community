const Blog = require('../models/Blog');

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
