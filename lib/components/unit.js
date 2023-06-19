"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _base = _interopRequireDefault(require("./base"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var Unit = /*#__PURE__*/function (_Base) {
  (0, _inherits2["default"])(Unit, _Base);
  var _super = _createSuper(Unit);
  function Unit(props) {
    var _this$state;
    var _this;
    (0, _classCallCheck2["default"])(this, Unit);
    _this = _super.call(this, props);
    _this.state = (_this$state = {
      type: 'text',
      title: '',
      name: '',
      tooltip: '',
      alert: '',
      duplicatedField: '',
      path: 'path',
      converter: '',
      normal: 'size',
      resize: 'true',
      option: [{
        value: '',
        label: ''
      }],
      validator: [{
        option: '',
        value: '',
        message: ''
      }],
      optionFormat: 'pref',
      openValidator: false,
      openConverter: false,
      alt: false
    }, (0, _defineProperty2["default"])(_this$state, "resize", true), (0, _defineProperty2["default"])(_this$state, "useExpand", true), (0, _defineProperty2["default"])(_this$state, "fileNameMethod", 'random'), (0, _defineProperty2["default"])(_this$state, "useDropArea", true), (0, _defineProperty2["default"])(_this$state, "dropAreaWidth", 200), (0, _defineProperty2["default"])(_this$state, "dropAreaHeight", 200), (0, _defineProperty2["default"])(_this$state, "useFocusImage", false), (0, _defineProperty2["default"])(_this$state, "focusImageWidth", 400), (0, _defineProperty2["default"])(_this$state, "focusImageHeight", 400), (0, _defineProperty2["default"])(_this$state, "startHeadingLevel", 2), (0, _defineProperty2["default"])(_this$state, "endHeadingLevel", 3), (0, _defineProperty2["default"])(_this$state, "mediaType", 'image'), _this$state);
    return _this;
  }
  (0, _createClass2["default"])(Unit, [{
    key: "submit",
    value: function submit() {
      var _this$state2 = this.state,
        name = _this$state2.name,
        type = _this$state2.type,
        title = _this$state2.title;
      var actions = this.props.actions;
      if (name && type && title) {
        actions.addCustomUnit(this.state);
      } else {
        this.setState({
          alert: true
        });
      }
    }
  }, {
    key: "typeSelectRender",
    value: function typeSelectRender() {
      var _this2 = this;
      var type = this.state.type;
      return /*#__PURE__*/_react["default"].createElement("select", {
        id: "type",
        value: type,
        className: "acms-admin-form-width-full",
        onChange: function onChange(e) {
          _this2.updateState('type', e.target.value);
        }
      }, /*#__PURE__*/_react["default"].createElement("option", {
        value: "text"
      }, "\u30C6\u30AD\u30B9\u30C8"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "textarea"
      }, "\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "lite-editor"
      }, "\u30A4\u30F3\u30E9\u30A4\u30F3\u30A8\u30C7\u30A3\u30BF\u30FC"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "rich-editor"
      }, "\u30EA\u30C3\u30C1\u30A8\u30C7\u30A3\u30BF\u30FC"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "table"
      }, "\u30C6\u30FC\u30D6\u30EB"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "select"
      }, "\u30BB\u30EC\u30AF\u30C8\u30DC\u30C3\u30AF\u30B9"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "radio"
      }, "\u30E9\u30B8\u30AA\u30DC\u30BF\u30F3"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "checkbox"
      }, "\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "media"
      }, "\u30E1\u30C7\u30A3\u30A2"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "image"
      }, "\u753B\u50CF"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "file"
      }, "\u30D5\u30A1\u30A4\u30EB"));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
        type = _this$state3.type,
        title = _this$state3.title,
        name = _this$state3.name,
        tooltip = _this$state3.tooltip;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", {
        className: "acms-admin-admin-title2"
      }, "\u30AB\u30B9\u30BF\u30E0\u30E6\u30CB\u30C3\u30C8"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "customFieldFunction"
      }, this.renderModal(), this.renderAlert(), this.renderBasic(), /*#__PURE__*/_react["default"].createElement("div", {
        className: "customFieldLine"
      }), type === 'select' && /*#__PURE__*/_react["default"].createElement("div", null, this.renderSnippet(), this.renderOption()), type === 'radio' && /*#__PURE__*/_react["default"].createElement("div", null, this.renderSnippet(), this.renderOption()), type === 'checkbox' && /*#__PURE__*/_react["default"].createElement("div", null, this.renderSnippet(), this.renderOption()), type === 'image' && /*#__PURE__*/_react["default"].createElement("div", null, this.renderImage(), this.renderImageResize()), type === 'file' && /*#__PURE__*/_react["default"].createElement("div", null, this.renderFile()), type === 'media' && /*#__PURE__*/_react["default"].createElement("div", null, this.renderMediaOption()), type === 'rich-editor' && /*#__PURE__*/_react["default"].createElement("div", null, this.renderRichEditorOption()), this.renderValidator(false), this.renderMake()));
    }
  }]);
  return Unit;
}(_base["default"]);
exports["default"] = Unit;