var express = require('express');
var db = require('../../db/models/story.js');
//var workerAPI = require('../../worker.js');

var router = express.Router();

router.route('/')
  .get(function(req, res) {
     // TODO: Replace this with stories you've retrieved from the database
     db.findAll(function(err, result){
        if(err) {
          console.log("db fetching err", err);
        } else {
          res.json(result);
          //console.log("db data" ,result);
        }
     });    
  });

// Here we use express's route params
router.route('/:id')
  .get(function(req, res) {});

router.route('/:author')
  .get(function(req, res) {
    var author = req.params.author;
    console.log(author);
    var authorStories = db.findStoriesByAuthor(author);
  });

  // router.route('/:author')
  // .post(function(req, res) {
  //   var author = req.body.name;
  //   console.log(author);
  //   var authorStories = db.findStoriesByAuthor(author);
  // });

module.exports = router;
