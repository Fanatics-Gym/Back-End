const router = require("express").Router();
const Event = require("./events-model");

router.get("/", (req, res) => {
  Event.allEvents()
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "failed to get events" });
    });
});

router.get("/:id", (req, res) => {
  Event.findEventById(req.params.id)
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "failed to get specific event" });
    });
});

router.post("/add", (req, res) => {
  Event.addEvent(req.body).then((event) => {
    res.status(200).json({ message: "event was added", event });
  });
});

module.exports = router;
