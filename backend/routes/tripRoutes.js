const express = require('express');
const { createTrip, getTrips } = require('../controllers/tripController');
const router = express.Router();

router.post('/create', createTrip); // POST request to create a new trip
router.get('/', getTrips);           // GET request to fetch all trips

module.exports = router;


