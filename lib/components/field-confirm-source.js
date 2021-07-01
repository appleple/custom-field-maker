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

var FieldConfirmSource =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(FieldConfirmSource, _Component);

  function FieldConfirmSource(props) {
    (0, _classCallCheck2.default)(this, FieldConfirmSource);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FieldConfirmSource).call(this, props));
  }

  (0, _createClass2.default)(FieldConfirmSource, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          customfield = _this$props.customfield,
          acmscss = _this$props.acmscss;
      return _react.default.createElement("table", {
        className: (0, _classnames.default)({
          'acms-admin-table-admin-edit': acmscss
        })
      }, customfield.map(function (item, index) {
        if (!item.name) {
          return null;
        }

        if (item.type === 'text') {
          return _react.default.createElement("tr", {
            key: index
          }, _react.default.createElement("th", null, item.title), _react.default.createElement("td", null, "{".concat(item.name, "}")));
        } else if (item.type === 'textarea') {
          return _react.default.createElement("tr", {
            key: index
          }, _react.default.createElement("th", null, item.title), _react.default.createElement("td", null, "{".concat(item.name, "}[escape|nl2br]")));
        } else if (item.type === 'select') {
          return _react.default.createElement("tr", {
            key: index
          }, _react.default.createElement("th", null, item.title), _react.default.createElement("td", null, item.option.map(function (option) {
            return _react.default.createElement("div", null, "<!-- BEGIN_IF [{".concat(item.name, "}/eq/").concat(option.value, "] -->"), option.label, '<!-- END_IF -->');
          })));
        } else if (item.type === 'radio') {
          return _react.default.createElement("tr", {
            key: index
          }, _react.default.createElement("th", null, item.title), _react.default.createElement("td", null, item.option.map(function (option) {
            return "<!-- BEGIN_IF [{".concat(item.name, "}/eq/").concat(option.value, "] -->\n              ").concat(option.label, "\n              <!-- END_IF -->");
          })));
        } else if (item.type === 'checkbox') {
          return _react.default.createElement("tr", {
            key: index
          }, _react.default.createElement("th", null, item.title), _react.default.createElement("td", null, "<!-- BEGIN ".concat(item.name, ":loop -->"), "<!-- BEGIN ".concat(item.name, ":glue -->,<!-- END ").concat(item.name, ":glue -->"), item.option.map(function (option) {
            return "<!-- BEGIN_IF [{".concat(item.name, "}/eq/").concat(option.value, "] -->\n              ").concat(option.value, "\n              <!-- END_IF -->");
          }), "<!-- END ".concat(item.name, ":loop -->")));
        } else if (item.type === 'file') {
          var src = '/images/fileicon/';
          var alt = 'file';

          if (item.extension) {
            src += "".concat(item.extension, ".svg");
            alt += item.extension;
          } else {
            src += 'file.svg';
          }

          return _react.default.createElement("tr", {
            key: index
          }, _react.default.createElement("th", null, item.title), _react.default.createElement("td", null, "<!-- BEGIN ".concat(item.name, "@path:veil -->"), _react.default.createElement("a", {
            href: "%{ARCHIVES_DIR}{".concat(item.name, "@path}")
          }, _react.default.createElement("img", {
            src: src,
            width: "64",
            height: "64",
            alt: alt
          })), "<!-- END ".concat(item.name, "@path:veil -->")));
        } else if (item.type === 'image') {
          return _react.default.createElement("tr", {
            key: index
          }, _react.default.createElement("th", null, item.title), _react.default.createElement("td", null, _react.default.createElement("img", {
            src: "%{ARCHIVES_DIR}{".concat(item.name, "@path}"),
            width: "64",
            height: "64",
            alt: "{".concat(item.name, "@alt}")
          })));
        } else if (item.type === 'media') {
          return _react.default.createElement("tr", {
            key: index
          }, _react.default.createElement("th", null, item.title), _react.default.createElement("td", null, "<!-- BEGIN_IF [{".concat(item.name, "@type}/eq/file] -->"), _react.default.createElement("a", {
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
          }), "<!-- BEGIN_IF [{".concat(item.name, "@link}/nem] -->")), "<!-- END_IF -->", "<!-- BEGIN_IF [{".concat(item.name, "@text}/nem] -->"), _react.default.createElement("p", null, "{".concat(item.name, "@text}")), '<!-- END_IF -->', '<!-- END_IF -->'));
        } else if (item.type === 'rich-editor') {
          return _react.default.createElement("tr", {
            key: index
          }, _react.default.createElement("th", null, item.title), _react.default.createElement("td", null, "{".concat(item.name, "@html}[raw]")));
        } else if (item.type === 'lite-editor') {
          return _react.default.createElement("tr", {
            key: index
          }, _react.default.createElement("th", null, item.title), _react.default.createElement("td", null, "{".concat(item.name, "}[raw]")));
        } else if (item.type === 'table') {
          return _react.default.createElement("tr", {
            key: index
          }, _react.default.createElement("th", null, item.title), _react.default.createElement("td", null, "{".concat(item.name, "}[raw]")));
        }
      }));
    }
  }]);
  return FieldConfirmSource;
}(_react.Component);

exports.default = FieldConfirmSource;