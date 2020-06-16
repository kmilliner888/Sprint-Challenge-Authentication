
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'kmilliner1', password: "abc123"},
        {id: 2, username: 'kmilliner2', password: "doremi"},
        {id: 3, username: 'kmilliner3', password: "pa$$word"}
      ]);
    });
};
