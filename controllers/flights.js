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

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
}

async function create(req, res) {
    await Flight.create(req.body)
    res.redirect('/')
};