const express = require('express');
const router = express.Router();

// mongoose and database setup
const mongo = require('./mongo');

// loanInstance data model
const LoanInstance = require('../models/loanInstance');

// loan data model
const Loan = require('../models/loan');

// SYNTAX:
// router.METHOD(PATH, HANDLER)

// Get
router.get('/:id', (req, res) => {
    
})

const updateLoanInstanceAvailability = async (loanInstanceID, status) => {

    try {
        const db = await mongo.connectToDatabase();
        const collection =  await db.collection('loanInstances');

        const updated = await collection.updateOne(
            {_id: loanInstanceID},
            {$set: {availability: status}}
        )

        res.status(202).json("status updated succesfully");
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// Create
router.post('/createLoan/:user/:movieID/:title', async (req, res) => {

    // open database connection to 'loanInstances' collection
    const db = await mongo.connectToDatabase();
    const collection =  await db.collection('loanInstances');

    // form new loanInstance object
    const loanInstance = new LoanInstance({
        loanID:'',
        date: Date.now(),
        movieID: req.params.movieID,
        title: req.params.title,
        availability: 'loan requested'
    });

    // Create doc to collection
    const loanInstanceInsert = await collection.insertOne(loanInstance);

    // create loan with { loanInstanceID, userID }
    const loanCollection = await db.collection('loans');

    const loan = new Loan({
        loanInstanceID: loanInstanceInsert.insertedId,
        userID: req.params.user,
    });

    const loanInsert = await loanCollection.insertOne(loan);

    // add loanID to loanInstanceID

    await collection.updateOne(
        {_id: loanInstanceInsert.insertedId},
        {$set: { loanID: loanInsert.insertedId }}
    )

    res.status(201).json(loan.status);
})

// Update
router.patch('/:id', (req, res) => {

})

// Delete
router.delete('/:id', (req, res) => {

})

module.exports = {router, updateLoanInstanceAvailability};