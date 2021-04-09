const router = require("express").Router();
const Stats = require("./stats-model");

router.get("/", (req, res) => {
  Stats.allStats()
    .then((stats) => {
      res.status(200).json(stats);
    })
    .catch((err) => {
      res.status(500).json({ message: "could not get stats" });
      console.log(err);
    });
});

router.post("/add", (req, res) => {
  Stats.addStats(req.body)
    .then((stats) => {
      res.status(201).json(stats);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "could not add stats" });
    });
});

module.exports = router;
