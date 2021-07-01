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

var _react = _interopRequireDefault(require("react"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _base = _interopRequireDefault(require("./base"));

var Field =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(Field, _Base);

  function Field(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Field);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Field).call(this, props));
    _this.state = {
      type: 'text',
      title: '',
      name: '',
      tooltip: '',
      alert: false,
      duplicatedField: '',
      path: 'path',
      converter: '',
      normal: 'size',
      alt: false,
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
      resize: true,
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
      noSearch: false,
      extension: '',
      fileNameMethod: 'random'
    };
    return _this;
  }

  (0, _createClass2.default)(Field, [{
    key: "submit",
    value: function submit() {
      var _this$state = this.state,
          name = _this$state.name,
          type = _this$state.type,
          title = _this$state.title;
      var actions = this.props.actions;

      if (name && type && title) {
        actions.addCustomfield(this.state);
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
      return _react.default.createElement("select", {
        id: "type",
        value: type,
        className: "acms-admin-form-width-full",
        onChange: function onChange(e) {
          _this2.updateState('type', e.target.value);
        }
      }, _react.default.createElement("option", {
        value: "text"
      }, "\u30C6\u30AD\u30B9\u30C8"), _react.default.createElement("option", {
        value: "textarea"
      }, "\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2"), _react.default.createElement("option", {
        value: "lite-editor"
      }, "\u30A4\u30F3\u30E9\u30A4\u30F3\u30A8\u30C7\u30A3\u30BF\u30FC"), _react.default.createElement("option", {
        value: "rich-editor"
      }, "\u30EA\u30C3\u30C1\u30A8\u30C7\u30A3\u30BF\u30FC"), _react.default.createElement("option", {
        value: "table"
      }, "\u30C6\u30FC\u30D6\u30EB"), _react.default.createElement("option", {
        value: "select"
      }, "\u30BB\u30EC\u30AF\u30C8\u30DC\u30C3\u30AF\u30B9"), _react.default.createElement("option", {
        value: "checkbox"
      }, "\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9"), _react.default.createElement("option", {
        value: "radio"
      }, "\u30E9\u30B8\u30AA\u30DC\u30BF\u30F3"), _react.default.createElement("option", {
        value: "media"
      }, "\u30E1\u30C7\u30A3\u30A2"), _react.default.createElement("option", {
        value: "image"
      }, "\u753B\u50CF"), _react.default.createElement("option", {
        value: "file"
      }, "\u30D5\u30A1\u30A4\u30EB"));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          type = _this$state2.type,
          title = _this$state2.title,
          name = _this$state2.name,
          tooltip = _this$state2.tooltip;
      return _react.default.createElement("div", null, _react.default.createElement("h2", {
        className: "acms-admin-admin-title2"
      }, "\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9"), _react.default.createElement("div", {
        className: "customFieldFunction"
      }, this.renderModal(), this.renderAlert(), this.renderBasic(), _react.default.createElement("div", {
        className: "customFieldLine"
      }), type === 'select' && _react.default.createElement("div", null, this.renderSnippet(), this.renderOption()), type === 'radio' && _react.default.createElement("div", null, this.renderSnippet(), this.renderOption()), type === 'checkbox' && _react.default.createElement("div", null, this.renderSnippet(), this.renderOption()), type === 'image' && _react.default.createElement("div", null, this.renderImage(), this.renderImageResize()), type === 'file' && _react.default.createElement("div", null, this.renderFile()), type === 'media' && _react.default.createElement("div", null, this.renderMediaOption()), type === 'rich-editor' && _react.default.createElement("div", null, this.renderRichEditorOption()), this.renderValidator(), this.renderMake()));
    }
  }]);
  return Field;
}(_base.default);

exports.default = Field;