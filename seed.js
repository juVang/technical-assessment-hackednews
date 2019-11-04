var data = require("./seed_data.js");
var mongoose = require("mongoose");
var Stories = require("./db/models/story.js");

mongoose.connect("mongodb://localhost/hackednews");

var seedDb = function(data) {
  // your code here!
  fetch("./dummy_data")
    .then(data => {
      return rep.json();
      res.json(parsedstory);
    })
    .then(obj => {
      var dumData = save.save(obj);
      schemaa.save(dumData);
    });
};

seedDb(data);
