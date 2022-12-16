"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _iFrame = /*#__PURE__*/new WeakMap();
var _createIframe = /*#__PURE__*/new WeakSet();
var _createCloseButton = /*#__PURE__*/new WeakMap();
/**
 * Partner Onboarding Class 
 */
var PartnerOnboarding = /*#__PURE__*/function () {
  function PartnerOnboarding(_ref) {
    var _this = this;
    var partnerId = _ref.partnerId,
      successCallback = _ref.successCallback;
    _classCallCheck(this, PartnerOnboarding);
    _classPrivateMethodInitSpec(this, _createIframe);
    _classPrivateFieldInitSpec(this, _iFrame, {
      writable: true,
      value: null
    });
    _defineProperty(this, "start", function () {
      document.body.append(_classPrivateMethodGet(_this, _createIframe, _createIframe2).call(_this));
      document.body.append(_classPrivateFieldGet(_this, _createCloseButton).call(_this));
      window.onmessage = function (e) {
        _this.data = _objectSpread(_objectSpread({}, _this.data.status), e.data);
      };
      return new Promise(function (resolve, reject) {
        resolve(_this.data);
        reject({
          onboardingStatus: _this.status
        });
      });
    });
    _classPrivateFieldInitSpec(this, _createCloseButton, {
      writable: true,
      value: function value() {
        var button = document.createElement('button');
        button.innerHTML = 'close';
        button.style = _objectSpread(_objectSpread({}, button.style), {}, {
          position: 'absolute',
          top: 0,
          right: 0
        });
        button.onclick = function () {
          console.log(_this);
          _this.success(_this.data);
          _this.iframe.style.display = "none";
          document.body.removeChild(button);
        };
        return button;
      }
    });
    this.partnerId = partnerId;
    this.data = {
      status: '',
      mId: '',
      section: ''
    };
    this.url = 'http://localhost:8000/phantom/onboarding/';
    this.success = function (status) {
      return successCallback(status);
    };
  }
  _createClass(PartnerOnboarding, [{
    key: "getiFrame",
    value: function getiFrame() {
      return this.iFrame;
    }
  }]);
  return PartnerOnboarding;
}();
function _createIframe2() {
  var iframe = document.createElement('iframe');
  iframe.src = "".concat(this.url, "?partnerId=").concat(this.partnerId);
  iframe.className = "razorpay-onboarding-iframe";
  iframe.width = '700';
  iframe.height = '700';
  this.iframe = iframe;
  return iframe;
}
window.partnerOnboarding = PartnerOnboarding;
var _default = PartnerOnboarding;
exports["default"] = _default;
