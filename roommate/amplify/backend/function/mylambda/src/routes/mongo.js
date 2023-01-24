'use strict';

const mongoose = require('mongoose');

let conn = null;

const uri = process.env.DATABASE;

exports.connect = async function() {
  if (conn == null) {
    conn = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      //keepAlive: true,
      //keepAliveInitialDelay:10000
    }).then(() => mongoose);
    
    // `await`ing connection after assigning to the `conn` variable
    // to avoid multiple function calls creating new connections
    await conn;
  }

  return conn;
};