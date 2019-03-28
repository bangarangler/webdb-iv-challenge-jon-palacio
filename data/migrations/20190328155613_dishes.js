exports.up = function(knex, Promise) {
  return knex.schema.createTable("dishes", function(tbl) {
    //PRIMARY KEY
    tbl.increments();
    //FIELD NAME REQUIRED
    tbl
      .string("name", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dishes");
};
