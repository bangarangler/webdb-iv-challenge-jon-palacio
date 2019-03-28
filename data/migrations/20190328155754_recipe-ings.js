exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe-ings", function(tbl) {
    //PRIMARY KEY
    tbl.increments();
    //FOREIGN KEY FOR INGREDIENTS
    tbl
      .integer("ingredient_id")
      .unsigned()
      .references("id")
      .inTable("ingredients");
    //FOREIGN KEY FOR RECIPES
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe-ings");
};
