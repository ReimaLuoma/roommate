const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// mongoose and database setup
const mongoose = require('mongoose');
const { default: axios } = require('axios');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

// TMDB router
const app = express();
const tmdbRouter = require('./TMDB');
app.use('/tmdb', tmdbRouter);

// Handler functions

const retrieveDataById = (req, res, next) => {
    next();
}

// SYNTAX:
// router.METHOD(PATH, HANDLER)

// Get
router.get('/:id', async (req, res) => {
    
})

// Create
router.post('/addMovie/:id', async (req, res) => {
    res.status(201).json({success: 'post call succeed!', url: req.url, body: req.body})
})

// Update
router.patch('/:id', (req, res) => {

})

// Delete
router.delete('/:id', (req, res) => {

})

module.exports = router;