var data = require("./seed_data.js");
var mongoose = require("mongoose");
var Stories = require("./db/models/story.js");
var StoryModel = Stories.StoryModel;
var Authors = require("./db/models/authors.js");
var AuthorModel = Authors.AuthorModel;

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

    var author = new AuthorModel({
      id: element["by"]["id"],
      name: element["by"]["id"],
      about: element["by"]["about"],
      karma: element["by"]["karma"]
    });
    author.save(function(err, result) {
      if (err) {
        throw err;
      } else {
        console.log(result);
      }
    });
  });
};

seedDb(data);
