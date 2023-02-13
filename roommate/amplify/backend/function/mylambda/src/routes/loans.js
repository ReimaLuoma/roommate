const express = require('express');
const router = express.Router();

// mongoose and database setup
const mongo = require('./mongo');
const { ObjectId } = require('mongodb');

// SYNTAX:
// router.METHOD(PATH, HANDLER)

// Get all
router.get('/all', async (req, res) => {

    try {

        // open database connection to 'loanInstances' collection
        const db = await mongo.connectToDatabase();
        const loans =  await db.collection('loans');

        /*
        if(loans.count((err, count) => {
            if(!err && count === 0){
                res.status(200).json({ message: 'no loans'});
            }
        }));
        */

        // return all loanInstances
        const data = await loans.aggregate([
            {
                $lookup:{
                    from: "loanInstances",
                    localField: "loanInstanceID",
                    foreignField: "_id",
                    as: "loanInstanceData"
                }
            },
            {
                $unwind: "$loanInstanceData"
            },
            {
                $lookup:{
                    from: "users",
                    localField: "userID",
                    foreignField: "userID",
                    as: "userData"
                }
            }
        ]).toArray();

        console.log('data from loans', data);

        res.status(200).json(data);
        
    } catch (error) {
        res.status(500).json({ message: error });
    }

    

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