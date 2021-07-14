
exports.up = async function(knex) {
  
    await knex.schema.createTable('appts',tb=>{
        tb.increments('id')
        tb.text('name').notNull()
        tb.text('email').notNull()
        tb.text('month')
        tb.text('day')
        tb.text('time').notNull()
        tb.boolean('completed').defaultTo(false)
        tb.boolean('available').defaultTo(false)
    })

   

 
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('appts')
  
};
