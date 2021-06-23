const express = require('express')
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

// add user
router.post('/users', async (req,res,next)=>{
    const newUser = await Users.add(req.body)
    res.status(200).json(newUser)
   
    
})


// update user based on id
router.put('/users/:id',(req,res,next)=>{
    const id = req.params
    updatedUser = Users.update(id,req.body)
    res.status(200).json(updatedUser)
})
//delete user 
router.delete('/users/:id', async (req,res,next)=>{
    const {id} = req.params
    const user = await Users.remove({id})
    res.status(200).json({message:`user ${user}, id ${id} deleted successfully`})
})
module.exports = router