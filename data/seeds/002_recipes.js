exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("recipes").insert([
    { name: "Jon's PB&J", dish_id: 1 },
    { name: "Tim's Pizza", dish_id: 2 },
    { name: "Kelly's Taco", dish_id: 3 }
  ]);
};
