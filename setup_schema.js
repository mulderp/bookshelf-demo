
var Knex = require('knex');
var DB = Knex({client: 'sqlite3', 
              connection: { filename: 'mydb.sqlite' } 
});

// this is our schema example:
var table = function (table) {
  table.string('title');
  table.timestamps();
};

// this executes the schema operation:
DB.schema.createTable('movies', table).then(function () {
  console.log('Movies Table is Created!');
});
