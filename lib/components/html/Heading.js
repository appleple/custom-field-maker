'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Heading = Heading;
var _react = _interopRequireDefault(require('react'));
var _MakerContext = require('../../store/MakerContext');
function Heading(props) {
  const { item } = props;
  const {
    state: {
      preview: { jsValidator },
    },
  } = (0, _MakerContext.useMakerContext)();
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    item.title,
    item.tooltip &&
      /*#__PURE__*/ _react.default.createElement('i', {
        className: 'acms-admin-icon-tooltip js-acms-tooltip',
        'data-acms-tooltip': item.tooltip,
      }),
    jsValidator &&
      /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          className: 'valid-mark',
          'data-validator': item.name,
        },
        /*#__PURE__*/ _react.default.createElement('span', {
          className: 'acms-admin-icon acms-admin-icon-checklist',
        })
      )
  );
}
