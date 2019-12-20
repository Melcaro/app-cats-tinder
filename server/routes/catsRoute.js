const router = require("express").Router();

const img = require("../data/cats.json");

router.get("/", (req, res) => res.json(img));

module.exports = router;
