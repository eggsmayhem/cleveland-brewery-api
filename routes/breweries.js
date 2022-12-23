const express = require('express');
const router = express.Router();
const breweryController = require('../controllers/breweries');

router.get('/overview/', breweryController.displayAllBreweries);
router.get('/getbrewery/:id', breweryController.getDetails);

module.exports = router