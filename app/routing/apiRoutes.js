// Grab the friend data array
var friendData = require("../data/friends");

// routing
module.exports = function(app) {
    // GET request
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
      });
    // POST request
    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
        // compatibility logic
    })
}