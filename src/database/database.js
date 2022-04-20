const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose
      .connect('mongodb://localhost:27017/characters-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('MONGO DB CONNECTED');
      })
      .catch((err) => {
        return console.log(`Err connecting to the database ${err}`);
      });
  }


  module.exports = connectToDatabase;
