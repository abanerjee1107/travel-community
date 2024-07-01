const express = require('express');
const { createBlog, getBlogs } = require('../controllers/blogController');
const router = express.Router();

router.post('/create', createBlog);
router.get('/', getBlogs);

module.exports = router;
