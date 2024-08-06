'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.PreviewNavigator = PreviewNavigator;
var _react = _interopRequireDefault(require('react'));
var _reactCopyToClipboard = _interopRequireDefault(require('react-copy-to-clipboard'));
var _Notify = require('../Notify');
var _MakerContext = require('../../store/MakerContext');
function PreviewNavigator() {
  const {
    clearCustomfield,
    clearCustomunit,
    clearGroupItem,
    clearUnitGroupItem,
    setTag,
    setAcmscss,
    setJsValidator,
    setCopied,
    preview: { jsValidator, acmscss, mode, editMode },
    clipboard: { source },
  } = (0, _MakerContext.useMakerContext)();
  const updateTag = (tag) => {
    setTag(tag);
  };
  const onAcmscss = () => {
    setAcmscss(!acmscss);
  };
  const onJsValidator = () => {
    setJsValidator(!jsValidator);
  };
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'acms-admin-form-checkbox',
        style: {
          marginTop: '5px',
        },
      },
      /*#__PURE__*/ _react.default.createElement('input', {
        type: 'checkbox',
        onChange: onAcmscss,
        checked: acmscss,
        id: 'acmscss-checkbox',
      }),
      /*#__PURE__*/ _react.default.createElement(
        'label',
        {
          htmlFor: 'acmscss-checkbox',
        },
        /*#__PURE__*/ _react.default.createElement('i', {
          className: 'acms-admin-ico-checkbox',
        }),
        'acms-admin.css\u3092\u4F7F\u7528\u3059\u308B'
      )
    ),
    (mode === 'normal' || mode === 'group') &&
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'acms-admin-form-checkbox',
          style: {
            marginTop: '5px',
          },
        },
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'checkbox',
          onChange: onJsValidator,
          checked: jsValidator,
          id: 'jsvalidator-checkbox',
        }),
        /*#__PURE__*/ _react.default.createElement(
          'label',
          {
            htmlFor: 'jsvalidator-checkbox',
          },
          /*#__PURE__*/ _react.default.createElement('i', {
            className: 'acms-admin-ico-checkbox',
          }),
          'JavaScript\u306B\u3088\u308B\u30D0\u30EA\u30C7\u30FC\u30C8\u3092\u4F7F\u7528\u3059\u308B'
        )
      ),
    /*#__PURE__*/ _react.default.createElement(
      'select',
      {
        id: 'tag',
        onChange: (e) => updateTag(e.target.value),
        className: 'acms-admin-form-width-quarter',
      },
      /*#__PURE__*/ _react.default.createElement(
        'option',
        {
          value: 'section',
        },
        '--'
      ),
      /*#__PURE__*/ _react.default.createElement(
        'option',
        {
          value: 'table',
        },
        'table'
      )
    ),
    mode === 'normal' &&
      /*#__PURE__*/ _react.default.createElement(
        'button',
        {
          onClick: () => clearCustomfield(),
          className: 'acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right',
        },
        '\u5C65\u6B74\u30AF\u30EA\u30A2'
      ),
    mode === 'group' &&
      /*#__PURE__*/ _react.default.createElement(
        'button',
        {
          onClick: () => clearGroupItem(),
          className: 'acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right',
        },
        '\u5C65\u6B74\u30AF\u30EA\u30A2'
      ),
    mode === 'unit' &&
      /*#__PURE__*/ _react.default.createElement(
        'button',
        {
          onClick: () => clearCustomunit(),
          className: 'acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right',
        },
        '\u5C65\u6B74\u30AF\u30EA\u30A2'
      ),
    mode === 'unit-group' &&
      /*#__PURE__*/ _react.default.createElement(
        'button',
        {
          onClick: () => clearUnitGroupItem(),
          className: 'acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right',
        },
        '\u5C65\u6B74\u30AF\u30EA\u30A2'
      ),
    editMode !== 'preview' &&
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          style: {
            display: 'inline-block',
            position: 'relative',
            float: 'right',
            marginRight: '10px',
          },
        },
        /*#__PURE__*/ _react.default.createElement(
          _reactCopyToClipboard.default,
          {
            text: source,
            onCopy: () => setCopied(true),
          },
          /*#__PURE__*/ _react.default.createElement(
            'button',
            {
              className: 'acms-admin-btn-admin',
            },
            '\u30B3\u30FC\u30C9\u3092\u30B3\u30D4\u30FC'
          )
        ),
        /*#__PURE__*/ _react.default.createElement(_Notify.Notify, {
          message: '\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F',
          onFinish: () => setCopied(false),
        })
      )
  );
}
