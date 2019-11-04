var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
console.log("Connection succeeded.");
});
var Schema = mongoose.Schema;
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
var myTracker = new StoryModel({
  id:data.id,
  title:Data.title,
  score:Data.score
});
myTracker.save()
.then(item => {
  res.send("item saved to database");
})
.catch(err => {
  res.status(400).send("unable to save to database");
});
// findAll retrieves all stories
function findAll(callback) {
  StoryModel.find({}, callback);
}.then(stories => {
  response.json(stories)
})


// findOne will retrieve the story associated with the given id
function findOne(id, callback) {
  StoryModel.find({id: id}, callback);
}.then(stories)=>{
  result.forEach(story => {
  });
}

// insertOne inserts a story into the db
function insertOne(story, callback) {
  StoryModel.create(story, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;

