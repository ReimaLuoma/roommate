const express = require('express');
const app = express();
const mongoose = require('mongoose');

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
app.listen(3000, () => console.log('server started'));