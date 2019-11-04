var data = require("./seed_data.js");
var mongoose = require("mongoose");
var Stories = require("./db/models/story.js");
const fs = require("fs");

mongoose.connect("mongodb://localhost/hackednews");

var seedDb = function(data) {};
Stories.findAll(function(err, data) {
  if (err) {
    console.log("err", err);
  } else {
    console.log(data);
  }
});

seedDb(data);
