var data = require('./seed_data.js');
//var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');

//mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function (data) {

  for (var i = 0; i < data.length; i++) {

    var story = {
      id: data[i]['id'],
      by: data[i]['by'],
      title: data[i]['title'],
      score: data[i]['score']
    }
    Stories.insertOne([story], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('story saved');
      }
    });
  }

  // story show be an instance of the Story model???

};

seedDb(data);
