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
  const classname = (0, _classnames.default)({
    'acms-admin-form-width-full': acmscss,
    'js-lite-editor-field': item.type === 'liteEditor',
  });
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    mode === 'customfield' &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          'textarea',
          (0, _extends2.default)(
            {
              id: id,
              name: item.name,
              className: classname,
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
          ),
          isValue ? '{'.concat(item.name, '}') : ''
        ),
        /*#__PURE__*/ _react.default.createElement(_OptionValidator.OptionValidator, {
          item: item,
        }),
        /*#__PURE__*/ _react.default.createElement(_OptionNoSearch.OptionNoSearch, {
          name: item.name,
          noSearch: item.noSearch,
        }),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: 'field[]',
          defaultValue: item.name,
        })
      ),
    mode === 'fieldgroup' &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          'textarea',
          (0, _extends2.default)(
            {
              id: id,
              name: ''.concat(item.name, '[]'),
              className: classname,
            },
            item.placeholder
              ? {
                  placeholder: item.placeholder,
                }
              : {}
          ),
          isValue ? '{'.concat(item.name, '}') : ''
        )
      ),
    mode === 'customunit' &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          'textarea',
          (0, _extends2.default)(
            {
              id: id,
              name: ''.concat(item.name, '{id}'),
              className: classname,
            },
            item.placeholder
              ? {
                  placeholder: item.placeholder,
                }
              : {}
          ),
          isValue ? '{'.concat(item.name, '}') : ''
        ),
        /*#__PURE__*/ _react.default.createElement(_OptionValidator.OptionValidator, {
          item: item,
        }),
        /*#__PURE__*/ _react.default.createElement(_OptionNoSearch.OptionNoSearch, {
          name: item.name,
          noSearch: item.noSearch,
        }),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: 'unit{id}[]',
          value: ''.concat(item.name, '{id}'),
        })
      ),
    mode === 'unitgroup' &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          'textarea',
          (0, _extends2.default)(
            {
              id: id,
              name: ''.concat(item.name, '{id}[]'),
              className: classname,
            },
            item.placeholder
              ? {
                  placeholder: item.placeholder,
                }
              : {}
          ),
          isValue ? '{'.concat(item.name, '}') : ''
        )
      )
  );
}
