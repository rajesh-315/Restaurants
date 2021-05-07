//Routes for api 
module.exports = (app) => {
    const restaurants = require('../controller/restaurantController.js');

    //create endpoint
    app.post('/restaurants', restaurants.create);

    //get all endpoint
    app.get('/restaurants', restaurants.findAll);
}