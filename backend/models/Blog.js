// Blog.js for MySQL

const db = require('../config/db');

const Blog = {
  create: (blog, callback) => {
    const { title, content, authorId } = blog;
    const query = 'INSERT INTO blogs (title, content, author_id) VALUES (?, ?, ?)';
    db.query(query, [title, content, authorId], callback);
  },
  getAll: (callback) => {
    const query = 'SELECT * FROM blogs';
    db.query(query, callback);
  },
};

module.exports = Blog;


// Blog.js for Mongoose

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
    createdAt: { type: Date, default: Date.now() },
    // other fields
});

const BlogModel = mongoose.model('Blog', blogSchema);

module.exports = BlogModel;
