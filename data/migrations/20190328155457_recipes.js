exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(tbl) {
    // PRIMARY KEY
    tbl.increments();
    // FIELD NAME REQUIRED
    tbl
      .string("name", 128)
      .notNullable()
      .unique('name');
    // FOREIGN KEY FOR DISH
    tbl
      .integer("dish_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("dishes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
