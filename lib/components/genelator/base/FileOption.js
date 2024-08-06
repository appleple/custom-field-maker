'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.FileOption = FileOption;
var _react = _interopRequireDefault(require('react'));
function FileOption(props) {
  const {
    field: { extension, fileName, fileNameMethod },
    setField,
  } = props;
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'customFieldFileContainer',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'customFieldFileNameOptContainer',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'acms-admin-form-radio',
        },
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'radio',
          checked: fileNameMethod === 'random',
          id: 'file-name-method-random',
          onChange: () =>
            setField((prevState) => ({
              ...prevState,
              fileNameMethod: 'random',
            })),
        }),
        /*#__PURE__*/ _react.default.createElement(
          'label',
          {
            htmlFor: 'file-name-method-random',
          },
          /*#__PURE__*/ _react.default.createElement('i', {
            className: 'acms-admin-ico-radio',
          }),
          '\u30D5\u30A1\u30A4\u30EB\u540D\uFF08\u30E9\u30F3\u30C0\u30E0\uFF09'
        )
      ),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'acms-admin-form-radio',
        },
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'radio',
          checked: fileNameMethod === 'fix',
          id: 'file-name-method-fix',
          onChange: () =>
            setField((prevState) => ({
              ...prevState,
              fileNameMethod: 'fix',
            })),
        }),
        /*#__PURE__*/ _react.default.createElement(
          'label',
          {
            htmlFor: 'file-name-method-fix',
          },
          /*#__PURE__*/ _react.default.createElement('i', {
            className: 'acms-admin-ico-radio',
          }),
          '\u30D5\u30A1\u30A4\u30EB\u540D\uFF08\u56FA\u5B9A\uFF09'
        )
      ),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'acms-admin-form-radio',
        },
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'radio',
          checked: fileNameMethod === 'asis',
          id: 'file-name-method-asis',
          onChange: () =>
            setField((prevState) => ({
              ...prevState,
              fileNameMethod: 'asis',
            })),
        }),
        /*#__PURE__*/ _react.default.createElement(
          'label',
          {
            htmlFor: 'file-name-method-asis',
          },
          /*#__PURE__*/ _react.default.createElement('i', {
            className: 'acms-admin-ico-radio',
          }),
          '\u30D5\u30A1\u30A4\u30EB\u540D\uFF08\u305D\u306E\u307E\u307E\uFF09'
        )
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      null,
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'customFieldInputGroup customFieldInputFileGroup',
        },
        fileNameMethod === 'random' &&
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'text',
            placeholder: '\u30E9\u30F3\u30C0\u30E0\u306E\u6587\u5B57\u5217\u304C\u5165\u308A\u307E\u3059',
            disabled: true,
          }),
        fileNameMethod === 'fix' &&
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'text',
            defaultValue: fileName,
            onInput: (e) => {
              const value = e.target.value;
              if (!value) return;
              setField((prevState) => ({
                ...prevState,
                fileName: value,
              }));
            },
            placeholder: '\u4F8B\uFF09example.pdf',
          }),
        fileNameMethod === 'asis' &&
          /*#__PURE__*/ _react.default.createElement('input', {
            type: 'text',
            placeholder: '\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u540D',
            disabled: true,
          })
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      null,
      /*#__PURE__*/ _react.default.createElement(
        'p',
        null,
        '\u62E1\u5F35\u5B50\u5236\u9650\uFF08pdf\u306A\u3069\uFF09'
      ),
      /*#__PURE__*/ _react.default.createElement('input', {
        type: 'text',
        defaultValue: extension,
        onInput: (e) => {
          const value = e.target.value;
          if (!value) return;
          setField((prevState) => ({
            ...prevState,
            extension: value,
          }));
        },
        placeholder: '\u4F8B\uFF09pdf',
      })
    )
  );
}
