exports.up = function (knex) {
  return knex.schema.createTable("teams", (teams) => {
    teams.increments("id").unique();
    teams.string("name").notNullable().unique();
    teams.integer("number_players").defaultTo(0);
    teams.integer("wins").defaultTo(0);
    teams.integer("losses").defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("teams");
};
