var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function(data) {
  // your code here!
  //

  for(var i = 0 ; i < data.length; i++){
    var obj = {
        id:data[i].by.id,
        name:data[i].by.name,
        karma:data[i].by.karma,
        about:data[i].by.about
      // -_________________-

    }
    Stories.insertOne(obj,callback);
  }
};

seedDb(data);
