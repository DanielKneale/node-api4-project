const express = require("express");
const cors = require("cors")

const userRouter = require('./user-route')

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/user', userRouter)

server.get('/',(req,res) =>{
    res.send(`<h2> Welcome to my project <h2>`)
})

module.exports = server