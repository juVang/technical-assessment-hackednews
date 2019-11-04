var mongoose = require("mongoose");
var request = require("request");
var Stories = require("./db/models/story.js");
mongoose.connect("mongodb://localhost/hackednews");
// mongoose.connect("mongodb://localhost/hackednews", function() {
//   mongoose.connection.db.dropDatabase();
// });
var storyModel = Stories.StoryModel;

// In this file, build out a worker that will populate the database
// with the data you need from the HackerNews API

// Here is an example of getting the top 500 stories from the API
// and logging them to the console.
// You are not required to use this code (though you may).
// var topStoriesURL = 'https://hacker-news.firebaseio.com/v0/topstories.json';
var c = -1;
function getJSONFromHackerNews(callback) {
  var topTen;
  storyModel.find({}, function(err, result) {
    console.log(result.length);
    result.sort((a, b) => (a.score < b.score ? 1 : -1));
    topTen = result.slice(0, 10);
    // console.log(topTen);
    var updatedData = [];
    for (var i = 0; i < topTen.length; ++i) {
      request(
        "https://hacker-news.firebaseio.com/v0/item/" +
          topTen[i]["id"] +
          ".json",
        function(error, response, body) {
          ++c;
          topTen[c]["title"] = JSON.parse(body)["title"];
          topTen[c]["score"] = JSON.parse(body)["score"];
          storyModel.findOneAndUpdate(
            {
              id: topTen[c]["id"]
            },
            {
              $set: {
                title: JSON.parse(body)["title"],
                score: JSON.parse(body)["score"]
              }
            },
            function(err, result) {
              console.log(result);
            }
          );

          // updatedData.push(JSON.parse(body));
          // topTen[j]["score"] = updatedData[j]["score"];
          // console.log(topTen[j]["score"]);
          // console.log(updatedData[j]["score"]);
          // if (updatedData.length === 10) {
          //   for (var j = 0; j < updatedData.length; ++j) {
          //     topTen[j]["score"] = updatedData[j]["score"];
          //   }
          //   mongoose.connect("mongodb://localhost/hackednews", function() {
          //     mongoose.connection.db.dropDatabase();
          //   });
          //   callback(topTen.sort((a, b) => (a.score < b.score ? 1 : -1)));
          // }
        }
      );
    }
  });
}

getJSONFromHackerNews(function(data, karma) {
  // mongoose.connect("mongodb://localhost/hackednews");
  // console.log(data);
  // data.map(e => {
  //   var newRow = new storyModel({
  //     id: e.id,
  //     by: e.by.id,
  //     title: e.title,
  //     score: e.score,
  //     karma: e.by.karma,
  //     about: e.by.about
  //   });
  //   newRow.save(function(err, result) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log("saved");
  //     }
  //   });
  // });
});
