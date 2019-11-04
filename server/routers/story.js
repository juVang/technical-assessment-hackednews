var express = require('express');
var path = require('path');
var storyController = require(path.join(__dirname, '../../db/models/story.js'));
var bodyParser = require('body-parser');

var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.route('/')
  .get(function (req, res) {
    storyController.findTopTen(function (err, stories) {
      if (err) {
        console.log(err);
      }
      res.json(stories);
    })

  });

router.route('/authors')
  .get(function (req, res) {
    storyController.findTopTenAuthors(function (err, authors) {
      if (err) {
        console.log(err);
      }
      res.json(authors);
    })

  });
router.route('/searchStories').post(function (req, res) {

  var query = req.body.query;
  storyController.searchStories(query, function (err, stories) {
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
