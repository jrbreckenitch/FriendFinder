
var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {

    console.log(req.body);
    res.status(200).end();

    var newUserScores = [];

    var addNewUser = function () {
        newUserScores.push(req.body.question1);
        newUserScores.push(req.body.question2);
        newUserScores.push(req.body.question3);
        newUserScores.push(req.body.question4);
        newUserScores.push(req.body.question5);
        newUserScores.push(req.body.question6);
        newUserScores.push(req.body.question7);
        newUserScores.push(req.body.question8);
        newUserScores.push(req.body.question9);
        newUserScores.push(req.body.question10);
    };

    addNewUser();
    console.log(newUserScores);

    // for (var i = 0; i < friends.length; i++) {
    //     // var difference = 0;
    //     // difference.push(i.scores)
    //     i.scores.forEach(element => {
    //         console.log(element);
    //       });
    //     // for (var j = 0; j < newUserScores.length; i++) {

    //     // }
    // };
    
    // if (friends.length < 5) {
    //   friends.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });


  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friends.length = [];
    res.json({ ok: true });
  });
};