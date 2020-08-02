const db = require("../database/config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  deleteItem,
  updateItem,
};

function find() {
  return db("items");
}

function findBy(filter) {
  return db("items").where(filter);
}

function add(item) {
  return db("items")
    .insert(item, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function findById(id) {
  return db("items").where({ id }).first();
}

function deleteItem(id) {
  return findById(id).del();
}

function updateItem(id, changes) {
  return db("item").where({ id }).update(changes);
}
