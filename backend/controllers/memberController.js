const Member = require('../models/Member');
const multer = require('multer');
const path = require('path');

// Configure multer storage for profile picture uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage }).single('profilePicture');

// Get all members
exports.getMembers = (req, res) => {
  Member.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ data: results });
  });
};

// Filter members
exports.filterMembers = (req, res) => {
  const filters = req.body;
  Member.filter(filters, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ data: results });
  });
};

// Update profile picture
exports.updateProfilePicture = (req, res) => {
    upload(req, res, function (err) {
        if (err) {
            return res.status(400).send("Error uploading file.");
        }
        const memberId = req.user.id;
        Member.findByIdAndUpdate(memberId, { profilePicture: req.file.filename }, { new: true }, (err, member) => {
            if (err) return res.status(500).send(err);
            res.status(200).send(member);
        });
    });
};

// MySQL: Get all members
exports.getAllMembersMySQL = (req, res) => {
  Member.MySQL.getAll((err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching members from MySQL' });
    }
    res.json(results);
  });
};

// MongoDB: Add a new member
exports.addMemberMongoDB = (req, res) => {
  const newMember = new Member.MongoDB({
    // Add other fields from req.body as required
    profilePicture: req.body.profilePicture || ''
  });

  newMember.save((err, savedMember) => {
    if (err) {
      return res.status(500).json({ error: 'Error saving member to MongoDB' });
    }
    res.json(savedMember);
  });
};

// MySQL: Filter members
exports.filterMembersMySQL = (req, res) => {
  const filters = {
    destination: req.query.destination,
    budget: req.query.budget,
    currency: req.query.currency,
    language: req.query.language
  };

  Member.MySQL.filter(filters, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error filtering members from MySQL' });
    }
    res.json(results);
  });
};
