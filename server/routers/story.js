var express = require('express');
var storyController = require('../../db/models/story.js');
var dummydata = require('../../react-client/dummy_data.js')
var router = express.Router();



/* GET ALL STORIES */
router.route('/')
  .get(function(req, res) {
     // TODO: Replace this with stories you've retrieved from the database
     const data = storyController.findAll(function(err, stories){
      //  var story =
      if (err) {
        console.log(err);
      } else {
       res.json(stories); //test (req.body)
       console.log(stories)
      }
    });
  });
      
//  console.log(dummydata)
  // .post(function(req, res) { //to save the new stories to database
  //   var body = 
  //   storyController.insertOne(req.body, callback) //calling the function that exists in db
  // })

// Here we use express's route params
router.route('/:id').get(function(req, res) { //get stories by ID
  var id = req.params.id;
  storyController.findOne(id, function(err, story){
    if (err) return console.log(err);
    res.json(story);
    // console.log(story)
  })
});

//saving fake datas to db (so I can show it after saving it)
router.route('/').post(function(req, res, next) {
  storyController.insertOne(req.body, function (err, story) {
    if (err) return next(err);
    res.json(story);
   
  });
});

module.exports = router;

