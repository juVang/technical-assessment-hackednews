var express = require("express");
var storyController = require("../../db/models/story.js");
var github = require("../../server/routers/story.js");
var router = express.Router();
var accesstoken = "d2c9b79e1412dd909526945b89daff6888af5d71";

router.route("/").get(option, function(req, res) {
  //TODO: Replace this with stories you've retrieved from the database
  var option = {
    URl: "https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty",
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": ""
    }
  };
  if (err) {
    callback(err, nul);
  }
  accesstoken.getusers(),
    res.json([
      {
        author: data.by,
        title: data.title,
        score: data.score
      }
    ]);
});

// Requiring fs module in which
// readFile function is defined.
const fs = require("fs");

fs.readFile("Input.txt", (err, data) => {
  if (err) throw err;

  console.log(data.toString());
});

// Here we use express's route params
router.route("/:id").get(function(req, res) {
  var option = {
    URl: "https://news.ycombinator.com/",
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": ""
    }
  };
  var Alldata =save.save.schemaa();
  getstories(Alldata)=>{
    this.by = by,
     this.title = title, 
     this.score = score;
    router.route("/:id").post("/story", function(req, res) {
      return  getusers(data).find({});
      .sort('by')
      .limit(10)
    });
  getAuthors(Alldata)=>{
    router.route("/:id").post("/story", function(req, res) {
    return  getusers(data).find({});
      .sort('karma')
      .limit(10)
    });
    getWorkers(Alldata)=>{
      return router.route("/:id").post("/story", function(req, res) {
        getusers(data).find({});
        .sort('id')
        .limit(10)
      });

  };


  }
  
 
});

router.route("/").post("/stories", (req, res) => {
  var id = req.body;
  const options = {
    method: "POST",
    uri:
      "https://hacker-news.firebaseio.com/v0/item/" + id + ".json?print=pretty",
    qs: {
      access_token: "d2c9b79e1412dd909526945b89daff6888af5d71"
    }
  };
  request(options).then(data => {
    const parsedstory = JSON.parse(data).data;
    res.json(parsedstory);
  });
});


module.exports = router;
