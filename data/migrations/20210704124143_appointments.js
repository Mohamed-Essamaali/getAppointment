
exports.up = async function(knex) {

    await knex.schema.createTable('users',tb=>{
        tb.increments()
        tb.string('username').notNull().unique()
        tb.text('password').notNull()
        tb.string('email').notNull().unique()
        tb.text('role').notNull()
        
      })
  
    await knex.schema.createTable('appts',tb=>{
        tb.increments('id')
        tb.text('name').notNull()
        tb.text('email').notNull()
        tb.text('month').notNull()
        tb.text('day').notNull()
        tb.text('time').notNull()
        tb.boolean('completed').defaultTo(false)
        tb.boolean('available').defaultTo(false)
        tb.integer('user_id')
        .unsigned()
        .notNull()
        .references('id')
        //this table must exist
        .inTable('users')
    })
   

   

 
  
};

exports.down = async function(knex) {
    
    await knex.schema.dropTableIfExists('appts')
    await knex.schema.dropTableIfExists('users')
  
};
