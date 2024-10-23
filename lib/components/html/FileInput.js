"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileInput = FileInput;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _MakerContext = require("../../store/MakerContext");
var _OptionValidator = require("./OptionValidator");
function FileInput(props) {
  const {
    item,
    id,
    isValue = true
  } = props;
  const {
    preview: {
      acmscss,
      editMode,
      mode
    }
  } = (0, _MakerContext.useMakerContext)();
  let src = '/images/fileicon/';
  let alt = 'file';
  if (item.extension) {
    src += "".concat(item.extension, ".svg");
    alt += item.extension;
  } else {
    src += 'file.svg';
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, mode === 'customfield' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, editMode === 'preview' ? null : "<!-- BEGIN ".concat(item.name, "@path:veil -->"), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "@old"),
    value: "{".concat(item.name, "@path}")
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "@secret"),
    value: "{".concat(item.name, "@secret}")
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "@fileSize"),
    value: "{".concat(item.name, "@fileSize}")
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "input-checkbox-".concat(item.name, "@edit"),
    className: (0, _classnames.default)({
      'acms-admin-form-checkbox': acmscss
    })
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "".concat(item.name, "@edit"),
    value: "delete",
    id: "input-checkbox-".concat(item.name, "@edit")
  }), acmscss && /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-checkbox"
  }), "\u524A\u9664"), /*#__PURE__*/_react.default.createElement("a", {
    href: "%{ARCHIVES_DIR}{".concat(item.name, "@path}")
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    width: "64",
    height: "64",
    alt: alt
  })), editMode === 'preview' ? null : "<!-- END ".concat(item.name, "@path:veil -->"), /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    name: item.name,
    id: id
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "field[]",
    value: item.name
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "@baseName"),
    value: "{".concat(item.name, "@baseName}")
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, ":extension"),
    value: "file"
  }), item.extension && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "@extension"),
    value: item.extension
  }), item.fileNameMethod === 'random' && item.fileName && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "@filename"),
    value: ""
  }), item.fileNameMethod === 'fix' && item.fileName && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "@filename"),
    value: "".concat(item.fileName)
  }), item.fileNameMethod === 'asis' && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "@filename"),
    value: "@rawfilename"
  }), /*#__PURE__*/_react.default.createElement(_OptionValidator.OptionValidator, {
    item: item
  })), mode === 'fieldgroup' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isValue && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, editMode === 'preview' ? null : "<!-- BEGIN_IF [{".concat(item.name, "@path}/nem] -->"), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)({
      'acms-admin-form-checkbox': acmscss
    })
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "".concat(item.name, "@edit[]"),
    value: "delete",
    id: "input-checkbox-".concat(item.name, "{i}@edit[]")
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "input-checkbox-".concat(item.name, "{i}@edit[]")
  }, acmscss && /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-checkbox"
  }), " \u524A\u9664")), /*#__PURE__*/_react.default.createElement("a", {
    href: "%{ARCHIVES_DIR}{".concat(item.name, "@path}")
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    width: "64",
    height: "64",
    alt: alt
  })), editMode === 'preview' ? null : '<!-- END_IF -->', /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "@old[]"),
    value: "{".concat(item.name, "@path}")
  })), item.extension && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "@extension[]"),
    value: item.extension
  }), item.fileNameMethod === 'random' && item.fileName && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "@filename[]"),
    value: ""
  }), item.fileNameMethod === 'fix' && item.fileName && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "@filename[]"),
    value: item.fileName
  }), item.fileNameMethod === 'asis' && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "@filename[]"),
    value: "@rawfilename"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    name: "".concat(item.name, "[]")
  })), mode === 'customunit' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, editMode === 'preview' ? null : "<!-- BEGIN_IF [{".concat(item.name, "@path}/nem] -->"), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "{id}@old"),
    value: "{".concat(item.name, "@path}")
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "{id}@secret"),
    value: "{".concat(item.name, "@secret}")
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "{id}@fileSize"),
    value: "{".concat(item.name, "@fileSize}")
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "input-checkbox-".concat(item.name, "{id}@edit"),
    className: (0, _classnames.default)({
      'acms-admin-form-checkbox': acmscss
    })
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "".concat(item.name, "{id}@edit"),
    value: "delete",
    id: "input-checkbox-".concat(item.name, "{id}@edit")
  }), acmscss && /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-checkbox"
  }), "\u524A\u9664"), /*#__PURE__*/_react.default.createElement("a", {
    href: "%{ARCHIVES_DIR}{".concat(item.name, "@path}")
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    width: "64",
    height: "64",
    alt: alt
  })), editMode === 'preview' ? null : '<!-- END_IF -->', /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    name: "".concat(item.name, "{id}")
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "unit{id}[]",
    value: "".concat(item.name, "{id}")
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "{id}@baseName"),
    value: "{".concat(item.name, "@baseName}")
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "{id}:extension"),
    value: "file"
  }), item.extension && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "{id}@extension"),
    value: item.extension
  }), item.fileNameMethod === 'random' && item.fileName && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "{id}@filename"),
    value: ""
  }), item.fileNameMethod === 'fix' && item.fileName && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "{id}@filename"),
    value: item.fileName
  }), item.fileNameMethod === 'asis' && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "{id}@filename"),
    value: "@rawfilename"
  }), /*#__PURE__*/_react.default.createElement(_OptionValidator.OptionValidator, {
    item: item
  })), mode === 'unitgroup' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isValue && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, editMode === 'preview' ? null : "<!-- BEGIN_IF [{".concat(item.name, "@path}/nem] -->"), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)({
      'acms-admin-form-checkbox': acmscss
    })
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    name: "".concat(item.name, "{id}@edit[]"),
    value: "delete",
    id: "input-checkbox-".concat(item.name, "{id}@edit[]")
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "input-checkbox-".concat(item.name, "{id}@edit[]")
  }, acmscss && /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-checkbox"
  }), " \u524A\u9664")), /*#__PURE__*/_react.default.createElement("a", {
    href: "%{ARCHIVES_DIR}{".concat(item.name, "@path}")
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    width: "64",
    height: "64",
    alt: alt
  })), editMode === 'preview' ? null : '<!-- END_IF -->', /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "{id}@old[]"),
    value: "{".concat(item.name, "@path}")
  })), /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    name: "".concat(item.name, "{id}[]")
  }), !isValue && item.extension && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "{id}@extension[]"),
    value: "{extension}"
  }), item.fileNameMethod === 'random' && item.fileName && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "{id}@filename[]"),
    value: ""
  }), item.fileNameMethod === 'fix' && item.fileName && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "{id}@filename[]"),
    value: item.fileName
  }), item.fileNameMethod === 'asis' && /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(item.name, "{id}@filename[]"),
    value: "@rawfilename"
  })));
}