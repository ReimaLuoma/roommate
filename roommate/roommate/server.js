const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://' + process.env.MONGO_USER +':' + process.env.MONGO_PASSWORD +'@roommate-cluster.pvvjw2q.mongodb.net/?retryWrites=true&w=majority',{
   ssl: true,
    sslValidate: false
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connected to database'));

app.use(express.json());
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
app.listen(3000, () => console.log('server started'));