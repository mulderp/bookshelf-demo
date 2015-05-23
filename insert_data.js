var db_filename = 'movies.sqlite';

var DB = require('knex')({client: 'sqlite3', 
  connection: { filename: db_filename } 
});

DB('movies')
   .insert({title: "The Artist", year: 2010})
   .then(function() { console.log("added"); })
   .catch(function(err) { console.log(err) })
   .finally(function() { DB.destroy() });
