var express = require("express");
var storyController = require("../../db/models/story.js");
var Data = require("./dummy_data");

var router = express.Router();
var myJsonData = JSON.stringify(Data);

router.route("/").get(function(req, res) {
  // TODO: Replace this with stories you've retrieved from the database
  console.log("Hi from story get req. route");
  // var myData = new User([
  //   {
  //     by: "ocdtrekkie",
  //     title: "Switch – New Video Game System [video]",
  //     score: 536
  //   }
  // ]);
  // myData
  //   .save()
  //   .then(item => {
  //     res.send("item saved to database");
  //   })
  //   .catch(err => {
  //     res.status(400).send("unable to save to database");
  //   });

  // console.log(myJsonData);
  // console.log(Array.isArray(Data));

  // Data.map((story, i) => {
  //   var item = new storyController({
  //     id: story.id,
  //     by: story.by,
  //     title: story.title,
  //     score: story.score
  //   });
  //   item.insertOne(item);
  // });

  // storyController.findAll();
  res.json(myJsonData);
});

// Here we use express's route params
router.route("/:id").get(function(req, res) {});

module.exports = router;
