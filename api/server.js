const express = require("express");
const helmet = require("helmet");
const morgan = require('morgan')
const cors = require('cors')
const server = express();



server.use(morgan('dev'))
server.use(cors())

server.use(express.json());
module.exports = server