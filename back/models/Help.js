const mongoose = require('mongoose');


const helpSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    nickname:{
        type:String,
        maxlength:50
    },
    id:{
        type:String,
        maxlength:50
    },
    phone:{
        type: String,
        maxlength:50,
     }, 
     address:{
        type:String,
        maxlength:100,
     },
    path:{
        type:String,
        maxlength:100,
    },
    email:{
        type:String,
        maxlength:50,
    },
    image:{
        type:String,
        maxlength:100,
    },
    Date:{
        type:String,
        maxlength:50
    },
    success:{
        type:String,
        maxlength:20
    },
    countV:{
        type:Number
    },

})


const Help = mongoose.model('Help', helpSchema)

module.exports = { Help }