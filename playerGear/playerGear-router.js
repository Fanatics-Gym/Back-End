const router = require("express").Router();
const PlayerGear = require("./playerGear-model");

router.get("/", (req, res) => {
  PlayerGear.allPlayerGear()
    .then((gear) => {
      res.status(200).json(gear);
    })
    .catch((err) => {
      res.status(500).json({ message: "could not get all gear" });
      console.log(err);
    });
});

router.post("/add", (req, res) => {
  PlayerGear.addGear(req.body.player_id, req.body)
    .then((gear) => {
      res.status(200).json(req.body);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "could not add gear" });
    });
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  PlayerGear.findGearByPlayer(req.params.id)
    .then((gear) => {
      res.status(200).json(gear);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "could not get gear" });
    });
});

module.exports = router;
