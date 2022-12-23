const mongoose = require('mongoose');

const BrewerySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    type: {
        type: String,
    },
    street: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    postal_code: {
        type: String,
    },
    coordinates: {
        type: Array,
    },
    url: {
        type: String,
    },
    phone_number: {
        type: String,
    }
});

module.exports = mongoose.model('Brewery', BrewerySchema);