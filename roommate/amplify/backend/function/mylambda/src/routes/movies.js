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
        releaseDate: movieData.release_date,
        description: movieData.overview,
        imdbID: movieData.imdb_id
    })

    const newMovie = await collection.insertOne(movie);

    res.status(201).json({ newMovie });

})

// Update
router.post('/updateMovie/:id', async (req, res) => {
    try {
        // TMDB API Get Details for movieData
        const movieData = await tmdb.fetchMovieById(req.params.id);
        console.log(movieData);
        
        // database connection to collection 'movies'
        const db = await mongo.connectToDatabase();
        const collection =  await db.collection('movies');

        // updating existing movie's data with updated dataset
        const updated = await collection.updateOne(
            { movieID: parseInt(req.params.id) },
            {$set: {
                description: movieData.overview,
                imdbID: movieData.imdb_id
            }
            }
        );
        console.log(updated);
        res.send(202).json({ message: 'Movie updated succesfully!'});
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

// Delete
router.post('/removeMovie/:id', async (req, res) => {
    try {
        const db = await mongo.connectToDatabase();
        const collection =  await db.collection('movies');

        console.log('TO BE REMOVED -> movieID: ', req.params.id);

        const deleted = await collection.deleteOne({ movieID: parseInt(req.params.id) });
        console.log(deleted);
        res.status(204).json({ message: 'Movie has been removed' });
    } catch (error) {
        res.status(500).json({ message: error })
    }
    
})

module.exports = router;