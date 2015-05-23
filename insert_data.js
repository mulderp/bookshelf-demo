// var db_filename = 'movies.sqlite';
var db_filename = 'dev.movies';

var DB = require('knex')({client: 'sqlite3', 
  connection: { filename: db_filename } 
});

DB('movies')
   .insert({title: "The Artist", year: 2010, join_genres_id: 1})
   .then(function() { console.log("added"); })
   .catch(function(err) { console.log(err) });

DB('genres')
   .insert({name: "Comedy"})
   .then(function() { console.log("added"); })
   .catch(function(err) { console.log(err) });

DB('join_movies_genres')
   .insert({movie_id: 1, genre_id: 1})
   .then(function() { console.log("added"); })
   .catch(function(err) { console.log(err) })
   .finally(function() { DB.destroy() });
