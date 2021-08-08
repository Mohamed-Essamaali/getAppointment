const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()
router.use(express.json())
const Users = require('./usersModel')
const {restrict} = require('../../middleware/users-middleware')

//welcome message

router.get('/',(req,res,next)=>{

    return res.status(200).json({message:'Welcome'})

})

//users
router.get('/users' ,restrict(), async (req,res,next)=>{

    try{
        users = await Users.find()
        res.status(200).json(users)
    }
    catch(err){next(err)}
   
})

//user by id
router.get('/users/:id', async (req,res,next)=>{

    try{
        const id = req.params.id
        const user = await Users.findById(id)
        if(!user){
            res.status(404).json({message:`no user exist with id ${id}`})
        }
        
        res.status(200).json(user)
    }
    catch(err){next(err)}
    
})

// register 
router.post('/register', async (req,res,next)=>{
    
    try{
        const {username,password,email} = req.body
        if(!username || !password || !email){
            return res.status(404).json({message:"username, password and email are required"})
        }
        const user =  await Users.findBy(username)
        if(user){
            return res.status(409).json({message: "username is already taken"})
        }
        const newUser = await Users.create({
            username,
            password: await bcrypt.hash(password,12),
            email,
            role: await username!=process.env.USER_ROLE? 'basic':'admin'
        })
       

        res.status(201).json(newUser)
    }
    catch(err){console.log('register errors',err)
            res.send(err)
            next(err)
        }
})

//login user 

router.post('/login',async  (req,res,next)=>{
    
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
            role:user.role,
        },process.env.JWT_SECRET)

        res.cookie('token',token)  //tell the client to save this token in its cookie jar
        res.status(200).json({token:token})

    }
    catch(err){next(err)}



})
//logout

router.get('/logout',restrict(), async (req,res,next)=>{

    try{
        req.session.destroy(err=>{
            if(err){
                next(err)
            } else{
                res.send({message:'logout successfully'})
                res.status(204).end()
            }
        })
    }
    catch(err){next(err)}
    next()
})
module.exports = router