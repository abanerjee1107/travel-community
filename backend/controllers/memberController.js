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
