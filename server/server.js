const express = require('express')
var mongoose = require('mongoose');
const app = express()
const port = 3000
const data = require('.seed-data');

app.get('/', (req, res) => res.send('Hello World!'))
mongoose.connect('mongodb://localhost/hackednews');

app.use(express.static(__dirname + '/../react-client/dist'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//////