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
