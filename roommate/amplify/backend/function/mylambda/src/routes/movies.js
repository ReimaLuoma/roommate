const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// mongoose and database setup
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

// SYNTAX:
// router.METHOD(PATH, HANDLER)

// Get
router.get('/:id', async (req, res) => {
    
})

// Create
router.post('/', async (req, res) => {
    const movie = new Movie({
        movieID: req.body.id,
        title: req.body.title,
        runtime: req.body.runtime,
        genre: req.body.genre
    })
    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        console.error(400).json({ message: error.message });
    }
})

// Update
router.patch('/:id', (req, res) => {

})

// Delete
router.delete('/:id', (req, res) => {

})

module.exports = router;