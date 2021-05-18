exports.up = function (knex) {
  return knex.schema.createTable("team_member", (member) => {
    member.increments("id").unqiue();
    member
      .string("team_id")
      .references("id")
      .inTable("teams")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
    member
      .string("user")
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
