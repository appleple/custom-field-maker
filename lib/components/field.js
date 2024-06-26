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
  (0, _inherits2.default)(Field, _Base);
  return (0, _createClass2.default)(Field, [{
    key: "submit",
    value: function submit() {
      var _this$state = this.state,
        name = _this$state.name,
        type = _this$state.type,
        subType = _this$state.subType,
        title = _this$state.title;
      console.log("name: ".concat(name, ", type: ").concat(type, ", subType: ").concat(subType, ", title: ").concat(title));
      var actions = this.props.actions;
      if (name && type && title) {
        if (this.state.alert) this.setState({
          alert: false
        });
        actions.addCustomfield(this.state);
      } else {
        this.setState({
          alert: true
        });
      }
    }

    // typeSelectRender() {
    //   const { type } = this.state;

    //   return (
    //     <select id="type" value={type} className="acms-admin-form-width-full" onChange={(e) => { this.updateState('type', e.target.value); }}>
    //       <option value="text">テキスト</option>
    //       <option value="textarea">テキストエリア</option>
    //       <option value="lite-editor">インラインエディター</option>
    //       <option value="rich-editor">リッチエディター</option>
    //       <option value="table">テーブル</option>
    //       <option value="select">セレクトボックス</option>
    //       <option value="checkbox">チェックボックス</option>
    //       <option value="radio">ラジオボタン</option>
    //       <option value="media">メディア</option>
    //       <option value="image">画像</option>
    //       <option value="file">ファイル</option>
    //     </select>
    //   );
    // }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
        type = _this$state2.type,
        title = _this$state2.title,
        name = _this$state2.name,
        tooltip = _this$state2.tooltip;
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