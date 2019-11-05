var express = require('express');
var storyController = require('../../db/controllers/story.js');


var router = express.Router();

router.route('/')
  .get(function(req, res) {
     // TODO: Replace this with stories you've retrieved from the database
      db.findall(function(err,result){
        if(err){
          console.log("error",data)
        }else{
          res.json(result)
        }
      })
    

var stories = storyController.allStories();
 res.json(stories);

// Here we use express's route params
router.route('/:id')
  .get(function(req, res) {});
  })
module.exports = router;
