const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// tmdb functions
const fetchMovieById = require('./TMDB');

// mongoose and database setup
// DO THIS WITH DATA API by MongoDB


// SYNTAX:
// router.METHOD(PATH, HANDLER)

// Get
router.get('/:id', async (req, res) => {
    
})

// Create
router.post('/addMovie/:id', async (req, res) => {
    const movieData = await fetchMovieById(req.params.id);

    console.log(movieData);

    const movie = new Movie({
        movieID: movieData.id,
        title: movieData.title,
        runtime: movieData.runtime,
        genres: movieData.genres,
        posterpath: movieData.poster_path
    })

    console.log(movie);

    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        res.error(400).json({ message: error.message });
    }
})

// Update
router.patch('/:id', (req, res) => {

})

// Delete
router.delete('/:id', (req, res) => {

})

module.exports = router;