"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentLocation = void 0;

var _config = require("../common/config");

var _constants = require("../common/constants");

var _ = _interopRequireDefault(require("./"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var coordsApadter = function coordsApadter(_ref) {
  var latitude = _ref.latitude,
      longitude = _ref.longitude;
  return {
    lat: Number(latitude),
    lng: Number(longitude)
  };
};

var getCurrentLocation = function getCurrentLocation() {
  return new Promise(function (resolve, reject) {
    if (_config.RUNTIME.TYPE === _constants.APP_ENV.BROWSER) {
      console.warn("[getCurrentLocation] function is only for Morpheus App");
      resolve({}); // 넘어가기 또는 기본값 세팅
    } else {
      _["default"].plugin("location").current({
        timeout: 10000,
        maximumAge: 1,
        callback: function callback(_ref2) {
          var status = _ref2.status,
              message = _ref2.message,
              coords = _ref2.coords;

          if (status === "SUCCESS" && coords) {
            // 성공
            resolve(coordsApadter(coords));
          } else {
            // 실패
            reject(new Error("Getting GPS coords is failed"));
          }
        }
      });
    }
  });
};

exports.getCurrentLocation = getCurrentLocation;