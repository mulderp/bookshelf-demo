require('../config');

require('./movie');

var Director = bookshelf.Model.extend({
  tableName: 'directors',
  movies: function() {
    return this.hasMany('Movie');
  }
});

module.exports = bookshelf.model('Director', Director);
