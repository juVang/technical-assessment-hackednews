var express = require("express");
var worker = require("../../worker");
var storyController = require("../../db/models/story");
var data = require("../../react-client/dummy_data");

var router = express.Router();

router.route("/stories").get((req, res) => {
  console.log("iam here ");
  res.send({ data: data });
});

// Here we use express's route params
router.route("/:id").get(function(req, res) {});

module.exports = router;
