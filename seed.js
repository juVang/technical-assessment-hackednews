var data = require('./seed_data.js');
var mongoose = require('mongoose');
var db1 = require('./db/models/story.js');
var dummy = require('./react-client/dummy_data')
mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function(data) {
  // your code here!

    var news1 = new Story({
      id :data.id,
      by : data.by,
      title : data.title,
      score : data.score
     });
    Stories.save(news1);

    for(var i = 0; i< data.length;i++){
      id = data[i].id,
      by = data[i].by,
      title = data[i].title,
      score = data[i].score
    }
    db1.insertOne(data);
};

seedDb(data);

exports.seedDb = seedDb;
