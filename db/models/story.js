var mongoose = require("mongoose");

var storySchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  by: String,
  title: String,
  score: Number
});

var StoryModel = mongoose.model("Story", storySchema);

function save(stories, callback) {
  stories.forEach(story => {
    var st = new StoryModel({
      id: story.id,
      by: story.by.id,
      title: story.title,
      score: story.score
    });
    insertOne(st, callback);
  });
}
// findAll retrieves all stories
function findAll(callback) {
  StoryModel.find({}, callback);
}

// findOne will retrieve the story associated with the given id
function findOne(id, callback) {
  StoryModel.find({ id: id }, callback);
}

// insertOne inserts a story into the db
function insertOne(story, callback) {
  StoryModel.create(story, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
exports.save = save;
