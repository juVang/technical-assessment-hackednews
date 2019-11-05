var mongoose = require("mongoose");
var request = require("request");
var db = require("./db/models/story.js");

mongoose.connect("mongodb://localhost/hackednews");
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

//new One

var getStory = function(storyID, callback) {
  var option = {
    url: `https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`,
    data: storyID,
    headers: {
      "content-type": "application/json",
      "accept-charset": "utf8"
    }
  };

  request.get(option, function(err, res, body) {
    var data = JSON.parse(body);
    console.log("Story is ", data);
    db.insertOne(data, function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log(data.by);
        callback(data.by);
      }
    });
  });
};

var getAutherInfo = function(authorID) {
  var option = {
    url: `https://hacker-news.firebaseio.com/v0/user/${authorID}.json?print=pretty`,
    data: authorID,
    headers: {
      "content-type": "application/json",
      "accept-charset": "utf8"
    }
  };

  request.get(option, function(err, res, body) {
    var data = JSON.parse(body);
    db.insertOneAuth(data, function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        console.log("Author Saver!");
      }
    });
  });
};

getJSONFromHackerNews(topStoriesURL, function(err, data) {
  console.log(err, "err, expect to be null");
  console.log(data, "data, expect to be ids for top 500 stories");
  // mongoose.disconnect();
  data.forEach(storyID => {
    getStory(storyID, function(author) {
      getAutherInfo(author);
    });
  });
});
