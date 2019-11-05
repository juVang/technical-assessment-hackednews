var data = require("./seed_data.js");
var mongoose = require("mongoose");
var Stories = require("./db/models/story.js");

mongoose.connect("mongodb://localhost/hackednews");
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", () => {
//   console.log("We are connected");
// });

/**  
  *! mayabe this one to save data inside the database we will see that after awhile 
  
*/
var seedDb = function(data) {
  // your code here!

  Stories.insertOne(data, function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      console.log(doc);
    }
  });
};

seedDb(data);
