'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ImageInput = ImageInput;
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _MakerContext = require('../../store/MakerContext');
var _OptionValidator = require('./OptionValidator');
function ImageInput(props) {
  const { item, id, isAttribute = true } = props;
  const {
    preview: { acmscss, editMode, mode },
  } = (0, _MakerContext.useMakerContext)();
  let style = {};
  let hiddenStyle = {};
  if (mode === 'unitgroup') {
    if (item.normalSize) {
      style.maxWidth = ''.concat(item.normalSize, 'px');
    }
    hiddenStyle = Object.assign({}, style, {
      display: 'none',
    });
  }
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    mode === 'customfield' &&
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: (0, _classnames.default)({
            'js-img_resize_cf': item.resize,
          }),
        },
        editMode === 'preview' ? null : '<!-- BEGIN_IF [{'.concat(item.name, '@path}/nem] -->'),
        /*#__PURE__*/ _react.default.createElement('img', {
          src: '%{ARCHIVES_DIR}{'.concat(item.name, '@path}'),
          className: (0, _classnames.default)({
            'acms-admin-img-responsive': acmscss,
            'js-img_resize_preview': item.resize,
          }),
          style: item.normalSize
            ? {
                width: ''.concat(item.normalSize, 'px'),
              }
            : null,
          alt: '{'.concat(item.name, '@alt}'),
        }),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: ''.concat(item.name, '@old'),
          value: '{'.concat(item.name, '@path}'),
        }),
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: (0, _classnames.default)({
              'acms-admin-form-checkbox': acmscss,
            }),
          },
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'checkbox',
            name: ''.concat(item.name, '@edit'),
            value: 'delete',
            id: 'input-checkbox-'.concat(item.name, '@edit'),
          }),
          /*#__PURE__*/ _react.default.createElement(
            'label',
            {
              htmlFor: 'input-checkbox-'.concat(item.name, '@edit'),
            },
            acmscss &&
              /*#__PURE__*/ _react.default.createElement('i', {
                className: 'acms-admin-ico-checkbox',
              }),
            '\u524A\u9664'
          )
        ),
        editMode === 'preview' ? null : '<!-- ELSE -->',
        /*#__PURE__*/ _react.default.createElement('img', {
          alt: '',
          src: '%{ARCHIVES_DIR}{'.concat(item.name, '@path}'),
          className: (0, _classnames.default)({
            'acms-admin-img-responsive': acmscss,
            'js-img_resize_preview': item.resize,
          }),
          style: item.normalSize
            ? {
                width: ''.concat(item.normalSize, 'px'),
                display: 'none',
              }
            : {
                display: 'none',
              },
        }),
        editMode === 'preview' ? null : '<!-- END_IF -->',
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'file',
          id: id,
          name: item.name,
          size: '20',
          className: (0, _classnames.default)({
            'js-img_resize_input': item.resize,
          }),
        }),
        /*#__PURE__*/ _react.default.createElement('br', null),
        item.alt &&
          /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            '\u4EE3\u66FF\u30C6\u30AD\u30B9\u30C8:',
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'text',
              name: ''.concat(item.name, '@alt'),
              value: '{'.concat(item.name, '@alt}'),
              size: '40',
            })
          ),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: 'field[]',
          value: item.name,
        }),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: ''.concat(item.name, ':extension'),
          value: 'image',
        }),
        item.normalSize &&
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'hidden',
            name: ''.concat(item.name, '@').concat(item.normal),
            value: item.normalSize,
          }),
        item.tiny &&
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'hidden',
            name: ''.concat(item.name, '@').concat(item.tiny),
            value: item.tinySize,
          }),
        item.large &&
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'hidden',
            name: ''.concat(item.name, '@').concat(item.large),
            value: item.largeSize,
          }),
        item.square &&
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'hidden',
            name: ''.concat(item.name, '@').concat(item.square),
            value: item.squareSize,
          }),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: ''.concat(item.name, '@filename'),
          value: '',
        }),
        /*#__PURE__*/ _react.default.createElement(_OptionValidator.OptionValidator, {
          item: item,
        })
      ),
    mode === 'fieldgroup' &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: (0, _classnames.default)({
              'js-img_resize_cf': item.resize,
            }),
          },
          isAttribute &&
            /*#__PURE__*/ _react.default.createElement(
              _react.default.Fragment,
              null,
              editMode === 'preview' ? null : '<!-- BEGIN_IF [{'.concat(item.name, '@path}/nem] -->'),
              /*#__PURE__*/ _react.default.createElement('img', {
                src: '%{ARCHIVES_DIR}{'.concat(item.name, '@path}'),
                className: (0, _classnames.default)({
                  'js-img_resize_preview': item.resize,
                }),
                style: style,
                alt: '{'.concat(item.name, '@alt}'),
              }),
              /*#__PURE__*/ _react.default.createElement('input', {
                type: 'hidden',
                name: ''.concat(item.name, '@old[]'),
                value: '{'.concat(item.name, '@path}'),
              }),
              /*#__PURE__*/ _react.default.createElement(
                'label',
                {
                  htmlFor: 'input-checkbox-'.concat(item.name, '@edit[]'),
                  className: (0, _classnames.default)({
                    'acms-admin-form-checkbox': acmscss,
                  }),
                },
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'checkbox',
                  name: ''.concat(item.name, '@edit[]'),
                  value: 'delete',
                  id: 'input-checkbox-'.concat(item.name, '@edit[]'),
                }),
                acmscss &&
                  /*#__PURE__*/ _react.default.createElement('i', {
                    className: 'acms-admin-ico-checkbox',
                  }),
                '\u524A\u9664'
              ),
              editMode === 'preview' ? null : '<!-- ELSE -->',
              /*#__PURE__*/ _react.default.createElement('img', {
                alt: '',
                src: '%{ARCHIVES_DIR}{'.concat(item.name, '@path}'),
                className: (0, _classnames.default)({
                  'js-img_resize_preview': item.resize,
                }),
                style: hiddenStyle,
              }),
              editMode === 'preview' ? null : '<!-- END_IF -->'
            ),
          !isAttribute &&
            /*#__PURE__*/ _react.default.createElement('img', {
              src: '',
              alt: '',
              style: hiddenStyle,
              className: 'js-img_resize_preview',
            }),
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'file',
            name: ''.concat(item.name, '[]'),
            className: (0, _classnames.default)({
              'js-img_resize_input': item.resize,
            }),
          }),
          /*#__PURE__*/ _react.default.createElement('br', null),
          item.alt &&
            /*#__PURE__*/ _react.default.createElement(
              _react.default.Fragment,
              null,
              '\u4EE3\u66FF\u30C6\u30AD\u30B9\u30C8:',
              /*#__PURE__*/ _react.default.createElement('input', {
                type: 'text',
                name: ''.concat(item.name, '@alt[]'),
                value: '{'.concat(item.name, '@alt}'),
                size: '40',
              })
            ),
          item.normalSize &&
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: ''.concat(item.name, '@').concat(item.normal, '[]'),
              value: item.normalSize,
            }),
          item.tinySize &&
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: ''.concat(item.name, '@').concat(item.tiny, '[]'),
              value: item.tinySize,
            }),
          item.largeSize &&
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: ''.concat(item.name, '@').concat(item.large, '[]'),
              value: item.largeSize,
            }),
          item.square &&
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: ''.concat(item.name, '@').concat(item.square, '[]'),
              value: item.squareSize,
            })
        )
      ),
    mode === 'customunit' &&
      /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          className: (0, _classnames.default)({
            'js-img_resize_cf': item.resize,
          }),
        },
        editMode === 'preview' ? null : '<!-- BEGIN_IF [{'.concat(item.name, '@path}/nem] -->'),
        /*#__PURE__*/ _react.default.createElement('img', {
          src: '%{ARCHIVES_DIR}{'.concat(item.name, '@path}'),
          className: (0, _classnames.default)({
            'acms-admin-img-responsive': acmscss,
            'js-img_resize_preview': item.resize,
          }),
          style: item.normalSize
            ? {
                width: ''.concat(item.normalSize, 'px'),
              }
            : null,
          alt: '{'.concat(item.name, '@alt}'),
        }),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: ''.concat(item.name, '{id}@old'),
          value: '{'.concat(item.name, '@path}'),
        }),
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: (0, _classnames.default)({
              'acms-admin-form-checkbox': acmscss,
            }),
          },
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'checkbox',
            name: ''.concat(item.name, '{id}@edit'),
            value: 'delete',
            id: 'input-checkbox-'.concat(item.name, '{id}@edit'),
          }),
          /*#__PURE__*/ _react.default.createElement(
            'label',
            {
              htmlFor: 'input-checkbox-'.concat(item.name, '{id}@edit'),
            },
            acmscss &&
              /*#__PURE__*/ _react.default.createElement('i', {
                className: 'acms-admin-ico-checkbox',
              }),
            '\u524A\u9664'
          )
        ),
        editMode === 'preview' ? null : '<!-- ELSE -->',
        /*#__PURE__*/ _react.default.createElement('img', {
          src: '%{ARCHIVES_DIR}{'.concat(item.name, '@path}'),
          alt: '',
          className: (0, _classnames.default)({
            'acms-admin-img-responsive': acmscss,
            'js-img_resize_preview': item.resize,
          }),
          style: item.normalSize
            ? {
                width: ''.concat(item.normalSize, 'px'),
                display: 'none',
              }
            : {
                display: 'none',
              },
        }),
        editMode === 'preview' ? null : '<!-- END_IF -->',
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'file',
          name: ''.concat(item.name, '{id}'),
          size: '20',
          className: (0, _classnames.default)({
            'js-img_resize_input': item.resize,
          }),
        }),
        /*#__PURE__*/ _react.default.createElement('br', null),
        item.alt &&
          /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            '\u4EE3\u66FF\u30C6\u30AD\u30B9\u30C8:',
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'text',
              name: ''.concat(item.name, '{id}@alt'),
              value: '{'.concat(item.name, '@alt}'),
              size: '40',
            })
          ),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: 'unit{id}[]',
          value: ''.concat(item.name, '{id}'),
        }),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: ''.concat(item.name, '{id}:extension'),
          value: 'image',
        }),
        item.normalSize &&
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'hidden',
            name: ''.concat(item.name, '{id}@').concat(item.normal),
            value: item.normalSize,
          }),
        item.tiny &&
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'hidden',
            name: ''.concat(item.name, '{id}@').concat(item.tiny),
            value: item.tinySize,
          }),
        item.large &&
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'hidden',
            name: ''.concat(item.name, '{id}@').concat(item.large),
            value: item.largeSize,
          }),
        item.square &&
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'hidden',
            name: ''.concat(item.name, '{id}@').concat(item.square),
            value: item.squareSize,
          }),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: ''.concat(item.name, '{id}@filename'),
          value: '',
        }),
        /*#__PURE__*/ _react.default.createElement(_OptionValidator.OptionValidator, {
          item: item,
        })
      ),
    mode === 'unitgroup' &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: (0, _classnames.default)({
              'js-img_resize_cf': item.resize,
            }),
          },
          isAttribute &&
            /*#__PURE__*/ _react.default.createElement(
              _react.default.Fragment,
              null,
              editMode === 'preview' ? null : '<!-- BEGIN_IF [{'.concat(item.name, '@path}/nem] -->'),
              /*#__PURE__*/ _react.default.createElement(
                'div',
                null,
                /*#__PURE__*/ _react.default.createElement('img', {
                  src: '%{ARCHIVES_DIR}{'.concat(item.name, '@path}'),
                  className: (0, _classnames.default)({
                    'js-img_resize_preview': item.resize,
                  }),
                  style: style,
                  alt: '{'.concat(item.name, '@alt}'),
                })
              ),
              /*#__PURE__*/ _react.default.createElement('input', {
                type: 'hidden',
                name: ''.concat(item.name, '{id}@old[]'),
                value: '{'.concat(item.name, '@path}'),
              }),
              /*#__PURE__*/ _react.default.createElement(
                'label',
                {
                  htmlFor: 'input-checkbox-'.concat(item.name, '{id}@edit[]'),
                  className: (0, _classnames.default)({
                    'acms-admin-form-checkbox': acmscss,
                  }),
                },
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'checkbox',
                  name: ''.concat(item.name, '{id}@edit[]'),
                  value: 'delete',
                  id: 'input-checkbox-'.concat(item.name, '{id}@edit[]'),
                }),
                acmscss &&
                  /*#__PURE__*/ _react.default.createElement('i', {
                    className: 'acms-admin-ico-checkbox',
                  }),
                '\u524A\u9664'
              ),
              editMode === 'preview' ? null : '<!-- ELSE -->'
            ),
          /*#__PURE__*/ _react.default.createElement('img', {
            alt: '',
            src: '%{ARCHIVES_DIR}{'.concat(item.name, '@path}'),
            className: (0, _classnames.default)({
              'js-img_resize_preview': item.resize,
            }),
            style: hiddenStyle,
          }),
          isAttribute && editMode === 'preview' ? null : '<!-- END_IF -->',
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'file',
            name: ''.concat(item.name, '{id}[]'),
            className: (0, _classnames.default)({
              'js-img_resize_input': item.resize,
            }),
          }),
          /*#__PURE__*/ _react.default.createElement('br', null),
          item.alt &&
            /*#__PURE__*/ _react.default.createElement(
              'div',
              null,
              '\u4EE3\u66FF\u30C6\u30AD\u30B9\u30C8:',
              /*#__PURE__*/ _react.default.createElement('input', {
                type: 'text',
                name: ''.concat(item.name, '{id}@alt[]'),
                value: '{'.concat(item.name, '@alt}'),
                size: '40',
              })
            ),
          item.normal &&
            item.normalSize &&
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: ''.concat(item.name, '{id}@').concat(item.normal, '[]'),
              value: item.normalSize,
            }),
          item.tiny &&
            item.tinySize &&
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: ''.concat(item.name, '{id}@').concat(item.tiny, '[]'),
              value: item.tinySize,
            }),
          item.large &&
            item.largeSize &&
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: ''.concat(item.name, '{id}@').concat(item.large, '[]'),
              value: item.largeSize,
            }),
          item.square &&
            item.squareSize &&
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: ''.concat(item.name, '{id}@').concat(item.square, '[]'),
              value: item.squareSize,
            })
        )
      )
  );
}
