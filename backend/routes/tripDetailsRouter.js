const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

router.get('/details/:destination', tripController.getTripDetails); // GET request to fetch trip details by destination

module.exports = router;
