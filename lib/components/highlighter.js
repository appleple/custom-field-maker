'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _htmlEntities = require('html-entities');

var _jsBeautify = require('js-beautify');

var _highlight = require('highlight.js');

var _highlight2 = _interopRequireDefault(_highlight);

require('highlight.js/styles/default.css');

require('highlight.js/styles/xcode.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entities = new _htmlEntities.XmlEntities();

var Highlighter = function (_Component) {
  (0, _inherits3.default)(Highlighter, _Component);

  function Highlighter(props) {
    (0, _classCallCheck3.default)(this, Highlighter);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Highlighter.__proto__ || (0, _getPrototypeOf2.default)(Highlighter)).call(this, props));

    _this.state = {
      source: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Highlighter, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.buildSource();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.buildSource();
    }
  }, {
    key: 'buildSource',
    value: function buildSource() {
      var source = this.state.source;
      var children = this.props.children;

      var html = (0, _server.renderToStaticMarkup)(children);
      html = html.replace(/&quot;/g, '"');
      html = html.replace(/data-tmp="(.*?)"/g, '$1');
      html = html.replace(/&lt;/g, '<');
      html = html.replace(/&gt;/g, '>');
      this.code.innerHTML = entities.encode((0, _jsBeautify.html)(html, {
        unformatted: ['code', 'pre'],
        indent_inner_html: true,
        indent_char: ' ',
        indent_size: 2,
        sep: '\n'
      }));
      _highlight2.default.highlightBlock(this.code);
      if (source !== this.code.innerText && this.props.onSourceGenerated) {
        this.props.onSourceGenerated(this.code.innerText);
        this.setState({
          source: this.code.innerText
        });
      }
    }
  }, {
    key: 'removeReactText',
    value: function removeReactText(html) {
      html = html.replace(/<!-- (\/?)react-text(.*?)-->/g, '');
      return html;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'pre',
          { className: 'acms-admin-customfield-maker' },
          _react2.default.createElement('code', { className: 'html', ref: function ref(code) {
              _this2.code = code;
            } })
        )
      );
    }
  }]);
  return Highlighter;
}(_react.Component);

exports.default = Highlighter;