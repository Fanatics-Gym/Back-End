const router = require("express").Router();
const Items = require("./items-model");
const restricted = require("../server/restricted");

router.post("/add", (req, res) => {
  Items.add(req.body)
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Could not create item" });
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

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Items.deleteItem(id)
    .then((id) => {
      res.status(200).json({ message: `Item ${id} deleted` });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Items.updateItem(req.params.id, req.body)
    .then((item) => {
      res.json(item);
    })
    .catch(() => {
      res.status(500).json(req.body);
    });
});

module.exports = router;
