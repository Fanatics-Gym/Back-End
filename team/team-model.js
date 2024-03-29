const db = require("../database/config");

module.exports = {
  addTeam,
  allTeams,
  findTeamById,
  deleteTeam,
  editTeam,
  membersByTeamId,
};

function allTeams() {
  return db("teams");
}

function findTeamById(id) {
  return db("teams").where("id", id).first();
}

function addTeam(team) {
  return db("teams")
    .insert(team, "id")
    .then(([id]) => {
      return findTeamById(id);
    });
}

function deleteTeam(id) {
  return findTeamById(id).del();
}

function editTeam(id, changes) {
  return db("teams").where("id", id).update({ changes }).returning("*");
}

function membersByTeamId(id) {
  return db("team_member").where("team_id", id);
}
