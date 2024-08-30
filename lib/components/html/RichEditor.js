'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.RichEditor = RichEditor;
var _react = _interopRequireDefault(require('react'));
var _MakerContext = require('../../store/MakerContext');
function RichEditor(props) {
  const { item, id = '', isValue = true } = props;
  const {
    preview: { mode },
  } = (0, _MakerContext.useMakerContext)();
  const ConditionalWrap = (_ref) => {
    let { condition, wrap, children } = _ref;
    return condition ? wrap(children) : children;
  };
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    mode === 'customfield' &&
      /*#__PURE__*/ _react.default.createElement(
        ConditionalWrap,
        {
          condition: item.useExpand,
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
            'data-heading-start': item.startHeadingLevel,
            'data-heading-end': item.endHeadingLevel,
          },
          /*#__PURE__*/ _react.default.createElement('div', {
            className: 'js-smartblock-edit',
          }),
          /*#__PURE__*/ _react.default.createElement('input', {
            className: 'js-smartblock-body',
            type: 'hidden',
            name: item.name,
            value: '{'.concat(item.name, '@html}'),
          }),
          /*#__PURE__*/ _react.default.createElement('input', {
            id: id,
            type: 'hidden',
            name: 'field[]',
            value: item.name,
          }),
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'hidden',
            name: ''.concat(item.name, ':extension'),
            value: 'rich-editor',
          })
        )
      ),
    mode === 'fieldgroup' &&
      /*#__PURE__*/ _react.default.createElement(
        ConditionalWrap,
        {
          condition: item.useExpand,
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
            'data-heading-start': item.startHeadingLevel,
            'data-heading-end': item.endHeadingLevel,
          },
          /*#__PURE__*/ _react.default.createElement('div', {
            className: 'js-smartblock-edit',
          }),
          isValue
            ? /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                /*#__PURE__*/ _react.default.createElement('input', {
                  id: id,
                  className: 'js-smartblock-body',
                  type: 'hidden',
                  name: ''.concat(item.name, '[]'),
                  value: '{'.concat(item.name, '@html}'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: ''.concat(item.name, ':extension'),
                  value: 'rich-editor',
                })
              )
            : /*#__PURE__*/ _react.default.createElement('input', {
                id: id,
                className: 'js-smartblock-body',
                type: 'hidden',
                name: ''.concat(item.name, '[]'),
                value: '',
              })
        )
      ),
    mode === 'customunit' &&
      /*#__PURE__*/ _react.default.createElement(
        ConditionalWrap,
        {
          condition: item.useExpand,
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
            'data-heading-start': item.startHeadingLevel,
            'data-heading-end': item.endHeadingLevel,
          },
          /*#__PURE__*/ _react.default.createElement('div', {
            className: 'js-smartblock-edit',
          }),
          /*#__PURE__*/ _react.default.createElement('input', {
            className: 'js-smartblock-body',
            type: 'hidden',
            name: ''.concat(item.name, '{id}'),
            value: '{'.concat(item.name, '@html}'),
          }),
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'hidden',
            name: 'unit{id}[]',
            value: ''.concat(item.name, '{id}'),
          }),
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'hidden',
            name: ''.concat(item.name, '{id}:extension'),
            value: 'rich-editor',
          })
        )
      ),
    mode === 'unitgroup' &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          ConditionalWrap,
          {
            condition: item.useExpand,
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
              'data-heading-start': item.startHeadingLevel,
              'data-heading-end': item.endHeadingLevel,
            },
            /*#__PURE__*/ _react.default.createElement('div', {
              className: 'js-smartblock-edit',
            }),
            isValue
              ? /*#__PURE__*/ _react.default.createElement('input', {
                  className: 'js-smartblock-body',
                  type: 'hidden',
                  name: ''.concat(item.name, '{id}[]'),
                  value: '{'.concat(item.name, '@html}'),
                })
              : /*#__PURE__*/ _react.default.createElement(
                  _react.default.Fragment,
                  null,
                  /*#__PURE__*/ _react.default.createElement('input', {
                    className: 'js-smartblock-body',
                    type: 'hidden',
                    name: ''.concat(item.name, '{id}[]'),
                    value: '',
                  }),
                  /*#__PURE__*/ _react.default.createElement('input', {
                    type: 'hidden',
                    name: ''.concat(item.name, '{id}:extension'),
                    value: 'rich-editor',
                  })
                )
          )
        )
      )
  );
}
