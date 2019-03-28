exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("dishes").insert([
    { name: "PB and J" },
    { name: "Pizza" },
    { name: "Taco" }
  ]);
};
