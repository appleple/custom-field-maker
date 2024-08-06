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
var _OptionNoSearch = require('./OptionNoSearch');
function ImageInput(props) {
  const { item, id = '' } = props;
  const {
    preview: { mode, editMode, acmscss },
  } = (0, _MakerContext.useMakerContext)();
  let attribute = {
    id,
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
      name: item.name,
      size: '20',
      className: (0, _classnames.default)({
        'js-img_resize_input': item.resize,
      }),
    }),
    /*#__PURE__*/ _react.default.createElement('br', null),
    item.alt &&
      /*#__PURE__*/ _react.default.createElement(
        'span',
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
      name: attribute.hiddenName,
      value: attribute.name,
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
    }),
    /*#__PURE__*/ _react.default.createElement(_OptionNoSearch.OptionNoSearch, {
      name: item.name,
      noSearch: item.noSearch,
    })
  );
}
