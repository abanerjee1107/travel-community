const express = require('express');
const { createTrip, getTrips } = require('../controllers/tripController');
const tripController = require('../controllers/tripController');
const router = express.Router();

// Routes for individual trips
router.post('/create', createTrip); // POST request to create a new trip
router.get('/', getTrips);           // GET request to fetch all trips

// Routes for group trips
router.post('/createGroupTrip', tripController.createGroupTrip);
router.get('/groupTrips', tripController.getGroupTrips);

module.exports = router;
