const express = require('express');
const router = express.Router();

// mongoose and database setup
const mongo = require('./mongo');

// loanInstance data model
const LoanInstance = require('../models/loanInstance');

// SYNTAX:
// router.METHOD(PATH, HANDLER)

// Get
router.get('/:id', (req, res) => {
    
})

// Create
router.post('/createLoan/:movieID/:title', async (req, res) => {

    // open database connection to 'loanInstances' collection
    const db = await mongo.connectToDatabase();
    const collection =  await db.collection('loanIntances');

    // form new loanInstance object
    const loanInstance = new LoanInstance({
        loanID:'',
        date: Date.now(),
        movieID: req.params.movieID,
        title: req.params.title,
        availability: false
    });

    // Create doc to collection
    const loanIns = await collection.insertOne(loanInstance);
    console.log('created: ', loanIns);

    res.status(201).json({ loanIns });
})

// Update
router.patch('/:id', (req, res) => {

})

// Delete
router.delete('/:id', (req, res) => {

})

module.exports = router;