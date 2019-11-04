var mongoose = require("mongoose");

var storySchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  by: String,
  title: String,
  score: Number,
  auther: String
});

var StoryModel = mongoose.model("Story", storySchema);

// findAll retrieves all stories
function findAll(callback) {
  StoryModel.find({}, (err, data) => {
    if (err) {
      console.log("err", err);
    } else {
      callback(data);
    }
  });
}

// findOne will retrieve the story associated with the given id
function findOne(id, callback) {
  StoryModel.find({ id: id }, callback);
}

// insertOne inserts a story into the db
function insertOne(story) {
  console.log("am in ");
  var mymodel = new StoryModel(story);
  mymodel.save((err, resul) => {
    if (err) {
      console.log("err");
    } else {
      console.log("don");
    }
  });
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
