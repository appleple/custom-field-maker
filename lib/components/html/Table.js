'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Table = Table;
var _react = _interopRequireDefault(require('react'));
var _MakerContext = require('../../store/MakerContext');
function Table(props) {
  const { item, id = '' } = props;
  const {
    preview: { mode, editMode },
  } = (0, _MakerContext.useMakerContext)();
  let attribute = {
    id,
    value: '',
    name: '',
    hiddenName: '',
    placeholder: '',
  };
  switch (mode) {
    case 'customfield': {
      attribute = {
        value: '{'.concat(item.name, '}'),
        name: item.name,
        hiddenName: 'field[]',
        placeholder: item.placeholder,
      };
      break;
    }
    case 'fieldgroup': {
      attribute = {
        value: '{'.concat(item.name, '}'),
        name: ''.concat(item.name, '[]'),
        placeholder: item.placeholder,
      };
      break;
    }
    case 'customunit': {
      attribute = {
        value: '{'.concat(item.name, '}'),
        name: ''.concat(item.name, '{id}'),
        hiddenName: 'unit[]',
        placeholder: item.placeholder,
      };
      break;
    }
    case 'unitgroup': {
      attribute = {
        value: item.name,
        name: ''.concat(item.name, '{id}[]'),
        placeholder: item.placeholder,
      };
      break;
    }
  }
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'js-editable-table-field',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'js-editable-table',
      },
      editMode === 'preview' ? null : '<!-- BEGIN_IF [{'.concat(attribute.name, '}[delnl]/nem] -->\n'),
      editMode === 'preview' ? null : '{'.concat(attribute.name, '}[raw]'),
      editMode === 'preview' ? null : '<!-- ELSE -->',
      /*#__PURE__*/ _react.default.createElement(
        'table',
        null,
        /*#__PURE__*/ _react.default.createElement(
          'tr',
          null,
          /*#__PURE__*/ _react.default.createElement('th', null, '\u30B5\u30F3\u30D7\u30EB'),
          /*#__PURE__*/ _react.default.createElement('th', null, '\u30B5\u30F3\u30D7\u30EB')
        ),
        /*#__PURE__*/ _react.default.createElement(
          'tr',
          null,
          /*#__PURE__*/ _react.default.createElement('td', null, '\u30B5\u30F3\u30D7\u30EB'),
          /*#__PURE__*/ _react.default.createElement('td', null, '\u30B5\u30F3\u30D7\u30EB')
        )
      ),
      editMode === 'preview' ? null : '<!-- END_IF -->',
      mode === 'customfield' || mode === 'customunit'
        ? /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              className: 'js-editable-table-dest',
              value: '{'.concat(attribute.name, '}'),
              name: attribute.name,
            }),
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: 'field[]',
              value: attribute.hiddenName,
            })
          )
        : null
    )
  );
}
