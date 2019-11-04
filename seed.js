var data = require("./seed_data.js");
var mongoose = require("mongoose");
var Stories = require("./db/models/story.js");
var StoryModel = Stories.StoryModel;

mongoose.connect("mongodb://localhost/hackednews");

var seedDb = function(data) {
  data.map(element => {
    var story = new StoryModel({
      id: element["id"],
      by: element["by"]["id"],
      title: element["title"],
      score: element["score"]
    });
    story.save(function(err, result) {
      if (err) {
        throw err;
      } else {
        console.log(result);
      }
    });
  });
};

seedDb(data);
