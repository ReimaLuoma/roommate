const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    loanInstanceID: {
        type: ObjectId,
        required: true
    },
    userID: {
        type: String,
        required: true
    }
},  {
    collection: 'loans'
})

module.exports = mongoose.model('Loan', loanSchema);