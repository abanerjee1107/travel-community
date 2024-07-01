const db = require('../config/db');

const Trip = {
  create: (trip, callback) => {
    const { title, description, date, userId } = trip;
    const query = 'INSERT INTO trips (title, description, date, user_id) VALUES (?, ?, ?, ?)';
    db.query(query, [title, description, date, userId], callback);
  },
  getAll: (callback) => {
    const query = 'SELECT * FROM trips';
    db.query(query, callback);
  },
};

module.exports = Trip;
