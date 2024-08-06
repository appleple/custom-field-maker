'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.OptionValidator = OptionValidator;
var _react = _interopRequireWildcard(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _MakerContext = require('../../store/MakerContext');
function _getRequireWildcardCache(e) {
  if ('function' != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function (e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ('object' != typeof e && 'function' != typeof e)) return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ('default' !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n.default = e), t && t.set(e, n), n;
}
function OptionValidator(props) {
  const { item } = props;
  const {
    preview: { acmscss, jsValidator, editMode },
  } = (0, _MakerContext.useMakerContext)();
  if (!item.openValidator) {
    return null;
  }
  const name = item.type === 'file' || item.type === 'image' ? ''.concat(item.name, '@path') : item.name;
  return /*#__PURE__*/ _react.default.createElement(
    _react.Fragment,
    {
      key: item.name,
    },
    item.validator.map((validator) => {
      if (!validator.option) {
        return null;
      }
      return /*#__PURE__*/ _react.default.createElement(
        _react.Fragment,
        {
          key: validator.option,
        },
        /*#__PURE__*/ _react.default.createElement('input', {
          type: 'hidden',
          name: ''.concat(name, ':v#').concat(validator.option),
          value: validator.value,
          id: ''.concat(name, '-v-').concat(validator.option),
        }),
        jsValidator
          ? /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                'data-validator-label': ''.concat(name, '-v-').concat(validator.option),
                className: 'validator-result-{'.concat(name, ':v#').concat(validator.option, '}'),
              },
              /*#__PURE__*/ _react.default.createElement(
                'p',
                {
                  className: 'error-text',
                },
                /*#__PURE__*/ _react.default.createElement('span', {
                  className: 'acms-admin-icon acms-admin-icon-attention',
                }),
                validator.message
              )
            )
          : /*#__PURE__*/ _react.default.createElement(
              _react.default.Fragment,
              null,
              validator.message &&
                /*#__PURE__*/ _react.default.createElement(
                  _react.default.Fragment,
                  null,
                  editMode === 'preview'
                    ? null
                    : '<!-- BEGIN '.concat(name, ':validator#').concat(validator.option, ' -->'),
                  /*#__PURE__*/ _react.default.createElement(
                    'p',
                    {
                      className: (0, _classnames.default)({
                        'acms-admin-text-error': acmscss,
                      }),
                    },
                    validator.message
                  ),
                  editMode === 'preview'
                    ? null
                    : '<!-- END '.concat(name, ':validator#').concat(validator.option, ' -->')
                )
            )
      );
    }),
    item.converter &&
      /*#__PURE__*/ _react.default.createElement('input', {
        type: 'hidden',
        name: ''.concat(name, ':c'),
        value: item.converter,
      })
  );
}
