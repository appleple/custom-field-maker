'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactCopyToClipboard = require('react-copy-to-clipboard');

var _reactCopyToClipboard2 = _interopRequireDefault(_reactCopyToClipboard);

var _highlighter = require('../components/highlighter');

var _highlighter2 = _interopRequireDefault(_highlighter);

var _field = require('../components/field');

var _field2 = _interopRequireDefault(_field);

var _fieldGroup = require('../components/field-group');

var _fieldGroup2 = _interopRequireDefault(_fieldGroup);

var _fieldSource = require('../components/field-source');

var _fieldSource2 = _interopRequireDefault(_fieldSource);

var _fieldConfirmSource = require('../components/field-confirm-source');

var _fieldConfirmSource2 = _interopRequireDefault(_fieldConfirmSource);

var _fieldGroupSource = require('../components/field-group-source');

var _fieldGroupSource2 = _interopRequireDefault(_fieldGroupSource);

var _fieldGroupConfirmSource = require('../components/field-group-confirm-source');

var _fieldGroupConfirmSource2 = _interopRequireDefault(_fieldGroupConfirmSource);

var _unit = require('../components/unit');

var _unit2 = _interopRequireDefault(_unit);

var _unitSource = require('../components/unit-source');

var _unitSource2 = _interopRequireDefault(_unitSource);

var _unitConfirmSource = require('../components/unit-confirm-source');

var _unitConfirmSource2 = _interopRequireDefault(_unitConfirmSource);

var _unitGroup = require('../components/unit-group');

var _unitGroup2 = _interopRequireDefault(_unitGroup);

var _unitGroupSource = require('../components/unit-group-source');

var _unitGroupSource2 = _interopRequireDefault(_unitGroupSource);

var _unitGroupConfirmSource = require('../components/unit-group-confirm-source');

var _unitGroupConfirmSource2 = _interopRequireDefault(_unitGroupConfirmSource);

var _notify = require('../components/notify');

var _notify2 = _interopRequireDefault(_notify);

var _constants = require('../constants');

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomfieldMaker = function (_Component) {
  (0, _inherits3.default)(CustomfieldMaker, _Component);

  function CustomfieldMaker(props) {
    (0, _classCallCheck3.default)(this, CustomfieldMaker);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CustomfieldMaker.__proto__ || (0, _getPrototypeOf2.default)(CustomfieldMaker)).call(this, props));

    _this.state = {
      mode: 'normal',
      editMode: "source",
      acmscss: false,
      source: '',
      copied: false
    };
    return _this;
  }

  (0, _createClass3.default)(CustomfieldMaker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var actions = this.props.actions;

      var storage = JSON.parse(localStorage.getItem(_constants.STORAGENAME));
      if (storage) {
        actions.restore(storage);
      }
    }
  }, {
    key: 'renderSelectGroup',
    value: function renderSelectGroup() {
      return _react2.default.createElement(
        'select',
        { id: 'type', value: type, className: 'acms-admin-form-width-full' },
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
        )
      );
    }
  }, {
    key: 'updateState',
    value: function updateState(prop, value) {
      this.setState((0, _defineProperty3.default)({}, prop, value));
    }
  }, {
    key: 'setSource',
    value: function setSource(source) {
      this.setState({
        source: source
      });
    }
  }, {
    key: 'clearCustomfield',
    value: function clearCustomfield() {
      var actions = this.props.actions;

      if (confirm('履歴を削除してもよろしいですか？')) {
        actions.clearCustomfield();
      }
    }
  }, {
    key: 'clearGroupItem',
    value: function clearGroupItem() {
      var actions = this.props.actions;

      if (confirm('履歴を削除してもよろしいですか？')) {
        actions.clearGroupItem();
      }
    }
  }, {
    key: 'clearCustomUnit',
    value: function clearCustomUnit() {
      var actions = this.props.actions;

      if (confirm('履歴を削除してもよろしいですか？')) {
        actions.clearCustomUnit();
      }
    }
  }, {
    key: 'clearUnitGroupItem',
    value: function clearUnitGroupItem() {
      var actions = this.props.actions;

      if (confirm('履歴を削除してもよろしいですか？')) {
        actions.clearUnitGroupItem();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          mode = _state.mode,
          editMode = _state.editMode,
          source = _state.source,
          copied = _state.copied;
      var _props = this.props,
          actions = _props.actions,
          customfield = _props.customfield,
          groupitems = _props.groupitems,
          customunit = _props.customunit,
          unitgroupitems = _props.unitgroupitems,
          groupTitle = _props.groupTitle,
          unitGroupTitle = _props.unitGroupTitle,
          unitGroupName = _props.unitGroupName,
          groupName = _props.groupName,
          acmscss = _props.acmscss,
          jsValidator = _props.jsValidator,
          direction = _props.direction;


      return _react2.default.createElement(
        'div',
        { className: 'acms-admin-form' },
        _react2.default.createElement(
          'div',
          { className: 'acms-admin-form-radio' },
          _react2.default.createElement('input', { type: 'radio', value: 'normal', id: 'input-radio-mode-normal', checked: mode === 'normal', onChange: this.updateState.bind(this, 'mode', 'normal') }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'input-radio-mode-normal' },
            _react2.default.createElement('i', { className: 'acms-admin-ico-radio' }),
            '\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'acms-admin-form-radio' },
          _react2.default.createElement('input', { type: 'radio', value: 'group', id: 'input-radio-mode-group', checked: mode === 'group', onChange: this.updateState.bind(this, 'mode', 'group') }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'input-radio-mode-group' },
            _react2.default.createElement('i', { className: 'acms-admin-ico-radio' }),
            '\u30AB\u30B9\u30BF\u30E0\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'acms-admin-form-radio' },
          _react2.default.createElement('input', { type: 'radio', value: 'unit', id: 'input-radio-mode-unit', checked: mode === 'unit', onChange: this.updateState.bind(this, 'mode', 'unit') }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'input-radio-mode-unit' },
            _react2.default.createElement('i', { className: 'acms-admin-ico-radio' }),
            '\u30AB\u30B9\u30BF\u30E0\u30E6\u30CB\u30C3\u30C8'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'acms-admin-form-radio' },
          _react2.default.createElement('input', { type: 'radio', value: 'unit-group', id: 'input-radio-mode-unit-group', checked: mode === 'unit-group', onChange: this.updateState.bind(this, 'mode', 'unit-group') }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'input-radio-mode-unit-group' },
            _react2.default.createElement('i', { className: 'acms-admin-ico-radio' }),
            '\u30AB\u30B9\u30BF\u30E0\u30E6\u30CB\u30C3\u30C8\uFF08\u30D5\u30A3\u30FC\u30EB\u30C9\u30B0\u30EB\u30FC\u30D7\uFF09'
          )
        ),
        mode === 'normal' && _react2.default.createElement(_field2.default, { actions: actions }),
        mode === 'group' && _react2.default.createElement(_fieldGroup2.default, { actions: actions }),
        mode === 'unit' && _react2.default.createElement(_unit2.default, { actions: actions }),
        mode === 'unit-group' && _react2.default.createElement(_unitGroup2.default, { actions: actions }),
        _react2.default.createElement(
          'div',
          { className: 'acms-admin-tabs' },
          _react2.default.createElement(
            'ul',
            { className: 'customFieldTabs' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#source', className: (0, _classnames2.default)({ 'customFieldTabActive': editMode === 'source' }), onClick: this.updateState.bind(this, 'editMode', 'source') },
                '\u5165\u529B\u7528\u30BD\u30FC\u30B9'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#preview', className: (0, _classnames2.default)({ 'customFieldTabActive': editMode === 'preview' }), onClick: this.updateState.bind(this, 'editMode', 'preview') },
                '\u30D7\u30EC\u30D3\u30E5\u30FC'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#confirm', className: (0, _classnames2.default)({ 'customFieldTabActive': editMode === 'confirm' }), onClick: this.updateState.bind(this, 'editMode', 'confirm') },
                '\u51FA\u529B\u7528\u30BD\u30FC\u30B9'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'acms-admin-tabs-panel' },
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'div',
                { className: 'acms-admin-form-checkbox' },
                _react2.default.createElement('input', { type: 'checkbox', onChange: actions.toggleAcmsCss, checked: acmscss, id: 'acmscss-checkbox' }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'acmscss-checkbox' },
                  _react2.default.createElement('i', { className: 'acms-admin-ico-checkbox' }),
                  'acms-admin.css\u3092\u4F7F\u7528\u3059\u308B'
                )
              ),
              mode === 'normal' && _react2.default.createElement(
                'div',
                { className: 'acms-admin-form-checkbox' },
                _react2.default.createElement('input', { type: 'checkbox', onChange: actions.toggleJsValidator, checked: jsValidator, id: 'jsvalidator-checkbox' }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'jsvalidator-checkbox' },
                  _react2.default.createElement('i', { className: 'acms-admin-ico-checkbox' }),
                  'JavaScript\u306B\u3088\u308B\u30D0\u30EA\u30C7\u30FC\u30C8\u3092\u4F7F\u7528\u3059\u308B'
                )
              ),
              (mode === 'group' || mode === 'unit-group') && _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'acms-admin-form-radio' },
                  _react2.default.createElement('input', { type: 'radio', id: 'direction-horizontal',
                    onChange: function onChange() {
                      actions.changeDirection('horizontal');
                    }, checked: direction === 'horizontal' }),
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'direction-horizontal' },
                    _react2.default.createElement('i', { className: 'acms-admin-ico-radio' }),
                    '\u6A2A\u65B9\u5411'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'acms-admin-form-radio' },
                  _react2.default.createElement('input', { type: 'radio', id: 'direction-vertical',
                    onChange: function onChange() {
                      actions.changeDirection('vertical');
                    }, checked: direction === 'vertical' }),
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'direction-vertical' },
                    _react2.default.createElement('i', { className: 'acms-admin-ico-radio' }),
                    '\u7E26\u65B9\u5411'
                  )
                )
              ),
              editMode !== 'preview' && _react2.default.createElement(
                'div',
                { style: { display: 'inline-block', position: 'relative' } },
                _react2.default.createElement(
                  _reactCopyToClipboard2.default,
                  { text: source, onCopy: function onCopy() {
                      return _this2.setState({ copied: true });
                    } },
                  _react2.default.createElement(
                    'button',
                    { className: 'acms-admin-btn-admin' },
                    '\u30BD\u30FC\u30B9\u3092\u30B3\u30D4\u30FC'
                  )
                ),
                _react2.default.createElement(_notify2.default, { message: '\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC\u3057\u307E\u3057\u305F', show: copied, onFinish: function onFinish() {
                    _this2.setState({ copied: false });
                  } })
              ),
              mode === 'normal' && _react2.default.createElement(
                'button',
                { onClick: this.clearCustomfield.bind(this), className: 'acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right' },
                '\u5C65\u6B74\u30AF\u30EA\u30A2'
              ),
              mode === 'group' && _react2.default.createElement(
                'button',
                { onClick: this.clearGroupItem.bind(this), className: 'acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right' },
                '\u5C65\u6B74\u30AF\u30EA\u30A2'
              ),
              mode === 'unit' && _react2.default.createElement(
                'button',
                { onClick: this.clearCustomUnit.bind(this), className: 'acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right' },
                '\u5C65\u6B74\u30AF\u30EA\u30A2'
              ),
              mode === 'unit-group' && _react2.default.createElement(
                'button',
                { onClick: this.clearUnitGroupItem.bind(this), className: 'acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right' },
                '\u5C65\u6B74\u30AF\u30EA\u30A2'
              )
            ),
            editMode === 'source' && _react2.default.createElement(
              _highlighter2.default,
              { onSourceGenerated: this.setSource.bind(this) },
              mode === 'normal' && _react2.default.createElement(_fieldSource2.default, { customfield: customfield, acmscss: acmscss, jsValidator: jsValidator }),
              mode === 'group' && _react2.default.createElement(_fieldGroupSource2.default, { groupitems: groupitems, acmscss: acmscss, jsValidator: jsValidator, groupTitle: groupTitle, groupName: groupName, direction: direction }),
              mode === 'unit' && _react2.default.createElement(_unitSource2.default, { customunit: customunit, acmscss: acmscss }),
              mode === 'unit-group' && _react2.default.createElement(_unitGroupSource2.default, { unitgroupitems: unitgroupitems, acmscss: acmscss, jsValidator: jsValidator, unitGroupTitle: unitGroupTitle, unitGroupName: unitGroupName, direction: direction })
            ),
            editMode === 'preview' && _react2.default.createElement(
              'div',
              { className: 'customFieldPreview' },
              mode === 'normal' && _react2.default.createElement(_fieldSource2.default, { customfield: customfield, acmscss: acmscss, preview: true }),
              mode === 'group' && _react2.default.createElement(_fieldGroupSource2.default, { groupitems: groupitems, acmscss: acmscss, groupTitle: groupTitle, groupName: groupName, preview: true, direction: direction }),
              mode === 'unit' && _react2.default.createElement(_unitSource2.default, { customunit: customunit, acmscss: acmscss, preview: true }),
              mode === 'unit-group' && _react2.default.createElement(_unitGroupSource2.default, { unitgroupitems: unitgroupitems, acmscss: acmscss, unitGroupTitle: unitGroupTitle, unitGroupName: unitGroupName, preview: true, direction: direction })
            ),
            editMode === 'confirm' && _react2.default.createElement(
              _highlighter2.default,
              { onSourceGenerated: this.setSource.bind(this) },
              mode === 'normal' && _react2.default.createElement(_fieldConfirmSource2.default, { customfield: customfield, acmscss: acmscss }),
              mode === 'group' && _react2.default.createElement(_fieldGroupConfirmSource2.default, { groupitems: groupitems, acmscss: acmscss, groupTitle: groupTitle, groupName: groupName, direction: direction }),
              mode === 'unit' && _react2.default.createElement(_unitConfirmSource2.default, { customunit: customunit, acmscss: acmscss }),
              mode === 'unit-group' && _react2.default.createElement(_unitGroupConfirmSource2.default, { unitgroupitems: unitgroupitems, acmscss: acmscss, unitGroupTitle: unitGroupTitle, unitGroupName: unitGroupName, direction: direction })
            )
          )
        )
      );
    }
  }]);
  return CustomfieldMaker;
}(_react.Component);

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return { actions: (0, _redux.bindActionCreators)(actions, dispatch) };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CustomfieldMaker);