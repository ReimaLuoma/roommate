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
router.get('/find/all', async (req, res) => {
    const db = await mongo.connectToDatabase();
    const collection =  await db.collection('movies');

    const cursor = await collection.find(); // return cursor
    const allValues = await cursor.toArray(); // return array of all docs
    console.log(allValues);

    res.json(allValues);
})

// Create
router.post('/addMovie/:id', async (req, res) => {

    const movieData = await tmdb.fetchMovieById(req.params.id);

    const db = await mongo.connectToDatabase();
    const collection =  await db.collection('movies');

    const movie = new Movie({
        movieID: movieData.id,
        title: movieData.title,
        runtime: movieData.runtime,
        genres: movieData.genres,
        posterpath: movieData.poster_path,
        releaseDate: movieData.release_date
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