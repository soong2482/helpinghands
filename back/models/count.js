const mongoose = require('mongoose');

const countSchema = mongoose.Schema({
 totalPosts:{
    type:Number
 },
 name:{
    type:String,
    maxlength:50,
 }

})


var Count = mongoose.model('Count', countSchema)

module.exports = { Count }