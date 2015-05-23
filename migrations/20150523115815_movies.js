// this is our schema example:
var table = function (table) {
  table.increments();
  table.string('title');
  table.integer('year');
  table.timestamps();
};

exports.up = function(knex, Promise) {
 return knex.schema
            .createTable('movies', table)
            .then(function () {
              console.log('Movies table is created!');
             });
};

exports.down = function(knex, Promise) {
 return knex.schema
            .dropTable('movies', table)
            .then(function () {
              console.log('Movies table was dropped!');
             });
  
};
