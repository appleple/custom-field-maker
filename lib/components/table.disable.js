'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
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
class Table extends _react.Component {
  constructor(props) {
    super(props);
  }
  renderTh(item) {
    const { jsValidator } = this.props;
    return /*#__PURE__*/ _react.default.createElement(
      'th',
      null,
      item.title,
      item.tooltip &&
        /*#__PURE__*/ _react.default.createElement('i', {
          className: 'acms-admin-icon-tooltip js-acms-tooltip',
          'data-acms-tooltip': item.tooltip,
        }),
      jsValidator &&
        /*#__PURE__*/ _react.default.createElement(
          'label',
          {
            className: 'valid-mark',
            'data-validator': item.name,
          },
          /*#__PURE__*/ _react.default.createElement('span', {
            className: 'acms-admin-icon acms-admin-icon-checklist',
          })
        )
    );
  }
  render() {
    const { acmscss, customfield, preview, jsValidator, renderValidator, renderNoSearch } = this.props;
    return /*#__PURE__*/ _react.default.createElement(
      _react.Fragment,
      null,
      jsValidator && '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->',
      /*#__PURE__*/ _react.default.createElement(
        'table',
        {
          className: (0, _classnames.default)({
            'acms-admin-table-admin-edit': acmscss,
          }),
          ref: (table) => (this.table = table),
        },
        customfield &&
          customfield.map((item, index) => {
            if (item.type === 'text') {
              return /*#__PURE__*/ _react.default.createElement(
                'tr',
                {
                  key: index,
                },
                this.renderTh(item, acmscss, jsValidator),
                /*#__PURE__*/ _react.default.createElement(
                  'td',
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    'input',
                    (0, _extends2.default)(
                      {
                        type: 'text',
                        name: item.name,
                        value: '{'.concat(item.name, '}'),
                        className: (0, _classnames.default)({
                          'acms-admin-form-width-full': acmscss,
                        }),
                      },
                      jsValidator
                        ? {
                            'data-validator': item.name,
                          }
                        : {}
                    )
                  ),
                  /*#__PURE__*/ _react.default.createElement('input', {
                    type: 'hidden',
                    name: 'field[]',
                    value: item.name,
                  }),
                  renderValidator(item, acmscss),
                  renderNoSearch(item)
                )
              );
            } else if (item.type === 'textarea') {
              return /*#__PURE__*/ _react.default.createElement(
                'tr',
                {
                  key: index,
                },
                this.renderTh(item, acmscss),
                /*#__PURE__*/ _react.default.createElement(
                  'td',
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    'textarea',
                    (0, _extends2.default)(
                      {
                        name: item.name,
                        className: (0, _classnames.default)({
                          'acms-admin-form-width-full': acmscss,
                        }),
                      },
                      jsValidator
                        ? {
                            'data-validator': item.name,
                          }
                        : {}
                    ),
                    '{'.concat(item.name, '}')
                  ),
                  /*#__PURE__*/ _react.default.createElement('input', {
                    type: 'hidden',
                    name: 'field[]',
                    value: item.name,
                  }),
                  renderValidator(item, acmscss),
                  renderNoSearch(item, acmscss)
                )
              );
            } else if (item.type === 'lite-editor') {
              return /*#__PURE__*/ _react.default.createElement(
                'tr',
                {
                  key: index,
                },
                this.renderTh(item, acmscss),
                /*#__PURE__*/ _react.default.createElement(
                  'td',
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    'textarea',
                    (0, _extends2.default)(
                      {
                        name: item.name,
                        className: (0, _classnames.default)('js-lite-editor-field', {
                          'acms-admin-form-width-full': acmscss,
                        }),
                      },
                      jsValidator
                        ? {
                            'data-validator': item.name,
                          }
                        : {}
                    ),
                    '{'.concat(item.name, '}')
                  ),
                  /*#__PURE__*/ _react.default.createElement('input', {
                    type: 'hidden',
                    name: 'field[]',
                    value: item.name,
                  }),
                  renderValidator(item, acmscss),
                  renderNoSearch(item, acmscss)
                )
              );
            } else if (item.type === 'rich-editor') {
              return /*#__PURE__*/ _react.default.createElement(
                'tr',
                {
                  key: index,
                },
                this.renderTh(item, acmscss),
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
                  )
                )
              );
            } else if (item.type === 'table') {
              return /*#__PURE__*/ _react.default.createElement(
                'tr',
                {
                  key: index,
                },
                this.renderTh(item, acmscss),
                /*#__PURE__*/ _react.default.createElement(
                  'td',
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    'div',
                    {
                      className: 'js-editable-table-field',
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: 'js-editable-table',
                      },
                      preview ? null : '<!-- BEGIN_IF [{'.concat(item.name, '}[delnl]/nem] -->\n'),
                      preview ? null : '{'.concat(item.name, '}[raw]'),
                      preview ? null : '<!-- ELSE -->',
                      /*#__PURE__*/ _react.default.createElement(
                        'table',
                        null,
                        /*#__PURE__*/ _react.default.createElement(
                          'tr',
                          null,
                          /*#__PURE__*/ _react.default.createElement('th', null, '\u30B5\u30F3\u30D7\u30EB'),
                          /*#__PURE__*/ _react.default.createElement('th', null, '\u30B5\u30F3\u30D7\u30EB')
                        ),
                        /*#__PURE__*/ _react.default.createElement(
                          'tr',
                          null,
                          /*#__PURE__*/ _react.default.createElement('td', null, '\u30B5\u30F3\u30D7\u30EB'),
                          /*#__PURE__*/ _react.default.createElement('td', null, '\u30B5\u30F3\u30D7\u30EB')
                        )
                      ),
                      preview ? null : '<!-- END_IF -->',
                      /*#__PURE__*/ _react.default.createElement('input', {
                        type: 'hidden',
                        className: 'js-editable-table-dest',
                        value: '{'.concat(item.name, '}'),
                        name: item.name,
                      }),
                      /*#__PURE__*/ _react.default.createElement('input', {
                        type: 'hidden',
                        name: 'field[]',
                        value: item.name,
                      })
                    )
                  )
                )
              );
            } else if (item.type === 'select') {
              return /*#__PURE__*/ _react.default.createElement(
                'tr',
                {
                  key: index,
                },
                this.renderTh(item, acmscss),
                /*#__PURE__*/ _react.default.createElement(
                  'td',
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    'select',
                    {
                      name: item.name,
                      className: (0, _classnames.default)({
                        'acms-admin-form-width-full': acmscss,
                      }),
                    },
                    /*#__PURE__*/ _react.default.createElement('option', {
                      value: '',
                    }),
                    item.option.map((option) => {
                      if (!option.label) {
                        return null;
                      }
                      return /*#__PURE__*/ _react.default.createElement(
                        'option',
                        {
                          key: option.value,
                          value: option.value,
                          'data-tmp': '{'.concat(item.name, ':selected#').concat(option.value, '}'),
                        },
                        option.label
                      );
                    })
                  ),
                  /*#__PURE__*/ _react.default.createElement('input', {
                    type: 'hidden',
                    name: 'field[]',
                    value: item.name,
                  }),
                  renderValidator(item, acmscss),
                  renderNoSearch(item)
                )
              );
            } else if (item.type === 'radio') {
              return /*#__PURE__*/ _react.default.createElement(
                'tr',
                {
                  key: index,
                },
                this.renderTh(item),
                /*#__PURE__*/ _react.default.createElement(
                  'td',
                  null,
                  item.option.map((option) => {
                    if (!option.label) {
                      return null;
                    }
                    return /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        key: option.value,
                        className: (0, _classnames.default)({
                          'acms-admin-form-radio': acmscss,
                        }),
                      },
                      /*#__PURE__*/ _react.default.createElement('input', {
                        type: 'radio',
                        name: item.name,
                        value: option.value,
                        'data-tmp': '{'.concat(item.name, ':checked#').concat(option.value, '}'),
                        id: 'input-radio-'.concat(item.name, '-').concat(option.value),
                      }),
                      /*#__PURE__*/ _react.default.createElement(
                        'label',
                        {
                          htmlFor: 'input-radio-'.concat(item.name, '-').concat(option.value),
                        },
                        /*#__PURE__*/ _react.default.createElement('i', {
                          className: 'acms-admin-ico-radio',
                        }),
                        option.label
                      )
                    );
                  }),
                  /*#__PURE__*/ _react.default.createElement('input', {
                    type: 'hidden',
                    name: 'field[]',
                    value: item.name,
                  }),
                  renderValidator(item, acmscss),
                  renderNoSearch(item)
                )
              );
            } else if (item.type === 'checkbox') {
              return /*#__PURE__*/ _react.default.createElement(
                'tr',
                {
                  key: index,
                },
                this.renderTh(item),
                /*#__PURE__*/ _react.default.createElement(
                  'td',
                  null,
                  item.option.map((option) => {
                    if (!option.label) {
                      return null;
                    }
                    return /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        key: option.value,
                        className: (0, _classnames.default)({
                          'acms-admin-form-checkbox': acmscss,
                        }),
                      },
                      /*#__PURE__*/ _react.default.createElement('input', {
                        type: 'checkbox',
                        name: ''.concat(item.name, '[]'),
                        value: option.value,
                        'data-tmp': '{'.concat(item.name, ':checked#').concat(option.value, '}'),
                        id: 'input-checkbox-'.concat(item.name, '-').concat(option.value),
                      }),
                      /*#__PURE__*/ _react.default.createElement(
                        'label',
                        {
                          htmlFor: 'input-checkbox-'.concat(item.name, '-').concat(option.value),
                        },
                        /*#__PURE__*/ _react.default.createElement('i', {
                          className: 'acms-admin-ico-checkbox',
                        }),
                        option.label
                      )
                    );
                  }),
                  /*#__PURE__*/ _react.default.createElement('input', {
                    type: 'hidden',
                    name: 'field[]',
                    value: item.name,
                  }),
                  renderValidator(item, acmscss),
                  renderNoSearch(item)
                )
              );
            } else if (item.type === 'image') {
              return /*#__PURE__*/ _react.default.createElement(
                'tr',
                {
                  key: index,
                },
                this.renderTh(item),
                /*#__PURE__*/ _react.default.createElement(
                  'td',
                  {
                    className: (0, _classnames.default)({
                      'js-img_resize_cf': item.resize,
                    }),
                  },
                  preview ? null : '<!-- BEGIN_IF [{'.concat(item.name, '@path}/nem] -->'),
                  /*#__PURE__*/ _react.default.createElement(
                    _react.Fragment,
                    null,
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
                    })
                  ),
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
                  preview ? null : '<!-- ELSE -->',
                  /*#__PURE__*/ _react.default.createElement(
                    _react.Fragment,
                    null,
                    /*#__PURE__*/ _react.default.createElement('img', {
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
                    })
                  ),
                  preview ? null : '<!-- END_IF -->',
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
                      _react.Fragment,
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
                  renderValidator(item, acmscss),
                  renderNoSearch(item)
                )
              );
            } else if (item.type === 'media') {
              return /*#__PURE__*/ _react.default.createElement(
                'tr',
                {
                  key: index,
                },
                this.renderTh(item),
                /*#__PURE__*/ _react.default.createElement(
                  'td',
                  {
                    className: 'js-media-field',
                  },
                  !item.useDropArea &&
                    /*#__PURE__*/ _react.default.createElement(
                      _react.Fragment,
                      null,
                      /*#__PURE__*/ _react.default.createElement(
                        'div',
                        null,
                        '<!-- BEGIN_IF [{'.concat(item.name, '@thumbnail}/nem] -->'),
                        /*#__PURE__*/ _react.default.createElement(
                          ConditionalWrap,
                          {
                            condition: item.mediaType === 'file',
                            wrap: (children) =>
                              /*#__PURE__*/ _react.default.createElement(
                                'a',
                                {
                                  href: '%{MEDIA_ARCHIVES_DIR}{'.concat(item.name, '@path}'),
                                },
                                children
                              ),
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            'img',
                            (0, _extends2.default)(
                              {
                                src: '{'.concat(item.name, '@thumbnail}'),
                                className: (0, _classnames.default)('js-preview', {
                                  'acms-admin-img-responsive': acmscss,
                                }),
                                alt: '',
                                id: ''.concat(item.name, '-preview'),
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
                              id: ''.concat(item.name, '-preview'),
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
                            'data-type': item.mediaType ? item.mediaType : 'all',
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
                            'data-type': item.mediaType ? item.mediaType : 'all',
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
                      _react.Fragment,
                      null,
                      /*#__PURE__*/ _react.default.createElement('div', {
                        className: 'js-droparea',
                        'data-thumbnail': '{'.concat(item.name, '@thumbnail}'),
                        'data-type': item.mediaType ? item.mediaType : 'all',
                        'data-thumbnail-type': '{'.concat(item.name, '@type}'),
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
                            'data-type': item.mediaType ? item.mediaType : 'all',
                          },
                          '\u30E1\u30C7\u30A3\u30A2\u3092\u9078\u629E'
                        )
                      )
                    ),
                  /*#__PURE__*/ _react.default.createElement('input', {
                    type: 'hidden',
                    name: item.name,
                    value: preview ? '' : '{'.concat(item.name, '}'),
                    className: 'js-value',
                  }),
                  /*#__PURE__*/ _react.default.createElement('input', {
                    type: 'hidden',
                    name: 'field[]',
                    value: item.name,
                  }),
                  /*#__PURE__*/ _react.default.createElement('input', {
                    type: 'hidden',
                    name: ''.concat(item.name, ':extension'),
                    value: 'media',
                  })
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
                this.renderTh(item, acmscss),
                /*#__PURE__*/ _react.default.createElement(
                  'td',
                  null,
                  preview ? null : '<!-- BEGIN '.concat(item.name, '@path:veil -->'),
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
                  preview ? null : '<!-- END '.concat(item.name, '@path:veil -->'),
                  /*#__PURE__*/ _react.default.createElement('input', {
                    type: 'file',
                    name: item.name,
                  }),
                  /*#__PURE__*/ _react.default.createElement('input', {
                    type: 'hidden',
                    name: 'field[]',
                    value: item.name,
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
                  renderValidator(item, acmscss),
                  renderNoSearch(item, acmscss)
                )
              );
            }
          })
      ),
      jsValidator && '<!-- </form> -->'
    );
  }
}
exports.default = Table;
