'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));
var _react = _interopRequireDefault(require('react'));
var _base = _interopRequireDefault(require('./base'));
var _MakerContext = require('../../store/MakerContext');
class Unit extends _base.default {
  constructor(props) {
    super(props);
    this.state = {
      type: 'text',
      subType: '',
      title: '',
      name: '',
      tooltip: '',
      alert: '',
      duplicatedField: '',
      path: 'path',
      converter: '',
      normal: 'size',
      option: [
        {
          value: '',
          label: '',
        },
      ],
      validator: [
        {
          option: '',
          value: '',
          message: '',
        },
      ],
      optionFormat: 'pref',
      openValidator: false,
      openConverter: false,
      alt: false,
      resize: true,
      useExpand: true,
      fileNameMethod: 'random',
      useDropArea: true,
      dropAreaWidth: 200,
      dropAreaHeight: 200,
      useFocusImage: false,
      focusImageWidth: 400,
      focusImageHeight: 400,
      startHeadingLevel: 2,
      endHeadingLevel: 3,
      mediaType: 'image',
    };
  }
  submit() {
    const { name, type, title } = this.state;
    const { addCustomunit } = this.context;
    if (name && type && title) {
      addCustomunit(this.state);
    } else {
      this.setState({
        alert: true,
      });
    }
  }
  typeSelectRender() {
    const { type } = this.state;
    return /*#__PURE__*/ _react.default.createElement(
      'select',
      {
        id: 'type',
        value: type,
        className: 'acms-admin-form-width-full',
        onChange: (e) => {
          this.updateState('type', e.target.value);
        },
      },
      /*#__PURE__*/ _react.default.createElement(
        'option',
        {
          value: 'text',
        },
        '\u30C6\u30AD\u30B9\u30C8'
      ),
      /*#__PURE__*/ _react.default.createElement(
        'option',
        {
          value: 'textarea',
        },
        '\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2'
      ),
      /*#__PURE__*/ _react.default.createElement(
        'option',
        {
          value: 'lite-editor',
        },
        '\u30A4\u30F3\u30E9\u30A4\u30F3\u30A8\u30C7\u30A3\u30BF\u30FC'
      ),
      /*#__PURE__*/ _react.default.createElement(
        'option',
        {
          value: 'rich-editor',
        },
        '\u30EA\u30C3\u30C1\u30A8\u30C7\u30A3\u30BF\u30FC'
      ),
      /*#__PURE__*/ _react.default.createElement(
        'option',
        {
          value: 'table',
        },
        '\u30C6\u30FC\u30D6\u30EB'
      ),
      /*#__PURE__*/ _react.default.createElement(
        'option',
        {
          value: 'select',
        },
        '\u30BB\u30EC\u30AF\u30C8\u30DC\u30C3\u30AF\u30B9'
      ),
      /*#__PURE__*/ _react.default.createElement(
        'option',
        {
          value: 'radio',
        },
        '\u30E9\u30B8\u30AA\u30DC\u30BF\u30F3'
      ),
      /*#__PURE__*/ _react.default.createElement(
        'option',
        {
          value: 'checkbox',
        },
        '\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9'
      ),
      /*#__PURE__*/ _react.default.createElement(
        'option',
        {
          value: 'media',
        },
        '\u30E1\u30C7\u30A3\u30A2'
      ),
      /*#__PURE__*/ _react.default.createElement(
        'option',
        {
          value: 'image',
        },
        '\u753B\u50CF'
      ),
      /*#__PURE__*/ _react.default.createElement(
        'option',
        {
          value: 'file',
        },
        '\u30D5\u30A1\u30A4\u30EB'
      )
    );
  }
  render() {
    const { type } = this.state;
    return /*#__PURE__*/ _react.default.createElement(
      'div',
      null,
      /*#__PURE__*/ _react.default.createElement(
        'h2',
        {
          className: 'acms-admin-admin-title2',
        },
        '\u30AB\u30B9\u30BF\u30E0\u30E6\u30CB\u30C3\u30C8'
      ),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'customFieldFunction',
        },
        this.renderModal(),
        this.renderAlert(),
        this.renderBasic(),
        /*#__PURE__*/ _react.default.createElement('div', {
          className: 'customFieldLine',
        }),
        type === 'select' &&
          /*#__PURE__*/ _react.default.createElement('div', null, this.renderSnippet(), this.renderOption()),
        type === 'radio' &&
          /*#__PURE__*/ _react.default.createElement('div', null, this.renderSnippet(), this.renderOption()),
        type === 'checkbox' &&
          /*#__PURE__*/ _react.default.createElement('div', null, this.renderSnippet(), this.renderOption()),
        type === 'image' &&
          /*#__PURE__*/ _react.default.createElement('div', null, this.renderImage(), this.renderImageResize()),
        type === 'file' && /*#__PURE__*/ _react.default.createElement('div', null, this.renderFile()),
        type === 'media' && /*#__PURE__*/ _react.default.createElement('div', null, this.renderMediaOption()),
        type === 'rich-editor' &&
          /*#__PURE__*/ _react.default.createElement('div', null, this.renderRichEditorOption()),
        this.renderValidator(false),
        this.renderMake()
      )
    );
  }
}
exports.default = Unit;
(0, _defineProperty2.default)(Unit, 'contextType', _MakerContext.MakerContext);
