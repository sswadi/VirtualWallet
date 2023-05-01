const mongoose = require('mongoose'); // require the library that helps you connect mongodb with express server
mongoose.connect('mongodb://localhost/Virtual_Wallet_db'); //mongodb: server | Virtual_Wallet_db: database name

const db = mongoose.connection; //acquire the connection to check if it is successful
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Successfully connected to the mongodb database!');

});
