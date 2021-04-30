exports.up = function (knex) {
  return knex.schema.createTable("playerPickUpDate", (table) => {
    table.increments("id").unique();
    table
      .integer("date")
      .unsigned()
      .references("id")
      .inTable("pickUpDate")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      .notNullable();
    table.string("first_name");
    table.string("last_name");
    table.boolean("pickedUp").defaultTo(false);
    table.timestamp("Submitted").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("playerPickUpDate");
};
