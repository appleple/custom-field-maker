'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.UnitGroupSection = UnitGroupSection;
var _react = _interopRequireDefault(require('react'));
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
var _OptionValidator = require('../html/OptionValidator');
var _MakerContext = require('../../store/MakerContext');
function UnitGroupSection() {
  const {
    state: { unitgroup },
    preview: { acmscss, direction, editMode },
  } = (0, _MakerContext.useMakerContext)();
  return /*#__PURE__*/ _react.default.createElement(
    'section',
    null,
    unitgroup.title &&
      /*#__PURE__*/ _react.default.createElement(
        'h2',
        {
          className: (0, _classnames.default)({
            'acms-admin-admin-title2': acmscss,
          }),
        },
        unitgroup.title
      ),
    unitgroup.name &&
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'js-fieldgroup-sortable adminTable acms-admin-table-admin-edit',
        },
        editMode === 'preview'
          ? null
          : unitgroup.items.length > 0 &&
              /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    className: (0, _classnames.default)({
                      'acms-admin-hide-sp': acmscss,
                    }),
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    'div',
                    null,
                    /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-table-left acms-admin-admin-config-table-item-handle': acmscss,
                        }),
                      },
                      '\xA0'
                    ),
                    direction === 'horizontal' &&
                      unitgroup &&
                      unitgroup.items.map((item, index) =>
                        /*#__PURE__*/ _react.default.createElement(
                          'span',
                          {
                            key: index,
                          },
                          /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                            item: item,
                          })
                        )
                      ),
                    direction === 'vertical' && /*#__PURE__*/ _react.default.createElement('span', null),
                    /*#__PURE__*/ _react.default.createElement(
                      'span',
                      {
                        className: (0, _classnames.default)({
                          'acms-admin-table-left acms-admin-admin-config-table-action': acmscss,
                        }),
                      },
                      '\u524A\u9664'
                    )
                  )
                ),
                editMode === 'preview' ? null : '<!-- BEGIN '.concat(unitgroup.name, ':loop -->'),
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    className: 'sortable-item acms-flex',
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    'div',
                    {
                      className: 'item-handle acms-admin-table-nowrap',
                    },
                    acmscss &&
                      /*#__PURE__*/ _react.default.createElement('i', {
                        className: 'acms-admin-icon-sort',
                      })
                  ),
                  unitgroup.items.map((item, index) => {
                    switch (item.type) {
                      case 'text': {
                        return /*#__PURE__*/ _react.default.createElement(
                          'p',
                          {
                            className: 'acms-admin-form-item',
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            'label',
                            {
                              className: 'acms-admin-form-item-heading',
                              htmlFor: ''.concat(item.name).concat(index),
                            },
                            /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                              item: item,
                            })
                          ),
                          /*#__PURE__*/ _react.default.createElement(
                            'span',
                            {
                              className: 'acms-admin-form-item-input',
                            },
                            /*#__PURE__*/ _react.default.createElement(_TextInput.TextInput, {
                              item: item,
                              id: ''.concat(item.name).concat(index),
                            })
                          )
                        );
                      }
                      case 'textarea': {
                        return /*#__PURE__*/ _react.default.createElement(
                          'p',
                          {
                            key: index,
                            className: 'acms-admin-form-item',
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            'label',
                            {
                              className: 'acms-admin-form-item-heading',
                              htmlFor: ''.concat(item.name).concat(index),
                            },
                            /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                              item: item,
                              id: ''.concat(item.name).concat(index),
                            })
                          ),
                          /*#__PURE__*/ _react.default.createElement(
                            'span',
                            {
                              className: 'acms-admin-form-item-input',
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
                            key: index,
                            className: 'acms-admin-form-item',
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            'legend',
                            {
                              className: 'acms-admin-form-item-heading',
                            },
                            /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                              item: item,
                              id: ''.concat(item.name).concat(index),
                            })
                          ),
                          /*#__PURE__*/ _react.default.createElement(
                            'div',
                            {
                              className: 'acms-admin-form-item-input',
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
                          'p',
                          {
                            key: index,
                            className: 'acms-admin-form-item',
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            'label',
                            {
                              className: 'acms-admin-form-item-heading',
                              htmlFor: ''.concat(item.name).concat(index),
                            },
                            /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                              item: item,
                              id: ''.concat(item.name).concat(index),
                            })
                          ),
                          /*#__PURE__*/ _react.default.createElement(
                            'span',
                            {
                              className: 'acms-admin-form-item-input',
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
                            key: index,
                            className: 'acms-admin-form-item',
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            'legend',
                            {
                              className: 'acms-admin-form-item-heading',
                              id: ''.concat(item.name).concat(index),
                            },
                            /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                              item: item,
                            })
                          ),
                          /*#__PURE__*/ _react.default.createElement(
                            'div',
                            {
                              className: 'acms-admin-form-item-input',
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
                          'p',
                          {
                            key: index,
                            className: 'acms-admin-form-item',
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            'label',
                            {
                              className: 'acms-admin-form-item-heading',
                              id: ''.concat(item.name).concat(index),
                            },
                            /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                              item: item,
                            })
                          ),
                          /*#__PURE__*/ _react.default.createElement(
                            'span',
                            {
                              className: 'acms-admin-form-item-input',
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
                          'p',
                          {
                            key: index,
                            className: 'acms-admin-form-item',
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            'label',
                            {
                              className: 'acms-admin-form-item-heading',
                              id: ''.concat(item.name).concat(index),
                            },
                            /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                              item: item,
                            })
                          ),
                          /*#__PURE__*/ _react.default.createElement(
                            'span',
                            {
                              className: 'acms-admin-form-item-input',
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
                          'p',
                          {
                            key: index,
                            className: 'acms-admin-form-item',
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            'label',
                            {
                              className: 'acms-admin-form-item-heading',
                              id: ''.concat(item.name).concat(index),
                            },
                            /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                              item: item,
                            })
                          ),
                          /*#__PURE__*/ _react.default.createElement(
                            'span',
                            {
                              className: 'acms-admin-form-item-input',
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
                          'p',
                          {
                            key: index,
                            className: 'acms-admin-form-item',
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            'label',
                            {
                              className: 'acms-admin-form-item-heading',
                              id: ''.concat(item.name).concat(index),
                            },
                            /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                              item: item,
                            })
                          ),
                          /*#__PURE__*/ _react.default.createElement(
                            'span',
                            {
                              className: 'acms-admin-form-item-input',
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
                          'p',
                          {
                            key: index,
                            className: 'acms-admin-form-item',
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            'label',
                            {
                              className: 'acms-admin-form-item-heading',
                              id: ''.concat(item.name).concat(index),
                            },
                            /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                              item: item,
                            })
                          ),
                          /*#__PURE__*/ _react.default.createElement(
                            'span',
                            {
                              className: 'acms-admin-form-item-input',
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
                  }),
                  /*#__PURE__*/ _react.default.createElement(
                    'div',
                    {
                      className: 'acms-admin-table-nowrap',
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
                '<!-- END '.concat(unitgroup.name, ':loop -->')
              ),
        unitgroup.items.length > 0 &&
          /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'sortable-item item-template acms-flex',
              },
              /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                  className: 'item-handle acms-admin-table-nowrap',
                },
                /*#__PURE__*/ _react.default.createElement('i', {
                  className: 'acms-admin-icon-sort',
                })
              ),
              unitgroup.items.map((item, index) => {
                switch (item.type) {
                  case 'text': {
                    return /*#__PURE__*/ _react.default.createElement(
                      'p',
                      {
                        key: index,
                        className: 'acms-admin-form-item',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'label',
                        {
                          className: 'acms-admin-form-item-heading',
                          id: 'template-'.concat(item.name).concat(index),
                        },
                        /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                          item: item,
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'span',
                        {
                          className: 'acms-admin-form-item-input',
                        },
                        /*#__PURE__*/ _react.default.createElement(_TextInput.TextInput, {
                          item: item,
                          id: 'template-'.concat(item.name).concat(index),
                          isValue: false,
                        })
                      )
                    );
                  }
                  case 'textarea': {
                    return /*#__PURE__*/ _react.default.createElement(
                      'p',
                      {
                        key: index,
                        className: 'acms-admin-form-item',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'label',
                        {
                          className: 'acms-admin-form-item-heading',
                          htmlFor: 'template-'.concat(item.name).concat(index),
                        },
                        /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                          item: item,
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'span',
                        {
                          className: 'acms-admin-form-item-input',
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
                        className: 'acms-admin-form-item',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'legend',
                        {
                          className: 'acms-admin-form-item-heading',
                        },
                        /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                          item: item,
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'div',
                        {
                          className: 'acms-admin-form-item-input',
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
                      'p',
                      {
                        key: index,
                        className: 'acms-admin-form-item',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'label',
                        {
                          className: 'acms-admin-form-item-heading',
                          htmlFor: ''.concat(item.name).concat(index),
                        },
                        /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                          item: item,
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'span',
                        {
                          className: 'acms-admin-form-item-input',
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
                        className: 'acms-admin-form-item',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'legend',
                        {
                          className: 'acms-admin-form-item-heading',
                          id: ''.concat(item.name).concat(index),
                        },
                        /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                          item: item,
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'div',
                        {
                          className: 'acms-admin-form-item-input',
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
                      'p',
                      {
                        key: index,
                        className: 'acms-admin-form-item',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'label',
                        {
                          className: 'acms-admin-form-item-heading',
                          id: ''.concat(item.name).concat(index),
                        },
                        /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                          item: item,
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'span',
                        {
                          className: 'acms-admin-form-item-input',
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
                      'p',
                      {
                        key: index,
                        className: 'acms-admin-form-item',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'label',
                        {
                          className: 'acms-admin-form-item-heading',
                          id: ''.concat(item.name).concat(index),
                        },
                        /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                          item: item,
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'span',
                        {
                          className: 'acms-admin-form-item-input',
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
                      'p',
                      {
                        key: index,
                        className: 'acms-admin-form-item',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'label',
                        {
                          className: 'acms-admin-form-item-heading',
                          id: ''.concat(item.name).concat(index),
                        },
                        /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                          item: item,
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'span',
                        {
                          className: 'acms-admin-form-item-input',
                        },
                        /*#__PURE__*/ _react.default.createElement(_FileInput.FileInput, {
                          item: item,
                          id: ''.concat(item.name).concat(index),
                          isValue: false,
                        })
                      )
                    );
                  }
                  case 'richEditor': {
                    return /*#__PURE__*/ _react.default.createElement(
                      'p',
                      {
                        key: index,
                        className: 'acms-admin-form-item',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'label',
                        {
                          className: 'acms-admin-form-item-heading',
                          id: ''.concat(item.name).concat(index),
                        },
                        /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                          item: item,
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'span',
                        {
                          className: 'acms-admin-form-item-input',
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
                      'div',
                      {
                        key: index,
                        className: 'acms-admin-form-item',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'p',
                        {
                          className: 'acms-admin-form-item-heading',
                          id: ''.concat(item.name).concat(index),
                        },
                        /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                          item: item,
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'div',
                        {
                          className: 'acms-admin-form-item-input',
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
              }),
              unitgroup.items.length > 0 &&
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    className: 'acms-admin-table-nowrap',
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
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'button',
              className: 'item-insert acms-admin-btn-admin',
              value: '\u8FFD\u52A0',
            })
          )
      ),
    unitgroup.name &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        unitgroup.items.map((item) =>
          /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            item.type === 'image' &&
              /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                item.square &&
                  item.squareSize &&
                  /*#__PURE__*/ _react.default.createElement(
                    _react.default.Fragment,
                    null,
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(unitgroup.name, '{id}[]'),
                      value: ''.concat(item.name, '{id}@squarePath'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(unitgroup.name, '{id}[]'),
                      value: ''.concat(item.name, '{id}@squareAlt'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(unitgroup.name, '{id}[]'),
                      value: ''.concat(item.name, '{id}@squareX'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(unitgroup.name, '{id}[]'),
                      value: ''.concat(item.name, '{id}@squareY'),
                    })
                  ),
                item.large &&
                  item.largeSize &&
                  /*#__PURE__*/ _react.default.createElement(
                    _react.default.Fragment,
                    null,
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(unitgroup.name, '{id}[]'),
                      value: ''.concat(item.name, '{id}@largePath'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(unitgroup.name, '{id}[]'),
                      value: ''.concat(item.name, '{id}@largeAlt'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(unitgroup.name, '{id}[]'),
                      value: ''.concat(item.name, '{id}@largeX'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(unitgroup.name, '{id}[]'),
                      value: ''.concat(item.name, '{id}@largeY'),
                    })
                  ),
                item.tiny &&
                  item.tinySize &&
                  /*#__PURE__*/ _react.default.createElement(
                    _react.default.Fragment,
                    null,
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(unitgroup.name, '{id}[]'),
                      value: ''.concat(item.name, '{id}@tinyPath'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(unitgroup.name, '{id}[]'),
                      value: ''.concat(item.name, '@tinyAlt'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(unitgroup.name, '{id}[]'),
                      value: ''.concat(item.name, '@tinyX'),
                    }),
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'hidden',
                      name: '@'.concat(unitgroup.name, '{id}[]'),
                      value: ''.concat(item.name, '@tinyY'),
                    })
                  ),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(unitgroup.name, '{id}[]'),
                  value: ''.concat(item.name, '{id}@path'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(unitgroup.name, '{id}[]'),
                  value: ''.concat(item.name, '{id}@alt'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(unitgroup.name, '{id}[]'),
                  value: ''.concat(item.name, '{id}@x'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(unitgroup.name, '{id}[]'),
                  value: ''.concat(item.name, '{id}@y'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(unitgroup.name, '{id}[]'),
                  value: ''.concat(item.name, '{id}@edit'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(unitgroup.name, '{id}[]'),
                  value: ''.concat(item.name, '{id}@old'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: ''.concat(item.name, '{id}:extension'),
                  value: 'image',
                })
              ),
            item.type === 'file' &&
              /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(unitgroup.name, '{id}[]'),
                  value: ''.concat(item.name, '{id}@path'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(unitgroup.name, '{id}[]'),
                  value: ''.concat(item.name, '{id}@alt'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(unitgroup.name, '{id}[]'),
                  value: ''.concat(item.name, '{id}@edit'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: '@'.concat(unitgroup.name, '{id}[]'),
                  value: ''.concat(item.name, '{id}@old'),
                }),
                /*#__PURE__*/ _react.default.createElement('input', {
                  type: 'hidden',
                  name: ''.concat(item.name, '{id}:extension'),
                  value: 'file',
                })
              ),
            item.type === 'media' &&
              /*#__PURE__*/ _react.default.createElement('input', {
                type: 'hidden',
                name: ''.concat(item.name, '{id}:extension'),
                value: 'media',
              }),
            item.type === 'richEditor' &&
              /*#__PURE__*/ _react.default.createElement('input', {
                type: 'hidden',
                name: ''.concat(item.name, '{id}:extension'),
                value: 'rich-editor',
              }),
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: '@'.concat(unitgroup.name, '{id}[]'),
              value: ''.concat(item.name, '{id}'),
            }),
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'hidden',
              name: 'unit{id}[]',
              value: ''.concat(item.name, '{id}'),
            }),
            item.noSearch &&
              /*#__PURE__*/ _react.default.createElement('input', {
                type: 'hidden',
                name: ''.concat(item.name, '{id}:search'),
                value: '0',
              }),
            /*#__PURE__*/ _react.default.createElement(_OptionValidator.OptionValidator, {
              item: item,
            })
          )
        ),
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: 'unit{id}[]',
          value: '@'.concat(unitgroup.name, '{id}'),
        })
      )
  );
}
