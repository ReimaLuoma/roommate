const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// SYNTAX:
// router.METHOD(PATH, HANDLER)

// Get
router.get('/:id', (req, res) => {
    
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