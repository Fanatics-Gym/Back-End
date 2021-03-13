exports.up = function (knex) {
  return knex.schema.createTable("applications", (apply) => {
    apply.increments();
    apply.string("first_name").notNullable();
    apply.string("mi").notNullable();
    apply.string("last_name").notNullable();
    apply.string("email").notNullable();
    apply.string("phone").notNullable();
    apply.string("DOB").notNullable();
    apply.string("Altphone").notNullable();
    apply.string("Drivers_license").notNullable();
    apply.string("DL_Expiration").notNullable();
    apply.string("address").notNullable();
    apply.string("city").notNullable();
    apply.string("address_state").notNullable();
    apply.string("zip").notNullable();
    apply.string("current_address").notNullable();
    apply.string("current_city").notNullable();
    apply.string("current_zip").notNullable();
    apply.string("current_state").notNullable();
    apply.string("Em_First").notNullable();
    apply.string("Em_Last").notNullable();
    apply.string("relation").notNullable();
    apply.string("em_phone").notNullable();
    apply
      .enu("status", ["Pending", "Approved", "Rejected", "Completed"])
      .notNullable()
      .defaultTo("Pending");
    apply.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("applications");
};
