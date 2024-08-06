'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));
var _react = _interopRequireDefault(require('react'));
var _reactTooltip = _interopRequireDefault(require('react-tooltip'));
var _base = _interopRequireDefault(require('./base'));
var _MakerContext = require('../../store/MakerContext');
class FieldGroup extends _base.default {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     type: 'text',
  //     subType: '',
  //     title: '',
  //     name: '',
  //     tooltip: '',
  //     alert: false,
  //     duplicatedField: '',
  //     path: 'path',
  //     converter: '',
  //     normal: 'size',
  //     useDropArea: true,
  //     dropAreaWidth: 200,
  //     dropAreaHeight: 200,
  //     useFocusImage: false,
  //     focusImageWidth: 400,
  //     focusImageHeight: 400,
  //     startHeadingLevel: 2,
  //     endHeadingLevel: 3,
  //     mediaType: 'image',
  //     useExpand: true,
  //     option: [{
  //       value: '',
  //       label: ''
  //     }],
  //     validator: [{
  //       option: '',
  //       value: '',
  //       message: ''
  //     }],
  //     optionFormat: 'pref',
  //     openValidator: false,
  //     openConverter: false,
  //     alt: false,
  //     fileNameMethod: 'random',
  //     groupAlert: false,
  //     openGroup: false,
  //     groupTitle: '',
  //     groupName: ''
  //   };
  // }

  // showGroup() {
  //   const { setGroupTitleName } = this.context
  //   const { groupName, groupTitle } = this.state;
  //   if (!groupName) {
  //     this.setState({
  //       groupAlert: true
  //     });
  //   } else {
  //     this.setState({
  //       groupAlert: false,
  //       duplicatedField: false,
  //       openGroup: true
  //     });
  //     setGroupTitleName(groupTitle, groupName);
  //   }
  // }

  addGroup() {
    const { setGroupTitleName, addGroupItem } = this.context;
    const { type, title, name, groupTitle, groupName } = this.state;
    if (name === groupName) {
      this.setState({
        duplicatedField: true,
      });
      return;
    }
    if (type && title && name) {
      setGroupTitleName(groupTitle, groupName);
      addGroupItem(this.state);
    } else {
      this.setState({
        alert: true,
      });
    }
  }
  addNewGroup() {
    const { clearGroupItem } = this.context;
    clearGroupItem();
    this.clearValue();
    this.setState({
      openGroup: false,
      groupTitle: '',
      groupName: '',
    });
  }
  render() {
    const { clearGroupItem } = this.context;
    const { openGroup, groupTitle, groupName, type } = this.state;
    return /*#__PURE__*/ _react.default.createElement(
      'div',
      null,
      /*#__PURE__*/ _react.default.createElement(
        'h2',
        {
          className: 'acms-admin-admin-title2',
        },
        '\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7'
      ),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'customFieldFunction',
        },
        this.renderGroupAlert(),
        this.renderDuplicateAlert(),
        this.renderAlert(),
        openGroup
          ? /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                style: {
                  paddingBottom: '15px',
                },
              },
              /*#__PURE__*/ _react.default.createElement(
                'button',
                {
                  className: 'acms-admin-btn acms-admin-btn-primary customFieldGroupBtn',
                  onClick: this.addNewGroup.bind(this),
                },
                '\u65B0\u898F\u30B0\u30EB\u30FC\u30D7\u4F5C\u6210'
              )
            )
          : /*#__PURE__*/ _react.default.createElement(
              'table',
              {
                className: 'adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableGroup',
              },
              /*#__PURE__*/ _react.default.createElement(
                'tbody',
                null,
                /*#__PURE__*/ _react.default.createElement(
                  'tr',
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    'th',
                    {
                      className: 'acms-admin-table-left',
                    },
                    '\u30B0\u30EB\u30FC\u30D7\u306E\u30BF\u30A4\u30C8\u30EB',
                    /*#__PURE__*/ _react.default.createElement('i', {
                      className: 'acms-admin-icon-tooltip',
                      'data-tip': true,
                      'data-for': 'group-title-tip',
                    }),
                    /*#__PURE__*/ _react.default.createElement(
                      _reactTooltip.default,
                      {
                        id: 'group-title-tip',
                        place: 'top',
                        type: 'dark',
                        effect: 'solid',
                        className: 'acms-admin-tooltip acms-tooltip customFieldTooltip',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'span',
                        null,
                        '\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\u306E\u30C6\u30FC\u30D6\u30EB\u7528\u306E\u30BF\u30A4\u30C8\u30EB\u3068\u306A\u308A\u307E\u3059\u3002'
                      )
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'span',
                      {
                        className: 'acms-admin-label acms-admin-label-danger',
                      },
                      '\u5FC5\u9808'
                    )
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    'th',
                    {
                      className: 'acms-admin-table-left',
                      colSpan: '2',
                    },
                    '\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\uFF08\u5909\u6570\uFF09',
                    /*#__PURE__*/ _react.default.createElement('i', {
                      className: 'acms-admin-icon-tooltip',
                      'data-tip': true,
                      'data-for': 'group-field-tip',
                    }),
                    /*#__PURE__*/ _react.default.createElement(
                      _reactTooltip.default,
                      {
                        id: 'group-field-tip',
                        place: 'top',
                        type: 'dark',
                        effect: 'solid',
                        className: 'acms-admin-tooltip acms-tooltip customFieldTooltip',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'span',
                        null,
                        '\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3067\u3059\u3002\u5024\u3092\u5FC5\u305A\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002'
                      )
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'span',
                      {
                        className: 'acms-admin-label acms-admin-label-danger',
                      },
                      '\u5FC5\u9808'
                    )
                  )
                ),
                /*#__PURE__*/ _react.default.createElement(
                  'tr',
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    'td',
                    null,
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'text',
                      id: 'groupTitle',
                      defaultValue: groupTitle,
                      onInput: (e) => {
                        this.updateState('groupTitle', e.target.value);
                      },
                      className: 'acms-admin-form-width-full',
                      placeholder: '\u4F8B\uFF09\u30B9\u30BF\u30C3\u30D5\u30EA\u30B9\u30C8',
                    })
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    'td',
                    null,
                    /*#__PURE__*/ _react.default.createElement('input', {
                      type: 'text',
                      id: 'groupName',
                      defaultValue: groupName,
                      onInput: (e) => {
                        this.updateState('groupName', e.target.value);
                      },
                      className: 'acms-admin-form-width-full',
                      placeholder: '\u4F8B\uFF09group_staff',
                    })
                  )
                ),
                /*#__PURE__*/ _react.default.createElement(
                  'tr',
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    'td',
                    {
                      colSpan: '2',
                    },
                    openGroup
                      ? /*#__PURE__*/ _react.default.createElement(
                          'button',
                          {
                            className:
                              'acms-admin-btn acms-admin-btn-primary acms-admin-btn-disabled customFieldGroupBtn',
                            id: 'makeGroup',
                            disabled: true,
                          },
                          '\u30B0\u30EB\u30FC\u30D7\u751F\u6210'
                        )
                      : /*#__PURE__*/ _react.default.createElement(
                          'button',
                          {
                            className: 'acms-admin-btn acms-admin-btn-primary customFieldGroupBtn',
                            id: 'makeGroup',
                            onClick: this.showGroup.bind(this),
                          },
                          '\u30B0\u30EB\u30FC\u30D7\u751F\u6210'
                        )
                  )
                )
              )
            ),
        openGroup &&
          /*#__PURE__*/ _react.default.createElement(
            'div',
            null,
            /*#__PURE__*/ _react.default.createElement('div', {
              className: 'customFieldLine',
            }),
            /*#__PURE__*/ _react.default.createElement(
              'table',
              {
                className: 'adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableGroup',
              },
              /*#__PURE__*/ _react.default.createElement(
                'tbody',
                null,
                /*#__PURE__*/ _react.default.createElement(
                  'tr',
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    'th',
                    {
                      className: 'acms-admin-table-left',
                    },
                    '\u30B0\u30EB\u30FC\u30D7\u306E\u30BF\u30A4\u30C8\u30EB',
                    /*#__PURE__*/ _react.default.createElement('i', {
                      className: 'acms-admin-icon-tooltip',
                      'data-tip': true,
                      'data-for': 'group-title-tip',
                    }),
                    /*#__PURE__*/ _react.default.createElement(
                      _reactTooltip.default,
                      {
                        id: 'group-title-tip',
                        place: 'top',
                        type: 'dark',
                        effect: 'solid',
                        className: 'acms-admin-tooltip acms-tooltip customFieldTooltip',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'span',
                        null,
                        '\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\u306E\u30C6\u30FC\u30D6\u30EB\u7528\u306E\u30BF\u30A4\u30C8\u30EB\u3068\u306A\u308A\u307E\u3059\u3002'
                      )
                    )
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    'th',
                    {
                      className: 'acms-admin-table-left',
                      colSpan: '2',
                    },
                    '\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\uFF08\u5909\u6570\uFF09',
                    /*#__PURE__*/ _react.default.createElement('i', {
                      className: 'acms-admin-icon-tooltip',
                      'data-tip': true,
                      'data-for': 'group-field-tip',
                    }),
                    /*#__PURE__*/ _react.default.createElement(
                      _reactTooltip.default,
                      {
                        id: 'group-field-tip',
                        place: 'top',
                        type: 'dark',
                        effect: 'solid',
                        className: 'acms-admin-tooltip acms-tooltip customFieldTooltip',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'span',
                        null,
                        '\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\u306E\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3067\u3059\u3002\u5024\u3092\u5FC5\u305A\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002'
                      )
                    )
                  )
                ),
                /*#__PURE__*/ _react.default.createElement(
                  'tr',
                  null,
                  /*#__PURE__*/ _react.default.createElement('td', null, groupTitle),
                  /*#__PURE__*/ _react.default.createElement('td', null, groupName)
                )
              )
            ),
            this.renderModal(),
            this.renderBasic(),
            /*#__PURE__*/ _react.default.createElement('div', {
              className: 'customFieldLine',
            }),
            type === 'select' &&
              /*#__PURE__*/ _react.default.createElement('div', null, this.renderSnippet(), this.renderOption()),
            type === 'radio' &&
              /*#__PURE__*/ _react.default.createElement('div', null, this.renderSnippet(), this.renderOption()),
            type === 'image' &&
              /*#__PURE__*/ _react.default.createElement('div', null, this.renderImage(), this.renderImageResize()),
            type === 'file' && /*#__PURE__*/ _react.default.createElement('div', null, this.renderFile()),
            type === 'media' && /*#__PURE__*/ _react.default.createElement('div', null, this.renderMediaOption()),
            type === 'rich-editor' &&
              /*#__PURE__*/ _react.default.createElement('div', null, this.renderRichEditorOption()),
            this.renderValidator(),
            /*#__PURE__*/ _react.default.createElement(
              'p',
              null,
              /*#__PURE__*/ _react.default.createElement(
                'button',
                {
                  onClick: clearGroupItem,
                  className: 'acms-admin-btn-admin',
                  style: {
                    marginRight: '5px',
                  },
                },
                '\u30AF\u30EA\u30A2'
              ),
              /*#__PURE__*/ _react.default.createElement(
                'button',
                {
                  onClick: this.addGroup.bind(this),
                  className: 'acms-admin-btn-admin acms-admin-btn-admin-primary customFieldMakeBtn',
                  style: {
                    marginRight: '5px',
                  },
                },
                '\u751F\u6210'
              ),
              /*#__PURE__*/ _react.default.createElement(
                'button',
                {
                  onClick: this.backState.bind(this),
                  className: 'acms-admin-btn-admin',
                },
                '\u5143\u306B\u623B\u3059'
              )
            )
          )
      )
    );
  }
}
exports.default = FieldGroup;
(0, _defineProperty2.default)(FieldGroup, 'contextType', _MakerContext.MakerContext);
