var express = require('express');
var bodyParser = require('body-parser');
var storyRouter = require('./routers/story.js');
var mongoose = require('mongoose');
var db= require('./../db/models/story.js');
var app = express();
mongoose.connect('mongodb://localhost/hackednews');
var worker =require('../worker.js');
// UNCOMMENT FOR REACT
 app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.use('/',storyRouter);

app.use('/api/story', storyRouter);
 
app.use('/data',storyRouter);


// app.get('/data',function(req, res){
//   console.log('Here we are')
//   //here to get the api and save it, and then to return it to the  user
//     var body =req.body;
//     console.log(body)
//       worker.getTopStories(body =>{
//          db.save(body)}
//       );
//     // db.findAll({}).limit(10).exc(err,data =>{
//     //     console.log(data);
//     // })
//  })


app.listen(8000, function() {
  console.log('listening on port 8000');
});
