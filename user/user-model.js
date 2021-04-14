const db = require("../database/config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  deleteUser,
};

function find() {
  return db("users").select("id", "username", "userType", "appl_id");
}

function findBy(filter) {
  return db("users").join("stats", "users.id", "stats.player_id").where(filter);
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function findById(id) {
  return db("users").where({ id }).first();
}

function deleteUser(id) {
  return findById(id).del(id);
}
