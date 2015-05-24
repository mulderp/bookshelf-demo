var baseModel = require('./base');

require('./director')

var Movie = baseModel.Model.extend({
  tableName: 'movies',

  director: function() {
    return this.belongsTo('Director');
  },

  genres: function() {
    return this.belongsToMany('Genre', 'movies_genres', 'movie_id', 'genre_id');
  }
});
  

module.exports = baseModel.model('Movie', Movie);
