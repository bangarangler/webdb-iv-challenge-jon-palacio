const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish
};

function getDishes() {
  return db("dishes");
}

function addDish(dishes) {
  return db("dishes")
    .insert(dishes)
    .into("dishes");
}

function getDish(id) {
  return db("dishes")
    .join("recipes", "dishes.id", "=", "recipes.dish_id")
    .select("dishes.name", "recipes.name as recipe")
    .where({ "dishes.id": id });
}
