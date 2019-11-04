//var mongoose = require('mongoose');
var request = require('request');
var path = require('path');
var db = require(path.join(__dirname, './db/models/story.js'));
//mongoose.connect('mongodb://localhost/hackednews');
// In this file, build out a worker that will populate the database
// with the data you need from the HackerNews API


// Here is an example of getting the top 500 stories from the API
// and logging them to the console.
// You are not required to use this code (though you may).
var topStoriesURL = 'https://hacker-news.firebaseio.com/v0/topstories.json';

var isJSONResponse = function (headers) {
  return headers['content-type'].includes('json');
};

var getJSONFromHackerNews = function (url, callback) {
  request.get(url, function (err, response, body) {
    var data = null;
    if (err) {
      callback(err, null);
    } else if (!isJSONResponse(response.headers)) {
      callback(new Error('Response did not contain JSON data.'), null);
    } else {
      data = JSON.parse(body);
      callback(null, data);
    }
  });
};

var saveToDb = function (data) {

  for (var i = 0; i < data.length; i++) {
    getItemFromHackerNewsById(data[i], function (err, result) {
      getUserFromHackerNewsById(result['by'], function (err, user) {
        if (err) {
          console.log(err);
        } else {
          var story = {
            id: result['id'],
            by: user,
            title: result['title'],
            score: result['score']
          }
          db.insertOne([story], function (err, result) {
            if (err) {
              console.log(err);
            } else {
              console.log('story saved');
            }
          });
        }
      });

    });

  }


};
var getUserFromHackerNewsById = function (id, callback) {
  var url = "https://hacker-news.firebaseio.com/v0/user/" + id + ".json";
  request.get(url, function (err, response, body) {
    var data = null;
    if (err) {
      callback(err, null);
    } else if (!isJSONResponse(response.headers)) {
      callback(new Error('Response did not contain JSON data.'), null);
    } else {

      data = JSON.parse(body);

      callback(null, data);
    }
  });
}
var getItemFromHackerNewsById = function (id, callback) {
  var url = "https://hacker-news.firebaseio.com/v0/item/" + id + ".json"
  request.get(url, function (err, response, body) {
    var data = null;
    if (err) {
      callback(err, null);
    } else if (!isJSONResponse(response.headers)) {
      callback(new Error('Response did not contain JSON data.'), null);
    } else {

      data = JSON.parse(body);

      callback(null, data);
    }
  });
}
getJSONFromHackerNews(topStoriesURL, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    // save to database
    var topTen = data.slice(0, 10);
    saveToDb(topTen);
  }
});
