'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Checkbox = Checkbox;
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _MakerContext = require('../../store/MakerContext');
var _OptionValidator = require('./OptionValidator');
var _OptionNoSearch = require('./OptionNoSearch');
function Checkbox(props) {
  const { item } = props;
  const {
    preview: { mode, acmscss },
  } = (0, _MakerContext.useMakerContext)();
  let attribute = {
    value: '',
    name: '',
    hiddenName: '',
  };
  switch (mode) {
    case 'normal': {
      attribute = {
        value: '{'.concat(item.name, '}'),
        name: item.name,
        hiddenName: 'field[]',
      };
      break;
    }
    case 'group': {
      attribute = {
        value: '{'.concat(item.name, '}'),
        name: ''.concat(item.name, '[]'),
      };
      break;
    }
    case 'unit': {
      attribute = {
        value: '{'.concat(item.name, '}'),
        name: ''.concat(item.name, '{id}'),
        hiddenName: 'unit[]',
      };
      break;
    }
    case 'unit-group': {
      attribute = {
        value: item.name,
        name: ''.concat(item.name, '{id}[]'),
      };
      break;
    }
  }
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    item.option.map((option, index) => {
      if (!option.label) {
        return null;
      }
      return /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          key: ''.concat(item.name).concat(index),
          className: (0, _classnames.default)({
            'acms-admin-form-checkbox': acmscss,
          }),
        },
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'checkbox',
          name: ''.concat(item.name, '[]'),
          value: option.value,
          'data-tmp': '{'.concat(item.name, ':checked#').concat(option.value, '}'),
          id: 'input-checkbox-'.concat(item.name, '-').concat(option.value),
        }),
        /*#__PURE__*/ _react.default.createElement(
          'label',
          {
            htmlFor: 'input-checkbox-'.concat(item.name, '-').concat(option.value),
          },
          /*#__PURE__*/ _react.default.createElement('i', {
            className: 'acms-admin-ico-checkbox',
          }),
          option.label
        )
      );
    }),
    (mode === 'normal') | (mode === 'unit')
      ? /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: 'field[]',
          value: attribute.name,
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
