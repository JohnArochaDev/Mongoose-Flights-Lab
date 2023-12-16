const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new : newFlight,
    index,
    create,
    show,
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({flight: Flight._id})
    res.render('flights/show', { flight, tickets })
}

function newFlight(req, res) {
    res.render('flights/new', {
        errorMsg: ' ',
        title: 'New Flight'
    })
}

async function create(req, res) {
    await Flight.create(req.body)
    res.redirect('/flights')
};
