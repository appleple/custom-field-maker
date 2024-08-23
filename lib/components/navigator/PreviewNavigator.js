'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.PreviewNavigator = PreviewNavigator;
var _react = _interopRequireDefault(require('react'));
var _reactTooltip = _interopRequireDefault(require('react-tooltip'));
var _classnames = _interopRequireDefault(require('classnames'));
var _reactCopyToClipboard = _interopRequireDefault(require('react-copy-to-clipboard'));
var _Notify = require('../Notify');
var _MakerContext = require('../../store/MakerContext');
var _add_column = _interopRequireDefault(require('../../assets/images/add_column.svg'));
var _add_row = _interopRequireDefault(require('../../assets/images/add_row.svg'));
function PreviewNavigator() {
  const {
    clearCustomfield,
    clearCustomunit,
    clearGroupItem,
    clearUnitGroupItem,
    setTag,
    setAcmscss,
    setJsValidator,
    setDirection,
    setCopied,
    preview: { jsValidator, acmscss, mode, editMode, tag, direction },
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
    (mode === 'customfield' || mode === 'fieldgroup') &&
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
    tag === 'table' &&
      (mode === 'fieldgroup' || mode === 'unitgroup') &&
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          style: {
            marginTop: '5px',
          },
        },
        /*#__PURE__*/ _react.default.createElement(
          'span',
          {
            className: 'customFieldDirectionBtnGroupSide',
          },
          '\u30BD\u30FC\u30B9\u306E\u8FFD\u52A0\u65B9\u6CD5'
        ),
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'customFieldDirectionBtnGroup',
          },
          /*#__PURE__*/ _react.default.createElement(
            'label',
            {
              htmlFor: 'direction-horizontal',
              className: (0, _classnames.default)('customFieldDirectionBtn', {
                active: direction === 'horizontal',
              }),
              'data-tip': true,
              'data-for': 'group-field-direction-horizontal',
            },
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'radio',
              id: 'direction-horizontal',
              onChange: () => setDirection('horizontal'),
              checked: direction === 'horizontal',
            }),
            /*#__PURE__*/ _react.default.createElement('img', {
              src: _add_column.default,
              alt: '',
            })
          ),
          /*#__PURE__*/ _react.default.createElement(
            'label',
            {
              htmlFor: 'direction-vertical',
              className: (0, _classnames.default)('customFieldDirectionBtn', {
                active: direction === 'vertical',
              }),
              'data-tip': true,
              'data-for': 'group-field-direction-vertical',
            },
            /*#__PURE__*/ _react.default.createElement('input', {
              type: 'radio',
              id: 'direction-vertical',
              onChange: () => setDirection('vertical'),
              checked: direction === 'vertical',
            }),
            /*#__PURE__*/ _react.default.createElement('img', {
              src: _add_row.default,
              alt: '',
            })
          )
        ),
        /*#__PURE__*/ _react.default.createElement(
          _reactTooltip.default,
          {
            id: 'group-field-direction-vertical',
            place: 'top',
            type: 'dark',
            effect: 'solid',
            className: 'acms-admin-tooltip acms-tooltip customFieldTooltip',
          },
          /*#__PURE__*/ _react.default.createElement(
            'span',
            null,
            '\u7E26\u5411\u304D\u30EC\u30A4\u30A2\u30A6\u30C8\u7528\u306B\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u307E\u3059\u3002'
          )
        ),
        /*#__PURE__*/ _react.default.createElement(
          _reactTooltip.default,
          {
            id: 'group-field-direction-horizontal',
            place: 'top',
            type: 'dark',
            effect: 'solid',
            className: 'acms-admin-tooltip acms-tooltip customFieldTooltip',
          },
          /*#__PURE__*/ _react.default.createElement(
            'span',
            null,
            '\u6A2A\u5411\u304D\u30EC\u30A4\u30A2\u30A6\u30C8\u7528\u306B\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3057\u307E\u3059\u3002'
          )
        )
      ),
    mode === 'customfield' &&
      /*#__PURE__*/ _react.default.createElement(
        'button',
        {
          onClick: () => clearCustomfield(),
          className: 'acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right',
        },
        '\u5C65\u6B74\u30AF\u30EA\u30A2'
      ),
    mode === 'fieldgroup' &&
      /*#__PURE__*/ _react.default.createElement(
        'button',
        {
          onClick: () => clearGroupItem(),
          className: 'acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right',
        },
        '\u5C65\u6B74\u30AF\u30EA\u30A2'
      ),
    mode === 'customunit' &&
      /*#__PURE__*/ _react.default.createElement(
        'button',
        {
          onClick: () => clearCustomunit(),
          className: 'acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right',
        },
        '\u5C65\u6B74\u30AF\u30EA\u30A2'
      ),
    mode === 'unitgroup' &&
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
