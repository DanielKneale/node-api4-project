const express = require("express")

const User = require("./user-model.js")

const router = express.Router()

router.get('/', (req,res) => {
    User.getAll()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            res.status(500).json({
                message: "Error getting users",
            })
        })
})

router.post('/register',(req,res)=>{
    if(!req.body.username || !req.body.password){
        res.status(404).json({message:" username and pass word required"})
    }else{
        User.register(req.body)
        res.status(201).json(`Welcome new user ${req.body.username}`)   
    }
    
})

router.post('/login',(req,res)=>{
    if(!req.body.username || !req.body.password){
        res.status(404).json({message:" username and pass word required"})
    }else{
        User.login(req.body)
        res.status(200).json(`Welcome new user ${req.body.username}`)   
    }
    
})


module.exports = router;