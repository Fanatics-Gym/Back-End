const db = require("../database/config");

module.exports = {
  allPlayerGear,
  addGear,
  editGear,
  findGearByPlayer,
};

function addGear(playerId, payload) {
  return db("playerGear").join("users", function () {
    this.on("users.id", "=", "playerGear.player_id")
      .insert(payload)
      .where(playerId, payload.playerId);
  });
}

function allPlayerGear() {
  return db("playerGear");
}

function editGear() {}

function findGearByPlayer(playerId) {
  return db("playerGear").where("player_id", playerId);
}
