const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const app = express();

// tmdb functions
const tmdb = require('./TMDB');

// mongoose and database setup
const mongo = require('./mongo');


// SYNTAX:
// router.METHOD(PATH, HANDLER)

// Get all
router.get('/find/all', async (req, res) => {
    const db = await mongo.connectToDatabase();
    const collection =  await db.collection('movies');

    const cursor = await collection.find(); // return cursor
    const allValues = await cursor.toArray(); // return array of all docs

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

// Middleware to remove movie from database

const removeFromDatabase = async (req, res, next) => {

    try {
        const db = await mongo.connectToDatabase();
        const collection =  await db.collection('movies');

        res.status(202).json({ message: 'Movie is being removed' });

        const cursor = await collection.deleteMany({ movieID: req.params.id }); // return cursor
        next();
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

// Delete
router.post('/removeMovie/:id', async (req, res) => {
    try {
        const db = await mongo.connectToDatabase();
        const collection =  await db.collection('movies');

        console.log('TO BE REMOVED -> movieID: ', req.params.id);

        const deleted = await collection.deleteOne({ movieID: req.params.id });
        console.log(deleted);
        res.status(204).json({ message: 'Movie has been removed' });
    } catch (error) {
        res.status(500).json({ message: error })
    }
    
})

module.exports = router;