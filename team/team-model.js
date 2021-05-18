const db = require("../database/config");

module.exports = { addTeam, allTeams, findTeamById };

function findTeamById(id) {
  return db("teams").where({ id }).first();
}

function addTeam(team) {
  return db("teams")
    .insert(team, "id")
    .then(([id]) => {
      return findTeamById(id);
    });
}
