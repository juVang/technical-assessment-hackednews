var express = require("express");
const storyDb = require("../../db/models/story");
//var storyController = require('../../db/controllers/story.js');

var router = express.Router();

router.route("/").get(function(req, res) {
  // TODO: Replace this with stories you've retrieved from the database
  storyDb.findAll(function(err, result) {
    if (err) {
      res.status(500);
      res.end();
      throw err;
    } else {
      res.json(result);
      res.status(200);
      res.end();
    }
  });
});

// Here we use express's route params
router.route("/:id").get(function(req, res) {});

module.exports = router;
