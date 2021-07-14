const knex = require("knex")
const config = require("../knexfile")
const db = knex(config.development)

const find = ()=>{
   const users =  db('users');
    return users
}
const findBy = (username)=>{
return db('users').where('username',username).select('username','password').first()
}
const findById =  (id)=>{
    const user = db('users').where('id',id).first()
    return user
}
const create =  async user=>{
    const [id] = await db('users').insert(user)
    console.log('id to add ',id)
    return findById(id)
}

const update = async (id,changes)=>{
    await db('users').update(changes).where(id)
    return findById(id)
}
const remove = async id =>{
    await db('users').where(id).del()
}

module.exports = {findById,find,create,remove,update,findBy}