'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.RadioButton = RadioButton;
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _MakerContext = require('../../store/MakerContext');
var _OptionValidator = require('./OptionValidator');
var _OptionNoSearch = require('./OptionNoSearch');
function RadioButton(props) {
  const { item, id = '', isChecked = true } = props;
  const {
    preview: { mode, acmscss },
  } = (0, _MakerContext.useMakerContext)();
  let attribute = {
    id,
    name: '',
    hiddenName: '',
  };
  switch (mode) {
    case 'normal': {
      attribute = {
        name: item.name,
        hiddenName: 'field[]',
      };
      break;
    }
    case 'group': {
      attribute = {
        name: ''.concat(item.name, '[]'),
      };
      break;
    }
    case 'unit': {
      attribute = {
        name: ''.concat(item.name, '{id}'),
        hiddenName: 'unit[]',
      };
      break;
    }
    case 'unit-group': {
      attribute = {
        name: ''.concat(item.name, '{id}[]'),
      };
      break;
    }
  }
  console.log(mode);
  console.log(attribute.name);
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
            'acms-admin-form-radio': acmscss,
          }),
        },
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'radio',
          name: attribute.name,
          value: option.value,
          'data-tmp': isChecked && '{'.concat(item.name, ':checked#').concat(option.value, '}'),
          id: 'input-radio-'.concat(item.name, '-').concat(id),
        }),
        /*#__PURE__*/ _react.default.createElement(
          'label',
          {
            htmlFor: 'input-radio-'.concat(item.name, '-').concat(id),
          },
          /*#__PURE__*/ _react.default.createElement('i', {
            className: 'acms-admin-ico-radio',
          }),
          option.label
        )
      );
    }),
    (mode === 'normal') | (mode === 'unit')
      ? /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: attribute.hiddenName,
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
