'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.PreviewModeNavigator = PreviewModeNavigator;
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _MakerContext = require('../../store/MakerContext');
function PreviewModeNavigator() {
  const {
    setEditMode,
    preview: { editMode },
  } = (0, _MakerContext.useMakerContext)();
  const updateMode = (editMode) => {
    setEditMode(editMode);
  };
  return /*#__PURE__*/ _react.default.createElement(
    'ul',
    {
      className: 'customFieldTabs',
    },
    /*#__PURE__*/ _react.default.createElement(
      'li',
      null,
      /*#__PURE__*/ _react.default.createElement(
        'a',
        {
          href: '#source',
          className: (0, _classnames.default)({
            customFieldTabActive: editMode === 'source',
          }),
          onClick: () => updateMode('source'),
        },
        '\u5165\u529B\u7528\u30BD\u30FC\u30B9'
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'li',
      null,
      /*#__PURE__*/ _react.default.createElement(
        'a',
        {
          href: '#preview',
          className: (0, _classnames.default)({
            customFieldTabActive: editMode === 'preview',
          }),
          onClick: () => updateMode('preview'),
        },
        '\u30D7\u30EC\u30D3\u30E5\u30FC'
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'li',
      null,
      /*#__PURE__*/ _react.default.createElement(
        'a',
        {
          href: '#confirm',
          className: (0, _classnames.default)({
            customFieldTabActive: editMode === 'confirm',
          }),
          onClick: () => updateMode('confirm'),
        },
        '\u51FA\u529B\u7528\u30BD\u30FC\u30B9'
      )
    )
  );
}
