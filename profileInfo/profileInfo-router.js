const router = require("express").Router();
const ProfileInfo = require("./profileInfo-model");

router.get("/", async (req, res) => {
  try {
    const profiles = await ProfileInfo.allProfiles();
    res.status(200).json(profiles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
