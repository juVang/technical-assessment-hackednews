var express = require('express');
var storyController = require('../../db/models/story.js');
var Stroy = require('../../seed.js')

var router = express.Router();

router.route('/')
  .get(function(req,res){
    res.send('Hiiii')
    });
  
     // TODO: Replace this with stories you've retrieved from the database
    //  storyController.findAll(function(err, stories){
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(stories)
    //     res.json(stories)
    //   }
    // })

    // res.json(storyController.findAll(function(err, stories){
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       console.log(stories)
    //       res.json(stories)
    //     }
    //     })
    //   )


    //  res.json([
    //    {
    //      author: 'ocdtrekkie',
    //      title: 'Switch – New Video Game System [video]',
    //      score: 536
    //    },
    //    {
    //      author: 'mhb',
    //      title: 'Video Games Are Changing the Way Soccer Is Played',
    //      score: 100
    //    }
    //  ]);


// Here we use express's route params
router.route('/:id')
  .get(function(req, res) {
    let id = req.params.id;
    Story.findById(authorId, function(err, story) {
        res.json(story);
    });
  });

module.exports = router;
