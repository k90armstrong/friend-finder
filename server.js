var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// create the express server called app
var app = express();

PORT = 3001;

// set up the middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
// app.use(bodyParser.json());

// require the routes
require('./app/routing/api-routes')(app);
require('./app/routing/html-routes')(app);

// start the app
app.listen(PORT, function () {
    console.log("listening on port: ", PORT);
});