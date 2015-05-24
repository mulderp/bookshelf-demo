var baseModel = require('./base');

require('./movie');

var Director = baseModel.Model.extend({
  tableName: 'directors',
  movies: function() {
    return this.hasMany('Movie');
  }
});

module.exports = baseModel.model('Director', Director);
