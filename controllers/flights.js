const Flight = require('../models/flight')

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
    res.render('flights/show', { flight })
}

function newFlight(req, res) {
    res.render('flights/new', {
        errorMsg: ' ',
        title: 'New Flight'
    })
}

async function create(req, res) {
    await Flight.create(req.body)
    res.redirect('/')
};
