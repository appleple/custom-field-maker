"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _base = _interopRequireDefault(require("./base"));
var _MakerContext = require("../../store/MakerContext");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var Field = exports.default = /*#__PURE__*/function (_Base) {
  function Field(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Field);
    _this = _callSuper(this, Field, [props]);
    _this.state = {
      type: 'text',
      subType: '',
      title: '',
      name: '',
      tooltip: '',
      alert: false,
      duplicatedField: '',
      path: 'path',
      converter: '',
      normal: 'size',
      resize: true,
      useDropArea: true,
      dropAreaWidth: 200,
      dropAreaHeight: 200,
      useFocusImage: false,
      focusImageWidth: 400,
      focusImageHeight: 400,
      startHeadingLevel: 2,
      endHeadingLevel: 3,
      mediaType: 'image',
      useExpand: true,
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
      alt: false,
      fileNameMethod: 'random',
      noSearch: false,
      extension: ''
    };
    return _this;
  }
  (0, _inherits2.default)(Field, _Base);
  return (0, _createClass2.default)(Field, [{
    key: "submit",
    value: function submit() {
      var _this$state = this.state,
        alert = _this$state.alert,
        name = _this$state.name,
        type = _this$state.type,
        title = _this$state.title;
      var addCustomfield = this.context.addCustomfield;
      if (name && type && title) {
        if (alert) this.setState({
          alert: false
        });
        addCustomfield(this.state);
      } else {
        this.setState({
          alert: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var type = this.state.type;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", {
        className: "acms-admin-admin-title2"
      }, "\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9"), /*#__PURE__*/_react.default.createElement("div", {
        className: "customFieldFunction"
      }, this.renderModal(), this.renderAlert(), this.renderBasic(), /*#__PURE__*/_react.default.createElement("div", {
        className: "customFieldLine"
      }), type === 'select' && /*#__PURE__*/_react.default.createElement("div", null, this.renderSnippet(), this.renderOption()), type === 'radio' && /*#__PURE__*/_react.default.createElement("div", null, this.renderSnippet(), this.renderOption()), type === 'checkbox' && /*#__PURE__*/_react.default.createElement("div", null, this.renderSnippet(), this.renderOption()), type === 'image' && /*#__PURE__*/_react.default.createElement("div", null, this.renderImage(), this.renderImageResize()), type === 'file' && /*#__PURE__*/_react.default.createElement("div", null, this.renderFile()), type === 'media' && /*#__PURE__*/_react.default.createElement("div", null, this.renderMediaOption()), type === 'rich-editor' && /*#__PURE__*/_react.default.createElement("div", null, this.renderRichEditorOption()), this.renderValidator(), this.renderMake()));
    }
  }]);
}(_base.default);
(0, _defineProperty2.default)(Field, "contextType", _MakerContext.MakerContext);