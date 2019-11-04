var express = require('express');
var storyDB = require('../../db/models/story.js');
var worker = require('../../worker.js');

var router = express.Router();
router.get('/data',function(req, res){
  console.log('Here we are')
  //here to get the api and save it, and then to return it to the  user
   
      worker.getTopStories(body =>{
        console.log(body)
         storyDB.save(JSON.parse(body))}
      );
    storyDB.findAll({});
 })

//  router.get('/authors',function(req, res){
//   console.log('Here we are')
//   //here to get the api and save it, and then to return it to the  user
   
//       worker.getTopStories(body =>{
//         console.log(body)
//          storyDB.save(JSON.parse(body))}
//       );
//     db.findAll({}).limit(10).exc(err,data =>{
//         console.log(data);
//     })
//  })

// router.route('/data').get(function(req, res) {
//   console.log('Here we are')
//   //here to get the api and save it, and then to return it to the  user
//     var url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
//       worker.getTopStories(url,(error, response, body =>{
//         storyDB.save(body)
//       }));
//     storyDB.findAll({}).limit(10).exc(err,data =>{
//         console.log(data);
//     })
//    });

//  router.get('/data',function(req, res)   {
//   console.log('Here we are')
//   //here to get the api and save it, and then to return it to the  user
//      var body =req.body;
//       worker.getTopStories(body=>{
//       //   if(err){
//       //     console.log("errrror")
//       //   }
//       //  else{ 
        
//          storyDB.save(body)}
//       );
//     storyDB.findAll({}).limit(10).exc(err,data =>{
//         console.log(data);
//     })
//  })
  
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
  .get(function(req, res) {});

module.exports = router;
