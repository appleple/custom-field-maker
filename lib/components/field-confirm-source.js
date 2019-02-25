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

var FieldConfirmSource = function (_Component) {
  (0, _inherits3.default)(FieldConfirmSource, _Component);

  function FieldConfirmSource(props) {
    (0, _classCallCheck3.default)(this, FieldConfirmSource);
    return (0, _possibleConstructorReturn3.default)(this, (FieldConfirmSource.__proto__ || (0, _getPrototypeOf2.default)(FieldConfirmSource)).call(this, props));
  }

  (0, _createClass3.default)(FieldConfirmSource, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          customfield = _props.customfield,
          acmscss = _props.acmscss;


      return _react2.default.createElement(
        'table',
        { className: (0, _classnames2.default)({ "acms-admin-table-admin-edit": acmscss }) },
        customfield.map(function (item) {
          if (!item.name) {
            return null;
          }
          if (item.type === 'text') {
            return _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                item.title
              ),
              _react2.default.createElement(
                'td',
                null,
                '{' + item.name + '}'
              )
            );
          } else if (item.type === 'textarea') {
            return _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                item.title
              ),
              _react2.default.createElement(
                'td',
                null,
                '{' + item.name + '}[escape|nl2br]'
              )
            );
          } else if (item.type === 'select') {
            return _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                item.title
              ),
              _react2.default.createElement(
                'td',
                null,
                item.option.map(function (option) {
                  return _react2.default.createElement(
                    'div',
                    null,
                    '<!-- BEGIN_IF [{' + item.name + '}/eq/' + option.value + '] -->',
                    option.label,
                    '<!-- END_IF -->'
                  );
                })
              )
            );
          } else if (item.type === 'radio') {
            return _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                item.title
              ),
              _react2.default.createElement(
                'td',
                null,
                item.option.map(function (option) {
                  return '<!-- BEGIN_IF [{' + item.name + '}/eq/' + option.value + '] -->\n              ' + option.label + '\n              <!-- END_IF -->';
                })
              )
            );
          } else if (item.type === 'checkbox') {
            return _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                item.title
              ),
              _react2.default.createElement(
                'td',
                null,
                '<!-- BEGIN ' + item.name + ':loop -->',
                '<!-- BEGIN ' + item.name + ':glue -->,<!-- END ' + item.name + ':glue -->',
                item.option.map(function (option) {
                  return '<!-- BEGIN_IF [{' + item.name + '}/eq/' + option.value + '] -->\n              ' + option.value + '\n              <!-- END_IF -->';
                }),
                '<!-- END ' + item.name + ':loop -->'
              )
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
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                item.title
              ),
              _react2.default.createElement(
                'td',
                null,
                '<!-- BEGIN ' + item.name + '@path:veil -->',
                _react2.default.createElement(
                  'a',
                  { href: '%{ARCHIVES_DIR}{' + item.name + '@path}' },
                  _react2.default.createElement('img', { src: src, width: '64', height: '64', alt: alt })
                ),
                '<!-- END ' + item.name + '@path:veil -->'
              )
            );
          } else if (item.type === 'image') {
            return _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                item.title
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement('img', { src: '%{ARCHIVES_DIR}{' + item.name + '@path}', width: '64', height: '64', alt: '{' + item.name + '@alt}' })
              )
            );
          } else if (item.type === 'media') {
            return _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                item.title
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'div',
                  { style: { width: '300px', height: '300px' } },
                  _react2.default.createElement('img', { className: 'js-focused-image',
                    'data-focus-x': '{' + item.name + '@focalX}',
                    'data-focus-y': '{' + item.name + '@focalY}',
                    alt: '{' + item.name + '@alt}',
                    src: '%{MEDIA_ARCHIVES_DIR}{' + item.name + '@path}' })
                ),
                '<!-- BEGIN_IF [{' + item.name + '@caption}/nem] -->',
                _react2.default.createElement(
                  'h3',
                  null,
                  '<!-- BEGIN_IF [{' + item.name + '@path}/em] -->',
                  _react2.default.createElement(
                    'a',
                    { href: '{' + item.name + '@path}' },
                    '{' + item.name + '@caption}'
                  ),
                  '<!-- ELSE -->',
                  '{' + item.name + '@caption}',
                  '<!-- END_IF -->'
                ),
                '<!-- END_IF -->',
                '<!-- BEGIN_IF [{' + item.name + '@text}/nem] -->',
                _react2.default.createElement(
                  'p',
                  null,
                  '{' + item.name + '@text}'
                ),
                '<!-- END_IF -->'
              )
            );
          }
        })
      );
    }
  }]);
  return FieldConfirmSource;
}(_react.Component);

exports.default = FieldConfirmSource;