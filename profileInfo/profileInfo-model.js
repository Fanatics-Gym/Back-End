const db = require("../database/config");

module.exports = {
  allProfiles,
  addProfileInfo,
  getProfileInfoById,
};

function allProfiles() {
  return db("profileInfo");
}

function addProfileInfo(payload) {
  return db("profileInfo").insert(payload).returning("*");
}

function getProfileInfoById(user_id) {
  return db("profileInfo").where("user_id", id).first();
}
