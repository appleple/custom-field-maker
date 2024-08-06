'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Textarea = Textarea;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _MakerContext = require('../../store/MakerContext');
var _OptionValidator = require('./OptionValidator');
var _OptionNoSearch = require('./OptionNoSearch');
function Textarea(props) {
  const { item, id = '', isValue = true } = props;
  const {
    preview: { mode, jsValidator, acmscss },
  } = (0, _MakerContext.useMakerContext)();
  const selectedType = item.subType ? item.subType : item.type;
  const classname = (0, _classnames.default)({
    'acms-admin-form-width-full': acmscss,
    'js-lite-editor-field': selectedType === 'lite-editor',
  });
  let attribute = {
    id,
    value: '',
    name: '',
    hiddenName: '',
    placeholder: '',
  };
  switch (mode) {
    case 'normal': {
      attribute = {
        value: '{'.concat(item.name, '}'),
        name: item.name,
        hiddenName: 'field[]',
        placeholder: item.placeholder,
      };
      break;
    }
    case 'group': {
      attribute = {
        value: '{'.concat(item.name, '}'),
        name: ''.concat(item.name, '[]'),
        placeholder: item.placeholder,
      };
      break;
    }
    case 'unit': {
      attribute = {
        value: '{'.concat(item.name, '}'),
        name: ''.concat(item.name, '{id}'),
        hiddenName: 'unit[]',
        placeholder: item.placeholder,
      };
      break;
    }
    case 'unit-group': {
      attribute = {
        value: item.name,
        name: ''.concat(item.name, '{id}[]'),
        placeholder: item.placeholder,
      };
      break;
    }
  }
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      'textarea',
      (0, _extends2.default)(
        {
          name: attribute.name,
          className: classname,
        },
        jsValidator
          ? {
              'data-validator': attribute.name,
            }
          : {}
      ),
      isValue ? ''.concat(attribute.value) : ''
    ),
    (mode === 'normal') | (mode === 'unit')
      ? /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: attribute.hiddenName,
          defaultValue: attribute.name,
        })
      : null,
    /*#__PURE__*/ _react.default.createElement(_OptionValidator.OptionValidator, {
      item: item,
    }),
    /*#__PURE__*/ _react.default.createElement(_OptionNoSearch.OptionNoSearch, {
      name: item.name,
      noSearch: item.noSearch,
    })
  );
}
