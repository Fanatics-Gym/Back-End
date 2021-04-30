const db = require("../database/config");

module.exports = {
  allDates,
  addDate,
  findDateById,
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
