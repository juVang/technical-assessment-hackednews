var mongoose = require("mongoose");
var request = require("request");
var Stories = require("./db/models/story.js");
const axios = require("axios");

const { promisify } = require("util");

var StoryModel = Stories.StoryModel;
var Authors = require("./db/models/authors.js");
var AuthorModel = Authors.AuthorModel;

mongoose.connect("mongodb://localhost/hackednews");
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

function getNewsElement(id, callback) {
  var newsElementUrl = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
  request.get(newsElementUrl, function(err, response, body) {
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
}
const getNewsElementAsync = promisify(getNewsElement);

async function getTopTen(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    await getNewsElement(arr[i], function(err, res) {
      if (err) {
        throw err;
      } else {
        console.log(res); //I stucked here for 5 hours! thanks life <3
      }
    });
  }
  return result;
}
//bullshit code -_-
// function getTopTen(arr) {
//   arr.forEach(e => {
//     getNewsElementAsync(e).then(res => {
//       var story = new StoryModel({
//         id: res["id"],
//         by: res["by"],
//         title: res["title"],
//         score: res["score"]
//       });
//       story.save(function(err, result) {
//         if (err) {
//           throw err;
//         } else {
//           console.log("done!");
//         }
//       });
//     });
//   });
// }
// const getTopTen = async arr => {
//   console.log("Start");

//   const newsElement = await getNewsElementAsync(arr).then(newsElement => {
//     var story = new StoryModel({
//       id: newsElement["id"],
//       by: newsElement["by"],
//       title: newsElement["title"],
//       score: newsElement["score"]
//     });

//     story.save(function(err, result) {
//       if (err) {
//         throw err;
//       } else {
//         console.log(result);
//       }
//     });
//   });
// };

getJSONFromHackerNews(topStoriesURL, function(err, data) {
  if (err) {
    console.log(err, "err, expect to be null");
  } else {
    getTopTen(data.slice(0, 10));
    mongoose.disconnect();
  }
});
