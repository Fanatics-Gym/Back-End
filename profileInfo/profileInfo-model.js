const db = require("../database/config");

module.exports = {
  allProfiles,
};

function allProfiles() {
  return db("profileInfo");
}
