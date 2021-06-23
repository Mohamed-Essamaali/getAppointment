
exports.seed = async function(knex) {
 
     await knex('users').insert([
        {username:'simo',email:'simo@gmail.com'},
        {username:"Jason", email: 'jason@gmail.com'},
        {username:'Ahmed',email:'ahmed@gmail.com'}
      ]);
};
