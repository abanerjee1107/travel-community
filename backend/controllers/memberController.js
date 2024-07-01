const Member = require('../models/Member');

exports.getMembers = (req, res) => {
  Member.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ data: results });
  });
};

exports.filterMembers = (req, res) => {
  const filters = req.body;
  Member.filter(filters, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ data: results });
  });
};
