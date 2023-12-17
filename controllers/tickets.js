const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    create,
    show,
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const ticket = await Ticket.find({flight:req.params.id})
    res.render(`flights/tickets/new`, { ticket, flight })
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id)
    req.body.flight = flight
    await Ticket.create(req.body)
    res.redirect(`/flights/${flight._id}`)
};
