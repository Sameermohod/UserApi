const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema

const signupSchema = new Schema({
    firstName: {
        type:String,
        required:[true,'name is required']
    },
    lastName:{
        type:String,
        
    },
    email:{
        type:String,
        
        unique:true

    },
    password:{
        type:String,
        
    }
});

const Signup = mongoose.model('signup',signupSchema);
module.exports = Signup;