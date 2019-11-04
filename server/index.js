var express = require('express');
var bodyParser = require('body-parser');

var storyRouter = require('./routers/story.js');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
import StoryModel from '../db/models/story.js';
import { callbackify } from 'util';
var app = express();

mongoose.connect('mongodb://localhost/hackednews', { useNewUrlParser: true});
var db = mongoose.connection;
app.use(bodyParser.json());

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.use('/api/story', storyRouter);

//in the end i have to delete this and deal with route
app.get('/',(req,res)=>{
  
  db.StoryModel.find({},(err,result)=>{
    if(err){
      callback(err,null)
    }else{
      callback(result)
    }
  })
  .limit(10)
  .sort("id")
  .exec((err, data) => {
    res.send(data);
  });
  res.render('index.jsx')
  res.send("server is working");
})
app.get('/:id',(req, res)=>{
  db.StoryModel.find({id : req.param.id})
  req.send('id page')
});
app.get('/search',(req,res)=>{

})
app.get('/toptenauther',(req,res)=>{
  
  db.StoryModel.find({},(err,result)=>{
    if(err){
      callback(err,null)
    }else{
      callback(result)
    }
  })
  .limit(10)
  .sort("id")
  .exec((err, data) => {
    res.send(data);
  });
  res.render('index.jsx')
  res.send("server is working");
})



app.listen(8000, function() {
  console.log('listening on port 8000');
});
