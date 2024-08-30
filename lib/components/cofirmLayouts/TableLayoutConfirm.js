'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.TableLayoutConfirm = TableLayoutConfirm;
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _MakerContext = require('../../store/MakerContext');
function TableLayoutConfirm() {
  const {
    state: { customfield },
    preview: { acmscss },
  } = (0, _MakerContext.useMakerContext)();
  return /*#__PURE__*/ _react.default.createElement(
    'table',
    {
      className: (0, _classnames.default)({
        'acms-admin-table-admin-edit': acmscss,
      }),
    },
    customfield.map((item, index) => {
      if (!item.name) {
        return null;
      }
      if (item.type === 'text') {
        return /*#__PURE__*/ _react.default.createElement(
          'tr',
          {
            key: index,
          },
          /*#__PURE__*/ _react.default.createElement('th', null, item.title),
          /*#__PURE__*/ _react.default.createElement('td', null, '{'.concat(item.name, '}'))
        );
      } else if (item.type === 'textarea') {
        return /*#__PURE__*/ _react.default.createElement(
          'tr',
          {
            key: index,
          },
          /*#__PURE__*/ _react.default.createElement('th', null, item.title),
          /*#__PURE__*/ _react.default.createElement('td', null, '{'.concat(item.name, '}[escape|nl2br]'))
        );
      } else if (item.type === 'select') {
        return /*#__PURE__*/ _react.default.createElement(
          'tr',
          {
            key: index,
          },
          /*#__PURE__*/ _react.default.createElement('th', null, item.title),
          /*#__PURE__*/ _react.default.createElement(
            'td',
            null,
            item.option.map((option) =>
              /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                  key: option.value,
                },
                '<!-- BEGIN_IF [{'.concat(item.name, '}/eq/').concat(option.value, '] -->'),
                option.value,
                '<!-- END_IF -->'
              )
            )
          )
        );
      } else if (item.type === 'radio') {
        return /*#__PURE__*/ _react.default.createElement(
          'tr',
          {
            key: index,
          },
          /*#__PURE__*/ _react.default.createElement('th', null, item.title),
          /*#__PURE__*/ _react.default.createElement(
            'td',
            null,
            item.option.map((option) =>
              '<!-- BEGIN_IF [{'
                .concat(item.name, '}/eq/')
                .concat(option.value, '] -->\n            ')
                .concat(option.label, '\n            <!-- END_IF -->')
            )
          )
        );
      } else if (item.type === 'checkbox') {
        return /*#__PURE__*/ _react.default.createElement(
          'tr',
          {
            key: index,
          },
          /*#__PURE__*/ _react.default.createElement('th', null, item.title),
          /*#__PURE__*/ _react.default.createElement(
            'td',
            null,
            '<!-- BEGIN '.concat(item.name, ':loop -->'),
            '<!-- BEGIN '.concat(item.name, ':glue -->,<!-- END ').concat(item.name, ':glue -->'),
            item.option.map((option) =>
              '<!-- BEGIN_IF [{'
                .concat(item.name, '}/eq/')
                .concat(option.value, '] -->\n            ')
                .concat(option.label, '\n            <!-- END_IF -->')
            ),
            '<!-- END '.concat(item.name, ':loop -->')
          )
        );
      } else if (item.type === 'file') {
        let src = '/images/fileicon/';
        let alt = 'file';
        if (item.extension) {
          src += ''.concat(item.extension, '.svg');
          alt += item.extension;
        } else {
          src += 'file.svg';
        }
        return /*#__PURE__*/ _react.default.createElement(
          'tr',
          {
            key: index,
          },
          /*#__PURE__*/ _react.default.createElement('th', null, item.title),
          /*#__PURE__*/ _react.default.createElement(
            'td',
            null,
            '<!-- BEGIN '.concat(item.name, '@path:veil -->'),
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
            '<!-- END '.concat(item.name, '@path:veil -->')
          )
        );
      } else if (item.type === 'image') {
        return /*#__PURE__*/ _react.default.createElement(
          'tr',
          {
            key: index,
          },
          /*#__PURE__*/ _react.default.createElement('th', null, item.title),
          /*#__PURE__*/ _react.default.createElement(
            'td',
            null,
            /*#__PURE__*/ _react.default.createElement('img', {
              src: '%{ARCHIVES_DIR}{'.concat(item.name, '@path}'),
              width: '64',
              height: '64',
              alt: '{'.concat(item.name, '@alt}'),
            })
          )
        );
      } else if (item.type === 'media') {
        return /*#__PURE__*/ _react.default.createElement(
          'tr',
          {
            key: index,
          },
          /*#__PURE__*/ _react.default.createElement('th', null, item.title),
          /*#__PURE__*/ _react.default.createElement(
            'td',
            null,
            '<!-- BEGIN_IF [{'.concat(item.name, '@type}/eq/file] -->'),
            /*#__PURE__*/ _react.default.createElement(
              'a',
              {
                href: '{'.concat(item.name, '@path}'),
              },
              /*#__PURE__*/ _react.default.createElement('img', {
                alt: '{'.concat(item.name, '@alt}'),
                src: '{'.concat(item.name, '@thumbnail}'),
                style: {
                  width: '64px',
                  height: 'auto',
                },
              })
            ),
            '<!-- END_IF -->',
            '<!-- BEGIN_IF [{'.concat(item.name, '@type}/eq/image] -->'),
            '<!-- BEGIN_IF [{'.concat(item.name, '@link}/nem] -->'),
            /*#__PURE__*/ _react.default.createElement(
              'a',
              {
                href: '{'.concat(item.name, '@link}'),
              },
              '<!-- END_IF -->',
              item.useFocusImage &&
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    style: {
                      width: ''.concat(item.focusImageWidth, 'px'),
                      height: ''.concat(item.focusImageHeight, 'px'),
                    },
                  },
                  /*#__PURE__*/ _react.default.createElement('img', {
                    className: 'js-focused-image',
                    'data-focus-x': '{'.concat(item.name, '@focalX}'),
                    'data-focus-y': '{'.concat(item.name, '@focalY}'),
                    alt: '{'.concat(item.name, '@alt}'),
                    src: '%{MEDIA_ARCHIVES_DIR}{'
                      .concat(item.name, '@path}[resizeImg(')
                      .concat(item.focusImageWidth, ')]'),
                    width: item.focusImageWidth,
                    height: '{'.concat(item.name, '@ratio}[getHeightFromRatio(').concat(item.focusImageWidth, ')]'),
                  })
                ),
              !item.useFocusImage &&
                /*#__PURE__*/ _react.default.createElement('img', {
                  alt: '{'.concat(item.name, '@alt}'),
                  src: '%{MEDIA_ARCHIVES_DIR}{'.concat(item.name, '@path}'),
                  width: '300',
                  height: '{'.concat(item.name, '@ratio}[getHeightFromRatio(300)]'),
                }),
              '<!-- BEGIN_IF [{'.concat(item.name, '@link}/nem] -->')
            ),
            '<!-- END_IF -->',
            '<!-- BEGIN_IF [{'.concat(item.name, '@text}/nem] -->'),
            /*#__PURE__*/ _react.default.createElement('p', null, '{'.concat(item.name, '@text}')),
            '<!-- END_IF -->',
            '<!-- END_IF -->'
          )
        );
      } else if (item.type === 'rich-editor') {
        return /*#__PURE__*/ _react.default.createElement(
          'tr',
          {
            key: index,
          },
          /*#__PURE__*/ _react.default.createElement('th', null, item.title),
          /*#__PURE__*/ _react.default.createElement('td', null, '{'.concat(item.name, '@html}[raw]'))
        );
      } else if (item.type === 'lite-editor') {
        return /*#__PURE__*/ _react.default.createElement(
          'tr',
          {
            key: index,
          },
          /*#__PURE__*/ _react.default.createElement('th', null, item.title),
          /*#__PURE__*/ _react.default.createElement('td', null, '{'.concat(item.name, '}[raw]'))
        );
      } else if (item.type === 'table') {
        return /*#__PURE__*/ _react.default.createElement(
          'tr',
          {
            key: index,
          },
          /*#__PURE__*/ _react.default.createElement('th', null, item.title),
          /*#__PURE__*/ _react.default.createElement('td', null, '{'.concat(item.name, '}[raw]'))
        );
      }
    })
  );
}
