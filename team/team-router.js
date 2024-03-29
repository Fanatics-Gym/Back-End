const router = require("express").Router();
const Team = require("./team-model");

router.get("/", (req, res) => {
  Team.allTeams()
    .then((team) => {
      res.status(200).json(team);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "failed to get teams" });
    });
});

router.put("/:id", async (req, res) => {
  try {
    const edits = await Team.editTeam(req.params.id, req.body);
    res.status(200).json({ message: "Updated Team", Changes: edits });
  } catch (e) {
    res.status(500).json({ message: "could not update team" });
  }
});

router.get("/:id", (req, res) => {
  Team.findTeamById(req.params.id)
    .then((team) => {
      res.status(200).json(team);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "can't get team" });
    });
});

router.get("roster/:id", async (req, res) => {
  try {
    const teamMembers = await Team.membersByTeamId(req.params.id);
    res.status(200).json(teamMembers);
  } catch (e) {
    res.status(500).json({ message: "could not get team roster" });
  }
});

router.post("/add", (req, res) => {
  Team.addTeam(req.body)
    .then((team) => {
      res.status(200).json(team);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "couldn't create a team" });
    });
});

router.delete("/:id", (req, res) => {
  Team.deleteTeam(req.body.id)
    .then((team) => {
      res.status(200).json({ message: "Team was deleted" }, team);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "could not delete this team" });
    });
});

module.exports = router;
