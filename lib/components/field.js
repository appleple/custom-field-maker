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

var _reactTooltip = require('react-tooltip');

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = function (_Base) {
  (0, _inherits3.default)(Field, _Base);

  function Field(props) {
    (0, _classCallCheck3.default)(this, Field);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Field.__proto__ || (0, _getPrototypeOf2.default)(Field)).call(this, props));

    _this.state = {
      type: 'text',
      title: '',
      name: '',
      tooltip: '',
      alert: false,
      duplicatedField: '',
      path: 'path',
      converter: '',
      normal: 'size',
      alt: false,
      useDropArea: true,
      dropAreaWidth: 200,
      dropAreaHeight: 200,
      useFocusImage: false,
      focusImageWidth: 400,
      focusImageHeight: 400,
      mediaType: 'image',
      resize: true,
      option: [{
        value: '',
        label: ''
      }],
      validator: [{
        option: '',
        value: '',
        message: ''
      }],
      optionFormat: 'pref',
      openValidator: false,
      openConverter: false,
      noSearch: false,
      extension: '',
      fileNameMethod: 'random'
    };
    return _this;
  }

  (0, _createClass3.default)(Field, [{
    key: 'submit',
    value: function submit() {
      var _state = this.state,
          name = _state.name,
          type = _state.type,
          title = _state.title;
      var actions = this.props.actions;

      if (name && type && title) {
        actions.addCustomfield(this.state);
      } else {
        this.setState({
          alert: true
        });
      }
    }
  }, {
    key: 'typeSelectRender',
    value: function typeSelectRender() {
      var _this2 = this;

      var type = this.state.type;


      return _react2.default.createElement(
        'select',
        { id: 'type', value: type, className: 'acms-admin-form-width-full', onChange: function onChange(e) {
            _this2.updateState('type', e.target.value);
          } },
        _react2.default.createElement(
          'option',
          { value: 'text' },
          '\u30C6\u30AD\u30B9\u30C8'
        ),
        _react2.default.createElement(
          'option',
          { value: 'textarea' },
          '\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2'
        ),
        _react2.default.createElement(
          'option',
          { value: 'select' },
          '\u30BB\u30EC\u30AF\u30C8\u30DC\u30C3\u30AF\u30B9'
        ),
        _react2.default.createElement(
          'option',
          { value: 'radio' },
          '\u30E9\u30B8\u30AA\u30DC\u30BF\u30F3'
        ),
        _react2.default.createElement(
          'option',
          { value: 'checkbox' },
          '\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9'
        ),
        _react2.default.createElement(
          'option',
          { value: 'media' },
          '\u30E1\u30C7\u30A3\u30A2'
        ),
        _react2.default.createElement(
          'option',
          { value: 'file' },
          '\u30D5\u30A1\u30A4\u30EB'
        ),
        _react2.default.createElement(
          'option',
          { value: 'image' },
          '\u753B\u50CF'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          type = _state2.type,
          title = _state2.title,
          name = _state2.name,
          tooltip = _state2.tooltip;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          { className: 'acms-admin-admin-title2' },
          '\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9'
        ),
        _react2.default.createElement(
          'div',
          { className: 'customFieldFunction' },
          this.renderModal(),
          this.renderAlert(),
          this.renderBasic(),
          _react2.default.createElement('div', { className: 'customFieldLine' }),
          type === 'select' && _react2.default.createElement(
            'div',
            null,
            this.renderSnippet(),
            this.renderOption()
          ),
          type === 'radio' && _react2.default.createElement(
            'div',
            null,
            this.renderSnippet(),
            this.renderOption()
          ),
          type === 'checkbox' && _react2.default.createElement(
            'div',
            null,
            this.renderSnippet(),
            this.renderOption()
          ),
          type === 'image' && _react2.default.createElement(
            'div',
            null,
            this.renderImage(),
            this.renderImageResize()
          ),
          type === 'file' && _react2.default.createElement(
            'div',
            null,
            this.renderFile()
          ),
          type === 'media' && _react2.default.createElement(
            'div',
            null,
            this.renderMediaOption()
          ),
          this.renderValidator(),
          this.renderMake()
        )
      );
    }
  }]);
  return Field;
}(_base2.default);

exports.default = Field;