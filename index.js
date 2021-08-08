require('dotenv').config()
const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const { env } = require('process')
const session = require('express-session')
const knexSessionStore = require('connect-session-knex')(session)
const cookieParser = require('cookie-parser')
const server = express()
const userRoute = require('./api/auth/usersRoute')
const apptRoute = require('./api/appts/scheduleRoute')
const {setUser} = require('./middleware/users-middleware')
const db = require('./data/config-db')
const port = process.env.PORT || 5000





server.use(cors())
server.use(helmet())


server.use(cookieParser()) // automatically parse incoming cookies and make them available in req.cookies 

server.use(userRoute)
// server.use(setUser)
server.use(apptRoute)


server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})