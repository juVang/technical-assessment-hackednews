var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var storyRouter = require('./routers/story.js'); 
var mongoose = require('mongoose'); //??

var app = express();

mongoose.connect('mongodb://localhost/hackednews', {
  useMongoClient: true,
  /* other options */
});// fixed the deprecated warning.



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//*put here any middleware that pretains to different router files

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.use('/api/stories', storyRouter); //anything after /api/stories will be using the router

app.listen(8000, function() {
  console.log('listening on port 8000');
});

//might wanna create router for each file later 