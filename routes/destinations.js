const express = require('express');
const router = express.Router();
const destCtrl = require('../controllers/destinations')

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;