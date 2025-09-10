const express = require("express")

const router = express.Router()

router.get("/register",(req,res)=>{
    res.send("register router")
})
router.get("/login",(req,res)=>{
    res.send("login router")
})


module.exports = router