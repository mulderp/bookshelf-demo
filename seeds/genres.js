var _ = require('underscore');
Genre = require('../models/genre');

var rawGenres=[ 'Crime', 'Animation', 'Mystery', 'Thriller', 'Sci-Fi', 'Western', 'Biography', 'History' ];

exports.seed = function(knex, Promise) {
  return knex('genres').del().then(function() {
    return Promise.map(rawGenres, function(g) {
      return (new Genre({name: g})).save();
    })
  });
};
