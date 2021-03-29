const router = require("express").Router();
const PlayerGear = require("./playerGear-model");

router.get("/", (req, res) => {
  PlayerGear.allPlayerGear()
    .then((gear) => {
      res.status(200).json(gear);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
