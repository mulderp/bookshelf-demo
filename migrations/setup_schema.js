var db_filename = 'movies.sqlite';

var DB = require('knex')({client: 'sqlite3', 
  connection: { filename: db_filename } 
});

// this is our schema example:
var table = function (table) {
  table.string('title');
  table.timestamps();
};

// this executes the schema operation:
DB.schema.createTable('movies', table).then(function () {
  console.log('Movies Table is Created!');
});

var addYear = function(table) { 
  table.integer('year');
};

DB.schema.table('movies', addYear)
  .then(function() {
    console.log("Attribute added");
  })
  .catch(function(err) {
    console.log(err)
  })
  .finally(function() {
    DB.destroy();
  });
