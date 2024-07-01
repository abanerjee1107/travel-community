const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Existing routes
router.post('/create', blogController.createBlog);
router.get('/', blogController.getBlogs);

// New route for getting blogs by category
router.get('/category/:category', blogController.getBlogsByCategory);

module.exports = router;
