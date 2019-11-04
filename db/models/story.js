var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/story", { useNewUrlParser: true });

var storySchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  by: { type: String },
  title: { type: String },
  score: { type: Number }
});

var authorsSchema = mongoose.Schema({
  id: { String, unique: true },
  karma: Number,
  about: String
});

var AuthorsModel = mongoose.model("AuthorsModel", authorsSchema);
let save = data => {
  for (i = 0; i < data.length; i++) {
    var by = data.by;
    var title = data.title;
    var score = data.score;
    let schemaa = new storySchema({
      by: data[i].by,
      title: data[i].title,
      score: data[i].score
    });
    schemaa.save();
  }
};

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
exports.StoryModel = StoryModel;
module.exports.save = save;
exports.AuthorsModel = AuthorsModel;
