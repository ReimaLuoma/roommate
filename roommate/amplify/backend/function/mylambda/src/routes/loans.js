const express = require('express');
const router = express.Router();

// mongoose and database setup
const mongo = require('./mongo');
const { ObjectId } = require('mongodb');

// SYNTAX:
// router.METHOD(PATH, HANDLER)

// Get all
router.get('/all', async (req, res) => {

    // open database connection to 'loanInstances' collection
    const db = await mongo.connectToDatabase();
    const loanInstances =  await db.collection('loanInstances');

    // return all loanInstances
    const data = await loanInstances.find().toArray();

    res.status(200).json(data);

})

// Get user's loans
router.get('/:user', async (req, res) => {
    // open database connection to 'loans' collection
    const db = await mongo.connectToDatabase();
    const loans =  await db.collection('loans');

    // get all loans that match user
    const loanInstances = await loans.find({ userID: req.params.user });
    const allLoans = await loanInstances.toArray();

    // insert all loanInstanceIDs from allLoans to array
    let arr = [];
    for(let i = 0; i < allLoans.length; i++) {
        let item = ObjectId(allLoans[i].loanInstanceID);
        arr.push(item);
    }

    // get loanInstances data based on loans
    const instanceCollection = await db.collection('loanInstances');
    const instanceData = await instanceCollection.find({ _id: { $in: arr} }).toArray();

    res.status(200).json(instanceData);
})

// Create
router.post('/', (req, res) => {

})

// Update
router.patch('/:id', (req, res) => {

})

// Delete
router.delete('/:id', (req, res) => {

})

module.exports = router;