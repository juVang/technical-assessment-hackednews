var mongoose = require("mongoose");
var request = require("request");
var stories = require("./db/models/story");

mongoose.connect("mongodb://localhost/hackednews", function(err) {
  console.log("hi");
});

// In this file, build out a worker that will populate the database
// with the data you need from the HackerNews API

// Here is an example of getting the top 500 stories from the API
// and logging them to the console.
// You are not required to use this code (though you may).
var topStoriesURL = "https://hacker-news.firebaseio.com/v0/topstories.json";

var isJSONResponse = function(headers) {
  return headers["content-type"].includes("json");
};

var getJSONFromHackerNews = function(url, callback) {
  request.get(url, function(err, response, body) {
    var data = null;
    if (err) {
      callback(err, null);
    } else if (!isJSONResponse(response.headers)) {
      callback(new Error("Response did not contain JSON data."), null);
    } else {
      data = JSON.parse(body);
      callback(null, data);
    }
  });
};

getJSONFromHackerNews(topStoriesURL, function(err, data) {
  var arrOfStories = [];
  if (err) {
    console.log("errorAcured");
  } else {
    var url;
    for (var i = 0; i <= 10; i++) {
      console.log(data[i]);
      url = `https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`;
      request.get(url, function(err, response, body) {
        if (err) {
          console.log(err);
        } else {
          var body2 = JSON.parse(body);
          var d = {
            id: parseInt(body2.id),
            by: body2.id,
            title: body2.title,
            score: body2.score,
            auther: body2.by
          };

          stories.insertOne(d);
        }
      });
    }
  }
  // mongoose.disconnect();
});
