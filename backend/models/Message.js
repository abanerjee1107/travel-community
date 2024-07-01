const db = require('../config/db');

const Message = {
  create: (message, callback) => {
    const { senderId, receiverId, content } = message;
    const query = 'INSERT INTO messages (sender_id, receiver_id, content) VALUES (?, ?, ?)';
    db.query(query, [senderId, receiverId, content], callback);
  },
  getByUserId: (userId, callback) => {
    const query = 'SELECT * FROM messages WHERE sender_id = ? OR receiver_id = ?';
    db.query(query, [userId, userId], callback);
  },
};

module.exports = Message;
