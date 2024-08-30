'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Selectbox = Selectbox;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _MakerContext = require('../../store/MakerContext');
var _OptionValidator = require('./OptionValidator');
var _OptionNoSearch = require('./OptionNoSearch');
var _WrapTable = require('./WrapTable');
function Selectbox(props) {
  const { item, id = '', isSelected = true } = props;
  const {
    preview: { mode, acmscss },
  } = (0, _MakerContext.useMakerContext)();
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    mode === 'customfield' &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          'select',
          {
            id: id,
            name: item.name,
            className: (0, _classnames.default)({
              'acms-admin-form-width-full': acmscss,
            }),
          },
          /*#__PURE__*/ _react.default.createElement('option', {
            value: '',
          }),
          item.option.map((option, index) => {
            if (!option.label) {
              return null;
            }
            return /*#__PURE__*/ _react.default.createElement(
              'option',
              {
                key: index,
                value: option.value,
                'data-tmp': '{'.concat(item.name, ':selected#').concat(option.value, '}'),
              },
              option.label
            );
          })
        ),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: 'field[]',
          value: item.name,
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
          'select',
          {
            id: id,
            name: ''.concat(item.name, '[]'),
            className: (0, _classnames.default)({
              'acms-admin-form-width-full': acmscss,
            }),
          },
          /*#__PURE__*/ _react.default.createElement('option', {
            value: '',
          }),
          item.option.map((option, index) => {
            if (!option.label) {
              return null;
            }
            return /*#__PURE__*/ _react.default.createElement(
              'option',
              {
                key: index,
                value: option.value,
                'data-tmp': isSelected && '{'.concat(item.name, ':selected#').concat(option.value, '}'),
              },
              option.label
            );
          })
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
          'select',
          {
            id: id,
            name: ''.concat(item.name, '{id}'),
            className: (0, _classnames.default)({
              'acms-admin-form-width-full': acmscss,
            }),
          },
          /*#__PURE__*/ _react.default.createElement('option', {
            value: '',
          }),
          item.option.map((option, index) => {
            if (!option.label) {
              return null;
            }
            return /*#__PURE__*/ _react.default.createElement(
              'option',
              {
                key: index,
                value: option.value,
                'data-tmp': '{'.concat(item.name, ':selected#').concat(option.value, '}'),
              },
              option.label
            );
          })
        ),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: 'unit{id}[]',
          value: ''.concat(item.name, '{id}'),
        }),
        /*#__PURE__*/ _react.default.createElement(_OptionValidator.OptionValidator, {
          item: item,
        })
      ),
    mode === 'unitgroup' &&
      /*#__PURE__*/ _react.default.createElement(
        _WrapTable.WrapTable,
        {
          title: item.table,
        },
        /*#__PURE__*/ _react.default.createElement(
          'select',
          {
            name: ''.concat(item.name, '{id}[]'),
            className: (0, _classnames.default)({
              'acms-admin-form-width-full': acmscss,
            }),
          },
          /*#__PURE__*/ _react.default.createElement('option', {
            value: '',
          }),
          item.option.map((option, index) => {
            if (!option.label) {
              return null;
            }
            return /*#__PURE__*/ _react.default.createElement(
              'option',
              (0, _extends2.default)(
                {
                  key: index,
                  value: option.value,
                },
                isSelected && {
                  'data-tmp': '{'.concat(item.name, ':selected#').concat(option.value, '}'),
                }
              ),
              option.label
            );
          })
        )
      )
  );
}
