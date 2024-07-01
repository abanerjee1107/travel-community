const express = require('express');
const { getMembers, filterMembers } = require('../controllers/memberController');
const router = express.Router();

router.get('/', getMembers);
router.post('/filter', filterMembers);

module.exports = router;
