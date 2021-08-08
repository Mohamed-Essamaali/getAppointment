const knex = require("knex")
const config = require("../../knexfile")
const db = knex(config.development)


const getAppts = ()=>{
    return db('appts')
}

const getApptByDay = (month,day)=>{
    return db('appts').where({'day':day,'month':month})
}

const getApptsById =  (user_id)=>{
    console.log('user id in schedule model',user_id)
    
    return db('appts').where('user_id',user_id)
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

module.exports = {getAppts,getApptsById,addAppt,removeAppt,update,getApptByDay}