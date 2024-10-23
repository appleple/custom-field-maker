"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnitGroupTableLayoutConfirm = UnitGroupTableLayoutConfirm;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _MakerContext = require("../../store/MakerContext");
var _WrapTable = require("../html/WrapTable");
function UnitGroupTableLayoutConfirm() {
  const {
    state: {
      unitgroup
    },
    preview: {
      acmscss,
      direction
    }
  } = (0, _MakerContext.useMakerContext)();
  const ConditionalWrap = _ref => {
    let {
      condition,
      wrap,
      children
    } = _ref;
    return condition ? wrap(children) : children;
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, unitgroup.title && /*#__PURE__*/_react.default.createElement("h2", {
    className: (0, _classnames.default)({
      'acms-admin-admin-title2': acmscss
    })
  }, unitgroup.title), /*#__PURE__*/_react.default.createElement("table", {
    className: (0, _classnames.default)({
      'adminTable acms-admin-table-admin-edit': acmscss
    })
  }, direction === 'horizontal' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, unitgroup && /*#__PURE__*/_react.default.createElement("thead", {
    className: (0, _classnames.default)({
      'acms-admin-hide-sp': acmscss
    })
  }, /*#__PURE__*/_react.default.createElement("tr", null, unitgroup.items.map((item, index) => /*#__PURE__*/_react.default.createElement("th", {
    key: index,
    className: (0, _classnames.default)({
      'acms-admin-table-left': acmscss
    })
  }, item.title))))), /*#__PURE__*/_react.default.createElement("tbody", null, "<!-- BEGIN ".concat(unitgroup.name, ":loop -->"), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement(ConditionalWrap, {
    condition: direction === 'vertical',
    wrap: children => /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("table", null, children))
  }, unitgroup.items.map((item, index) => {
    if (item.type === 'text' || item.type === 'tel' || item.type === 'number' || item.type === 'email' || item.type === 'password') {
      return /*#__PURE__*/_react.default.createElement(_WrapTable.WrapTable, {
        key: index,
        title: item.title
      }, /*#__PURE__*/_react.default.createElement("td", null, "{".concat(item.name, "}")));
    } else if (item.type === 'textarea') {
      return /*#__PURE__*/_react.default.createElement(_WrapTable.WrapTable, {
        key: index,
        title: item.title
      }, /*#__PURE__*/_react.default.createElement("td", null, "{".concat(item.name, "}[escape|nl2br]")));
    } else if (item.type === 'selectbox') {
      return /*#__PURE__*/_react.default.createElement(_WrapTable.WrapTable, {
        key: index,
        title: item.title
      }, /*#__PURE__*/_react.default.createElement("td", null, item.option.map((option, optionIndex) => {
        if (!option.label) {
          return null;
        }
        return /*#__PURE__*/_react.default.createElement("div", {
          key: optionIndex
        }, "<!-- BEGIN_IF [{".concat(item.name, "}/eq/").concat(option.value, "] -->"), option.label, '<!-- END_IF -->');
      })));
    } else if (item.type === 'radioButton') {
      return /*#__PURE__*/_react.default.createElement(_WrapTable.WrapTable, {
        key: index,
        title: item.title
      }, /*#__PURE__*/_react.default.createElement("td", null, item.option.map((option, optionIndex) => {
        if (!option.label) {
          return null;
        }
        return /*#__PURE__*/_react.default.createElement("div", {
          key: optionIndex
        }, "<!-- BEGIN_IF [{".concat(item.name, "}/eq/").concat(option.value, "] -->"), option.label, '<!-- END_IF -->');
      })));
    } else if (item.type === 'file') {
      let src = '/images/fileicon/';
      let alt = 'file';
      if (item.extension) {
        src += "".concat(item.extension, ".svg");
        alt += item.extension;
      } else {
        src += 'file.svg';
      }
      return /*#__PURE__*/_react.default.createElement(_WrapTable.WrapTable, {
        key: index,
        title: item.title
      }, /*#__PURE__*/_react.default.createElement("td", null, "<!-- BEGIN ".concat(item.name, "@path:veil -->"), /*#__PURE__*/_react.default.createElement("a", {
        href: "%{ARCHIVES_DIR}{".concat(item.name, "@path}")
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: src,
        width: "64",
        height: "64",
        alt: alt
      })), "<!-- END ".concat(item.name, "@path:veil -->")));
    } else if (item.type === 'image') {
      return /*#__PURE__*/_react.default.createElement(_WrapTable.WrapTable, {
        key: index,
        title: item.title
      }, /*#__PURE__*/_react.default.createElement("td", null, "<!-- BEGIN ".concat(item.name, "@path:veil -->"), /*#__PURE__*/_react.default.createElement("img", {
        src: "%{ARCHIVES_DIR}{".concat(item.name, "@path}"),
        className: (0, _classnames.default)({
          'acms-admin-img-responsive': acmscss
        }),
        alt: "{".concat(item.name, "@alt}")
      }), "<!-- END ".concat(item.name, "@path:veil -->")));
    } else if (item.type === 'media') {
      return /*#__PURE__*/_react.default.createElement(_WrapTable.WrapTable, {
        key: index,
        title: item.title
      }, /*#__PURE__*/_react.default.createElement("td", null, "<!-- BEGIN_IF [{".concat(item.name, "@type}/eq/file] -->"), /*#__PURE__*/_react.default.createElement("a", {
        href: "{".concat(item.name, "@path}")
      }, /*#__PURE__*/_react.default.createElement("img", {
        alt: "{".concat(item.name, "@alt}"),
        src: "{".concat(item.name, "@thumbnail}"),
        style: {
          width: '64px',
          height: 'auto'
        }
      })), "<!-- END_IF -->", "<!-- BEGIN_IF [{".concat(item.name, "@type}/eq/image] -->"), "<!-- BEGIN_IF [{".concat(item.name, "@link}/nem] -->"), /*#__PURE__*/_react.default.createElement("a", {
        href: "{".concat(item.name, "@link}")
      }, "<!-- END_IF -->", item.useFocusImage && /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: "".concat(item.focusImageWidth, "px"),
          height: "".concat(item.focusImageHeight, "px")
        }
      }, /*#__PURE__*/_react.default.createElement("img", {
        className: "js-focused-image",
        "data-focus-x": "{".concat(item.name, "@focalX}"),
        "data-focus-y": "{".concat(item.name, "@focalY}"),
        alt: "{".concat(item.name, "@alt}"),
        src: "%{MEDIA_ARCHIVES_DIR}{".concat(item.name, "@path}[resizeImg(").concat(item.focusImageWidth, ")]")
      })), !item.useFocusImage && /*#__PURE__*/_react.default.createElement("img", {
        alt: "{".concat(item.name, "@alt}"),
        src: "%{MEDIA_ARCHIVES_DIR}{".concat(item.name, "@path}")
      }), "<!-- BEGIN_IF [{".concat(item.name, "@link}/nem] -->")), "<!-- END_IF -->", "<!-- BEGIN_IF [{".concat(item.name, "@text}/nem] -->"), /*#__PURE__*/_react.default.createElement("p", null, "{".concat(item.name, "@text}")), '<!-- END_IF -->', '<!-- END_IF -->'));
    } else if (item.type === 'liteEditor') {
      return /*#__PURE__*/_react.default.createElement(_WrapTable.WrapTable, {
        key: index,
        title: item.title
      }, /*#__PURE__*/_react.default.createElement("td", null, "{".concat(item.name, "}[raw]")));
    } else if (item.type === 'richEditor') {
      return /*#__PURE__*/_react.default.createElement(_WrapTable.WrapTable, {
        key: index,
        title: item.title
      }, /*#__PURE__*/_react.default.createElement("td", null, "{".concat(item.name, "@html}[raw]")));
    } else if (item.type === 'table') {
      return /*#__PURE__*/_react.default.createElement(_WrapTable.WrapTable, {
        key: index,
        title: item.title
      }, /*#__PURE__*/_react.default.createElement("td", null, "{".concat(item.name, "}[raw]")));
    }
    return null;
  }))), "<!-- END ".concat(unitgroup.name, ":loop -->"))));
}