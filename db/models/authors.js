var mongoose = require("mongoose");

var authorSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  name: String,
  about: String,
  karma: Number
});

var AuthorModel = mongoose.model("Author", authorSchema);

function findAll(callback) {
  AuthorModel.find({})
    .sort({ karma: -1 })
    .exec(callback);
}

function findOne(id, callback) {
  AuthorModel.find({ id: id }, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.AuthorModel = AuthorModel;
