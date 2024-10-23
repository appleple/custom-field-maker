"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableLayout = TableLayout;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
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
function TableLayout() {
  const {
    state: {
      customfield
    },
    preview: {
      jsValidator,
      acmscss
    }
  } = (0, _MakerContext.useMakerContext)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, jsValidator && '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->', /*#__PURE__*/_react.default.createElement("table", {
    className: (0, _classnames.default)({
      'acms-admin-table-admin-edit': acmscss
    })
  }, customfield.length > 0 && customfield.map((item, index) => {
    switch (item.type) {
      case 'text':
      case 'tel':
      case 'number':
      case 'email':
      case 'password':
        {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_TextInput.TextInput, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      case 'textarea':
      case 'liteEditor':
        {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Textarea.Textarea, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      case 'selectbox':
        {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Selectbox.Selectbox, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      case 'checkbox':
        {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
            item: item
          })));
        }
      case 'radioButton':
        {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_RadioButton.RadioButton, {
            item: item
          })));
        }
      case 'media':
        {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Media.Media, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      case 'image':
        {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_ImageInput.ImageInput, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      case 'file':
        {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_FileInput.FileInput, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      case 'richEditor':
        {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_RichEditor.RichEditor, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      case 'table':
        {
          return /*#__PURE__*/_react.default.createElement("tr", {
            key: index
          }, /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_Heading.Heading, {
            item: item
          })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Table.Table, {
            item: item,
            id: "".concat(item.name).concat(index)
          })));
        }
      default:
        {
          return null;
        }
    }
  })), jsValidator && '<!-- </form> -->');
}