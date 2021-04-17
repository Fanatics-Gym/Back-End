const jwt = require("jsonwebtoken");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../user/user-model.js");
const restricted = require("../server/restricted");
const { jwtSecret } = require("./user-secret");
const Stats = require("../stats/stats-model");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then((saved) => {
      console.log(saved.id);
      Stats.addStats(saved.id)
        .then((stats) => {
          res.status(200).json([stats, saved]);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ message: "could not get stats" });
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "incorrect credentials" });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({ token, user });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "failed to get users" });
    });
});

router.get("/players", (req, res) => {
  Users.findPlayers()
    .then((players) => {
      res.status(200).json(players);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "could not get players" });
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };

  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
