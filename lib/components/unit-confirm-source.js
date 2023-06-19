"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var UnitConfirmSource = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(UnitConfirmSource, _Component);
  var _super = _createSuper(UnitConfirmSource);
  function UnitConfirmSource(props) {
    (0, _classCallCheck2["default"])(this, UnitConfirmSource);
    return _super.call(this, props);
  }
  (0, _createClass2["default"])(UnitConfirmSource, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        customunit = _this$props.customunit,
        acmscss = _this$props.acmscss;
      return /*#__PURE__*/_react["default"].createElement("table", {
        className: (0, _classnames["default"])({
          'acms-admin-table-admin-edit acms-admin-table-admin-edit-bordered': acmscss
        })
      }, customunit.map(function (item) {
        if (!item.name) {
          return null;
        }
        if (item.type === 'text') {
          return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, item.title), /*#__PURE__*/_react["default"].createElement("td", null, "{".concat(item.name, "}")));
        } else if (item.type === 'textarea') {
          return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, item.title), /*#__PURE__*/_react["default"].createElement("td", null, "{".concat(item.name, "}[escape|nl2br]")));
        } else if (item.type === 'select') {
          return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, item.title), /*#__PURE__*/_react["default"].createElement("td", null, item.option.map(function (option) {
            return /*#__PURE__*/_react["default"].createElement("div", null, "<!-- BEGIN_IF [{".concat(item.name, "}/eq/").concat(option.value, "] -->"), option.label, '<!-- END_IF -->');
          })));
        } else if (item.type === 'radio') {
          return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, item.title), /*#__PURE__*/_react["default"].createElement("td", null, item.option.map(function (option) {
            return "<!-- BEGIN_IF [{".concat(item.name, "}/eq/").concat(option.value, "] -->\n              ").concat(option.label, "\n              <!-- END_IF -->");
          })));
        } else if (item.type === 'checkbox') {
          return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, item.title), /*#__PURE__*/_react["default"].createElement("td", null, "<!-- BEGIN ".concat(item.name, ":loop -->"), "<!-- BEGIN ".concat(item.name, ":glue -->,<!-- END ").concat(item.name, ":glue -->"), item.option.map(function (option) {
            return "<!-- BEGIN_IF [{".concat(item.name, "}/eq/").concat(option.value, "] -->\n              ").concat(option.value, "\n              <!-- END_IF -->");
          }), "<!-- END ".concat(item.name, ":loop -->")));
        } else if (item.type === 'file') {
          var src = '/images/fileicon/';
          var alt = 'file';
          if (item.extension) {
            src += "".concat(item.extension, ".svg");
            alt += item.extension;
          } else {
            src += 'file.svg';
          }
          return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, item.title), /*#__PURE__*/_react["default"].createElement("td", null, "<!-- BEGIN ".concat(item.name, "@path:veil -->"), /*#__PURE__*/_react["default"].createElement("a", {
            href: "%{ARCHIVES_DIR}{".concat(item.name, "@path}")
          }, /*#__PURE__*/_react["default"].createElement("img", {
            src: src,
            width: "64",
            height: "64",
            alt: alt
          })), "<!-- END ".concat(item.name, "@path:veil -->")));
        } else if (item.type === 'image') {
          return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, item.title), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("img", {
            src: "%{ARCHIVES_DIR}{".concat(item.name, "@path}"),
            width: "64",
            height: "64",
            alt: "{".concat(item.name, "@alt}")
          })));
        } else if (item.type === 'media') {
          return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, item.title), /*#__PURE__*/_react["default"].createElement("td", null, "<!-- BEGIN_IF [{".concat(item.name, "@type}/eq/file] -->"), /*#__PURE__*/_react["default"].createElement("a", {
            href: "{".concat(item.name, "@path}")
          }, /*#__PURE__*/_react["default"].createElement("img", {
            alt: "{".concat(item.name, "@alt}"),
            src: "{".concat(item.name, "@thumbnail}"),
            style: {
              width: '64px',
              height: 'auto'
            }
          })), "<!-- END_IF -->", "<!-- BEGIN_IF [{".concat(item.name, "@type}/eq/image] -->"), "<!-- BEGIN_IF [{".concat(item.name, "@link}/nem] -->"), /*#__PURE__*/_react["default"].createElement("a", {
            href: "{".concat(item.name, "@link}")
          }, "<!-- END_IF -->", item.useFocusImage && /*#__PURE__*/_react["default"].createElement("div", {
            style: {
              width: "".concat(item.focusImageWidth, "px"),
              height: "".concat(item.focusImageHeight, "px")
            }
          }, /*#__PURE__*/_react["default"].createElement("img", {
            className: "js-focused-image",
            "data-focus-x": "{".concat(item.name, "@focalX}"),
            "data-focus-y": "{".concat(item.name, "@focalY}"),
            alt: "{".concat(item.name, "@alt}"),
            src: "%{MEDIA_ARCHIVES_DIR}{".concat(item.name, "@path}[resizeImg(").concat(item.focusImageWidth, ")]")
          })), !item.useFocusImage && /*#__PURE__*/_react["default"].createElement("img", {
            alt: "{".concat(item.name, "@alt}"),
            src: "%{MEDIA_ARCHIVES_DIR}{".concat(item.name, "@path}")
          }), "<!-- BEGIN_IF [{".concat(item.name, "@link}/nem] -->")), "<!-- END_IF -->", "<!-- BEGIN_IF [{".concat(item.name, "@text}/nem] -->"), /*#__PURE__*/_react["default"].createElement("p", null, "{".concat(item.name, "@text}")), '<!-- END_IF -->', '<!-- END_IF -->'));
        } else if (item.type === 'rich-editor') {
          return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, item.title), /*#__PURE__*/_react["default"].createElement("td", null, "{".concat(item.name, "@html}[raw]")));
        } else if (item.type === 'lite-editor') {
          return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, item.title), /*#__PURE__*/_react["default"].createElement("td", null, "{".concat(item.name, "}[raw]")));
        } else if (item.type === 'table') {
          return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, item.title), /*#__PURE__*/_react["default"].createElement("td", null, "{".concat(item.name, "}[raw]")));
        }
      }));
    }
  }]);
  return UnitConfirmSource;
}(_react.Component);
exports["default"] = UnitConfirmSource;