exports.up = function (knex) {
  return knex.schema.createTable("team_event", (event) => {
    event.increments("id").unique();
    event
      .integer("team_id")
      .references("id")
      .inTable("teams")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
    event
      .integer("event_id")
      .references("id")
      .inTable("events")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
  });
};

exports.down = function (knex) {};
