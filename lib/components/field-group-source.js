"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var ConditionalWrap = function ConditionalWrap(_ref) {
  var condition = _ref.condition,
    wrap = _ref.wrap,
    children = _ref.children;
  return condition ? wrap(children) : children;
};
var FieldGroupSource = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(FieldGroupSource, _Component);
  var _super = _createSuper(FieldGroupSource);
  function FieldGroupSource(props) {
    (0, _classCallCheck2.default)(this, FieldGroupSource);
    return _super.call(this, props);
  }
  (0, _createClass2.default)(FieldGroupSource, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.ACMS && ACMS.dispatchEvent) {
        ACMS.dispatchEvent('acmsCustomFieldMakerPreview', this.table, {
          item: this.table
        });
      }
    }
  }, {
    key: "renderValidator",
    value: function renderValidator(item, acmscss) {
      var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _this$props = this.props,
        preview = _this$props.preview,
        jsValidator = _this$props.jsValidator;
      if (!item.openValidator) {
        return null;
      }
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, item.validator.map(function (validator) {
        var name = item.type === 'file' || item.type === 'image' ? "".concat(item.name, "@path") : item.name;
        var classSuffix = bottom ? '1' : "{".concat(name, ":v#").concat(validator.option, "}");
        return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, !jsValidator && !bottom && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, validator.message && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, preview ? null : "<!-- BEGIN ".concat(name, ":validator#").concat(validator.option, " -->"), /*#__PURE__*/_react.default.createElement("p", {
          className: (0, _classnames.default)({
            'acms-admin-text-error': acmscss
          })
        }, validator.message), preview ? null : "<!-- END ".concat(name, ":validator#").concat(validator.option, " -->"))), jsValidator && /*#__PURE__*/_react.default.createElement("div", {
          "data-validator-label": "".concat(name, "-v-").concat(validator.option),
          className: "validator-result-".concat(classSuffix)
        }, /*#__PURE__*/_react.default.createElement("p", {
          className: "error-text"
        }, /*#__PURE__*/_react.default.createElement("span", {
          className: "acms-admin-icon acms-admin-icon-attention"
        }), validator.message)));
      }));
    }
  }, {
    key: "wrapTable",
    value: function wrapTable(children, title) {
      var direction = this.props.direction;
      return /*#__PURE__*/_react.default.createElement(ConditionalWrap, {
        condition: direction === 'vertical',
        wrap: function wrap(child) {
          return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, title), child);
        }
      }, children);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props2 = this.props,
        groupName = _this$props2.groupName,
        groupTitle = _this$props2.groupTitle,
        acmscss = _this$props2.acmscss,
        groupitems = _this$props2.groupitems,
        preview = _this$props2.preview,
        direction = _this$props2.direction;
      var groupLength = groupitems.length;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, groupTitle && /*#__PURE__*/_react.default.createElement("h2", {
        className: (0, _classnames.default)({
          'acms-admin-admin-title2': acmscss
        })
      }, groupTitle), groupName && /*#__PURE__*/_react.default.createElement("table", {
        className: (0, _classnames.default)('js-fieldgroup-sortable', {
          'adminTable acms-admin-table-admin-edit': acmscss
        }),
        ref: function ref(table) {
          return _this.table = table;
        }
      }, /*#__PURE__*/_react.default.createElement("thead", {
        className: (0, _classnames.default)({
          'acms-admin-hide-sp': acmscss
        })
      }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
        className: (0, _classnames.default)({
          'acms-admin-table-left acms-admin-admin-config-table-item-handle': acmscss
        })
      }, "\xA0"), direction === 'horizontal' && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, groupitems.map(function (item) {
        return /*#__PURE__*/_react.default.createElement("th", {
          className: (0, _classnames.default)({
            'acms-admin-table-left': acmscss
          })
        }, item.title, item.tooltip && /*#__PURE__*/_react.default.createElement("i", {
          className: "acms-admin-icon-tooltip js-acms-tooltip",
          "data-acms-tooltip": item.tooltip
        }));
      })), direction === 'vertical' && /*#__PURE__*/_react.default.createElement("th", null), /*#__PURE__*/_react.default.createElement("th", {
        className: (0, _classnames.default)({
          'acms-admin-table-left acms-admin-admin-config-table-action': acmscss
        })
      }, "\u524A\u9664"))), /*#__PURE__*/_react.default.createElement("tbody", null, preview ? null : "<!-- BEGIN ".concat(groupName, ":loop -->"), /*#__PURE__*/_react.default.createElement("tr", {
        className: "sortable-item"
      }, /*#__PURE__*/_react.default.createElement("td", {
        className: "item-handle acms-admin-table-nowrap"
      }, acmscss && /*#__PURE__*/_react.default.createElement("i", {
        className: "acms-admin-icon-sort"
      })), /*#__PURE__*/_react.default.createElement(ConditionalWrap, {
        condition: direction === 'vertical',
        wrap: function wrap(children) {
          return /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("table", null, children));
        }
      }, groupitems.map(function (item) {
        if (item.type === 'text') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("input", {
            type: "text",
            name: "".concat(item.name, "[]"),
            value: "{".concat(item.name, "}"),
            className: (0, _classnames.default)({
              'acms-admin-form-width-full': acmscss
            })
          }), _this.renderValidator(item, acmscss, false)), item.title);
        } else if (item.type === 'textarea') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("textarea", {
            name: "".concat(item.name, "[]"),
            className: (0, _classnames.default)({
              'acms-admin-form-width-full': acmscss
            })
          }, "{".concat(item.name, "}")), _this.renderValidator(item, acmscss, false)), item.title);
        } else if (item.type === 'select') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("select", {
            name: "".concat(item.name, "[]"),
            className: (0, _classnames.default)({
              'acms-admin-form-width-full': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("option", {
            value: ""
          }), item.option.map(function (option) {
            if (!option.label) {
              return null;
            }
            return /*#__PURE__*/_react.default.createElement("option", {
              value: option.value,
              "data-tmp": "{".concat(item.name, ":selected#").concat(option.value, "}")
            }, option.label);
          })), _this.renderValidator(item, acmscss, false)), item.title);
        } else if (item.type === 'radio') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, item.option.map(function (option) {
            if (!option.label) {
              return null;
            }
            return /*#__PURE__*/_react.default.createElement("div", {
              className: (0, _classnames.default)({
                'acms-admin-form-radio': acmscss
              })
            }, /*#__PURE__*/_react.default.createElement("input", {
              type: "radio",
              name: "".concat(item.name, "[]"),
              value: option.value,
              "data-tmp": "{".concat(item.name, ":checked#").concat(option.value, "}"),
              id: "input-radio-".concat(item.name, "-").concat(option.value)
            }), /*#__PURE__*/_react.default.createElement("label", {
              htmlFor: "input-radio-".concat(item.name, "-").concat(option.value)
            }, acmscss && /*#__PURE__*/_react.default.createElement("i", {
              className: "acms-admin-ico-radio"
            }), option.label));
          }), _this.renderValidator(item, acmscss, false)), item.title);
        } else if (item.type === 'file') {
          var src = '/images/fileicon/';
          var alt = 'file';
          if (item.extension) {
            src += "".concat(item.extension, ".svg");
            alt += item.extension;
          } else {
            src += 'file.svg';
          }
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, preview ? null : "<!-- BEGIN_IF [{".concat(item.name, "@path}/nem] -->"), /*#__PURE__*/_react.default.createElement("div", {
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
          })), preview ? null : '<!-- END_IF -->', /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            name: "".concat(item.name, "@old[]"),
            value: "{".concat(item.name, "@path}")
          }), item.extension && /*#__PURE__*/_react.default.createElement("input", {
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
          }), _this.renderValidator(item, acmscss, false)), item.title);
        } else if (item.type === 'image') {
          var style = {};
          if (item.normalSize) {
            style.maxWidth = "".concat(item.normalSize, "px");
          }
          var hiddenStyle = Object.assign({}, style, {
            display: 'none'
          });
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", {
            className: (0, _classnames.default)({
              'js-img_resize_cf': item.resize
            })
          }, preview ? null : "<!-- BEGIN_IF [{".concat(item.name, "@path}/nem] -->"), /*#__PURE__*/_react.default.createElement("img", {
            src: "%{ARCHIVES_DIR}{".concat(item.name, "@path}"),
            className: (0, _classnames.default)({
              'js-img_resize_preview': item.resize
            }),
            style: style,
            alt: "{".concat(item.name, "@alt}")
          }), /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            name: "".concat(item.name, "@old[]"),
            value: "{".concat(item.name, "@path}")
          }), /*#__PURE__*/_react.default.createElement("label", {
            htmlFor: "input-checkbox-".concat(item.name, "@edit[]"),
            className: (0, _classnames.default)({
              'acms-admin-form-checkbox': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("input", {
            type: "checkbox",
            name: "".concat(item.name, "@edit[]"),
            value: "delete",
            id: "input-checkbox-".concat(item.name, "@edit[]")
          }), acmscss && /*#__PURE__*/_react.default.createElement("i", {
            className: "acms-admin-ico-checkbox"
          }), "\u524A\u9664"), preview ? null : '<!-- ELSE -->', /*#__PURE__*/_react.default.createElement("img", {
            src: "%{ARCHIVES_DIR}{".concat(item.name, "@path}"),
            className: (0, _classnames.default)({
              'js-img_resize_preview': item.resize
            }),
            style: hiddenStyle
          }), preview ? null : '<!-- END_IF -->', /*#__PURE__*/_react.default.createElement("input", {
            type: "file",
            name: "".concat(item.name, "[]"),
            className: (0, _classnames.default)({
              'js-img_resize_input': item.resize
            })
          }), /*#__PURE__*/_react.default.createElement("br", null), item.alt && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, "\u4EE3\u66FF\u30C6\u30AD\u30B9\u30C8:", /*#__PURE__*/_react.default.createElement("input", {
            type: "text",
            name: "".concat(item.name, "@alt[]"),
            value: "{".concat(item.name, "@alt}"),
            size: "40"
          })), item.normalSize && /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            name: "".concat(item.name, "@").concat(item.normal, "[]"),
            value: item.normalSize
          }), item.tinySize && /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            name: "".concat(item.name, "@").concat(item.tiny, "[]"),
            value: item.tinySize
          }), item.largeSize && /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            name: "".concat(item.name, "@").concat(item.large, "[]"),
            value: item.largeSize
          }), item.square && /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            name: "".concat(item.name, "@").concat(item.square, "[]"),
            value: item.squareSize
          }), _this.renderValidator(item, acmscss, false)), item.title);
        } else if (item.type === 'media') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", {
            className: "js-media-field"
          }, !item.useDropArea && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, "<!-- BEGIN_IF [{".concat(item.name, "@thumbnail}/nem] -->"), /*#__PURE__*/_react.default.createElement(ConditionalWrap, {
            condition: item.mediaType === 'file',
            wrap: function wrap(children) {
              return /*#__PURE__*/_react.default.createElement("a", {
                href: "%{MEDIA_ARCHIVES_DIR}{".concat(item.name, "@path}")
              }, children);
            }
          }, /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
            src: "{".concat(item.name, "@thumbnail}"),
            className: (0, _classnames.default)('js-preview', {
              'acms-admin-img-responsive': acmscss
            }),
            alt: ""
          }, item.mediaType === 'file' && {
            style: {
              width: '64px',
              height: 'auto'
            }
          }))), '<!-- ELSE -->', /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
            src: ""
          }, item.mediaType === 'file' ? {
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
              'acms-admin-img-responsive': acmscss
            })
          })), '<!-- END_IF -->', /*#__PURE__*/_react.default.createElement("p", {
            className: "js-text acms-admin-text-danger",
            style: {
              display: 'none'
            }
          }, "\u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u306E\u305F\u3081\u633F\u5165\u3067\u304D\u307E\u305B\u3093\u3002")), /*#__PURE__*/_react.default.createElement("div", {
            className: (0, _classnames.default)({
              'acms-admin-margin-top-mini': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("button", {
            type: "button",
            className: (0, _classnames.default)('js-insert', {
              'acms-admin-btn': acmscss
            }),
            "data-type": item.mediaType ? item.mediaType : 'all'
          }, "\u30E1\u30C7\u30A3\u30A2\u3092\u9078\u629E"), /*#__PURE__*/_react.default.createElement("button", {
            type: "button",
            className: (0, _classnames.default)('js-insert', {
              'acms-admin-btn': acmscss
            }),
            "data-type": item.mediaType ? item.mediaType : 'all',
            "data-mode": "upload"
          }, "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"), /*#__PURE__*/_react.default.createElement("button", {
            type: "button",
            className: (0, _classnames.default)('js-edit', {
              'acms-admin-btn': acmscss
            })
          }, "\u30E1\u30C7\u30A3\u30A2\u3092\u7DE8\u96C6"), /*#__PURE__*/_react.default.createElement("button", {
            type: "button",
            className: (0, _classnames.default)('js-remove', {
              'acms-admin-btn acms-admin-btn-danger': acmscss
            })
          }, "\u524A\u9664"))), item.useDropArea && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
            className: "js-droparea",
            "data-thumbnail": "{".concat(item.name, "@thumbnail}"),
            "data-type": item.mediaType ? item.mediaType : 'all',
            "data-width": "".concat(item.dropAreaWidth, "px"),
            "data-height": "".concat(item.dropAreaHeight, "px")
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
              'acms-admin-btn': acmscss
            }),
            "data-type": item.mediaType ? item.mediaType : 'all'
          }, "\u30E1\u30C7\u30A3\u30A2\u3092\u9078\u629E"))), /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            name: "".concat(item.name, "[]"),
            value: preview ? '' : "{".concat(item.name, "}"),
            className: "js-value"
          }), _this.renderValidator(item, acmscss, false)), item.title);
        } else if (item.type === 'lite-editor') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("textarea", {
            name: "".concat(item.name, "[]"),
            className: (0, _classnames.default)('js-lite-editor-field', {
              'acms-admin-form-width-full': acmscss
            })
          }, "{".concat(item.name, "}")), _this.renderValidator(item, acmscss, false)), item.title);
        } else if (item.type === 'rich-editor') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(ConditionalWrap, {
            condition: item.useExpand,
            wrap: function wrap(children) {
              return /*#__PURE__*/_react.default.createElement("div", {
                className: "js-expand js-acms-expand"
              }, /*#__PURE__*/_react.default.createElement("div", {
                className: "js-acms-expand-inner"
              }, /*#__PURE__*/_react.default.createElement("button", {
                className: "js-expand-btn js-acms-expand-btn",
                type: "button"
              }, /*#__PURE__*/_react.default.createElement("i", {
                className: "acms-admin-icon acms-admin-icon-expand-arrow js-expand-icon"
              })), children));
            }
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "js-smartblock",
            "data-heading-start": item.startHeadingLevel,
            "data-heading-end": item.endHeadingLevel
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "js-smartblock-edit"
          }), /*#__PURE__*/_react.default.createElement("input", {
            className: "js-smartblock-body",
            type: "hidden",
            name: "".concat(item.name, "[]"),
            value: "{".concat(item.name, "@html}")
          }), /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            name: "".concat(item.name, ":extension"),
            value: "rich-editor"
          })))), item.title);
        } else if (item.type === 'table') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
            className: "js-editable-table-field"
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "js-editable-table"
          }, preview ? null : "<!-- BEGIN_IF [{".concat(item.name, "}[delnl]/nem] -->\n"), preview ? null : "{".concat(item.name, "}[raw]"), preview ? null : '<!-- ELSE -->', /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "\u30B5\u30F3\u30D7\u30EB"), /*#__PURE__*/_react.default.createElement("th", null, "\u30B5\u30F3\u30D7\u30EB")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "\u30B5\u30F3\u30D7\u30EB"), /*#__PURE__*/_react.default.createElement("td", null, "\u30B5\u30F3\u30D7\u30EB"))), preview ? null : '<!-- END_IF -->', /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            className: "js-editable-table-dest",
            value: "{".concat(item.name, "}"),
            name: "".concat(item.name, "[]")
          })))), item.title);
        }
      })), /*#__PURE__*/_react.default.createElement("td", {
        className: "acms-admin-table-nowrap"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "button",
        className: (0, _classnames.default)('item-delete', {
          'acms-admin-btn-admin acms-admin-btn-admin-danger': acmscss
        }),
        value: "\u524A\u9664"
      }))), preview ? null : "<!-- END ".concat(groupName, ":loop -->"), preview ? null : /*#__PURE__*/_react.default.createElement("tr", {
        className: "sortable-item item-template"
      }, /*#__PURE__*/_react.default.createElement("td", {
        className: "item-handle acms-admin-table-nowrap"
      }, acmscss && /*#__PURE__*/_react.default.createElement("i", {
        className: "acms-admin-icon-sort"
      })), /*#__PURE__*/_react.default.createElement(ConditionalWrap, {
        condition: direction === 'vertical',
        wrap: function wrap(children) {
          return /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("table", null, children));
        }
      }, groupitems.map(function (item) {
        if (item.type === 'text') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("input", {
            type: "text",
            name: "".concat(item.name, "[]"),
            value: "",
            className: (0, _classnames.default)({
              'acms-admin-form-width-full': acmscss
            })
          }), _this.renderValidator(item, acmscss, true)), item.title);
        } else if (item.type === 'textarea') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("textarea", {
            name: "".concat(item.name, "[]"),
            className: (0, _classnames.default)({
              'acms-admin-form-width-full': acmscss
            })
          }), _this.renderValidator(item, acmscss, true)), item.title);
        } else if (item.type === 'select') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("select", {
            name: "".concat(item.name, "[]"),
            className: (0, _classnames.default)({
              'acms-admin-form-width-full': acmscss
            })
          }, /*#__PURE__*/_react.default.createElement("option", {
            value: ""
          }), item.option.map(function (option) {
            return /*#__PURE__*/_react.default.createElement("option", {
              value: option.value
            }, option.label);
          })), _this.renderValidator(item, acmscss, true)), item.title);
        } else if (item.type === 'radio') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, item.option.map(function (option) {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: (0, _classnames.default)({
                'acms-admin-form-radio': acmscss
              })
            }, /*#__PURE__*/_react.default.createElement("input", {
              type: "radio",
              name: "".concat(item.name, "[]"),
              value: option.value,
              id: "input-radio-".concat(item.name, "-").concat(option.value)
            }), /*#__PURE__*/_react.default.createElement("label", {
              htmlFor: "input-radio-".concat(item.name, "-").concat(option.value)
            }, acmscss && /*#__PURE__*/_react.default.createElement("i", {
              className: "acms-admin-ico-radio"
            }), option.label));
          }), _this.renderValidator(item, acmscss, true)), item.title);
        } else if (item.type === 'file') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("input", {
            type: "file",
            name: "".concat(item.name, "[]")
          }), item.extension && /*#__PURE__*/_react.default.createElement("input", {
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
          }), _this.renderValidator(item, acmscss, true)), item.title);
        } else if (item.type === 'image') {
          var style = {};
          if (item.normalSize) {
            style.maxWidth = "".concat(item.normalSize, "px");
          }
          var hiddenStyle = Object.assign({}, style, {
            display: 'none'
          });
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", {
            className: (0, _classnames.default)({
              'js-img_resize_cf': item.resize
            })
          }, /*#__PURE__*/_react.default.createElement("img", {
            src: "",
            style: hiddenStyle,
            className: "js-img_resize_preview"
          }), /*#__PURE__*/_react.default.createElement("input", {
            type: "file",
            name: "".concat(item.name, "[]"),
            style: style
          }), /*#__PURE__*/_react.default.createElement("br", null), item.alt && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, "\u4EE3\u66FF\u30C6\u30AD\u30B9\u30C8:", /*#__PURE__*/_react.default.createElement("input", {
            type: "text",
            name: "".concat(item.name, "@alt[]"),
            value: "",
            size: "40"
          })), item.normalSize && /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            name: "".concat(item.name, "@").concat(item.normal, "[]"),
            value: item.normalSize
          }), item.tiny && /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            name: "".concat(item.name, "@").concat(item.tiny, "[]"),
            value: item.tinySize
          }), item.large && /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            name: "".concat(item.name, "@").concat(item.large, "[]"),
            value: item.largeSize
          }), item.square && /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            name: "".concat(item.name, "@").concat(item.square, "[]"),
            value: item.squareSize
          }), _this.renderValidator(item, acmscss, true)), item.title);
        } else if (item.type === 'media') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", {
            className: "js-media-field"
          }, !item.useDropArea && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
            src: ""
          }, item.mediaType === 'file' ? {
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
              'acms-admin-img-responsive': acmscss
            })
          })), /*#__PURE__*/_react.default.createElement("p", {
            className: "js-text acms-admin-text-danger",
            style: {
              display: 'none'
            }
          }, "\u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u306E\u305F\u3081\u633F\u5165\u3067\u304D\u307E\u305B\u3093\u3002")), /*#__PURE__*/_react.default.createElement("div", {
            className: "acms-admin-margin-top-mini"
          }, /*#__PURE__*/_react.default.createElement("button", {
            type: "button",
            className: (0, _classnames.default)('js-insert', {
              'acms-admin-btn': acmscss
            }),
            "data-type": item.mediaType ? item.mediaType : 'all'
          }, "\u30E1\u30C7\u30A3\u30A2\u3092\u9078\u629E"), /*#__PURE__*/_react.default.createElement("button", {
            type: "button",
            className: (0, _classnames.default)('js-insert', {
              'acms-admin-btn': acmscss
            }),
            "data-type": item.mediaType ? item.mediaType : 'all',
            "data-mode": "upload"
          }, "\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9"), /*#__PURE__*/_react.default.createElement("button", {
            type: "button",
            className: (0, _classnames.default)('js-edit', {
              'acms-admin-btn': acmscss
            })
          }, "\u30E1\u30C7\u30A3\u30A2\u3092\u7DE8\u96C6"), /*#__PURE__*/_react.default.createElement("button", {
            type: "button",
            className: (0, _classnames.default)('js-remove', {
              'acms-admin-btn acms-admin-btn-danger': acmscss
            })
          }, "\u524A\u9664"))), item.useDropArea && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
            className: "js-droparea",
            "data-type": item.mediaType ? item.mediaType : 'all',
            "data-thumbnail-type": "{".concat(item.name, "@type}"),
            "data-width": "".concat(item.dropAreaWidth, "px"),
            "data-height": "".concat(item.dropAreaHeight, "px")
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
              'acms-admin-btn': acmscss
            }),
            "data-type": item.mediaType ? item.mediaType : 'all'
          }, "\u30E1\u30C7\u30A3\u30A2\u3092\u9078\u629E"))), /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            name: "".concat(item.name, "[]"),
            value: "",
            className: "js-value"
          }), _this.renderValidator(item, acmscss, true)), item.title);
        } else if (item.type === 'lite-editor') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("textarea", {
            name: "".concat(item.name, "[]"),
            className: (0, _classnames.default)('js-lite-editor-field', {
              'acms-admin-form-width-full': acmscss
            })
          }), _this.renderValidator(item, acmscss, false)), item.title);
        } else if (item.type === 'rich-editor') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(ConditionalWrap, {
            condition: item.useExpand,
            wrap: function wrap(children) {
              return /*#__PURE__*/_react.default.createElement("div", {
                className: "js-expand js-acms-expand"
              }, /*#__PURE__*/_react.default.createElement("div", {
                className: "js-acms-expand-inner"
              }, /*#__PURE__*/_react.default.createElement("button", {
                className: "js-expand-btn js-acms-expand-btn",
                type: "button"
              }, /*#__PURE__*/_react.default.createElement("i", {
                className: "acms-admin-icon acms-admin-icon-expand-arrow js-expand-icon"
              })), children));
            }
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "js-smartblock",
            "data-heading-start": item.startHeadingLevel,
            "data-heading-end": item.endHeadingLevel
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "js-smartblock-edit"
          }), /*#__PURE__*/_react.default.createElement("input", {
            className: "js-smartblock-body",
            type: "hidden",
            name: "".concat(item.name, "[]"),
            value: ""
          })))), item.title);
        } else if (item.type === 'table') {
          return _this.wrapTable( /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
            className: "js-editable-table-field"
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "js-editable-table"
          }, "<!-- BEGIN_IF [{".concat(item.name, "}[delnl]/nem] -->\n"), "{".concat(item.name, "}[raw]"), '<!-- ELSE -->', /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "\u30B5\u30F3\u30D7\u30EB"), /*#__PURE__*/_react.default.createElement("th", null, "\u30B5\u30F3\u30D7\u30EB")), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "\u30B5\u30F3\u30D7\u30EB"), /*#__PURE__*/_react.default.createElement("td", null, "\u30B5\u30F3\u30D7\u30EB"))), '<!-- END_IF -->', /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            className: "js-editable-table-dest",
            value: "",
            name: "".concat(item.name, "[]")
          })))), item.title);
        }
      })), /*#__PURE__*/_react.default.createElement("td", {
        className: "acms-admin-table-nowrap"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "button",
        className: (0, _classnames.default)('item-delete', {
          'acms-admin-btn-admin acms-admin-btn-admin-danger': acmscss
        }),
        value: "\u524A\u9664"
      })))), /*#__PURE__*/_react.default.createElement("tfoot", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
        colSpan: direction === 'horizontal' ? groupLength + 2 : 3
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "button",
        className: (0, _classnames.default)('item-insert', {
          'acms-admin-btn-admin': acmscss
        }),
        value: "\u8FFD\u52A0"
      }))))), groupName && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, groupitems.map(function (item) {
        return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, item.type === 'image' && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, item.square && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@squarePath")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@squareAlt")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@squareX")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@squareY")
        })), item.large && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@largePath")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@largeAlt")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@largeX")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@largeY")
        })), item.tiny && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@tinyPath")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@tinyAlt")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@tinyX")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@tinyY")
        })), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@path")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@alt")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@x")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@y")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@edit")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@old")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "".concat(item.name, ":extension"),
          value: "image"
        })), item.type === 'file' && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@path")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@alt")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@edit")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: "".concat(item.name, "@old")
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "".concat(item.name, ":extension"),
          value: "file"
        })), item.type === 'media' && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "".concat(item.name, ":extension"),
          value: "media"
        })), item.type === 'rich-editor' && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "".concat(item.name, ":extension"),
          value: "rich-editor"
        })), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "@".concat(groupName, "[]"),
          value: item.name
        }), /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "field[]",
          value: item.name
        }), item.noSearch && /*#__PURE__*/_react.default.createElement("input", {
          type: "hidden",
          name: "".concat(item.name, ":search"),
          value: "0"
        }), item.validator.map(function (validator) {
          if (!validator.option) {
            return null;
          }
          var name = item.type === 'file' || item.type === 'image' ? "".concat(item.name, "@path") : item.name;
          return /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            name: "".concat(name, ":v#").concat(validator.option),
            value: validator.value,
            id: "".concat(name, "-v-").concat(validator.option)
          });
        }), function () {
          var name = item.type === 'file' || item.type === 'image' ? "".concat(item.name, "@path") : item.name;
          return item.converter && /*#__PURE__*/_react.default.createElement("input", {
            type: "hidden",
            name: "".concat(name, ":c"),
            value: item.converter
          });
        }());
      }), /*#__PURE__*/_react.default.createElement("input", {
        type: "hidden",
        name: "field[]",
        value: "@".concat(groupName)
      })));
    }
  }]);
  return FieldGroupSource;
}(_react.Component);
exports.default = FieldGroupSource;
FieldGroupSource.defaultProps = {
  preview: false
};