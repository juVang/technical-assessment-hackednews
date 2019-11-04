var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  by: String,
  title: String,
  score: Number,
  karma: String,
  about: String
});

var StoryModel = mongoose.model('Story', storySchema);

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

function findAuthors(callback) {
  StoryModel.find().sort({karma}).limit(10, callback);
}

function saveStory(story) {
  var id = story.id;
  var by = story.by.id;
  var title = story.title;
  var score = story.score;
  var karma = story.by.karma;
  var about = story.by.about; 
  console.log(by);
  var Story = new StoryModel({'id': id, 'by': by, 'title' : title, 'score' : score, 'karma' : karma, 'about' : about});
  //StoryModel.remove({});
  Story.save(function(err, myStory){
    if(err) return console.log("err", err);
    console.log(myStory, " saved to Stories Collection!!");
  });
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
exports.saveStory = saveStory;
exports.findAuthors = findAuthors;

