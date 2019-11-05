var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function(data) {
  // your code here!
  for(var i = 0; i < data.length ; i++){
    var id = data[i].id;
    var by = data[i].by.id;
    var title = data[i].title;
    var score = data[i].score;

    var story = {
      id :id,
      by :by,
      title :title, 
      score : score
    }

    Stories.insertOne(story, function(err, res) {
      if (err) throw err;
      console.log('record:  ' + res );
    });

  }

};

seedDb(data);
