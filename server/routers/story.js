var express = require("express");
var storyController = require("../../db/models/story.js");

//var seedData = require("../../seed_data.js");
var router = express.Router();
// var stories = storyController.save(seedData, function(err) {
//   if (err) {
//     console.log(err, "errr");
//   }
// });
router.route("/score").get(function(req, res) {
  //TODO: Replace this with stories you've retrieved from the database
  storyController.findAll(function(err, data) {
    // console.log(err, "err");
    if (err) {
      console.log("error !!");
    } else {
      data.sort(function(a, b) {
        return b.score - a.score;
      });
      res.json(data);
    }
  });
});
router.route("/karma").get(function(req, res) {
  //TODO: Replace this with stories you've retrieved from the database
  storyController.findAll(function(err, data) {
    // console.log(err, "err");
    if (err) {
      console.log("error !!");
    } else {
      data.sort(function(a, b) {
        return b.karma - a.karma;
      });
      res.json(data);
    }
  });
});
//[
//   {
//     author: "ocdtrekkie",
//     title: "Switch – New Video Game System [video]",
//     score: 536
//   },
//   {
//     author: "mhb",
//     title: "Video Games Are Changing the Way Soccer Is Played",
//     score: 100
//   }
// ]);

// Here we use express's route params
//router.route("/:id").get(function(req, res) {});

module.exports = router;
