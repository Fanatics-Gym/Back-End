exports.up = function (knex) {
  return knex.schema.createTable("events", (events) => {
    events.increments("id").unique();
    events
      .enu("event_type", ["Practice", "Game", "Meeting", "Other"])
      .notNullable();
    events.string("date").notNullable();
    events.string("time").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("events");
};
