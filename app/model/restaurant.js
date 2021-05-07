//Restaurant model
const mongoose = require('mongoose');

//Required fields for restaurant with their types
const restSchema = mongoose.Schema({
    Name: String,
    Description: String,
    Geofence: Array,
    Rating: Array
});

//export to access in other files
module.exports = mongoose.model('Restaurant', restSchema);