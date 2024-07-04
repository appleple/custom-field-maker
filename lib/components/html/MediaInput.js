"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaInput = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _MakerContext = require("../../store/MakerContext");
var _EditorContext = require("../../store/EditorContext");
var _classnames = _interopRequireDefault(require("classnames"));
var ConditionalWrap = function ConditionalWrap(_ref) {
  var condition = _ref.condition,
    wrap = _ref.wrap,
    children = _ref.children;
  return condition ? wrap(children) : children;
};
var MediaInput = exports.MediaInput = function MediaInput(props) {
  var name = props.name,
    mediaType = props.mediaType,
    useDropArea = props.useDropArea,
    dropAreaWidth = props.dropAreaWidth,
    dropAreaHeight = props.dropAreaHeight;
  var _useMakerContext = (0, _MakerContext.useMakerContext)(),
    maker = _useMakerContext.maker;
  var _useEditorContext = (0, _EditorContext.useEditorContext)(),
    editor = _useEditorContext.editor;
  return /*#__PURE__*/_react.default.createElement("td", {
    className: "js-media-field"
  }, !useDropArea && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, "<!-- BEGIN_IF [{".concat(name, "@thumbnail}/nem] -->"), /*#__PURE__*/_react.default.createElement(ConditionalWrap, {
    condition: mediaType === 'file',
    wrap: function wrap(children) {
      return /*#__PURE__*/_react.default.createElement("a", {
        href: "%{MEDIA_ARCHIVES_DIR}{".concat(name, "@path}")
      }, children);
    }
  }, /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    src: "{".concat(name, "@thumbnail}"),
    className: (0, _classnames.default)('js-preview', {
      'acms-admin-img-responsive': maker.acmscss
    }),
    alt: "",
    id: "".concat(name, "-preview")
  }, mediaType === 'file' && {
    style: {
      width: '64px',
      height: 'auto'
    }
  }))), '<!-- ELSE -->', /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    src: ""
  }, mediaType === 'file' ? {
    style: {
      width: '64px',
      height: 'auto',
      display: 'none'
    }
  } : {
    style: {
      display: 'none'
    }
  }, {
    className: (0, _classnames.default)('js-preview', {
      'acms-admin-img-responsive': maker.acmscss
    }),
    id: "".concat(name, "-preview")
  })), '<!-- END_IF -->', /*#__PURE__*/_react.default.createElement("p", {
    className: "js-text acms-admin-text-danger",
    style: {
      display: 'none'
    }
  }, "\u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u306E\u305F\u3081\u633F\u5165\u3067\u304D\u307E\u305B\u3093\u3002")), /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-margin-top-mini"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: (0, _classnames.default)('js-insert', {
      'acms-admin-btn': maker.acmscss
    }),
    "data-type": mediaType ? mediaType : 'all'
  }, "\u30E1\u30C7\u30A3\u30A2\u3092\u9078\u629E"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: (0, _classnames.default)('js-insert', {
      'acms-admin-btn': maker.acmscss
    }),
    "data-type": mediaType ? mediaType : 'all',
    "data-mode": "upload"
  }, "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: (0, _classnames.default)('js-edit', {
      'acms-admin-btn': maker.acmscss
    })
  }, "\u30E1\u30C7\u30A3\u30A2\u3092\u7DE8\u96C6"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: (0, _classnames.default)('js-remove', {
      'acms-admin-btn acms-admin-btn-danger': maker.acmscss
    })
  }, "\u524A\u9664"))), useDropArea && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "js-droparea",
    "data-thumbnail": "{".concat(name, "@thumbnail}"),
    "data-type": mediaType ? mediaType : 'all',
    "data-thumbnail-type": "{".concat(name, "@type}"),
    "data-width": "".concat(dropAreaWidth, "px"),
    "data-height": "".concat(dropAreaHeight, "px")
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "js-text acms-admin-text-danger",
    style: {
      display: 'none'
    }
  }, "\u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u306E\u305F\u3081\u633F\u5165\u3067\u304D\u307E\u305B\u3093\u3002"), /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-margin-top-mini"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: (0, _classnames.default)('js-insert', {
      'acms-admin-btn': maker.acmscss
    }),
    "data-type": mediaType ? mediaType : 'all'
  }, "\u30E1\u30C7\u30A3\u30A2\u3092\u9078\u629E"))), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: name,
    value: editor.editMode === 'preview' ? '' : "{".concat(name, "}"),
    className: "js-value"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "field[]",
    value: name
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    name: "".concat(name, ":extension"),
    value: "media"
  }));
};