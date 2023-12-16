const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationSchema  = new Schema({
    airport: String,
    arrival: Date,

})

const ticketSchema = newSchema({
    seat: String,
    price: Number,
    flight: ObjectId,

})

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema],
    ticket: [ticketSchema]
})


module.exports = mongoose.model('Flight', flightSchema)

