exports.up = function (knex) {
  return knex.schema.createTable("playerGear", (table) => {
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
    table.enu("helmet", ["M", "L", "XL"]);
    table.enu("shoulderPads", ["M", "L", "XL"]);
    table.enu("pants", ["M", "L", "XL"]);
    table.enu("jeresy", ["M", "L", "XL"]);
    table.enu("backPlate", ["Yes", "No"]);
    table.enu("pickedUp", ["Yes", "No"]).defaultTo("No");
    table
      .integer("date_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("pickUpDate")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("playerGear");
};
