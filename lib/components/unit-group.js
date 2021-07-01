"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var _react = _interopRequireDefault(require("react"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _base = _interopRequireDefault(require("./base"));

var UnitGroup =
/*#__PURE__*/
function (_Base) {
  (0, _inherits2.default)(UnitGroup, _Base);

  function UnitGroup(props) {
    var _this$state;

    var _this;

    (0, _classCallCheck2.default)(this, UnitGroup);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UnitGroup).call(this, props));
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
      unitGroupTitle: '',
      unitGroupName: '',
      openValidator: false,
      openConverter: false,
      groupAlert: false,
      openGroup: false,
      alt: false
    }, (0, _defineProperty2.default)(_this$state, "resize", true), (0, _defineProperty2.default)(_this$state, "fileNameMethod", 'random'), (0, _defineProperty2.default)(_this$state, "useDropArea", true), (0, _defineProperty2.default)(_this$state, "useExpand", true), (0, _defineProperty2.default)(_this$state, "dropAreaWidth", 200), (0, _defineProperty2.default)(_this$state, "dropAreaHeight", 200), (0, _defineProperty2.default)(_this$state, "useFocusImage", true), (0, _defineProperty2.default)(_this$state, "focusImageWidth", 400), (0, _defineProperty2.default)(_this$state, "focusImageHeight", 400), (0, _defineProperty2.default)(_this$state, "startHeadingLevel", 2), (0, _defineProperty2.default)(_this$state, "endHeadingLevel", 3), (0, _defineProperty2.default)(_this$state, "mediaType", 'image'), _this$state);
    return _this;
  }

  (0, _createClass2.default)(UnitGroup, [{
    key: "showGroup",
    value: function showGroup() {
      var actions = this.props.actions;
      var _this$state2 = this.state,
          unitGroupName = _this$state2.unitGroupName,
          unitGroupTitle = _this$state2.unitGroupTitle;

      if (!unitGroupName) {
        this.setState({
          groupAlert: true
        });
      } else {
        this.setState({
          groupAlert: false,
          duplicatedField: false,
          openGroup: true
        });
        actions.setUnitGroupTitleName({
          unitGroupTitle: unitGroupTitle,
          unitGroupName: unitGroupName
        });
      }
    }
  }, {
    key: "addNewGroup",
    value: function addNewGroup() {
      var actions = this.props.actions;
      actions.clearUnitGroupItem();
      this.clearValue();
      this.setState({
        openGroup: false,
        unitGroupTitle: '',
        unitGroupName: ''
      });
    }
  }, {
    key: "addGroup",
    value: function addGroup() {
      var actions = this.props.actions;
      var _this$state3 = this.state,
          type = _this$state3.type,
          title = _this$state3.title,
          name = _this$state3.name,
          unitGroupName = _this$state3.unitGroupName,
          unitGroupTitle = _this$state3.unitGroupTitle;

      if (name == unitGroupName) {
        this.setState({
          duplicatedField: true
        });
        return;
      }

      if (type && title && name) {
        actions.setUnitGroupTitleName({
          unitGroupName: unitGroupName,
          unitGroupTitle: unitGroupTitle
        });
        actions.addUnitGroupItem(this.state);
      } else {
        this.setState({
          alert: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state4 = this.state,
          openGroup = _this$state4.openGroup,
          unitGroupTitle = _this$state4.unitGroupTitle,
          unitGroupName = _this$state4.unitGroupName,
          type = _this$state4.type;
      return _react.default.createElement("div", null, _react.default.createElement("h2", {
        className: "acms-admin-admin-title2"
      }, "\u30AB\u30B9\u30BF\u30E0\u30E6\u30CB\u30C3\u30C8\uFF08\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\uFF09"), _react.default.createElement("div", {
        className: "customFieldFunction"
      }, this.renderGroupAlert(), this.renderDuplicateAlert(), this.renderAlert(), openGroup ? _react.default.createElement("div", {
        style: {
          paddingBottom: '15px'
        }
      }, _react.default.createElement("button", {
        className: "acms-admin-btn acms-admin-btn-primary customFieldGroupBtn",
        onClick: this.addNewGroup.bind(this)
      }, "\u65B0\u898F\u30B0\u30EB\u30FC\u30D7\u4F5C\u6210")) : _react.default.createElement("table", {
        className: "adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableGroup"
      }, _react.default.createElement("tr", null, _react.default.createElement("th", {
        className: "acms-admin-table-left"
      }, "\u30B0\u30EB\u30FC\u30D7\u306E\u30BF\u30A4\u30C8\u30EB", _react.default.createElement("i", {
        className: "acms-admin-icon-tooltip",
        "data-tip": true,
        "data-for": "unit-group-title-tip"
      }), _react.default.createElement(_reactTooltip.default, {
        id: "unit-group-title-tip",
        place: "top",
        type: "dark",
        effect: "solid",
        className: "acms-admin-tooltip acms-tooltip customFieldTooltip"
      }, _react.default.createElement("span", null, "\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\u306E\u30C6\u30FC\u30D6\u30EB\u7528\u306E\u30BF\u30A4\u30C8\u30EB\u3068\u306A\u308A\u307E\u3059\u3002")), _react.default.createElement("span", {
        className: "acms-admin-label acms-admin-label-danger"
      }, "\u5FC5\u9808")), _react.default.createElement("th", {
        className: "acms-admin-table-left",
        colSpan: "2"
      }, "\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\uFF08\u5909\u6570\uFF09", _react.default.createElement("i", {
        className: "acms-admin-icon-tooltip",
        "data-tip": true,
        "data-for": "unit-group-field-tip"
      }), _react.default.createElement(_reactTooltip.default, {
        id: "unit-group-field-tip",
        place: "top",
        type: "dark",
        effect: "solid",
        className: "acms-admin-tooltip acms-tooltip customFieldTooltip"
      }, _react.default.createElement("span", null, "\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3067\u3059\u3002\u5024\u3092\u5FC5\u305A\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002")), _react.default.createElement("span", {
        className: "acms-admin-label acms-admin-label-danger"
      }, "\u5FC5\u9808"))), _react.default.createElement("tr", null, _react.default.createElement("td", null, _react.default.createElement("input", {
        type: "text",
        value: unitGroupTitle,
        onInput: function onInput(e) {
          _this2.updateState('unitGroupTitle', e.target.value);
        },
        className: "acms-admin-form-width-full",
        placeholder: "\u4F8B\uFF09\u30B9\u30BF\u30C3\u30D5\u30EA\u30B9\u30C8"
      })), _react.default.createElement("td", null, _react.default.createElement("input", {
        type: "text",
        value: unitGroupName,
        onInput: function onInput(e) {
          _this2.updateState('unitGroupName', e.target.value);
        },
        className: "acms-admin-form-width-full",
        placeholder: "\u4F8B\uFF09group_staff"
      }))), _react.default.createElement("tr", null, _react.default.createElement("td", {
        colSpan: "2"
      }, openGroup ? _react.default.createElement("button", {
        className: "acms-admin-btn acms-admin-btn-primary acms-admin-btn-disabled customFieldGroupBtn",
        disabled: true
      }, "\u30B0\u30EB\u30FC\u30D7\u751F\u6210") : _react.default.createElement("button", {
        className: "acms-admin-btn acms-admin-btn-primary customFieldGroupBtn",
        onClick: this.showGroup.bind(this)
      }, "\u30B0\u30EB\u30FC\u30D7\u751F\u6210")))), openGroup && _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "customFieldLine"
      }), _react.default.createElement("table", {
        className: "adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableGroup"
      }, _react.default.createElement("tr", null, _react.default.createElement("th", {
        className: "acms-admin-table-left"
      }, "\u30B0\u30EB\u30FC\u30D7\u306E\u30BF\u30A4\u30C8\u30EB", _react.default.createElement("i", {
        className: "acms-admin-icon-tooltip",
        "data-tip": true,
        "data-for": "unit-group-title-tip"
      }), _react.default.createElement(_reactTooltip.default, {
        id: "unit-group-title-tip",
        place: "top",
        type: "dark",
        effect: "solid",
        className: "acms-admin-tooltip acms-tooltip customFieldTooltip"
      }, _react.default.createElement("span", null, "\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\u306E\u30C6\u30FC\u30D6\u30EB\u7528\u306E\u30BF\u30A4\u30C8\u30EB\u3068\u306A\u308A\u307E\u3059\u3002"))), _react.default.createElement("th", {
        className: "acms-admin-table-left",
        colSpan: "2"
      }, "\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\uFF08\u5909\u6570\uFF09", _react.default.createElement("i", {
        className: "acms-admin-icon-tooltip",
        "data-tip": true,
        "data-for": "unit-group-field-tip"
      }), _react.default.createElement(_reactTooltip.default, {
        id: "unit-group-field-tip",
        place: "top",
        type: "dark",
        effect: "solid",
        className: "acms-admin-tooltip acms-tooltip customFieldTooltip"
      }, _react.default.createElement("span", null, "\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3067\u3059\u3002\u5024\u3092\u5FC5\u305A\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002")))), _react.default.createElement("tr", null, _react.default.createElement("td", null, unitGroupTitle), _react.default.createElement("td", null, unitGroupName))), this.renderModal(), this.renderBasic(), _react.default.createElement("div", {
        className: "customFieldLine"
      }), type === 'select' && _react.default.createElement("div", null, this.renderSnippet(), this.renderOption()), type === 'radio' && _react.default.createElement("div", null, this.renderSnippet(), this.renderOption()), type === 'image' && _react.default.createElement("div", null, this.renderImage(), this.renderImageResize()), type === 'file' && _react.default.createElement("div", null, this.renderFile()), type === 'media' && _react.default.createElement("div", null, this.renderMediaOption()), type === 'rich-editor' && _react.default.createElement("div", null, this.renderRichEditorOption()), this.renderValidator(false), _react.default.createElement("p", null, _react.default.createElement("button", {
        onClick: this.clearValue.bind(this),
        className: "acms-admin-btn-admin",
        style: {
          marginRight: '5px'
        }
      }, "\u30AF\u30EA\u30A2"), _react.default.createElement("button", {
        onClick: this.addGroup.bind(this),
        className: "acms-admin-btn-admin acms-admin-btn-admin-primary customFieldMakeBtn",
        style: {
          marginRight: '5px'
        }
      }, "\u751F\u6210"), _react.default.createElement("button", {
        onClick: this.backState.bind(this),
        className: "acms-admin-btn-admin"
      }, "\u5143\u306B\u623B\u3059")))));
    }
  }]);
  return UnitGroup;
}(_base.default);

exports.default = UnitGroup;