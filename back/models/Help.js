const mongoose = require('mongoose');


const helpSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    phone:{
        type: String,
        maxlength:50,
     }, 
    email:{
        type:String,
        maxlength:50,
    },
    image:{
        type:String,
        maxlength:100,
    },
    text:{
        type:String,
        maxlength:200
    },
    title: {
        type:String,
        maxlength:100
    },
    Date:{
        type:String,
        maxlength:50
    },
    success:{
        type:String,
        maxlength:10
    }

})


const Help = mongoose.model('Help', helpSchema)

module.exports = { Help }