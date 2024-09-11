'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.GroupTableLayout = GroupTableLayout;
var _react = _interopRequireWildcard(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _TextInput = require('../html/TextInput');
var _Textarea = require('../html/Textarea');
var _Checkbox = require('../html/Checkbox');
var _Selectbox = require('../html/Selectbox');
var _RadioButton = require('../html/RadioButton');
var _Media = require('../html/Media');
var _ImageInput = require('../html/ImageInput');
var _RichEditor = require('../html/RichEditor');
var _Table = require('../html/Table');
var _MakerContext = require('../../store/MakerContext');
var _WrapTable = require('../html/WrapTable');
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
function GroupTableLayout() {
  const {
    state: { fieldgroup },
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
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(
          'table',
          {
            className: (0, _classnames.default)('js-fieldgroup-sortable', {
              'adminTable acms-admin-table-admin-edit': acmscss,
            }),
            ref: tableRef,
          },
          editMode === 'preview'
            ? null
            : fieldgroup.items.length > 0 &&
                /*#__PURE__*/ _react.default.createElement(
                  _react.default.Fragment,
                  null,
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
                        _react.default.Fragment,
                        null,
                        fieldgroup.items.map((item, index) => {
                          switch (item.type) {
                            case 'text': {
                              return /*#__PURE__*/ _react.default.createElement(
                                _WrapTable.WrapTable,
                                {
                                  title: item.title,
                                },
                                /*#__PURE__*/ _react.default.createElement(
                                  'td',
                                  null,
                                  /*#__PURE__*/ _react.default.createElement(_TextInput.TextInput, {
                                    item: item,
                                    id: ''.concat(item.name).concat(index),
                                  })
                                )
                              );
                            }
                            case 'textarea': {
                              return /*#__PURE__*/ _react.default.createElement(
                                _WrapTable.WrapTable,
                                {
                                  title: item.title,
                                },
                                /*#__PURE__*/ _react.default.createElement(
                                  'td',
                                  null,
                                  /*#__PURE__*/ _react.default.createElement(_Textarea.Textarea, {
                                    item: item,
                                    id: ''.concat(item.name).concat(index),
                                  })
                                )
                              );
                            }
                            case 'checkbox': {
                              return /*#__PURE__*/ _react.default.createElement(
                                _WrapTable.WrapTable,
                                {
                                  title: item.title,
                                },
                                /*#__PURE__*/ _react.default.createElement(
                                  'td',
                                  null,
                                  /*#__PURE__*/ _react.default.createElement(_Checkbox.Checkbox, {
                                    item: item,
                                    id: ''.concat(item.name).concat(index),
                                  })
                                )
                              );
                            }
                            case 'selectbox': {
                              return /*#__PURE__*/ _react.default.createElement(
                                _WrapTable.WrapTable,
                                {
                                  title: item.title,
                                },
                                /*#__PURE__*/ _react.default.createElement(
                                  'td',
                                  null,
                                  /*#__PURE__*/ _react.default.createElement(_Selectbox.Selectbox, {
                                    item: item,
                                    id: ''.concat(item.name).concat(index),
                                  })
                                )
                              );
                            }
                            case 'radioButton': {
                              return /*#__PURE__*/ _react.default.createElement(
                                _WrapTable.WrapTable,
                                {
                                  title: item.title,
                                },
                                /*#__PURE__*/ _react.default.createElement(
                                  'td',
                                  null,
                                  /*#__PURE__*/ _react.default.createElement(_RadioButton.RadioButton, {
                                    item: item,
                                    id: ''.concat(item.name).concat(index),
                                  })
                                )
                              );
                            }
                            case 'media': {
                              return /*#__PURE__*/ _react.default.createElement(
                                _WrapTable.WrapTable,
                                {
                                  title: item.title,
                                },
                                /*#__PURE__*/ _react.default.createElement(
                                  'td',
                                  null,
                                  /*#__PURE__*/ _react.default.createElement(_Media.Media, {
                                    item: item,
                                    id: ''.concat(item.name).concat(index),
                                  })
                                )
                              );
                            }
                            case 'image': {
                              return /*#__PURE__*/ _react.default.createElement(
                                _WrapTable.WrapTable,
                                {
                                  title: item.title,
                                },
                                /*#__PURE__*/ _react.default.createElement(
                                  'td',
                                  null,
                                  /*#__PURE__*/ _react.default.createElement(_ImageInput.ImageInput, {
                                    item: item,
                                    id: ''.concat(item.name).concat(index),
                                  })
                                )
                              );
                            }
                            case 'richEditor': {
                              return /*#__PURE__*/ _react.default.createElement(
                                _WrapTable.WrapTable,
                                {
                                  title: item.title,
                                },
                                /*#__PURE__*/ _react.default.createElement(
                                  'td',
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
                                                className:
                                                  'acms-admin-icon acms-admin-icon-expand-arrow js-expand-icon',
                                              })
                                            ),
                                            children
                                          )
                                        ),
                                    },
                                    /*#__PURE__*/ _react.default.createElement(_RichEditor.RichEditor, {
                                      item: item,
                                      id: ''.concat(item.name).concat(index),
                                    })
                                  )
                                )
                              );
                            }
                            case 'table': {
                              return /*#__PURE__*/ _react.default.createElement(
                                _WrapTable.WrapTable,
                                {
                                  title: item.title,
                                },
                                /*#__PURE__*/ _react.default.createElement(
                                  'td',
                                  null,
                                  /*#__PURE__*/ _react.default.createElement(_Table.Table, {
                                    item: item,
                                    id: ''.concat(item.name).concat(index),
                                  })
                                )
                              );
                            }
                            default: {
                              return null;
                            }
                          }
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'td',
                        {
                          className: 'acms-admin-table-nowrap',
                        },
                        /*#__PURE__*/ _react.default.createElement(
                          'button',
                          {
                            type: 'button',
                            className: (0, _classnames.default)('item-delete', {
                              'acms-admin-btn-admin acms-admin-btn-admin-danger': acmscss,
                            }),
                          },
                          '\u524A\u9664'
                        )
                      )
                    ),
                    editMode === 'preview' ? null : '<!-- END '.concat(fieldgroup.name, ':loop -->'),
                    editMode === 'preview'
                      ? null
                      : /*#__PURE__*/ _react.default.createElement(
                          _react.default.Fragment,
                          null,
                          /*#__PURE__*/ _react.default.createElement(
                            'tr',
                            {
                              className: 'sortable-item item-template',
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
                              _react.default.Fragment,
                              null,
                              fieldgroup.items.map((item, index) => {
                                switch (item.type) {
                                  case 'text': {
                                    return /*#__PURE__*/ _react.default.createElement(
                                      _WrapTable.WrapTable,
                                      {
                                        title: item.title,
                                      },
                                      /*#__PURE__*/ _react.default.createElement(
                                        'td',
                                        null,
                                        /*#__PURE__*/ _react.default.createElement(_TextInput.TextInput, {
                                          item: item,
                                          id: ''.concat(item.name).concat(index),
                                          isValue: false,
                                        })
                                      )
                                    );
                                  }
                                  case 'textarea': {
                                    return /*#__PURE__*/ _react.default.createElement(
                                      _WrapTable.WrapTable,
                                      {
                                        title: item.title,
                                      },
                                      /*#__PURE__*/ _react.default.createElement(
                                        'td',
                                        null,
                                        /*#__PURE__*/ _react.default.createElement(_Textarea.Textarea, {
                                          item: item,
                                          id: ''.concat(item.name).concat(index),
                                          isValue: false,
                                        })
                                      )
                                    );
                                  }
                                  case 'checkbox': {
                                    return /*#__PURE__*/ _react.default.createElement(
                                      _WrapTable.WrapTable,
                                      {
                                        title: item.title,
                                      },
                                      /*#__PURE__*/ _react.default.createElement(
                                        'td',
                                        null,
                                        /*#__PURE__*/ _react.default.createElement(_Checkbox.Checkbox, {
                                          item: item,
                                          id: 'template-'.concat(item.name).concat(index),
                                          isChecked: false,
                                        })
                                      )
                                    );
                                  }
                                  case 'selectbox': {
                                    return /*#__PURE__*/ _react.default.createElement(
                                      _WrapTable.WrapTable,
                                      {
                                        title: item.title,
                                      },
                                      /*#__PURE__*/ _react.default.createElement(
                                        'td',
                                        null,
                                        /*#__PURE__*/ _react.default.createElement(_Selectbox.Selectbox, {
                                          item: item,
                                          id: ''.concat(item.name).concat(index),
                                          isSelected: false,
                                        })
                                      )
                                    );
                                  }
                                  case 'radioButton': {
                                    return /*#__PURE__*/ _react.default.createElement(
                                      _WrapTable.WrapTable,
                                      {
                                        title: item.title,
                                      },
                                      /*#__PURE__*/ _react.default.createElement(
                                        'td',
                                        null,
                                        /*#__PURE__*/ _react.default.createElement(_RadioButton.RadioButton, {
                                          item: item,
                                          id: ''.concat(item.name).concat(index),
                                          isChecked: false,
                                        })
                                      )
                                    );
                                  }
                                  case 'media': {
                                    return /*#__PURE__*/ _react.default.createElement(
                                      _WrapTable.WrapTable,
                                      {
                                        title: item.title,
                                      },
                                      /*#__PURE__*/ _react.default.createElement(
                                        'td',
                                        null,
                                        /*#__PURE__*/ _react.default.createElement(_Media.Media, {
                                          item: item,
                                          id: ''.concat(item.name).concat(index),
                                          isValue: false,
                                        })
                                      )
                                    );
                                  }
                                  case 'image': {
                                    return /*#__PURE__*/ _react.default.createElement(
                                      _WrapTable.WrapTable,
                                      {
                                        title: item.title,
                                      },
                                      /*#__PURE__*/ _react.default.createElement(
                                        'td',
                                        null,
                                        /*#__PURE__*/ _react.default.createElement(_ImageInput.ImageInput, {
                                          item: item,
                                          id: ''.concat(item.name).concat(index),
                                          isAttribute: false,
                                        })
                                      )
                                    );
                                  }
                                  case 'richEditor': {
                                    return /*#__PURE__*/ _react.default.createElement(
                                      _WrapTable.WrapTable,
                                      {
                                        title: item.title,
                                      },
                                      /*#__PURE__*/ _react.default.createElement(
                                        'td',
                                        null,
                                        /*#__PURE__*/ _react.default.createElement(_RichEditor.RichEditor, {
                                          item: item,
                                          id: ''.concat(item.name).concat(index),
                                          isValue: false,
                                        })
                                      )
                                    );
                                  }
                                  case 'table': {
                                    return /*#__PURE__*/ _react.default.createElement(
                                      _WrapTable.WrapTable,
                                      {
                                        title: item.title,
                                      },
                                      /*#__PURE__*/ _react.default.createElement(
                                        'td',
                                        null,
                                        /*#__PURE__*/ _react.default.createElement(_Table.Table, {
                                          item: item,
                                          id: ''.concat(item.name).concat(index),
                                          isValue: false,
                                        })
                                      )
                                    );
                                  }
                                  default: {
                                    return null;
                                  }
                                }
                              })
                            ),
                            /*#__PURE__*/ _react.default.createElement(
                              'td',
                              {
                                className: 'acms-admin-table-nowrap',
                              },
                              /*#__PURE__*/ _react.default.createElement(
                                'button',
                                {
                                  type: 'button',
                                  className: (0, _classnames.default)('item-delete', {
                                    'acms-admin-btn-admin acms-admin-btn-admin-danger': acmscss,
                                  }),
                                },
                                '\u524A\u9664'
                              )
                            )
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
