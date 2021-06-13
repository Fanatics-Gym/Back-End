const db = require("../database/config");

module.exports = {
  allProfiles,
  addProfileInfo,
};

function allProfiles() {
  return db("profileInfo");
}

function addProfileInfo(user_id, payload) {
  return db("profileInfo as info")
    .join("users", function () {
      this.on("users.id", "=", "info.user_id");
    })
    .insert(payload)
    .where(userId, payload.user_id);
}
