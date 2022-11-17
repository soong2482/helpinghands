"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Home = _interopRequireDefault(require("./Home"));

var _firstpage = _interopRequireDefault(require("./firstpage"));

var _help = _interopRequireDefault(require("./help"));

var _notice = _interopRequireDefault(require("./notice"));

var _SignIn = _interopRequireDefault(require("./SignIn"));

var _SignUp = _interopRequireDefault(require("./SignUp"));

var _repair = _interopRequireDefault(require("./repair"));

var _Mypage = _interopRequireDefault(require("./Mypage"));

var _realtime = _interopRequireDefault(require("./realtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path = {
  Home: _Home["default"],
  help: _help["default"],
  notice: _notice["default"],
  firstpage: _firstpage["default"],
  repair: _repair["default"],
  SignIn: _SignIn["default"],
  SignUp: _SignUp["default"],
  mypage: _Mypage["default"],
  realtime: _realtime["default"]
};
var _default = path;
exports["default"] = _default;