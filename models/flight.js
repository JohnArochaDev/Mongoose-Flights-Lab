const mongoose = require('mongoose')

const Schema = mongoose.Schema

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    destinations: [destinationSchema],
})

const destinationSchema  = new Schema({
    airport: String,
    arrival: Date,
    
})

module.exports = mongoose.model('Flight', flightSchema)

