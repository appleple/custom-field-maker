'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.OptionItem = OptionItem;
var _react = _interopRequireDefault(require('react'));
function OptionItem(props) {
  const {
    field: { option },
    setField,
    add = true,
  } = props;
  const updateOptionLabel = (idx, label) => {
    const item = option[idx];
    setField((prevState) => ({
      ...prevState,
      option: [
        ...option.slice(0, idx),
        {
          ...item,
          label,
        },
        ...option.slice(idx + 1),
      ],
    }));
  };
  const updateOptionValue = (idx, value) => {
    const item = option[idx];
    setField((prevState) => ({
      ...prevState,
      option: [
        ...option.slice(0, idx),
        {
          ...item,
          value,
        },
        ...option.slice(idx + 1),
      ],
    }));
  };
  const removeOption = (idx) => {
    setField((prevState) => ({
      ...prevState,
      option: [...option.slice(0, idx), ...option.slice(idx + 1)],
    }));
  };
  const addOption = () => {
    setField((prevState) => ({
      ...prevState,
      option: [
        ...option,
        {
          value: '',
          label: '',
        },
      ],
    }));
  };
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    null,
    /*#__PURE__*/ _react.default.createElement(
      'table',
      {
        className: 'acms-admin-table customFieldOptionTable',
      },
      /*#__PURE__*/ _react.default.createElement(
        'tbody',
        null,
        option &&
          option.map((item, idx) =>
            /*#__PURE__*/ _react.default.createElement(
              'tr',
              {
                key: idx,
              },
              /*#__PURE__*/ _react.default.createElement(
                'td',
                null,
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    className: 'customFieldOptionTableInput',
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    'span',
                    {
                      className: 'customFieldOptionTableAppend',
                    },
                    '\u9805\u76EE\u540D\uFF08label\uFF09'
                  ),
                  /*#__PURE__*/ _react.default.createElement('input', {
                    type: 'text',
                    defaultValue: item.label,
                    onInput: (e) => {
                      const value = e.target.value;
                      updateOptionLabel(idx, value);
                    },
                    className: 'acms-admin-form-width-full',
                    placeholder: '\u4F8B\uFF09\u6771\u4EAC\u90FD',
                  })
                )
              ),
              /*#__PURE__*/ _react.default.createElement(
                'td',
                null,
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    className: 'customFieldOptionTableInput',
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    'span',
                    {
                      className: 'customFieldOptionTableAppend',
                    },
                    '\u5024\uFF08value\uFF09'
                  ),
                  /*#__PURE__*/ _react.default.createElement('input', {
                    type: 'text',
                    defaultValue: item.value,
                    onInput: (e) => {
                      const value = e.target.value;
                      updateOptionValue(idx, value);
                    },
                    className: 'acms-admin-form-width-full',
                    style: {
                      minWidth: '200px',
                    },
                    placeholder: '\u4F8B\uFF09tokyo',
                  })
                )
              ),
              add &&
                /*#__PURE__*/ _react.default.createElement(
                  'td',
                  null,
                  /*#__PURE__*/ _react.default.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right',
                      onClick: () => removeOption(idx),
                    },
                    '\u524A\u9664'
                  )
                )
            )
          )
      )
    ),
    add &&
      /*#__PURE__*/ _react.default.createElement(
        'p',
        null,
        /*#__PURE__*/ _react.default.createElement(
          'button',
          {
            className: 'acms-admin-btn',
            onClick: addOption,
          },
          '\u8FFD\u52A0'
        )
      )
  );
}
