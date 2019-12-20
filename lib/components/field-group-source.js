'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var FieldGroupSource = function (_Component) {
  (0, _inherits3.default)(FieldGroupSource, _Component);

  function FieldGroupSource(props) {
    (0, _classCallCheck3.default)(this, FieldGroupSource);
    return (0, _possibleConstructorReturn3.default)(this, (FieldGroupSource.__proto__ || (0, _getPrototypeOf2.default)(FieldGroupSource)).call(this, props));
  }

  (0, _createClass3.default)(FieldGroupSource, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window.ACMS && ACMS.dispatchEvent) {
        ACMS.dispatchEvent('acmsCustomFieldMakerPreview', this.table, {
          item: this.table
        });
      }
    }
  }, {
    key: 'renderValidator',
    value: function renderValidator(item, acmscss) {
      var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _props = this.props,
          preview = _props.preview,
          jsValidator = _props.jsValidator;


      if (!item.openValidator) {
        return null;
      }

      return _react2.default.createElement(
        _react.Fragment,
        null,
        item.validator.map(function (validator) {
          var name = item.type === 'file' || item.type === 'image' ? item.name + '@path' : item.name;
          var classSuffix = bottom ? '1' : '{' + name + ':v#' + validator.option + '}';

          return _react2.default.createElement(
            _react.Fragment,
            null,
            !jsValidator && !bottom && _react2.default.createElement(
              _react.Fragment,
              null,
              validator.message && _react2.default.createElement(
                _react.Fragment,
                null,
                preview ? null : '<!-- BEGIN ' + name + ':validator#' + validator.option + ' -->',
                _react2.default.createElement(
                  'p',
                  { className: (0, _classnames2.default)({ 'acms-admin-text-error': acmscss }) },
                  validator.message
                ),
                preview ? null : '<!-- END ' + name + ':validator#' + validator.option + ' -->'
              )
            ),
            jsValidator && _react2.default.createElement(
              'div',
              { 'data-validator-label': name + '-v-' + validator.option, className: 'validator-result-' + classSuffix },
              _react2.default.createElement(
                'p',
                { className: 'error-text' },
                _react2.default.createElement('span', { className: 'acms-icon acms-icon-attension' }),
                validator.message
              )
            )
          );
        })
      );
    }
  }, {
    key: 'wrapTable',
    value: function wrapTable(children, title) {
      var direction = this.props.direction;

      return _react2.default.createElement(
        ConditionalWrap,
        {
          condition: direction === 'vertical',
          wrap: function wrap(child) {
            return _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                title
              ),
              child
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

      var _props2 = this.props,
          groupName = _props2.groupName,
          groupTitle = _props2.groupTitle,
          acmscss = _props2.acmscss,
          groupitems = _props2.groupitems,
          preview = _props2.preview,
          direction = _props2.direction;

      var groupLength = groupitems.length;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        groupTitle && _react2.default.createElement(
          'h2',
          { className: (0, _classnames2.default)({ 'acms-admin-admin-title2': acmscss }) },
          groupTitle
        ),
        groupName && _react2.default.createElement(
          'table',
          { className: (0, _classnames2.default)('js-fieldgroup-sortable', { 'adminTable acms-admin-table-admin-edit': acmscss }), ref: function ref(table) {
              return _this2.table = table;
            } },
          _react2.default.createElement(
            'thead',
            { className: (0, _classnames2.default)({ 'acms-admin-hide-sp': acmscss }) },
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                { className: (0, _classnames2.default)({ 'acms-admin-table-left acms-admin-admin-config-table-item-handle': acmscss }) },
                '\xA0'
              ),
              direction === 'horizontal' && _react2.default.createElement(
                _react.Fragment,
                null,
                groupitems.map(function (item) {
                  return _react2.default.createElement(
                    'th',
                    { className: (0, _classnames2.default)({ 'acms-admin-table-left': acmscss }) },
                    item.title,
                    item.tooltip && _react2.default.createElement('i', { className: 'acms-admin-icon-tooltip js-acms-tooltip', 'data-acms-tooltip': item.tooltip })
                  );
                })
              ),
              direction === 'vertical' && _react2.default.createElement('th', null),
              _react2.default.createElement(
                'th',
                { className: (0, _classnames2.default)({ 'acms-admin-table-left acms-admin-admin-config-table-action': acmscss }) },
                '\u524A\u9664'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            preview ? null : '<!-- BEGIN ' + groupName + ':loop -->',
            _react2.default.createElement(
              'tr',
              { className: 'sortable-item' },
              _react2.default.createElement(
                'td',
                { className: 'item-handle acms-admin-table-nowrap' },
                acmscss && _react2.default.createElement('i', { className: 'acms-admin-icon-sort' })
              ),
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
                      _react2.default.createElement('input', { type: 'text', name: item.name + '[]', value: '{' + item.name + '}', className: (0, _classnames2.default)({ 'acms-admin-form-width-full': acmscss }) }),
                      _this2.renderValidator(item, acmscss, false)
                    ), item.title);
                  } else if (item.type === 'textarea') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'textarea',
                        { name: item.name + '[]', className: (0, _classnames2.default)({ 'acms-admin-form-width-full': acmscss }) },
                        '{' + item.name + '}'
                      ),
                      _this2.renderValidator(item, acmscss, false)
                    ), item.title);
                  } else if (item.type === 'select') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'select',
                        { name: item.name + '[]', className: (0, _classnames2.default)({ 'acms-admin-form-width-full': acmscss }) },
                        _react2.default.createElement('option', { value: '' }),
                        item.option.map(function (option) {
                          if (!option.label) {
                            return null;
                          }
                          return _react2.default.createElement(
                            'option',
                            { value: option.value, 'data-tmp': '{' + item.name + ':selected#' + option.value + '}' },
                            option.label
                          );
                        })
                      ),
                      _this2.renderValidator(item, acmscss, false)
                    ), item.title);
                  } else if (item.type === 'radio') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      item.option.map(function (option) {
                        if (!option.label) {
                          return null;
                        }
                        return _react2.default.createElement(
                          'div',
                          { className: (0, _classnames2.default)({ 'acms-admin-form-radio': acmscss }) },
                          _react2.default.createElement('input', { type: 'radio', name: item.name + '[]', value: option.value, 'data-tmp': '{' + item.name + ':checked#' + option.value + '}', id: 'input-radio-' + item.name + '-' + option.value }),
                          _react2.default.createElement(
                            'label',
                            { htmlFor: 'input-radio-' + item.name + '-' + option.value },
                            acmscss && _react2.default.createElement('i', { className: 'acms-admin-ico-radio' }),
                            option.label
                          )
                        );
                      }),
                      _this2.renderValidator(item, acmscss, false)
                    ), item.title);
                  } else if (item.type === 'file') {
                    var src = '/images/fileicon/';
                    var alt = 'file';
                    if (item.extension) {
                      src += item.extension + '.svg';
                      alt += item.extension;
                    } else {
                      src += 'file.svg';
                    }

                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      preview ? null : '<!-- BEGIN_IF [{' + item.name + '@path}/nem] -->',
                      _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)({ 'acms-admin-form-checkbox': acmscss }) },
                        _react2.default.createElement('input', { type: 'checkbox', name: item.name + '@edit[]', value: 'delete', id: 'input-checkbox-' + item.name + '{i}@edit[]' }),
                        _react2.default.createElement(
                          'label',
                          { htmlFor: 'input-checkbox-' + item.name + '{i}@edit[]' },
                          acmscss && _react2.default.createElement('i', { className: 'acms-admin-ico-checkbox' }),
                          ' \u524A\u9664'
                        )
                      ),
                      _react2.default.createElement(
                        'a',
                        { href: '%{ARCHIVES_DIR}{' + item.name + '@path}' },
                        _react2.default.createElement('img', { src: src, width: '64', height: '64', alt: alt })
                      ),
                      preview ? null : '<!-- END_IF -->',
                      _react2.default.createElement('input', { type: 'hidden', name: item.name + '@old[]', value: '{' + item.name + '@path}' }),
                      item.extension && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@extension[]', value: item.extension }),
                      item.fileNameMethod === 'random' && item.fileName && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@filename[]', value: '' }),
                      item.fileNameMethod === 'fix' && item.fileName && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@filename[]', value: item.fileName }),
                      item.fileNameMethod === 'asis' && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@filename[]', value: '@rawfilename' }),
                      _react2.default.createElement('input', { type: 'file', name: item.name + '[]' }),
                      _this2.renderValidator(item, acmscss, false)
                    ), item.title);
                  } else if (item.type === 'image') {
                    var style = {};
                    if (item.normalSize) {
                      style.maxWidth = item.normalSize + 'px';
                    }
                    var hiddenStyle = (0, _assign2.default)({}, style, { display: 'none' });

                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      { className: (0, _classnames2.default)({ 'js-img_resize_cf': item.resize }) },
                      preview ? null : '<!-- BEGIN_IF [{' + item.name + '@path}/nem] -->',
                      _react2.default.createElement('img', {
                        src: '%{ARCHIVES_DIR}{' + item.name + '@path}',
                        className: (0, _classnames2.default)({ 'js-img_resize_preview': item.resize }), style: style, alt: '{' + item.name + '@alt}'
                      }),
                      _react2.default.createElement('input', { type: 'hidden', name: item.name + '@old[]', value: '{' + item.name + '@path}' }),
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'input-checkbox-' + item.name + '@edit[]', className: (0, _classnames2.default)({ 'acms-admin-form-checkbox': acmscss }) },
                        _react2.default.createElement('input', { type: 'checkbox', name: item.name + '@edit[]', value: 'delete', id: 'input-checkbox-' + item.name + '@edit[]' }),
                        acmscss && _react2.default.createElement('i', { className: 'acms-admin-ico-checkbox' }),
                        '\u524A\u9664'
                      ),
                      preview ? null : '<!-- ELSE -->',
                      _react2.default.createElement('img', {
                        src: '%{ARCHIVES_DIR}{' + item.name + '@path}',
                        className: (0, _classnames2.default)({ 'js-img_resize_preview': item.resize }), style: hiddenStyle
                      }),
                      preview ? null : '<!-- END_IF -->',
                      _react2.default.createElement('input', { type: 'file', name: item.name + '[]', className: (0, _classnames2.default)({ 'js-img_resize_input': item.resize }) }),
                      _react2.default.createElement('br', null),
                      item.alt && _react2.default.createElement(
                        _react.Fragment,
                        null,
                        '\u4EE3\u66FF\u30C6\u30AD\u30B9\u30C8:',
                        _react2.default.createElement('input', { type: 'text', name: item.name + '@alt[]', value: '{' + item.name + '@alt}', size: '40' })
                      ),
                      item.normalSize && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@' + item.normal + '[]', value: item.normalSize }),
                      item.tinySize && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@' + item.tiny + '[]', value: item.tinySize }),
                      item.largeSize && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@' + item.large + '[]', value: item.largeSize }),
                      item.square && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@' + item.square + '[]', value: item.squareSize }),
                      _this2.renderValidator(item, acmscss, false)
                    ), item.title);
                  } else if (item.type === 'media') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      { className: 'js-media-field' },
                      !item.useDropArea && _react2.default.createElement(
                        _react.Fragment,
                        null,
                        _react2.default.createElement(
                          'div',
                          null,
                          '<!-- BEGIN_IF [{' + item.name + '@thumbnail}/nem] -->',
                          _react2.default.createElement(
                            ConditionalWrap,
                            {
                              condition: item.mediaType === 'file',
                              wrap: function wrap(children) {
                                return _react2.default.createElement(
                                  'a',
                                  { href: '%{MEDIA_ARCHIVES_DIR}{' + item.name + '@path}' },
                                  children
                                );
                              }
                            },
                            _react2.default.createElement('img', (0, _extends3.default)({
                              src: '{' + item.name + '@thumbnail}',
                              className: (0, _classnames2.default)('js-preview', { 'acms-admin-img-responsive': acmscss }),
                              alt: ''
                            }, item.mediaType === 'file' && { style: {
                                width: '64px',
                                height: 'auto'
                              } }))
                          ),
                          '<!-- ELSE -->',
                          _react2.default.createElement('img', (0, _extends3.default)({
                            src: ''
                          }, item.mediaType === 'file' ? { style: {
                              width: '64px',
                              height: 'auto',
                              display: 'none'
                            } } : { style: { display: 'none' } }, {
                            className: (0, _classnames2.default)('js-preview', { 'acms-admin-img-responsive': acmscss })
                          })),
                          '<!-- END_IF -->',
                          _react2.default.createElement(
                            'p',
                            { className: 'js-text acms-admin-text-danger', style: { display: 'none' } },
                            '\u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u306E\u305F\u3081\u633F\u5165\u3067\u304D\u307E\u305B\u3093\u3002'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: (0, _classnames2.default)({ 'acms-admin-margin-top-mini': acmscss }) },
                          _react2.default.createElement(
                            'button',
                            { type: 'button', className: (0, _classnames2.default)('js-insert', { 'acms-admin-btn': acmscss }), 'data-type': item.mediaType ? item.mediaType : 'all' },
                            '\u30E1\u30C7\u30A3\u30A2\u3092\u9078\u629E'
                          ),
                          _react2.default.createElement(
                            'button',
                            { type: 'button', className: (0, _classnames2.default)('js-insert', { 'acms-admin-btn': acmscss }), 'data-type': item.mediaType ? item.mediaType : 'all', 'data-mode': 'upload' },
                            '\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9'
                          ),
                          _react2.default.createElement(
                            'button',
                            { type: 'button', className: (0, _classnames2.default)('js-edit', { 'acms-admin-btn': acmscss }) },
                            '\u30E1\u30C7\u30A3\u30A2\u3092\u7DE8\u96C6'
                          ),
                          _react2.default.createElement(
                            'button',
                            { type: 'button', className: (0, _classnames2.default)('js-remove', { 'acms-admin-btn acms-admin-btn-danger': acmscss }) },
                            '\u524A\u9664'
                          )
                        )
                      ),
                      item.useDropArea && _react2.default.createElement(
                        _react.Fragment,
                        null,
                        _react2.default.createElement('div', { className: 'js-droparea', 'data-thumbnail': '{' + item.name + '@thumbnail}', 'data-type': item.mediaType ? item.mediaType : 'all', 'data-width': item.dropAreaWidth + 'px', 'data-height': item.dropAreaHeight + 'px' }),
                        _react2.default.createElement(
                          'p',
                          { className: 'js-text acms-admin-text-danger', style: { display: 'none' } },
                          '\u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u306E\u305F\u3081\u633F\u5165\u3067\u304D\u307E\u305B\u3093\u3002'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'acms-admin-margin-top-mini' },
                          _react2.default.createElement(
                            'button',
                            { type: 'button', className: (0, _classnames2.default)('js-insert', { 'acms-admin-btn': acmscss }), 'data-type': item.mediaType ? item.mediaType : 'all' },
                            '\u30E1\u30C7\u30A3\u30A2\u3092\u9078\u629E'
                          )
                        )
                      ),
                      _react2.default.createElement('input', { type: 'hidden', name: item.name + '[]', value: preview ? '' : '{' + item.name + '}', className: 'js-value' }),
                      _this2.renderValidator(item, acmscss, false)
                    ), item.title);
                  } else if (item.type === 'lite-editor') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'textarea',
                        { name: item.name + '[]', className: (0, _classnames2.default)('js-lite-editor-field', { 'acms-admin-form-width-full': acmscss }) },
                        '{' + item.name + '}'
                      ),
                      _this2.renderValidator(item, acmscss, false)
                    ), item.title);
                  } else if (item.type === 'paper-editor') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        ConditionalWrap,
                        {
                          condition: item.useExpand, wrap: function wrap(children) {
                            return _react2.default.createElement(
                              'div',
                              { className: 'js-expand js-acms-expand' },
                              _react2.default.createElement(
                                'div',
                                { className: 'js-acms-expand-inner' },
                                _react2.default.createElement(
                                  'button',
                                  { className: 'js-expand-btn js-acms-expand-btn', type: 'button' },
                                  _react2.default.createElement('i', { className: 'acms-admin-icon acms-admin-icon-expand-arrow js-expand-icon' })
                                ),
                                children
                              )
                            );
                          }
                        },
                        _react2.default.createElement(
                          'div',
                          { className: 'js-smartblock', 'data-heading-start': item.startHeadingLevel, 'data-heading-end': item.endHeadingLevel },
                          _react2.default.createElement('div', { className: 'js-smartblock-edit' }),
                          _react2.default.createElement('input', { className: 'js-smartblock-body', type: 'hidden', name: item.name + '[]', value: '{' + item.name + '@html}' }),
                          _react2.default.createElement('input', { type: 'hidden', name: item.name + ':extension', value: 'paper-editor' })
                        )
                      )
                    ), item.title);
                  } else if (item.type === 'table') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'div',
                        { className: 'js-editable-table-field' },
                        _react2.default.createElement(
                          'div',
                          { className: 'js-editable-table' },
                          preview ? null : '<!-- BEGIN_IF [{' + item.name + '}[delnl]/nem] -->\n',
                          preview ? null : '{' + item.name + '}[raw]',
                          preview ? null : '<!-- ELSE -->',
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement(
                                'th',
                                null,
                                '\u30B5\u30F3\u30D7\u30EB'
                              ),
                              _react2.default.createElement(
                                'th',
                                null,
                                '\u30B5\u30F3\u30D7\u30EB'
                              )
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement(
                                'td',
                                null,
                                '\u30B5\u30F3\u30D7\u30EB'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                '\u30B5\u30F3\u30D7\u30EB'
                              )
                            )
                          ),
                          preview ? null : '<!-- END_IF -->',
                          _react2.default.createElement('input', { type: 'hidden', className: 'js-editable-table-dest', value: '{' + item.name + '}', name: item.name + '[]' })
                        )
                      )
                    ), item.title);
                  }
                })
              ),
              _react2.default.createElement(
                'td',
                { className: 'acms-admin-table-nowrap' },
                _react2.default.createElement('input', { type: 'button', className: (0, _classnames2.default)('item-delete', { 'acms-admin-btn-admin acms-admin-btn-admin-danger': acmscss }), value: '\u524A\u9664' })
              )
            ),
            preview ? null : '<!-- END ' + groupName + ':loop -->',
            preview ? null : _react2.default.createElement(
              'tr',
              { className: 'sortable-item item-template' },
              _react2.default.createElement(
                'td',
                { className: 'item-handle acms-admin-table-nowrap' },
                acmscss && _react2.default.createElement('i', { className: 'acms-admin-icon-sort' })
              ),
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
                      _react2.default.createElement('input', { type: 'text', name: item.name + '[]', value: '', className: (0, _classnames2.default)({ 'acms-admin-form-width-full': acmscss }) }),
                      _this2.renderValidator(item, acmscss, true)
                    ), item.title);
                  } else if (item.type === 'textarea') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('textarea', { name: item.name + '[]', className: (0, _classnames2.default)({ 'acms-admin-form-width-full': acmscss }) }),
                      _this2.renderValidator(item, acmscss, true)
                    ), item.title);
                  } else if (item.type === 'select') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'select',
                        { name: item.name + '[]', className: (0, _classnames2.default)({ 'acms-admin-form-width-full': acmscss }) },
                        _react2.default.createElement('option', { value: '' }),
                        item.option.map(function (option) {
                          return _react2.default.createElement(
                            'option',
                            { value: option.value },
                            option.label
                          );
                        })
                      ),
                      _this2.renderValidator(item, acmscss, true)
                    ), item.title);
                  } else if (item.type === 'radio') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      item.option.map(function (option) {
                        return _react2.default.createElement(
                          'div',
                          { className: (0, _classnames2.default)({ 'acms-admin-form-radio': acmscss }) },
                          _react2.default.createElement('input', { type: 'radio', name: item.name + '[]', value: option.value, id: 'input-radio-' + item.name + '-' + option.value }),
                          _react2.default.createElement(
                            'label',
                            { htmlFor: 'input-radio-' + item.name + '-' + option.value },
                            acmscss && _react2.default.createElement('i', { className: 'acms-admin-ico-radio' }),
                            option.label
                          )
                        );
                      }),
                      _this2.renderValidator(item, acmscss, true)
                    ), item.title);
                  } else if (item.type === 'file') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('input', { type: 'file', name: item.name + '[]' }),
                      item.extension && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@extension[]', value: item.extension }),
                      item.fileNameMethod === 'random' && item.fileName && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@filename[]', value: '' }),
                      item.fileNameMethod === 'fix' && item.fileName && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@filename[]', value: item.fileName }),
                      item.fileNameMethod === 'asis' && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@filename[]', value: '@rawfilename' }),
                      _this2.renderValidator(item, acmscss, true)
                    ), item.title);
                  } else if (item.type === 'image') {
                    var style = {};
                    if (item.normalSize) {
                      style.maxWidth = item.normalSize + 'px';
                    }
                    var hiddenStyle = (0, _assign2.default)({}, style, { display: 'none' });

                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      { className: (0, _classnames2.default)({ 'js-img_resize_cf': item.resize }) },
                      _react2.default.createElement('img', { src: '', style: hiddenStyle, className: 'js-img_resize_preview' }),
                      _react2.default.createElement('input', { type: 'file', name: item.name + '[]', style: style }),
                      _react2.default.createElement('br', null),
                      item.alt && _react2.default.createElement(
                        _react.Fragment,
                        null,
                        '\u4EE3\u66FF\u30C6\u30AD\u30B9\u30C8:',
                        _react2.default.createElement('input', { type: 'text', name: item.name + '@alt[]', value: '', size: '40' })
                      ),
                      item.normalSize && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@' + item.normal + '[]', value: item.normalSize }),
                      item.tiny && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@' + item.tiny + '[]', value: item.tinySize }),
                      item.large && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@' + item.large + '[]', value: item.largeSize }),
                      item.square && _react2.default.createElement('input', { type: 'hidden', name: item.name + '@' + item.square + '[]', value: item.squareSize }),
                      _this2.renderValidator(item, acmscss, true)
                    ), item.title);
                  } else if (item.type === 'media') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      { className: 'js-media-field' },
                      !item.useDropArea && _react2.default.createElement(
                        _react.Fragment,
                        null,
                        _react2.default.createElement(
                          'div',
                          null,
                          _react2.default.createElement('img', (0, _extends3.default)({
                            src: ''
                          }, item.mediaType === 'file' ? { style: {
                              width: '64px',
                              height: 'auto',
                              display: 'none'
                            } } : { style: { display: 'none' } }, {
                            className: (0, _classnames2.default)('js-preview', { 'acms-admin-img-responsive': acmscss })
                          })),
                          _react2.default.createElement(
                            'p',
                            { className: 'js-text acms-admin-text-danger', style: { display: 'none' } },
                            '\u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u306E\u305F\u3081\u633F\u5165\u3067\u304D\u307E\u305B\u3093\u3002'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'acms-admin-margin-top-mini' },
                          _react2.default.createElement(
                            'button',
                            { type: 'button', className: (0, _classnames2.default)('js-insert', { 'acms-admin-btn': acmscss }), 'data-type': item.mediaType ? item.mediaType : 'all' },
                            '\u30E1\u30C7\u30A3\u30A2\u3092\u9078\u629E'
                          ),
                          _react2.default.createElement(
                            'button',
                            { type: 'button', className: (0, _classnames2.default)('js-insert', { 'acms-admin-btn': acmscss }), 'data-type': item.mediaType ? item.mediaType : 'all', 'data-mode': 'upload' },
                            '\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9'
                          ),
                          _react2.default.createElement(
                            'button',
                            { type: 'button', className: (0, _classnames2.default)('js-edit', { 'acms-admin-btn': acmscss }) },
                            '\u30E1\u30C7\u30A3\u30A2\u3092\u7DE8\u96C6'
                          ),
                          _react2.default.createElement(
                            'button',
                            { type: 'button', className: (0, _classnames2.default)('js-remove', { 'acms-admin-btn acms-admin-btn-danger': acmscss }) },
                            '\u524A\u9664'
                          )
                        )
                      ),
                      item.useDropArea && _react2.default.createElement(
                        _react.Fragment,
                        null,
                        _react2.default.createElement('div', { className: 'js-droparea', 'data-type': item.mediaType ? item.mediaType : 'all', 'data-width': item.dropAreaWidth + 'px', 'data-height': item.dropAreaHeight + 'px' }),
                        _react2.default.createElement(
                          'p',
                          { className: 'js-text acms-admin-text-danger', style: { display: 'none' } },
                          '\u8A31\u53EF\u3055\u308C\u3066\u3044\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u306E\u305F\u3081\u633F\u5165\u3067\u304D\u307E\u305B\u3093\u3002'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'acms-admin-margin-top-mini' },
                          _react2.default.createElement(
                            'button',
                            { type: 'button', className: (0, _classnames2.default)('js-insert', { 'acms-admin-btn': acmscss }), 'data-type': item.mediaType ? item.mediaType : 'all' },
                            '\u30E1\u30C7\u30A3\u30A2\u3092\u9078\u629E'
                          )
                        )
                      ),
                      _react2.default.createElement('input', { type: 'hidden', name: item.name + '[]', value: '', className: 'js-value' }),
                      _this2.renderValidator(item, acmscss, true)
                    ), item.title);
                  } else if (item.type === 'lite-editor') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('textarea', { name: item.name + '[]', className: (0, _classnames2.default)('js-lite-editor-field', { 'acms-admin-form-width-full': acmscss }) }),
                      _this2.renderValidator(item, acmscss, false)
                    ), item.title);
                  } else if (item.type === 'paper-editor') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        ConditionalWrap,
                        {
                          condition: item.useExpand, wrap: function wrap(children) {
                            return _react2.default.createElement(
                              'div',
                              { className: 'js-expand js-acms-expand' },
                              _react2.default.createElement(
                                'div',
                                { className: 'js-acms-expand-inner' },
                                _react2.default.createElement(
                                  'button',
                                  { className: 'js-expand-btn js-acms-expand-btn', type: 'button' },
                                  _react2.default.createElement('i', { className: 'acms-admin-icon acms-admin-icon-expand-arrow js-expand-icon' })
                                ),
                                children
                              )
                            );
                          }
                        },
                        _react2.default.createElement(
                          'div',
                          { className: 'js-smart-block', 'data-heading-start': item.startHeadingLevel, 'data-heading-end': item.endHeadingLevel },
                          _react2.default.createElement('div', { className: 'js-smart-block-edit' }),
                          _react2.default.createElement('input', { className: 'js-smart-block-body', type: 'hidden', name: item.name + '[]', value: '' })
                        )
                      )
                    ), item.title);
                  } else if (item.type === 'table') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'div',
                        { className: 'js-editable-table-field' },
                        _react2.default.createElement(
                          'div',
                          { className: 'js-editable-table' },
                          '<!-- BEGIN_IF [{' + item.name + '}[delnl]/nem] -->\n',
                          '{' + item.name + '}[raw]',
                          '<!-- ELSE -->',
                          _react2.default.createElement(
                            'table',
                            null,
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement(
                                'th',
                                null,
                                '\u30B5\u30F3\u30D7\u30EB'
                              ),
                              _react2.default.createElement(
                                'th',
                                null,
                                '\u30B5\u30F3\u30D7\u30EB'
                              )
                            ),
                            _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement(
                                'td',
                                null,
                                '\u30B5\u30F3\u30D7\u30EB'
                              ),
                              _react2.default.createElement(
                                'td',
                                null,
                                '\u30B5\u30F3\u30D7\u30EB'
                              )
                            )
                          ),
                          '<!-- END_IF -->',
                          _react2.default.createElement('input', { type: 'hidden', className: 'js-editable-table-dest', value: '', name: item.name + '[]' })
                        )
                      )
                    ), item.title);
                  }
                })
              ),
              _react2.default.createElement(
                'td',
                { className: 'acms-admin-table-nowrap' },
                _react2.default.createElement('input', { type: 'button', className: (0, _classnames2.default)('item-delete', { 'acms-admin-btn-admin acms-admin-btn-admin-danger': acmscss }), value: '\u524A\u9664' })
              )
            )
          ),
          _react2.default.createElement(
            'tfoot',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { colSpan: direction === 'horizontal' ? groupLength + 2 : 3 },
                _react2.default.createElement('input', { type: 'button', className: (0, _classnames2.default)('item-insert', { 'acms-admin-btn-admin': acmscss }), value: '\u8FFD\u52A0' })
              )
            )
          )
        ),
        groupName && _react2.default.createElement(
          _react.Fragment,
          null,
          groupitems.map(function (item) {
            return _react2.default.createElement(
              _react.Fragment,
              null,
              item.type === 'image' && _react2.default.createElement(
                _react.Fragment,
                null,
                item.square && _react2.default.createElement(
                  _react.Fragment,
                  null,
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@squarePath' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@squareAlt' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@squareX' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@squareY' })
                ),
                item.large && _react2.default.createElement(
                  _react.Fragment,
                  null,
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@largePath' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@largeAlt' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@largeX' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@largeY' })
                ),
                item.tiny && _react2.default.createElement(
                  _react.Fragment,
                  null,
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@tinyPath' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@tinyAlt' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@tinyX' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@tinyY' })
                ),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@path' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@alt' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@x' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@y' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@edit' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@old' }),
                _react2.default.createElement('input', { type: 'hidden', name: item.name + ':extension', value: 'image' })
              ),
              item.type === 'file' && _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@path' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@alt' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@edit' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name + '@old' }),
                _react2.default.createElement('input', { type: 'hidden', name: item.name + ':extension', value: 'file' })
              ),
              item.type === 'media' && _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement('input', { type: 'hidden', name: item.name + ':extension', value: 'media' })
              ),
              item.type === 'paper-editor' && _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement('input', { type: 'hidden', name: item.name + ':extension', value: 'paper-editor' })
              ),
              _react2.default.createElement('input', { type: 'hidden', name: '@' + groupName + '[]', value: item.name }),
              _react2.default.createElement('input', { type: 'hidden', name: 'field[]', value: item.name }),
              item.noSearch && _react2.default.createElement('input', { type: 'hidden', name: item.name + ':search', value: '0' }),
              item.validator.map(function (validator) {
                if (!validator.option) {
                  return null;
                }
                var name = item.type === 'file' || item.type === 'image' ? item.name + '@path' : item.name;
                return _react2.default.createElement('input', { type: 'hidden', name: name + ':v#' + validator.option, value: validator.value, id: name + '-v-' + validator.option });
              }),
              function () {
                var name = item.type === 'file' || item.type === 'image' ? item.name + '@path' : item.name;
                return item.converter && _react2.default.createElement('input', { type: 'hidden', name: name + ':c', value: item.converter });
              }()
            );
          }),
          _react2.default.createElement('input', { type: 'hidden', name: 'field[]', value: '@' + groupName })
        )
      );
    }
  }]);
  return FieldGroupSource;
}(_react.Component);

exports.default = FieldGroupSource;


FieldGroupSource.defaultProps = {
  preview: false
};