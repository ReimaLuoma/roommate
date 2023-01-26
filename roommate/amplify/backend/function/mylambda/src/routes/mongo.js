const MongoClient = require('mongodb').MongoClient;

let cachedDb = null;

const connecToDatabase = async () => {
  if(cachedDb) {
    console.log('Use existing connection');
    return Promise.resolve(cachedDb);
  } else {
    return MongoClient.connect(process.env.DATABASE, {
      native_parser: true,
      useUnifiedTopology: true,
    })
    .then((client) => {
      let db = client.db('test');
      console.log('New Database connection');
      cachedDb = db;
      return cachedDb;
    })
    .catch((error) => {
      console.log('Mongo Connection error');
      console.log(error);
    })
  }
}

module.exports = {connecToDatabase};