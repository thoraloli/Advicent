var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/advicent', { useNewUrlParser: true });

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function callback () {
    console.log("database connected");
});
  