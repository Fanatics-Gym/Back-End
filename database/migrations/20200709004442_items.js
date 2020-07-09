exports.up = function (knex) {
  return knex.schema.createTable("items", (items) => {
    items.increments();
    items.string("name", 25).notNullable();
    items.integer("price").notNullable();
    items.string("size").notNullable();
    items.integer("stock").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("items");
};
