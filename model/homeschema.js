const mongoose =require('mongoose')

const formschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    } ,
    email:{
        type:String,
        unique:true,
        required:true
    } ,
    pass:{
        type:String,
        required:true
    } 
})

module.exports= mongoose.model('register', formschema)