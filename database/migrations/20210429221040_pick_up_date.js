exports.up = function (knex) {
  return knex.schema.createTable("pickUpDate", (table) => {
    table.increments("id").unique();
    table.string("date").notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("pickUpDate");
};