const express = require('express');
const router = express.Router();

const getOffers = require('../api/getOffers');

router.get('/getOffers', getOffers);

module.exports = router;