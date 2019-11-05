var express = require("express");
var storyController = require("../../db/models/story.js");

var router = express.Router();

/**
 *? here i have to write the router and
 *? import the controller(story from db and i already have it in storyController )
 *! because there we have the methods
 */

// router.route("/").get(function(req, res) {
//   // TODO: Replace this with stories you've retrieved from the database
//   res.json([
//     {
//       author: "ocdtrekkie",
//       title: "Switch – New Video Game System [video]",
//       score: 536
//     },
//     {
//       author: "mhb",
//       title: "Video Games Are Changing the Way Soccer Is Played",
//       score: 100
//     }
//   ]);
// });
router.route("/").get(function(req, res) {
  // TODO: Replace this with stories you've retrieved from the database
  console.log("request recived");
  storyController.findAll(function(err, doc) {
    console.log(doc.length);
    res.json(doc);
  });
  // res.json("hello")
});

//new one
router.route("/top-auth").get(function(req, res) {
  console.log("recived from auth ");
  storyController.findAllAuth(function(err, doc) {
    res.json(doc);
  });
});

// Here we use express's route params
// router.route("/:id").get(function(req, res) {});
router.route("/:id").get(function(req, res) {
  console.log(" i recive the euest", req.body);
});
module.exports = router;
