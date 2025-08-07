"use strict";
(self["webpackChunkiris"] = self["webpackChunkiris"] || []).push([[4037],{

/***/ 93022:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ login; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd-style@3.7.1_@types+react@18.3.21_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3_jjiy5l5wqlmeqmzgk3m2mxwnbu/node_modules/antd-style/es/functions/index.js + 50 modules
var functions = __webpack_require__(53346);
;// CONCATENATED MODULE: ./src/components/AuthCode/index.style.ts

var useStyles = (0,functions/* createStyles */.kc)(function (_ref) {
  var token = _ref.token;
  return {
    input: {
      width: '45px',
      height: '45px',
      padding: '0',
      fontSize: '24px',
      textAlign: 'center',
      marginRight: '12px',
      textTransform: 'uppercase',
      color: '#494949',
      fontFamily: 'SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
      border: '1px solid #d6d6d6',
      borderRadius: '4px',
      background: '#fff',
      backgroundClip: 'padding-box',
      '&:focus': {
        appearance: 'none',
        outline: '0',
        boxShadow: '0 0 0 3px rgb(131 192 253 / 50%)'
      }
    }
  };
});
/* harmony default export */ var index_style = (useStyles);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/components/AuthCode/index.tsx





var allowedCharactersValues = ['alpha', 'numeric', 'alphanumeric'];
var propsMap = {
  alpha: {
    type: 'text',
    inputMode: 'text',
    pattern: '[a-zA-Z]{1}'
  },
  alphanumeric: {
    type: 'text',
    inputMode: 'text',
    pattern: '[a-zA-Z0-9]{1}'
  },
  numeric: {
    type: 'tel',
    inputMode: 'numeric',
    pattern: '[0-9]{1}',
    min: '0',
    max: '9'
  }
};
var AuthCode = /*#__PURE__*/(0,react.forwardRef)(function (_ref, ref) {
  var _ref$allowedCharacter = _ref.allowedCharacters,
    allowedCharacters = _ref$allowedCharacter === void 0 ? 'alphanumeric' : _ref$allowedCharacter,
    ariaLabel = _ref.ariaLabel,
    _ref$autoFocus = _ref.autoFocus,
    autoFocus = _ref$autoFocus === void 0 ? true : _ref$autoFocus,
    containerClassName = _ref.containerClassName,
    disabled = _ref.disabled,
    inputClassName = _ref.inputClassName,
    _ref$isPassword = _ref.isPassword,
    isPassword = _ref$isPassword === void 0 ? false : _ref$isPassword,
    _ref$length = _ref.length,
    length = _ref$length === void 0 ? 6 : _ref$length,
    placeholder = _ref.placeholder,
    onChange = _ref.onChange;
  if (isNaN(length) || length < 1) {
    throw new Error('Length should be a number and greater than 0');
  }
  if (!allowedCharactersValues.some(function (value) {
    return value === allowedCharacters;
  })) {
    throw new Error('Invalid value for allowedCharacters. Use alpha, numeric, or alphanumeric');
  }
  var _useStyles = index_style(),
    styles = _useStyles.styles;
  var classString = classnames_default()(styles.input);
  var inputsRef = (0,react.useRef)([]);
  var inputProps = propsMap[allowedCharacters];
  (0,react.useImperativeHandle)(ref, function () {
    return {
      focus: function focus() {
        if (inputsRef.current) {
          inputsRef.current[0].focus();
        }
      },
      clear: function clear() {
        if (inputsRef.current) {
          for (var i = 0; i < inputsRef.current.length; i++) {
            inputsRef.current[i].value = '';
          }
          inputsRef.current[0].focus();
        }
        sendResult();
      }
    };
  });
  (0,react.useEffect)(function () {
    if (autoFocus) {
      inputsRef.current[0].focus();
    }
  }, []);
  var sendResult = function sendResult() {
    var res = inputsRef.current.map(function (input) {
      return input.value;
    }).join('');
    onChange && onChange(res);
  };
  var handleOnChange = function handleOnChange(e) {
    var _e$target = e.target,
      value = _e$target.value,
      nextElementSibling = _e$target.nextElementSibling;
    if (value.length > 1) {
      e.target.value = value.charAt(0);
      if (nextElementSibling !== null) {
        nextElementSibling.focus();
      }
    } else {
      if (value.match(inputProps.pattern)) {
        if (nextElementSibling !== null) {
          nextElementSibling.focus();
        }
      } else {
        e.target.value = '';
      }
    }
    sendResult();
  };
  var handleOnKeyDown = function handleOnKeyDown(e) {
    var key = e.key;
    var target = e.target;
    if (key === 'Backspace') {
      if (target.value === '') {
        if (target.previousElementSibling !== null) {
          var t = target.previousElementSibling;
          t.value = '';
          t.focus();
          e.preventDefault();
        }
      } else {
        target.value = '';
      }
      sendResult();
    }
  };
  var handleOnFocus = function handleOnFocus(e) {
    e.target.select();
  };
  var handleOnPaste = function handleOnPaste(e) {
    var pastedValue = e.clipboardData.getData('Text');
    var currentInput = 0;
    for (var i = 0; i < pastedValue.length; i++) {
      var pastedCharacter = pastedValue.charAt(i);
      var currentValue = inputsRef.current[currentInput].value;
      if (pastedCharacter.match(inputProps.pattern)) {
        if (!currentValue) {
          inputsRef.current[currentInput].value = pastedCharacter;
          if (inputsRef.current[currentInput].nextElementSibling !== null) {
            inputsRef.current[currentInput].nextElementSibling.focus();
            currentInput++;
          }
        }
      }
    }
    sendResult();
    e.preventDefault();
  };
  var inputs = [];
  var _loop = function _loop(i) {
    inputs.push( /*#__PURE__*/(0,jsx_runtime.jsx)("input", objectSpread2_default()(objectSpread2_default()({
      onChange: handleOnChange,
      onKeyDown: handleOnKeyDown,
      onFocus: handleOnFocus,
      onPaste: handleOnPaste
    }, inputProps), {}, {
      type: isPassword ? 'password' : inputProps.type,
      ref: function ref(el) {
        inputsRef.current[i] = el;
      },
      maxLength: 1,
      className: classString,
      autoComplete: i === 0 ? 'one-time-code' : 'off',
      "aria-label": ariaLabel ? "".concat(ariaLabel, ". Character ").concat(i + 1, ".") : "Character ".concat(i + 1, "."),
      disabled: disabled,
      placeholder: placeholder
    }), i));
  };
  for (var i = 0; i < length; i++) {
    _loop(i);
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: containerClassName,
    children: inputs
  });
});
/* harmony default export */ var components_AuthCode = (AuthCode);
;// CONCATENATED MODULE: ./src/components/Footer/index.tsx




var Footer = function Footer() {
  return /*#__PURE__*/_jsx(DefaultFooter, {
    style: {
      background: 'none'
    },
    copyright: "Powered by Ant Desgin",
    links: [{
      key: 'Ant Design Pro',
      title: 'Ant Design Pro',
      href: 'https://pro.ant.design',
      blankTarget: true
    }, {
      key: 'github',
      title: /*#__PURE__*/_jsx(GithubOutlined, {}),
      href: 'https://github.com/ant-design/ant-design-pro',
      blankTarget: true
    }, {
      key: 'Ant Design',
      title: 'Ant Design',
      href: 'https://ant.design',
      blankTarget: true
    }]
  });
};
/* harmony default export */ var components_Footer = ((/* unused pure expression or super */ null && (Footer)));
;// CONCATENATED MODULE: ./src/components/index.ts
/**
 * 这个文件作为组件的目录
 * 目的是统一管理对外输出的组件，方便分类
 */
/**
 * 布局组件
 */



// EXTERNAL MODULE: ./src/pages/user/login/service.ts
var service = __webpack_require__(80937);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(674);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/IconFont.js + 1 modules
var IconFont = __webpack_require__(15997);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(38438);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LockOutlined.js + 1 modules
var LockOutlined = __webpack_require__(31103);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.7_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@1_7xna7dsmvn36ghix3ko76jcnui/node_modules/@ant-design/pro-form/es/layouts/ModalForm/index.js
var ModalForm = __webpack_require__(49718);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.7_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@1_7xna7dsmvn36ghix3ko76jcnui/node_modules/@ant-design/pro-form/es/layouts/LoginFormPage/index.js + 1 modules
var LoginFormPage = __webpack_require__(30450);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-form@2.31.7_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@1_7xna7dsmvn36ghix3ko76jcnui/node_modules/@ant-design/pro-form/es/components/Text/index.js
var Text = __webpack_require__(41738);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 30 modules
var _umi_production_exports = __webpack_require__(88523);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/index.js + 6 modules
var theme = __webpack_require__(3579);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(42663);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(43616);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/row/index.js
var row = __webpack_require__(8909);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/col/index.js
var col = __webpack_require__(27352);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 20 modules
var typography = __webpack_require__(59326);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/divider/index.js + 1 modules
var divider = __webpack_require__(49399);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(65611);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(65069);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tabs/index.js + 24 modules
var tabs = __webpack_require__(89569);
;// CONCATENATED MODULE: ./src/pages/user/login/logo.svg
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

const SvgLogo = (props) => /* @__PURE__ */ React.createElement("svg", __spreadValues({ "data-name": "\\u56FE\\u5C42 2", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 165.99 146.9" }, props), /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement("linearGradient", { id: "logo_svg__b", "data-name": "\\u672A\\u547D\\u540D\\u7684\\u6E10\\u53D8", x1: -686.82, y1: 610.82, x2: -685.84, y2: 609.82, gradientTransform: "matrix(165.99 0 0 -146.9 114009.77 89728.26)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { offset: 0, stopColor: "#15b5fe" }), /* @__PURE__ */ React.createElement("stop", { offset: 0.49, stopColor: "#2462fe" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#903ffe" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "logo_svg__a", "data-name": "\\u672A\\u547D\\u540D\\u7684\\u6E10\\u53D8 3", x1: -683.45, y1: 609.93, x2: -682.63, y2: 609, gradientTransform: "matrix(92.6 0 0 -117.13 63307.6 71482.08)", gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ React.createElement("stop", { offset: 0, stopColor: "#9442ff" }), /* @__PURE__ */ React.createElement("stop", { offset: 1, stopColor: "#1ab2fd" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "logo_svg__c", "data-name": "\\u672A\\u547D\\u540D\\u7684\\u6E10\\u53D8 3", x1: -697.43, y1: 616.93, x2: -698.36, y2: 617.82, gradientTransform: "matrix(-93.14 0 0 118.01 -64894.69 -72805.69)", xlinkHref: "#logo_svg__a" })), /* @__PURE__ */ React.createElement("g", { "data-name": "\\u56FE\\u5C42 1" }, /* @__PURE__ */ React.createElement("path", { d: "M128.87 82.45c5-5.67 5-12 0-19-38.33-36.34-60.33-56-66-59-.44-.23-.93-.48-1.46-.75a74.24 74.24 0 0 1 5.26-1.42c1.77-.41 3.55-.74 5.35-1.02 1.8-.27 3.6-.48 5.41-.61 1.81-.14 3.63-.2 5.44-.2 1.19 0 2.37.03 3.56.09s2.37.15 3.55.26c1.18.12 2.36.26 3.53.44a71.58 71.58 0 0 1 6.98 1.39c1.15.29 2.29.6 3.43.95 1.14.34 2.26.72 3.38 1.12 1.12.4 2.22.83 3.32 1.28 1.1.45 2.18.93 3.25 1.44 1.07.51 2.13 1.04 3.18 1.6a72.48 72.48 0 0 1 6.11 3.65c.99.66 1.96 1.34 2.91 2.05.95.71 1.89 1.44 2.81 2.19a74.568 74.568 0 0 1 5.27 4.77c.84.84 1.66 1.7 2.45 2.58.8.88 1.57 1.78 2.32 2.69.75.92 1.48 1.85 2.19 2.81.71.95 1.39 1.92 2.05 2.91a72.46 72.46 0 0 1 3.65 6.11c.56 1.05 1.09 2.11 1.6 3.18.51 1.07.99 2.16 1.44 3.25.45 1.1.88 2.2 1.28 3.32.4 1.12.77 2.24 1.12 3.38.34 1.14.66 2.28.95 3.43.29 1.15.55 2.31.78 3.47.23 1.16.43 2.33.61 3.51.17 1.17.32 2.35.44 3.53s.2 2.36.26 3.55.09 2.37.09 3.56c0 3.46-.25 6.91-.74 10.34-.49 3.43-1.23 6.8-2.21 10.13.25.37.5.73.75 1.1 16.88 32.67 13.89 43.49 8.95 47.94l-.28.25c-4.99 4.51-12.43 11.24-49.72-15.75-7-5.33-14.5-11.17-22.5-17.5-22.26-20.82-34.43-32.65-36.5-35.5l24.5-25.5-13-11-27.5 27c-5 5.67-5 12 0 19 38.33 36.33 60.33 56 66 59 .05.02.09.05.14.07-3.31.97-6.67 1.7-10.09 2.19s-6.85.74-10.3.74c-1.19 0-2.37-.03-3.56-.09a83.48 83.48 0 0 1-3.55-.26c-1.18-.12-2.36-.26-3.53-.44a71.58 71.58 0 0 1-6.98-1.39c-1.15-.29-2.29-.6-3.43-.95-1.14-.34-2.26-.72-3.38-1.12-1.12-.4-2.22-.83-3.32-1.28-1.1-.45-2.18-.93-3.25-1.44-1.07-.51-2.13-1.04-3.18-1.6a72.48 72.48 0 0 1-6.11-3.65c-.99-.66-1.96-1.34-2.91-2.05-.95-.71-1.89-1.44-2.81-2.19-.92-.75-1.82-1.53-2.69-2.32-.88-.8-1.74-1.62-2.58-2.45-.84-.84-1.66-1.7-2.45-2.58-.8-.88-1.57-1.78-2.32-2.69-.75-.92-1.48-1.85-2.19-2.81-.71-.95-1.39-1.92-2.05-2.91a72.46 72.46 0 0 1-3.65-6.11c-.56-1.05-1.09-2.11-1.6-3.18-.51-1.07-.99-2.16-1.44-3.25-.45-1.1-.88-2.2-1.28-3.32-.4-1.12-.77-2.24-1.12-3.38-.34-1.14-.66-2.28-.95-3.43-.29-1.15-.55-2.31-.78-3.47a80.31 80.31 0 0 1-.61-3.51c-.17-1.17-.32-2.35-.44-3.53-.12-1.18-.2-2.36-.26-3.55s-.09-2.37-.09-3.56a72.475 72.475 0 0 1 2.74-19.73c-.25-.36-.49-.72-.73-1.08l1 1.32C-4.13 19.95-1.13 8.95 3.87 4.45l.28-.25C9.14-.32 16.58-7.04 53.87 19.95c7 5.33 14.5 11.17 22.5 17.5 22.26 20.82 34.43 32.65 36.5 35.5l-24.5 25.5 13 11 27.5-27Z", style: {
  fill: "url(#logo_svg__b)",
  fillRule: "evenodd",
  strokeWidth: 0
} }), /* @__PURE__ */ React.createElement("path", { d: "M30.97 29.84c-19 5-41.5 66.5 17 107.5 15 8.67 33.34 10.5 55 5.5l-32-27-30.5-29.5c-7-6.67-8.5-13.33-4.5-20 2.67-3 6.5-6.83 11.5-11.5 5-5 10.83-10.67 17.5-17-10-8.67-21.33-11.33-34-8Z", style: {
  fill: "url(#logo_svg__a)",
  strokeWidth: 0
} }), /* @__PURE__ */ React.createElement("path", { d: "M135.37 117.19c19-5 39-75.74-17-107.5C103.04.2 84.2-1.89 61.87 3.45l33.5 27.74 30.5 29.5c7 6.67 8.5 13.33 4.5 20-2.67 3-6.5 6.83-11.5 11.5-5 5-10.83 10.67-17.5 17 10 8.67 21.33 11.33 34 8Z", style: {
  strokeWidth: 0,
  fill: "url(#logo_svg__c)"
} })));

/* harmony default export */ var logo = ("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IuWbvuWxgiAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTY1Ljk5IDE0Ni45Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImIiIGRhdGEtbmFtZT0i5pyq5ZG95ZCN55qE5riQ5Y+YIiB4MT0iLTY4Ni44MiIgeTE9IjYxMC44MiIgeDI9Ii02ODUuODQiIHkyPSI2MDkuODIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMTY1Ljk5IDAgMCAtMTQ2LjkgMTE0MDA5Ljc3IDg5NzI4LjI2KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzE1YjVmZSIvPjxzdG9wIG9mZnNldD0iLjQ5IiBzdG9wLWNvbG9yPSIjMjQ2MmZlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOTAzZmZlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGRhdGEtbmFtZT0i5pyq5ZG95ZCN55qE5riQ5Y+YIDMiIHgxPSItNjgzLjQ1IiB5MT0iNjA5LjkzIiB4Mj0iLTY4Mi42MyIgeTI9IjYwOSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg5Mi42IDAgMCAtMTE3LjEzIDYzMzA3LjYgNzE0ODIuMDgpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjOTQ0MmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMWFiMmZkIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImMiIGRhdGEtbmFtZT0i5pyq5ZG95ZCN55qE5riQ5Y+YIDMiIHgxPSItNjk3LjQzIiB5MT0iNjE2LjkzIiB4Mj0iLTY5OC4zNiIgeTI9IjYxNy44MiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgtOTMuMTQgMCAwIDExOC4wMSAtNjQ4OTQuNjkgLTcyODA1LjY5KSIgeGxpbms6aHJlZj0iI2EiLz48L2RlZnM+PGcgZGF0YS1uYW1lPSLlm77lsYIgMSI+PHBhdGggZD0iTTEyOC44NyA4Mi40NWM1LTUuNjcgNS0xMiAwLTE5LTM4LjMzLTM2LjM0LTYwLjMzLTU2LTY2LTU5LS40NC0uMjMtLjkzLS40OC0xLjQ2LS43NWE3NC4yNCA3NC4yNCAwIDAgMSA1LjI2LTEuNDJjMS43Ny0uNDEgMy41NS0uNzQgNS4zNS0xLjAyIDEuOC0uMjcgMy42LS40OCA1LjQxLS42MSAxLjgxLS4xNCAzLjYzLS4yIDUuNDQtLjIgMS4xOSAwIDIuMzcuMDMgMy41Ni4wOXMyLjM3LjE1IDMuNTUuMjZjMS4xOC4xMiAyLjM2LjI2IDMuNTMuNDRhNzEuNTggNzEuNTggMCAwIDEgNi45OCAxLjM5YzEuMTUuMjkgMi4yOS42IDMuNDMuOTUgMS4xNC4zNCAyLjI2LjcyIDMuMzggMS4xMiAxLjEyLjQgMi4yMi44MyAzLjMyIDEuMjggMS4xLjQ1IDIuMTguOTMgMy4yNSAxLjQ0IDEuMDcuNTEgMi4xMyAxLjA0IDMuMTggMS42YTcyLjQ4IDcyLjQ4IDAgMCAxIDYuMTEgMy42NWMuOTkuNjYgMS45NiAxLjM0IDIuOTEgMi4wNS45NS43MSAxLjg5IDEuNDQgMi44MSAyLjE5YTc0LjU2OCA3NC41NjggMCAwIDEgNS4yNyA0Ljc3Yy44NC44NCAxLjY2IDEuNyAyLjQ1IDIuNTguOC44OCAxLjU3IDEuNzggMi4zMiAyLjY5Ljc1LjkyIDEuNDggMS44NSAyLjE5IDIuODEuNzEuOTUgMS4zOSAxLjkyIDIuMDUgMi45MWE3Mi40NiA3Mi40NiAwIDAgMSAzLjY1IDYuMTFjLjU2IDEuMDUgMS4wOSAyLjExIDEuNiAzLjE4LjUxIDEuMDcuOTkgMi4xNiAxLjQ0IDMuMjUuNDUgMS4xLjg4IDIuMiAxLjI4IDMuMzIuNCAxLjEyLjc3IDIuMjQgMS4xMiAzLjM4LjM0IDEuMTQuNjYgMi4yOC45NSAzLjQzLjI5IDEuMTUuNTUgMi4zMS43OCAzLjQ3LjIzIDEuMTYuNDMgMi4zMy42MSAzLjUxLjE3IDEuMTcuMzIgMi4zNS40NCAzLjUzcy4yIDIuMzYuMjYgMy41NS4wOSAyLjM3LjA5IDMuNTZjMCAzLjQ2LS4yNSA2LjkxLS43NCAxMC4zNC0uNDkgMy40My0xLjIzIDYuOC0yLjIxIDEwLjEzLjI1LjM3LjUuNzMuNzUgMS4xIDE2Ljg4IDMyLjY3IDEzLjg5IDQzLjQ5IDguOTUgNDcuOTRsLS4yOC4yNWMtNC45OSA0LjUxLTEyLjQzIDExLjI0LTQ5LjcyLTE1Ljc1LTctNS4zMy0xNC41LTExLjE3LTIyLjUtMTcuNS0yMi4yNi0yMC44Mi0zNC40My0zMi42NS0zNi41LTM1LjVsMjQuNS0yNS41LTEzLTExLTI3LjUgMjdjLTUgNS42Ny01IDEyIDAgMTkgMzguMzMgMzYuMzMgNjAuMzMgNTYgNjYgNTkgLjA1LjAyLjA5LjA1LjE0LjA3LTMuMzEuOTctNi42NyAxLjctMTAuMDkgMi4xOXMtNi44NS43NC0xMC4zLjc0Yy0xLjE5IDAtMi4zNy0uMDMtMy41Ni0uMDlhODMuNDggODMuNDggMCAwIDEtMy41NS0uMjZjLTEuMTgtLjEyLTIuMzYtLjI2LTMuNTMtLjQ0YTcxLjU4IDcxLjU4IDAgMCAxLTYuOTgtMS4zOWMtMS4xNS0uMjktMi4yOS0uNi0zLjQzLS45NS0xLjE0LS4zNC0yLjI2LS43Mi0zLjM4LTEuMTItMS4xMi0uNC0yLjIyLS44My0zLjMyLTEuMjgtMS4xLS40NS0yLjE4LS45My0zLjI1LTEuNDQtMS4wNy0uNTEtMi4xMy0xLjA0LTMuMTgtMS42YTcyLjQ4IDcyLjQ4IDAgMCAxLTYuMTEtMy42NWMtLjk5LS42Ni0xLjk2LTEuMzQtMi45MS0yLjA1LS45NS0uNzEtMS44OS0xLjQ0LTIuODEtMi4xOS0uOTItLjc1LTEuODItMS41My0yLjY5LTIuMzItLjg4LS44LTEuNzQtMS42Mi0yLjU4LTIuNDUtLjg0LS44NC0xLjY2LTEuNy0yLjQ1LTIuNTgtLjgtLjg4LTEuNTctMS43OC0yLjMyLTIuNjktLjc1LS45Mi0xLjQ4LTEuODUtMi4xOS0yLjgxLS43MS0uOTUtMS4zOS0xLjkyLTIuMDUtMi45MWE3Mi40NiA3Mi40NiAwIDAgMS0zLjY1LTYuMTFjLS41Ni0xLjA1LTEuMDktMi4xMS0xLjYtMy4xOC0uNTEtMS4wNy0uOTktMi4xNi0xLjQ0LTMuMjUtLjQ1LTEuMS0uODgtMi4yLTEuMjgtMy4zMi0uNC0xLjEyLS43Ny0yLjI0LTEuMTItMy4zOC0uMzQtMS4xNC0uNjYtMi4yOC0uOTUtMy40My0uMjktMS4xNS0uNTUtMi4zMS0uNzgtMy40N2E4MC4zMSA4MC4zMSAwIDAgMS0uNjEtMy41MWMtLjE3LTEuMTctLjMyLTIuMzUtLjQ0LTMuNTMtLjEyLTEuMTgtLjItMi4zNi0uMjYtMy41NXMtLjA5LTIuMzctLjA5LTMuNTZhNzIuNDc1IDcyLjQ3NSAwIDAgMSAyLjc0LTE5LjczYy0uMjUtLjM2LS40OS0uNzItLjczLTEuMDhsMSAxLjMyQy00LjEzIDE5Ljk1LTEuMTMgOC45NSAzLjg3IDQuNDVsLjI4LS4yNUM5LjE0LS4zMiAxNi41OC03LjA0IDUzLjg3IDE5Ljk1YzcgNS4zMyAxNC41IDExLjE3IDIyLjUgMTcuNSAyMi4yNiAyMC44MiAzNC40MyAzMi42NSAzNi41IDM1LjVsLTI0LjUgMjUuNSAxMyAxMSAyNy41LTI3WiIgc3R5bGU9ImZpbGw6dXJsKCNiKTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2Utd2lkdGg6MCIvPjxwYXRoIGQ9Ik0zMC45NyAyOS44NGMtMTkgNS00MS41IDY2LjUgMTcgMTA3LjUgMTUgOC42NyAzMy4zNCAxMC41IDU1IDUuNWwtMzItMjctMzAuNS0yOS41Yy03LTYuNjctOC41LTEzLjMzLTQuNS0yMCAyLjY3LTMgNi41LTYuODMgMTEuNS0xMS41IDUtNSAxMC44My0xMC42NyAxNy41LTE3LTEwLTguNjctMjEuMzMtMTEuMzMtMzQtOFoiIHN0eWxlPSJmaWxsOnVybCgjYSk7c3Ryb2tlLXdpZHRoOjAiLz48cGF0aCBkPSJNMTM1LjM3IDExNy4xOWMxOS01IDM5LTc1Ljc0LTE3LTEwNy41QzEwMy4wNC4yIDg0LjItMS44OSA2MS44NyAzLjQ1bDMzLjUgMjcuNzQgMzAuNSAyOS41YzcgNi42NyA4LjUgMTMuMzMgNC41IDIwLTIuNjcgMy02LjUgNi44My0xMS41IDExLjUtNSA1LTEwLjgzIDEwLjY3LTE3LjUgMTcgMTAgOC42NyAyMS4zMyAxMS4zMyAzNCA4WiIgc3R5bGU9InN0cm9rZS13aWR0aDowO2ZpbGw6dXJsKCNjKSIvPjwvZz48L3N2Zz4=");

;// CONCATENATED MODULE: ./src/pages/user/login/index.tsx

















var IconFontIcons = (0,IconFont/* default */.Z)({
  scriptUrl: '//at.alicdn.com/t/c/font_4007128_to11zcmje6.js' // 在 iconfont.cn 上生成
});
var login_useStyles = (0,functions/* createStyles */.kc)(function (_ref) {
  var token = _ref.token;
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive
      }
    },
    cornerSwitch: {
      position: 'absolute',
      top: 2,
      right: 2,
      fontSize: '48px',
      cursor: 'pointer'
    },
    pcLogin: {
      top: 0,
      right: 0
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover
      }
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      '& .ant-pro-form-login-page-left': {
        maxWidth: 700
      },
      '& iframe': {
        border: 'none'
      },
      '& .ant-pro-form-login-page-desc': {
        transform: 'scale(0.9)',
        marginBlockStart: 22,
        marginBlockEnd: 30
      }
    },
    authCodeContainer: {
      margin: '12px auto'
    }
  };
});
var iconStyles = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle'
};
var Login = function Login() {
  var _useState = (0,react.useState)('base'),
    _useState2 = slicedToArray_default()(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  var _useModel = (0,_umi_production_exports.useModel)('@@initialState'),
    initialState = _useModel.initialState,
    setInitialState = _useModel.setInitialState;
  var _useStyles = login_useStyles(),
    styles = _useStyles.styles;
  var _theme$useToken = theme/* default */.Z.useToken(),
    token = _theme$useToken.token;
  var _useState3 = (0,react.useState)(false),
    _useState4 = slicedToArray_default()(_useState3, 2),
    modalVisible = _useState4[0],
    setModalVisible = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = slicedToArray_default()(_useState5, 2),
    MFAModalCanSubmit = _useState6[0],
    setMFAModalCanSubmit = _useState6[1];
  var _useState7 = (0,react.useState)(''),
    _useState8 = slicedToArray_default()(_useState7, 2),
    authCode = _useState8[0],
    setAuthCode = _useState8[1];
  var _useState9 = (0,react.useState)(false),
    _useState10 = slicedToArray_default()(_useState9, 2),
    isQRLogin = _useState10[0],
    setIsQRLogin = _useState10[1];
  var handleOnChange = (0,react.useCallback)(function (res) {
    setAuthCode(res);
  }, []);
  var authInputRef = (0,react.useRef)(null);
  var formRef = (0,react.useRef)();
  var loginFormRef = (0,react.useRef)();
  var QRLoginRef = (0,react.useRef)();

  // const location = useLocation();

  var urlParams = new URL(window.location.href).searchParams;
  var cUrl = urlParams.get('redirect') || '/';
  var feishuAppId = initialState === null || initialState === void 0 ? void 0 : initialState.feishuAppId;

  // 飞书授权地址
  var larkAuthorizeUrl = "https://passport.feishu.cn/suite/passport/oauth/authorize?client_id=".concat(feishuAppId, "&redirect_uri=").concat(encodeURIComponent(window.location.href), "&response_type=code&state=").concat(cUrl);

  /**
   * 处理登录
   * @param values 表单数据
   * @param needRedirect 是否需要重定向，当登录失败时，需要重定向到登录页
   */
  var handleSubmit = (0,react.useCallback)( /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(values, needRedirect) {
      var result, defaultLoginSuccessMessage, userInfo, _urlParams, defaultLoginFailureMessage;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0,service/* login */.x4)(values);
          case 3:
            result = _context.sent;
            if (!(result.code === 66)) {
              _context.next = 7;
              break;
            }
            // 二次认证

            setModalVisible(true);
            return _context.abrupt("return");
          case 7:
            if (!(result.code === 0 && result.data)) {
              _context.next = 18;
              break;
            }
            defaultLoginSuccessMessage = '登录成功！';
            message/* default */.ZP.success(defaultLoginSuccessMessage);
            // await fetchUserInfo();
            userInfo = result.data; //登录成功后，才删除localStorage中的username
            localStorage.removeItem(userInfo.username);
            (0,utils/* setUserInfo */.ps)(userInfo);
            _urlParams = new URL(window.location.href).searchParams;
            setTimeout(function () {
              window.location.href = userInfo.c_url || _urlParams.get('redirect') || '/';
            }, 500);
            return _context.abrupt("return");
          case 18:
            if (needRedirect) {
              setTimeout(function () {
                window.location.replace('/user/login');
              }, 1000);
            }
          case 19:
            _context.next = 25;
            break;
          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](0);
            defaultLoginFailureMessage = '登录失败，请重试！'; // console.log(error);
            message/* default */.ZP.error(defaultLoginFailureMessage);
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 21]]);
    }));
    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }(), []);
  // const { status, type: loginType } = userLoginState;

  var onMFAFinish = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
    var _loginFormRef$current;
    return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          // console.log(authCode);
          // message.success('提交成功');

          if (authCode.length === 6) {
            (_loginFormRef$current = loginFormRef.current) === null || _loginFormRef$current === void 0 || _loginFormRef$current.submit();
          }
          return _context2.abrupt("return", true);
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })), [authCode]);
  var clearAuthCode = (0,react.useCallback)(function () {
    var _authInputRef$current;
    (_authInputRef$current = authInputRef.current) === null || _authInputRef$current === void 0 || _authInputRef$current.clear();
  }, []);
  var handleLarkLogin = (0,react.useCallback)( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
    return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          window.location.assign(larkAuthorizeUrl);
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })), [larkAuthorizeUrl]);
  var generateQRCode = function generateQRCode() {
    var node = document.querySelector('iframe');
    if (node) {
      node.remove();
    }
    QRLoginRef.current = window.QRLogin({
      id: 'login_container',
      "goto": larkAuthorizeUrl,
      width: '328',
      height: '286'
      // style: 'width:500px;height:600px', //可选的，二维码html标签的style属性
    });
  };
  var handleMessage = (0,react.useCallback)(function (event) {
    if (QRLoginRef.current && QRLoginRef.current.matchOrigin(event.origin) && QRLoginRef.current.matchData(event.data)) {
      var loginTmpCode = event.data.tmp_code;
      window.location.href = "".concat(larkAuthorizeUrl, "&tmp_code=").concat(loginTmpCode);
    }
  }, [larkAuthorizeUrl]);
  if (typeof window.addEventListener != 'undefined') {
    window.addEventListener('message', handleMessage, false);
  } else if (typeof window.attachEvent != 'undefined') {
    window.attachEvent('onmessage', handleMessage);
  }

  /**
   * 登录
   * @param values 表单数据
   * @param code 飞书授权 code
   * @param state 飞书授权 state
   */
  var handleLogin = (0,react.useCallback)( /*#__PURE__*/function () {
    var _ref5 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4(values, code) {
      var urlParams, cUrl, loginData, isDynamic, _values$username, _values$password;
      return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            urlParams = new URLSearchParams(window.location.search);
            cUrl = urlParams.get('redirect') || urlParams.get('c_url') || '/';
            loginData = {};
            isDynamic = authCode.length === 6;
            if (!code) {
              _context4.next = 10;
              break;
            }
            // 执行相应的逻辑，处理获取到的 code 值
            //飞书登录
            loginData = objectSpread2_default()(objectSpread2_default()({
              login_type: 'feishu',
              code: code
            }, isDynamic ? {
              dynamic: authCode
            } : {}), {}, {
              c_url: cUrl,
              fs_redirect_uri: "".concat(encodeURIComponent(window.location.href))
            });
            _context4.next = 8;
            return handleSubmit(loginData, true);
          case 8:
            _context4.next = 14;
            break;
          case 10:
            if (!values) {
              _context4.next = 14;
              break;
            }
            //账号密码登录
            loginData = objectSpread2_default()(objectSpread2_default()({
              username: (_values$username = values.username) === null || _values$username === void 0 ? void 0 : _values$username.trim(),
              password: window.btoa(window.btoa((_values$password = values.password) === null || _values$password === void 0 ? void 0 : _values$password.trim()))
            }, isDynamic ? {
              dynamic: authCode
            } : {
              login_type: type
            }), {}, {
              c_url: cUrl
            });
            _context4.next = 14;
            return handleSubmit(loginData);
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x3, _x4) {
      return _ref5.apply(this, arguments);
    };
  }(), [authCode, type]);
  var doLogin = /*#__PURE__*/function () {
    var _ref6 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5(values) {
      var urlParams, code;
      return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            urlParams = new URLSearchParams(window.location.search);
            code = urlParams.get('code');
            _context5.next = 4;
            return handleLogin(values, code !== null && code !== void 0 ? code : '');
          case 4:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function doLogin(_x5) {
      return _ref6.apply(this, arguments);
    };
  }();
  (0,react.useEffect)(function () {
    clearAuthCode();
  }, [modalVisible]);
  (0,react.useEffect)(function () {
    if (authCode.length === 6) {
      setMFAModalCanSubmit(true);
    } else {
      setMFAModalCanSubmit(false);
    }
  }, [authCode]);
  (0,react.useEffect)(function () {
    generateQRCode();
  }, [isQRLogin]);
  (0,react.useEffect)(function () {
    asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee6() {
      return regeneratorRuntime_default()().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return doLogin();
          case 2:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }))();
  }, []);

  // 二次验证弹窗如果可以提交，则自动提交
  (0,react.useEffect)(function () {
    if (MFAModalCanSubmit) {
      var _formRef$current;
      (_formRef$current = formRef.current) === null || _formRef$current === void 0 || _formRef$current.submit();
    }
  }, [MFAModalCanSubmit]);
  var mfaModal = (0,react.useMemo)(function () {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(ModalForm/* ModalForm */.Y, {
      title: "\u4E8C\u6B21\u9A8C\u8BC1",
      open: modalVisible,
      width: 580,
      formRef: formRef,
      onOpenChange: setModalVisible,
      submitter: {
        resetButtonProps: false,
        submitButtonProps: false,
        render: function render(props, dom) {
          console.log(props);
          return [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            onClick: clearAuthCode,
            children: "\u91CD\u7F6E"
          }, "reset"), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "primary",
            onClick: function onClick() {
              var _formRef$current2, _formRef$current2$sub;
              return (_formRef$current2 = formRef.current) === null || _formRef$current2 === void 0 || (_formRef$current2$sub = _formRef$current2.submit) === null || _formRef$current2$sub === void 0 ? void 0 : _formRef$current2$sub.call(_formRef$current2);
            },
            disabled: !MFAModalCanSubmit,
            children: "\u63D0\u4EA4"
          }, "submit")];
        }
      },
      onFinish: onMFAFinish,
      onKeyPress: function onKeyPress(e) {
        if (e.key === 'Enter' && MFAModalCanSubmit) {
          var _formRef$current3;
          (_formRef$current3 = formRef.current) === null || _formRef$current3 === void 0 || _formRef$current3.submit();
        }
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
        justify: 'center',
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
            justify: 'center',
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_AuthCode, {
              onChange: handleOnChange,
              containerClassName: styles.authCodeContainer,
              ref: authInputRef,
              allowedCharacters: 'numeric'
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
            justify: 'center',
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
              children: "\u8BF7\u6253\u5F00\u60A8\u624B\u673A\u4E0A\u7684Authenticator\u5E94\u7528\uFF0C\u627E\u5230\u751F\u6210\u76846\u4F4D\u9A8C\u8BC1\u7801\u5E76\u8F93\u5165\u4EE5\u7EE7\u7EED\u3002"
            })
          })]
        })
      })
    });
  }, [modalVisible, MFAModalCanSubmit]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Helmet, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("title", {
        children: "\u767B\u5F55"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        backgroundColor: 'white',
        height: '100vh',
        background: 'url(/web/iris/imgs/login_bg.jpg) left 10% no-repeat',
        backgroundSize: '110% auto'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(LoginFormPage/* LoginFormPage */.B, {
        style: {
          backgroundSize: 'auto'
        },
        logo: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          alt: "logo",
          src: logo
        }),
        title: "\u5168\u7403\u4E00\u7AD9\u5F0F\u8FD0\u7EF4",
        containerStyle: {
          backgroundImage: 'none',
          height: 500
        },
        backgroundImageUrl: '',
        formRef: loginFormRef,
        subTitle: "\u7814\u8FD0\u4E00\u4F53\uFF0C\u6570\u5B57\u5316\u9A71\u52A8\uFF0C\u5353\u8D8A\u6548\u80FD\u63D0\u5347\uFF0C\u7CBE\u7EC6\u5316\u6210\u672C\u7BA1\u7406",
        submitter: {
          render: function render(_, dom) {
            return !isQRLogin && dom.pop();
          }
        },
        actions: !isQRLogin && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(divider/* default */.Z, {
            plain: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              style: {
                fontWeight: 'normal',
                fontSize: 14
              },
              children: "\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
            align: "center",
            size: 24,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
              title: "\u98DE\u4E66\u767B\u9646",
              placement: 'right',
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                style: {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 40,
                  width: 40,
                  border: '1px solid ' + token.colorPrimaryBorder,
                  borderRadius: '50%',
                  cursor: 'pointer'
                },
                onClick: handleLarkLogin,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(IconFontIcons, {
                  type: "c-icon-feishu",
                  style: objectSpread2_default()({}, iconStyles)
                })
              })
            })
          })]
        }),
        onFinish: ( /*#__PURE__*/function () {
          var _ref8 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee7(values) {
            return regeneratorRuntime_default()().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return doLogin(values);
                case 2:
                case "end":
                  return _context7.stop();
              }
            }, _callee7);
          }));
          return function (_x6) {
            return _ref8.apply(this, arguments);
          };
        }()),
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: isQRLogin ? 'block' : 'none',
            textAlign: 'center'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            id: "login_container"
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(IconFontIcons, {
              type: "c-icon-feishu",
              style: objectSpread2_default()({}, iconStyles)
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
              type: "secondary",
              children: "\u98DE\u4E66App\u626B\u4E00\u626B"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            display: isQRLogin ? 'none' : 'block'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* default */.Z, {
            activeKey: type,
            onChange: function onChange(activeKey) {
              setType(activeKey);
            },
            centered: true,
            items: [{
              key: 'base',
              label: '账号密码登录'
            }, {
              key: 'ldap',
              label: 'LDAP'
            }]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* default */.Z, {
            name: "username",
            fieldProps: {
              size: 'large',
              prefix: /*#__PURE__*/(0,jsx_runtime.jsx)(UserOutlined/* default */.Z, {})
            },
            placeholder: '请输入用户名',
            rules: [{
              required: !modalVisible,
              //如果二次验证弹窗打开，用户名不需要校验非空
              message: '用户名是必填项！'
            }]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* default */.Z.Password, {
            name: "password",
            fieldProps: {
              size: 'large',
              prefix: /*#__PURE__*/(0,jsx_runtime.jsx)(LockOutlined/* default */.Z, {})
            },
            placeholder: '请输入密码',
            rules: [{
              required: !modalVisible,
              //如果二次验证弹窗打开，密码不需要校验非空
              message: '密码是必填项！'
            }]
          })]
        }), isQRLogin ? /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
          title: "\u5207\u6362\u81F3\u8D26\u53F7\u767B\u5F55",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(IconFontIcons, {
            type: "c-icon-pc-login",
            className: classnames_default()(styles.cornerSwitch, styles.pcLogin),
            onClick: function onClick() {
              setIsQRLogin(!isQRLogin);
            }
          })
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
          title: "\u98DE\u4E66\u626B\u7801\uFF0C\u5FEB\u901F\u767B\u9646",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(IconFontIcons, {
            type: "c-icon-saomadenglu01",
            className: styles.cornerSwitch,
            onClick: function onClick() {
              setIsQRLogin(!isQRLogin);
            }
          })
        })]
      }), mfaModal]
    })]
  });
};
/* harmony default export */ var login = (Login);

/***/ })

}]);