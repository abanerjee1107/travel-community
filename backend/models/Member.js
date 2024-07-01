const db = require('../config/db');

const Member = {
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

module.exports = Member;
