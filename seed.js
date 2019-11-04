var data = require("./seed_data.js");
var mongoose = require("mongoose");
var Stories = require("./db/models/story.js");

mongoose.connect("mongodb://localhost/hackednews");

// my model
var newStory = Stories.StoryModel;
// Here add the dummy data to your database

var seedDb = function(data) {
  // your code here!
  data.map(e => {
    var newRow = new newStory({
      id: e.id,
      by: e.by.id,
      title: e.title,
      score: e.score
    });
    newRow.save(function(err, result) {
      if (err) {
        console.log("error in saving to db");
      } else {
        console.log("saved");
      }
    });
  });
};

seedDb(data);
