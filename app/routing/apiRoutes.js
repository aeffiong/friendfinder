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
        // compatibility logic
        var userInfo = req.body;
        console.log(userInfo);

        var userScores = req.body.scores;
        // console.log(userScores);

        // check all existing friends in the list
        for (var i = 0; i < friendData.length; i++) {
            console.log(friendData[i]);

            // declare diff variable to show the difference in scores
            var diff = 0;
            // Looping through the scores - seems to only be doing it on the first index
            for (var j = 0; j < userScores.length; j++) {
                diff = Math.abs(friendData[i].scores[j] - parseInt(userScores[j]));
            }
            console.log(diff);
        }


    })
}