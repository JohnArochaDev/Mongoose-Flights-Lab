const Flight = require('../models/flight')

module.exports = {
    new : newFlight,
}

function newFlight(req, res) {
    res.render('flights/new', {errorMsg: ' '})
}