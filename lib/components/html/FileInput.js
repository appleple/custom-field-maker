'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.FileInput = FileInput;
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _MakerContext = require('../../store/MakerContext');
var _OptionValidator = require('./OptionValidator');
var _OptionNoSearch = require('./OptionNoSearch');
function FileInput(props) {
  const { item, id, isValue = true } = props;
  const {
    preview: { acmscss, editMode, mode, direction },
  } = (0, _MakerContext.useMakerContext)();
  let src = '/images/fileicon/';
  let alt = 'file';
  if (item.extension) {
    src += ''.concat(item.extension, '.svg');
    alt += item.extension;
  } else {
    src += 'file.svg';
  }
  let attribute = {
    value: '',
    name: '',
    hiddenName: '',
  };
  switch (mode) {
    case 'customfield': {
      attribute = {
        id,
        value: ''.concat(item.name),
        name: item.name,
        hiddenName: 'field[]',
      };
      break;
    }
    case 'fieldgroup': {
      attribute = {
        id,
        value: '{'.concat(item.name, '}'),
        name: ''.concat(item.name, '[]'),
      };
      break;
    }
    case 'customunit': {
      attribute = {
        id,
        value: '{'.concat(item.name, '}'),
        name: ''.concat(item.name, '{id}'),
        hiddenName: 'unit[]',
      };
      break;
    }
    case 'unitgroup': {
      attribute = {
        id,
        value: item.name,
        name: ''.concat(item.name, '{id}[]'),
      };
      break;
    }
  }
  const wrapTable = (children, title) => {
    return /*#__PURE__*/ _react.default.createElement(
      ConditionalWrap,
      {
        condition: direction === 'vertical',
        wrap: (child) =>
          /*#__PURE__*/ _react.default.createElement(
            'tr',
            null,
            /*#__PURE__*/ _react.default.createElement('th', null, title),
            child
          ),
      },
      children
    );
  };
  const ConditionalWrap = (_ref) => {
    let { condition, wrap, children } = _ref;
    return condition ? wrap(children) : children;
  };
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    mode === 'customfield' &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        editMode === 'preview' ? null : '<!-- BEGIN '.concat(item.name, '@path:veil -->'),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: ''.concat(item.name, '@old'),
          value: '{'.concat(item.name, '@path}'),
        }),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: ''.concat(item.name, '@secret'),
          value: '{'.concat(item.name, '@secret}'),
        }),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: ''.concat(item.name, '@fileSize'),
          value: '{'.concat(item.name, '@fileSize}'),
        }),
        /*#__PURE__*/ _react.default.createElement(
          'label',
          {
            htmlFor: 'input-checkbox-'.concat(item.name, '@edit'),
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
          acmscss &&
            /*#__PURE__*/ _react.default.createElement('i', {
              className: 'acms-admin-ico-checkbox',
            }),
          '\u524A\u9664'
        ),
        /*#__PURE__*/ _react.default.createElement(
          'a',
          {
            href: '%{ARCHIVES_DIR}{'.concat(item.name, '@path}'),
          },
          /*#__PURE__*/ _react.default.createElement('img', {
            src: src,
            width: '64',
            height: '64',
            alt: alt,
          })
        ),
        editMode === 'preview' ? null : '<!-- END '.concat(item.name, '@path:veil -->'),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'file',
          name: item.name,
        }),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: attribute.hiddenName,
          value: attribute.value,
        }),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: ''.concat(item.name, '@baseName'),
          value: '{'.concat(item.name, '@baseName}'),
        }),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: ''.concat(item.name, ':extension'),
          value: 'file',
        }),
        item.extension &&
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'hidden',
            name: ''.concat(item.name, '@extension'),
            value: item.extension,
          }),
        item.fileNameMethod === 'random' &&
          item.fileName &&
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'hidden',
            name: ''.concat(item.name, '@filename'),
            value: '',
          }),
        item.fileNameMethod === 'fix' &&
          item.fileName &&
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'hidden',
            name: ''.concat(item.name, '@filename'),
            value: ''.concat(item.fileName),
          }),
        item.fileNameMethod === 'asis' &&
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'hidden',
            name: ''.concat(item.name, '@filename'),
            value: '@rawfilename',
          }),
        /*#__PURE__*/ _react.default.createElement(_OptionNoSearch.OptionNoSearch, {
          name: item.name,
          noSearch: item.noSearch,
        })
      ),
    mode === 'fieldgroup' &&
      wrapTable(
        /*#__PURE__*/ _react.default.createElement(
          _react.default.Fragment,
          null,
          isValue &&
            /*#__PURE__*/ _react.default.createElement(
              _react.default.Fragment,
              null,
              editMode === 'preview' ? null : '<!-- BEGIN_IF [{'.concat(item.name, '@path}/nem] -->'),
              /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                  className: (0, _classnames.default)({
                    'acms-admin-form-checkbox': acmscss,
                  }),
                },
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'checkbox',
                  name: ''.concat(item.name, '@edit[]'),
                  value: 'delete',
                  id: 'input-checkbox-'.concat(item.name, '{i}@edit[]'),
                }),
                /*#__PURE__*/ _react.default.createElement(
                  'label',
                  {
                    htmlFor: 'input-checkbox-'.concat(item.name, '{i}@edit[]'),
                  },
                  acmscss &&
                    /*#__PURE__*/ _react.default.createElement('i', {
                      className: 'acms-admin-ico-checkbox',
                    }),
                  ' \u524A\u9664'
                )
              ),
              /*#__PURE__*/ _react.default.createElement(
                'a',
                {
                  href: '%{ARCHIVES_DIR}{'.concat(item.name, '@path}'),
                },
                /*#__PURE__*/ _react.default.createElement('img', {
                  src: src,
                  width: '64',
                  height: '64',
                  alt: alt,
                })
              ),
              editMode === 'preview' ? null : '<!-- END_IF -->',
              /*#__PURE__*/ _react.default.createElement('input', {
                type: 'hidden',
                name: ''.concat(item.name, '@old[]'),
                value: '{'.concat(item.name, '@path}'),
              })
            ),
          item.extension &&
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: ''.concat(item.name, '@extension[]'),
              value: item.extension,
            }),
          item.fileNameMethod === 'random' &&
            item.fileName &&
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: ''.concat(item.name, '@filename[]'),
              value: '',
            }),
          item.fileNameMethod === 'fix' &&
            item.fileName &&
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: ''.concat(item.name, '@filename[]'),
              value: item.fileName,
            }),
          item.fileNameMethod === 'asis' &&
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: ''.concat(item.name, '@filename[]'),
              value: '@rawfilename',
            }),
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'file',
            name: ''.concat(item.name, '[]'),
          }),
          /*#__PURE__*/ _react.default.createElement(_OptionValidator.OptionValidator, {
            item: item,
          })
        ),
        item.title
      )
  );
}
