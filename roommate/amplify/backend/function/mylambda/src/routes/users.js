const express = require('express');
const router = express.Router();
const User = require('../models/user');

// mongoose and database setup
const mongo = require('./mongo');

// SYNTAX:
// router.METHOD(PATH, HANDLER)

// Get
router.get('/:id', (req, res) => {
    
})

// Create
router.post('/createUser/:id/:given_name/:family_name/:phone_number/:email', async (req, res) => {

    try {

        // open database connection to 'loanInstances' collection
        const db = await mongo.connectToDatabase();
        const users =  await db.collection('users');

        // check if userID already exist in users collection
        const check = await users.findOne({userID: req.params.userID });

        if(!check){
            // create new user
            const user = new User({
                userID: req.params.id,
                given_name: req.params.given_name,
                family_name: req.params.family_name,
                phone_number: req.params.phone_number,
                email:req. params.email
            })
            const newUser = await users.insertOne(user);
            console.log('newUser', newUser);
        }
        
        res.status(201);
        
    } catch (error) {
        
    }

})

// Update
router.patch('/:id', (req, res) => {

})

// Delete
router.delete('/:id', (req, res) => {

})

module.exports = router;