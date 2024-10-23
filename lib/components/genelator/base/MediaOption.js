"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaOption = MediaOption;
var _react = _interopRequireDefault(require("react"));
function MediaOption(props) {
  const {
    field: {
      mediaType,
      useDropArea,
      useFocusImage,
      dropAreaWidth,
      dropAreaHeight,
      focusImageWidth,
      focusImageHeight
    },
    setField
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
    style: {
      marginBottom: '5px'
    }
  }, "\u9078\u3079\u308B\u30E1\u30C7\u30A3\u30A2\u306E\u30BF\u30A4\u30D7\u3092\u9078\u629E"), /*#__PURE__*/_react.default.createElement("p", {
    className: "acms-admin-form-radio"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    onChange: () => setField(prevState => ({
      ...prevState,
      mediaType: 'all'
    })),
    checked: mediaType === 'all',
    id: "media-type-all-radio"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "media-type-all-radio"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-radio"
  }), "\u5168\u3066\u306E\u30BF\u30A4\u30D7")), /*#__PURE__*/_react.default.createElement("p", {
    className: "acms-admin-form-radio"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    onChange: () => setField(prevState => ({
      ...prevState,
      mediaType: 'image'
    })),
    checked: mediaType === 'image',
    id: "media-type-image-radio"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "media-type-image-radio"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-radio"
  }), "\u753B\u50CF\u306E\u307F")), /*#__PURE__*/_react.default.createElement("p", {
    className: "acms-admin-form-radio"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    onChange: () => setField(prevState => ({
      ...prevState,
      mediaType: 'file'
    })),
    checked: mediaType === 'file',
    id: "media-type-file-radio"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "media-type-file-radio"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-radio"
  }), "\u30D5\u30A1\u30A4\u30EB\u306E\u307F")), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      marginBottom: '5px'
    }
  }, "\u30C9\u30ED\u30C3\u30D7\u30A8\u30EA\u30A2"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-form-checkbox",
    style: {
      paddingTop: '5px'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    onChange: () => {
      if (useDropArea) {
        setField(prevState => ({
          ...prevState,
          useDropArea: false
        }));
      } else {
        setField(prevState => ({
          ...prevState,
          useDropArea: true
        }));
      }
    },
    checked: useDropArea,
    id: "media-use-droparea"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "media-use-droparea"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-checkbox"
  }), "\u30C9\u30ED\u30C3\u30D7\u30A8\u30EA\u30A2\u3092\u5229\u7528\u3059\u308B")), useDropArea && /*#__PURE__*/_react.default.createElement("div", null, "\u5E45\xA0", /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    defaultValue: dropAreaWidth,
    onInput: e => {
      const value = e.target.value;
      if (!value) return;
      setField(prevState => ({
        ...prevState,
        dropAreaWidth: value
      }));
    }
  }), "\xA0px", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      display: 'inline-block',
      width: '15px',
      height: '1px'
    }
  }), "\u9AD8\u3055\xA0", /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    defaultValue: dropAreaHeight,
    onInput: e => {
      const value = e.target.value;
      if (!value) return;
      setField(prevState => ({
        ...prevState,
        dropAreaHeight: value
      }));
    }
  }), "\xA0px")), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      marginBottom: '5px'
    }
  }, "\u30C8\u30EA\u30DF\u30F3\u30B0"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "acms-admin-form-checkbox",
    style: {
      paddingTop: '5px'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    onChange: () => {
      if (useFocusImage) {
        setField(prevState => ({
          ...prevState,
          useFocusImage: false
        }));
      } else {
        setField(prevState => ({
          ...prevState,
          useFocusImage: true
        }));
      }
    },
    checked: useFocusImage,
    id: "media-use-focusImage"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "media-use-focusImage"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "acms-admin-ico-checkbox"
  }), "\u4E2D\u5FC3\u70B9\u3092\u57FA\u6E96\u306B\u753B\u50CF\u3092\u30C8\u30EA\u30DF\u30F3\u30B0\u3057\u3066\u8868\u793A\u3059\u308B")), useFocusImage && /*#__PURE__*/_react.default.createElement("div", null, "\u5E45 ", /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    defaultValue: focusImageWidth
  }), " px", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      display: 'inline-block',
      width: '15px',
      height: '1px'
    }
  }), "\u9AD8\u3055 ", /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    defaultValue: focusImageHeight
  }), " px")));
}