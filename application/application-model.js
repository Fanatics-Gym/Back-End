const db = require("../database/config");

module.exports = {
  addApplication,
  findApplication,
  deleteApplication,
  updateApplication,
  findApplicationById,
};

function findApplicationById(id) {
  return db("application").where({ id }).first();
}

function addApplication(app) {
  return db("applications")
    .insert(app, "id")
    .then(([id]) => {
      return findBy;
    });
}
