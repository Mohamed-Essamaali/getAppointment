const bcrypt  = require('bcryptjs')
const Users = require('../api/auth/usersModel')
const express = require('express')
const jwt= require('jsonwebtoken')
const server = express()
server.use(express.json())

const validateUserData = ()=>{
    return async (req,res,next)=>{
        try{
                const {username,password,email} = req.body
            if(!username || !password || !email){
                return res.status(404).json({message:"username, password and email are required"})
            }
            const user =  await Users.findBy(username)
            if(user){
                return res.status(409).json({message: "username is already taken"})
            }
        }
       catch(err){ next(err)}
    }

}

const validateApptData = ()=>{
    return async (req,res,next)=>{
        try{
            const {name,month,day, time,email,completed,available} = req.body
            const addedAppt = {user_id:id,name: name,month:month,day:day,time:time,email:email,completed:completed,available:available} 
         
            if(!name || !month || !time || !email){
                res.status(404).json({message:'missing required information'})
            }
        }
        catch(err){next(err)}
    }
        
    
}


const restrict =  ()=>{
    return  (req,res,next)=>{
    
        try{
            const token = req.cookies.token
            console.log('token in restrict mode',token, 'req.cookies: ',req.cookies)
            if(!token){
                res.status(403).json({message:'token required'})
            }
            jwt.verify(token,process.env.JWT_SECRET,async (err,decoded)=>{
                if(err){
                    res.status(403).json({message:'invalid token'})
                    console.log(err.message)
                    next()
                }
            })
          next()
        

        }
        catch(err){next(err)        }
    }
}



module.exports = {restrict,validateApptData,validateUserData}