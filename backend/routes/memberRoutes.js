const express = require('express');
const { getMembers, filterMembers, updateProfilePicture } = require('../controllers/memberController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getMembers);
router.post('/filter', filterMembers);
router.post('/uploadProfilePicture', authMiddleware, updateProfilePicture);

module.exports = router;
