const express = require('express');
const router = express.Router();
const User = require('../models/user');

// mongoose and database setup
const mongo = require('./mongo');

// SYNTAX:
// router.METHOD(PATH, HANDLER)

// Get

const getUserFromDatabase = async (userID) => {
    try {
        // open database connection to 'loanInstances' collection
        const db = await mongo.connectToDatabase();
        const users =  await db.collection('users');

        // find user by userID
        const user = await users.findOne({ userID: userID });

        if(user !== null){
            console.log('found user from database');
        }

        return user;

    } catch (error) {
        return {status: 500, message: error};
    }
}

router.get('/:id', async (req, res) => {

    try {
        // open database connection to 'loanInstances' collection
        const db = await mongo.connectToDatabase();
        const users =  await db.collection('users');

        // find user with userID
        const user = await users.findOne({ userID: req.params.id });

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ message: error });
    }
    
})

// Create

const createUserToDatabase = async (userID, given_name, family_name, phone_number, email) => {
    try {

        // open database connection to 'loanInstances' collection
        const db = await mongo.connectToDatabase();
        const users =  await db.collection('users');

        // check if userID already exist in users collection
        const check = await users.findOne({userID: userID });

        if(!check){
            // create new user
            const user = new User({
                userID: userID,
                given_name: given_name,
                family_name: family_name,
                phone_number: phone_number,
                email: email
            })
            const newUser = await users.insertOne(user);
            console.log('newUser', newUser);
        }

        console.log('created user to database');
        
    } catch (error) {
        console.log(error);
        return {status: 500, message: error};
    }
}

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

const removeUserFromDatabase = async (userID) => {

    try {
        // open database connection to 'loanInstances' collection
        const db = await mongo.connectToDatabase();
        const users =  await db.collection('users');
        const loans =  await db.collection('loans');

        // check if user is connected to existing loans
        if(await loans.findOne({userID: userID})){
            return null;
        }

        // remove user if no connections to loans
        const user = await users.deleteOne({userID: userID});

        return user;

    } catch (error) {
        return error;
    }
    
}

router.delete('/:id', (req, res) => {

})

module.exports = {router, getUserFromDatabase, createUserToDatabase, removeUserFromDatabase};