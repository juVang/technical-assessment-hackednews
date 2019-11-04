var express = require('express');
var path = require('path');
var storyController = require(path.join(__dirname, '../../db/models/story.js'));

var router = express.Router();

router.route('/')
  .get(function (req, res) {
    storyController.findTopTen(function (err, stories) {
      if (err) {
        console.log(err);
      }
      res.json(stories);
    })

  });

// Here we use express's route params
router.route('/:id')
  .get(function (req, res) { });

module.exports = router;
