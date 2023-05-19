const express = require ('express');
const bodyParser= require('body-parser');
const mongoose=require("mongoose")


// set up express app
const app = express();



// connect to server 
mongoose.connect('mongodb://127.0.0.1:27017/signup')

app.use(bodyParser.json());

//initialize routes
app.use("/",require('./router/api'));


// listen for req
app.listen(process.env.port||5000,function(){
 console.log("now listening port 4000");
});