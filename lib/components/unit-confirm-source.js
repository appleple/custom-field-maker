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

var UnitConfirmSource = function (_Component) {
  (0, _inherits3.default)(UnitConfirmSource, _Component);

  function UnitConfirmSource(props) {
    (0, _classCallCheck3.default)(this, UnitConfirmSource);
    return (0, _possibleConstructorReturn3.default)(this, (UnitConfirmSource.__proto__ || (0, _getPrototypeOf2.default)(UnitConfirmSource)).call(this, props));
  }

  (0, _createClass3.default)(UnitConfirmSource, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          customunit = _props.customunit,
          acmscss = _props.acmscss;


      return _react2.default.createElement(
        'table',
        { className: (0, _classnames2.default)({ 'acms-admin-table-admin-edit acms-admin-table-admin-edit-bordered': acmscss }) },
        customunit.map(function (item) {
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
            var src = '/images/fileicon/';
            var alt = 'file';
            if (item.extension) {
              src += item.extension + '.svg';
              alt += item.extension;
            } else {
              src += 'file.svg';
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
                item.mediaType !== 'file' && _react2.default.createElement(
                  _react.Fragment,
                  null,
                  '<!-- BEGIN_IF [{' + item.name + '@link}/nem] -->',
                  _react2.default.createElement(
                    'a',
                    { href: '{' + item.name + '@link}' },
                    '<!-- END_IF -->',
                    item.useFocusImage && _react2.default.createElement(
                      'div',
                      { style: { width: item.focusImageWidth + 'px', height: item.focusImageHeight + 'px' } },
                      _react2.default.createElement('img', {
                        className: 'js-focused-image',
                        'data-focus-x': '{' + item.name + '@focalX}',
                        'data-focus-y': '{' + item.name + '@focalY}',
                        alt: '{' + item.name + '@alt}',
                        src: '%{MEDIA_ARCHIVES_DIR}{' + item.name + '@path}[resizeImg(' + item.focusImageWidth + ')]'
                      })
                    ),
                    !item.useFocusImage && _react2.default.createElement('img', {
                      alt: '{' + item.name + '@alt}',
                      src: '%{MEDIA_ARCHIVES_DIR}{' + item.name + '@path}'
                    }),
                    '<!-- BEGIN_IF [{' + item.name + '@link}/nem] -->'
                  ),
                  '<!-- END_IF -->'
                ),
                item.mediaType === 'file' && _react2.default.createElement(
                  'a',
                  { href: '%{MEDIA_ARCHIVES_DIR}{' + item.name + '@path}' },
                  _react2.default.createElement('img', { src: '{' + item.name + '@thumbnail}', style: { width: '64px', height: 'auto' } })
                ),
                '<!-- BEGIN_IF [{' + item.name + '@text}/nem] -->',
                _react2.default.createElement(
                  'p',
                  null,
                  '{' + item.name + '@text}'
                ),
                '<!-- END_IF -->'
              )
            );
          } else if (item.type === 'paper-editor') {
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
                '{' + item.name + '@html}[raw]'
              )
            );
          } else if (item.type === 'lite-editor') {
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
                '{' + item.name + '}[raw]'
              )
            );
          } else if (item.type === 'table') {
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
                '{' + item.name + '}[raw]'
              )
            );
          }
        })
      );
    }
  }]);
  return UnitConfirmSource;
}(_react.Component);

exports.default = UnitConfirmSource;