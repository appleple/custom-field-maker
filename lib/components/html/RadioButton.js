'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.RadioButton = RadioButton;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _MakerContext = require('../../store/MakerContext');
var _OptionValidator = require('./OptionValidator');
var _OptionNoSearch = require('./OptionNoSearch');
function RadioButton(props) {
  const { item, isChecked = true } = props;
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
        item.option.map((option, index) => {
          if (!option.label) {
            return null;
          }
          return /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              key: index,
              className: (0, _classnames.default)({
                'acms-admin-form-radio': acmscss,
              }),
            },
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'radio',
              name: item.name,
              value: option.value,
              'data-tmp': '{'.concat(item.name, ':checked#').concat(option.value, '}'),
              id: 'input-radio-'.concat(item.name, '-').concat(option.value),
            }),
            /*#__PURE__*/ _react.default.createElement(
              'label',
              {
                htmlFor: 'input-radio-'.concat(item.name, '-').concat(option.value),
              },
              /*#__PURE__*/ _react.default.createElement('i', {
                className: 'acms-admin-ico-radio',
              }),
              option.label
            )
          );
        }),
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
        item.option.map((option, index) => {
          if (!option.label) {
            return null;
          }
          return /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              key: index,
              className: (0, _classnames.default)({
                'acms-admin-form-radio': acmscss,
              }),
            },
            /*#__PURE__*/ _react.default.createElement(
              'input',
              (0, _extends2.default)(
                {
                  type: 'radio',
                  name: ''.concat(item.name, '[]'),
                  value: option.value,
                },
                isChecked && {
                  'data-tmp': '{'.concat(item.name, ':checked#').concat(option.value, '}'),
                },
                {
                  id: 'input-radio-'.concat(item.name, '-').concat(option.value),
                }
              )
            ),
            /*#__PURE__*/ _react.default.createElement(
              'label',
              {
                htmlFor: 'input-radio-'.concat(item.name, '-').concat(option.value),
              },
              acmscss &&
                /*#__PURE__*/ _react.default.createElement('i', {
                  className: 'acms-admin-ico-radio',
                }),
              option.label
            )
          );
        })
      ),
    mode === 'customunit' &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        item.option.map((option, index) => {
          if (!option.label) {
            return null;
          }
          return /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              key: index,
              className: (0, _classnames.default)({
                'acms-admin-form-radio': acmscss,
              }),
            },
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'radio',
              name: ''.concat(item.name, '{id}'),
              value: option.value,
              'data-tmp': '{'.concat(item.name, ':checked#').concat(option.value, '}'),
              id: 'input-radio-'.concat(item.name, '-').concat(option.value, '-{id}'),
            }),
            /*#__PURE__*/ _react.default.createElement(
              'label',
              {
                htmlFor: 'input-radio-'.concat(item.name, '-').concat(option.value, '-{id}'),
              },
              /*#__PURE__*/ _react.default.createElement('i', {
                className: 'acms-admin-ico-radio',
              }),
              option.label
            )
          );
        }),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: 'unit{id}[]',
          value: ''.concat(item.name, '{id}'),
        }),
        /*#__PURE__*/ _react.default.createElement(_OptionValidator.OptionValidator, {
          item: item,
        }),
        /*#__PURE__*/ _react.default.createElement(_OptionNoSearch.OptionNoSearch, {
          name: item.name,
          noSearch: item.noSearch,
        })
      ),
    mode === 'unitgroup' &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        item.option.map((option, index) => {
          if (!option.label) {
            return null;
          }
          return /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              key: index,
              className: (0, _classnames.default)({
                'acms-admin-form-radio': acmscss,
              }),
            },
            /*#__PURE__*/ _react.default.createElement(
              'input',
              (0, _extends2.default)(
                {
                  type: 'radio',
                  name: ''.concat(item.name, '{id}[]'),
                  value: option.value,
                },
                isChecked && {
                  'data-tmp': '{'.concat(item.name, ':checked#').concat(option.value, '}'),
                },
                {
                  id: 'input-radio-'.concat(item.name, '-{id}-').concat(option.value),
                }
              )
            ),
            /*#__PURE__*/ _react.default.createElement(
              'label',
              {
                htmlFor: 'input-radio-'.concat(item.name, '-{id}-').concat(option.value),
              },
              acmscss &&
                /*#__PURE__*/ _react.default.createElement('i', {
                  className: 'acms-admin-ico-radio',
                }),
              option.label
            )
          );
        })
      )
  );
}
