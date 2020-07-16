const express = require("express");
const helmet = require("helmet");
const morgan = require('morgan')
const cors = require('cors')

const colors = require('colors')
const characterRouter = require('../auth/characterRouter')
const server = express();
server.use(cors())

server.use(express.json());


server.use(helmet())
server.use (morgan('dev'))

server.use('/api/character', characterRouter)


server.get('/', (req,res)=>{
    res.send('server is up')
})


module.exports = server