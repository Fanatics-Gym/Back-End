const db = require("../database/config");

module.exports = {
  allProfiles,
  addProfileInfo,
};

function allProfiles() {
  return db("profileInfo");
}

function addProfileInfo(payload) {
  return db("profileInfo").insert(payload).returning("*");
}
