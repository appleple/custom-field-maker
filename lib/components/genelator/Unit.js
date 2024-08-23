'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Unit = Unit;
var _react = _interopRequireWildcard(require('react'));
var _MakerContext = require('../../store/MakerContext');
var _ConverterModal = require('./base/ConverterModal');
var _Alert = require('./base/Alert');
var _Basic = require('./base/Basic');
var _Snippet = require('./base/Snippet');
var _Maker = require('./base/Maker');
var _Validator = require('./base/Validator');
var _OptionItem = require('./base/OptionItem');
var _MediaOption = require('./base/MediaOption');
var _ImageOption = require('./base/ImageOption');
var _ImageResizeOption = require('./base/ImageResizeOption');
var _FileOption = require('./base/FileOption');
var _RichEditorOption = require('./base/RichEditorOption');
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
const defaultProps = {
  // text, textarea
  title: '',
  name: '',
  type: 'text',
  subType: '',
  tooltip: '',
  placeholder: '',
  alert: false,
  duplicatedField: '',
  path: 'path',
  converter: '',
  // image
  normal: 'size',
  normalSize: null,
  // customfieldから引用
  largeSize: null,
  // customfieldから引用
  tiny: null,
  // customfieldから引用
  tinySize: null,
  // customfieldから引用
  square: null,
  // customfieldから引用

  resize: true,
  useDropArea: true,
  dropAreaWidth: 200,
  dropAreaHeight: 200,
  useFocusImage: false,
  focusImageWidth: 400,
  focusImageHeight: 400,
  mediaType: 'image',
  // RichEditor
  useExpand: true,
  startHeadingLevel: 2,
  endHeadingLevel: 3,
  // select, checkbox, radio
  option: [
    {
      value: '',
      label: '',
    },
  ],
  validator: [
    {
      option: '',
      value: '',
      message: '',
    },
  ],
  optionFormat: 'pref',
  openValidator: false,
  openConverter: false,
  alt: false,
  fileNameMethod: 'random',
  noSearch: false,
  // customfieldから引用
  extension: '', // customfieldから引用
};
function Unit() {
  const [field, setField] = (0, _react.useState)(defaultProps);
  const { addCustomunit } = (0, _MakerContext.useMakerContext)();
  const onAddCustomunitHandler = (0, _react.useCallback)(
    (fieldData) => {
      addCustomunit(fieldData);
    },
    [addCustomunit]
  );
  const onSubmit = (e) => {
    e.preventDefault();
    if (field.name && field.type && field.title) {
      if (field.alert) {
        setField((prevState) => ({
          ...prevState,
          alert: false,
        }));
      }
      onAddCustomunitHandler(field);
    } else {
      setField((prevState) => ({
        ...prevState,
        alert: true,
      }));
    }
  };
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    null,
    /*#__PURE__*/ _react.default.createElement(
      'h2',
      {
        className: 'acms-admin-admin-title2',
      },
      '\u30AB\u30B9\u30BF\u30E0\u30E6\u30CB\u30C3\u30C8'
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'customFieldFunction',
      },
      /*#__PURE__*/ _react.default.createElement(_ConverterModal.ConverterModal, {
        field: field,
        setField: setField,
      }),
      /*#__PURE__*/ _react.default.createElement(_Alert.Alert, {
        field: field,
        setField: setField,
      }),
      /*#__PURE__*/ _react.default.createElement(_Basic.Basic, {
        field: field,
        setField: setField,
      }),
      field.type === 'selectbox' &&
        /*#__PURE__*/ _react.default.createElement(
          'div',
          null,
          /*#__PURE__*/ _react.default.createElement(_Snippet.Snippet, {
            field: field,
            setField: setField,
          }),
          /*#__PURE__*/ _react.default.createElement(_OptionItem.OptionItem, {
            field: field,
            setField: setField,
          })
        ),
      field.type === 'radioButton' &&
        /*#__PURE__*/ _react.default.createElement(
          'div',
          null,
          /*#__PURE__*/ _react.default.createElement(_Snippet.Snippet, {
            field: field,
            setField: setField,
          }),
          /*#__PURE__*/ _react.default.createElement(_OptionItem.OptionItem, {
            field: field,
            setField: setField,
          })
        ),
      field.type === 'checkbox' &&
        /*#__PURE__*/ _react.default.createElement(
          'div',
          null,
          /*#__PURE__*/ _react.default.createElement(_Snippet.Snippet, {
            field: field,
            setField: setField,
          }),
          /*#__PURE__*/ _react.default.createElement(_OptionItem.OptionItem, {
            field: field,
            setField: setField,
          })
        ),
      field.type === 'media' &&
        /*#__PURE__*/ _react.default.createElement(
          'div',
          null,
          /*#__PURE__*/ _react.default.createElement(_MediaOption.MediaOption, {
            field: field,
            setField: setField,
          })
        ),
      field.type === 'image' &&
        /*#__PURE__*/ _react.default.createElement(
          'div',
          null,
          /*#__PURE__*/ _react.default.createElement(_ImageOption.ImageOption, {
            setField: setField,
          }),
          /*#__PURE__*/ _react.default.createElement(_ImageResizeOption.ImageResizeOption, {
            field: field,
            setField: setField,
          })
        ),
      field.type === 'file' &&
        /*#__PURE__*/ _react.default.createElement(
          'div',
          null,
          /*#__PURE__*/ _react.default.createElement(_FileOption.FileOption, {
            field: field,
            setField: setField,
          })
        ),
      field.type === 'richEditor' &&
        /*#__PURE__*/ _react.default.createElement(
          'div',
          null,
          /*#__PURE__*/ _react.default.createElement(_RichEditorOption.RichEditorOption, {
            field: field,
            setField: setField,
          })
        ),
      field.type !== 'media' &&
        field.type !== 'richEditor' &&
        field.type !== 'table' &&
        /*#__PURE__*/ _react.default.createElement(_Validator.Validator, {
          field: field,
          setField: setField,
        }),
      /*#__PURE__*/ _react.default.createElement(_Maker.Maker, {
        setField: setField,
        onSubmit: onSubmit,
      })
    )
  );
}
