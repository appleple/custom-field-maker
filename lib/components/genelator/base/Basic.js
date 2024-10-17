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
  const [isPlaceholder, setIsPlaceholder] = (0, _react.useState)(true);
  function TypeSelector() {
    const onChange = (e) => {
      const type = e.target.value;
      if (!type) return;
      if (
        (type === 'text') |
        (type === 'tel') |
        (type === 'number') |
        (type === 'email') |
        (type === 'password') |
        (type === 'textarea')
      ) {
        setIsPlaceholder(true);
      } else {
        setIsPlaceholder(false);
      }
      setField((prevState) => ({
        ...prevState,
        type,
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
      _inputTypes.default.map((group, groupIndex) => {
        const [groupName, options] = Object.entries(group)[0];
        return /*#__PURE__*/ _react.default.createElement(
          'optgroup',
          {
            key: groupIndex,
            label: groupName,
          },
          options.map((item, index) =>
            /*#__PURE__*/ _react.default.createElement(
              'option',
              {
                key: index,
                value: item.value,
              },
              item.label
            )
          )
        );
      })
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
    'div',
    {
      className: 'customFieldGeneratorBasic',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'customFieldGeneratorBasicInput',
      },
      /*#__PURE__*/ _react.default.createElement(
        'label',
        {
          className: '',
        },
        '\u30BF\u30A4\u30D7',
        /*#__PURE__*/ _react.default.createElement(
          'span',
          {
            className: 'acms-admin-label acms-admin-label-danger',
          },
          '\u5FC5\u9808'
        )
      ),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        null,
        /*#__PURE__*/ _react.default.createElement(TypeSelector, null)
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'customFieldGeneratorBasicTitle',
      },
      /*#__PURE__*/ _react.default.createElement(
        'label',
        {
          className: '',
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
        'div',
        null,
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'text',
          value: field.title || '',
          onChange: (e) => handleInputChange(e, 'title'),
          className: 'acms-admin-form-width-full',
          placeholder: '',
        })
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'customFieldGeneratorBasicField',
      },
      /*#__PURE__*/ _react.default.createElement(
        'label',
        {
          className: '',
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
        'div',
        null,
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'text',
          value: field.name || '',
          onChange: (e) => handleInputChange(e, 'name'),
          className: 'acms-admin-form-width-full',
          placeholder: '',
        })
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'customFieldGeneratorBasicPlaceholder',
      },
      /*#__PURE__*/ _react.default.createElement(
        'label',
        {
          className: '',
        },
        '\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C0\u30FC'
      ),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        null,
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'text',
          value: !isPlaceholder ? '' : field.placeholder || '',
          onChange: (e) => handleInputChange(e, 'placeholder'),
          className: 'acms-admin-form-width-full',
          placeholder: '',
          disabled: !isPlaceholder,
        })
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'customFieldGeneratorBasicTooltip',
      },
      /*#__PURE__*/ _react.default.createElement(
        'label',
        {
          className: '',
        },
        '\u30C4\u30FC\u30EB\u30C1\u30C3\u30D7'
      ),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        null,
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'text',
          value: field.tooltip || '',
          onChange: (e) => handleInputChange(e, 'tooltip'),
          className: 'acms-admin-form-width-full',
          placeholder: '',
        })
      )
    )
  );
}
