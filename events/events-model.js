const db = require("../database/config");

module.exports = { addEvent, allEvents, findEventById };

function allEvents() {
  return db("events");
}

function findEventById(id) {
  return db("events").where({ id }).first();
}

function addEvent(event) {
  return db("events")
    .insert(event, "id")
    .then(([id]) => {
      return findEventById(id);
    });
}
