"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = loginUser;
exports.registerUser = registerUser;
exports.repairUpload = repairUpload;
exports.repairApplication = repairApplication;
exports.auth = auth;
exports.required = required;
exports.requiredList = requiredList;
exports.datarequire = datarequire;
exports.userdatarequire = userdatarequire;
exports.successdata = successdata;

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

function required(dataToSubmit) {
  var request = _axios["default"].post('/api/help/require', dataToSubmit).then(function (response) {
    return response.data;
  });

  return {
    type: _types.REQUIRE_HELP,
    payload: request
  };
}

function requiredList(dataToSubmit) {
  var request = _axios["default"].post('/api/help/list', dataToSubmit).then(function (response) {
    return response.data;
  });

  return {
    type: _types.REQUIRE_LIST,
    payload: request
  };
}

function datarequire(dataToSubmit) {
  var request = _axios["default"].post('/api/repair/dataList', dataToSubmit).then(function (response) {
    return response.data;
  });

  return {
    type: _types.DATA_REQUIRE,
    payload: request
  };
}

function userdatarequire(dataToSubmit) {
  var request = _axios["default"].post('/api/help/userdatarequire', dataToSubmit).then(function (response) {
    return response.data;
  });

  return {
    type: _types.USERDATA_REQUIRE,
    payload: request
  };
}

function successdata(dataToSubmit) {
  var request = _axios["default"].post('/api/help/success', dataToSubmit).then(function (response) {
    return response.data;
  });

  return {
    type: _types.SUCCESS_DATA,
    payload: request
  };
}