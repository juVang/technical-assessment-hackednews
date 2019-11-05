var express = require('express');
// var storyController = require('../../db/controllers/story.js');
var Stories = require('/Users/rbk-30/Desktop/Mahmoud Diab/technical-assessment-hackednews/db/models/story.js'); 
var router = express.Router();

router.route('/')
  .get(function(req, res) {
     // TODO: Replace this with stories you've retrieved from the database
     //get from db
     var received;
     Stories.findAll(function(err, result) {
       if(err) {
         console.log('Could not get data from DB', err);
       }
      //  console.log(result); //use this result
      received = result;
     })

     res.json(result);
  });

// Here we use express's route params
//https://stackoverflow.com/questions/32589927/node-express-router-route-vs-express-route

// router.route('/get')
//   .get(function(req, res) {
//     console.log({type: 'GET'});
//   });


router.route('/:id')
  .delete(function(req, res) {
    res.send({type: 'Delete'});
  });

router.route('/:id')
  .put(function(req, res) {
    res.send({type: 'PUT'});
});

module.exports = router;
