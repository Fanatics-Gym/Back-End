const router = require("express").Router();
const Items = require("./items-model");
const restricted = require("../server/restricted");
router.post("/add", restricted, (req, res) => {
  let item = req.body;
  Items.add(item)
    .then((cb) => {
      res.status(201).json(cb);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "something went wrong" });
    });
});

router.get("/:id", (req, res) => {
  Items.findById(req.params.id)
    .then((data) => {
      res.json(item);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "failed to get resources" });
    });
});

router.get("/", (req, res) => {
  Items.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: "No items" });
    });
});

module.exports = router;
