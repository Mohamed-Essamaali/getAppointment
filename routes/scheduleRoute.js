const express = require('express')
const router = express.Router()
router.use(express.json())
const Appts = require('../models/scheduleModel')

// get list of appointments

router.get('/appts',async (req,res,next)=>{
    const appts = await Appts.getAppts() 
    res.status(200).json(appts)
})

router.get('/appts/:month/:day', async (req,res,next)=>{

    const month = req.params.month
    const day = req.params.day
    const appts = await Appts.getApptByDay(month,day)
    res.status(200).json(appts)
})

router.get('/appts/:id', async (req,res,next)=>{
  
        
        try{
            const id = req.params.id
            const appt = await Appts.getApptsById(id)
            if(!appt){
                res.status(400).json({message:`no appointment exist with id ${id}`})
            }else{
                res.status(200).json(appt)
            }
           
        }
       
        catch(err){next(err)}
    
})

//adding new appointment
router.post('/appts', async (req,res,next)=>{
    try{
        const {name,month,time,email} = req.body
        if(!name || !month || !time || !email){
            res.status(404).json({message:'missing required information'})
        }
        else
        {
            const appt =  await Appts.addAppt(req.body)
        
            res.status(201).json(appt)
        }
    }
    catch(err){next(err)}
})


//editing appt information
router.put('/appts/:id', async (req,res,next)=>{
   
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

router.delete('/appts/:id',async (req,res,next)=>{
   
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