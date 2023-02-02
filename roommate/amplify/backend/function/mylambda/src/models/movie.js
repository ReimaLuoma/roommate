const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movieID: {
        type: Number,
        required: true
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
    },
    releaseDate: {
        type: Date,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    imdbID:{
        type: String,
        required: false
    },
    cast:{
        type: Array,
        required: false
    }
}, {
    collection: 'movies'
})

module.exports = mongoose.model('Movie', movieSchema);