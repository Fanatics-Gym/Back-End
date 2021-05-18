const db = require("../database/config");

module.exports = {
  allStats,
  addStats,
  findStatsById,
  statsWithPlayerInfo,
};

function allStats() {
  return db("stats");
}

function findStatsById(id) {
  return db("stats").where({ id }).first();
}

function findStatsByPlayerId(playerId) {
  return db("stats").where("player_id", playerId).first();
}

function addStats(stats_id) {
  return db("stats")
    .insert({ player_id: stats_id })
    .then(() => {
      return findStatsByPlayerId(stats_id);
    });
}

function statsWithPlayerInfo() {
  return db("stats")
    .join("users", "stats.player_id", "users.id")
    .join("applications", "users.appl_id", "applications.id")
    .select(
      "applications.first_name",
      "applications.last_name",
      "stats.touchdowns",
      "stats.tackles",
      "stats.fumbles",
      "stats.Interceptions"
    );
}
