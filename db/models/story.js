var mongoose = require("mongoose");
/** 
  *? this file to build your scema and to but some method inside it 
like 
  *!  exports.findOne = findOne;
  *!  exports.findAll = findAll;
  *!  exports.insertOne = insertOne;

*/
var storySchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  by: String,
  title: String,
  score: Number
});
/**
 *? we have to make new schema for the author
 */
var authorSchema = mongoose.Schema({
  id: String,
  about: String,
  karma: Number
});

var StoryModel = mongoose.model("Story", storySchema);
var AuthorModel = mongoose.model("Author", authorSchema);

// findAll retrieves all stories
function findAll(callback) {
  StoryModel.find({}, "by title score", callback)
    .sort({ score: -1 })
    .limit(10);
}

// findOne will retrieve the story associated with the given id
function findOne(id, callback) {
  StoryModel.find({ id: id }, callback);
}

// insertOne inserts a story into the db
function insertOne(story, callback) {
  StoryModel.create(story, callback);
}

function insertOneAuth(story, callback) {
  AuthorModel.create(story, callback);
}

function findAllAuth(callback) {
  AuthorModel.find({}, "id about karma", callback)
    .sort({ score: -1 })
    .limit(10);
}
exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
exports.findAllAuth = findAllAuth;
exports.insertOneAuth = insertOneAuth;
