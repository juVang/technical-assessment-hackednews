var data = require('./seed_data.js');
//var seeder = require('mongoose-seed');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');
var fs = require('fs');

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function(data) {
  for(d in data){
   Stories.saveStory(data[d]);
  }    
  
};

seedDb(data);
