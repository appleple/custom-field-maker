'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.RichEditor = RichEditor;
var _react = _interopRequireDefault(require('react'));
var _MakerContext = require('../../store/MakerContext');
function RichEditor(props) {
  const { item, id = '' } = props;
  const {
    preview: { mode },
  } = (0, _MakerContext.useMakerContext)();
  const { useExpand, startHeadingLevel, endHeadingLevel } = props;
  const ConditionalWrap = (_ref) => {
    let { condition, wrap, children } = _ref;
    return condition ? wrap(children) : children;
  };
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
        value: ''.concat(item.name),
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
    ConditionalWrap,
    {
      condition: useExpand,
      wrap: (children) =>
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'js-expand js-acms-expand',
          },
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'js-acms-expand-inner',
            },
            /*#__PURE__*/ _react.default.createElement(
              'button',
              {
                className: 'js-expand-btn js-acms-expand-btn',
                type: 'button',
              },
              /*#__PURE__*/ _react.default.createElement('i', {
                className: 'acms-admin-icon acms-admin-icon-expand-arrow js-expand-icon',
              })
            ),
            children
          )
        ),
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'js-smartblock',
        'data-heading-start': startHeadingLevel,
        'data-heading-end': endHeadingLevel,
      },
      /*#__PURE__*/ _react.default.createElement('div', {
        className: 'js-smartblock-edit',
      }),
      /*#__PURE__*/ _react.default.createElement('input', {
        className: 'js-smartblock-body',
        type: 'hidden',
        name: attribute.name,
        value: '{'.concat(attribute.name, '@html}'),
      }),
      /*#__PURE__*/ _react.default.createElement('input', {
        type: 'hidden',
        name: attribute.hiddenName,
        value: attribute.value,
      }),
      /*#__PURE__*/ _react.default.createElement('input', {
        type: 'hidden',
        name: ''.concat(attribute.name, ':extension'),
        value: 'rich-editor',
      })
    )
  );
}
