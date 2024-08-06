'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.GroupTable = GroupTable;
var _react = _interopRequireWildcard(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _Label = require('../html/Label');
var _TextInput = require('../html/TextInput');
var _Textarea = require('../html/Textarea');
var _MakerContext = require('../../store/MakerContext');
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
function GroupTable(props) {
  const { fieldgroup } = props;
  const {
    preview: { acmscss, direction, editMode },
  } = (0, _MakerContext.useMakerContext)();
  const tableRef = (0, _react.useRef)();
  const ConditionalWrap = (_ref) => {
    let { condition, wrap, children } = _ref;
    return condition ? wrap(children) : children;
  };
  const groupLength = fieldgroup.items.length;
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    fieldgroup.title &&
      /*#__PURE__*/ _react.default.createElement(
        'h2',
        {
          className: (0, _classnames.default)({
            'acms-admin-admin-title2': acmscss,
          }),
        },
        fieldgroup.title
      ),
    fieldgroup.name &&
      /*#__PURE__*/ _react.default.createElement(
        'table',
        {
          className: (0, _classnames.default)('js-fieldgroup-sortable', {
            'adminTable acms-admin-table-admin-edit': acmscss,
          }),
          ref: tableRef,
        },
        /*#__PURE__*/ _react.default.createElement(
          'thead',
          {
            className: (0, _classnames.default)({
              'acms-admin-hide-sp': acmscss,
            }),
          },
          /*#__PURE__*/ _react.default.createElement(
            'tr',
            null,
            /*#__PURE__*/ _react.default.createElement(
              'th',
              {
                className: (0, _classnames.default)({
                  'acms-admin-table-left acms-admin-admin-config-table-item-handle': acmscss,
                }),
              },
              '\xA0'
            ),
            direction === 'horizontal' &&
              /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                fieldgroup &&
                  fieldgroup.items.map((item, index) =>
                    /*#__PURE__*/ _react.default.createElement(
                      'th',
                      {
                        key: index,
                        className: (0, _classnames.default)({
                          'acms-admin-table-left': acmscss,
                        }),
                      },
                      item.title,
                      item.tooltip &&
                        /*#__PURE__*/ _react.default.createElement('i', {
                          className: 'acms-admin-icon-tooltip js-acms-tooltip',
                          'data-acms-tooltip': item.tooltip,
                        })
                    )
                  )
              ),
            direction === 'vertical' && /*#__PURE__*/ _react.default.createElement('th', null),
            /*#__PURE__*/ _react.default.createElement(
              'th',
              {
                className: (0, _classnames.default)({
                  'acms-admin-table-left acms-admin-admin-config-table-action': acmscss,
                }),
              },
              '\u524A\u9664'
            )
          )
        ),
        /*#__PURE__*/ _react.default.createElement(
          'tbody',
          null,
          editMode === 'preview' ? null : '<!-- BEGIN '.concat(fieldgroup.name, ':loop -->'),
          /*#__PURE__*/ _react.default.createElement(
            'tr',
            {
              className: 'sortable-item',
            },
            /*#__PURE__*/ _react.default.createElement(
              'td',
              {
                className: 'item-handle acms-admin-table-nowrap',
              },
              acmscss &&
                /*#__PURE__*/ _react.default.createElement('i', {
                  className: 'acms-admin-icon-sort',
                })
            ),
            /*#__PURE__*/ _react.default.createElement(
              ConditionalWrap,
              {
                condition: direction === 'vertical',
                wrap: (children) =>
                  /*#__PURE__*/ _react.default.createElement(
                    'td',
                    null,
                    /*#__PURE__*/ _react.default.createElement('table', null, children)
                  ),
              },
              fieldgroup.items.map((item, index) => {
                switch (item.type) {
                  case 'text': {
                    return /*#__PURE__*/ _react.default.createElement(
                      'tr',
                      {
                        key: index,
                        className: 'acms-admin-form-item',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'th',
                        {
                          className: 'acms-admin-form-item-heading',
                        },
                        /*#__PURE__*/ _react.default.createElement(_Label.Label, {
                          item: item,
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'td',
                        {
                          className: 'acms-admin-form-item-input',
                        },
                        /*#__PURE__*/ _react.default.createElement(_TextInput.TextInput, {
                          item: item,
                        })
                      )
                    );
                  }
                  case 'textarea': {
                    return /*#__PURE__*/ _react.default.createElement(
                      'tr',
                      {
                        key: index,
                        className: 'acms-admin-form-item',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'th',
                        {
                          className: 'acms-admin-form-item-heading',
                        },
                        /*#__PURE__*/ _react.default.createElement(_Label.Label, {
                          item: item,
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'td',
                        {
                          className: 'acms-admin-form-item-input',
                        },
                        /*#__PURE__*/ _react.default.createElement(_Textarea.Textarea, {
                          item: item,
                        })
                      )
                    );
                  }
                  default: {
                    return null;
                  }
                }
              }),
              editMode === 'preview' ? null : '<!-- END '.concat(fieldgroup.name, ':loop -->'),
              editMode === 'preview'
                ? null
                : /*#__PURE__*/ _react.default.createElement(
                    'tr',
                    {
                      className: 'sortable-item item-template',
                    },
                    fieldgroup.items.map((item, index) => {
                      switch (item.type) {
                        case 'text': {
                          return /*#__PURE__*/ _react.default.createElement(
                            'tr',
                            {
                              key: index,
                              className: 'acms-admin-form-item',
                            },
                            /*#__PURE__*/ _react.default.createElement(
                              'th',
                              {
                                className: 'acms-admin-form-item-heading',
                              },
                              /*#__PURE__*/ _react.default.createElement(_Label.Label, {
                                item: item,
                              })
                            ),
                            /*#__PURE__*/ _react.default.createElement(
                              'td',
                              {
                                className: 'acms-admin-form-item-input',
                              },
                              /*#__PURE__*/ _react.default.createElement(_TextInput.TextInput, {
                                item: item,
                              })
                            )
                          );
                        }
                        case 'textarea': {
                          return /*#__PURE__*/ _react.default.createElement(
                            'tr',
                            {
                              key: index,
                              className: 'acms-admin-form-item',
                            },
                            /*#__PURE__*/ _react.default.createElement(
                              'th',
                              {
                                className: 'acms-admin-form-item-heading',
                              },
                              /*#__PURE__*/ _react.default.createElement(_Label.Label, {
                                item: item,
                              })
                            ),
                            /*#__PURE__*/ _react.default.createElement(
                              'td',
                              {
                                className: 'acms-admin-form-item-input',
                              },
                              /*#__PURE__*/ _react.default.createElement(_Textarea.Textarea, {
                                item: item,
                              })
                            )
                          );
                        }
                        default: {
                          return null;
                        }
                      }
                    })
                  )
            ),
            /*#__PURE__*/ _react.default.createElement(
              'td',
              {
                className: 'acms-admin-table-nowrap',
              },
              /*#__PURE__*/ _react.default.createElement('input', {
                type: 'button',
                className: (0, _classnames.default)('item-delete', {
                  'acms-admin-btn-admin acms-admin-btn-admin-danger': acmscss,
                }),
                value: '\u524A\u9664',
              })
            )
          )
        ),
        /*#__PURE__*/ _react.default.createElement(
          'tfoot',
          null,
          /*#__PURE__*/ _react.default.createElement(
            'tr',
            null,
            /*#__PURE__*/ _react.default.createElement(
              'td',
              {
                colSpan: direction === 'horizontal' ? groupLength + 2 : 3,
              },
              /*#__PURE__*/ _react.default.createElement('input', {
                type: 'button',
                className: (0, _classnames.default)('item-insert', {
                  'acms-admin-btn-admin': acmscss,
                }),
                value: '\u8FFD\u52A0',
              })
            )
          )
        )
      ),
    fieldgroup.name &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        fieldgroup.items.map((item) =>
          /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            item.type === 'image' &&
              /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                item.square &&
                  /*#__PURE__*/ _react.default.createElement(
                    _react.default.Fragment,
                    null,
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(fieldgroup.name, '[]'),
                      value: ''.concat(item.name, '@squarePath'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(fieldgroup.name, '[]'),
                      value: ''.concat(item.name, '@squareAlt'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(fieldgroup.name, '[]'),
                      value: ''.concat(item.name, '@squareX'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(fieldgroup.name, '[]'),
                      value: ''.concat(item.name, '@squareY'),
                    })
                  ),
                item.large &&
                  /*#__PURE__*/ _react.default.createElement(
                    _react.default.Fragment,
                    null,
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(fieldgroup.name, '[]'),
                      value: ''.concat(item.name, '@largePath'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(fieldgroup.name, '[]'),
                      value: ''.concat(item.name, '@largeAlt'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(fieldgroup.name, '[]'),
                      value: ''.concat(item.name, '@largeX'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(fieldgroup.name, '[]'),
                      value: ''.concat(item.name, '@largeY'),
                    })
                  ),
                item.tiny &&
                  /*#__PURE__*/ _react.default.createElement(
                    _react.default.Fragment,
                    null,
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(fieldgroup.name, '[]'),
                      value: ''.concat(item.name, '@tinyPath'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(fieldgroup.name, '[]'),
                      value: ''.concat(item.name, '@tinyAlt'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(fieldgroup.name, '[]'),
                      value: ''.concat(item.name, '@tinyX'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(fieldgroup.name, '[]'),
                      value: ''.concat(item.name, '@tinyY'),
                    })
                  ),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(fieldgroup.name, '[]'),
                  value: ''.concat(item.name, '@path'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(fieldgroup.name, '[]'),
                  value: ''.concat(item.name, '@alt'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(fieldgroup.name, '[]'),
                  value: ''.concat(item.name, '@x'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(fieldgroup.name, '[]'),
                  value: ''.concat(item.name, '@y'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(fieldgroup.name, '[]'),
                  value: ''.concat(item.name, '@edit'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(fieldgroup.name, '[]'),
                  value: ''.concat(item.name, '@old'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: ''.concat(item.name, ':extension'),
                  value: 'image',
                })
              ),
            item.type === 'file' &&
              /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(fieldgroup.name, '[]'),
                  value: ''.concat(item.name, '@path'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(fieldgroup.name, '[]'),
                  value: ''.concat(item.name, '@alt'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(fieldgroup.name, '[]'),
                  value: ''.concat(item.name, '@edit'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(fieldgroup.name, '[]'),
                  value: ''.concat(item.name, '@old'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: ''.concat(item.name, ':extension'),
                  value: 'file',
                })
              ),
            item.type === 'media' &&
              /*#__PURE__*/ _react.default.createElement('input', {
                type: 'hidden',
                name: ''.concat(item.name, ':extension'),
                value: 'media',
              }),
            item.type === 'rich-editor' &&
              /*#__PURE__*/ _react.default.createElement('input', {
                type: 'hidden',
                name: ''.concat(item.name, ':extension'),
                value: 'rich-editor',
              }),
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: '@'.concat(fieldgroup.name, '[]'),
              value: item.name,
            }),
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: 'field[]',
              value: item.name,
            }),
            item.noSearch &&
              /*#__PURE__*/ _react.default.createElement('input', {
                type: 'hidden',
                name: ''.concat(item.name, ':search'),
                value: '0',
              }),
            item.validator.map((validator, index) => {
              if (!validator.option) {
                return null;
              }
              const name = item.type === 'file' || item.type === 'image' ? ''.concat(item.name, '@path') : item.name;
              return /*#__PURE__*/ _react.default.createElement('input', {
                key: index,
                type: 'hidden',
                name: ''.concat(name, ':v#').concat(validator.option),
                value: validator.value,
                id: ''.concat(name, '-v-').concat(validator.option),
              });
            }),
            (() => {
              const name = item.type === 'file' || item.type === 'image' ? ''.concat(item.name, '@path') : item.name;
              return (
                item.converter &&
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: ''.concat(name, ':c'),
                  value: item.converter,
                })
              );
            })()
          )
        ),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: 'field[]',
          value: '@'.concat(fieldgroup.name),
        })
      )
  );
}
