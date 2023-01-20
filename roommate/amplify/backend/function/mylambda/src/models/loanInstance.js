const mongoose = require('mongoose');

const loanInstanceSchema = new mongoose.Schema({
    loanID: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    movieID: {
        type: Number,
        required: true
    },
    title: {
        type: Array,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    }
})