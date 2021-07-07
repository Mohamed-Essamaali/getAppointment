
exports.seed = async function(knex) {
  
  await knex('appts').insert([{id: 1, name: 'simo',email:"simo@gmail.com",month:5,time:8}]);
 
};
