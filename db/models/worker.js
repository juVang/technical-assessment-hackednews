var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/workrs", { useNewUrlParser: true });

var workerSchema = mongoose.Schema({
  topStories: {
    id: { type: Number, unique: true },
    by: { type: String },
    title: { type: Number },
    score: { type: Number }
  },
  topAuthors: {
    id: {
      type: Number,
      unique: true
    }
  },
  karma: { type: Number },
  about: { type: Number }
});

var WorkerModel = mongoose.model("WorkerModel", workerSchema);
let save = data => {
  for (i = 0; i < data.length; i++) {
    var by = data.by;
    var title = data.title;
    var score = data.score;
    let schemaa1 = new storySchema({
      by: data[i].by,
      title: data[i].title,
      score: data[i].score
    });
    schemaa1.save();
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
