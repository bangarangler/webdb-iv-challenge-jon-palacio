exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", function(tbl) {
    //PRIMARY KEY
    tbl.increments();
    //FIELD NAME REQUIRED
    tbl
      .string("Ing_name", 128)
      .notNullable()
      .unique();
    //QUANTITY
    tbl.float("quantity");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
