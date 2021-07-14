const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
router.use(express.json())
const Users = require('../models/usersModel')

//users
router.get('/users', async (req,res,next)=>{
    users = await Users.find()
    res.status(200).json(users)
})

//user by id
router.get('/users/:id', async (req,res,next)=>{
    const id = req.params
    const user = await Users.findById(id)
    res.status(200).json(user)
})

// register 
router.post('/auth/register', async (req,res,next)=>{
    
    try{
        const {username,password,phoneNumber} = req.body
        if(!username || ! password || !phoneNumber){
            return res.status(404).json({message:"username, password and phoneNumber are required"})
        }
        const user =  await Users.findBy(username)
        if(user){
            return res.status(409).json({message: "username is already taken"})
        }

        const newUser = await Users.create({
            username,
            password: await bcrypt.hash(password,12),
            phoneNumber
        })
        res.status(201).json(newUser)
    }
    catch(err){console.log('register errors',err)
            res.send(err)
            next(err)
        }
    
       
   
   
    
})

//login user 

router.post('/auth/login',async  (req,res,next)=>{
    
    
    const newUser =  Users.add(req.body)
    res.status(200).json(newUser)



})
// update user based on id
router.put('/users/:id', (req,res,next)=>{
    const id = req.params
    const updatedUser = Users.update(id,req.body)
    res.status(200).json(updatedUser)
})
//delete user 
router.delete('/users/:id', async (req,res,next)=>{
    const {id} = req.params
    const user = await Users.remove({id})
    res.status(200).json({message:`user ${user}, id ${id} deleted successfully`})
})
module.exports = router