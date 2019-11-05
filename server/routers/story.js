var express = require('express');
var storyController = require('../../db/models/story.js');

var router = express.Router();

router.route('/')
  .get(function(req, res) {
     // TODO: Replace this with stories you've retrieved from the database
     var a = res.json([
       {
         author: 'ocdtrekkie',
         title: 'Switch – New Video Game System [video]',
         score: 536
       },
       {
         author: 'mhb',
         title: 'Video Games Are Changing the Way Soccer Is Played',
         score: 100
       }
     ]);
     res.send(a);
     console.log("hiii");
     
  });
  router.get('/', (req, res) => {
    db.findAll(data) ;
    res.send('Hello World');
 })
// Here we use express's route params
router.route('/:id')
  .get(function(req, res) {
    var data = db.findOne(data);
    res.send(data);
  });

  router.use("/:id",function(res,req){
    res.end();
  })


module.exports = router;
