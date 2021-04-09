const { findApplicationById } = require("../application/application-model");
const db = require("../database/config");

module.exports = {
  allStats,
  addStats,
  findStatsById,
};

function allStats() {
  return db("stats");
}

function findStatsById(id) {
  return db("stats").where({ id }).first();
}

function findStatsByPlayerId(playerId) {
  return db("stats").where("player_id", playerId);
}

function addStats(stats) {
  return db("stats")
    .insert({ player_id: stats })
    .then(() => {
      return findStatsByPlayerId(stats);
    });
}
