const express = require('express');
const router = express.Router();
const { availableCountries, countryInfo } = require('../controllers/countryControllers')


router.get('/availible', availableCountries);

router.get('/info/:code', countryInfo)

module.exports = router;
