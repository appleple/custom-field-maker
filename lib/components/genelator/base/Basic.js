'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Basic = Basic;
var _react = _interopRequireWildcard(require('react'));
var _reactTooltip = _interopRequireDefault(require('react-tooltip'));
var _inputTypes = _interopRequireDefault(require('../../../../json/input-types.json'));
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
function Basic(props) {
  const { field, setField } = props;
  const [selectedSubTypes, setSelectedSubTypes] = (0, _react.useState)([]);
  const [isPlaceholder, setIsPlaceholder] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    var _inputTypesJson$field;
    const subTypes = Array.isArray(
      (_inputTypesJson$field = _inputTypes.default[field.type]) === null || _inputTypesJson$field === void 0
        ? void 0
        : _inputTypesJson$field.subTypes
    )
      ? _inputTypes.default[field.type].subTypes
      : [];
    setSelectedSubTypes(subTypes);
  }, [field.type]);
  function TypeSelector() {
    const onChange = (e) => {
      const type = e.target.value;
      if (!type) return;
      if ((type === 'text') | (type === 'textarea')) {
        setIsPlaceholder(true);
      } else {
        setIsPlaceholder(false);
      }
      setField((prevState) => ({
        ...prevState,
        type,
        subType: '',
      }));
    };
    return /*#__PURE__*/ _react.default.createElement(
      'select',
      {
        id: 'type',
        value: field.type || '',
        className: 'acms-admin-form-width-full',
        onChange: onChange,
      },
      Object.keys(_inputTypes.default).map((input, index) =>
        /*#__PURE__*/ _react.default.createElement(
          'option',
          {
            key: index,
            value: input,
          },
          _inputTypes.default[input].label
        )
      )
    );
  }
  function SubTypeSelector() {
    const onChange = (e) => {
      const subType = e.target.value;
      if (!subType) return;
      setField((prevState) => ({
        ...prevState,
        subType,
      }));
    };
    return /*#__PURE__*/ _react.default.createElement(
      _react.default.Fragment,
      null,
      selectedSubTypes.length > 0 &&
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            style: {
              marginTop: '5px',
            },
          },
          /*#__PURE__*/ _react.default.createElement(
            'select',
            {
              id: 'subType',
              value: field.subType || '',
              className: 'acms-admin-form-width-full',
              onChange: onChange,
            },
            selectedSubTypes.map((subType) =>
              /*#__PURE__*/ _react.default.createElement(
                'option',
                {
                  key: subType.value,
                  value: subType.value,
                },
                subType.label
              )
            )
          )
        )
    );
  }
  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    setField((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };
  return /*#__PURE__*/ _react.default.createElement(
    'table',
    {
      className: 'adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableFirst',
    },
    /*#__PURE__*/ _react.default.createElement(
      'thead',
      null,
      /*#__PURE__*/ _react.default.createElement(
        'tr',
        null,
        /*#__PURE__*/ _react.default.createElement(
          'th',
          {
            className: 'acms-admin-table-left',
          },
          '\u5165\u529B\u6B04\u306E\u7A2E\u985E',
          /*#__PURE__*/ _react.default.createElement('i', {
            className: 'acms-admin-icon-tooltip',
            'data-tip': 'React-tooltip',
            'data-for': 'type-tip',
          }),
          /*#__PURE__*/ _react.default.createElement(
            _reactTooltip.default,
            {
              id: 'type-tip',
              place: 'top',
              type: 'dark',
              effect: 'solid',
              className: 'acms-admin-tooltip acms-tooltip customFieldTooltip',
            },
            /*#__PURE__*/ _react.default.createElement(
              'span',
              null,
              '\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30BF\u30A4\u30D7\u3068\u306A\u308A\u307E\u3059\u3002',
              /*#__PURE__*/ _react.default.createElement('br', null),
              '\u9078\u629E\u3057\u306A\u3044\u3068\u751F\u6210\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u3082\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u307E\u305B\u3093\u3002'
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
          },
          '\u30BF\u30A4\u30C8\u30EB',
          /*#__PURE__*/ _react.default.createElement('i', {
            className: 'acms-admin-icon-tooltip',
            'data-tip': 'React-tooltip',
            'data-for': 'title-tip',
          }),
          /*#__PURE__*/ _react.default.createElement(
            _reactTooltip.default,
            {
              id: 'title-tip',
              place: 'top',
              type: 'dark',
              effect: 'solid',
              className: 'acms-admin-tooltip acms-tooltip customFieldTooltip',
            },
            /*#__PURE__*/ _react.default.createElement(
              'span',
              null,
              '\u898B\u51FA\u3057\u306B\u306A\u308A\u307E\u3059\u3002'
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
          },
          '\u30D5\u30A3\u30FC\u30EB\u30C9',
          /*#__PURE__*/ _react.default.createElement('i', {
            className: 'acms-admin-icon-tooltip',
            'data-tip': 'React-tooltip',
            'data-for': 'field-tip',
          }),
          /*#__PURE__*/ _react.default.createElement(
            _reactTooltip.default,
            {
              id: 'field-tip',
              place: 'top',
              type: 'dark',
              effect: 'solid',
              className: 'acms-admin-tooltip acms-tooltip customFieldTooltip',
            },
            /*#__PURE__*/ _react.default.createElement(
              'span',
              null,
              '\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3067\u3059\u3002name\u5C5E\u6027\u3068\u3057\u3066\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002'
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
          },
          '\u30C4\u30FC\u30EB\u30C1\u30C3\u30D7',
          /*#__PURE__*/ _react.default.createElement('i', {
            className: 'acms-admin-icon-tooltip',
            'data-tip': 'React-tooltip',
            'data-for': 'tooltip-tip',
          }),
          /*#__PURE__*/ _react.default.createElement(
            _reactTooltip.default,
            {
              id: 'tooltip-tip',
              place: 'top',
              type: 'dark',
              effect: 'solid',
              className: 'acms-admin-tooltip acms-tooltip customFieldTooltip',
            },
            /*#__PURE__*/ _react.default.createElement(
              'span',
              null,
              '\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u8AAC\u660E\u7528\u306E\u30C4\u30FC\u30EB\u30C1\u30C3\u30D7\u3092\u4ED8\u4E0E\u3057\u307E\u3059\u3002'
            )
          )
        ),
        isPlaceholder &&
          /*#__PURE__*/ _react.default.createElement(
            'th',
            {
              className: 'acms-admin-table-left',
            },
            '\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C0\u30FC',
            /*#__PURE__*/ _react.default.createElement('i', {
              className: 'acms-admin-icon-tooltip',
              'data-tip': 'React-tooltip',
              'data-for': 'placeholder-tip',
            }),
            /*#__PURE__*/ _react.default.createElement(
              _reactTooltip.default,
              {
                id: 'placeholder-tip',
                place: 'top',
                type: 'dark',
                effect: 'solid',
                className: 'acms-admin-tooltip acms-tooltip customFieldTooltip',
              },
              /*#__PURE__*/ _react.default.createElement(
                'span',
                null,
                'placeholder\u5C5E\u6027\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002'
              )
            )
          )
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'tbody',
      null,
      /*#__PURE__*/ _react.default.createElement(
        'tr',
        null,
        /*#__PURE__*/ _react.default.createElement(
          'td',
          null,
          /*#__PURE__*/ _react.default.createElement(TypeSelector, null),
          /*#__PURE__*/ _react.default.createElement(SubTypeSelector, null)
        ),
        /*#__PURE__*/ _react.default.createElement(
          'td',
          null,
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'text',
            value: field.title || '',
            onChange: (e) => handleInputChange(e, 'title'),
            className: 'acms-admin-form-width-full',
            placeholder: '\u4F8B\uFF09\u30BF\u30A4\u30C8\u30EB',
          })
        ),
        /*#__PURE__*/ _react.default.createElement(
          'td',
          null,
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'text',
            value: field.name || '',
            onChange: (e) => handleInputChange(e, 'name'),
            className: 'acms-admin-form-width-full',
            placeholder: '\u4F8B\uFF09name',
          })
        ),
        /*#__PURE__*/ _react.default.createElement(
          'td',
          null,
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'text',
            value: field.tooltip || '',
            onChange: (e) => handleInputChange(e, 'tooltip'),
            className: 'acms-admin-form-width-full',
            placeholder:
              '\u4F8B\uFF09\u3053\u3053\u306B\u30C4\u30FC\u30EB\u30C1\u30C3\u30D7\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
          })
        ),
        isPlaceholder &&
          /*#__PURE__*/ _react.default.createElement(
            'td',
            null,
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'text',
              value: field.placeholder || '',
              onChange: (e) => handleInputChange(e, 'placeholder'),
              className: 'acms-admin-form-width-full',
              placeholder:
                '\u4F8B\uFF09\u3053\u3053\u306B\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C0\u30FC\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
            })
          )
      )
    )
  );
}
