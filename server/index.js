var express = require("express");
var bodyParser = require("body-parser");
var storyRouter = require("./routers/story.js");
var authorRouter = require("./routers/authors.js");

var mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost/hackednews");

app.use(bodyParser.json());

app.use(express.static(__dirname + "/../react-client/dist"));

app.use("/api/story", storyRouter);
app.use("/api/author", authorRouter);

app.listen(8000, function() {
  console.log("listening on port 8000");
});
