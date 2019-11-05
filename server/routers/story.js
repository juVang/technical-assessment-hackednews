var express = require('express');
// var storyController = require('../../db/controllers/story.js');
// var fs= require ('fs')//
var router = express.Router();
var data= require ('../../seed_data.js')
var db = require ("../../db/models/story.js")
// var dataArr=[];

router.route('/')
  .get(function(req, res) {
   for(var i=0 ; i< data.length ; i++){
   insertOne(Story.by)
   }
  //   fs.readFile(data,(err,data)=>{
  //     if(err) throw err;
  //     res.send(console.log("recived"))
  // })
});
    
     // TODO: Replace this with stories you've retrieved from the database
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
  .get(function(req, res) { console.log("server")});

module.exports = router;
