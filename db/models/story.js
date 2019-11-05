var mongoose = require("mongoose");

var storySchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    by: String,
    title: String,
    score: Number,
    kids: [Number]
});

var authorSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    name: String,
    about: String,
    karma: Number
});
var StoryModel = mongoose.model("Story", storySchema);
var AuthorModel = mongoose.model("Author", authorSchema);

// findAll retrieves all stories
function findAll(callback) {
    // StoryModel.find({}).sort("score").limit(10);
}

function findTopTen(callback) {
    StoryModel.find({})
        .sort([
            ["id", -1]
        ])
        .limit(10)
        .exec(callback);
}

function findTopTenAuthors(callback) {
    AuthorModel.find({})
        .sort([
            ["karma", -1]
        ])
        .limit(10)
        .exec(callback);
}

function findTopCommentorsRelated(kids, callback) {
    StoryModel.aggregate([{ $match: { kids: { $in: [kids] } } }], function(
        err,
        res
    ) {
        console.log(err);
        callback(res);
        // console.log(err, res);
    });
    callback([]);
}

// findOne will retrieve the story associated with the given id
function findOne(id, callback) {
    StoryModel.find({ id: id }, callback);
}

function findByAuthor(author, callback) {
    StoryModel.find({ by: author }, callback);
}

// insertOne inserts a story into the db
function insertOne(story, callback) {
    StoryModel.create(story, callback);
}

function insertOneAuthor(author, callback) {
    AuthorModel.create(author, callback);
}
exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
exports.findTopTen = findTopTen;
exports.findTopTenAuthors = findTopTenAuthors;
exports.insertOneAuthor = insertOneAuthor;
exports.findByAuthor = findByAuthor;
exports.findTopCommentorsRelated = findTopCommentorsRelated;