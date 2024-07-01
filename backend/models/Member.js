const db = require('../config/db');
const mongoose = require('mongoose');

// MySQL Logic
const MemberMySQL = {
  getAll: (callback) => {
    const query = 'SELECT * FROM members';
    db.query(query, callback);
  },
  filter: (filters, callback) => {
    const { destination, budget, currency, language } = filters;
    let query = 'SELECT * FROM members WHERE 1=1';
    const params = [];

    if (destination) {
      query += ' AND destination = ?';
      params.push(destination);
    }
    if (budget) {
      query += ' AND budget = ?';
      params.push(budget);
    }
    if (currency) {
      query += ' AND currency = ?';
      params.push(currency);
    }
    if (language) {
      query += ' AND language = ?';
      params.push(language);
    }

    db.query(query, params, callback);
  },
};

// MongoDB Schema
const memberSchema = new mongoose.Schema({
  // other fields
  profilePicture: {
    type: String,
    default: ''
  }
});

const MemberMongoDB = mongoose.model('Member', memberSchema);

// Export both MySQL and MongoDB logic
module.exports = {
  MySQL: MemberMySQL,
  MongoDB: MemberMongoDB
};
