"use strict";

var mongoose = require('mongoose');

var UserProfileSchema = mongoose.Schema({
  email: {
    type: String,
    maxlength: 50
  },
  profileImg: {
    ContentType: String,
    data: Buffer
  }
});
var UserProfile = mongoose.model('UserProfile', UserProfileSchema);
module.exports = {
  UserProfile: UserProfile
};