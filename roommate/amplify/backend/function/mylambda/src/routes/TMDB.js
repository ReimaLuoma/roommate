const express = require('express');
const router = express.Router();
const axios = require('axios');

// SYNTAX:
// router.METHOD(PATH, HANDLER)

// Get Popular
router.get('/popular', async (req, res) => {
    try {
        const response = await axios({
            url: 'https://api.themoviedb.org/3/movie/popular?api_key=' + process.env.REACT_APP_TMDB_API_KEY + '&language=en-US&page=1',
            method: 'get',
        });
        res.status(200).json(response.data.results);
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

// get genres
router.get('/genres', async (req, res) => {
    try {
        const response = await axios({
            url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=' + process.env.REACT_APP_TMDB_API_KEY + '&language=en-US',
            method: 'get',
        });
        res.status(200).json(response.data.genres);
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

// fetch movie by id from tmdb
const fetchMovieById = async (movieId) => {
    console.log('attempting fetch data from TMDB');
    try {
        const response = await axios({
            url: 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + process.env.REACT_APP_TMDB_API_KEY + '&language=en-EN',
            method: 'get',
        });
        return response.data;
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

router.get('/movie/:id', async (req, res) => {
    const movie = await fetchMovieById(req.params.id);
    res.json(movie);
})

// search movie by title
router.get('/searchMovie/:searchValue', async (req, res) => {
    console.log(req.params.searchValue);
    try {
        const response = await axios({
            url: 'https://api.themoviedb.org/3/search/movie?api_key=' + process.env.REACT_APP_TMDB_API_KEY + '&language=en-US&query=' + req.params.searchValue + '&page=1&include_adult=false',
            method: 'get',
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

router.get('/cast/:id', async (req, res) => {
    try {
        const response = await axios({
            url: 'https://api.themoviedb.org/3/movie/' + req.params.id + '/credits?api_key=' + process.env.REACT_APP_TMDB_API_KEY + '&language=en-US',
            method: 'get'
        })
        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

module.exports = {router, fetchMovieById};