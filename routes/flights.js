const express = require('express');

const router = express.Router();

const moviesCtrl = require('../controllers/flights')

router.get('/', moviesCtrl.index)

router.get('/new', moviesCtrl.new)



module.exports = router;
