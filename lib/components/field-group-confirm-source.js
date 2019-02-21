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

var ConditionalWrap = function ConditionalWrap(_ref) {
  var condition = _ref.condition,
      wrap = _ref.wrap,
      children = _ref.children;
  return condition ? wrap(children) : children;
};

var FieldGroupConfirmSource = function (_Component) {
  (0, _inherits3.default)(FieldGroupConfirmSource, _Component);

  function FieldGroupConfirmSource() {
    (0, _classCallCheck3.default)(this, FieldGroupConfirmSource);
    return (0, _possibleConstructorReturn3.default)(this, (FieldGroupConfirmSource.__proto__ || (0, _getPrototypeOf2.default)(FieldGroupConfirmSource)).apply(this, arguments));
  }

  (0, _createClass3.default)(FieldGroupConfirmSource, [{
    key: 'wrapTable',
    value: function wrapTable(children, title) {
      var direction = this.props.direction;

      return _react2.default.createElement(
        ConditionalWrap,
        {
          condition: direction === 'vertical',
          wrap: function wrap(children) {
            return _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                title
              ),
              children
            );
          }
        },
        children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          groupTitle = _props.groupTitle,
          groupName = _props.groupName,
          groupitems = _props.groupitems,
          acmscss = _props.acmscss,
          direction = _props.direction;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        groupTitle && _react2.default.createElement(
          'h2',
          { className: (0, _classnames2.default)({ "acms-admin-admin-title2": acmscss }) },
          groupTitle
        ),
        _react2.default.createElement(
          'table',
          { className: (0, _classnames2.default)({ "adminTable acms-admin-table-admin-edit": acmscss }) },
          direction === 'horizontal' && _react2.default.createElement(
            'thead',
            { className: (0, _classnames2.default)({ "acms-admin-hide-sp": acmscss }) },
            _react2.default.createElement(
              'tr',
              null,
              groupitems.map(function (item) {
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
            '<!-- BEGIN ' + groupName + ':loop -->',
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                ConditionalWrap,
                {
                  condition: direction === 'vertical',
                  wrap: function wrap(children) {
                    return _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'table',
                        null,
                        children
                      )
                    );
                  }
                },
                groupitems.map(function (item) {
                  if (item.type === 'text') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      '{' + item.name + '}'
                    ), item.title);
                  } else if (item.type === 'textarea') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      '{' + item.name + '}[escape|nl2br]'
                    ), item.title);
                  } else if (item.type === 'select') {
                    return _this2.wrapTable(_react2.default.createElement(
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
                    ), item.title);
                  } else if (item.type === 'radio') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      item.option.map(function (option) {
                        if (!option.label) {
                          return null;
                        }
                        return '<!-- BEGIN_IF [{' + item.name + '}/eq/' + option.value + '] -->\n                        ' + option.label + '\n                        <!-- END_IF -->';
                      })
                    ), item.title);
                  } else if (item.type === 'file') {
                    var src = "/images/fileicon/";
                    var alt = 'file';
                    if (item.extension) {
                      src += item.extension + '.gif';
                      alt += item.extension;
                    } else {
                      src += 'file.gif';
                    }

                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      '<!-- BEGIN ' + item.name + '@path:veil -->',
                      _react2.default.createElement(
                        'a',
                        { href: '%{ARCHIVES_DIR}{' + item.name + '@path}' },
                        _react2.default.createElement('img', { src: src, width: '64', height: '64', alt: alt })
                      ),
                      '<!-- END ' + item.name + '@path:veil -->'
                    ), item.title);
                  } else if (item.type === 'image') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      '<!-- BEGIN ' + item.name + '@path:veil -->',
                      _react2.default.createElement('img', { src: '%{ARCHIVES_DIR}{' + item.name + '@path}', className: (0, _classnames2.default)({ "acms-admin-img-responsive": acmscss }), alt: '{' + item.name + '@alt}' }),
                      '<!-- END ' + item.name + '@path:veil -->'
                    ), item.title);
                  } else if (item.type === 'media') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)({ "acms-admin-col-md-4": acmscss }) },
                        '<!-- BEGIN_IF [{' + item.name + '@path}/nem] -->',
                        _react2.default.createElement(
                          'a',
                          { className: (0, _classnames2.default)({ "acms-admin-thumbnail": acmscss }), href: '{' + item.name + '@path}' },
                          '<!-- ELSE -->',
                          _react2.default.createElement(
                            'div',
                            { className: (0, _classnames2.default)({ "acms-admin-thumbnail": acmscss }) },
                            '<!-- END_IF -->',
                            _react2.default.createElement(
                              'div',
                              { style: { width: '100%', height: '150px' } },
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
                              '{' + item.name + '@caption}'
                            ),
                            '<!-- END_IF -->',
                            '<!-- BEGIN_IF [{' + item.name + '@text}/nem] -->',
                            _react2.default.createElement(
                              'p',
                              null,
                              '{' + item.name + '@text}'
                            ),
                            '<!-- END_IF -->',
                            '<!-- BEGIN_IF [{' + item.name + '@path}/nem] -->'
                          ),
                          '<!-- ELSE -->'
                        ),
                        '<!-- END_IF -->'
                      )
                    ), item.title);
                  }
                })
              )
            ),
            '<!-- END ' + groupName + ':loop -->'
          )
        )
      );
    }
  }]);
  return FieldGroupConfirmSource;
}(_react.Component);

exports.default = FieldGroupConfirmSource;