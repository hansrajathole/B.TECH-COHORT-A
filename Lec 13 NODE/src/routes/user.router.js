const express = require("express")
const router = express.Router()
const userModel = require("../models/user.model")


router.get("/register" , async (req, res)=>{

   const {username , email , password } = req.query
    
    const user = await userModel.create({
        username : username,
        email : email,
        password : password
    })
    
    console.log(user);
    
    res.send("register successful")
})

module.exports = router