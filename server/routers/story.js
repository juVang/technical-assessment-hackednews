var express = require("express");
var storyController = require("../../db/models/story.js");
var router = express.Router();

router.route("/").get(function(req, res) {
    // TODO: Replace this with stories you've retrieved from the database
    var data = [
      
      {
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
    res.json(data);
});
router.route("/api/stories").get((req, res)=> {
    storyController.findTopTen((err, result)=> {
        if (err) {
         throw err;
        }
        res.json(result);
    });
});
router.route("/api/authors").get((req, res)=> {
    storyController.findTopTenAuthors((err, result)=> {
        if (err) {
        throw err;
        }
        res.json(result);
    });
});
router.route("/stories/user").post((req, res)=> {
    var author = req.body.author;
    console.log(req.body);
    storyController.findByAuthor(author, (err, result)=> {
        if (err) {
            throw err;
        }
        res.json(result);
    });
});

router.route("/:id").get((req, res)=>{});

module.exports = router;
//still NOT WORKING