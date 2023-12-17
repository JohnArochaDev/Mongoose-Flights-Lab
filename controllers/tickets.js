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
    const ticket = await Tickets.findById(req.params.id)
    const flight = await Flight.findById(req.params.id)
    // ticket.push(req.body)
    // await ticket.save()
    res.redirect(`/flights/${flight._id}/tickets/new`, { ticket, flight })
};
