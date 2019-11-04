var express = require("express");
var bodyParser = require("body-parser");
var storyRouter = require("./routers/story.js");
var mongoose = require("mongoose");

var app = express();

// mongoose.connect("mongodb://localhost/hackednews", {
//   useMongoClient: true
// });
mongoose.connect("mongodb://localhost:27017/hackednews", {
  useNewUrlParser: true
});
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("Database Connected ..");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../react-client/dist"));

app.use("/api/story", storyRouter);

app.listen(8080, function() {
  console.log("listening on port 8000");
});
