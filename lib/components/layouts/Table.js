'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Table = Table;
var _react = _interopRequireDefault(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _Heading = require('../html/Heading');
var _TextInput = require('../html/TextInput');
var _Textarea = require('../html/Textarea');
var _MakerContext = require('../../store/MakerContext');
function Table(props) {
  const { customfield } = props;
  const {
    preview: { jsValidator, acmscss },
  } = (0, _MakerContext.useMakerContext)();
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    jsValidator && '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->',
    /*#__PURE__*/ _react.default.createElement(
      'table',
      {
        className: (0, _classnames.default)({
          'acms-admin-table-admin-edit': acmscss,
        }),
      },
      customfield.map((item, index) => {
        switch (item.type) {
          case 'text': {
            return /*#__PURE__*/ _react.default.createElement(
              'tr',
              {
                key: index,
              },
              /*#__PURE__*/ _react.default.createElement(
                'th',
                null,
                /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                  item: item,
                })
              ),
              /*#__PURE__*/ _react.default.createElement(
                'td',
                null,
                /*#__PURE__*/ _react.default.createElement(_TextInput.TextInput, {
                  item: item,
                })
              )
            );
          }
          case 'textarea': {
            return /*#__PURE__*/ _react.default.createElement(
              'tr',
              {
                key: index,
              },
              /*#__PURE__*/ _react.default.createElement(
                'th',
                null,
                /*#__PURE__*/ _react.default.createElement(_Heading.Heading, {
                  item: item,
                })
              ),
              /*#__PURE__*/ _react.default.createElement(
                'td',
                null,
                /*#__PURE__*/ _react.default.createElement(_Textarea.Textarea, {
                  item: item,
                })
              )
            );
          }
          default: {
            return null;
          }
        }
      })
    ),
    jsValidator && '<!-- </form> -->'
  );
}
