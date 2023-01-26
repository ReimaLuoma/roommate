const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// tmdb functions
const tmdb = require('./TMDB');

// mongoose and database setup
const mongo = require('./mongo');


// SYNTAX:
// router.METHOD(PATH, HANDLER)

// Get
router.get('/find/:id', async (req, res) => {
    const movie = await tmdb.fetchMovieById(req.params.id);
    console.log(movie);
    res.json(movie);
})

// Create
router.post('/addMovie/:id', async (req, res) => {

    console.log('hello from addmovie!');

    const movieData = await tmdb.fetchMovieById(req.params.id);

    console.log(movieData);

    const db = await mongo.connectToDatabase();
    const collection =  await db.collection('movies');

    console.log(db);

    const movie = new Movie({
        movieID: movieData.id,
        title: movieData.title,
        runtime: movieData.runtime,
        genres: movieData.genres,
        posterpath: movieData.poster_path
    })

    const newMovie = await collection.insertOne(movie);

    res.status(201).json({ newMovie });

})

// Update
router.patch('/:id', (req, res) => {

})

// Delete
router.delete('/:id', (req, res) => {

})

module.exports = router;