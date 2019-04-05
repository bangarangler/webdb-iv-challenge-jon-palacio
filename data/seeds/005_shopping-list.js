exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("shopping-list").insert([
    { Name: "rowValue1" },
    { Name: "rowValue2" },
    { Name: "rowValue3" }
  ]);
};
