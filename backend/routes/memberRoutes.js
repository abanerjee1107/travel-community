const express = require('express');
const { 
    getMembers, 
    filterMembers, 
    updateProfilePicture, 
    getAllMembersMySQL, 
    filterMembersMySQL, 
    addMemberMongoDB 
} = require('../controllers/memberController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// General member routes
router.get('/', getMembers);
router.post('/filter', filterMembers);
router.post('/uploadProfilePicture', authMiddleware, updateProfilePicture);

// MySQL routes
router.get('/mysql/members', getAllMembersMySQL);
router.get('/mysql/members/filter', filterMembersMySQL);

// MongoDB routes
router.post('/mongodb/members', addMemberMongoDB);

module.exports = router;
