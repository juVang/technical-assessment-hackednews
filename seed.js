var data = require("./seed_data.js");
var mongoose = require("mongoose");
var Stories = require("./db/models/story.js");

mongoose.connect("mongodb://localhost/hackednews");

var seedDb = function(data) {
  console.log(data);
  // your code here!
  for (var i = 0; i < data.length; i++) {
    Stories.insertOne(
      {
        id: {
          type: data[i].type,
          unique: true
        },
        by: data[i].by,
        title: data[i].title,
        score: data[i].score
      },
      function(err, res) {
        if (err) {
          console.log("Nothing saved");
        } else {
          console.log("Saved");
        }
      }
    );
  }
};

seedDb(data);
