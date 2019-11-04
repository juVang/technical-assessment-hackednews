var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');

mongoose.connect('mongodb://localhost/hackednews', {
  useMongoClient: true,
  /* other options */
});// fixed the deprecated warning.

var seedDb = function(data) {

  data.forEach(element => {
    //element or model?
    //we want to save specific things based on our schema

    // var newStory = new Stories.StoryModel({
    //   id: element.id,
    //   by: element.by,
    //   title: element.title,
    //   score: element.score
    // })    

    var newStory = {
      id: element.id,
      by: element.by.id,
      title: element.title,
      score: element.score
    }
    console.log(newStory);

    Stories.insertOne(newStory, function(err, result) {
      if(err) {
        console.log('Failed to save to Database', err);
      }
      console.log('result is: ', result);    
 
    }); 
  });
  
};

seedDb(data);
