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
    table.integer("touchdowns");
    table.integer("tackles");
    table.integer("fumbles");
    table.integer("Interceptions");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("stats");
};
