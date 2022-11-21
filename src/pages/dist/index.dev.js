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

var _KakaoMap = _interopRequireDefault(require("../components/KakaoMap"));

var _realtimedetail = _interopRequireDefault(require("./realtimedetail"));

var _noticedetail = _interopRequireDefault(require("./noticedetail"));

var _privacy = _interopRequireDefault(require("./privacy"));

var _namechange = _interopRequireDefault(require("./namechange"));

var _agencychange = _interopRequireDefault(require("./agencychange"));

var _profilechange = _interopRequireDefault(require("./profilechange"));

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
  realtime: _realtime["default"],
  KakaoMap: _KakaoMap["default"],
  realtimedetail: _realtimedetail["default"],
  noticedetail: _noticedetail["default"],
  privacy: _privacy["default"],
  namechange: _namechange["default"],
  agencychange: _agencychange["default"],
  profilechange: _profilechange["default"]
};
var _default = path;
exports["default"] = _default;