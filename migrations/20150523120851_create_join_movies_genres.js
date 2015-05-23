var table = function(t) {
  t.increments();
  t.integer('movie_id');
  t.integer('genre_id');
  t.timestamps();
}

exports.up = function(knex, Promise) {
  return knex.schema
            .createTable('join_movies_genres', table)
            .then(function () {
               console.log('Join Table Movies_Genres table is created!');
             });
  
};

exports.down = function(knex, Promise) {
  return knex.schema
            .dropTable('join_movies_genres', table)
            .then(function () {
               console.log('Join Table Movies_Genres table is dropped!');
             });
};
