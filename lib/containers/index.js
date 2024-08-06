'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _MakerContext = require('../store/MakerContext');
var _EditorModeNavigator = require('../components/navigator/EditorModeNavigator');
var _PreviewModeNavigator = require('../components/navigator/PreviewModeNavigator');
var _PreviewNavigator = require('../components/navigator/PreviewNavigator');
var _Field = require('../components/genelator/Field');
var _FieldGroup = require('../components/genelator/FieldGroup');
var _Unit = _interopRequireDefault(require('../components/genelator/Unit'));
var _UnitGroup = _interopRequireDefault(require('../components/genelator/UnitGroup'));
var _FieldSource = require('../components/FieldSource');
var _FieldGroupSource = require('../components/FieldGroupSource');
var _Highlighter = require('../components/Highlighter');
var _htmlEntities = require('html-entities');
const entities = new _htmlEntities.XmlEntities();
function CustomFieldMaker() {
  const {
    setSource,
    customfield,
    fieldgroup,
    customunit,
    unitgroup,
    preview,
    clipboard: { source },
  } = (0, _MakerContext.useMakerContext)();
  const onSource = (encodedHtml) => {
    const decodedHtml = entities.decode(encodedHtml);
    if (source !== decodedHtml) {
      setSource(decodedHtml);
    }
  };
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'acms-admin-form',
    },
    /*#__PURE__*/ _react.default.createElement(_EditorModeNavigator.EditorModeNavigator, null),
    preview.mode === 'normal' && /*#__PURE__*/ _react.default.createElement(_Field.Field, null),
    preview.mode === 'group' && /*#__PURE__*/ _react.default.createElement(_FieldGroup.FieldGroup, null),
    preview.mode === 'unit' && /*#__PURE__*/ _react.default.createElement(_Unit.default, null),
    preview.mode === 'unit-group' && /*#__PURE__*/ _react.default.createElement(_UnitGroup.default, null),
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
                    customfield: customfield,
                    customunit: customunit,
                    fieldgroup: fieldgroup,
                    unitgroup: unitgroup,
                    preview: preview,
                  },
                  preview.mode === 'normal' &&
                    /*#__PURE__*/ _react.default.createElement(_FieldSource.FieldSource, null),
                  preview.mode === 'group' &&
                    /*#__PURE__*/ _react.default.createElement(_FieldGroupSource.FieldGroupSource, null)
                )
              ),
            preview.editMode === 'preview' &&
              /*#__PURE__*/ _react.default.createElement(
                _react.default.Fragment,
                null,
                preview.mode === 'normal' && /*#__PURE__*/ _react.default.createElement(_FieldSource.FieldSource, null),
                preview.mode === 'group' &&
                  /*#__PURE__*/ _react.default.createElement(_FieldGroupSource.FieldGroupSource, null)
              )
          )
        )
      )
    )
  );
}
var _default = (exports.default = CustomFieldMaker);
