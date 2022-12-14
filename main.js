"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _iFrame = /*#__PURE__*/new WeakMap();
var _createIframe = /*#__PURE__*/new WeakSet();
/**
 * Partner Onboarding Class 
 */
var PartnerOnboarding = /*#__PURE__*/function () {
  function PartnerOnboarding(_ref) {
    var _this = this;
    var partnerId = _ref.partnerId;
    _classCallCheck(this, PartnerOnboarding);
    _classPrivateMethodInitSpec(this, _createIframe);
    _classPrivateFieldInitSpec(this, _iFrame, {
      writable: true,
      value: null
    });
    _defineProperty(this, "start", function () {
      document.append(_classPrivateMethodGet(_this, _createIframe, _createIframe2).call(_this));
      window.onmessage = function (e) {
        return console.log(e);
      };
      return new Promise(function (resolve, reject) {
        resolve(_this.status);
        reject({
          onboardingStatus: _this.status
        });
      });
    });
    this.partnerId = partnerId;
    this.status = {};
    this.url = 'easy.razorpay.com';
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
  this.iframe = iframe;
  return iframe;
}
window.partnerOnboarding = PartnerOnboarding;
var _default = PartnerOnboarding;
exports["default"] = _default;
