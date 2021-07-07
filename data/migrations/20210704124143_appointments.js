
exports.up = async function(knex) {
    await knex.schema.createTable('appts',tb=>{
        tb.increments('id')
        tb.text('name').notNull()
        tb.text('email').notNull()
        tb.text('month').notNull()
        tb.text('time').notNull()
    })
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('appts')
  
};
