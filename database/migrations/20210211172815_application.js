exports.up = function (knex) {
  return knex.schema.createTable("application", (apply) => {
    apply.increments();
  });
};

exports.down = function (knex) {};
