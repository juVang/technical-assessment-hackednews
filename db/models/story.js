
var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We are connedted to Database")
});

var storySchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  by: String,
  title: String,
  score: Number
});

var StoryModel = mongoose.model('Story', storySchema);

// var New1 = new Story({
//   // id : 125,
//   // by: "alaa",
//   // title: "aaa",
//   // score: 89
// });
function save1(data){
var news1 = new Story({
    id :data.id,
    by : data.by,
    title : data.title,
    score : data.score
   });
   Story.save(news1);
};
// new1.save(function(error){
//    console.log("You saved to database")
//  })


function findAll(callback) {
  StoryModel.find({}, callback);
}

// findOne will retrieve the story associated with the given id
function findOne(id, callback) {
  StoryModel.find({id: id}, callback);
}

// insertOne inserts a story into the db
function insertOne(story, callback) {
  for(var i = 0; i< story.length;i++){
      id = story[i].id,
      by = story[i].by,
      title = story[i].title,
      score = story[i].score
    }
    
  StoryModel.create(story, callback);
  console.log(story);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
