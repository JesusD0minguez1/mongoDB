
const { Batch } = require('mongodb');
const mongoose = require('mongoose');
const { stringify } = require('querystring');


//this statement is for mongoose 4 or earlier
mongoose.Promise = global.Promise;

//Connect mongoose to the database
const connectionString = `mongodb://localhost/data`;
mongoose.connect(connectionString,{
    useUnifiedTopology: true
});

//establish the connection with the database
const db = mongoose.connection;

//bind connection to error event(error handler)
db.on('error', console.error.bind(console,'DB connect error'));

//bind the connection to a function that will be called when 
//the DB is opened (called once)
db.once('open', callback => {});

//Create a schema to define the fields, validation requirements & defaults &
//table == schema
let personSchema = mongoose.Schema({
    name: String,
    age: String,
    species: String,
})

//Create a model. Used for CRUD operations
let Person = mongoose.model('People_Collection', personSchema);




exports.index = (req,res) => {
    res.send('API WORKS')
}

