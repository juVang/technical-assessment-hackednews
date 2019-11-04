var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tichAssess', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("connected")});
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
      type: Number,
      unique: true
  },
  name: String,
  about: String,
  karma: Number
});

var StoryModel = mongoose.model('Story', storySchema);
var AuthorModel = mongoose.model("Author", authorSchema);

 
// findAll retrieves all stories
function findAll(callback) {
  StoryModel.find({}, callback);
}

// findOne will retrieve the story associated with the given id
function findOne(id, callback) {
  StoryModel.find({id: id}, callback);
}
//

// insertOne inserts a story into the db
function insertOne(story, callback) {
  StoryModel.create(story, callback);
}
function findTopTen(callback) {
  StoryModel.find({})
      .sort([
        ["score", -1]
      ])
      .limit(10)
      .exec(callback);
}
function findTopTenAuthor(callback) {
  AuthorModel.find({})
      .sort([
        ["karma", -1]
      ])
      .limit(10)
      .exec(callback);
}
function insertOneAuther(Author, callback){
  AuthorModel.create(story, callback)
}
function findAll(callback){
  AuthorModel.find({}, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
exports.StoryModel = StoryModel;
exports.insertOneAuther=insertOneAuther;
exports.AuthorModel=AuthorModel;
exports.findTopTenAuthor = findTopTenAuthor;
exports.findTopTen = findTopTen;

