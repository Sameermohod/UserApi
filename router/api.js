const Signup = require("../model/schema")
const express = require("express")
const router = express.Router();

router.get("/users",(req,res)=>{
    Signup.find().then((result)=>{
     res.send(result)
    })
});
router.get("/users/:email",(req,res)=>{
    Signup.find({email:req.params.email}).then((result)=>{
        res.send(result)})
})



router.post('/users',function(req,res){
    console.log(req.body)
    Signup.create(req.body).then(function(schema){
     res.send(schema);
     res.end();
     });
    });









module.exports=router