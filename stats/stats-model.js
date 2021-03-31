const db = require("../database/config");

module.exports = {
  allStats,
};

function allStats() {
  return db("stats");
}
