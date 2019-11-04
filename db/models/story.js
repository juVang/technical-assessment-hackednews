var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/hackednews');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("connection db successful");
});


var storySchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  by: String,
  title: String,
  score: Number
});
var StoryModel = mongoose.model('Story', storySchema);

var save = function(story){
   let story2 = new StoryModel({
      id:story.id,
      by:story.by,
      title:story.title,
      score:story.score
   })
   story2.save();
 }
 
// findAll retrieves all stories
function findAll(callback) {
  StoryModel.find({}, callback);
}

// findOne will retrieve the story associated with the given id
function findOne(id, callback) {
  StoryModel.find({id: id}, callback);
}

// insertOne inserts a story into the db
function insertOne(story, callback) {
  StoryModel.create(story, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
exports.save = save;

