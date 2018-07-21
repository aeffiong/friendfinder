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
        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: 100
        };

        var userInfo = req.body;
        console.log(userInfo);

        var userScores = req.body.scores;
        // console.log(userScores);

        var diff = 0;


        // check all existing friends in the list
        for (var i = 0; i < friendData.length; i++) {
            console.log(friendData[i]);
            var diff = 0;
            // Looping through the scores
            for (var j = 0; j < userScores.length; j++) {
                diff += Math.abs(parseInt(friendData[i].scores[j]) - parseInt(userScores[j]));
            }
            console.log(diff);
            
            if (diff <= bestMatch.friendDiff) {
                bestMatch.name = friendData[i].name;
                bestMatch.photo = friendData[i].photo;
                bestMatch.friendDiff = diff;
                
            }
            
        }
        friendData.push(userInfo);
        res.json(bestMatch);


    })
}