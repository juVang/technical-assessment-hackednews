var data = require("./seed_data.js");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/hackednews");

var seedDb = function(data) {
  // your code here!
  stories.forEach(story => {
    var st = new StoryModel({
      by: story.by.karma,
      id: story.id,
      by: story.by.id,
      title: story.title,
      score: story.score
    });
    insertOne(st, callback);
  });
};

seedDb(data);
export default seedDb;
