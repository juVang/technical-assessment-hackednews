var data = require("./seed_data.js");
var mongoose = require("mongoose");
var Stories = require("./db/models/story.js");

mongoose.connect("mongodb://localhost/hackednews", { useMongoClient: true });

var seedDb = function(data) {
  // your code here!
};

seedDb(data);
