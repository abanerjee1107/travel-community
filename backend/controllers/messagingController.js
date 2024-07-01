const Message = require('../models/Message');

exports.sendMessage = (req, res) => {
  const { senderId, receiverId, content } = req.body;
  Message.create({ senderId, receiverId, content }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Message sent successfully', data: result });
  });
};

exports.getMessages = (req, res) => {
  const { userId } = req.params;
  Message.getByUserId(userId, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ data: results });
  });
};
