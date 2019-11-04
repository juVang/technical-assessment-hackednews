var express = require("express");
// var storyController = require('../../db/controllers/story.js');
var Stories = require("../../db/models/story.js");
var storyModel = Stories.StoryModel;

var router = express.Router();

router.route("/").get(function(req, res) {
  // TODO: Replace this with stories you've retrieved from the database
  var topTen;
  storyModel.find({}, function(err, result) {
    result.sort((a, b) => (a.score < b.score ? 1 : -1));
    topTen = result.slice(0, 10);
    //Test
    console.log(topTen);
    res.json(topTen);
    res.end(topTen);
  });
});

router.route("/author").get(function(req, res) {
  var topTen;
  storyModel.find({}, function(err, result) {
    result.sort((a, b) => (a.karma > b.karma ? 1 : -1));
    topTen = result.slice(0, 10);
    //Test
    console.log(topTen);
    res.json(topTen);
    res.end(topTen);
  });
});

router.route("/search").post(function(req, res) {
  console.log(req.body);
  res.end();
});

// Here we use express's route params
router.route("/:id").get(function(req, res) {});

module.exports = router;
