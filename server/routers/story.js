var express = require("express");
//var storyController = require("../../db/controllers/story.js");
var data = require("../../react-client/dummy_data");

var router = express.Router();

router.route("/stories").get((req, res) => {
  console.log("iam here ");
  res.send({ data: data }); //Part 1 Complete
  // res.json([
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
});

// Here we use express's route params
router.route("/:id").get(function(req, res) {});

module.exports = router;
