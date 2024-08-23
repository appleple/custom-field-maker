'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _MakerContext = require('../store/MakerContext');
var _EditorModeNavigator = require('../components/navigator/EditorModeNavigator');
var _PreviewModeNavigator = require('../components/navigator/PreviewModeNavigator');
var _PreviewNavigator = require('../components/navigator/PreviewNavigator');
var _Field = require('../components/genelator/Field');
var _FieldGroup = require('../components/genelator/FieldGroup');
var _Unit = require('../components/genelator/Unit');
var _UnitGroup = require('../components/genelator/UnitGroup');
var _FieldSource = require('../components/FieldSource');
var _FieldGroupSource = require('../components/FieldGroupSource');
var _UnitSource = require('../components/UnitSource');
var _UnitGroupSource = require('../components/UnitGroupSource');
var _FieldConfirmSource = require('../components/FieldConfirmSource');
var _Highlighter = require('../components/Highlighter');
var _htmlEntities = require('html-entities');
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
const entities = new _htmlEntities.XmlEntities();
function CustomFieldMaker() {
  const { setSource, state, preview, clipboard } = (0, _MakerContext.useMakerContext)();
  const onSource = (encodedHtml) => {
    const decodedHtml = entities.decode(encodedHtml);
    if (clipboard.source !== decodedHtml) {
      setSource(decodedHtml);
    }
  };
  (0, _react.useEffect)(() => {
    console.log(state.customunit);
    console.log(preview.mode);
  }, [state.customunit, preview.mode]);
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'acms-admin-form',
    },
    /*#__PURE__*/ _react.default.createElement(_EditorModeNavigator.EditorModeNavigator, null),
    preview.mode === 'customfield' && /*#__PURE__*/ _react.default.createElement(_Field.Field, null),
    preview.mode === 'fieldgroup' && /*#__PURE__*/ _react.default.createElement(_FieldGroup.FieldGroup, null),
    preview.mode === 'customunit' && /*#__PURE__*/ _react.default.createElement(_Unit.Unit, null),
    preview.mode === 'unitgroup' && /*#__PURE__*/ _react.default.createElement(_UnitGroup.UnitGroup, null),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'acms-admin-tabs',
      },
      /*#__PURE__*/ _react.default.createElement(_PreviewModeNavigator.PreviewModeNavigator, null),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'acms-admin-tabs-panel',
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            style: {
              backgroundColor: '#F1F1F1',
              padding: '20px 15px',
            },
          },
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'clearfix',
            },
            /*#__PURE__*/ _react.default.createElement(_PreviewNavigator.PreviewNavigator, null),
            preview.editMode === 'source' &&
              /*#__PURE__*/ _react.default.createElement(
                _Highlighter.Highlighter,
                {
                  onHighlight: onSource,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _MakerContext.MakerContextProvider,
                  {
                    state: state,
                    preview: preview,
                    clipboard: clipboard,
                  },
                  preview.mode === 'customfield' &&
                    /*#__PURE__*/ _react.default.createElement(_FieldSource.FieldSource, null),
                  preview.mode === 'fieldgroup' &&
                    /*#__PURE__*/ _react.default.createElement(_FieldGroupSource.FieldGroupSource, null),
                  preview.mode === 'customunit' &&
                    /*#__PURE__*/ _react.default.createElement(_UnitSource.UnitSource, null),
                  preview.mode === 'unitgroup' &&
                    /*#__PURE__*/ _react.default.createElement(_UnitGroupSource.UnitGroupSource, null)
                )
              ),
            preview.editMode === 'preview' &&
              /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                preview.mode === 'customfield' &&
                  /*#__PURE__*/ _react.default.createElement(_FieldSource.FieldSource, null),
                preview.mode === 'fieldgroup' &&
                  /*#__PURE__*/ _react.default.createElement(_FieldGroupSource.FieldGroupSource, null),
                preview.mode === 'customunit' &&
                  /*#__PURE__*/ _react.default.createElement(_UnitSource.UnitSource, null),
                preview.mode === 'unitgroup' &&
                  /*#__PURE__*/ _react.default.createElement(_UnitGroupSource.UnitGroupSource, null)
              ),
            preview.editMode === 'confirm' &&
              /*#__PURE__*/ _react.default.createElement(
                _Highlighter.Highlighter,
                {
                  onHighlight: onSource,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _MakerContext.MakerContextProvider,
                  {
                    state: state,
                    preview: preview,
                    clipboard: clipboard,
                  },
                  (preview.mode === 'customfield' || preview.mode === 'customunit') &&
                    /*#__PURE__*/ _react.default.createElement(_FieldConfirmSource.FieldConfirmSource, null)
                )
              )
          )
        )
      )
    )
  );
}
var _default = (exports.default = CustomFieldMaker);
