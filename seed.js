var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');
var Auths = require('./db/models/auth.js');

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function(data) {
  //----iserting stories----
  for(var i=0; i<data.length; i++){
    Stories.insertOne(data[i]);
  }
  //----iserting auths----
  for(var i=0; i<data.length; i++){
    Auths.insertOne(data[i]);
  }
};
seedDb(data);
