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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UnitGroupConfirmSource = function (_Component) {
  (0, _inherits3.default)(UnitGroupConfirmSource, _Component);

  function UnitGroupConfirmSource() {
    (0, _classCallCheck3.default)(this, UnitGroupConfirmSource);
    return (0, _possibleConstructorReturn3.default)(this, (UnitGroupConfirmSource.__proto__ || (0, _getPrototypeOf2.default)(UnitGroupConfirmSource)).apply(this, arguments));
  }

  (0, _createClass3.default)(UnitGroupConfirmSource, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          unitGroupTitle = _props.unitGroupTitle,
          unitGroupName = _props.unitGroupName,
          unitgroupitems = _props.unitgroupitems,
          acmscss = _props.acmscss;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        unitGroupTitle && _react2.default.createElement(
          'h2',
          { className: (0, _classnames2.default)({ "acms-admin-admin-title2": acmscss }) },
          unitGroupTitle
        ),
        _react2.default.createElement(
          'table',
          { className: (0, _classnames2.default)({ "adminTable acms-admin-table-admin-edit": acmscss }) },
          _react2.default.createElement(
            'thead',
            { className: (0, _classnames2.default)({ "acms-admin-hide-sp": acmscss }) },
            _react2.default.createElement(
              'tr',
              null,
              unitgroupitems.map(function (item) {
                return _react2.default.createElement(
                  'th',
                  { className: (0, _classnames2.default)({ "acms-admin-table-left": acmscss }) },
                  item.title
                );
              })
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            '<!-- BEGIN ' + unitGroupName + ':loop -->',
            _react2.default.createElement(
              'tr',
              null,
              unitgroupitems.map(function (item) {
                if (item.type === 'text') {
                  return _react2.default.createElement(
                    'td',
                    null,
                    '{' + item.name + '}'
                  );
                } else if (item.type === 'textarea') {
                  return _react2.default.createElement(
                    'td',
                    null,
                    '{' + item.name + '}[escape|nl2br]'
                  );
                } else if (item.type === 'select') {
                  return _react2.default.createElement(
                    'td',
                    null,
                    item.option.map(function (option) {
                      if (!option.label) {
                        return null;
                      }
                      return _react2.default.createElement(
                        'div',
                        null,
                        '<!-- BEGIN_IF [{' + item.name + '}/eq/' + option.value + '] -->',
                        option.label,
                        '<!-- END_IF -->'
                      );
                    })
                  );
                } else if (item.type === 'radio') {
                  return _react2.default.createElement(
                    'td',
                    null,
                    item.option.map(function (option) {
                      if (!option.label) {
                        return null;
                      }
                      return _react2.default.createElement(
                        'div',
                        null,
                        '<!-- BEGIN_IF [{' + item.name + '}/eq/' + option.value + '] -->',
                        label,
                        '<!-- END_IF -->'
                      );
                    })
                  );
                } else if (item.type === 'file') {
                  var src = "/images/fileicon/";
                  var alt = 'file';
                  if (item.extension) {
                    src += item.extension + '.gif';
                    alt += item.extension;
                  } else {
                    src += 'file.gif';
                  }

                  return _react2.default.createElement(
                    'td',
                    null,
                    '<!-- BEGIN ' + item.name + '@path:veil -->',
                    _react2.default.createElement(
                      'a',
                      { href: '%{ARCHIVES_DIR}{' + item.name + '@path}' },
                      _react2.default.createElement('img', { src: src, width: '64', height: '64', alt: alt })
                    ),
                    '<!-- END ' + item.name + '@path:veil -->'
                  );
                } else if (item.type === 'image') {
                  return _react2.default.createElement(
                    'td',
                    null,
                    '<!-- BEGIN ' + item.name + '@path:veil -->',
                    _react2.default.createElement('img', { src: '%{ARCHIVES_DIR}{' + item.name + '@path}', width: '64', height: '64', alt: item.alt }),
                    '<!-- END ' + item.name + '@path:veil -->'
                  );
                }
              })
            ),
            '<!-- END ' + unitGroupName + ':loop -->'
          )
        )
      );
    }
  }]);
  return UnitGroupConfirmSource;
}(_react.Component);

exports.default = UnitGroupConfirmSource;