var express = require('express');
var router = express.Router();
var auth = require('../../db/models/auth')
var bodyParser = require('body-parser');
//var storyController = require('../../db/controllers/story.js');
//var dummyData = require('../../react-client/dummy_data');
router.use(bodyParser.urlencoded({ extended: false }));

///---------------get all data from db for all authers----
router.route('/auth')
  .get(function(req, res) {
    var authData = auth.findAll();
     // TODO: Replace this with auth you've retrieved from the database
     res.json(authData);
  });
  
// Here we use express's route params
router.route('/auth/:id')
  .get(function(req, res) {
     
  });

module.exports = router;