var data = require('./seed_data.js');
var mongoose = require('mongoose');
var Stories = require('./db/models/story.js');
var async = require('async');
var fs = require('fs');

var MongoClient = require('mongodb').MongoClient;

mongoose.connect('mongodb://localhost/hackednews');
var databaseURL = 'mongodb://localhost/hackednews';
var seedDb = function(data) {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    //element.save();
    console.log(element);
  }
};

seedDb(data);

// const itemsSeedDataRaw = fs.readFileSync(`${__dirname}/seed_data.js`, 'utf8');

// async.series([
//   function(callback) {  
//     MongoClient.connect(databaseURL, function(err, db) {
//       if(err) throw err;
//       db.dropDatabase(function(err, result) {
//         db.close(true, function(err, result) {
//           callback(null, 'SUCCESS - dropped database');
//         });
//       });
//     });
//   },

//   function(callback) {
//     mongoose.connect(databaseURL);
//     mongoose.connection.on('connected', function(){
//       console.log('db connected via mongoose');
//       callback(null, 'SUCCESS - Connected to mongodb');
//     });
//   },

//   function(callback) {

//     var stories = [];
//     var testCount = 20;
//     for (i = 0; i < testCount; i++) {

//       var story = new Story({
//         id:' ',
//         by: ' ',
//         title: ' ',
//         score: ' '
//       });
//       // Add newly create User model to 'stories' array
//       stories.push(story);
//     }
    
//     console.log("Populating database with %s stories", stories.length);

    
//     // Use 'async.eachSeries' to loop through the 'users' array to make 
//     // sure each asnychronous call to save the user into the database
//     // completes before moving to the next User model item in the array
//     async.eachSeries(
      
//       stories, function(story, storySavedCallBack){
//         story.save(function(err) {
//           if(err) {
//             console.dir(err);
//           }
//           console.log("Saving story #%s out of %s", story.name, testCount);
//           storySavedCallBack();
//         });

//       },
 
//       function(err){        
//         if (err) console.dir(err);      
//         console.log("Finished aysnc.each in seeding db")
//         callback(null, 'SUCCESS - Seed database');
//       }
//     );

//   }
// ],

// // This function executes when everything above is done
// function(err, results){

//   console.log("\n\n--- Database seed progam completed ---");
  
//   if(err) {
//     console.log("Errors = ");
//     console.dir(errors)
//   } else {
//     console.log("Results = ");
//     console.log(results);
//   }

//   console.log("\n\n--- Exiting database seed progam ---");
//   // Exit the process to get back to terrminal console 
//   process.exit(0);
// });
