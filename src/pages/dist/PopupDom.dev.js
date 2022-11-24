"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PopupDom = function PopupDom(_ref) {
  var children = _ref.children;
  var el = document.getElementById('popupDom');
  return _reactDom["default"].createPortal(children, el);
};

var _default = PopupDom;
exports["default"] = _default;