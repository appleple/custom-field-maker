'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Selectbox = Selectbox;
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _MakerContext = require('../../store/MakerContext');
var _OptionValidator = require('./OptionValidator');
var _OptionNoSearch = require('./OptionNoSearch');
function Selectbox(props) {
  const { item, id = '', isSelected = true } = props;
  const {
    preview: { mode, acmscss },
  } = (0, _MakerContext.useMakerContext)();
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
        name: ''.concat(item.name),
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
      'select',
      {
        name: ''.concat(attribute.name, '[]'),
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
            'data-tmp': isSelected && '{'.concat(attribute.name, ':selected#').concat(option.value, '}'),
          },
          option.label
        );
      })
    ),
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
