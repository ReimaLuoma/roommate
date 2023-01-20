const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movieID: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    runtime: {
        type: Number,
        required: true
    },
    genres: {
        type: Array,
        required: true
    },
})