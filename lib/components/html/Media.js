'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Media = Media;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _MakerContext = require('../../store/MakerContext');
const ConditionalWrap = (_ref) => {
  let { condition, wrap, children } = _ref;
  return condition ? wrap(children) : children;
};
function Media(props) {
  const { item, id } = props;
  const {
    preview: { acmscss, editMode, mode },
  } = (0, _MakerContext.useMakerContext)();
  let attribute = {
    value: '',
    name: '',
    hiddenName: '',
  };
  switch (mode) {
    case 'normal': {
      attribute = {
        id,
        value: '{'.concat(item.name, '}'),
        name: item.name,
        hiddenName: 'field[]',
      };
      break;
    }
    case 'group': {
      attribute = {
        id,
        value: '{'.concat(item.name, '}'),
        name: ''.concat(item.name, '[]'),
      };
      break;
    }
    case 'unit': {
      attribute = {
        id,
        value: '{'.concat(item.name, '}'),
        name: ''.concat(item.name, '{id}'),
        hiddenName: 'unit[]',
      };
      break;
    }
    case 'unit-group': {
      attribute = {
        id,
        value: item.name,
        name: ''.concat(item.name, '{id}[]'),
      };
      break;
    }
  }
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'js-media-field',
    },
    !item.useDropArea &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          'div',
          null,
          '<!-- BEGIN_IF [{'.concat(attribute.name, '@thumbnail}/nem] -->'),
          /*#__PURE__*/ _react.default.createElement(
            ConditionalWrap,
            {
              condition: item.mediaType === 'file',
              wrap: (children) =>
                /*#__PURE__*/ _react.default.createElement(
                  'a',
                  {
                    href: '%{MEDIA_ARCHIVES_DIR}{'.concat(attribute.name, '@path}'),
                  },
                  children
                ),
            },
            /*#__PURE__*/ _react.default.createElement(
              'img',
              (0, _extends2.default)(
                {
                  src: '{'.concat(attribute.name, '@thumbnail}'),
                  className: (0, _classnames.default)('js-preview', {
                    'acms-admin-img-responsive': acmscss,
                  }),
                  alt: '',
                  id: ''.concat(attribute.name, '-preview'),
                },
                item.mediaType === 'file' && {
                  style: {
                    width: '64px',
                    height: 'auto',
                  },
                }
              )
            )
          ),
          '<!-- ELSE -->',
          /*#__PURE__*/ _react.default.createElement(
            'img',
            (0, _extends2.default)(
              {
                src: '',
                alt: '',
              },
              item.mediaType === 'file'
                ? {
                    style: {
                      width: '64px',
                      height: 'auto',
                      display: 'none',
                    },
                  }
                : {
                    style: {
                      display: 'none',
                    },
                  },
              {
                className: (0, _classnames.default)('js-preview', {
                  'acms-admin-img-responsive': acmscss,
                }),
                id: ''.concat(attribute.name, '-preview'),
              }
            )
          ),
          '<!-- END_IF -->',
          /*#__PURE__*/ _react.default.createElement(
            'p',
            {
              className: 'js-text acms-admin-text-danger',
              style: {
                display: 'none',
              },
            },
            '\u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u306E\u305F\u3081\u633F\u5165\u3067\u304D\u307E\u305B\u3093\u3002'
          )
        ),
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'acms-admin-margin-top-mini',
          },
          /*#__PURE__*/ _react.default.createElement(
            'button',
            {
              type: 'button',
              className: (0, _classnames.default)('js-insert', {
                'acms-admin-btn': acmscss,
              }),
              'data-type': item.mediaType || 'all',
            },
            '\u30E1\u30C7\u30A3\u30A2\u3092\u9078\u629E'
          ),
          /*#__PURE__*/ _react.default.createElement(
            'button',
            {
              type: 'button',
              className: (0, _classnames.default)('js-insert', {
                'acms-admin-btn': acmscss,
              }),
              'data-type': item.mediaType || 'all',
              'data-mode': 'upload',
            },
            '\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9'
          ),
          /*#__PURE__*/ _react.default.createElement(
            'button',
            {
              type: 'button',
              className: (0, _classnames.default)('js-edit', {
                'acms-admin-btn': acmscss,
              }),
            },
            '\u30E1\u30C7\u30A3\u30A2\u3092\u7DE8\u96C6'
          ),
          /*#__PURE__*/ _react.default.createElement(
            'button',
            {
              type: 'button',
              className: (0, _classnames.default)('js-remove', {
                'acms-admin-btn acms-admin-btn-danger': acmscss,
              }),
            },
            '\u524A\u9664'
          )
        )
      ),
    item.useDropArea &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement('div', {
          className: 'js-droparea',
          'data-thumbnail': '{'.concat(attribute.name, '@thumbnail}'),
          'data-type': item.mediaType || 'all',
          'data-thumbnail-type': '{'.concat(attribute.name, '@type}'),
          'data-width': ''.concat(item.dropAreaWidth, 'px'),
          'data-height': ''.concat(item.dropAreaHeight, 'px'),
        }),
        /*#__PURE__*/ _react.default.createElement(
          'p',
          {
            className: 'js-text acms-admin-text-danger',
            style: {
              display: 'none',
            },
          },
          '\u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u306E\u305F\u3081\u633F\u5165\u3067\u304D\u307E\u305B\u3093\u3002'
        ),
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'acms-admin-margin-top-mini',
          },
          /*#__PURE__*/ _react.default.createElement(
            'button',
            {
              type: 'button',
              className: (0, _classnames.default)('js-insert', {
                'acms-admin-btn': acmscss,
              }),
              'data-type': item.mediaType || 'all',
            },
            '\u30E1\u30C7\u30A3\u30A2\u3092\u9078\u629E'
          )
        )
      ),
    /*#__PURE__*/ _react.default.createElement('input', {
      type: 'hidden',
      name: attribute.name,
      value: editMode === 'preview' ? '' : '{'.concat(attribute.name, '}'),
      className: 'js-value',
    }),
    /*#__PURE__*/ _react.default.createElement('input', {
      type: 'hidden',
      name: 'field[]',
      value: attribute.name,
    }),
    /*#__PURE__*/ _react.default.createElement('input', {
      type: 'hidden',
      name: ''.concat(attribute.name, ':extension'),
      value: 'media',
    })
  );
}
