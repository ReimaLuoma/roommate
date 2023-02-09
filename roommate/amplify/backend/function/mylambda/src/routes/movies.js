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

    res.status(200).json(allValues);
})

// Create
router.post('/addMovie/:id', async (req, res) => {

    // fetch data from tmdb
    const movieData = await tmdb.fetchMovieById(req.params.id);
    const movieCast = await tmdb.fetchMovieCastById(req.params.id);

    // shorten movieCast array
    let arr = [];
    for(let i = 0; i < movieCast.length; i++){
        arr.push(movieCast[i]);
        if(i >= 12){ break; }
    }

    // open database connection to 'movies' collection
    const db = await mongo.connectToDatabase();
    const collection =  await db.collection('movies');

    // form new movie object
    const movie = new Movie({
        movieID: movieData.id,
        title: movieData.title,
        runtime: movieData.runtime,
        genres: movieData.genres,
        posterpath: movieData.poster_path,
        releaseDate: movieData.release_date,
        description: movieData.overview,
        imdbID: movieData.imdb_id,
        cast: arr
    })

    // sent movie object to collection
    const newMovie = await collection.insertOne(movie);

    res.status(201).json({ newMovie });

})

// Update
router.post('/updateMovie/:id', async (req, res) => {
    try {
        // TMDB API Get Details for movieData
        const movieData = await tmdb.fetchMovieCastById(req.params.id);
        console.log('data in updateMovie: ', movieData);
        
        // database connection to collection 'movies'
        const db = await mongo.connectToDatabase();
        const collection =  await db.collection('movies');

        let arr = [];
        for(let i = 0; i < movieData.length; i++){
            arr.push(movieData[i]);
            if(i >= 12){ break; }
        }

        console.log('this is short array: ', arr);

        // updating existing movie's data with updated dataset
        const updated = await collection.updateOne(
            { movieID: parseInt(req.params.id) },
            {$set: {
                cast: arr
            }
            }
        );
        res.status(202).json({ message: 'Movie updated succesfully!'});
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

// Delete
router.post('/removeMovie/:id', async (req, res) => {
    try {
        const db = await mongo.connectToDatabase();
        const collection =  await db.collection('movies');

        const deleted = await collection.deleteOne({ movieID: parseInt(req.params.id) });
        res.status(204).json({ message: 'Movie has been removed' });
    } catch (error) {
        res.status(500).json({ message: error })
    }
    
})

module.exports = router;