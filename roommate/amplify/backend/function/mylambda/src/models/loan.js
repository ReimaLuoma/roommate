const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    loanID: {
        type: String,
        required: true
    },
    loanInstance: {
        type: String,
        required: true
    },
    userID: {
        type: Number,
        required: true
    },
})