var express = require('express');
// var storyController = require('../../db/controllers/story.js');
var mongoose = require('mongoose');
var dbTas = require('../../db/models/story.js');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
     // TODO: Replace this with stories you've retrieved from the database
     dbTas.findAll(function(err, result){
       if(err) {
         console.log("ERROR");
       }
       //callback(result);
       var topTenStories = result.splice(0,10)
       console.log( 'Hiii DB:  '+ topTenStories);
       res.json(topTenStories);
       
     });
     
  });

// Here we use express's route params
router.route('/:id')
  .get(function(req, res) {

    // var data = storyController.findAll(function(err, result){
    //   callback(result);
    // });

    console.log("Tasneem");
    res.json([{data:"tasneem"}]);
    
  });

  
module.exports = router;
