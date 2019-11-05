// var express = require('express');
// var bodyParser = require('body-parser');
// var storyRouter = require('./routers/story.js');
// var mongoose = require('mongoose');
// var port = 8000;

// var app = express();

// app.get('/', (req, res) => {
//   res.send('Welcome to the express server');
// });

// mongoose.connect('mongodb://localhost/hackednews');

// app.use(bodyParser.json());

// // UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));
// // app.get('/',(req, res) => res.send('hello world!'))

// // UNCOMMENT FOR ANGULAR
// // app.use(express.static(__dirname + '/../angular-client'));
// // app.use(express.static(__dirname + '/../node_modules'));

// // app.use('/api/story', storyRouter);


// app.listen(port, (req, res) => {
//   console.log("Server started on port: " + port);
// });
// // const express = require('express')
// // const app = express()
// // const port = 3000

// // app.get('/', (req, res) => res.send('Hello World!'))

// // app.listen(port, () => console.log(`Example app listening on port ${port}!`))