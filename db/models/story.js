var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  by: String,
  title: String,
  score: Number
});
var authorSchema = mongoose.Schema({
  id: {
    name: String;
    karma: Number;
    about: string
  }
})

var StoryModel = mongoose.model('Story', storySchema);
var authorSchema = mongoose.model('author', authorSchema);

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

