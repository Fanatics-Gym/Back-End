exports.up = function (knex) {
  return knex.schema.createTable("users", (users) => {
    users.increments("id").unique();
    users.string("username", 255).notNullable().unique();
    users.string("password", 255).notNullable();
    users
      .enu("userType", ["Admin", "Player", "Asistance", "Pending"])
      .notNullable()
      .defaultTo("Pending");
    users.integer("appl_id").unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};

// let it be known
