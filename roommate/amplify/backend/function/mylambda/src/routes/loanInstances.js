const express = require('express');
const router = express.Router();

// mongoose and database setup
const mongo = require('./mongo');
const { ObjectId } = require('mongodb');

// loanInstance data model
const LoanInstance = require('../models/loanInstance');

// loan data model
const Loan = require('../models/loan');

// user creation
const User = require('./users');

// SYNTAX:
// router.METHOD(PATH, HANDLER)

// Get
router.get('/:id', (req, res) => {
    
})

const updateLoanInstanceAvailability = async (loanInstanceID, status) => {

    try {
        const id = ObjectId(loanInstanceID);

        const db = await mongo.connectToDatabase();
        const collection =  await db.collection('loanInstances');

        const updated = await collection.updateOne(
            {_id: id},
            {$set: {availability: status}}
        )

        console.log(updated);

        return 202;

    } catch (error) {
        return 500;
    }
}

// Create
router.post('/createLoan/:userID/:userName/:userFamily/:userPhone/:userEmail/:movieID/:title', async (req, res) => {

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

    // check if user is already in database
    const userData = await User.getUserFromDatabase(req.params.userID);
    console.log('userData: ', userData);

    if(userData === null){
        // create user to database
        console.log('creating user to database');
        await User.createUserToDatabase(req.params.userID, req.params.userName, req.params.userFamily, req.params.userPhone, req.params.userEmail);
    }

    // Create doc to collection
    const loanInstanceInsert = await collection.insertOne(loanInstance);

    // create loan with { loanInstanceID, userID }
    const loanCollection = await db.collection('loans');

    const loan = new Loan({
        loanInstanceID: loanInstanceInsert.insertedId,
        userID: req.params.userID,
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
router.post('/updateStatus/:id/:status', async (req, res) => {

    const update = await updateLoanInstanceAvailability(req.params.id, req.params.status);

    res.status(update);

})

// Delete
router.post('/cancelRequest/:id/:userID', async (req, res) => {

    console.log('request id: ', req.params.id);

    try {
        // create mongodb ID from req.params.id
        const id = ObjectId(req.params.id);

        // open database connection to 'loanInstances' collection
        const db = await mongo.connectToDatabase();
        const loanInstances =  await db.collection('loanInstances');

        // delete loanInstance
        const deletedInstance = await loanInstances.deleteOne({ _id: id });

        // open database connection to 'loans' collection
        const loans =  await db.collection('loans');
        const deletedLoan = await loans.deleteOne({ loanInstanceID: id });

        // delete user if not connected to other loans
        const users = await db.collection('users');
        const deleteUserStatus = await User.removeUserFromDatabase(req.params.userID);
        console.log(deleteUserStatus);

        res.status(204).json({ message: 'cancelled'});

    } catch (error) {
        res.status(500).json({ message: error });
    }
})

module.exports = {router, updateLoanInstanceAvailability};