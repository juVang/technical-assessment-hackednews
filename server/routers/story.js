var express = require("express");
var storyController = require("../../db/models/story.js");

var router = express.Router();

router.route("/").get(function(req, res) {
  // TODO: Replace this with stories you've retrieved from the database
  res.json(
    storyController.findAll(function(err, res) {
      if (err) {
        console.log("nothing fined");
      } else {
        console.log("Found");
      }
    })
  );
});

// Here we use express's route params
router.route("/:id").get(function(req, res) {
  res.json(
    storyController.findOne(req.id, function(err, res) {
      if (err) {
        console.log("nothing fined");
      } else {
        console.log("Found");
      }
    })
  );
});

module.exports = router;
