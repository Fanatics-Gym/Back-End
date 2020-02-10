
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: "jay", password: "$2a$10$tihk2LOiv1ISig1BNZpop.R4CHCnKIawYTj06yMgNaW59WY.BPc1."},
        {id: 2, username: "jake", password: "$2a$10$8YMJkUC0bB0euYDkleiCH.HcAa2YN7WpHieRUWAh.Y3j4frHwvrMq"
      }
      ]);
    });
};
