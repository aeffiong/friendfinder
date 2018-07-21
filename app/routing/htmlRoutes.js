// dependencies 
var path = require("path");

// routing

module.exports = function (app) {
    // route for survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        
    });

    // route for home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
        
    });
}