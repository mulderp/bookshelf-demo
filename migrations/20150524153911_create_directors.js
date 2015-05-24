
var schema = function(t) {
  t.increments().primary();
  t.string('first_name');
  t.string('last_name');
  t.timestamps();
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable('directors', schema)
    .then(function() {
      console.log('Directors table created.');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('directors', schema)
    .then(function() {
      console.log('Directors table dropped.');
    });
};
