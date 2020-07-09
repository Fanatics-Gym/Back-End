const db = require("../database/config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  deleteItem,
};

function find() {
  return db("items");
}

function findBy(filter) {
  return db("items").where(filter);
}

function add(item) {
  const [id] = db("items").insert(item);
}

function findById(id) {
  return db("items").where({ id }).first();
}

function deleteItem(id) {
  return findById(id).del(id);
}
