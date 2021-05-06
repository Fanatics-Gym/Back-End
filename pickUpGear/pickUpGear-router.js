const router = require("express").Router();
const PickUp = require("./pickUpGear-model");

router.get("/", (req, res) => {
  PickUp.allDates()
    .then((dates) => {
      res.status(200).json(dates);
    })
    .catch((err) => {
      res.status(500).json({ message: "could not get dates for pick up" });
      console.log(err);
    });
});

router.post("/addDate", (req, res) => {
  PickUp.addDate(req.body)
    .then((date) => {
      res.status(200).json(date);
    })
    .catch((err) => {
      res.status(500).json({ message: "could not add date to pick up" });
      console.log(err);
    });
});

router.get("/playersPickUp/:id", (req, res) => {
  PickUp.findPlayersWithDate(req.params.id)
    .then((players) => {
      res.status(200).json(players);
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not get players for this date" });
      console.log(err);
    });
});

router.get("/playersPickUp", (req, res) => {
  PickUp.allPlayerGear()
    .then((players) => {
      res.status(200).json(players);
    })
    .catch((err) => {
      res.status(500).json({ message: "Could not get players gear" });
      console.log(err);
    });
});

module.exports = router;
