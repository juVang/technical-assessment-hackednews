var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');
//var data1 = require('./react-client/dummy_data.js');

mongoose.connect('mongodb://localhost/hackednews');



var storySchema = new mongoose.Schema({
  aboutAuthor: String,
  // created: Number,
  authorId: String,
  karma: Number
  // descendants: Number,
  // storyId: Number,
  // title: String,
  // type: String,
  // score: Number,
  // url: String
})

var Story = mongoose.model("story", storySchema);

var seedDb = function(data) {
  //console.log(data)
  for(var i = 0; i < data.length; i++) {
    var st = new Story ({
      aboutAuthor: data[i]['by']['about'],
      // created: data[i]['by']['created'],
       authorId: data[i]['by']['id'],
       karma: data[i]['by']['karma']
      // descendants: data[i]['descendants'],
      // storyId: data[i]['id'],
      // title: data[i]['title'],
      // type: data[i]['type'],
      // score: data[i]['score'],
      // url: data[i]['url']
    })
    st.save();
  }
  
  console.log('saved')
  // your code here!
  //data.save();
};

seedDb(data);
