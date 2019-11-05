var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var storyRouter = require(path.join(__dirname, '/routers/story.js'));
var mongoose = require('mongoose');

var app = express();


app.use(bodyParser.json());

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));

app.use('/api/stories', storyRouter);

app.listen(8000, function () {
  console.log('listening on port 8000');
});
