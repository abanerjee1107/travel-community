const Trip = require('../models/Trip');
const { Client } = require('@googlemaps/google-maps-services-js');
const client = new Client({});

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

exports.getTripDetails = (req, res) => {
  const { destination } = req.params;
  client
    .places({
      params: {
        input: destination,
        inputtype: 'textquery',
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
      timeout: 1000, // milliseconds
    })
    .then((r) => {
      res.status(200).send(r.data);
    })
    .catch((e) => {
      res.status(500).send(e.response.data.error_message);
    });
};

exports.createGroupTrip = (req, res) => {
  const { tripName, members, startDate, endDate } = req.body;
  // Assuming you have a GroupTrip model or schema defined
  GroupTrip.create({ tripName, members, startDate, endDate }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Group trip created successfully', data: result });
  });
};

exports.getGroupTrips = (req, res) => {
  // Assuming you have a GroupTrip model or schema defined
  GroupTrip.find({}, (err, groupTrips) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ data: groupTrips });
  });
};
