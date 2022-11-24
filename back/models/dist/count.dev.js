"use strict";

var mongoose = require('mongoose');

var countSchema = mongoose.Schema({
  totalPosts: {
    type: Number
  },
  name: {
    type: String,
    maxlength: 50
  }
});
var Count = mongoose.model('Count', countSchema);
module.exports = {
  Count: Count
};