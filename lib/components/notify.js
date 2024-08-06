'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Notify = Notify;
var _react = _interopRequireWildcard(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _MakerContext = require('../store/MakerContext');
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
function Notify(props) {
  const { message, onFinish = () => {} } = props;
  const {
    clipboard: { copied },
  } = (0, _MakerContext.useMakerContext)();
  const [active, setActive] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (copied) {
      setTimeout(() => {
        setActive(true);
      }, 1);
      setTimeout(() => {
        setActive(false);
      }, 800);
      setTimeout(() => {
        if (onFinish) {
          onFinish();
        }
      }, 1100);
    }
  }, [copied, setActive, onFinish]);
  if (!copied) {
    return null;
  }
  return /*#__PURE__*/ _react.default.createElement(
    'p',
    {
      className: (0, _classnames.default)('customFieldCopied', {
        active,
      }),
    },
    message
  );
}
