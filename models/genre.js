var base = require('./base');

var Genre = base.Model.extend({
    tableName: 'genres'
});

module.exports = base.model('Genre', Genre);
