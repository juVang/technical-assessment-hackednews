var express = require("express");
var storyController = require("../../db/models/story.js");
var data = require("../../react-client/dummy_data.js");
var router = express.Router();
// var stories = storyController.save(data, function(err) {
//   if (err) {
//     console.log(err, "errr");
//   }
// });
router.route("/").get(function(req, res) {
  // TODO: Replace this with stories you've retrieved from the database
  storyController.findAll(function(err, data) {
    // console.log(err, "err");
    if (err) {
      console.log("error !!");
    } else {
      //console.log("data from before sort ", data);
      for (let i = 0; i < data.length - 1; i++) {
        if (data[i].score < data[i + 1].score) {
          var temp = data[i].score;
          data[i].score = data[i + 1].score;
          data[i + 1].score = temp;
        }
      }
      //console.log("data from after sort ", data);
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
