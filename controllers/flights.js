const Flight = require('../models/flight')

module.exports = {
    new : newFlight,
    index,
}

function newFlight(req, res) {
    res.render('flights/new', {errorMsg: ' '})
}

function getAll() {
    return Flight;
}

function index(req, res) {
    res.render('flights/index', {
        flights: getAll(),
        title: 'Open FLights'
    })
}
