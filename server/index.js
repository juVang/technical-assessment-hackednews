var express = require("express");
var bodyParser = require("body-parser");
var storyRouter = require("./routers/story.js");
var mongoose = require("mongoose");
var data = require("../react-client/dummy_data");
var data2 = require("../seed_data");

var app = express();

mongoose.connect("mongodb://localhost/hackednews");

app.use(bodyParser.json());

app.use(express.static(__dirname + "/../react-client/dist"));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

//app.use("/api/story", storyRouter);
app.get("/stories", (req, res) => {
  console.log("iam here ");
  res.send({ data: data2 });
});

app.listen(8000, function() {
  console.log("listening on port 8000");
  //console.log(data);
});
