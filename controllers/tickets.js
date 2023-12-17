const Flight = require('../models/flight')
const Tickets = require('../models/ticket')

module.exports = {
    create,
    show,
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render(`flights/tickets/new`, { flight })
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id)
    flight.seat.push(req.body)
    await flight.save()
    res.redirect(`/flights/${flight._id}/tickets/new`)
};
