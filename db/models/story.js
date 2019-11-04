var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hackednews');
mongoose.connection.once('open', function () {
  console.log('connected to mongo');
})
var authorSchema = mongoose.Schema({
  about: String,
  created: Number,
  id: String,
  karma: Number,
  submitted: [Number]
});
var storySchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  by: authorSchema,
  title: String,
  score: Number,
  descendants: Number
});

var StoryModel = mongoose.model('Story', storySchema);

// findAll retrieves all stories
function findAll(callback) {
  StoryModel.find({}, callback);
}
// findTopTen retrieves all stories
function findTopTen(callback) {
  // try this
  StoryModel.find({}).sort({ 'score': -1 }).limit(10).exec(function (err, stories) {
    if (err) {
      callback(err, null);
    }
    callback(null, stories);
  });
}
function findTopTenAuthors(callback) {
  // try this
  StoryModel.find({}).sort({ 'by.karma': -1 }).limit(10).exec(function (err, authors) {
    if (err) {
      callback(err, null);
    }

    callback(null, authors);
  });
}

// findOne will retrieve the story associated with the given id
function findOne(id, callback) {
  StoryModel.find({ id: id }, callback);
}

// insertOne inserts a story into the db
function insertOne(story, callback) {
  StoryModel.create(story, callback);
}

function searchStories(query, callback) {
  // try this
  StoryModel.find({ 'by.id': query }).exec(function (err, stories) {
    if (err) {
      callback(err, null);
    }

    callback(null, stories);
  });
}
exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
exports.findTopTen = findTopTen;
exports.findTopTenAuthors = findTopTenAuthors;
exports.searchStories = searchStories;


