const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/tickets')

router.get('/:id/tickets/new', ticketCtrl.show)

router.post('/:id/tickets/new', ticketCtrl.create);

module.exports = router;