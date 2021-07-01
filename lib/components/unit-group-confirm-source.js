"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var ConditionalWrap = function ConditionalWrap(_ref) {
  var condition = _ref.condition,
      wrap = _ref.wrap,
      children = _ref.children;
  return condition ? wrap(children) : children;
};

var UnitGroupConfirmSource =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(UnitGroupConfirmSource, _Component);

  function UnitGroupConfirmSource() {
    (0, _classCallCheck2.default)(this, UnitGroupConfirmSource);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(UnitGroupConfirmSource).apply(this, arguments));
  }

  (0, _createClass2.default)(UnitGroupConfirmSource, [{
    key: "wrapTable",
    value: function wrapTable(children, title) {
      var direction = this.props.direction;
      return _react.default.createElement(ConditionalWrap, {
        condition: direction === 'vertical',
        wrap: function wrap(child) {
          return _react.default.createElement("tr", null, _react.default.createElement("th", null, title), child);
        }
      }, children);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          unitGroupTitle = _this$props.unitGroupTitle,
          unitGroupName = _this$props.unitGroupName,
          unitgroupitems = _this$props.unitgroupitems,
          acmscss = _this$props.acmscss,
          direction = _this$props.direction;
      return _react.default.createElement(_react.Fragment, null, unitGroupTitle && _react.default.createElement("h2", {
        className: (0, _classnames.default)({
          'acms-admin-admin-title2': acmscss
        })
      }, unitGroupTitle), _react.default.createElement("table", {
        className: (0, _classnames.default)({
          'adminTable acms-admin-table-admin-edit acms-admin-table-admin-edit-bordered': acmscss
        })
      }, direction === 'horizontal' && _react.default.createElement("thead", {
        className: (0, _classnames.default)({
          'acms-admin-hide-sp': acmscss
        })
      }, _react.default.createElement("tr", null, _react.default.createElement(_react.Fragment, null, unitgroupitems.map(function (item) {
        return _react.default.createElement("th", {
          className: (0, _classnames.default)({
            'acms-admin-table-left': acmscss
          })
        }, item.title);
      })))), _react.default.createElement("tbody", null, "<!-- BEGIN ".concat(unitGroupName, ":loop -->"), _react.default.createElement("tr", null, _react.default.createElement(ConditionalWrap, {
        condition: direction === 'vertical',
        wrap: function wrap(children) {
          return _react.default.createElement("td", null, _react.default.createElement("table", null, children));
        }
      }, unitgroupitems.map(function (item) {
        if (item.type === 'text') {
          return _this.wrapTable(_react.default.createElement("td", null, "{".concat(item.name, "}")), item.title);
        } else if (item.type === 'textarea') {
          return _this.wrapTable(_react.default.createElement("td", null, "{".concat(item.name, "}[escape|nl2br]")), item.title);
        } else if (item.type === 'select') {
          return _this.wrapTable(_react.default.createElement("td", null, item.option.map(function (option) {
            if (!option.label) {
              return null;
            }

            return _react.default.createElement("div", null, "<!-- BEGIN_IF [{".concat(item.name, "}/eq/").concat(option.value, "] -->"), option.label, '<!-- END_IF -->');
          })), item.title);
        } else if (item.type === 'radio') {
          return _this.wrapTable(_react.default.createElement("td", null, item.option.map(function (option) {
            if (!option.label) {
              return null;
            }

            return "<!-- BEGIN_IF [{".concat(item.name, "}/eq/").concat(option.value, "] -->\n                      ").concat(option.label, "\n                      <!-- END_IF -->");
          })), item.title);
        } else if (item.type === 'file') {
          var src = '/images/fileicon/';
          var alt = 'file';

          if (item.extension) {
            src += "".concat(item.extension, ".svg");
            alt += item.extension;
          } else {
            src += 'file.svg';
          }

          return _this.wrapTable(_react.default.createElement("td", null, "<!-- BEGIN ".concat(item.name, "@path:veil -->"), _react.default.createElement("a", {
            href: "%{ARCHIVES_DIR}{".concat(item.name, "@path}")
          }, _react.default.createElement("img", {
            src: src,
            width: "64",
            height: "64",
            alt: alt
          })), "<!-- END ".concat(item.name, "@path:veil -->")), item.title);
        } else if (item.type === 'image') {
          return _this.wrapTable(_react.default.createElement("td", null, "<!-- BEGIN ".concat(item.name, "@path:veil -->"), _react.default.createElement("img", {
            src: "%{ARCHIVES_DIR}{".concat(item.name, "@path}"),
            width: "64",
            height: "64",
            alt: "{".concat(item.name, "@alt}")
          }), "<!-- END ".concat(item.name, "@path:veil -->")), item.title);
        } else if (item.type === 'media') {
          return _this.wrapTable(_react.default.createElement("td", null, "<!-- BEGIN_IF [{".concat(item.name, "@type}/eq/file] -->"), _react.default.createElement("a", {
            href: "{".concat(item.name, "@path}")
          }, _react.default.createElement("img", {
            alt: "{".concat(item.name, "@alt}"),
            src: "{".concat(item.name, "@thumbnail}"),
            style: {
              width: '64px',
              height: 'auto'
            }
          })), "<!-- END_IF -->", "<!-- BEGIN_IF [{".concat(item.name, "@type}/eq/image] -->"), "<!-- BEGIN_IF [{".concat(item.name, "@link}/nem] -->"), _react.default.createElement("a", {
            href: "{".concat(item.name, "@link}")
          }, "<!-- END_IF -->", item.useFocusImage && _react.default.createElement("div", {
            style: {
              width: "".concat(item.focusImageWidth, "px"),
              height: "".concat(item.focusImageHeight, "px")
            }
          }, _react.default.createElement("img", {
            className: "js-focused-image",
            "data-focus-x": "{".concat(item.name, "@focalX}"),
            "data-focus-y": "{".concat(item.name, "@focalY}"),
            alt: "{".concat(item.name, "@alt}"),
            src: "%{MEDIA_ARCHIVES_DIR}{".concat(item.name, "@path}[resizeImg(").concat(item.focusImageWidth, ")]")
          })), !item.useFocusImage && _react.default.createElement("img", {
            alt: "{".concat(item.name, "@alt}"),
            src: "%{MEDIA_ARCHIVES_DIR}{".concat(item.name, "@path}")
          }), "<!-- BEGIN_IF [{".concat(item.name, "@link}/nem] -->")), "<!-- END_IF -->", "<!-- BEGIN_IF [{".concat(item.name, "@text}/nem] -->"), _react.default.createElement("p", null, "{".concat(item.name, "@text}")), '<!-- END_IF -->', '<!-- END_IF -->'), item.title);
        } else if (item.type === 'lite-editor') {
          return _this.wrapTable(_react.default.createElement("td", null, "{".concat(item.name, "}[raw]")), item.name);
        } else if (item.type === 'rich-editor') {
          return _this.wrapTable(_react.default.createElement("td", null, "{".concat(item.name, "@html}[raw]")), item.name);
        } else if (item.type === 'table') {
          return _this.wrapTable(_react.default.createElement("td", null, "{".concat(item.name, "}[raw]")), item.name);
        }
      }))), "<!-- END ".concat(unitGroupName, ":loop -->"))));
    }
  }]);
  return UnitGroupConfirmSource;
}(_react.Component);

exports.default = UnitGroupConfirmSource;