const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/tickets')

router.post('/:id/tickets/new', ticketCtrl.create);

module.exports = router;