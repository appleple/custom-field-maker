"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Section = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Heading = require("../html/Heading");
var _TextInput = require("../html/TextInput");
var _Textarea = require("../html/Textarea");
var _Selectbox = require("../html/Selectbox");
var _Checkbox = require("../html/Checkbox");
var _RadioButton = require("../html/RadioButton");
var _Media = require("../html/Media");
var _ImageInput = require("../html/ImageInput");
var _FileInput = require("../html/FileInput");
var _RichEditor = require("../html/RichEditor");
var _Table = require("../html/Table");
var _MakerContext = require("../../store/MakerContext");
var _classnames = _interopRequireDefault(require("classnames"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Section = exports.Section = /*#__PURE__*/(0, _react.forwardRef)((_props, ref) => {
  const {
    state: {
      customfield
    },
    preview: {
      editMode,
      jsValidator,
      acmscss
    }
  } = (0, _MakerContext.useMakerContext)();
  const renderFormComponent = /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: (0, _classnames.default)({
      'acms-admin-grid-edit-table': acmscss
    })
  }, customfield.length > 0 && customfield.map((item, index) => {
    switch (item.type) {
      case 'text':
      case 'tel':
      case 'number':
      case 'email':
      case 'password':
        {
          return /*#__PURE__*/_react.default.createElement("div", {
            key: index,
            className: (0, _classnames.default)({
              'acms-admin-flex': acmscss,
              'acms-admin-flex-col-max-md': acmscss,
              'acms-admin-flex-row-min-md': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: (0, _classnames.default)({
              'acms-admin-grid-edit-table-heading': acmscss
            }),
            htmlFor: "".concat(item.name).concat(index)
          }, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("div", {
            className: (0, _classnames.default)({
              'acms-admin-flex-1': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement(_TextInput.TextInput, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      case 'textarea':
      case 'liteEditor':
        {
          return /*#__PURE__*/_react.default.createElement("div", {
            key: index,
            className: (0, _classnames.default)({
              'acms-admin-flex': acmscss,
              'acms-admin-flex-col-max-md': acmscss,
              'acms-admin-flex-row-min-md': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: (0, _classnames.default)({
              'acms-admin-grid-edit-table-heading': acmscss
            }),
            htmlFor: "".concat(item.name).concat(index)
          }, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("div", {
            className: (0, _classnames.default)({
              'acms-admin-flex-1': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement(_Textarea.Textarea, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      case 'selectbox':
        {
          return /*#__PURE__*/_react.default.createElement("div", {
            key: index,
            className: (0, _classnames.default)({
              'acms-admin-flex': acmscss,
              'acms-admin-flex-col-max-md': acmscss,
              'acms-admin-flex-row-min-md': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: (0, _classnames.default)({
              'acms-admin-grid-edit-table-heading': acmscss
            }),
            htmlFor: "".concat(item.name).concat(index)
          }, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("div", {
            className: (0, _classnames.default)({
              'acms-admin-flex-1': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement(_Selectbox.Selectbox, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      case 'checkbox':
        {
          return /*#__PURE__*/_react.default.createElement("div", {
            key: index,
            className: (0, _classnames.default)({
              'acms-admin-flex': acmscss,
              'acms-admin-flex-col-max-md': acmscss,
              'acms-admin-flex-row-min-md': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("fieldset", {
            key: index,
            className: (0, _classnames.default)({
              'acms-admin-contents': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("legend", {
            className: (0, _classnames.default)({
              'acms-admin-grid-edit-table-heading': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("div", {
            className: (0, _classnames.default)({
              'acms-admin-flex-1': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
            item: item
          }))));
        }
      case 'radioButton':
        {
          return /*#__PURE__*/_react.default.createElement("div", {
            key: index,
            className: (0, _classnames.default)({
              'acms-admin-flex': acmscss,
              'acms-admin-flex-row': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("fieldset", {
            key: index,
            className: (0, _classnames.default)({
              'acms-admin-contents': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("legend", {
            className: (0, _classnames.default)({
              'acms-admin-grid-edit-table-heading': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("div", {
            className: (0, _classnames.default)({
              'acms-admin-flex-1': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement(_RadioButton.RadioButton, {
            item: item
          }))));
        }
      case 'media':
        {
          return /*#__PURE__*/_react.default.createElement("div", {
            key: index,
            className: (0, _classnames.default)({
              'acms-admin-flex': acmscss,
              'acms-admin-flex-col-max-md': acmscss,
              'acms-admin-flex-row-min-md': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: (0, _classnames.default)({
              'acms-admin-grid-edit-table-heading': acmscss
            }),
            htmlFor: "".concat(item.name).concat(index)
          }, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("div", {
            className: (0, _classnames.default)({
              'acms-admin-flex-1': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement(_Media.Media, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      case 'image':
        {
          return /*#__PURE__*/_react.default.createElement("div", {
            key: index,
            className: (0, _classnames.default)({
              'acms-admin-flex': acmscss,
              'acms-admin-flex-col-max-md': acmscss,
              'acms-admin-flex-row-min-md': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: (0, _classnames.default)({
              'acms-admin-grid-edit-table-heading': acmscss
            }),
            htmlFor: "".concat(item.name).concat(index)
          }, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("div", {
            className: (0, _classnames.default)({
              'acms-admin-flex-1': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement(_ImageInput.ImageInput, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      case 'file':
        {
          return /*#__PURE__*/_react.default.createElement("div", {
            key: index,
            className: (0, _classnames.default)({
              'acms-admin-flex': acmscss,
              'acms-admin-flex-col-max-md': acmscss,
              'acms-admin-flex-row-min-md': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: (0, _classnames.default)({
              'acms-admin-grid-edit-table-heading': acmscss
            }),
            htmlFor: "".concat(item.name).concat(index)
          }, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("div", {
            className: (0, _classnames.default)({
              'acms-admin-flex-1': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement(_FileInput.FileInput, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      case 'richEditor':
        {
          return /*#__PURE__*/_react.default.createElement("div", {
            key: index,
            className: (0, _classnames.default)({
              'acms-admin-flex': acmscss,
              'acms-admin-flex-col-max-md': acmscss,
              'acms-admin-flex-row-min-md': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: (0, _classnames.default)({
              'acms-admin-grid-edit-table-heading': acmscss
            }),
            htmlFor: "".concat(item.name).concat(index)
          }, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("div", {
            className: (0, _classnames.default)({
              'acms-admin-flex-1': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement(_RichEditor.RichEditor, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      case 'table':
        {
          return /*#__PURE__*/_react.default.createElement("div", {
            key: index,
            className: (0, _classnames.default)({
              'acms-admin-flex': acmscss,
              'acms-admin-flex-col-max-md': acmscss,
              'acms-admin-flex-row-min-md': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("label", {
            className: (0, _classnames.default)({
              'acms-admin-grid-edit-table-heading': acmscss
            }),
            htmlFor: "".concat(item.name).concat(index)
          }, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("div", {
            className: (0, _classnames.default)({
              'acms-admin-flex-1': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement(_Table.Table, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      default:
        {
          return null;
        }
    }
  }));
  if (jsValidator && editMode !== 'preview') {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->', renderFormComponent, '<!-- </form> -->');
  }
  ;
  return renderFormComponent;
});
Section.displayName = 'Section';