const db = require("../database/config");

module.exports = {
  addApplication,
  findApplication,
  deleteApplication,
  updateApplication,
  findApplicationById,
};

function findApplicationById(id) {
  return db("applications").where({ id }).first();
}

function addApplication(app) {
  return db("applications")
    .insert(app, "id")
    .then(([id]) => {
      return findBy;
    });
}

function findApplication() {
  return db("applications");
}

function deleteApplication(id) {
  return findApplicationById(id).del();
}

function updateApplication(id, changes) {
  return db("applications").where({ id }).update({ changes });
}
