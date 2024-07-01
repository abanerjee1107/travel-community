const Trip = require('../models/Trip');

exports.createTrip = (req, res) => {
  const { title, description, date, userId } = req.body;
  Trip.create({ title, description, date, userId }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Trip created successfully', data: result });
  });
};

exports.getTrips = (req, res) => {
  Trip.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ data: results });
  });
};
