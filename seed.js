var data = require('./seed_data.js');
var mongoose = require('mongoose');
var stories = require('./db/models/story.js');
const fs = require('fs');
const dataStreamFromFile = fs.createReadStream(`${__dirname}/seed_data.js`);


mongoose.connect('mongodb://localhost/hackednews');

var seedDb = function(data) {
  var by_s = stories.storySchema.by;
  var score_s = stories.storySchema.score;
  var title_s = stories.storySchema.title;
  
  fs.readFile('seed_data.json', (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data))
    let names = JSON.parse(data);
    for(var i= 0; i< names.length; i++){
        var name = names[i].names[by].id;
        var score =names[i].score;
        var title = names[i].title;

        var record = {
           by_s:name,
           score_s: score,
           title_s:title
        }
        stories.insertOne(record,function(err,result){
          if(err){
            console.log("err")
          }
          else{
             console.log("sucess get the data")
          }
        })
    }    
});
};

seedDb(data);
