const express = require('express')
const router = express.Router()
router.use(express.json())
const Appts = require('./scheduleModel')
const {restrict} = require('../../middleware/users-middleware')

// get list of appointments

router.get('/appts',restrict(),async (req,res,next)=>{
    const appts = await Appts.getAppts() 
    res.status(200).json(appts)
})

router.get('/appts/:month/:day', restrict(), async (req,res,next)=>{

    const month = req.params.month
    const day = req.params.day
    const appts = await Appts.getApptByDay(month,day)
    res.status(200).json(appts)
})

router.get('/appts/:user_id', restrict(), async (req,res,next)=>{
  
        
        try{
            const id = req.params.user_id
            const appt = await Appts.getApptsById(id)
            if(!appt){
                res.status(400).json({message:`user id ${id} has no appointment yet`})
            }else{
                res.status(200).json(appt)
            }
           
        }
       
        catch(err){next(err)}
    
})

//adding new appointment
router.post('/appts/users/:user_id', restrict(), async (req,res,next)=>{
    try{
        const id = req.params.user_id
        const {name,month,day, time,email,completed,available} = req.body
        const addedAppt = {user_id:id,name: name,month:month,day:day,time:time,email:email,completed:completed,available:available} 
     
        if(!name || !month || !time || !email){
            res.status(404).json({message:'missing required information'})
        }
        else
        {
            const appt =  await Appts.addAppt(addedAppt)
        
            res.status(201).json(appt)
        }
    }
    catch(err){next(err)}
})


//editing appt information
router.put('/appts/users/:user_id/:id', restrict(), async (req,res,next)=>{
   
    try{
        const {name,month,time,email} = req.body
        const id = req.params.id
        const appt = await Appts.getApptsById(id)

        if(!appt){
            res.status(400).json({message:`no appointment exist with id ${id}`})
        }

        if(!name || !month || !time || !email){
            res.status(404).json({message:'missing required information'})
        }
       
            const newAppt =  await Appts.update(id,req.body)
            res.status(201).json(newAppt)
        
    }
    catch(err){next(err)}

}) 

//delete and an event 

router.delete('/appts/:id',restrict(), async (req,res,next)=>{
   
    try{
        const id = req.params.id
        const appt = await Appts.getApptsById(id)
        if(!appt){
            res.status(400).json({message: `there is no event to delete with id ${id}`})
        }else{
            await Appts.removeAppt(id)
            res.status(203).json({message: `appointment with ${id} is deleted successfully`})
        }
        
    }
    catch(err){next(err)}
})

module.exports = router