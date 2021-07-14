
exports.up = async function(knex) {
  await knex.schema.createTable('users',tb=>{
    tb.increments()
    tb.string('username').notNull().unique()
    tb.text('password').notNull()
    tb.string('email').notNull().unique()
    

  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users')
};
