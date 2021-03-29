const db = require("../database/config");

module.exports = {
  allPlayerGear,
  addGear,
  editGear,
  findGearByPlayer,
};

function addGear(playerId, payload) {
  return db("playerGear as gear")
    .join("users", function () {
      this.on("users.id", "=", "gear.player_id");
    })
    .insert(payload)
    .where(playerId, payload.playerId);
}

function allPlayerGear() {
  return db("playerGear");
}

function editGear() {}

function findGearByPlayer(player_id) {
  return db("playerGear").where({ player_id });
}
