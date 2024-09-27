'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Maker = Maker;
var _react = _interopRequireWildcard(require('react'));
var _MakerContext = require('../../../store/MakerContext');
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
  openConverter: '',
  converter: '',
  tooltip: '',
  placeholder: '',
};
function Maker(props) {
  const { setField, onSubmit = () => {} } = props;
  const {
    preview: { mode },
    undo,
  } = (0, _MakerContext.useMakerContext)();
  const onClearHandler = (0, _react.useCallback)(() => {
    setField((prevState) => {
      console.log(prevState);
      return {
        ...prevState,
        ...crearField,
      };
    });
  }, [setField]);
  const onUndoHandler = () => {
    undo(mode), [mode, undo];
  };
  return /*#__PURE__*/ _react.default.createElement(
    'p',
    null,
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
    ),
    /*#__PURE__*/ _react.default.createElement(
      'button',
      {
        onClick: onUndoHandler,
        className: 'acms-admin-btn-admin',
      },
      '\u5143\u306B\u623B\u3059'
    )
  );
}
