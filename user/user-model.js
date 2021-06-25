const db = require("../database/config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  deleteUser,
  findPlayers,
  findPlayerById,
};

function find() {
  return db("users").select("id", "username", "userType", "appl_id");
}

function findBy(filter) {
  return db("users").where(filter);
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

function findPlayers() {
  return db("users")
    .join("stats", "users.id", "stats.player_id")
    .join("applications", "users.appl_id", "applications.id")
    .where("userType", "Player")
    .select(
      "users.id",
      "users.username",
      "stats.fumbles",
      "stats.tackles",
      "stats.Interceptions",
      "stats.touchdowns",
      "applications.first_name",
      "applications.last_name"
    );
}

function findPlayerById(id) {
  return db("users")
    .join("stats", "users.id", "stats.player_id")
    .join("applications", "users.appl_id", "applications.id")
    .join("profileInfo", "users.id", "profileInfo.user_id")
    .where("users.id", id)
    .first()
    .select(
      "users.id",
      "users.username",
      "users.userType",
      "stats.fumbles",
      "stats.tackles",
      "stats.Interceptions",
      "stats.touchdowns",
      "applications.first_name",
      "applications.last_name",
      "applications.email",
      "profileInfo.bio",
      "profileInfo.weight",
      "profileInfo.company",
      "profileInfo.website"
    );
}
