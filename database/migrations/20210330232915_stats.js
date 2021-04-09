exports.up = function (knex) {
  return knex.schema.createTable("stats", (table) => {
    table.increments("id").unique();
    table
      .integer("player_id")
      .unique()
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.integer("touchdowns").defaultTo(0);
    table.integer("tackles").defaultTo(0);
    table.integer("fumbles").defaultTo(0);
    table.integer("Interceptions").defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("stats");
};
