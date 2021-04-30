const router = require("express").Router();
const PickUp = require("./pickUpGear-model");

router.get("/", (req, res) => {
  PickUp.allDates()
    .then((dates) => {
      res.status(200).json(gear);
    })
    .catch((err) => {
      res.status(500).json({ message: "could not get dates for pick up" });
      console.log(err);
    });
});

router.post("/addDate", (req, res) => {
  PickUp.addDate(req.body)
    .then((date) => {
      res.status(200).json(`${req.body} was added as a date`);
    })
    .catch((err) => {
      res.status(500).json({ message: "could not add date to pick up" });
    });
});

module.exports = router;
