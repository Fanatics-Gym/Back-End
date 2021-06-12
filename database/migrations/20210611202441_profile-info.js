exports.up = function (knex) {
  return knex.schema.createTable("profileInfo", (table) => {
    table.increments("id").unique();
    table
      .integer("user_id")
      .unique()
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.string("bio");
    table.string("height");
    table.string("weight");
    table.string("company");
    table.string("website");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("profileInfo");
};
