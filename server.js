// Dependencies
var express = require("express");
var bodyParser = require("body-parser");


// set up Express app
var app = express();
var PORT = process.env.PORT || 8080;

// Middleware to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes

// api route
require("./app/routing/apiRoutes")(app);

// html routes
require("./app/routing/htmlRoutes")(app);

// starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});