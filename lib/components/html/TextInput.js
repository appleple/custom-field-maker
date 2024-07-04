"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _AcmsInput = require("./AcmsInput");
var TextInput = exports.TextInput = function TextInput(props) {
  var item = props.item,
    preview = props.preview;
  var selectedType = item.subType ? item.subType : item.type;
  var attribute = {};
  switch (preview.mode) {
    case 'normal':
      {
        attribute = {
          value: item.name,
          name: item.name,
          hiddenName: 'field[]'
        };
        break;
      }
    case 'group':
      {
        attribute = {
          value: item.name,
          name: "".concat(item.name, "[]")
        };
        break;
      }
    case 'unit':
      {
        attribute = {
          value: item.name,
          name: "".concat(item.name, "{id}"),
          hiddenName: 'unit[]'
        };
        break;
      }
    case 'unit-group':
      {
        attribute = {
          value: item.name,
          name: "".concat(item.name, "{id}")
        };
        break;
      }
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    type: selectedType,
    name: attribute.name,
    value: "{".concat(attribute.value, "}"),
    className: (0, _classnames.default)({
      'acms-admin-form-width-full': preview && preview.acmscss
    })
  }, preview && preview.jsValidator ? {
    'data-validator': attribute.name
  } : {})), preview && preview.mode === 'normal' && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: attribute.hiddenName,
    value: attribute.name
  }), (0, _AcmsInput.renderValidator)(item), (0, _AcmsInput.renderNoSearch)(item));
};