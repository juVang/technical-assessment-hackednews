// var data = require('./seed_data.js');
var data = require('./react-client/dummy_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');
var StoryModel = Stories.StoryModel;

mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function(data) {
  console.log('/////////// ', data);
  for (var i = 0; i < data.length; i++) {
    let story = new StoryModel({
      by: data[i].by,
      id: data[i].id,
      title: data[i].title,
      score: data[i].score
    })
    
    story.save((err, story) => {
      if (err) {
        console.log("BIG FAT ERR");
      } else {
        console.log("data saved in db >>>>> ", story);
      }
    });
    // console.log("data saved in db >>>>> ", story);
  }
};
// seedDb(data);




// const someschema = mongoose.Schema({
//   by: {type: Object, unique: true, properties:{
//     about: String,
//     created: Number,
//     id: String,
//     karma: Number,
//     submitted: [[Number]]
//   }},
//   descendants: Number,
//   id: {type: Number, unique: true},
//   kids: [[Number]],
//   score: Number,
//   time: Number,
//   title: String,
//   type: String,
//   url: String
// });
// Schema.Types.Array

// var Something = mongoose.model('Something', someschema);


// var seedDb = function(data) {
//   for (var i = 0; i < data.length; i++) {
//     let sth = new Something({
//       by: {
//         about: data.by.about,
//         created: data.by.created,
//         id: data.by.id,
//         karma: data.by.karma,
//         submitted: data.by.submitted
//       },
//       descendants: data.descendants,
//       id: data.id,
//       kids: data.kids,
//       score: data.score,
//       time: data.time,
//       title: data.title,
//       type: data.type,
//       url: data.url
//     })
//     console.log('/////////// ', sth);
//   }
  
// };


// seedDb(data);






var getStories = function(callback) {
  var query = StoryModel.find({});
  query.exec((err, stories) => {
    if (err) {
      console.log("err in fetching data from db");
    } else {
      console.log("data fetched from db");
      callback(stories);
    }
  })
}
// getStories()
exports.getStories = getStories;

