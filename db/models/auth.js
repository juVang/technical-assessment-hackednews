var mongoose = require('mongoose');

var authSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  karma: String,
  about: String
});


var AuthModel = mongoose.model('Auth', authSchema);

// findAll retrieves all auth
function findAll(callback) {
    AuthModel.find({}, callback);
}

// findOne will retrieve the auth associated with the given id
function findOne(id, callback) {
    AuthModel.find({id: id}, callback);
}

function findSearch(name, callback) {
  AuthModel.find({name: name}, callback);
}

// insertOne inserts a auth into the db
function insertOne(auth, callback) {
    AuthModel.create(auth, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
exports.findSearch= findSearch;