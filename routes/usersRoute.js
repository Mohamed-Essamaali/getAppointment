const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()
router.use(express.json())
const Users = require('../models/usersModel')

//users
router.get('https://getappointment.herokuapp.com/users', async (req,res,next)=>{
    try{
        users = await Users.find()
        res.status(200).json(users)
    }
    catch(err){next(err)}
   
})

//user by id
router.get('https://getappointment.herokuapp.com/users/:id', async (req,res,next)=>{

    try{
        const id = req.params
        const user = await Users.findById(id)
        res.status(200).json(user)
    }
    catch(err){next(err)}
    
})

// register 
router.post('https://getappointment.herokuapp.com/register', async (req,res,next)=>{
    
    try{
        const {username,password,email} = req.body
        if(!username || ! password || !email){
            return res.status(404).json({message:"username, password and email are required"})
        }
        const user =  await Users.findBy(username)
        if(user){
            return res.status(409).json({message: "username is already taken"})
        }

        const newUser = await Users.create({
            username,
            password: await bcrypt.hash(password,12),
            email
        })
        res.status(201).json(newUser)
    }
    catch(err){console.log('register errors',err)
            res.send(err)
            next(err)
        }
    
       
   
   
    
})

//login user 

router.post('https://getappointment.herokuapp.com/login',async  (req,res,next)=>{
    
    try{
        const{username,password} = req.body
        if(!username || ! password){
            return res.status(404).json({message:"username, password are required"})
            
        }
        const user = await Users.findBy(username)
        const validPassword = await bcrypt.compare(password,user.password)
        if(!validPassword){
            res.status(401).json({message:'invalid credentials'})
        }
        const token = jwt.sign({
            userId:user.id,
        },process.env.JWT_SECRET)

        res.status(200).json({token:token})

    }
    catch(err){next(err)}



})
// update user based on id
router.put('https://getappointment.herokuapp.com/users/:id', (req,res,next)=>{
    const id = req.params
    const updatedUser = Users.update(id,req.body)
    res.status(200).json(updatedUser)
})
//delete user 
router.delete('https://getappointment.herokuapp.com/users/:id', async (req,res,next)=>{
    const {id} = req.params
    const user = await Users.remove({id})
    res.status(200).json({message:`user ${user}, id ${id} deleted successfully`})
})
module.exports = router