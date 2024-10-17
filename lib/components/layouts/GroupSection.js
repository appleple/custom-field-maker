'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.GroupSection = GroupSection;
var _react = _interopRequireWildcard(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _Heading = require('../html/Heading');
var _TextInput = require('../html/TextInput');
var _Textarea = require('../html/Textarea');
var _Checkbox = require('../html/Checkbox');
var _Selectbox = require('../html/Selectbox');
var _RadioButton = require('../html/RadioButton');
var _Media = require('../html/Media');
var _ImageInput = require('../html/ImageInput');
var _FileInput = require('../html/FileInput');
var _RichEditor = require('../html/RichEditor');
var _Table = require('../html/Table');
var _MakerContext = require('../../store/MakerContext');
var _OptionNoSearch = require('../html/OptionNoSearch');
var _OptionValidator = require('../html/OptionValidator');
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
function GroupSection() {
  const {
    state: { fieldgroup },
    preview: { acmscss, editMode },
  } = (0, _MakerContext.useMakerContext)();
  const renderTemplateContent = () =>
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: (0, _classnames.default)({
          'sortable-item': true,
          'acms-admin-flex': acmscss,
          'acms-admin-flex-col-max-md': acmscss,
          'acms-admin-flex-row-min-md': acmscss,
          'acms-admin-items-start-max-md': acmscss,
          'acms-admin-items-center-min-md': acmscss,
        }),
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: (0, _classnames.default)({
            'item-handle': true,
            'acms-admin-padding-small': acmscss,
          }),
        },
        /*#__PURE__*/ _react.default.createElement('i', {
          className: 'acms-admin-icon-sort',
        })
      ),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: (0, _classnames.default)({
            'acms-admin-flex-1': acmscss,
            'acms-admin-padding-small': acmscss,
          }),
        },
        fieldgroup.items.map((item, index) =>
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              key: index,
              className: (0, _classnames.default)({
                'acms-admin-flex': acmscss,
                'acms-admin-flex-col-max-md': acmscss,
                'acms-admin-flex-row-min-md': acmscss,
                'acms-admin-padding-small': acmscss,
              }),
            },
            (() => {
              switch (item.type) {
                case 'text':
                case 'tel':
                case 'number':
                case 'email':
                case 'password': {
                  return /*#__PURE__*/ _react.default.createElement(
                    _react.default.Fragment,
                    null,
                    /*#__PURE__*/ _react.default.createElement(
                      'label',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-grid-edit-table-heading': acmscss,
                        }),
                        htmlFor: ''.concat(item.name),
                      },
                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                        item: item,
                      })
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-flex-1': acmscss,
                        }),
                      },
                      /*#__PURE__*/ _react.default.createElement(_TextInput.TextInput, {
                        item: item,
                        id: ''.concat(item.name),
                        isValue: false,
                      })
                    )
                  );
                }
                case 'textarea':
                case 'liteEditor': {
                  return /*#__PURE__*/ _react.default.createElement(
                    _react.default.Fragment,
                    null,
                    /*#__PURE__*/ _react.default.createElement(
                      'label',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-grid-edit-table-heading': acmscss,
                        }),
                        htmlFor: ''.concat(item.name).concat(index),
                      },
                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                        item: item,
                      })
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-flex-1': acmscss,
                        }),
                      },
                      /*#__PURE__*/ _react.default.createElement(_Textarea.Textarea, {
                        item: item,
                        id: 'template-'.concat(item.name).concat(index),
                        isValue: false,
                      })
                    )
                  );
                }
                case 'checkbox': {
                  return /*#__PURE__*/ _react.default.createElement(
                    'fieldset',
                    {
                      key: index,
                      className: (0, _classnames.default)({
                        'acms-admin-contents': acmscss,
                      }),
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      'legend',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-grid-edit-table-heading': acmscss,
                        }),
                      },
                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                        item: item,
                      })
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-flex-1': acmscss,
                        }),
                      },
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
                    _react.default.Fragment,
                    null,
                    /*#__PURE__*/ _react.default.createElement(
                      'label',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-grid-edit-table-heading': acmscss,
                        }),
                        htmlFor: ''.concat(item.name).concat(index),
                      },
                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                        item: item,
                      })
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-flex-1': acmscss,
                        }),
                      },
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
                    'fieldset',
                    {
                      key: index,
                      className: (0, _classnames.default)({
                        'acms-admin-contents': acmscss,
                      }),
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      'legend',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-grid-edit-table-heading': acmscss,
                        }),
                        id: ''.concat(item.name).concat(index),
                      },
                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                        item: item,
                      })
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-flex-1': acmscss,
                        }),
                      },
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
                    _react.default.Fragment,
                    null,
                    /*#__PURE__*/ _react.default.createElement(
                      'label',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-grid-edit-table-heading': acmscss,
                        }),
                        htmlFor: ''.concat(item.name).concat(index),
                      },
                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                        item: item,
                      })
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-flex-1': acmscss,
                        }),
                      },
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
                    _react.default.Fragment,
                    null,
                    /*#__PURE__*/ _react.default.createElement(
                      'label',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-grid-edit-table-heading': acmscss,
                        }),
                        htmlFor: ''.concat(item.name).concat(index),
                      },
                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                        item: item,
                      })
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-flex-1': acmscss,
                        }),
                      },
                      /*#__PURE__*/ _react.default.createElement(_ImageInput.ImageInput, {
                        item: item,
                        id: ''.concat(item.name).concat(index),
                        isAttribute: false,
                      })
                    )
                  );
                }
                case 'file': {
                  return /*#__PURE__*/ _react.default.createElement(
                    _react.default.Fragment,
                    null,
                    /*#__PURE__*/ _react.default.createElement(
                      'label',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-grid-edit-table-heading': acmscss,
                        }),
                        htmlFor: ''.concat(item.name),
                      },
                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                        item: item,
                      })
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-flex-1': acmscss,
                        }),
                      },
                      /*#__PURE__*/ _react.default.createElement(_FileInput.FileInput, {
                        item: item,
                        id: ''.concat(item.name),
                        isValue: false,
                      })
                    )
                  );
                }
                case 'richEditor': {
                  return /*#__PURE__*/ _react.default.createElement(
                    _react.default.Fragment,
                    null,
                    /*#__PURE__*/ _react.default.createElement(
                      'label',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-grid-edit-table-heading': acmscss,
                        }),
                        htmlFor: ''.concat(item.name).concat(index),
                      },
                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                        item: item,
                      })
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-flex-1': acmscss,
                        }),
                      },
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
                    _react.default.Fragment,
                    null,
                    /*#__PURE__*/ _react.default.createElement(
                      'label',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-grid-edit-table-heading': acmscss,
                        }),
                        htmlFor: ''.concat(item.name).concat(index),
                      },
                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                        item: item,
                      })
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-flex-1': acmscss,
                        }),
                      },
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
            })()
          )
        )
      ),
      fieldgroup.items.length > 0 &&
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: (0, _classnames.default)({
              'acms-admin-padding-small': acmscss,
            }),
          },
          /*#__PURE__*/ _react.default.createElement(
            'button',
            {
              type: 'button',
              className: 'item-delete acms-admin-btn-admin acms-admin-btn-admin-danger',
              value: '\u524A\u9664',
            },
            '\u524A\u9664'
          )
        )
    );
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    fieldgroup.name &&
      fieldgroup.title &&
      /*#__PURE__*/ _react.default.createElement(
        'section',
        null,
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
            'div',
            {
              className: (0, _classnames.default)({
                'js-fieldgroup-sortable': true,
                'acms-admin-grid-edit-table': acmscss,
              }),
            },
            editMode === 'preview'
              ? null
              : fieldgroup.items.length > 0 &&
                  /*#__PURE__*/ _react.default.createElement(
                    _react.default.Fragment,
                    null,
                    editMode === 'preview' ? null : '<!-- BEGIN '.concat(fieldgroup.name, ':loop -->'),
                    /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: (0, _classnames.default)({
                          'sortable-item': true,
                          'acms-admin-flex': acmscss,
                          'acms-admin-flex-col-max-md': acmscss,
                          'acms-admin-flex-row-min-md': acmscss,
                          'acms-admin-items-start-max-md': acmscss,
                          'acms-admin-items-center-min-md': acmscss,
                        }),
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'div',
                        {
                          className: (0, _classnames.default)({
                            'item-handle': true,
                            'acms-admin-padding-small': acmscss,
                          }),
                        },
                        /*#__PURE__*/ _react.default.createElement('i', {
                          className: 'acms-admin-icon-sort',
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'div',
                        {
                          className: (0, _classnames.default)({
                            'acms-admin-flex-1': acmscss,
                            'acms-admin-padding-small': acmscss,
                          }),
                        },
                        fieldgroup.items.map((item, index) =>
                          /*#__PURE__*/ _react.default.createElement(
                            'div',
                            {
                              key: index,
                              className: (0, _classnames.default)({
                                'acms-admin-flex': acmscss,
                                'acms-admin-flex-col-max-md': acmscss,
                                'acms-admin-flex-row-min-md': acmscss,
                                'acms-admin-padding-small': acmscss,
                              }),
                            },
                            (() => {
                              switch (item.type) {
                                case 'text':
                                case 'tel':
                                case 'number':
                                case 'email':
                                case 'password': {
                                  return /*#__PURE__*/ _react.default.createElement(
                                    _react.default.Fragment,
                                    null,
                                    /*#__PURE__*/ _react.default.createElement(
                                      'label',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-grid-edit-table-heading': acmscss,
                                        }),
                                        htmlFor: ''.concat(item.name),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                                        item: item,
                                      })
                                    ),
                                    /*#__PURE__*/ _react.default.createElement(
                                      'div',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-flex-1': acmscss,
                                        }),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_TextInput.TextInput, {
                                        item: item,
                                        id: ''.concat(item.name),
                                      })
                                    )
                                  );
                                }
                                case 'textarea':
                                case 'liteEditor': {
                                  return /*#__PURE__*/ _react.default.createElement(
                                    _react.default.Fragment,
                                    null,
                                    /*#__PURE__*/ _react.default.createElement(
                                      'label',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-grid-edit-table-heading': acmscss,
                                        }),
                                        htmlFor: ''.concat(item.name).concat(index),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                                        item: item,
                                        id: ''.concat(item.name).concat(index),
                                      })
                                    ),
                                    /*#__PURE__*/ _react.default.createElement(
                                      'div',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-flex-1': acmscss,
                                        }),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_Textarea.Textarea, {
                                        item: item,
                                        id: ''.concat(item.name).concat(index),
                                      })
                                    )
                                  );
                                }
                                case 'checkbox': {
                                  return /*#__PURE__*/ _react.default.createElement(
                                    'fieldset',
                                    {
                                      className: (0, _classnames.default)({
                                        'acms-admin-contents': acmscss,
                                      }),
                                    },
                                    /*#__PURE__*/ _react.default.createElement(
                                      'legend',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-grid-edit-table-heading': acmscss,
                                        }),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                                        item: item,
                                        id: ''.concat(item.name).concat(index),
                                      })
                                    ),
                                    /*#__PURE__*/ _react.default.createElement(
                                      'div',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-flex-1': acmscss,
                                        }),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_Checkbox.Checkbox, {
                                        item: item,
                                        id: ''.concat(item.name).concat(index),
                                      })
                                    )
                                  );
                                }
                                case 'selectbox': {
                                  return /*#__PURE__*/ _react.default.createElement(
                                    _react.default.Fragment,
                                    null,
                                    /*#__PURE__*/ _react.default.createElement(
                                      'label',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-grid-edit-table-heading': acmscss,
                                        }),
                                        htmlFor: ''.concat(item.name).concat(index),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                                        item: item,
                                        id: ''.concat(item.name).concat(index),
                                      })
                                    ),
                                    /*#__PURE__*/ _react.default.createElement(
                                      'div',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-flex-1': acmscss,
                                        }),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_Selectbox.Selectbox, {
                                        item: item,
                                        id: ''.concat(item.name).concat(index),
                                      })
                                    )
                                  );
                                }
                                case 'radioButton': {
                                  return /*#__PURE__*/ _react.default.createElement(
                                    'fieldset',
                                    {
                                      className: (0, _classnames.default)({
                                        'acms-admin-contents': acmscss,
                                      }),
                                    },
                                    /*#__PURE__*/ _react.default.createElement(
                                      'legend',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-grid-edit-table-heading': acmscss,
                                        }),
                                        id: ''.concat(item.name).concat(index),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                                        item: item,
                                      })
                                    ),
                                    /*#__PURE__*/ _react.default.createElement(
                                      'div',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-flex-1': acmscss,
                                        }),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_RadioButton.RadioButton, {
                                        item: item,
                                        id: ''.concat(item.name).concat(index),
                                      })
                                    )
                                  );
                                }
                                case 'media': {
                                  return /*#__PURE__*/ _react.default.createElement(
                                    _react.default.Fragment,
                                    null,
                                    /*#__PURE__*/ _react.default.createElement(
                                      'label',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-grid-edit-table-heading': acmscss,
                                        }),
                                        htmlFor: ''.concat(item.name).concat(index),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                                        item: item,
                                      })
                                    ),
                                    /*#__PURE__*/ _react.default.createElement(
                                      'div',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-flex-1': acmscss,
                                        }),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_Media.Media, {
                                        item: item,
                                        id: ''.concat(item.name).concat(index),
                                      })
                                    )
                                  );
                                }
                                case 'image': {
                                  return /*#__PURE__*/ _react.default.createElement(
                                    _react.default.Fragment,
                                    null,
                                    /*#__PURE__*/ _react.default.createElement(
                                      'label',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-grid-edit-table-heading': acmscss,
                                        }),
                                        htmlFor: ''.concat(item.name).concat(index),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                                        item: item,
                                      })
                                    ),
                                    /*#__PURE__*/ _react.default.createElement(
                                      'div',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-flex-1': acmscss,
                                        }),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_ImageInput.ImageInput, {
                                        item: item,
                                        id: ''.concat(item.name).concat(index),
                                      })
                                    )
                                  );
                                }
                                case 'file': {
                                  return /*#__PURE__*/ _react.default.createElement(
                                    _react.default.Fragment,
                                    null,
                                    /*#__PURE__*/ _react.default.createElement(
                                      'label',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-grid-edit-table-heading': acmscss,
                                        }),
                                        htmlFor: ''.concat(item.name).concat(index),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                                        item: item,
                                      })
                                    ),
                                    /*#__PURE__*/ _react.default.createElement(
                                      'div',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-flex-1': acmscss,
                                        }),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_FileInput.FileInput, {
                                        item: item,
                                        id: ''.concat(item.name).concat(index),
                                      })
                                    )
                                  );
                                }
                                case 'richEditor': {
                                  return /*#__PURE__*/ _react.default.createElement(
                                    _react.default.Fragment,
                                    null,
                                    /*#__PURE__*/ _react.default.createElement(
                                      'label',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-grid-edit-table-heading': acmscss,
                                        }),
                                        htmlFor: ''.concat(item.name).concat(index),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                                        item: item,
                                      })
                                    ),
                                    /*#__PURE__*/ _react.default.createElement(
                                      'div',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-flex-1': acmscss,
                                        }),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_RichEditor.RichEditor, {
                                        item: item,
                                        id: ''.concat(item.name).concat(index),
                                      })
                                    )
                                  );
                                }
                                case 'table': {
                                  return /*#__PURE__*/ _react.default.createElement(
                                    _react.default.Fragment,
                                    null,
                                    /*#__PURE__*/ _react.default.createElement(
                                      'label',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-grid-edit-table-heading': acmscss,
                                        }),
                                        htmlFor: ''.concat(item.name).concat(index),
                                      },
                                      /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                                        item: item,
                                      })
                                    ),
                                    /*#__PURE__*/ _react.default.createElement(
                                      'div',
                                      {
                                        className: (0, _classnames.default)({
                                          'acms-admin-flex-1': acmscss,
                                        }),
                                      },
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
                            })()
                          )
                        )
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'div',
                        {
                          className: (0, _classnames.default)({
                            'acms-admin-padding-small': acmscss,
                          }),
                        },
                        /*#__PURE__*/ _react.default.createElement(
                          'button',
                          {
                            type: 'button',
                            className: 'item-delete acms-admin-btn-admin acms-admin-btn-admin-danger',
                            value: '\u524A\u9664',
                          },
                          '\u524A\u9664'
                        )
                      )
                    ),
                    '<!-- END '.concat(fieldgroup.name, ':loop -->')
                  ),
            fieldgroup.items.length > 0 &&
              /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                editMode === 'preview'
                  ? /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: 'item-template',
                      },
                      renderTemplateContent()
                    )
                  : /*#__PURE__*/ _react.default.createElement(
                      'template',
                      {
                        className: 'item-template',
                      },
                      renderTemplateContent()
                    ),
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  null,
                  /*#__PURE__*/ _react.default.createElement('input', {
                    type: 'button',
                    className: 'item-insert acms-admin-btn-admin',
                    value: '\u8FFD\u52A0',
                  })
                )
              )
          ),
        fieldgroup.name &&
          /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            fieldgroup.items.map((item, index) =>
              /*#__PURE__*/ _react.default.createElement(
                _react.Fragment,
                {
                  key: index,
                },
                item.type === 'image' &&
                  /*#__PURE__*/ _react.default.createElement(
                    _react.Fragment,
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
                item.type === 'richEditor' &&
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
                /*#__PURE__*/ _react.default.createElement(_OptionValidator.OptionValidator, {
                  item: item,
                }),
                /*#__PURE__*/ _react.default.createElement(_OptionNoSearch.OptionNoSearch, {
                  name: item.name,
                  noSearch: item.noSearch,
                })
              )
            ),
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: 'field[]',
              value: '@'.concat(fieldgroup.name),
            })
          )
      )
  );
}
