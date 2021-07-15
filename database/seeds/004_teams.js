exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("teams")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("teams").insert([
        { id: 1, name: "Colts", wins: 0, losses: 0 },
        { id: 2, name: "Chargers", wins: 2, losses: 3 },
        { id: 3, name: "United Front", wins: 3, losses: 1 },
      ]);
    });
};
