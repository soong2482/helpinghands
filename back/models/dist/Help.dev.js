"use strict";

var mongoose = require('mongoose');

var helpSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  nickname: {
    type: String,
    maxlength: 50
  },
  helpid: {
    type: String,
    maxlength: 50
  },
  repairid: {
    type: String,
    maxlength: 50
  },
  phone: {
    type: String,
    maxlength: 50
  },
  address: {
    type: String,
    maxlength: 100
  },
  path: {
    type: String,
    maxlength: 100
  },
  email: {
    type: String,
    maxlength: 50
  },
  image: {
    type: String,
    maxlength: 100
  },
  Date: {
    type: String,
    maxlength: 50
  },
  success: {
    type: String,
    maxlength: 20
  },
  countV: {
    type: Number
  }
});
var Help = mongoose.model('Help', helpSchema);
module.exports = {
  Help: Help
};