const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movieID: {
        type: Number,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    runtime: {
        type: Number,
        required: false
    },
    genres: {
        type: Array,
        required: false
    },
    posterpath: {
        type: String || null,
        required: false
    }
}, {
    collection: 'movies'
})

module.exports = mongoose.model('Movie', movieSchema);