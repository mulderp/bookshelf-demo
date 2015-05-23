var db_filename = 'dev.movies';

var knex = require('knex')({client: 'sqlite3', 
  connection: { filename: db_filename } 
});


var bookshelf = require('bookshelf')(knex);

var JoinMovieGenre = bookshelf.Model.extend({
    tableName: 'join_movies_genres'
});


var Movie = bookshelf.Model.extend({
    tableName: 'movies',

    genres: function() {
      return this.belongsToMany(Genre, 'join_movies_genres', 'movie_id', 'genre_id', {debug: true});
      // return this.belongsToMany(Genre).through(JoinMovieGenre);
    }
});

var Genre = bookshelf.Model.extend({
    tableName: 'genres'
});

new Movie({title: 'The Artist'}).fetch({debug: true}).then(function(m) {
  console.log(m.toJSON());
  console.log(m.genres())
})
.finally(function() {
  knex.destroy();
});

