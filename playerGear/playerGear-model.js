const db = require("../database/config");

module.exports = {
  allPlayerGear,
  addGear,
  editGear,
  findGearByPlayer,
  findGearByDate,
};

function addGear(payload) {
  return db("playerGear as gear").insert(payload).returning("*");
}

function allPlayerGear() {
  return db("playerGear");
}

function editGear() {}

function findGearByPlayer(player_id) {
  return db("playerGear").where({ player_id });
}

function findGearByDate(date_id) {
  return db("playerGear").where("date_id", date_id);
}
