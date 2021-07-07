require('dotenv').config()
const express = require('express')
const { env } = require('process')
const server = express()
const userRoute = require('./routes/usersRoute')
const apptRoute = require('./routes/scheduleRoute')
const port = process.env.PORT || 5000

server.use(userRoute)
server.use(apptRoute)

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})