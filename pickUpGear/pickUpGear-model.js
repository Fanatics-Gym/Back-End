const db = require("../database/config");

module.exports = {
  allDates,
  addDate,
  findDateById,
  findPlayersWithDate,
};

function allDates() {
  return db("pickUpDate");
}

function findDateById(id) {
  return db("pickUpDate").where({ id }).first();
}

function addDate(date) {
  return db("pickUpDate")
    .insert(date, "id")
    .then(([id]) => {
      return findDateById(id);
    });
}

function findPlayersWithDate(date_id) {
  return db("pickUpDate")
    .join("playerGear", "pickUpDate.id", "playerGear.date_id")
    .join("applications", "playerGear.player_id", "applications.id")
    .where("playerGear.date_id", date_id)
    .select(
      "applications.first_name",
      "applications.last_name",
      "playerGear.helmet",
      "playerGear.shoulderPads",
      "playerGear.pants",
      "playerGear.jeresy",
      "playerGear.backPlate",
      "playerGear.pickedUp",
      "pickUpDate.date"
    );
}
