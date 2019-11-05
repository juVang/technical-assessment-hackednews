var express = require("express");
var bodyParser = require("body-parser");
var storyRouter = require("./routers/story.js");
var mongoose = require("mongoose");

var app = express();
/**
 *? we don't need to have connection inside the server because we already make it inside
 *?   the database (commited this line to make the connection is work)
 */
// mongoose.connect("mongodb://localhost/hackednews");

app.use(bodyParser.json());

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + "/../react-client/dist"));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.use("/api/story", storyRouter);

app.listen(27017, function() {
  console.log("listening on port 8000");
});
