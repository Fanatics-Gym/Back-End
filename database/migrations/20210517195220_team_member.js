exports.up = function (knex) {
  return knex.schema.createTable("team_member", (member) => {
    member.increments("id").unique();
    member
      .integer("team_id")
      .references("id")
      .inTable("teams")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
    member
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("team_member");
};
