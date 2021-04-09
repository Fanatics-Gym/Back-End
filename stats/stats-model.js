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

function addStats(stats) {
  return db("stats")
    .insert(stats, "id")
    .then(([id]) => {
      return findStatsById(id);
    });
}
