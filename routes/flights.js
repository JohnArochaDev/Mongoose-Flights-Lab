const express = require('express');

const router = express.Router();

const flightCtrl = require('../controllers/flights')

router.get('/', flightCtrl.index)

router.get('/new', flightCtrl.new)

router.get('/:id', flightCtrl.show)

router.post('/', flightCtrl.create);

module.exports = router;
