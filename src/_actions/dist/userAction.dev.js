"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = loginUser;
exports.registerUser = registerUser;
exports.repairUpload = repairUpload;
exports.repairApplication = repairApplication;
exports.auth = auth;

var _axios = _interopRequireDefault(require("axios"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function loginUser(dataToSubmit) {
  var request = _axios["default"].post('/api/users/login', dataToSubmit).then(function (response) {
    return response.data;
  });

  return {
    type: _types.LOGIN_USER,
    payload: request
  };
}

function registerUser(dataToSubmit) {
  var request = _axios["default"].post('/api/users/register', dataToSubmit).then(function (response) {
    return response.data;
  });

  return {
    type: _types.REGISTER_USER,
    payload: request
  };
}

function repairUpload(dataToSubmit) {
  var request = _axios["default"].post('/api/repair/upload', dataToSubmit).then(function (response) {
    return response.data;
  });

  return {
    type: _types.UPLOAD_REPAIR,
    payload: request
  };
}

function repairApplication(dataToSubmit) {
  var request = _axios["default"].post('/api/repair/application', dataToSubmit).then(function (response) {
    return response.data;
  });

  return {
    type: _types.APPLICATION_REPAIR,
    payload: request
  };
}

function auth() {
  var request = _axios["default"].get('/api/users/auth').then(function (response) {
    return response.data;
  });

  return {
    type: _types.AUTH_USER,
    payload: request
  };
}