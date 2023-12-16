const Flight = require('../models/flight')

module.exports = {
    new : newFlight,
    index,
    create,
}

function newFlight(req, res) {
    res.render('flights/new', {
        errorMsg: ' ',
        title: 'New Flight'
    })
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

async function create(req, res) {
    await Flight.create(req.body)
    res.redirect('/')
};