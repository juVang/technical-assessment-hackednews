var express = require('express');
// var storyController = require('../../db/controllers/story.js');
var db = require('/Users/rbk-3/Desktop/technical-assessment-hackednews/seed.js')

var router = express.Router();

router.route('/')
  .get(function(req, res) {
     // TODO: Replace this with stories you've retrieved from the database
    console.log("i'm in the get method!");
    db.getStories((data) => {
      console.log("i'm fetching data!");
      res.send(data);
      // res.render('/Users/rbk-3/Desktop/technical-assessment-hackednews/react-client/src/index.jsx')
    });
    
     
  });
//whar was inside the get originally >>
// res.json([
//   {
//     author: 'ocdtrekkie',
//     title: 'Switch – New Video Game System [video]',
//     score: 536
//   },
//   {
//     author: 'mhb',
//     title: 'Video Games Are Changing the Way Soccer Is Played',
//     score: 100
//   }
// ]);



// Here we use express's route params
router.route('/:id')
  .get(function(req, res) {});

module.exports = router;
