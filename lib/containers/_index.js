"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactRedux = require("react-redux");
var _redux = require("redux");
var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));
var _reactTooltip = _interopRequireDefault(require("react-tooltip"));
var _highlighter = _interopRequireDefault(require("../components/highlighter"));
var _field = _interopRequireDefault(require("../components/field"));
var _fieldGroup = _interopRequireDefault(require("../components/field-group"));
var _fieldSource = _interopRequireDefault(require("../components/field-source"));
var _fieldConfirmSource = _interopRequireDefault(require("../components/field-confirm-source"));
var _fieldGroupSource = _interopRequireDefault(require("../components/field-group-source"));
var _fieldGroupConfirmSource = _interopRequireDefault(require("../components/field-group-confirm-source"));
var _unit = _interopRequireDefault(require("../components/unit"));
var _unitSource = _interopRequireDefault(require("../components/unit-source"));
var _unitConfirmSource = _interopRequireDefault(require("../components/unit-confirm-source"));
var _unitGroup = _interopRequireDefault(require("../components/unit-group"));
var _unitGroupSource = _interopRequireDefault(require("../components/unit-group-source"));
var _unitGroupConfirmSource = _interopRequireDefault(require("../components/unit-group-confirm-source"));
var _notify = _interopRequireDefault(require("../components/notify"));
var _constants = require("../constants");
var actions = _interopRequireWildcard(require("../actions"));
var _add_column = _interopRequireDefault(require("../assets/images/add_column.svg"));
var _add_row = _interopRequireDefault(require("../assets/images/add_row.svg"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2.default)(o), (0, _possibleConstructorReturn2.default)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2.default)(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var CustomfieldMaker = /*#__PURE__*/function (_Component) {
  function CustomfieldMaker(props) {
    var _this;
    (0, _classCallCheck2.default)(this, CustomfieldMaker);
    _this = _callSuper(this, CustomfieldMaker, [props]);
    _this.state = {
      mode: 'normal',
      editMode: 'source',
      tag: 'section',
      acmscss: false,
      source: '',
      copied: false
    };
    return _this;
  }
  (0, _inherits2.default)(CustomfieldMaker, _Component);
  return (0, _createClass2.default)(CustomfieldMaker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var actions = this.props.actions;
      var storage = JSON.parse(localStorage.getItem(_constants.STORAGENAME));
      if (storage) {
        actions.restore(storage);
      }
    }

    // renderSelectGroup() {
    //   return (
    //     <select id="type" value={type} className="acms-admin-form-width-full">
    //       <option value="text">テキスト</option>
    //       <option value="textarea">テキストエリア</option>
    //       <option value="select">セレクトボックス</option>
    //       <option value="radio">ラジオボタン</option>
    //       <option value="file">ファイル</option>
    //       <option value="image">画像</option>
    //       <option value="media">メディア</option> */
    //     </select>
    //   );
    // }
  }, {
    key: "updateState",
    value: function updateState(prop, value) {
      this.setState((0, _defineProperty2.default)({}, prop, value));
    }
  }, {
    key: "setSource",
    value: function setSource(source) {
      this.setState({
        source: source
      });
    }
  }, {
    key: "clearCustomfield",
    value: function clearCustomfield() {
      var actions = this.props.actions;
      if (confirm('履歴を削除してもよろしいですか？')) {
        actions.clearCustomfield();
      }
    }
  }, {
    key: "clearGroupItem",
    value: function clearGroupItem() {
      var actions = this.props.actions;
      if (confirm('履歴を削除してもよろしいですか？')) {
        actions.clearGroupItem();
      }
    }
  }, {
    key: "clearCustomUnit",
    value: function clearCustomUnit() {
      var actions = this.props.actions;
      if (confirm('履歴を削除してもよろしいですか？')) {
        actions.clearCustomUnit();
      }
    }
  }, {
    key: "clearUnitGroupItem",
    value: function clearUnitGroupItem() {
      var actions = this.props.actions;
      if (confirm('履歴を削除してもよろしいですか？')) {
        actions.clearUnitGroupItem();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state = this.state,
        mode = _this$state.mode,
        editMode = _this$state.editMode,
        source = _this$state.source,
        copied = _this$state.copied,
        tag = _this$state.tag;
      var _this$props = this.props,
        actions = _this$props.actions,
        customfield = _this$props.customfield,
        groupitems = _this$props.groupitems,
        customunit = _this$props.customunit,
        unitgroupitems = _this$props.unitgroupitems,
        groupTitle = _this$props.groupTitle,
        unitGroupTitle = _this$props.unitGroupTitle,
        unitGroupName = _this$props.unitGroupName,
        groupName = _this$props.groupName,
        acmscss = _this$props.acmscss,
        jsValidator = _this$props.jsValidator,
        direction = _this$props.direction;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "acms-admin-form"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "acms-admin-form-radio"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "radio",
        value: "normal",
        id: "input-radio-mode-normal",
        checked: mode === 'normal',
        onChange: this.updateState.bind(this, 'mode', 'normal')
      }), /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "input-radio-mode-normal"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "acms-admin-ico-radio"
      }), "\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9")), /*#__PURE__*/_react.default.createElement("div", {
        className: "acms-admin-form-radio"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "radio",
        value: "group",
        id: "input-radio-mode-group",
        checked: mode === 'group',
        onChange: this.updateState.bind(this, 'mode', 'group')
      }), /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "input-radio-mode-group"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "acms-admin-ico-radio"
      }), "\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7")), /*#__PURE__*/_react.default.createElement("div", {
        className: "acms-admin-form-radio"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "radio",
        value: "unit",
        id: "input-radio-mode-unit",
        checked: mode === 'unit',
        onChange: this.updateState.bind(this, 'mode', 'unit')
      }), /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "input-radio-mode-unit"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "acms-admin-ico-radio"
      }), "\u30AB\u30B9\u30BF\u30E0\u30E6\u30CB\u30C3\u30C8")), /*#__PURE__*/_react.default.createElement("div", {
        className: "acms-admin-form-radio"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "radio",
        value: "unit-group",
        id: "input-radio-mode-unit-group",
        checked: mode === 'unit-group',
        onChange: this.updateState.bind(this, 'mode', 'unit-group')
      }), /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "input-radio-mode-unit-group"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "acms-admin-ico-radio"
      }), "\u30AB\u30B9\u30BF\u30E0\u30E6\u30CB\u30C3\u30C8\uFF08\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\uFF09")), mode === 'normal' && /*#__PURE__*/_react.default.createElement(_field.default, {
        actions: actions
      }), mode === 'group' && /*#__PURE__*/_react.default.createElement(_fieldGroup.default, {
        actions: actions
      }), mode === 'unit' && /*#__PURE__*/_react.default.createElement(_unit.default, {
        actions: actions
      }), mode === 'unit-group' && /*#__PURE__*/_react.default.createElement(_unitGroup.default, {
        actions: actions
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "acms-admin-tabs"
      }, /*#__PURE__*/_react.default.createElement("ul", {
        className: "customFieldTabs"
      }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "#source",
        className: (0, _classnames.default)({
          customFieldTabActive: editMode === 'source'
        }),
        onClick: this.updateState.bind(this, 'editMode', 'source')
      }, "\u5165\u529B\u7528\u30BD\u30FC\u30B9")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "#preview",
        className: (0, _classnames.default)({
          customFieldTabActive: editMode === 'preview'
        }),
        onClick: this.updateState.bind(this, 'editMode', 'preview')
      }, "\u30D7\u30EC\u30D3\u30E5\u30FC")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
        href: "#confirm",
        className: (0, _classnames.default)({
          customFieldTabActive: editMode === 'confirm'
        }),
        onClick: this.updateState.bind(this, 'editMode', 'confirm')
      }, "\u51FA\u529B\u7528\u30BD\u30FC\u30B9"))), /*#__PURE__*/_react.default.createElement("div", {
        className: "acms-admin-tabs-panel"
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          backgroundColor: '#F1F1F1',
          padding: '20px 15px'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "clearfix"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "acms-admin-form-checkbox",
        style: {
          marginTop: '5px'
        }
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        onChange: actions.toggleAcmsCss,
        checked: acmscss,
        id: "acmscss-checkbox"
      }), /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "acmscss-checkbox"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "acms-admin-ico-checkbox"
      }), "acms-admin.css\u3092\u4F7F\u7528\u3059\u308B")), (mode === 'normal' || mode === 'group') && /*#__PURE__*/_react.default.createElement("div", {
        className: "acms-admin-form-checkbox",
        style: {
          marginTop: '5px'
        }
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        onChange: actions.toggleJsValidator,
        checked: jsValidator,
        id: "jsvalidator-checkbox"
      }), /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "jsvalidator-checkbox"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "acms-admin-ico-checkbox"
      }), "JavaScript\u306B\u3088\u308B\u30D0\u30EA\u30C7\u30FC\u30C8\u3092\u4F7F\u7528\u3059\u308B")), mode === 'normal' && /*#__PURE__*/_react.default.createElement("select", {
        id: "tag",
        onChange: function onChange(e) {
          return _this2.updateState('tag', e.target.value);
        },
        className: "acms-admin-form-width-quarter"
      }, /*#__PURE__*/_react.default.createElement("option", {
        value: "section"
      }, "--"), /*#__PURE__*/_react.default.createElement("option", {
        value: "table"
      }, "table")), mode === 'normal' && /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.clearCustomfield.bind(this),
        className: "acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
      }, "\u5C65\u6B74\u30AF\u30EA\u30A2"), mode === 'group' && /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.clearGroupItem.bind(this),
        className: "acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
      }, "\u5C65\u6B74\u30AF\u30EA\u30A2"), mode === 'unit' && /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.clearCustomUnit.bind(this),
        className: "acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
      }, "\u5C65\u6B74\u30AF\u30EA\u30A2"), mode === 'unit-group' && /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.clearUnitGroupItem.bind(this),
        className: "acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
      }, "\u5C65\u6B74\u30AF\u30EA\u30A2"), editMode !== 'preview' && /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: 'inline-block',
          position: 'relative',
          float: 'right',
          marginRight: '10px'
        }
      }, /*#__PURE__*/_react.default.createElement(_reactCopyToClipboard.default, {
        text: source,
        onCopy: function onCopy() {
          return _this2.setState({
            copied: true
          });
        }
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "acms-admin-btn-admin"
      }, "\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC")), /*#__PURE__*/_react.default.createElement(_notify.default, {
        message: "\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F",
        show: copied,
        onFinish: function onFinish() {
          _this2.setState({
            copied: false
          });
        }
      })), (mode === 'group' || mode === 'unit-group') && /*#__PURE__*/_react.default.createElement("div", {
        style: {
          marginTop: '5px'
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "customFieldDirectionBtnGroupSide"
      }, "\u30BD\u30FC\u30B9\u306E\u8FFD\u52A0\u65B9\u6CD5"), /*#__PURE__*/_react.default.createElement("div", {
        className: "customFieldDirectionBtnGroup"
      }, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "direction-horizontal",
        className: (0, _classnames.default)('customFieldDirectionBtn', {
          active: direction === 'horizontal'
        }),
        "data-tip": true,
        "data-for": "group-field-direction-horizontal"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "radio",
        id: "direction-horizontal",
        onChange: function onChange() {
          actions.changeDirection('horizontal');
        },
        checked: direction === 'horizontal'
      }), /*#__PURE__*/_react.default.createElement("img", {
        src: _add_column.default
      })), /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "direction-vertical",
        className: (0, _classnames.default)('customFieldDirectionBtn', {
          active: direction === 'vertical'
        }),
        "data-tip": true,
        "data-for": "group-field-direction-vertical"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "radio",
        id: "direction-vertical",
        onChange: function onChange() {
          actions.changeDirection('vertical');
        },
        checked: direction === 'vertical'
      }), /*#__PURE__*/_react.default.createElement("img", {
        src: _add_row.default
      }))), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
        id: "group-field-direction-vertical",
        place: "top",
        type: "dark",
        effect: "solid",
        className: "acms-admin-tooltip acms-tooltip customFieldTooltip"
      }, /*#__PURE__*/_react.default.createElement("span", null, "\u7E26\u5411\u304D\u30EC\u30A4\u30A2\u30A6\u30C8\u7528\u306B\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u307E\u3059\u3002")), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
        id: "group-field-direction-horizontal",
        place: "top",
        type: "dark",
        effect: "solid",
        className: "acms-admin-tooltip acms-tooltip customFieldTooltip"
      }, /*#__PURE__*/_react.default.createElement("span", null, "\u6A2A\u5411\u304D\u30EC\u30A4\u30A2\u30A6\u30C8\u7528\u306B\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u307E\u3059\u3002")))), editMode === 'source' && /*#__PURE__*/_react.default.createElement(_highlighter.default, {
        onSourceGenerated: this.setSource.bind(this)
      }, mode === 'normal' && /*#__PURE__*/_react.default.createElement(_fieldSource.default, {
        customfield: customfield,
        acmscss: acmscss,
        jsValidator: jsValidator,
        tag: tag
      }, /*#__PURE__*/_react.default.createElement(_fieldSource.default.Section, null)), mode === 'group' && /*#__PURE__*/_react.default.createElement(_fieldGroupSource.default, {
        groupitems: groupitems,
        acmscss: acmscss,
        jsValidator: jsValidator,
        groupTitle: groupTitle,
        groupName: groupName,
        direction: direction
      }), mode === 'unit' && /*#__PURE__*/_react.default.createElement(_unitSource.default, {
        customunit: customunit,
        acmscss: acmscss
      }), mode === 'unit-group' && /*#__PURE__*/_react.default.createElement(_unitGroupSource.default, {
        unitgroupitems: unitgroupitems,
        acmscss: acmscss,
        jsValidator: jsValidator,
        unitGroupTitle: unitGroupTitle,
        unitGroupName: unitGroupName,
        direction: direction
      })), editMode === 'preview' && /*#__PURE__*/_react.default.createElement("div", {
        className: "customFieldPreview"
      }, mode === 'normal' && /*#__PURE__*/_react.default.createElement(_fieldSource.default, {
        customfield: customfield,
        acmscss: acmscss,
        tag: tag,
        preview: true
      }, /*#__PURE__*/_react.default.createElement(_fieldSource.default.Section, null), /*#__PURE__*/_react.default.createElement(_fieldSource.default.Table, null)), mode === 'group' && /*#__PURE__*/_react.default.createElement(_fieldGroupSource.default, {
        groupitems: groupitems,
        acmscss: acmscss,
        groupTitle: groupTitle,
        groupName: groupName,
        preview: true,
        direction: direction
      }), mode === 'unit' && /*#__PURE__*/_react.default.createElement(_unitSource.default, {
        customunit: customunit,
        acmscss: acmscss,
        preview: true
      }), mode === 'unit-group' && /*#__PURE__*/_react.default.createElement(_unitGroupSource.default, {
        unitgroupitems: unitgroupitems,
        acmscss: acmscss,
        unitGroupTitle: unitGroupTitle,
        unitGroupName: unitGroupName,
        preview: true,
        direction: direction
      })), editMode === 'confirm' && /*#__PURE__*/_react.default.createElement(_highlighter.default, {
        onSourceGenerated: this.setSource.bind(this)
      }, mode === 'normal' && /*#__PURE__*/_react.default.createElement(_fieldConfirmSource.default, {
        customfield: customfield,
        acmscss: acmscss
      }), mode === 'group' && /*#__PURE__*/_react.default.createElement(_fieldGroupConfirmSource.default, {
        groupitems: groupitems,
        acmscss: acmscss,
        groupTitle: groupTitle,
        groupName: groupName,
        direction: direction
      }), mode === 'unit' && /*#__PURE__*/_react.default.createElement(_unitConfirmSource.default, {
        customunit: customunit,
        acmscss: acmscss
      }), mode === 'unit-group' && /*#__PURE__*/_react.default.createElement(_unitGroupConfirmSource.default, {
        unitgroupitems: unitgroupitems,
        acmscss: acmscss,
        unitGroupTitle: unitGroupTitle,
        unitGroupName: unitGroupName,
        direction: direction
      }))))));
    }
  }]);
}(_react.Component);
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
  };
}
var _default = exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CustomfieldMaker);