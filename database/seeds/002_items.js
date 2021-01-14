exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          id: 1,
          name: "Fanatics Hat",
          price: 20,
          size: "one size",
          stock: 20,
          description: "One hell of a hat",
          img: "https://www.hutstuebele.com/pic/10941p.jpg",
        },
        {
          id: 2,
          name: "Fanatics shorts",
          price: 25,
          size: "SML",
          stock: 20,
          description: "Nice shorts, acutally the nicest",
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/e/medium_1908763_999000_adv_essence_5__stretch_shorts_f.jpg",
        },
        {
          id: 3,
          name: "Fanatics shirt",
          price: 25,
          size: "SML",
          stock: 20,
          description: "Nice shorts, acutally the nicest",
          img:
            "https://imgprd19.hobbylobby.com/2/fe/7f/2fe7f9b08fb17ea5bffd92cf575dee4a8d898668/350Wx350H-634485-0320.jpg",
        },
      ]);
    });
};
