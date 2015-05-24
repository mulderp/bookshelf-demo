require('../config');

var Genre = bookshelf.Model.extend({
    tableName: 'genres'
});

module.exports = bookshelf.model('Genre', Genre);
