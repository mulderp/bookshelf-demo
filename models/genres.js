var knexfile = require('../knexfile.js');
var knex = require('knex')(knexfile.development);

var bookshelf = require('bookshelf')(knex);

var Genre = require('./genre.js');

var Genres = bookshelf.Collection.extend({
  model: Genre
});

module.exports = Genres;

