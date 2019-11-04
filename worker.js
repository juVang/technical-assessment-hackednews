var mongoose = require("mongoose");
var request = require("request");
var Stories = require("./db/models/story.js");

mongoose.connect("mongodb://localhost/hackednews");
// In this file, build out a worker that will populate the database
// with the data you need from the HackerNews API

// Here is an example of getting the top 500 stories from the API
// and logging them to the console.
// You are not required to use this code (though you may).
var topStoriesURL = "https://hacker-news.firebaseio.com/v0/topstories.json";
// "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy='$key'&limitToFirst=10";

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
    data.forEach(id => {
        var story_url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
        request.get(story_url, function(err, response, body) {
            if (err) {} else if (!isJSONResponse(response.headers)) {} else {
                data = JSON.parse(body);
                saveDb(data);
                getAutor(data);
            }
        });
    });
    // mongoose.disconnect();
});

var getAutor = function(user) {
    var author_url = `https://hacker-news.firebaseio.com/v0/user/${user.by}.json?print=pretty`;
    request.get(author_url, function(err, response, body) {
        var data = null;
        if (err) {} else if (!isJSONResponse(response.headers)) {} else {
            data = JSON.parse(body);
            saveDb(null, data);
        }
    });
};

var saveDb = function(stories, authors) {
    if (stories) {
        var obj = {
            id: stories.id,
            by: stories.by,
            title: stories.title,
            score: stories.score
        };
        Stories.insertOne(obj, function(err, res) {
            console.log(err);
            console.log(res);
        });
    } else {
        var obj = {
            id: authors.created,
            name: authors.id,
            about: authors.about,
            karma: authors.karma
        };
        console.log(obj);

        Stories.insertOneAuthor(obj, function(err, res) {
            console.log(err);
        });
    }
};

// };

// getJSONFromHackerNews(topStoriesURL, function(err, data) {
//   console.log(err, "err, expect to be null");
//   console.log(data, "data, expect to be ids for top 500 stories");
//   mongoose.disconnect();
// });