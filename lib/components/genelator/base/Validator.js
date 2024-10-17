'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Validator = Validator;
var _react = _interopRequireWildcard(require('react'));
var _reactTooltip = _interopRequireDefault(require('react-tooltip'));
var _NoSearchBox = require('./NoSearchBox');
var _MakerContext = require('../../../store/MakerContext');
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
function Validator(props) {
  const {
    field: { type, validator, openValidator, converter, noSearch },
    setField,
  } = props;
  const {
    preview: { mode },
  } = (0, _MakerContext.useMakerContext)();
  const [height, setHeight] = (0, _react.useState)(0);
  const contentRef = (0, _react.useRef)(null);
  const updateHeight = (0, _react.useCallback)(() => {
    if (contentRef.current) {
      let newHeight;
      if (openValidator) {
        newHeight = ''.concat(contentRef.current.scrollHeight, 'px');
      } else {
        newHeight = '0px';
      }
      setHeight(newHeight);
    }
  }, [openValidator]);
  (0, _react.useEffect)(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight);
    const resizeObserver = new ResizeObserver((entries) => {
      const currentRef = contentRef.current;
      for (let entry of entries) {
        if (entry.target === currentRef) {
          updateHeight();
        }
      }
    });
    const currentRef = contentRef.current;
    if (currentRef) {
      resizeObserver.observe(currentRef);
    }
    return () => {
      window.removeEventListener('resize', updateHeight);
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, [updateHeight]);
  const isConverter = (0, _react.useMemo)(() => {
    const possibleConverter = [
      'text',
      'tel',
      'number',
      'email',
      'password',
      'textarea',
      'checkbox',
      'selectbox',
      'radioButton',
    ];
    return possibleConverter.includes(type);
  }, [type]);
  const possibleValidatorValue = (option) => {
    const possibleValue = ['minlength', 'maxlength', 'min', 'max', 'regex'];
    return possibleValue.includes(option);
  };
  const updateValidatorOption = (idx, option) => {
    const item = validator[idx];
    setField((prevState) => ({
      ...prevState,
      validator: [
        ...validator.slice(0, idx),
        {
          ...item,
          option,
        },
        ...validator.slice(idx + 1),
      ],
    }));
  };
  const addValidator = (0, _react.useCallback)(() => {
    setField((prevState) => ({
      ...prevState,
      validator: [
        ...prevState.validator,
        {
          option: '',
          value: '',
          message: '',
        },
      ],
    }));
    // 要素追加後に高さを更新
    setTimeout(updateHeight, 0);
  }, [setField, updateHeight]);
  const updateValidatorValue = (idx, value) => {
    const item = validator[idx];
    setField((prevState) => ({
      ...prevState,
      validator: [
        ...validator.slice(0, idx),
        {
          ...item,
          value,
        },
        ...validator.slice(idx + 1),
      ],
    }));
  };
  const updateValidatorMessage = (idx, message) => {
    const item = validator[idx];
    setField((prevState) => ({
      ...prevState,
      validator: [
        ...validator.slice(0, idx),
        {
          ...item,
          message,
        },
        ...validator.slice(idx + 1),
      ],
    }));
  };
  const removeValidator = (idx) => {
    setField((prevState) => ({
      ...prevState,
      validator: [...validator.slice(0, idx), ...validator.slice(idx + 1)],
    }));
  };
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    null,
    /*#__PURE__*/ _react.default.createElement(
      'div',
      null,
      /*#__PURE__*/ _react.default.createElement(
        'button',
        {
          className: 'customFieldValidatorLabel',
          type: 'button',
          value: openValidator,
          onClick: () =>
            setField((prevState) => ({
              ...prevState,
              openValidator: !openValidator,
            })),
        },
        /*#__PURE__*/ _react.default.createElement('span', {
          className: 'customFieldValidatorToggle',
        }),
        '\u30D5\u30A9\u30FC\u30E0\u30AA\u30D7\u30B7\u30E7\u30F3\u3092\u8A2D\u5B9A'
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'customFieldAccordionContent '.concat(openValidator ? '-open' : ''),
        style: {
          maxHeight: height,
        },
        ref: contentRef,
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'customFieldValidatorArea',
        },
        isConverter &&
          /*#__PURE__*/ _react.default.createElement(
            'div',
            null,
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'customFieldBold',
              },
              '\u30B3\u30F3\u30D0\u30FC\u30BF\u30FC',
              /*#__PURE__*/ _react.default.createElement('i', {
                className: 'acms-admin-icon-tooltip',
                'data-tip': true,
                'data-for': 'convert-tip',
              }),
              /*#__PURE__*/ _react.default.createElement(
                _reactTooltip.default,
                {
                  id: 'convert-tip',
                  place: 'top',
                  type: 'dark',
                  effect: 'solid',
                  className: 'acms-admin-tooltip acms-tooltip customFieldTooltip',
                },
                /*#__PURE__*/ _react.default.createElement(
                  'span',
                  null,
                  '\u30C6\u30AD\u30B9\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5165\u529B\u3055\u308C\u305F\u5024\u3092\u5225\u306E\u5024\u306B\u5909\u63DB\u3057\u307E\u3059\u3002\u8A73\u3057\u304F\u306F\u53C2\u7167\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u8868\u793A\u3055\u308C\u308B\u30E2\u30FC\u30C0\u30EB\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u60C5\u5831\u304C\u8A18\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002'
                )
              )
            ),
            /*#__PURE__*/ _react.default.createElement(
              'div',
              null,
              /*#__PURE__*/ _react.default.createElement('input', {
                type: 'text',
                value: converter,
                onChange: (e) => {
                  const value = e.target.value;
                  setField((prevState) => ({
                    ...prevState,
                    converter: value,
                  }));
                },
                className: 'acms-admin-form-width-quarter acms-admin-margin-right-small',
                placeholder: '\u4F8B\uFF09rs',
              }),
              /*#__PURE__*/ _react.default.createElement(
                'button',
                {
                  className: 'acms-admin-btn',
                  onClick: () =>
                    setField((prevState) => ({
                      ...prevState,
                      openConverter: true,
                    })),
                },
                '\u53C2\u7167'
              )
            )
          ),
        (mode === 'customfield' || mode === 'fieldgroup') &&
          /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            /*#__PURE__*/ _react.default.createElement(
              'table',
              {
                className: 'acms-admin-table customFieldOptionTable',
                style: {
                  borderTop: 0,
                },
              },
              /*#__PURE__*/ _react.default.createElement(
                'tbody',
                null,
                /*#__PURE__*/ _react.default.createElement(
                  'tr',
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    'th',
                    null,
                    '\u30D0\u30EA\u30C7\u30FC\u30BF\u30FC',
                    /*#__PURE__*/ _react.default.createElement('i', {
                      className: 'acms-admin-icon-tooltip',
                      'data-tip': true,
                      'data-for': 'validate-tip',
                    }),
                    /*#__PURE__*/ _react.default.createElement(
                      _reactTooltip.default,
                      {
                        id: 'validate-tip',
                        place: 'top',
                        type: 'dark',
                        effect: 'solid',
                        className: 'acms-admin-tooltip acms-tooltip customFieldTooltip',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'span',
                        null,
                        '\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5165\u529B\u3055\u308C\u305F\u5024\u304C\u6761\u4EF6\u306B\u5408\u3063\u3066\u3044\u308B\u304B\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u3059\u3002'
                      )
                    )
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    'th',
                    null,
                    '\u5024',
                    /*#__PURE__*/ _react.default.createElement('i', {
                      className: 'acms-admin-icon-tooltip',
                      'data-tip': true,
                      'data-for': 'validate-value-tip',
                    }),
                    /*#__PURE__*/ _react.default.createElement(
                      _reactTooltip.default,
                      {
                        id: 'validate-value-tip',
                        place: 'top',
                        type: 'dark',
                        effect: 'solid',
                        className: 'acms-admin-tooltip acms-tooltip customFieldTooltip',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'span',
                        null,
                        '\u6700\u5C0F\u6587\u5B57\u6570\u3084\u3001\u6B63\u898F\u8868\u73FE\u30C1\u30A7\u30C3\u30AF\u3092\u30D0\u30EA\u30C7\u30FC\u30BF\u306B\u8A2D\u5B9A\u3057\u305F\u969B\u306B\u8A2D\u5B9A\u3059\u308B\u5024\u3068\u306A\u308A\u307E\u3059\u3002'
                      )
                    )
                  ),
                  /*#__PURE__*/ _react.default.createElement(
                    'th',
                    null,
                    '\u30E1\u30C3\u30BB\u30FC\u30B8',
                    /*#__PURE__*/ _react.default.createElement('i', {
                      className: 'acms-admin-icon-tooltip',
                      'data-tip': true,
                      'data-for': 'validate-message-tip',
                    }),
                    /*#__PURE__*/ _react.default.createElement(
                      _reactTooltip.default,
                      {
                        id: 'validate-message-tip',
                        place: 'top',
                        type: 'dark',
                        effect: 'solid',
                        className: 'acms-admin-tooltip acms-tooltip customFieldTooltip',
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'span',
                        null,
                        '\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5165\u529B\u3055\u308C\u3066\u3044\u308B\u5024\u304C\u6761\u4EF6\u306B\u5408\u308F\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u8868\u793A\u3055\u308C\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u306A\u308A\u307E\u3059\u3002'
                      )
                    )
                  ),
                  /*#__PURE__*/ _react.default.createElement('th', null)
                ),
                validator &&
                  validator.map((item, idx) =>
                    /*#__PURE__*/ _react.default.createElement(
                      'tr',
                      {
                        key: 'validator'.concat(idx),
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        'td',
                        null,
                        /*#__PURE__*/ _react.default.createElement(
                          'select',
                          {
                            className: 'acms-admin-form-width-full',
                            onChange: (e) => {
                              const value = e.target.value;
                              updateValidatorOption(idx, value);
                            },
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            'option',
                            {
                              value: '',
                            },
                            '\u25BC \u9078\u629E'
                          ),
                          /*#__PURE__*/ _react.default.createElement(
                            'optgroup',
                            {
                              label: '\u5165\u529B\u5024\u306E\u5236\u9650',
                            },
                            /*#__PURE__*/ _react.default.createElement(
                              'option',
                              {
                                value: 'required',
                              },
                              '\u5FC5\u9808 ( required )'
                            ),
                            /*#__PURE__*/ _react.default.createElement(
                              'option',
                              {
                                value: 'minlength',
                              },
                              '\u6700\u5C0F\u6587\u5B57\u6570 ( minlength )'
                            ),
                            /*#__PURE__*/ _react.default.createElement(
                              'option',
                              {
                                value: 'maxlength',
                              },
                              '\u6700\u5927\u6587\u5B57\u6570 ( maxlength )'
                            ),
                            /*#__PURE__*/ _react.default.createElement(
                              'option',
                              {
                                value: 'min',
                              },
                              '\u4E0B\u9650\u5024 ( min )'
                            ),
                            /*#__PURE__*/ _react.default.createElement(
                              'option',
                              {
                                value: 'max',
                              },
                              '\u4E0A\u9650\u5024 ( max )'
                            )
                          ),
                          /*#__PURE__*/ _react.default.createElement(
                            'optgroup',
                            {
                              label: '\u5F62\u5F0F\u30C1\u30A7\u30C3\u30AF',
                            },
                            /*#__PURE__*/ _react.default.createElement(
                              'option',
                              {
                                value: 'digits',
                              },
                              '\u6570\u5B57\u30C1\u30A7\u30C3\u30AF ( digits )'
                            ),
                            /*#__PURE__*/ _react.default.createElement(
                              'option',
                              {
                                value: 'email',
                              },
                              '\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u30C1\u30A7\u30C3\u30AF ( email )'
                            ),
                            /*#__PURE__*/ _react.default.createElement(
                              'option',
                              {
                                value: 'hiragana',
                              },
                              '\u3072\u3089\u304C\u306A\u30C1\u30A7\u30C3\u30AF ( hiragana )'
                            ),
                            /*#__PURE__*/ _react.default.createElement(
                              'option',
                              {
                                value: 'katakana',
                              },
                              '\u30AB\u30BF\u30AB\u30CA\u30C1\u30A7\u30C3\u30AF ( katakana )'
                            ),
                            /*#__PURE__*/ _react.default.createElement(
                              'option',
                              {
                                value: 'url',
                              },
                              'URL\u30C1\u30A7\u30C3\u30AF ( url )'
                            ),
                            /*#__PURE__*/ _react.default.createElement(
                              'option',
                              {
                                value: 'dates',
                              },
                              '\u65E5\u4ED8\u30C1\u30A7\u30C3\u30AF ( dates )'
                            ),
                            /*#__PURE__*/ _react.default.createElement(
                              'option',
                              {
                                value: 'times',
                              },
                              '\u6642\u9593\u30C1\u30A7\u30C3\u30AF ( times )'
                            ),
                            /*#__PURE__*/ _react.default.createElement(
                              'option',
                              {
                                value: 'regex',
                              },
                              '\u6B63\u898F\u8868\u73FE\u30DE\u30C3\u30C1 ( regex )'
                            )
                          )
                        )
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'td',
                        null,
                        /*#__PURE__*/ _react.default.createElement('input', {
                          type: 'text',
                          defaultValue: item.value,
                          onInput: (e) => {
                            const value = e.target.value;
                            if (!value) return;
                            updateValidatorValue(idx, value);
                          },
                          className: 'acms-admin-form-width-full',
                          disabled: !possibleValidatorValue(item.option),
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'td',
                        null,
                        /*#__PURE__*/ _react.default.createElement('input', {
                          type: 'text',
                          defaultValue: item.message,
                          onInput: (e) => {
                            const value = e.target.value;
                            if (!value) return;
                            updateValidatorMessage(idx, value);
                          },
                          className: 'acms-admin-form-width-full',
                        })
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        'td',
                        null,
                        /*#__PURE__*/ _react.default.createElement(
                          'button',
                          {
                            onClick: () => {
                              removeValidator(idx);
                            },
                            className: 'acms-admin-btn-admin acms-admin-btn-admin-danger',
                          },
                          '\u524A\u9664'
                        )
                      )
                    )
                  )
              )
            ),
            /*#__PURE__*/ _react.default.createElement(
              'div',
              null,
              /*#__PURE__*/ _react.default.createElement(
                'button',
                {
                  onClick: addValidator,
                  className: 'acms-admin-btn',
                },
                '\u8FFD\u52A0'
              )
            )
          ),
        /text|number|tel|email|password|textarea|radioButton|selectbox/.exec(type) &&
          /*#__PURE__*/ _react.default.createElement(_NoSearchBox.NoSearchBox, {
            noSearch: noSearch,
            setField: setField,
          })
      )
    )
  );
}
