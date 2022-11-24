"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OS_ENV = exports.APP_ENV = void 0;
var APP_ENV = {
  APP: "app",
  // morpheus 앱으로 접속 시 경우
  BROWSER: "browser" // 크로스 플랫폼으로 일반 web도 지원하는 경우

}; // 모피어스 앱 내 개발환경

exports.APP_ENV = APP_ENV;
var OS_ENV = {
  IOS: "ios",
  // ios
  ANDROID: "android",
  // android
  UNKOWN: "unknown"
};
exports.OS_ENV = OS_ENV;