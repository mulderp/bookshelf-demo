// var db_filename = 'movies.sqlite';
var db_filename = 'dev.movies';

var DB = require('knex')({client: 'sqlite3', 
  connection: { filename: db_filename } 
});

DB('movies')
   .insert({title: "The Artist", year: 2010})
   .then(function() { console.log("added"); })
   .catch(function(err) { console.log(err) });

DB('genres')
   .insert({name: "Comedy"})
   .then(function() { console.log("added"); })
   .catch(function(err) { console.log(err) });

DB('genres')
   .insert({name: "Drama"})
   .then(function() { console.log("added"); })
   .catch(function(err) { console.log(err) });

DB('genres_movies')
   .insert({movie_id: 1, genre_id: 1})
   .then(function() { console.log("added"); })
   .catch(function(err) { console.log(err) });

DB('genres_movies')
   .insert({movie_id: 1, genre_id: 2})
   .then(function() { console.log("added"); })
   .catch(function(err) { console.log(err) })
   .finally(function() { DB.destroy() });
