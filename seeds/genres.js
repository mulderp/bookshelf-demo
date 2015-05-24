
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('genres').del(), 

    // Inserts seed entries
    knex('genres').insert({id: 1, name: 'Action'}),
    knex('genres').insert({id: 2, name: 'Drama'}),
    knex('genres').insert({id: 3, name: 'Comedy'}),
    knex('genres').insert({id: 4, name: 'SciFi'}),
    knex('genres').insert({id: 5, name: 'Western'})
  );
};
