var express = require('express');
var bodyParser = require('body-parser');
var storyRouter = require('./routers/story.js');
var mongoose = require('mongoose');
// var seed1= require('./seed.js');

var app = express();

mongoose.connect('mongodb://localhost/hackednews');

app.use(bodyParser.json());
var db = require('../db/models/story.js');
app.use('story',storyRouter);

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.use('/api/story', storyRouter);

app.get('/',function(req,res){
  db.findOne(data);
});

app.get("/story1",function(req,res){
  var data1= new Story(req.body);
  data1.save().then(data => {
    res.send("Data is save")
    //console.log("data saved")
  })
  .catch(err => {
    res.status(400).send("Cant save to Database");
  })
})

app.post('/'),function(req,res){
  res.findOne(data);
  console.log("dataaa is savaeedd ")
}



app.listen(8000, function() {
  console.log('listening on port 8000');
});
