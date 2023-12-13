const express = require('express');

const router = express.Router();

const moviesCtrl = require('../controllers/flights')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/new', moviesCtrl.new)

module.exports = router;
