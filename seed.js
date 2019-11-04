var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');
var data1 = require('./react-client/dummy_data.js');

mongoose.connect('mongodb://localhost/hackednews');



// var storySchema = new mongoose.Schema({
//   authorInfo: {about: String,
//                id: String,
//                karma: Number
//   },
//   storyId: Number,
//   title: String,
//   score: Number
// })

var storySchema = new mongoose.Schema({
  aboutAuthor: String,
  authorId: String,
  karma: Number,
  storyId: Number,
  title: String,
  score: Number
})

var Story = mongoose.model("story", storySchema);

var seedDb = function(data) {
  //console.log(data)
  for(var i = 0; i < data.length; i++) {
    var st = new Story ({
      aboutAuthor: data[i]['by']['about'],
      authorId: data[i]['by']['id'],
      karma: data[i]['by']['karma'],
      storyId: data[i]['id'],
      title: data[i]['title'],
      score: data[i]['score']
    })
    st.save();
  }
  
  console.log('saved')
  // your code here!
  //data.save();
};

seedDb(data1);
