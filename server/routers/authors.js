var express = require("express");
const authorDb = require("../../db/models/authors");

var router = express.Router();

router.route("/").get(function(req, res) {
  authorDb.findAll(function(err, result) {
    if (err) {
      res.status(500);
      res.end();
      throw err;
    } else {
      res.json(result);
      res.status(200);
      res.end();
    }
  });
});

// Here we use express's route params
router.route("/:id").get(function(req, res) {});

module.exports = router;
