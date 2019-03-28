exports.up = function(knex, Promise) {
  return knex.schema.createTable("shopping-list", function(tbl) {
    tbl.increments();

    tbl
      .string("name", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("shopping-list");
};
