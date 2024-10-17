'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Operator = Operator;
var _react = _interopRequireWildcard(require('react'));
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
const crearField = {
  title: '',
  name: '',
  path: '',
  normalSize: '',
  tiny: '',
  tinySize: '',
  large: '',
  largeSize: '',
  square: '',
  squareSize: '',
  alt: true,
  resize: true,
  useExpand: true,
  useDropArea: true,
  dropAreaWidth: 200,
  dropAreaHeight: 200,
  useFocusImage: false,
  focusImageWidth: 400,
  focusImageHeight: 400,
  startHeadingLevel: 2,
  endHeadingLevel: 3,
  mediaType: 'image',
  converter: '',
  tooltip: '',
  placeholder: '',
  validator: [
    {
      option: '',
      value: '',
      message: '',
    },
  ],
};
function Operator(props) {
  const { setField, onSubmit = () => {} } = props;
  const onClearHandler = (0, _react.useCallback)(() => {
    setField((prevState) => ({
      ...prevState,
      ...crearField,
    }));
  }, [setField]);
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'customFieldOperator',
    },
    /*#__PURE__*/ _react.default.createElement(
      'button',
      {
        type: 'button',
        onClick: onClearHandler,
        className: 'acms-admin-btn-admin',
        style: {
          marginRight: '5px',
        },
      },
      '\u30AF\u30EA\u30A2'
    ),
    /*#__PURE__*/ _react.default.createElement(
      'button',
      {
        type: 'button',
        onClick: onSubmit,
        className: 'acms-admin-btn-admin acms-admin-btn-admin-primary customFieldMakeBtn',
        style: {
          marginRight: '5px',
        },
      },
      '\u751F\u6210'
    )
  );
}
