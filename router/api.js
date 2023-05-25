const express = require("express")
const router = express.Router();
const Signup = require("../model/schema")

router.get("/users",(req,res,next)=>{
    Signup.find().then((result)=>{
     res.send(result)
    })
});
router.get("/users/:email",(req,res,next)=>{
    Signup.find({email:req.params.email}).then((result)=>{
        res.send(result)})
})



router.post('/users',function(req,res,next){    
    
    Signup.create(req.body).then(function(schema){
     res.send(schema);
     }).catch(next)
})
    









module.exports=router