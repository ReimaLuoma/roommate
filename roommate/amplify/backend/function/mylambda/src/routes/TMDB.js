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
        console.log(res.status(200));
        res.status(200).json(response.data.results);
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

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

router.get('/movie/:id', async (req, res) => {
    try {
        const response = await axios({
            url: 'https://api.themoviedb.org/3/movie/'+req.params.id+'?api_key=' + process.env.REACT_APP_TMDB_API_KEY + '&language=en-EN',
            method: 'get',
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

// Create
router.post('/', (req, res) => {
rs
})

// Update
router.patch('/:id', (req, res) => {

})

// Delete
router.delete('/:id', (req, res) => {

})

module.exports = router;