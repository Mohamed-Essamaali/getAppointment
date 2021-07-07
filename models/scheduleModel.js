const knex = require("knex")
const config = require("../knexfile")
const db = knex(config.development)


const getAppts = ()=>{
    return db('appts')
}

const getApptsById =  id=>{
    return db('appts').where('id',id).first()
}

const addAppt = async appt=>{
   const [id] = await db('appts').insert(appt)
    return getApptsById(id)

}
 
const update = async (id,changes)=>{
    await db('appts').update(changes).where('id',id)
    return getApptsById(id)
}

const removeAppt = (id)=>{
    return db('appts').where('id',id).del()
}

module.exports = {getAppts,getApptsById,addAppt,removeAppt,update}