const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema

const signupSchema = new Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    }
});

const Signup = mongoose.model('signup',signupSchema);
module.exports = Signup;