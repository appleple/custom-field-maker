'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var UnitGroupSource = function (_Component) {
  (0, _inherits3.default)(UnitGroupSource, _Component);

  function UnitGroupSource(props) {
    (0, _classCallCheck3.default)(this, UnitGroupSource);
    return (0, _possibleConstructorReturn3.default)(this, (UnitGroupSource.__proto__ || (0, _getPrototypeOf2.default)(UnitGroupSource)).call(this, props));
  }

  (0, _createClass3.default)(UnitGroupSource, [{
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
          unitGroupName = _props.unitGroupName,
          unitGroupTitle = _props.unitGroupTitle,
          acmscss = _props.acmscss,
          unitgroupitems = _props.unitgroupitems,
          preview = _props.preview,
          direction = _props.direction;

      var groupLength = unitgroupitems.length;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        unitGroupTitle && _react2.default.createElement(
          'h2',
          { className: (0, _classnames2.default)({ 'acms-admin-admin-title2': acmscss }) },
          unitGroupTitle
        ),
        unitGroupName && _react2.default.createElement(
          'table',
          { className: (0, _classnames2.default)('js-fieldgroup-sortable', { 'adminTable acms-admin-table-admin-edit': acmscss }) },
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
                unitgroupitems.map(function (item) {
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
            preview ? null : '<!-- BEGIN ' + unitGroupName + ':loop -->',
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
                unitgroupitems.map(function (item) {
                  if (item.type === 'text') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('input', { type: 'text', name: item.name + '{id}[]', value: '{' + item.name + '}', className: (0, _classnames2.default)({ 'acms-admin-form-width-full': acmscss }) })
                    ), item.title);
                  } else if (item.type === 'textarea') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'textarea',
                        { name: item.name + '{id}[]', className: (0, _classnames2.default)({ 'acms-admin-form-width-full': acmscss }) },
                        '{' + item.name + '}'
                      )
                    ), item.title);
                  } else if (item.type === 'select') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'select',
                        { name: item.name + '{id}[]', className: (0, _classnames2.default)({ 'acms-admin-form-width-full': acmscss }) },
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
                      )
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
                          _react2.default.createElement('input', { type: 'radio', name: item.name + '{id}[]', value: option.value, 'data-tmp': '{' + item.name + ':checked#' + option.value + '}', id: 'input-radio-' + item.name + '-{id}-' + option.value }),
                          _react2.default.createElement(
                            'label',
                            { htmlFor: 'input-radio-' + item.name + '-{id}-' + option.value },
                            acmscss && _react2.default.createElement('i', { 'class': 'acms-admin-ico-radio' }),
                            option.label
                          )
                        );
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
                      preview ? null : '<!-- BEGIN_IF [{' + item.name + '@path}/nem] -->',
                      _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)({ 'acms-admin-form-checkbox': acmscss }) },
                        _react2.default.createElement('input', { type: 'checkbox', name: item.name + '{id}@edit[]', value: 'delete', id: 'input-checkbox-' + item.name + '{id}@edit[]' }),
                        _react2.default.createElement(
                          'label',
                          { htmlFor: 'input-checkbox-' + item.name + '{id}@edit[]' },
                          acmscss && _react2.default.createElement('i', { 'class': 'acms-admin-ico-checkbox' }),
                          ' \u524A\u9664'
                        )
                      ),
                      _react2.default.createElement(
                        'a',
                        { href: '%{ARCHIVES_DIR}{' + item.name + '@path}' },
                        _react2.default.createElement('img', { src: src, width: '64', height: '64', alt: alt })
                      ),
                      preview ? null : '<!-- END_IF -->',
                      _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@old[]', value: '{' + item.name + '@path}' }),
                      item.fileNameMethod === 'random' && item.fileName && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@filename[]', value: '' }),
                      item.fileNameMethod === 'fix' && item.fileName && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@filename[]', value: item.fileName }),
                      item.fileNameMethod === 'asis' && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@filename[]', value: '@rawfilename' }),
                      _react2.default.createElement('input', { type: 'file', name: item.name + '{id}[]' })
                    ), item.title);
                  } else if (item.type === 'image') {
                    var style = {};
                    if (item.normalSize) {
                      style.maxWidth = item.normalSize + 'px';
                    }
                    var hiddenStyle = (0, _assign2.default)({}, style, { 'display': 'none' });

                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      { className: (0, _classnames2.default)({ 'js-img_resize_cf': item.resize }) },
                      preview ? null : '<!-- BEGIN_IF [{' + item.name + '@path}/nem] -->',
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', {
                          src: '%{ARCHIVES_DIR}{' + item.name + '@path}',
                          className: (0, _classnames2.default)({ 'js-img_resize_preview': item.resize }), style: style, alt: '{' + item.name + '@alt}' })
                      ),
                      _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@old[]', value: '{' + item.name + '@path}' }),
                      _react2.default.createElement(
                        'label',
                        { htmlFor: 'input-checkbox-' + item.name + '{id}@edit[]', className: (0, _classnames2.default)({ "acms-admin-form-checkbox": acmscss }) },
                        _react2.default.createElement('input', { type: 'checkbox', name: item.name + '{id}@edit[]', value: 'delete', id: 'input-checkbox-' + item.name + '{id}@edit[]' }),
                        acmscss && _react2.default.createElement('i', { 'class': 'acms-admin-ico-checkbox' }),
                        '\u524A\u9664'
                      ),
                      preview ? null : '<!-- ELSE -->',
                      _react2.default.createElement('img', {
                        src: '%{ARCHIVES_DIR}{' + item.name + '@path}',
                        className: (0, _classnames2.default)({ 'js-img_resize_preview': item.resize }), style: hiddenStyle }),
                      preview ? null : '<!-- END_IF -->',
                      _react2.default.createElement('input', { type: 'file', name: item.name + '{id}[]', className: (0, _classnames2.default)({ 'js-img_resize_input': item.resize }) }),
                      _react2.default.createElement('br', null),
                      item.alt && _react2.default.createElement(
                        'div',
                        null,
                        '\u4EE3\u66FF\u30C6\u30AD\u30B9\u30C8:',
                        _react2.default.createElement('input', { type: 'text', name: item.name + '{id}@alt[]', value: '{' + item.name + '@alt}', size: '40' })
                      ),
                      item.normal && item.normalSize && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@' + item.normal + '[]', value: item.normalSize }),
                      item.tiny && item.tinySize && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@' + item.tiny + '[]', value: item.tinySize }),
                      item.large && item.largeSize && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@' + item.large + '[]', value: item.largeSize }),
                      item.square && item.squareSize && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@' + item.square + '[]', value: item.squareSize })
                    ), item.title);
                  } else if (item.type === 'media') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'div',
                        null,
                        '<!-- BEGIN_IF [{' + item.name + '@thumbnail}/nem] -->',
                        _react2.default.createElement('img', { src: '%{MEDIA_ARCHIVES_DIR}{test@thumbnail}', className: (0, _classnames2.default)({ "acms-admin-img-responsive": acmscss }), alt: '{test@alt}', id: 'media-preview{id}-' + item.name }),
                        '<!-- ELSE -->',
                        _react2.default.createElement('img', { src: '', style: { display: "none" }, className: (0, _classnames2.default)({ "acms-admin-img-responsive": acmscss }), id: 'media-preview{id}-' + item.name }),
                        '<!-- END_IF -->'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: (0, _classnames2.default)({ "acms-admin-margin-top-mini": acmscss }) },
                        '<!-- BEGIN_IF [{' + item.name + '@thumbnail}/nem] -->',
                        _react2.default.createElement(
                          'button',
                          { type: 'button', className: (0, _classnames2.default)("js-media-edit", { "acms-admin-btn": acmscss }), 'data-mid': '{' + item.name + '}', 'data-preview': '#media-preview{id}-' + item.name, id: 'media-edit{id}-' + item.name },
                          '\u30E1\u30C7\u30A3\u30A2\u7DE8\u96C6'
                        ),
                        '<!-- END_IF -->',
                        _react2.default.createElement(
                          'button',
                          { type: 'button', className: (0, _classnames2.default)("js-media-insert", { "acms-admin-btn": acmscss }), 'data-target': '#media-input{id}-' + item.name, 'data-preview': '#media-preview{id}-' + item.name, 'data-edit': '#media-edit{id}-' + item.name },
                          '\u30E1\u30C7\u30A3\u30A2\u9078\u629E'
                        )
                      ),
                      _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}[]', value: '{' + item.name + '}', className: 'acms-admin-form-width-full', id: 'media-input{id}-' + item.name })
                    ), item.title);
                  }
                })
              ),
              _react2.default.createElement(
                'td',
                { className: 'acms-admin-table-nowrap' },
                _react2.default.createElement('input', { type: 'button', className: (0, _classnames2.default)("item-delete", { "acms-admin-btn-admin acms-admin-btn-admin-danger": acmscss }), value: '\u524A\u9664' })
              )
            ),
            preview ? null : '<!-- END ' + unitGroupName + ':loop -->',
            _react2.default.createElement(
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
                unitgroupitems.map(function (item) {
                  if (item.type === 'text') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('input', { type: 'text', name: item.name + '{id}[]', value: '', className: (0, _classnames2.default)({ "acms-admin-form-width-full": acmscss }) })
                    ), item.title);
                  } else if (item.type === 'textarea') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('textarea', { name: item.name + '{id}[]', className: (0, _classnames2.default)({ "acms-admin-form-width-full": acmscss }) })
                    ), item.title);
                  } else if (item.type === 'select') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'select',
                        { name: item.name + '{id}[]', className: (0, _classnames2.default)({ "acms-admin-form-width-full": acmscss }) },
                        _react2.default.createElement('option', { value: '' }),
                        item.option.map(function (option) {
                          return _react2.default.createElement(
                            'option',
                            { value: option.value },
                            option.label
                          );
                        })
                      )
                    ), item.title);
                  } else if (item.type === 'radio') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      item.option.map(function (option) {
                        return _react2.default.createElement(
                          'div',
                          { className: (0, _classnames2.default)({ 'acms-admin-form-radio': acmscss }) },
                          _react2.default.createElement('input', { type: 'radio', name: item.name + '{id}[]', value: option.value, id: 'input-radio-' + item.name + '-' + option.value }),
                          _react2.default.createElement(
                            'label',
                            { htmlFor: 'input-radio-' + item.name + '-' + option.value },
                            acmscss && _react2.default.createElement('i', { 'class': 'acms-admin-ico-radio' }),
                            option.label
                          )
                        );
                      })
                    ), item.title);
                  } else if (item.type === 'file') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('input', { type: 'file', name: item.name + '{id}[]' }),
                      item.extension && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@extension[]', value: '{extension}' }),
                      item.fileNameMethod === 'random' && item.fileName && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@filename[]', value: '' }),
                      item.fileNameMethod === 'fix' && item.fileName && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@filename[]', value: item.fileName }),
                      item.fileNameMethod === 'asis' && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@filename[]', value: '@rawfilename' })
                    ), item.title);
                  } else if (item.type === 'image') {
                    var style = {};
                    if (item.normalSize) {
                      style.maxWidth = item.normalSize + 'px';
                    }
                    var hiddenStyle = (0, _assign2.default)({}, style, { 'display': 'none' });

                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      { className: (0, _classnames2.default)({ 'js-img_resize_cf': item.resize }) },
                      _react2.default.createElement('img', { src: '', style: hiddenStyle, 'class': 'js-img_resize_preview' }),
                      _react2.default.createElement('input', { type: 'file', name: item.name + '{id}[]', style: style }),
                      _react2.default.createElement('br', null),
                      item.alt && _react2.default.createElement(
                        'div',
                        null,
                        '\u4EE3\u66FF\u30C6\u30AD\u30B9\u30C8:',
                        _react2.default.createElement('input', { type: 'text', name: item.name + '{id}@alt[]', value: '', size: '40' })
                      ),
                      item.normalSize && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@' + item.normal + '[]', value: item.normalSize }),
                      item.tiny && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@' + item.tiny + '[]', value: item.tinySize }),
                      item.large && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@' + item.large + '[]', value: item.largeSize }),
                      item.square && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}@' + item.square + '[]', value: item.squareSize })
                    ), item.title);
                  } else if (item.type === 'media') {
                    return _this2.wrapTable(_react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement('img', { src: '', style: { display: "none" }, 'class': 'acms-admin-img-responsive', id: 'media-preview{id}-' + item.name })
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'acms-admin-margin-top-mini' },
                        _react2.default.createElement(
                          'button',
                          { type: 'button', 'class': 'js-media-insert acms-admin-btn', 'data-target': '#media-input{id}-' + item.name, 'data-preview': '#media-preview{id}-' + item.name },
                          '\u30E1\u30C7\u30A3\u30A2\u9078\u629E'
                        )
                      ),
                      _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}[]', value: '', 'class': 'acms-admin-form-width-full', id: 'media-input{id}-' + item.name })
                    ), item.title);
                  }
                })
              ),
              _react2.default.createElement(
                'td',
                { className: 'acms-admin-table-nowrap' },
                _react2.default.createElement('input', { type: 'button', className: (0, _classnames2.default)("item-delete", { "acms-admin-btn-admin acms-admin-btn-admin-danger": acmscss }), value: '\u524A\u9664' })
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
                { colSpan: groupLength + 2 },
                _react2.default.createElement('input', { type: 'button', className: (0, _classnames2.default)("item-insert", { "acms-admin-btn-admin": acmscss }), value: '\u8FFD\u52A0' })
              )
            )
          )
        ),
        unitGroupName && _react2.default.createElement(
          _react.Fragment,
          null,
          unitgroupitems.map(function (item) {
            return _react2.default.createElement(
              _react.Fragment,
              null,
              item.type === 'image' && _react2.default.createElement(
                _react.Fragment,
                null,
                item.square && item.squareSize && _react2.default.createElement(
                  _react.Fragment,
                  null,
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@squarePath' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@squareAlt' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@squareX' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@squareY' })
                ),
                item.large && item.largeSize && _react2.default.createElement(
                  _react.Fragment,
                  null,
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@largePath' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@largeAlt' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@largeX' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@largeY' })
                ),
                item.tiny && item.tinySize && _react2.default.createElement(
                  _react.Fragment,
                  null,
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@tinyPath' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '@tinyAlt' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '@tinyX' }),
                  _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '@tinyY' })
                ),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@path' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@alt' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@x' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@y' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@edit' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@old' }),
                _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}:extension', value: 'image' })
              ),
              item.type === 'file' && _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@path' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@alt' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@edit' }),
                _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}@old' }),
                _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}:extension', value: 'file' })
              ),
              item.type === 'media' && _react2.default.createElement(
                _react.Fragment,
                null,
                _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}:extension', value: 'media' })
              ),
              _react2.default.createElement('input', { type: 'hidden', name: '@' + unitGroupName + '{id}[]', value: item.name + '{id}' }),
              _react2.default.createElement('input', { type: 'hidden', name: 'unit{id}[]', value: item.name + '{id}' }),
              item.noSearch && _react2.default.createElement('input', { type: 'hidden', name: item.name + '{id}:search', value: '0' })
            );
          }),
          _react2.default.createElement('input', { type: 'hidden', name: 'unit{id}[]', value: '@' + unitGroupName + '{id}' })
        )
      );
    }
  }]);
  return UnitGroupSource;
}(_react.Component);

exports.default = UnitGroupSource;


UnitGroupSource.defaultProps = {
  preview: false
};