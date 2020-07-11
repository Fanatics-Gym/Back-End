exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        { id: 1, name: "Fanatics Hat", price: 20, size: "one size", stock: 20 },
      ]);
    });
};
