const router = require("express").Router();
const Appl = require("./application-model");

router.post("/add", (req, res) => {
  Appl.addApplication(req.body)
    .then((appl) => {
      res.status(201).json(appl);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Could not create application" });
    });
});

router.get("/", (req, res) => {
  Appl.findApplication()
    .then((appl) => {
      res.status(201).json(appl);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Could not get applications" });
    });
});

router.get("/:id", (req, res) => {
  Appl.findApplicationById(req.params.id)
    .then((appl) => {
      res.status(201).json(appl);
    })
    .catch((error) => {
      res.status(500).json({ message: "could not get application by id" });
    });
});

module.exports = router;
