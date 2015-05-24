require('../config');

require('./director');

var Movie = bookshelf.Model.extend({
    tableName: 'movies',

    director: function() {
      return this.belongsTo('Director');
    },

    genres: function() {
      return this.belongsToMany('Genre', 'movies_genres', 'movie_id', 'genre_id');
    }
});

module.exports = bookshelf.model('Movie', Movie);
