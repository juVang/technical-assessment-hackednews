var express = require('express');
var router = express.Router();
var auth = require('../../db/models/auth')
var bodyParser = require('body-parser');
//var storyController = require('../../db/controllers/story.js');
//var dummyData = require('../../react-client/dummy_data');
router.use(bodyParser.urlencoded({ extended: false }));


//-------------git the data from db after res the name--------        
router.route('/auth')
  .post(function(req, res) {
    var name =req.body
    var authData = auth.findSearch(name);
     // TODO: Replace this with auth you've retrieved from the database
     res.json(authData);
  });
  


module.exports = router;