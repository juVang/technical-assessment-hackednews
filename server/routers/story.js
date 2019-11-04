var express = require("express");
var storyController = require("../../db/models/story.js");
var dummyData = require("../../seed.js");
var router = express.Router();

router.route("/").get(function(req, res) {
    // TODO: Replace this with stories you've retrieved from the database
    var data = [{
            author: "ocdtrekkie",
            title: "Switch – New Video Game System [video]",
            score: 536
        },
        {
            author: "mhb",
            title: "Video Games Are Changing the Way Soccer Is Played",
            score: 100
        }
    ];
    // storyController.insertOne(data[0]);

    res.json(data);
});
router.route("/api/stories").get(function(req, res) {
    storyController.findTopTen(function(err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

router.route("/api/authors").get(function(req, res) {
    storyController.findTopTenAuthors(function(err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

router.route("/stories/user").post(function(req, res) {
    var author = req.body.author;
    console.log(req.body);
    storyController.findByAuthor(author, function(err, result) {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});
// router.route("/save").get(function(req, res) {
//     //     var data = dummyData;
//     //     // console.log(data[0]);

//     //     // storyController.insertOne(data[0]);
//     //     for (var i = 0; i < data.length; i++) {
//     //         var obj = {

//     //         }
//     //         storyController.insertOne(data[i]);
//     //     }
//     dummyData.save();
//     res.end();
// });
// Here we use express's route params
router.route("/:id").get(function(req, res) {});

module.exports = router;