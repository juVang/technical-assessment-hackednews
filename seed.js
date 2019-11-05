var data = require("./seed_data.js");
var mongoose = require("mongoose");
var Stories = require("./db/models/story.js");

mongoose.connect("mongodb://localhost/hackednews");
// by: String,
// title: String,
// score: Number
var seedDb = function(data) {
    // your code here!
    // data.forEach(item => {
    //     var obj = {
    //         id: item.id,
    //         by: item.by.id,
    //         title: item.title,
    //         score: item.score
    //     };
    //     Stories.insertOne(obj, function(err, res) {
    //         console.log(err);
    //     });
    // });

    data.forEach(item => {
        var obj = {
            id: item.by.created,
            name: item.by.id,
            about: item.by.about,
            karma: item.by.karma
        };
        Stories.insertOne(obj, function(err, res) {
            console.log(err);
        });
    });
};
// id: {
//   type: Number,
//   unique: true
// },
// name: String,
// about: String,
// karma: Number
// });
// seedDb(data);