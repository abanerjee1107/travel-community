const Blog = require('../models/Blog');

exports.createBlog = (req, res) => {
  const { title, content, authorId } = req.body;
  Blog.create({ title, content, authorId }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Blog post created successfully', data: result });
  });
};

exports.getBlogs = (req, res) => {
  Blog.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ data: results });
  });
};
