const mongoose = require('mongoose');

const repairSchema = mongoose.Schema({
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
    image2:{
        type:String,
        maxlength:100,
    },
    image3:{
        type:String,
        maxlength:100,
    },
    image4:{
        type:String,
        maxlength:100,
    },
    address:{
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

var Repair = mongoose.model('Repair', repairSchema)
module.exports = { Repair }