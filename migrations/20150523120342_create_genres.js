var table = function(t) {
  t.increments();
  t.string('name');
  t.timestamps();
}

exports.up = function(knex, Promise) {
  return knex.schema
            .createTable('genres', table)
            .then(function () {
              console.log('Genres table is created!');
             });
};

exports.down = function(knex, Promise) {
  return knex.schema
            .dropTable('genres', table)
            .then(function () {
              console.log('Genres table was dropped!');
             });
};
