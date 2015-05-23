var table = function(t) {
  t.increments('id').primary();
  t.integer('genre_id').references('genres.id');
  t.integer('movie_id').references('movies.id');
  t.timestamps();
}

exports.up = function(knex, Promise) {
  return knex.schema
            .createTable('genres_movies', table)
            .then(function () {
               console.log('Join Table Movies_Genres table is created!');
             });
  
};

exports.down = function(knex, Promise) {
  return knex.schema
            .dropTable('genres_movies', table)
            .then(function () {
               console.log('Join Table Movies_Genres table is dropped!');
             });
};
