var db_filename = 'dev.movies';

var knex = require('knex')({client: 'sqlite3', 
  connection: { filename: db_filename } 
});


var bookshelf = require('bookshelf')(knex);

var Movie = bookshelf.Model.extend({
    tableName: 'movies',

    genres: function() {
      return this.belongsToMany(Genre);
      // return this.belongsToMany(Genre).through(JoinMovieGenre, 'movie_id', 'genre_id');
      // return this.belongsToMany(Genre, 'join_movies_genres', 'movie_id', 'genre_id').through(JoinMovieGenre, 'movie_id', 'genre_id');
    }
});

var Genre = bookshelf.Model.extend({
    tableName: 'genres',

    movies: function() {
      return this.belongsToMany(Movie);
    }

});

new Movie({title: 'The Artist'}).fetch({withRelated: ['genres'], require: true, debug: true}).then(function(m) {
  console.log('.......');
  console.log(m.toJSON());
  console.log('.......');
})
.finally(function() {
  knex.destroy();
});

/*
new Genre({name: 'Comedy'}).fetch({debug: true}).then(function(g) {
  console.log('.......');
  console.log(g.toJSON());
  console.log(g.genres_movie());
})
*/

