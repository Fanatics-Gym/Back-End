const router = require("express").Router();
const ProfileInfo = require("./profileInfo-model");

router.get("/", async (req, res) => {
  try {
    const profiles = await ProfileInfo.allProfiles();
    res.status(200).json(profiles);
  } catch (err) {
    res.status(500).json({ message: "could not get profiles" });
  }
});

router.post("/add", async (req, res) => {
  try {
    const profileData = await ProfileInfo.addProfileInfo(req.body);
    res.status(200).json(profileData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "could not create profile info" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const profile = await ProfileInfo.getProfileInfoById(req.body.user_id);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "could not get this player's info" });
  }
});

module.exports = router;
