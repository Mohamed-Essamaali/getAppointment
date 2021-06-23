require('dotenv').config()
const express = require('express')
const { env } = require('process')
const server = express()
const userRoute = require('./routes/usersRoute')
const port = process.env.port || 5000

server.use(userRoute)

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})