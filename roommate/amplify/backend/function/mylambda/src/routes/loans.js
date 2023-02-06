const express = require('express');
const router = express.Router();

// mongoose and database setup
const mongo = require('./mongo');

// SYNTAX:
// router.METHOD(PATH, HANDLER)

// Get all
router.get('/all', async (req, res) => {
    
})

// Get
router.get('/:user', async (req, res) => {
    // open database connection to 'loanInstances' collection
    const db = await mongo.connectToDatabase();
    const collection =  await db.collection('loans');

    // get all instances that match user
    const loanInstances = await collection.find({ userID: req.params.user });
    const allInstances = await loanInstances.toArray();
    console.log(allInstances); // returns all instances

    // get loanInstances data
    const instanceCollection = await db.collection('loanInstances');
    const instanceData = await instanceCollection.findOne();
    console.log(instanceData);

    res.status(200).json(instanceData);
    // create json
    // respond with json
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