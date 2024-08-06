'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
function _getRequireWildcardCache(e) {
  if ('function' != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function (e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ('default' !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n.default = e), t && t.set(e, n), n;
}
class UnitConfirmSource extends _react.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { customunit, acmscss } = this.props;
    return /*#__PURE__*/ _react.default.createElement(
      'table',
      {
        className: (0, _classnames.default)({
          'acms-admin-table-admin-edit acms-admin-table-admin-edit-bordered': acmscss,
        }),
      },
      customunit.map((item) => {
        if (!item.name) {
          return null;
        }
        if (item.type === 'text') {
          return /*#__PURE__*/ _react.default.createElement(
            'tr',
            null,
            /*#__PURE__*/ _react.default.createElement('th', null, item.title),
            /*#__PURE__*/ _react.default.createElement('td', null, '{'.concat(item.name, '}'))
          );
        } else if (item.type === 'textarea') {
          return /*#__PURE__*/ _react.default.createElement(
            'tr',
            null,
            /*#__PURE__*/ _react.default.createElement('th', null, item.title),
            /*#__PURE__*/ _react.default.createElement('td', null, '{'.concat(item.name, '}[escape|nl2br]'))
          );
        } else if (item.type === 'select') {
          return /*#__PURE__*/ _react.default.createElement(
            'tr',
            null,
            /*#__PURE__*/ _react.default.createElement('th', null, item.title),
            /*#__PURE__*/ _react.default.createElement(
              'td',
              null,
              item.option.map((option) =>
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  null,
                  '<!-- BEGIN_IF [{'.concat(item.name, '}/eq/').concat(option.value, '] -->'),
                  option.label,
                  '<!-- END_IF -->'
                )
              )
            )
          );
        } else if (item.type === 'radio') {
          return /*#__PURE__*/ _react.default.createElement(
            'tr',
            null,
            /*#__PURE__*/ _react.default.createElement('th', null, item.title),
            /*#__PURE__*/ _react.default.createElement(
              'td',
              null,
              item.option.map((option) =>
                '<!-- BEGIN_IF [{'
                  .concat(item.name, '}/eq/')
                  .concat(option.value, '] -->\n              ')
                  .concat(option.label, '\n              <!-- END_IF -->')
              )
            )
          );
        } else if (item.type === 'checkbox') {
          return /*#__PURE__*/ _react.default.createElement(
            'tr',
            null,
            /*#__PURE__*/ _react.default.createElement('th', null, item.title),
            /*#__PURE__*/ _react.default.createElement(
              'td',
              null,
              '<!-- BEGIN '.concat(item.name, ':loop -->'),
              '<!-- BEGIN '.concat(item.name, ':glue -->,<!-- END ').concat(item.name, ':glue -->'),
              item.option.map((option) =>
                '<!-- BEGIN_IF [{'
                  .concat(item.name, '}/eq/')
                  .concat(option.value, '] -->\n              ')
                  .concat(option.label, '\n              <!-- END_IF -->')
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
            null,
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
            null,
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
            null,
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
                    })
                  ),
                !item.useFocusImage &&
                  /*#__PURE__*/ _react.default.createElement('img', {
                    alt: '{'.concat(item.name, '@alt}'),
                    src: '%{MEDIA_ARCHIVES_DIR}{'.concat(item.name, '@path}'),
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
            null,
            /*#__PURE__*/ _react.default.createElement('th', null, item.title),
            /*#__PURE__*/ _react.default.createElement('td', null, '{'.concat(item.name, '@html}[raw]'))
          );
        } else if (item.type === 'lite-editor') {
          return /*#__PURE__*/ _react.default.createElement(
            'tr',
            null,
            /*#__PURE__*/ _react.default.createElement('th', null, item.title),
            /*#__PURE__*/ _react.default.createElement('td', null, '{'.concat(item.name, '}[raw]'))
          );
        } else if (item.type === 'table') {
          return /*#__PURE__*/ _react.default.createElement(
            'tr',
            null,
            /*#__PURE__*/ _react.default.createElement('th', null, item.title),
            /*#__PURE__*/ _react.default.createElement('td', null, '{'.concat(item.name, '}[raw]'))
          );
        }
      })
    );
  }
}
exports.default = UnitConfirmSource;
