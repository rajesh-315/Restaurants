const Restaurant = require('../model/restaurant.js');

//POST
exports.create = (req, res) => {
    //Validations
    //name must be specified to create a new restaurant record
    if(!req.body.Name) {
        return res.status(400).send({
            message: "Name can not be empty"
        });
    }

    //geofence must be specified to create a new restaurant record
    if(!req.body.Geofence) {
        return res.status(400).send({
            message: "Geofence can not be empty"
        });
    }

    //storing the request body in the form of JSON in a local object
    const restaurant = new Restaurant({
        Name: req.body.Name || "", 
        Description: req.body.Description || "",
        Geofence: req.body.Geofence || [],
        Rating: req.body.Rating || []
    });

    //executing save so the record gets saved in mongodb
    restaurant.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Restaurant."
        });
    });

};

//GET
exports.findAll = (req, res) => {
    //specifying the geofence co-ordinates
    var Geofence = req.body.Geofence

   //retrieving the records according to geofence
    Restaurant.find(Geofence.latitude, Geofence.longitude, Geofence.radius)
    .then(restaurant => {
        res.send(restaurant);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error occurred while retrieving restaurant."
        });
    });

};