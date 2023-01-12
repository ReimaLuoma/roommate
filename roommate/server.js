const express = require('express');
const axios = require('axios')
const app = express();
const mongoose = require('mongoose');
const PORT = 8000;
const cors = require('cors');

app.use(cors());

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE,{
   ssl: true,
    sslValidate: false
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

app.use(express.json());

// Movies
const moviesRouter = require('./routes/movies');
app.use('/movies', moviesRouter);
app.listen(PORT, () => console.log('server started'));

// TMDB
const tmdbRouter = require('./routes/TMDB');
app.use('/tmdb', tmdbRouter);