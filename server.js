const express = require('express');
const bodyParser= require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//db connection
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//validating db connection
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("connected to the database ......");    
}).catch(err => {
    console.log('Could not connect to the database..', err);
    process.exit();
});

//routes specification
require('./app/routes/restaurant.route.js')(app);

//make app listen to a port
app.listen(5000, function () {
    console.log('listening on port 5000');
})