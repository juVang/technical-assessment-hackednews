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

var StoryModel = mongoose.model('Story', storySchema);

 function save(story){
   for (var i =0; i < story.length; i ++){
   var type= story[i].type;
   var unique= story[i].unique;
   var by= story[i].by;
   var title= story[i].title;
   var score=story[i].score;
   }
var st = new StoryModel({ 
  type : type ,
  unique : unique ,
  by : by ,
  title : title ,
  score : score
})

st.save();
}
 

function gettingData (){

}
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
exports.save= save;

