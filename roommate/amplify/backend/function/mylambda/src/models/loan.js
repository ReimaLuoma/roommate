const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    loanInstanceID: {
        type: String,
        required: false
    },
    userID: {
        type: String,
        required: true
    },
},  {
    collection: 'loan'
})

module.exports = mongoose.model('Loan', loanSchema);