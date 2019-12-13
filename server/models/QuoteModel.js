const mongoose = require('mongoose');

const QuoteSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    },
    person: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('OkBoomerQuote', QuoteSchema);