'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _modalDialog = require('./modal-dialog');

var _modalDialog2 = _interopRequireDefault(_modalDialog);

var _history = require('../lib/history');

var _history2 = _interopRequireDefault(_history);

var _pref = require('../../json/pref.json');

var _pref2 = _interopRequireDefault(_pref);

var _prefEn = require('../../json/pref-en.json');

var _prefEn2 = _interopRequireDefault(_prefEn);

var _prefNumber = require('../../json/pref-number.json');

var _prefNumber2 = _interopRequireDefault(_prefNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var snippetJSON = {
  'pref': _pref2.default,
  'pref-en': _prefEn2.default,
  'pref-number': _prefNumber2.default
};

var Base = function (_Component) {
  (0, _inherits3.default)(Base, _Component);

  function Base(props) {
    (0, _classCallCheck3.default)(this, Base);
    return (0, _possibleConstructorReturn3.default)(this, (Base.__proto__ || (0, _getPrototypeOf2.default)(Base)).call(this, props));
  }

  (0, _createClass3.default)(Base, [{
    key: 'updateState',
    value: function updateState(prop, value) {
      this.setState((0, _defineProperty3.default)({}, prop, value));
    }
  }, {
    key: 'removeAlert',
    value: function removeAlert() {
      this.setState({
        alert: false
      });
    }
  }, {
    key: 'removeGroupAlert',
    value: function removeGroupAlert() {
      this.setState({
        groupAlert: false
      });
    }
  }, {
    key: 'removeDuplicateAlert',
    value: function removeDuplicateAlert() {
      this.setState({
        duplicatedField: false
      });
    }
  }, {
    key: 'clearValue',
    value: function clearValue() {
      this.setState({
        title: '',
        name: '',
        path: '',
        normalSize: '',
        tiny: '',
        tinySize: '',
        large: '',
        largeSize: '',
        square: '',
        squareSize: '',
        alt: true,
        resize: true,
        openConverter: '',
        openValidator: '',
        converter: '',
        tooltip: ''
      });
    }
  }, {
    key: 'addOption',
    value: function addOption() {
      var option = this.state.option;

      this.setState({
        option: [].concat((0, _toConsumableArray3.default)(option), [{
          value: "",
          label: ""
        }])
      });
    }
  }, {
    key: 'removeOption',
    value: function removeOption(idx) {
      var option = this.state.option;

      this.setState({
        option: [].concat((0, _toConsumableArray3.default)(option.slice(0, idx)), (0, _toConsumableArray3.default)(option.slice(idx + 1)))
      });
    }
  }, {
    key: 'updateOptionLabel',
    value: function updateOptionLabel(idx, label) {
      var option = this.state.option;

      var item = option[idx];
      this.setState({
        option: [].concat((0, _toConsumableArray3.default)(option.slice(0, idx)), [(0, _assign2.default)({}, item, {
          label: label
        })], (0, _toConsumableArray3.default)(option.slice(idx + 1)))
      });
    }
  }, {
    key: 'updateOptionValue',
    value: function updateOptionValue(idx, value) {
      var option = this.state.option;

      var item = option[idx];
      this.setState({
        option: [].concat((0, _toConsumableArray3.default)(option.slice(0, idx)), [(0, _assign2.default)({}, item, {
          value: value
        })], (0, _toConsumableArray3.default)(option.slice(idx + 1)))
      });
    }
  }, {
    key: 'addValidator',
    value: function addValidator() {
      var validator = this.state.validator;

      this.setState({
        validator: [].concat((0, _toConsumableArray3.default)(validator), [{
          option: "",
          value: "",
          message: ""
        }])
      });
    }
  }, {
    key: 'removeValidator',
    value: function removeValidator(idx) {
      var validator = this.state.validator;

      this.setState({
        validator: [].concat((0, _toConsumableArray3.default)(validator.slice(0, idx)), (0, _toConsumableArray3.default)(validator.slice(idx + 1)))
      });
    }
  }, {
    key: 'updateValidatorOption',
    value: function updateValidatorOption(idx, option) {
      var validator = this.state.validator;

      var item = validator[idx];
      this.setState({
        validator: [].concat((0, _toConsumableArray3.default)(validator.slice(0, idx)), [(0, _assign2.default)({}, item, {
          option: option
        })], (0, _toConsumableArray3.default)(validator.slice(idx + 1)))
      });
    }
  }, {
    key: 'updateValidatorValue',
    value: function updateValidatorValue(idx, value) {
      var validator = this.state.validator;

      var item = validator[idx];
      this.setState({
        validator: [].concat((0, _toConsumableArray3.default)(validator.slice(0, idx)), [(0, _assign2.default)({}, item, {
          value: value
        })], (0, _toConsumableArray3.default)(validator.slice(idx + 1)))
      });
    }
  }, {
    key: 'updateValidatorMessage',
    value: function updateValidatorMessage(idx, message) {
      var validator = this.state.validator;

      var item = validator[idx];
      this.setState({
        validator: [].concat((0, _toConsumableArray3.default)(validator.slice(0, idx)), [(0, _assign2.default)({}, item, {
          message: message
        })], (0, _toConsumableArray3.default)(validator.slice(idx + 1)))
      });
    }
  }, {
    key: 'addConverter',
    value: function addConverter(item) {
      var converter = this.state.converter;

      var reg = new RegExp(item, "i");
      if (converter.search(reg) === -1) {
        converter += item;
      } else {
        converter = converter.replace(item.toUpperCase(), item);
        converter = converter.replace(item.toLowerCase(), item);
      }
      this.setState({
        converter: converter
      });
    }
  }, {
    key: 'renderOption',
    value: function renderOption() {
      var _this2 = this;

      var option = this.state.option;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'table',
          { className: 'acms-admin-table customFieldOptionTable' },
          option.map(function (item, idx) {
            return _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'customFieldOptionTableInput' },
                  _react2.default.createElement(
                    'span',
                    { className: 'customFieldOptionTableAppend' },
                    '\u9805\u76EE\u540D\uFF08label\uFF09'
                  ),
                  _react2.default.createElement('input', { type: 'text', value: item.label, onInput: function onInput(e) {
                      _this2.updateOptionLabel(idx, e.target.value);
                    }, className: 'acms-admin-form-width-full', placeholder: '\u4F8B\uFF09\u6771\u4EAC\u90FD' })
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'customFieldOptionTableInput' },
                  _react2.default.createElement(
                    'span',
                    { className: 'customFieldOptionTableAppend' },
                    '\u5024\uFF08value\uFF09'
                  ),
                  _react2.default.createElement('input', { type: 'text', value: item.value, onInput: function onInput(e) {
                      _this2.updateOptionValue(idx, e.target.value);
                    }, className: 'acms-admin-form-width-full', placeholder: '\u4F8B\uFF09tokyo' })
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement('input', { type: 'button', className: 'acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right', onClick: _this2.removeOption.bind(_this2, idx), value: '\u524A\u9664' })
              )
            );
          })
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'button',
            { className: 'acms-admin-btn', onClick: this.addOption.bind(this) },
            '\u8FFD\u52A0'
          )
        )
      );
    }
  }, {
    key: 'renderTitleName',
    value: function renderTitleName() {
      var _this3 = this;

      var _state = this.state,
          title = _state.title,
          name = _state.name;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          '\u30BF\u30A4\u30C8\u30EB'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement('input', { type: 'text', value: title, onInput: function onInput(e) {
              _this3.updateState('title', e.target.value);
            } })
        ),
        _react2.default.createElement(
          'p',
          null,
          'name\u5C5E\u6027'
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement('input', { type: 'text', value: name, onInput: function onInput(e) {
              _this3.updateState('name', e.target.value);
            } })
        )
      );
    }
  }, {
    key: 'applySnippet',
    value: function applySnippet() {
      var _state2 = this.state,
          optionFormat = _state2.optionFormat,
          option = _state2.option;

      var res = snippetJSON[optionFormat];
      this.setState({
        option: [].concat((0, _toConsumableArray3.default)(option), (0, _toConsumableArray3.default)(res))
      });
    }
  }, {
    key: 'renderSnippet',
    value: function renderSnippet() {
      var _this4 = this;

      var _state3 = this.state,
          useSnippet = _state3.useSnippet,
          optionFormat = _state3.optionFormat;

      return _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'span',
          { className: 'customFieldBold' },
          '\u9078\u629E\u9805\u76EE\uFF08option\u8981\u7D20\uFF09',
          _react2.default.createElement('i', { className: 'acms-admin-icon-tooltip', 'data-tip': true, 'data-for': 'option-value-tip' }),
          _react2.default.createElement(
            _reactTooltip2.default,
            { id: 'option-value-tip', place: 'top', type: 'dark', effect: 'solid', className: 'acms-admin-tooltip acms-tooltip customFieldTooltip' },
            _react2.default.createElement(
              'span',
              null,
              'option\u8981\u7D20\u306E\u9078\u629E\u9805\u76EE\u306B\u306A\u308A\u307E\u3059\u3002'
            )
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'customFieldUseSnippet' },
          _react2.default.createElement(
            'label',
            { className: 'customFieldUseSnippetLabel', style: { marginRight: '5px' } },
            _react2.default.createElement('input', { type: 'checkbox', style: { display: 'none' }, value: 'true', onChange: function onChange() {
                _this4.updateState('useSnippet', !useSnippet);
              } }),
            useSnippet ? "スニペットを使用しない" : "スニペットを使用する"
          ),
          useSnippet && _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
              'select',
              { style: { verticalAlign: 'middle', marginRight: '5px' }, value: optionFormat, onChange: function onChange(e) {
                  _this4.updateState('optionFormat', e.target.value);
                } },
              _react2.default.createElement(
                'option',
                { value: 'pref' },
                '\u90FD\u9053\u5E9C\u770C'
              ),
              _react2.default.createElement(
                'option',
                { value: 'pref-en' },
                '\u90FD\u9053\u5E9C\u770C\uFF08\u82F1\u8A9E\uFF09'
              ),
              _react2.default.createElement(
                'option',
                { value: 'pref-number' },
                '\u90FD\u9053\u5E9C\u770C\uFF08\u9023\u756A\uFF09'
              )
            ),
            _react2.default.createElement(
              'button',
              { className: 'acms-admin-btn', onClick: this.applySnippet.bind(this), style: { verticalAlign: 'middle' } },
              '\u8FFD\u52A0'
            )
          )
        )
      );
    }
  }, {
    key: 'renderModal',
    value: function renderModal() {
      var _state4 = this.state,
          openConverter = _state4.openConverter,
          converter = _state4.converter;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _modalDialog2.default,
          { open: openConverter, title: '\u30B3\u30F3\u30D0\u30FC\u30BF\u30FC\u53C2\u7167', onClose: this.updateState.bind(this, 'openConverter', false) },
          _react2.default.createElement(
            'table',
            { className: 'acms-admin-table acms-admin-table-heading acms-admin-table-hover' },
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                '\u30AA\u30D7\u30B7\u30E7\u30F3'
              ),
              _react2.default.createElement(
                'th',
                null,
                '\u610F\u5473'
              ),
              _react2.default.createElement(
                'th',
                null,
                '\u8FFD\u52A0'
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'r'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u300C\u5168\u89D2\u300D\u82F1\u5B57\u3092\u300C\u534A\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'acms-admin-btn', onClick: this.addConverter.bind(this, 'r') },
                  '\u8FFD\u52A0'
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'R'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u300C\u534A\u89D2\u300D\u82F1\u5B57\u3092\u300C\u5168\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'acms-admin-btn', onClick: this.addConverter.bind(this, 'R') },
                  '\u8FFD\u52A0'
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'n'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u300C\u5168\u89D2\u300D\u6570\u5B57\u3092\u300C\u534A\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'acms-admin-btn', onClick: this.addConverter.bind(this, 'n') },
                  '\u8FFD\u52A0'
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'N'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u300C\u534A\u89D2\u300D\u6570\u5B57\u3092\u300C\u5168\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'acms-admin-btn', onClick: this.addConverter.bind(this, 'N') },
                  '\u8FFD\u52A0'
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'a'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u300C\u5168\u89D2\u300D\u82F1\u6570\u5B57\u3092\u300C\u534A\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'acms-admin-btn', onClick: this.addConverter.bind(this, 'a') },
                  '\u8FFD\u52A0'
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'A'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u300C\u534A\u89D2\u300D\u82F1\u6570\u5B57\u3092\u300C\u5168\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'acms-admin-btn', onClick: this.addConverter.bind(this, 'A') },
                  '\u8FFD\u52A0'
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                's'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u300C\u5168\u89D2\u300D\u30B9\u30DA\u30FC\u30B9\u3092\u300C\u534A\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\uFF08U+3000 -> U+0020\uFF09\u3002'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'acms-admin-btn', onClick: this.addConverter.bind(this, 's') },
                  '\u8FFD\u52A0'
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'S'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u300C\u534A\u89D2\u300D\u30B9\u30DA\u30FC\u30B9\u3092\u300C\u5168\u89D2\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\uFF08U+0020 -> U+3000\uFF09\u3002'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'acms-admin-btn', onClick: this.addConverter.bind(this, 'S') },
                  '\u8FFD\u52A0'
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'k'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u300C\u5168\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u3092\u300C\u534A\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'acms-admin-btn', onClick: this.addConverter.bind(this, 'k') },
                  '\u8FFD\u52A0'
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'K'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u300C\u534A\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u3092\u300C\u5168\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'acms-admin-btn', onClick: this.addConverter.bind(this, 'K') },
                  '\u8FFD\u52A0'
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'h'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u300C\u5168\u89D2\u3072\u3089\u304C\u306A\u300D\u3092\u300C\u534A\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'acms-admin-btn', onClick: this.addConverter.bind(this, 'h') },
                  '\u8FFD\u52A0'
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'H'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u300C\u534A\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u3092\u300C\u5168\u89D2\u3072\u3089\u304C\u306A\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'acms-admin-btn', onClick: this.addConverter.bind(this, 'H') },
                  '\u8FFD\u52A0'
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'c'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u300C\u5168\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u3092\u300C\u5168\u89D2\u3072\u3089\u304C\u306A\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'acms-admin-btn', onClick: this.addConverter.bind(this, 'c') },
                  '\u8FFD\u52A0'
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'C'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u300C\u5168\u89D2\u3072\u3089\u304C\u306A\u300D\u3092\u300C\u5168\u89D2\u30AB\u30BF\u30AB\u30CA\u300D\u306B\u5909\u63DB\u3057\u307E\u3059\u3002'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'acms-admin-btn', onClick: this.addConverter.bind(this, 'C') },
                  '\u8FFD\u52A0'
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'V'
              ),
              _react2.default.createElement(
                'td',
                null,
                '\u6FC1\u70B9\u4ED8\u304D\u306E\u6587\u5B57\u3092\u4E00\u6587\u5B57\u306B\u5909\u63DB\u3057\u307E\u3059\u3002"K", "H" \u3068\u5171\u306B\u4F7F\u7528\u3057\u307E\u3059\u3002'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { className: 'acms-admin-btn', onClick: this.addConverter.bind(this, 'V') },
                  '\u8FFD\u52A0'
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: 'renderBasic',
    value: function renderBasic() {
      var _this5 = this;

      var _state5 = this.state,
          title = _state5.title,
          name = _state5.name,
          tooltip = _state5.tooltip,
          type = _state5.type;

      return _react2.default.createElement(
        'table',
        { className: 'adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableFirst' },
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            { className: 'acms-admin-table-left' },
            '\u5165\u529B\u6B04\u306E\u7A2E\u985E',
            _react2.default.createElement('i', { className: 'acms-admin-icon-tooltip', 'data-tip': 'React-tooltip', 'data-for': 'type-tip' }),
            _react2.default.createElement(
              _reactTooltip2.default,
              { id: 'type-tip', place: 'top', type: 'dark', effect: 'solid', className: 'acms-admin-tooltip acms-tooltip customFieldTooltip' },
              _react2.default.createElement(
                'span',
                null,
                '\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u30BF\u30A4\u30D7\u3068\u306A\u308A\u307E\u3059\u3002',
                _react2.default.createElement('br', null),
                '\u9078\u629E\u3057\u306A\u3044\u3068\u751F\u6210\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u3082\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u304C\u751F\u6210\u3055\u308C\u307E\u305B\u3093\u3002'
              )
            ),
            _react2.default.createElement(
              'span',
              { className: 'acms-admin-label acms-admin-label-danger' },
              '\u5FC5\u9808'
            )
          ),
          _react2.default.createElement(
            'th',
            { className: 'acms-admin-table-left' },
            '\u30BF\u30A4\u30C8\u30EB',
            _react2.default.createElement('i', { className: 'acms-admin-icon-tooltip', 'data-tip': 'React-tooltip', 'data-for': 'title-tip' }),
            _react2.default.createElement(
              _reactTooltip2.default,
              { id: 'title-tip', place: 'top', type: 'dark', effect: 'solid', className: 'acms-admin-tooltip acms-tooltip customFieldTooltip' },
              _react2.default.createElement(
                'span',
                null,
                '\u898B\u51FA\u3057\u306B\u306A\u308A\u307E\u3059\u3002'
              )
            ),
            _react2.default.createElement(
              'span',
              { className: 'acms-admin-label acms-admin-label-danger' },
              '\u5FC5\u9808'
            )
          ),
          _react2.default.createElement(
            'th',
            { className: 'acms-admin-table-left' },
            '\u30D5\u30A3\u30FC\u30EB\u30C9',
            _react2.default.createElement('i', { className: 'acms-admin-icon-tooltip', 'data-tip': 'React-tooltip', 'data-for': 'field-tip' }),
            _react2.default.createElement(
              _reactTooltip2.default,
              { id: 'field-tip', place: 'top', type: 'dark', effect: 'solid', className: 'acms-admin-tooltip acms-tooltip customFieldTooltip' },
              _react2.default.createElement(
                'span',
                null,
                '\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3067\u3059\u3002name\u5C5E\u6027\u3068\u3057\u3066\u4F7F\u7528\u3055\u308C\u307E\u3059\u3002'
              )
            ),
            _react2.default.createElement(
              'span',
              { className: 'acms-admin-label acms-admin-label-danger' },
              '\u5FC5\u9808'
            )
          ),
          _react2.default.createElement(
            'th',
            { className: 'acms-admin-table-left' },
            '\u30C4\u30FC\u30EB\u30C1\u30C3\u30D7',
            _react2.default.createElement('i', { className: 'acms-admin-icon-tooltip', 'data-tip': 'React-tooltip', 'data-for': 'tooltip-tip' }),
            _react2.default.createElement(
              _reactTooltip2.default,
              { id: 'tooltip-tip', place: 'top', type: 'dark', effect: 'solid', className: 'acms-admin-tooltip acms-tooltip customFieldTooltip' },
              _react2.default.createElement(
                'span',
                null,
                '\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u306E\u8AAC\u660E\u7528\u306E\u30C4\u30FC\u30EB\u30C1\u30C3\u30D7\u3092\u4ED8\u4E0E\u3057\u307E\u3059\u3002'
              )
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            this.typeSelectRender()
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement('input', { type: 'text', value: title, onInput: function onInput(e) {
                _this5.updateState('title', e.target.value);
              }, className: 'acms-admin-form-width-full', placeholder: '\u4F8B\uFF09\u6C0F\u540D' })
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement('input', { type: 'text', value: name, onInput: function onInput(e) {
                _this5.updateState('name', e.target.value);
              }, className: 'acms-admin-form-width-full', placeholder: '\u4F8B\uFF09name' })
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement('input', { type: 'text', value: tooltip, onInput: function onInput(e) {
                _this5.updateState('tooltip', e.target.value);
              }, className: 'acms-admin-form-width-full', placeholder: '\u4F8B\uFF09\u3053\u3053\u306B\u304A\u540D\u524D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044' })
          )
        )
      );
    }
  }, {
    key: 'typeSelectRender',
    value: function typeSelectRender() {
      var _this6 = this;

      var type = this.state.type;


      return _react2.default.createElement(
        'select',
        { id: 'type', value: type, className: 'acms-admin-form-width-full', onChange: function onChange(e) {
            _this6.updateState('type', e.target.value);
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
          { value: 'file' },
          '\u30D5\u30A1\u30A4\u30EB'
        ),
        _react2.default.createElement(
          'option',
          { value: 'image' },
          '\u753B\u50CF'
        ),
        _react2.default.createElement(
          'option',
          { value: 'media' },
          '\u30E1\u30C7\u30A3\u30A2'
        )
      );
    }
  }, {
    key: 'noSearchCheckRender',
    value: function noSearchCheckRender() {
      var noSearch = this.state.noSearch;

      return _react2.default.createElement(
        'p',
        { className: 'acms-admin-form-checkbox' },
        _react2.default.createElement('input', { type: 'checkbox', value: noSearch, id: 'noSearch-checkbox', onChange: this.updateState.bind(this, 'noSearch', !noSearch) }),
        _react2.default.createElement(
          'label',
          { htmlFor: 'noSearch-checkbox' },
          _react2.default.createElement('i', { className: 'acms-admin-ico-checkbox' }),
          '\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u691C\u7D22\u306E\u5BFE\u8C61\u5916\u306B\u3059\u308B'
        )
      );
    }
  }, {
    key: 'backState',
    value: function backState() {
      var actions = this.props.actions;

      var state = _history2.default.undo();
      if (state) {
        actions.setState(state);
      }
    }
  }, {
    key: 'renderValidator',
    value: function renderValidator() {
      var _this7 = this;

      var _state6 = this.state,
          openValidator = _state6.openValidator,
          validator = _state6.validator,
          converter = _state6.converter,
          type = _state6.type;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'label',
            { style: { color: "#006DEC", cursor: "pointer" } },
            _react2.default.createElement('input', { type: 'checkbox', value: openValidator, onChange: this.updateState.bind(this, 'openValidator', !openValidator), style: { display: 'none' } }),
            '\u30AA\u30D7\u30B7\u30E7\u30F3'
          ),
          _react2.default.createElement('i', { className: 'acms-admin-icon-tooltip', 'data-for': 'option-tip', 'data-tip': 'React-tooltip', style: { marginLeft: "5px" } }),
          _react2.default.createElement(
            _reactTooltip2.default,
            { id: 'option-tip', place: 'top', type: 'dark', effect: 'solid', className: 'acms-admin-tooltip acms-tooltip customFieldTooltip' },
            _react2.default.createElement(
              'span',
              null,
              '\u5909\u63DB\u30FB\u5165\u529B\u30C1\u30A7\u30C3\u30AF\u7528\u306E\u9805\u76EE\u3092\u8868\u793A\u3057\u307E\u3059\u3002'
            )
          )
        ),
        openValidator && _react2.default.createElement(
          'div',
          { className: 'customFieldValidatorArea' },
          /text|textarea|radio|select/.exec(type) && this.noSearchCheckRender(),
          _react2.default.createElement(
            'p',
            { className: 'customFieldBold' },
            '\u30C6\u30AD\u30B9\u30C8\u306E\u5909\u63DB',
            _react2.default.createElement('i', { className: 'acms-admin-icon-tooltip', 'data-tip': true, 'data-for': 'convert-tip' }),
            _react2.default.createElement(
              _reactTooltip2.default,
              { id: 'convert-tip', place: 'top', type: 'dark', effect: 'solid', className: 'acms-admin-tooltip acms-tooltip customFieldTooltip' },
              _react2.default.createElement(
                'span',
                null,
                '\u30C6\u30AD\u30B9\u30C8\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5165\u529B\u3055\u308C\u305F\u5024\u3092\u5225\u306E\u5024\u306B\u5909\u63DB\u3057\u307E\u3059\u3002\u8A73\u3057\u304F\u306F\u53C2\u7167\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u8868\u793A\u3055\u308C\u308B\u30E2\u30FC\u30C0\u30EB\u30A6\u30A3\u30F3\u30C9\u30A6\u306B\u60C5\u5831\u304C\u8A18\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002'
              )
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('input', { type: 'text', value: converter, onInput: function onInput(e) {
                _this7.updateState('converter', e.target.value);
              }, className: 'acms-admin-form-width-quarter acms-admin-margin-right-small', placeholder: '\u4F8B\uFF09rs' }),
            _react2.default.createElement(
              'button',
              { className: 'acms-admin-btn', onClick: this.updateState.bind(this, 'openConverter', true) },
              '\u30B3\u30F3\u30D0\u30FC\u30BF\u30FC\u53C2\u7167'
            )
          ),
          _react2.default.createElement(
            'table',
            { className: 'acms-admin-table customFieldOptionTable' },
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                '\u5165\u529B\u30C1\u30A7\u30C3\u30AF',
                _react2.default.createElement('i', { className: 'acms-admin-icon-tooltip', 'data-tip': true, 'data-for': 'validate-tip' }),
                _react2.default.createElement(
                  _reactTooltip2.default,
                  { id: 'validate-tip', place: 'top', type: 'dark', effect: 'solid', className: 'acms-admin-tooltip acms-tooltip customFieldTooltip' },
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5165\u529B\u3055\u308C\u305F\u5024\u304C\u6761\u4EF6\u306B\u5408\u3063\u3066\u3044\u308B\u304B\u3092\u30C1\u30A7\u30C3\u30AF\u3057\u307E\u3059\u3002'
                  )
                )
              ),
              _react2.default.createElement(
                'th',
                null,
                '\u5024',
                _react2.default.createElement('i', { className: 'acms-admin-icon-tooltip', 'data-tip': true, 'data-for': 'validate-value-tip' }),
                _react2.default.createElement(
                  _reactTooltip2.default,
                  { id: 'validate-value-tip', place: 'top', type: 'dark', effect: 'solid', className: 'acms-admin-tooltip acms-tooltip customFieldTooltip' },
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u6700\u5C0F\u6587\u5B57\u6570\u3084\u3001\u6B63\u898F\u8868\u73FE\u30C1\u30A7\u30C3\u30AF\u3092\u30D0\u30EA\u30C7\u30FC\u30BF\u306B\u8A2D\u5B9A\u3057\u305F\u969B\u306B\u8A2D\u5B9A\u3059\u308B\u5024\u3068\u306A\u308A\u307E\u3059\u3002'
                  )
                )
              ),
              _react2.default.createElement(
                'th',
                null,
                '\u30E1\u30C3\u30BB\u30FC\u30B8',
                _react2.default.createElement('i', { className: 'acms-admin-icon-tooltip', 'data-tip': true, 'data-for': 'validate-message-tip' }),
                _react2.default.createElement(
                  _reactTooltip2.default,
                  { id: 'validate-message-tip', place: 'top', type: 'dark', effect: 'solid', className: 'acms-admin-tooltip acms-tooltip customFieldTooltip' },
                  _react2.default.createElement(
                    'span',
                    null,
                    '\u30D5\u30A3\u30FC\u30EB\u30C9\u306B\u5165\u529B\u3055\u308C\u3066\u3044\u308B\u5024\u304C\u6761\u4EF6\u306B\u5408\u308F\u306A\u304B\u3063\u305F\u5834\u5408\u306B\u8868\u793A\u3055\u308C\u308B\u30E1\u30C3\u30BB\u30FC\u30B8\u306B\u306A\u308A\u307E\u3059\u3002'
                  )
                )
              ),
              _react2.default.createElement('th', null)
            ),
            validator.map(function (item, idx) {
              return _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'select',
                    { className: 'acms-admin-form-width-full', onChange: function onChange(e) {
                        _this7.updateValidatorOption(idx, e.target.value);
                      } },
                    _react2.default.createElement(
                      'option',
                      { value: '' },
                      '\u25BC \u30D0\u30EA\u30C7\u30FC\u30BF\u3092\u9078\u629E'
                    ),
                    _react2.default.createElement(
                      'optgroup',
                      { label: '\u5165\u529B\u5024\u306E\u5236\u9650' },
                      _react2.default.createElement(
                        'option',
                        { value: 'required' },
                        '\u5FC5\u9808 ( required )'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'minlength' },
                        '\u6700\u5C0F\u6587\u5B57\u6570 ( minlength )'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'maxlength' },
                        '\u6700\u5927\u6587\u5B57\u6570 ( maxlength )'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'min' },
                        '\u4E0B\u9650\u5024 ( min )'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'max' },
                        '\u4E0A\u9650\u5024 ( max )'
                      )
                    ),
                    _react2.default.createElement(
                      'optgroup',
                      { label: '\u5F62\u5F0F\u30C1\u30A7\u30C3\u30AF' },
                      _react2.default.createElement(
                        'option',
                        { value: 'digits' },
                        '\u6570\u5B57\u30C1\u30A7\u30C3\u30AF ( digits )'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'email' },
                        '\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u30C1\u30A7\u30C3\u30AF ( email )'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'hiragana' },
                        '\u3072\u3089\u304C\u306A\u30C1\u30A7\u30C3\u30AF ( hiragana )'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'katakana' },
                        '\u30AB\u30BF\u30AB\u30CA\u30C1\u30A7\u30C3\u30AF ( katakana )'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'url' },
                        'URL\u30C1\u30A7\u30C3\u30AF ( url )'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'dates' },
                        '\u65E5\u4ED8\u30C1\u30A7\u30C3\u30AF ( dates )'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'times' },
                        '\u6642\u9593\u30C1\u30A7\u30C3\u30AF ( times )'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: 'regex' },
                        '\u6B63\u898F\u8868\u73FE\u30DE\u30C3\u30C1 ( regex )'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement('input', { type: 'text', value: item.value, onInput: function onInput(e) {
                      _this7.updateValidatorValue(idx, e.target.value);
                    }, className: 'acms-admin-form-width-full' })
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement('input', { type: 'text', value: item.message, onInput: function onInput(e) {
                      _this7.updateValidatorMessage(idx, e.target.value);
                    }, className: 'acms-admin-form-width-full' })
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'button',
                    { onClick: _this7.removeValidator.bind(_this7, idx), className: 'acms-admin-btn-admin acms-admin-btn-admin-danger' },
                    '\u524A\u9664'
                  )
                )
              );
            })
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'button',
              { onClick: this.addValidator.bind(this), className: 'acms-admin-btn' },
              '\u8FFD\u52A0'
            )
          )
        )
      );
    }
  }, {
    key: 'renderMake',
    value: function renderMake() {
      return _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'button',
          { onClick: this.clearValue.bind(this), className: 'acms-admin-btn-admin', style: { marginRight: '5px' } },
          '\u30AF\u30EA\u30A2'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.submit.bind(this), className: 'acms-admin-btn-admin acms-admin-btn-admin-primary customFieldMakeBtn', style: { marginRight: '5px' } },
          '\u751F\u6210'
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.backState.bind(this), className: 'acms-admin-btn-admin' },
          '\u5143\u306B\u623B\u3059'
        )
      );
    }
  }, {
    key: 'renderImage',
    value: function renderImage() {
      var _this8 = this;

      return _react2.default.createElement(
        'table',
        { className: 'adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableImg' },
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            { className: 'acms-admin-table-left' },
            '\u753B\u50CF\u30B5\u30A4\u30BA',
            _react2.default.createElement('i', { className: 'acms-admin-icon-tooltip', 'data-tip': true, 'data-for': 'image-size-tip' }),
            _react2.default.createElement(
              _reactTooltip2.default,
              { id: 'image-size-tip', place: 'top', type: 'dark', effect: 'solid', className: 'acms-admin-tooltip acms-tooltip customFieldTooltip' },
              _react2.default.createElement(
                'span',
                null,
                '\u901A\u5E38\u753B\u50CF\u306E\u753B\u50CF\u30B5\u30A4\u30BA\u3092\u6307\u5B9A\u3057\u307E\u3059'
              )
            )
          ),
          _react2.default.createElement(
            'th',
            { className: 'acms-admin-table-left' },
            'large\u753B\u50CF\u751F\u6210',
            _react2.default.createElement('i', { className: 'acms-admin-icon-tooltip', 'data-tip': true, 'data-for': 'image-large-size-tip' }),
            _react2.default.createElement(
              _reactTooltip2.default,
              { id: 'image-size-tip', place: 'top', type: 'dark', effect: 'solid', className: 'acms-admin-tooltip acms-tooltip customFieldTooltip' },
              _react2.default.createElement(
                'span',
                null,
                '\u901A\u5E38\u753B\u50CF\u3088\u308A\u3082\u5927\u304D\u3044\u753B\u50CF\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002'
              )
            )
          ),
          _react2.default.createElement(
            'th',
            { className: 'acms-admin-table-left' },
            'tiny\u753B\u50CF\u751F\u6210',
            _react2.default.createElement('i', { className: 'acms-admin-icon-tooltip', 'data-tip': true, 'data-for': 'image-tiny-size-tip' }),
            _react2.default.createElement(
              _reactTooltip2.default,
              { id: 'image-tiny-size-tip', place: 'top', type: 'dark', effect: 'solid', className: 'acms-admin-tooltip acms-tooltip customFieldTooltip' },
              _react2.default.createElement(
                'span',
                null,
                '\u901A\u5E38\u753B\u50CF\u3088\u308A\u3082\u5C0F\u3055\u3044\u753B\u50CF\u3092\u751F\u6210\u3067\u304D\u307E\u3059\u3002'
              )
            )
          ),
          _react2.default.createElement(
            'th',
            { className: 'acms-admin-table-left' },
            'square\u753B\u50CF\u751F\u6210',
            _react2.default.createElement('i', { className: 'acms-admin-icon-tooltip', 'data-tip': true, 'data-for': 'image-square-size-tip' }),
            _react2.default.createElement(
              _reactTooltip2.default,
              { id: 'image-tiny-size-tip', place: 'top', type: 'dark', effect: 'solid', className: 'acms-admin-tooltip acms-tooltip customFieldTooltip' },
              _react2.default.createElement(
                'span',
                null,
                '\u901A\u5E38\u753B\u50CF\u3092\u6307\u5B9A\u3057\u305F\u30B5\u30A4\u30BA\u3067\u4E2D\u592E\u304B\u3089\u6B63\u65B9\u5F62\u306B\u30C8\u30EA\u30DF\u30F3\u30B0\u3057\u3066\u751F\u6210\u3057\u307E\u3059\u3002'
              )
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              'div',
              { className: 'acms-form-group' },
              _react2.default.createElement(
                'div',
                { className: 'controls' },
                _react2.default.createElement(
                  'select',
                  { name: 'normal', onChange: function onChange(e) {
                      _this8.updateState('normal', e.target.value);
                    }, className: 'acms-admin-margin-right-small' },
                  _react2.default.createElement(
                    'option',
                    { value: 'size' },
                    '\u9577\u8FBA'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'width' },
                    '\u5E45'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'height' },
                    '\u9AD8\u3055'
                  )
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'input-append' },
                  _react2.default.createElement('input', { type: 'text', autocomplete: 'off', name: 'normalSize', onInput: function onInput(e) {
                      _this8.updateState('normalSize', e.target.value);
                    }, className: 'customFieldSizeInput', placeholder: '\u4F8B\uFF09200px' }),
                  _react2.default.createElement(
                    'span',
                    { className: 'add-on' },
                    ' px'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              'div',
              { className: 'acms-form-group' },
              _react2.default.createElement(
                'div',
                { className: 'controls' },
                _react2.default.createElement(
                  'select',
                  { name: 'large', onChange: function onChange(e) {
                      _this8.updateState('large', e.target.value);
                    }, className: 'acms-admin-margin-right-small' },
                  _react2.default.createElement(
                    'option',
                    { value: '' },
                    '\u4F5C\u3089\u306A\u3044'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'largeWidth' },
                    'width'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'largeHeight' },
                    'height'
                  )
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'input-append' },
                  _react2.default.createElement('input', { type: 'text', autocomplete: 'off', name: 'largeSize', onInput: function onInput(e) {
                      _this8.updateState('largeSize', e.target.value);
                    }, className: 'customFieldSizeInput', placeholder: '\u4F8B\uFF09400px' }),
                  _react2.default.createElement(
                    'span',
                    { className: 'add-on' },
                    ' px'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              'div',
              { className: 'acms-form-group' },
              _react2.default.createElement(
                'div',
                { className: 'controls' },
                _react2.default.createElement(
                  'select',
                  { name: 'tiny', onChange: function onChange(e) {
                      _this8.updateState('tiny', e.target.value);
                    }, className: 'acms-admin-margin-right-small' },
                  _react2.default.createElement(
                    'option',
                    { value: '' },
                    '\u4F5C\u3089\u306A\u3044'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'tinyWidth' },
                    'width'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'tinyHeight' },
                    'height'
                  )
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'input-append' },
                  _react2.default.createElement('input', { type: 'text', autocomplete: 'off', name: 'tinySize', onInput: function onInput(e) {
                      _this8.updateState('tinySize', e.target.value);
                    }, className: 'customFieldSizeInput', placeholder: '\u4F8B\uFF09100px' }),
                  _react2.default.createElement(
                    'span',
                    { className: 'add-on' },
                    ' px'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
              'div',
              { className: 'acms-form-group' },
              _react2.default.createElement(
                'div',
                { className: 'controls' },
                _react2.default.createElement(
                  'select',
                  { name: 'square', onChange: function onChange(e) {
                      _this8.updateState('square', e.target.value);
                    }, className: 'acms-admin-margin-right-small' },
                  _react2.default.createElement(
                    'option',
                    { value: '' },
                    '\u4F5C\u3089\u306A\u3044'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'squareWidth' },
                    'width'
                  )
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'input-append' },
                  _react2.default.createElement('input', { type: 'text', autocomplete: 'off', name: 'squareSize', onInput: function onInput(e) {
                      _this8.updateState('squareSize', e.target.value);
                    }, className: 'customFieldSizeInput', placeholder: '\u4F8B\uFF09250px' }),
                  _react2.default.createElement(
                    'span',
                    { className: 'add-on' },
                    ' px'
                  )
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: 'renderImageResize',
    value: function renderImageResize() {
      var _state7 = this.state,
          resize = _state7.resize,
          alt = _state7.alt;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          { className: 'acms-admin-form-checkbox' },
          _react2.default.createElement('input', { type: 'checkbox', onChange: this.updateState.bind(this, 'resize', !resize), checked: resize, id: 'resize-checkbox' }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'resize-checkbox' },
            _react2.default.createElement('i', { className: 'acms-admin-ico-checkbox' }),
            '\u30D6\u30E9\u30A6\u30B6\u5074\u306E\u30EA\u30B5\u30A4\u30BA\u6A5F\u80FD\u3092\u4F7F\u7528\u3059\u308B'
          )
        ),
        _react2.default.createElement(
          'p',
          { className: 'acms-admin-form-checkbox' },
          _react2.default.createElement('input', { type: 'checkbox', onChange: this.updateState.bind(this, 'alt', !alt), checked: alt, id: 'alt-checkbox' }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'alt-checkbox' },
            _react2.default.createElement('i', { className: 'acms-admin-ico-checkbox' }),
            ' alt\u8868\u793A\u7528\u5165\u529B\u6B04\u3092\u4F7F\u7528\u3059\u308B'
          )
        )
      );
    }
  }, {
    key: 'renderAlert',
    value: function renderAlert() {
      var alert = this.state.alert;

      if (alert) {
        return _react2.default.createElement(
          'p',
          { className: 'acms-admin-alert acms-admin-alert-icon acms-admin-alert-danger', style: { fontSize: '12px' } },
          _react2.default.createElement('span', { className: 'acms-admin-icon acms-admin-alert-icon-before acms-admin-icon-attention', 'aria-hidden': 'true' }),
          'type\u3068\u30BF\u30A4\u30C8\u30EB\u3068\u30D5\u30A3\u30FC\u30EB\u30C9\u3001\u5168\u3066\u3092\u5165\u529B\u3057\u306A\u3044\u3068\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9\u3092\u751F\u6210\u3067\u304D\u307E\u305B\u3093\u3002',
          _react2.default.createElement(
            'button',
            { className: 'js-acms-alert-close acms-admin-alert-icon-after', onClick: this.removeAlert.bind(this) },
            '\xD7'
          )
        );
      }
      return null;
    }
  }, {
    key: 'renderGroupAlert',
    value: function renderGroupAlert() {
      var groupAlert = this.state.groupAlert;

      if (groupAlert) {
        return _react2.default.createElement(
          'p',
          { className: 'acms-admin-alert acms-admin-alert-icon acms-admin-alert-danger', style: { fontSize: '12px' } },
          _react2.default.createElement('span', { className: 'acms-admin-icon acms-admin-alert-icon-before acms-admin-icon-attention', 'aria-hidden': 'true' }),
          'group\u540D\u3092\u5165\u529B\u3057\u306A\u3044\u3068group\u3092\u751F\u6210\u3067\u304D\u307E\u305B\u3093\u3002',
          _react2.default.createElement(
            'button',
            { className: 'js-acms-alert-close acms-admin-alert-icon-after', onClick: this.removeGroupAlert.bind(this) },
            '\xD7'
          )
        );
      }
      return null;
    }
  }, {
    key: 'renderDuplicateAlert',
    value: function renderDuplicateAlert() {
      var duplicatedField = this.state.duplicatedField;

      if (duplicatedField) {
        return _react2.default.createElement(
          'p',
          { className: 'acms-admin-alert acms-admin-alert-icon acms-admin-alert-danger', style: { fontSize: '12px' } },
          _react2.default.createElement('span', { className: 'acms-admin-icon acms-admin-alert-icon-before acms-admin-icon-attention', 'aria-hidden': 'true' }),
          'group\u540D\u3068\u30D5\u30A3\u30FC\u30EB\u30C9\u540D\u3092\u540C\u3058\u5024\u306B\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002',
          _react2.default.createElement(
            'button',
            { className: 'js-acms-alert-close acms-admin-alert-icon-after', onClick: this.removeDuplicateAlert.bind(this) },
            '\xD7'
          )
        );
      }
      return null;
    }
  }, {
    key: 'renderFile',
    value: function renderFile() {
      var _this9 = this;

      var _state8 = this.state,
          extension = _state8.extension,
          fileName = _state8.fileName,
          fileNameMethod = _state8.fileNameMethod;

      return _react2.default.createElement(
        'div',
        { className: 'customFieldFileContainer' },
        _react2.default.createElement(
          'div',
          { className: 'customFieldFileNameOptContainer' },
          _react2.default.createElement(
            'div',
            { className: 'acms-admin-form-radio' },
            _react2.default.createElement('input', { type: 'radio', checked: fileNameMethod === 'random', id: 'file-name-method-random', onChange: this.updateState.bind(this, 'fileNameMethod', 'random') }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'file-name-method-random' },
              _react2.default.createElement('i', { className: 'acms-admin-ico-radio' }),
              '\u30D5\u30A1\u30A4\u30EB\u540D\uFF08\u30E9\u30F3\u30C0\u30E0\uFF09'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'acms-admin-form-radio' },
            _react2.default.createElement('input', { type: 'radio', checked: fileNameMethod === 'fix', id: 'file-name-method-fix', onChange: this.updateState.bind(this, 'fileNameMethod', 'fix') }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'file-name-method-fix' },
              _react2.default.createElement('i', { className: 'acms-admin-ico-radio' }),
              '\u30D5\u30A1\u30A4\u30EB\u540D\uFF08\u56FA\u5B9A\uFF09'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'acms-admin-form-radio' },
            _react2.default.createElement('input', { type: 'radio', checked: fileNameMethod === 'asis', id: 'file-name-method-asis', onChange: this.updateState.bind(this, 'fileNameMethod', 'asis') }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'file-name-method-asis' },
              _react2.default.createElement('i', { className: 'acms-admin-ico-radio' }),
              '\u30D5\u30A1\u30A4\u30EB\u540D\uFF08\u305D\u306E\u307E\u307E\uFF09'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'customFieldInputGroup customFieldInputFileGroup' },
            fileNameMethod === 'random' && _react2.default.createElement('input', { type: 'text', placeholder: '\u30E9\u30F3\u30C0\u30E0\u306E\u6587\u5B57\u5217\u304C\u5165\u308A\u307E\u3059', disabled: true }),
            fileNameMethod === 'fix' && _react2.default.createElement('input', { type: 'text', value: fileName, onInput: function onInput(e) {
                _this9.updateState('fileName', e.target.value);
              }, placeholder: '\u4F8B\uFF09example.pdf' }),
            fileNameMethod === 'asis' && _react2.default.createElement('input', { type: 'text', placeholder: '\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u540D', disabled: true })
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            '\u62E1\u5F35\u5B50\u5236\u9650\uFF08pdf\u306A\u3069\uFF09'
          ),
          _react2.default.createElement('input', { type: 'text', value: extension, onInput: function onInput(e) {
              _this9.updateState('extension', e.target.value);
            }, placeholder: '\u4F8B\uFF09pdf' })
        )
      );
    }
  }]);
  return Base;
}(_react.Component);

exports.default = Base;