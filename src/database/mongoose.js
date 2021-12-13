// Import the mongoose module
const mongoose = require('mongoose');

// Set up default mongoose connection
const mongoDB = 'mongodb+srv://vitor:vitor123@cluster0.hgdbc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connerction errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
