"use strict";

var mongoose = require('mongoose');

var repairSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  phone: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    maxlength: 50
  },
  Img1: {
    type: String,
    maxlength: 50
  },
  address: {
    type: String,
    maxlength: 100
  },
  text: {
    type: String,
    maxlength: 200
  },
  title: {
    type: String,
    maxlength: 100
  },
  Date: {
    type: String,
    maxlength: 50
  },
  success: {
    type: Number
  },
  path: {
    type: String,
    maxlength: 100
  },
  path1: {
    type: String,
    maxlength: 100
  },
  people: {
    type: Number
  },
  id_count: {
    type: Number
  }
});
var Repair = mongoose.model('Repair', repairSchema);
module.exports = {
  Repair: Repair
};