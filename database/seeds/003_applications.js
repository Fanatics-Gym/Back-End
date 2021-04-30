exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("applications")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("applications").insert([
        {
          id: 1,
          first_name: "Jarrod",
          mi: "P",
          last_name: "Skahill",
          email: "test@email.com",
          phone: "8888888888",
          DOB: "06/21/1997",
          Altphone: "9096389007",
          Drivers_license: "F102321",
          DL_Expiration: "06/21/2022",
          address: "1810 Middle of nowhere",
          city: "lost",
          address_state: "KS",
          zip: "66144",
          Em_First: "Tim",
          Em_Last: "thedude",
          relation: "none",
          em_phone: "911",
          current_address: "No where",
          current_city: "Pomona",
          current_zip: "91774",
          current_state: "CA",
        },
      ]);
    });
};
