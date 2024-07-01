const db = require('../config/db');

const User = {
  create: (user, callback) => {
    const { name, email, password } = user;
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, password], callback);
  },
  // Add more CRUD operations as needed
};

module.exports = User;
