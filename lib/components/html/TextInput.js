'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.TextInput = TextInput;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _MakerContext = require('../../store/MakerContext');
var _OptionValidator = require('./OptionValidator');
var _OptionNoSearch = require('./OptionNoSearch');
function TextInput(props) {
  const { item, id = '', isValue = true } = props;
  const {
    preview: { mode, jsValidator, acmscss },
  } = (0, _MakerContext.useMakerContext)();
  const selectedType = item.subType ? item.subType : item.type;
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    mode === 'customfield' &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          'input',
          (0, _extends2.default)(
            {
              id: id,
              type: selectedType,
              name: item.name,
              defaultValue: '{'.concat(item.name, '}'),
              className: (0, _classnames.default)({
                'acms-admin-form-width-full': acmscss,
              }),
            },
            item.placeholder
              ? {
                  placeholder: item.placeholder,
                }
              : {},
            jsValidator
              ? {
                  'data-validator': item.name,
                }
              : {}
          )
        ),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: 'field[]',
          defaultValue: item.name,
        }),
        /*#__PURE__*/ _react.default.createElement(_OptionValidator.OptionValidator, {
          item: item,
        }),
        /*#__PURE__*/ _react.default.createElement(_OptionNoSearch.OptionNoSearch, {
          name: item.name,
          noSearch: item.noSearch,
        })
      ),
    mode === 'fieldgroup' &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          'input',
          (0, _extends2.default)(
            {
              type: selectedType,
              name: ''.concat(item.name, '[]'),
            },
            isValue && {
              value: '{'.concat(item.name, '}'),
            },
            {
              className: (0, _classnames.default)({
                'acms-admin-form-width-full': acmscss,
              }),
            },
            item.placeholder
              ? {
                  placeholder: item.placeholder,
                }
              : {}
          )
        ),
        /*#__PURE__*/ _react.default.createElement(_OptionValidator.OptionValidator, {
          item: item,
        })
      ),
    mode === 'customunit' &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          'input',
          (0, _extends2.default)(
            {
              type: selectedType,
              name: ''.concat(item.name, '{id}'),
              value: '{'.concat(item.name, '}'),
              className: (0, _classnames.default)({
                'acms-admin-form-width-full': acmscss,
              }),
            },
            item.placeholder
              ? {
                  placeholder: item.placeholder,
                }
              : {}
          )
        ),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: 'unit{id}[]',
          value: ''.concat(item.name, '{id}'),
        })
      ),
    mode === 'unitgroup' &&
      /*#__PURE__*/ _react.default.createElement(
        'input',
        (0, _extends2.default)(
          {
            type: selectedType,
            name: ''.concat(item.name, '{id}[]'),
          },
          isValue && {
            value: '{'.concat(item.name, '}'),
          },
          {
            className: (0, _classnames.default)({
              'acms-admin-form-width-full': acmscss,
            }),
          },
          item.placeholder
            ? {
                placeholder: item.placeholder,
              }
            : {}
        )
      )
  );
}
