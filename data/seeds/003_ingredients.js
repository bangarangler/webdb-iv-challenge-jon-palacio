exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("ingredients").insert([
    { Ing_name: "Peanut Butter", quantity: 1 },
    { Ing_name: "Jelly", quantity: 1 },
    { Ing_name: "Pineapple", quantity: 2 },
    { Ing_name: "Cheese", quantity: 2 },
    { Ing_name: "quesodilla", quantity: 1 },
    { Ing_name: "lettuce", quantity: 4 }
  ]);
};
