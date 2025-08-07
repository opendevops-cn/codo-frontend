(self["webpackChunkiris"] = self["webpackChunkiris"] || []).push([[7038],{

/***/ 27474:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ icons_LogoutOutlined; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(55443);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.4.2/node_modules/@ant-design/icons-svg/es/asn/LogoutOutlined.js
// This icon file is generated automatically.
var LogoutOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z" } }] }, "name": "logout", "theme": "outlined" };
/* harmony default export */ var asn_LogoutOutlined = (LogoutOutlined);

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(52521);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(35576);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(38334);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@4.8.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/Context.js

var IconContext = /*#__PURE__*/(0,react.createContext)({});
/* harmony default export */ var Context = (IconContext);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(28269);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+colors@6.0.0/node_modules/@ant-design/colors/dist/index.esm.js
var index_esm = __webpack_require__(56088);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/warning.js
var warning = __webpack_require__(4449);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/Dom/dynamicCSS.js
var dynamicCSS = __webpack_require__(18263);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/camelCase.js
var camelCase = __webpack_require__(47638);
var camelCase_default = /*#__PURE__*/__webpack_require__.n(camelCase);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@4.8.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/utils.js








function utils_warning(valid, message) {
  (0,warning/* default */.ZP)(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return (0,esm_typeof/* default */.Z)(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && ((0,esm_typeof/* default */.Z)(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase_default()(key)] = val;
    }
    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/react.createElement(node.tag, (0,objectSpread2/* default */.Z)({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }
  return /*#__PURE__*/react.createElement(node.tag, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return (0,index_esm.generate)(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
var iconStyles = "\n.anticon {\n  display: inline-flex;\n  alignItems: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles() {
  var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;
  var _useContext = (0,react.useContext)(Context),
    csp = _useContext.csp;
  (0,react.useEffect)(function () {
    (0,dynamicCSS/* updateCSS */.hq)(styleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp
    });
  }, []);
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@4.8.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/IconBase.js


var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];

var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
    secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return (0,objectSpread2/* default */.Z)({}, twoToneColorPalette);
}
var IconBase = function IconBase(props) {
  var icon = props.icon,
    className = props.className,
    onClick = props.onClick,
    style = props.style,
    primaryColor = props.primaryColor,
    secondaryColor = props.secondaryColor,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles();
  utils_warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === 'function') {
    target = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return generate(target.icon, "svg-".concat(target.name), (0,objectSpread2/* default */.Z)({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps));
};
IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
/* harmony default export */ var components_IconBase = (IconBase);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@4.8.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js



function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = (0,slicedToArray/* default */.Z)(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return components_IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = components_IconBase.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@4.8.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/AntdIcon.js




var AntdIcon_excluded = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];






// Initial setting
// should move it to antd main repo?
setTwoToneColor('#1890ff');
var Icon = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var className = props.className,
    icon = props.icon,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    twoToneColor = props.twoToneColor,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, AntdIcon_excluded);
  var _React$useContext = react.useContext(Context),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
    rootClassName = _React$useContext.rootClassName;
  var classString = classnames_default()(rootClassName, prefixCls, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = (0,slicedToArray/* default */.Z)(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return /*#__PURE__*/react.createElement("span", (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    role: "img",
    "aria-label": icon.name
  }, restProps), {}, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/react.createElement(components_IconBase, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
/* harmony default export */ var AntdIcon = (Icon);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@4.8.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LogoutOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var LogoutOutlined_LogoutOutlined = function LogoutOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_LogoutOutlined
  }));
};
var RefIcon = /*#__PURE__*/react.forwardRef(LogoutOutlined_LogoutOutlined);
if (false) {}
/* harmony default export */ var icons_LogoutOutlined = (RefIcon);

/***/ }),

/***/ 15997:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ create; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(55824);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(38334);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(55443);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(35576);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(42684);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/Context.js
var Context = __webpack_require__(53552);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/utils.js
var utils = __webpack_require__(73050);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/Icon.js




var _excluded = ["className", "component", "viewBox", "spin", "rotate", "tabIndex", "onClick", "children"];
// Seems this is used for iconFont





var Icon = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var className = props.className,
    Component = props.component,
    viewBox = props.viewBox,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    children = props.children,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var iconRef = react.useRef();
  var mergedRef = (0,es_ref/* useComposeRef */.x1)(iconRef, ref);
  (0,utils/* warning */.Kp)(Boolean(Component || children), 'Should have `component` prop or `children`.');
  (0,utils/* useInsertStyles */.C3)(iconRef);
  var _React$useContext = react.useContext(Context/* default */.Z),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
    rootClassName = _React$useContext.rootClassName;
  var classString = classnames_default()(rootClassName, prefixCls, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-spin"), !!spin && !!Component), className);
  var svgClassString = classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-spin"), !!spin));
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var innerSvgProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, utils/* svgBaseProps */.vD), {}, {
    className: svgClassString,
    style: svgStyle,
    viewBox: viewBox
  });
  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }

  // component > children
  var renderInnerNode = function renderInnerNode() {
    if (Component) {
      return /*#__PURE__*/react.createElement(Component, innerSvgProps, children);
    }
    if (children) {
      (0,utils/* warning */.Kp)(Boolean(viewBox) || react.Children.count(children) === 1 && /*#__PURE__*/react.isValidElement(children) && react.Children.only(children).type === 'use', 'Make sure that you provide correct `viewBox`' + ' prop (default `0 0 1024 1024`) to the icon.');
      return /*#__PURE__*/react.createElement("svg", (0,esm_extends/* default */.Z)({}, innerSvgProps, {
        viewBox: viewBox
      }), children);
    }
    return null;
  };
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  return /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.Z)({
    role: "img"
  }, restProps, {
    ref: mergedRef,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), renderInnerNode());
});
Icon.displayName = 'AntdIcon';
/* harmony default export */ var components_Icon = (Icon);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/IconFont.js


var IconFont_excluded = ["type", "children"];


var customCache = new Set();
function isValidCustomScriptUrl(scriptUrl) {
  return Boolean(typeof scriptUrl === 'string' && scriptUrl.length && !customCache.has(scriptUrl));
}
function createScriptUrlElements(scriptUrls) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var currentScriptUrl = scriptUrls[index];
  if (isValidCustomScriptUrl(currentScriptUrl)) {
    var script = document.createElement('script');
    script.setAttribute('src', currentScriptUrl);
    script.setAttribute('data-namespace', currentScriptUrl);
    if (scriptUrls.length > index + 1) {
      script.onload = function () {
        createScriptUrlElements(scriptUrls, index + 1);
      };
      script.onerror = function () {
        createScriptUrlElements(scriptUrls, index + 1);
      };
    }
    customCache.add(currentScriptUrl);
    document.body.appendChild(script);
  }
}
function create() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var scriptUrl = options.scriptUrl,
    _options$extraCommonP = options.extraCommonProps,
    extraCommonProps = _options$extraCommonP === void 0 ? {} : _options$extraCommonP;

  /**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */
  if (scriptUrl && typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function') {
    if (Array.isArray(scriptUrl)) {
      // 因为iconfont资源会把svg插入before，所以前加载相同type会覆盖后加载，为了数组覆盖顺序，倒叙插入
      createScriptUrlElements(scriptUrl.reverse());
    } else {
      createScriptUrlElements([scriptUrl]);
    }
  }
  var Iconfont = /*#__PURE__*/react.forwardRef(function (props, ref) {
    var type = props.type,
      children = props.children,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, IconFont_excluded);

    // children > type
    var content = null;
    if (props.type) {
      content = /*#__PURE__*/react.createElement("use", {
        xlinkHref: "#".concat(type)
      });
    }
    if (children) {
      content = children;
    }
    return /*#__PURE__*/react.createElement(components_Icon, (0,esm_extends/* default */.Z)({}, extraCommonProps, restProps, {
      ref: ref
    }), content);
  });
  Iconfont.displayName = 'Iconfont';
  return Iconfont;
}

/***/ }),

/***/ 85507:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: function() { return /* binding */ ProLayout; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(35576);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(94162);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(84964);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(38334);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(52521);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(55443);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_rea_6s3vfui2lajfw6tsxvu6rpn6re/node_modules/@ant-design/pro-provider/es/index.js + 2 modules
var es = __webpack_require__(29704);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/hooks/useMergedState.js
var useMergedState = __webpack_require__(93954);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-utils@2.17.0_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@_ftolbhh2rvo5cbykfdwocfesei/node_modules/@ant-design/pro-utils/es/useMediaQuery/query.js


function useMediaQuery(mediaQuery) {
  var isSsr = typeof window === 'undefined';
  var _useState = (0,react.useState)(function () {
      return isSsr ? false : window.matchMedia(mediaQuery).matches;
    }),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    matches = _useState2[0],
    setMatches = _useState2[1];
  (0,react.useLayoutEffect)(function () {
    if (isSsr) {
      return;
    }
    var mediaQueryList = window.matchMedia(mediaQuery);
    var listener = function listener(e) {
      return setMatches(e.matches);
    };
    mediaQueryList.addListener(listener);
    return function () {
      return mediaQueryList.removeListener(listener);
    };
  }, [mediaQuery]);
  return matches;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-utils@2.17.0_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@_ftolbhh2rvo5cbykfdwocfesei/node_modules/@ant-design/pro-utils/es/useMediaQuery/index.js



var MediaQueryEnum = {
  xs: {
    maxWidth: 575,
    matchMedia: '(max-width: 575px)'
  },
  sm: {
    minWidth: 576,
    maxWidth: 767,
    matchMedia: '(min-width: 576px) and (max-width: 767px)'
  },
  md: {
    minWidth: 768,
    maxWidth: 991,
    matchMedia: '(min-width: 768px) and (max-width: 991px)'
  },
  lg: {
    minWidth: 992,
    maxWidth: 1199,
    matchMedia: '(min-width: 992px) and (max-width: 1199px)'
  },
  xl: {
    minWidth: 1200,
    maxWidth: 1599,
    matchMedia: '(min-width: 1200px) and (max-width: 1599px)'
  },
  xxl: {
    minWidth: 1600,
    matchMedia: '(min-width: 1600px)'
  }
};
/**
 * loop query screen className
 * Array.find will throw a error
 * `Rendered more hooks than during the previous render.`
 * So should use Array.forEach
 */
var getScreenClassName = function getScreenClassName() {
  var queryKey = undefined;
  // support ssr
  if (typeof window === 'undefined') {
    return queryKey;
  }
  var mediaQueryKey = Object.keys(MediaQueryEnum).find(function (key) {
    var matchMedia = MediaQueryEnum[key].matchMedia;
    if (window.matchMedia(matchMedia).matches) {
      return true;
    }
    return false;
  });
  queryKey = mediaQueryKey;
  return queryKey;
};
var useBreakpoint = function useBreakpoint() {
  var isMd = useMediaQuery(MediaQueryEnum.md.matchMedia);
  var isLg = useMediaQuery(MediaQueryEnum.lg.matchMedia);
  var isXxl = useMediaQuery(MediaQueryEnum.xxl.matchMedia);
  var isXl = useMediaQuery(MediaQueryEnum.xl.matchMedia);
  var isSm = useMediaQuery(MediaQueryEnum.sm.matchMedia);
  var isXs = useMediaQuery(MediaQueryEnum.xs.matchMedia);
  var _useState = (0,react.useState)(getScreenClassName()),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    colSpan = _useState2[0],
    setColSpan = _useState2[1];
  (0,react.useEffect)(function () {
    if (false) {}
    if (isXxl) {
      setColSpan('xxl');
      return;
    }
    if (isXl) {
      setColSpan('xl');
      return;
    }
    if (isLg) {
      setColSpan('lg');
      return;
    }
    if (isMd) {
      setColSpan('md');
      return;
    }
    if (isSm) {
      setColSpan('sm');
      return;
    }
    if (isXs) {
      setColSpan('xs');
      return;
    }
    setColSpan('md');
  }, [isMd, isLg, isXxl, isXl, isSm, isXs]);
  return colSpan;
};

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-utils@2.17.0_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@_ftolbhh2rvo5cbykfdwocfesei/node_modules/@ant-design/pro-utils/es/isBrowser/index.js
var isBrowser = __webpack_require__(16937);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-utils@2.17.0_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@_ftolbhh2rvo5cbykfdwocfesei/node_modules/@ant-design/pro-utils/es/hooks/useDocumentTitle/index.js


function useDocumentTitle(titleInfo, appDefaultTitle) {
  var titleText = typeof titleInfo.pageName === 'string' ? titleInfo.title : appDefaultTitle;
  (0,react.useEffect)(function () {
    if ((0,isBrowser/* isBrowser */.j)() && titleText) {
      document.title = titleText;
    }
  }, [titleInfo.title, titleText]);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-utils@2.17.0_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@_ftolbhh2rvo5cbykfdwocfesei/node_modules/@ant-design/pro-utils/es/compareVersions/index.js
var compareVersions = __webpack_require__(59917);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-utils@2.17.0_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@_ftolbhh2rvo5cbykfdwocfesei/node_modules/@ant-design/pro-utils/es/compareVersions/openVisibleCompatible.js
var openVisibleCompatible = __webpack_require__(27640);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-utils@2.17.0_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@_ftolbhh2rvo5cbykfdwocfesei/node_modules/@ant-design/pro-utils/es/compareVersions/coverToNewToken.js



function coverToNewToken(token) {
  if ((0,compareVersions/* compareVersions */.n)((0,openVisibleCompatible/* getVersion */.b)(), '5.6.0') < 0) return token;
  var deprecatedTokens = {
    colorGroupTitle: 'groupTitleColor',
    radiusItem: 'itemBorderRadius',
    radiusSubMenuItem: 'subMenuItemBorderRadius',
    colorItemText: 'itemColor',
    colorItemTextHover: 'itemHoverColor',
    colorItemTextHoverHorizontal: 'horizontalItemHoverColor',
    colorItemTextSelected: 'itemSelectedColor',
    colorItemTextSelectedHorizontal: 'horizontalItemSelectedColor',
    colorItemTextDisabled: 'itemDisabledColor',
    colorDangerItemText: 'dangerItemColor',
    colorDangerItemTextHover: 'dangerItemHoverColor',
    colorDangerItemTextSelected: 'dangerItemSelectedColor',
    colorDangerItemBgActive: 'dangerItemActiveBg',
    colorDangerItemBgSelected: 'dangerItemSelectedBg',
    colorItemBg: 'itemBg',
    colorItemBgHover: 'itemHoverBg',
    colorSubItemBg: 'subMenuItemBg',
    colorItemBgActive: 'itemActiveBg',
    colorItemBgSelected: 'itemSelectedBg',
    colorItemBgSelectedHorizontal: 'horizontalItemSelectedBg',
    colorActiveBarWidth: 'activeBarWidth',
    colorActiveBarHeight: 'activeBarHeight',
    colorActiveBarBorderSize: 'activeBarBorderWidth'
  };
  var newToken = (0,objectSpread2/* default */.Z)({}, token);
  Object.keys(deprecatedTokens).forEach(function (key) {
    if (newToken[key] !== undefined) {
      // @ts-ignore
      newToken[deprecatedTokens[key]] = newToken[key];
      delete newToken[key];
    }
  });
  return newToken;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@umijs+route-utils@4.0.1/node_modules/@umijs/route-utils/es/path-to-regexp.js
var path_to_regexp = __webpack_require__(6866);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@umijs+route-utils@4.0.1/node_modules/@umijs/route-utils/es/sha265.js
/* eslint-disable no-redeclare */

/* eslint-disable no-multi-assign */

/* eslint-disable no-param-reassign */

/* eslint-disable no-return-assign */

/* eslint-disable no-new-wrappers */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-var */

/* eslint-disable no-plusplus */

/* eslint-disable prefer-destructuring */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable block-scoped-var */

/* eslint-disable vars-on-top */

/* eslint-disable no-bitwise */

/* eslint-disable no-cond-assign */

/*
 * A JavaScript implementation of the SHA256 hash function.
 *
 * FILE:	sha256.js
 * VERSION:	0.8
 * AUTHOR:	Christoph Bichlmeier <informatik@zombiearena.de>
 *
 * NOTE: This version is not tested thoroughly!
 *
 * Copyright (c) 2003, Christoph Bichlmeier
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of contributors
 *    may be used to endorse or promote products derived from this software
 *    without specific prior written permission.
 *
 * ======================================================================
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHORS ''AS IS'' AND ANY EXPRESS
 * OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHORS OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
 * BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/* SHA256 logical functions */
function rotateRight(n, x) {
  return x >>> n | x << 32 - n;
}

function choice(x, y, z) {
  return x & y ^ ~x & z;
}

function majority(x, y, z) {
  return x & y ^ x & z ^ y & z;
}

function sha256_Sigma0(x) {
  return rotateRight(2, x) ^ rotateRight(13, x) ^ rotateRight(22, x);
}

function sha256_Sigma1(x) {
  return rotateRight(6, x) ^ rotateRight(11, x) ^ rotateRight(25, x);
}

function sha256_sigma0(x) {
  return rotateRight(7, x) ^ rotateRight(18, x) ^ x >>> 3;
}

function sha256_sigma1(x) {
  return rotateRight(17, x) ^ rotateRight(19, x) ^ x >>> 10;
}

function sha256_expand(W, j) {
  return W[j & 0x0f] += sha256_sigma1(W[j + 14 & 0x0f]) + W[j + 9 & 0x0f] + sha256_sigma0(W[j + 1 & 0x0f]);
}
/* Hash constant words K: */


var K256 = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
/* global arrays */

var ihash;
var count;
var buffer;
var sha256_hex_digits = '0123456789abcdef';
/* Add 32-bit integers with 16-bit operations (bug in some JS-interpreters:
overflow) */

function safe_add(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/* Initialise the SHA256 computation */


function sha256_init() {
  ihash = new Array(8);
  count = new Array(2);
  buffer = new Array(64);
  count[0] = count[1] = 0;
  ihash[0] = 0x6a09e667;
  ihash[1] = 0xbb67ae85;
  ihash[2] = 0x3c6ef372;
  ihash[3] = 0xa54ff53a;
  ihash[4] = 0x510e527f;
  ihash[5] = 0x9b05688c;
  ihash[6] = 0x1f83d9ab;
  ihash[7] = 0x5be0cd19;
}
/* Transform a 512-bit message block */


function sha256_transform() {
  var a;
  var b;
  var c;
  var d;
  var e;
  var f;
  var g;
  var h;
  var T1;
  var T2;
  var W = new Array(16);
  /* Initialize registers with the previous intermediate value */

  a = ihash[0];
  b = ihash[1];
  c = ihash[2];
  d = ihash[3];
  e = ihash[4];
  f = ihash[5];
  g = ihash[6];
  h = ihash[7];
  /* make 32-bit words */

  for (var i = 0; i < 16; i++) {
    W[i] = buffer[(i << 2) + 3] | buffer[(i << 2) + 2] << 8 | buffer[(i << 2) + 1] << 16 | buffer[i << 2] << 24;
  }

  for (var j = 0; j < 64; j++) {
    T1 = h + sha256_Sigma1(e) + choice(e, f, g) + K256[j];
    if (j < 16) T1 += W[j];else T1 += sha256_expand(W, j);
    T2 = sha256_Sigma0(a) + majority(a, b, c);
    h = g;
    g = f;
    f = e;
    e = safe_add(d, T1);
    d = c;
    c = b;
    b = a;
    a = safe_add(T1, T2);
  }
  /* Compute the current intermediate hash value */


  ihash[0] += a;
  ihash[1] += b;
  ihash[2] += c;
  ihash[3] += d;
  ihash[4] += e;
  ihash[5] += f;
  ihash[6] += g;
  ihash[7] += h;
}
/* Read the next chunk of data and update the SHA256 computation */


function sha256_update(data, inputLen) {
  var i;
  var index;
  var curpos = 0;
  /* Compute number of bytes mod 64 */

  index = count[0] >> 3 & 0x3f;
  var remainder = inputLen & 0x3f;
  /* Update number of bits */

  if ((count[0] += inputLen << 3) < inputLen << 3) count[1]++;
  count[1] += inputLen >> 29;
  /* Transform as many times as possible */

  for (i = 0; i + 63 < inputLen; i += 64) {
    for (var j = index; j < 64; j++) {
      buffer[j] = data.charCodeAt(curpos++);
    }

    sha256_transform();
    index = 0;
  }
  /* Buffer remaining input */


  for (var _j = 0; _j < remainder; _j++) {
    buffer[_j] = data.charCodeAt(curpos++);
  }
}
/* Finish the computation by operations such as padding */


function sha256_final() {
  var index = count[0] >> 3 & 0x3f;
  buffer[index++] = 0x80;

  if (index <= 56) {
    for (var i = index; i < 56; i++) {
      buffer[i] = 0;
    }
  } else {
    for (var _i = index; _i < 64; _i++) {
      buffer[_i] = 0;
    }

    sha256_transform();

    for (var _i2 = 0; _i2 < 56; _i2++) {
      buffer[_i2] = 0;
    }
  }

  buffer[56] = count[1] >>> 24 & 0xff;
  buffer[57] = count[1] >>> 16 & 0xff;
  buffer[58] = count[1] >>> 8 & 0xff;
  buffer[59] = count[1] & 0xff;
  buffer[60] = count[0] >>> 24 & 0xff;
  buffer[61] = count[0] >>> 16 & 0xff;
  buffer[62] = count[0] >>> 8 & 0xff;
  buffer[63] = count[0] & 0xff;
  sha256_transform();
}
/* Split the internal hash values into an array of bytes */


function sha256_encode_bytes() {
  var j = 0;
  var output = new Array(32);

  for (var i = 0; i < 8; i++) {
    output[j++] = ihash[i] >>> 24 & 0xff;
    output[j++] = ihash[i] >>> 16 & 0xff;
    output[j++] = ihash[i] >>> 8 & 0xff;
    output[j++] = ihash[i] & 0xff;
  }

  return output;
}
/* Get the internal hash as a hex string */


function sha256_encode_hex() {
  var output = new String();

  for (var i = 0; i < 8; i++) {
    for (var j = 28; j >= 0; j -= 4) {
      output += sha256_hex_digits.charAt(ihash[i] >>> j & 0x0f);
    }
  }

  return output;
}
/* Main function: returns a hex string representing the SHA256 value of the
given data */


function digest(data) {
  sha256_init();
  sha256_update(data, data.length);
  sha256_final();
  return sha256_encode_hex();
}

/* harmony default export */ var sha265 = (digest);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@umijs+route-utils@4.0.1/node_modules/@umijs/route-utils/es/transformRoute/transformRoute.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _excluded = ["pro_layout_parentKeys", "children", "icon", "flatMenu", "indexRoute", "routes"];

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//@ts-ignore


var childrenPropsName = 'routes';
function stripQueryStringAndHashFromPath(url) {
  return url.split('?')[0].split('#')[0];
}
var isUrl = function isUrl(path) {
  if (!path.startsWith('http')) {
    return false;
  }

  try {
    var url = new URL(path);
    return !!url;
  } catch (error) {
    return false;
  }
};
var getKeyByPath = function getKeyByPath(item) {
  var path = item.path;

  if (!path || path === '/') {
    // 如果还是没有，用对象的hash 生成一个
    try {
      return "/".concat(sha265(JSON.stringify(item)));
    } catch (error) {// dom some thing
    }
  }

  return path ? stripQueryStringAndHashFromPath(path) : path;
};
/**
 * 获取locale，增加了一个功能，如果 locale = false，将不使用国际化
 * @param item
 * @param parentName
 */

var getItemLocaleName = function getItemLocaleName(item, parentName) {
  var name = item.name,
      locale = item.locale; // 如果配置了 locale 并且 locale 为 false或 ""

  if ('locale' in item && locale === false || !name) {
    return false;
  }

  return item.locale || "".concat(parentName, ".").concat(name);
};
/**
 * 如果不是 / 开头的和父节点做一下合并
 * 如果是 / 开头的不作任何处理
 * 如果是 url 也直接返回
 * @param path
 * @param parentPath
 */


var mergePath = function mergePath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var parentPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';

  if (path.endsWith('/*')) {
    return path.replace('/*', '/');
  }

  if ((path || parentPath).startsWith('/')) {
    return path;
  }

  if (isUrl(path)) {
    return path;
  }

  return "/".concat(parentPath, "/").concat(path).replace(/\/\//g, '/').replace(/\/\//g, '/');
}; // bigfish 的兼容准话


var bigfishCompatibleConversions = function bigfishCompatibleConversions(route, props) {
  var _route$menu = route.menu,
      menu = _route$menu === void 0 ? {} : _route$menu,
      indexRoute = route.indexRoute,
      _route$path = route.path,
      path = _route$path === void 0 ? '' : _route$path;
  var routerChildren = route.children || [];
  var _menu$name = menu.name,
      name = _menu$name === void 0 ? route.name : _menu$name,
      _menu$icon = menu.icon,
      icon = _menu$icon === void 0 ? route.icon : _menu$icon,
      _menu$hideChildren = menu.hideChildren,
      hideChildren = _menu$hideChildren === void 0 ? route.hideChildren : _menu$hideChildren,
      _menu$flatMenu = menu.flatMenu,
      flatMenu = _menu$flatMenu === void 0 ? route.flatMenu : _menu$flatMenu; // 兼容平铺式写法
  // 拼接 childrenRoutes, 处理存在 indexRoute 时的逻辑

  var childrenList = indexRoute && // 如果只有 redirect,不用处理的
  Object.keys(indexRoute).join(',') !== 'redirect' ? [_objectSpread({
    path: path,
    menu: menu
  }, indexRoute)].concat(routerChildren || []) : routerChildren; // 拼接返回的 menu 数据

  var result = _objectSpread({}, route);

  if (name) {
    result.name = name;
  }

  if (icon) {
    result.icon = icon;
  }

  if (childrenList && childrenList.length) {
    /** 在菜单中隐藏子项 */
    if (hideChildren) {
      delete result.children;
      return result;
    } // 需要重新进行一次


    var finalChildren = formatter(_objectSpread(_objectSpread({}, props), {}, {
      data: childrenList
    }), route);
    /** 在菜单中只隐藏此项，子项往上提，仍旧展示 */

    if (flatMenu) {
      return finalChildren;
    }

    delete result[childrenPropsName];
  }

  return result;
};

var notNullArray = function notNullArray(value) {
  return Array.isArray(value) && value.length > 0;
};
/**
 *
 * @param props
 * @param parent
 */


function formatter(props) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    path: '/'
  };
  var data = props.data,
      formatMessage = props.formatMessage,
      parentName = props.parentName,
      menuLocale = props.locale;

  if (!data || !Array.isArray(data)) {
    return [];
  }

  return data.filter(function (item) {
    if (!item) return false;
    if (notNullArray(item.children)) return true;
    if (item.path) return true;
    if (item.originPath) return true;
    if (item.layout) return true; // 重定向

    if (item.redirect) return false;
    if (item.unaccessible) return false;
    return false;
  }).filter(function (item) {
    var _item$menu, _item$menu2;

    if ((item === null || item === void 0 ? void 0 : (_item$menu = item.menu) === null || _item$menu === void 0 ? void 0 : _item$menu.name) || (item === null || item === void 0 ? void 0 : item.flatMenu) || (item === null || item === void 0 ? void 0 : (_item$menu2 = item.menu) === null || _item$menu2 === void 0 ? void 0 : _item$menu2.flatMenu)) {
      return true;
    } // 显示指定在 menu 中隐藏该项
    // layout 插件的功能，其实不应该存在的


    if (item.menu === false) {
      return false;
    }

    return true;
  }).map(function (finallyItem) {
    var item = _objectSpread(_objectSpread({}, finallyItem), {}, {
      path: finallyItem.path || finallyItem.originPath
    });

    if (!item.children && item[childrenPropsName]) {
      item.children = item[childrenPropsName];
      delete item[childrenPropsName];
    } // 是否没有权限查看
    // 这样就不会显示，是一个兼容性的方式


    if (item.unaccessible) {
      // eslint-disable-next-line no-param-reassign
      delete item.name;
    }

    if (item.path === '*') {
      item.path = '.';
    }

    if (item.path === '/*') {
      item.path = '.';
    }

    if (!item.path && item.originPath) {
      item.path = item.originPath;
    }

    return item;
  }).map(function () {
    var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      path: '/'
    };
    var routerChildren = item.children || item[childrenPropsName] || [];
    var path = mergePath(item.path, parent ? parent.path : '/');
    var name = item.name;
    var locale = getItemLocaleName(item, parentName || 'menu'); // if enableMenuLocale use item.name,
    // close menu international

    var localeName = locale !== false && menuLocale !== false && formatMessage && locale ? formatMessage({
      id: locale,
      defaultMessage: name
    }) : name;

    var _parent$pro_layout_pa = parent.pro_layout_parentKeys,
        pro_layout_parentKeys = _parent$pro_layout_pa === void 0 ? [] : _parent$pro_layout_pa,
        children = parent.children,
        icon = parent.icon,
        flatMenu = parent.flatMenu,
        indexRoute = parent.indexRoute,
        routes = parent.routes,
        restParent = _objectWithoutProperties(parent, _excluded);

    var item_pro_layout_parentKeys = new Set([].concat(_toConsumableArray(pro_layout_parentKeys), _toConsumableArray(item.parentKeys || [])));

    if (parent.key) {
      item_pro_layout_parentKeys.add(parent.key);
    }

    var finallyItem = _objectSpread(_objectSpread(_objectSpread({}, restParent), {}, {
      menu: undefined
    }, item), {}, {
      path: path,
      locale: locale,
      key: item.key || getKeyByPath(_objectSpread(_objectSpread({}, item), {}, {
        path: path
      })),
      pro_layout_parentKeys: Array.from(item_pro_layout_parentKeys).filter(function (key) {
        return key && key !== '/';
      })
    });

    if (localeName) {
      finallyItem.name = localeName;
    } else {
      delete finallyItem.name;
    }

    if (finallyItem.menu === undefined) {
      delete finallyItem.menu;
    }

    if (notNullArray(routerChildren)) {
      var formatterChildren = formatter(_objectSpread(_objectSpread({}, props), {}, {
        data: routerChildren,
        parentName: locale || ''
      }), finallyItem);

      if (notNullArray(formatterChildren)) {
        finallyItem.children = formatterChildren;
      }
    }

    return bigfishCompatibleConversions(finallyItem, props);
  }).flat(1);
}
/**
 * 删除 hideInMenu 和 item.name 不存在的
 */


var defaultFilterMenuData = function defaultFilterMenuData() {
  var menuData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return menuData.filter(function (item) {
    return item && (item.name || notNullArray(item.children)) && !item.hideInMenu && !item.redirect;
  }).map(function (item) {
    var newItem = _objectSpread({}, item);

    var routerChildren = newItem.children || item[childrenPropsName] || [];
    delete newItem[childrenPropsName];

    if (notNullArray(routerChildren) && !newItem.hideChildrenInMenu && routerChildren.some(function (child) {
      return child && !!child.name;
    })) {
      var newChildren = defaultFilterMenuData(routerChildren);
      if (newChildren.length) return _objectSpread(_objectSpread({}, newItem), {}, {
        children: newChildren
      });
    }

    return _objectSpread({}, item);
  }).filter(function (item) {
    return item;
  });
};
/**
 * support pathToRegexp get string
 */


var RouteListMap = /*#__PURE__*/function (_Map) {
  _inherits(RouteListMap, _Map);

  var _super = _createSuper(RouteListMap);

  function RouteListMap() {
    _classCallCheck(this, RouteListMap);

    return _super.apply(this, arguments);
  }

  _createClass(RouteListMap, [{
    key: "get",
    value: function get(pathname) {
      var routeValue;

      try {
        // eslint-disable-next-line no-restricted-syntax
        var _iterator = _createForOfIteratorHelper(this.entries()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                key = _step$value[0],
                value = _step$value[1];

            var path = stripQueryStringAndHashFromPath(key);

            if (!isUrl(key) && (0,path_to_regexp/* pathToRegexp */.Bo)(path, []).test(pathname)) {
              routeValue = value;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } catch (error) {
        routeValue = undefined;
      }

      return routeValue;
    }
  }]);

  return RouteListMap;
}( /*#__PURE__*/_wrapNativeSuper(Map));
/**
 * 获取面包屑映射
 * @param MenuDataItem[] menuData 菜单配置
 */


var getBreadcrumbNameMap = function getBreadcrumbNameMap(menuData) {
  // Map is used to ensure the order of keys
  var routerMap = new RouteListMap();

  var flattenMenuData = function flattenMenuData(data, parent) {
    data.forEach(function (menuItem) {
      var routerChildren = menuItem.children || menuItem[childrenPropsName] || [];

      if (notNullArray(routerChildren)) {
        flattenMenuData(routerChildren, menuItem);
      } // Reduce memory usage


      var path = mergePath(menuItem.path, parent ? parent.path : '/');
      routerMap.set(stripQueryStringAndHashFromPath(path), menuItem);
    });
  };

  flattenMenuData(menuData);
  return routerMap;
};

var clearChildren = function clearChildren() {
  var menuData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return menuData.map(function (item) {
    var routerChildren = item.children || item[childrenPropsName];

    if (notNullArray(routerChildren)) {
      var newChildren = clearChildren(routerChildren);
      if (newChildren.length) return _objectSpread({}, item);
    }

    var finallyItem = _objectSpread({}, item);

    delete finallyItem[childrenPropsName];
    delete finallyItem.children;
    return finallyItem;
  }).filter(function (item) {
    return item;
  });
};
/**
 * @param routeList 路由配置
 * @param locale 是否使用国际化
 * @param formatMessage 国际化的程序
 * @param ignoreFilter 是否筛选掉不展示的 menuItem 项，plugin-layout需要所有项目来计算布局样式
 * @returns { breadcrumb, menuData}
 */


var transformRoute = function transformRoute(routeList, locale, formatMessage, ignoreFilter) {
  var originalMenuData = formatter({
    data: routeList,
    formatMessage: formatMessage,
    locale: locale
  });
  var menuData = ignoreFilter ? clearChildren(originalMenuData) : defaultFilterMenuData(originalMenuData); // Map type used for internal logic

  var breadcrumb = getBreadcrumbNameMap(originalMenuData);
  return {
    breadcrumb: breadcrumb,
    menuData: menuData
  };
};

/* harmony default export */ var transformRoute_transformRoute = (transformRoute);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@umijs+route-utils@4.0.1/node_modules/@umijs/route-utils/es/getFlatMenus/getFlatMenus.js
function getFlatMenus_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function getFlatMenus_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? getFlatMenus_ownKeys(Object(source), !0).forEach(function (key) { getFlatMenus_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : getFlatMenus_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function getFlatMenus_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * 获取打平的 menuData
 * 以 path 为 key
 * @param menuData
 */

var getFlatMenus = function getFlatMenus() {
  var menuData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var menus = {};
  menuData.forEach(function (mapItem) {
    var item = getFlatMenus_objectSpread({}, mapItem);

    if (!item || !item.key) {
      return;
    }

    if (!item.children && item[childrenPropsName]) {
      item.children = item[childrenPropsName];
      delete item[childrenPropsName];
    }

    var routerChildren = item.children || [];
    menus[stripQueryStringAndHashFromPath(item.path || item.key || '/')] = getFlatMenus_objectSpread({}, item);
    menus[item.key || item.path || '/'] = getFlatMenus_objectSpread({}, item);

    if (routerChildren) {
      menus = getFlatMenus_objectSpread(getFlatMenus_objectSpread({}, menus), getFlatMenus(routerChildren));
    }
  });
  return menus;
};
/* harmony default export */ var getFlatMenus_getFlatMenus = (getFlatMenus);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@umijs+route-utils@4.0.1/node_modules/@umijs/route-utils/es/getMatchMenu/getMatchMenu.js
//@ts-ignore



var getMenuMatches = function getMenuMatches() {
  var flatMenuKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var path = arguments.length > 1 ? arguments[1] : undefined;
  var exact = arguments.length > 2 ? arguments[2] : undefined;
  return flatMenuKeys.filter(function (item) {
    if (item === '/' && path === '/') {
      return true;
    }

    if (item !== '/' && item !== '/*' && item && !isUrl(item)) {
      var pathKey = stripQueryStringAndHashFromPath(item);

      try {
        // exact
        if (exact) {
          if ((0,path_to_regexp/* pathToRegexp */.Bo)("".concat(pathKey)).test(path)) {
            return true;
          }
        } // /a


        if ((0,path_to_regexp/* pathToRegexp */.Bo)("".concat(pathKey), []).test(path)) {
          return true;
        } // /a/b/b


        if ((0,path_to_regexp/* pathToRegexp */.Bo)("".concat(pathKey, "/(.*)")).test(path)) {
          return true;
        }
      } catch (error) {// console.log(error, path);
      }
    }

    return false;
  }).sort(function (a, b) {
    // 如果完全匹配放到最后面
    if (a === path) {
      return 10;
    }

    if (b === path) {
      return -10;
    }

    return a.substr(1).split('/').length - b.substr(1).split('/').length;
  });
};
/**
 * 获取当前的选中菜单列表
 * @param pathname
 * @param menuData
 * @returns MenuDataItem[]
 */

var getMatchMenu = function getMatchMenu(pathname, menuData,
/**
 * 要不要展示全部的 key
 */
fullKeys, exact) {
  var flatMenus = getFlatMenus_getFlatMenus(menuData);
  var flatMenuKeys = Object.keys(flatMenus);
  var menuPathKeys = getMenuMatches(flatMenuKeys, pathname || '/', exact);

  if (!menuPathKeys || menuPathKeys.length < 1) {
    return [];
  }

  if (!fullKeys) {
    menuPathKeys = [menuPathKeys[menuPathKeys.length - 1]];
  }

  return menuPathKeys.map(function (menuPathKey) {
    var menuItem = flatMenus[menuPathKey] || {
      pro_layout_parentKeys: '',
      key: ''
    }; // 去重

    var map = new Map();
    var parentItems = (menuItem.pro_layout_parentKeys || []).map(function (key) {
      if (map.has(key)) {
        return null;
      }

      map.set(key, true);
      return flatMenus[key];
    }).filter(function (item) {
      return item;
    });

    if (menuItem.key) {
      parentItems.push(menuItem);
    }

    return parentItems;
  }).flat(1);
};
/* harmony default export */ var getMatchMenu_getMatchMenu = (getMatchMenu);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@umijs+route-utils@4.0.1/node_modules/@umijs/route-utils/es/index.js



// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 8 modules
var config_provider = __webpack_require__(48027);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/layout/index.js + 2 modules
var layout = __webpack_require__(98859);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(18051);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/warning.js
var warning = __webpack_require__(4449);
// EXTERNAL MODULE: ./node_modules/.pnpm/swr@2.3.3_react@18.3.1/node_modules/swr/dist/index/index.mjs
var index = __webpack_require__(64329);
// EXTERNAL MODULE: ./node_modules/.pnpm/swr@2.3.3_react@18.3.1/node_modules/swr/dist/_internal/index.mjs + 1 modules
var _internal = __webpack_require__(40363);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-utils@2.17.0_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@_ftolbhh2rvo5cbykfdwocfesei/node_modules/@ant-design/pro-utils/es/components/ErrorBoundary/index.js
var ErrorBoundary = __webpack_require__(51492);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/WrapContent.js







var WrapContent = function WrapContent(props) {
  var _useContext = (0,react.useContext)(es/* ProProvider */.L_),
    hashId = _useContext.hashId;
  var style = props.style,
    prefixCls = props.prefixCls,
    children = props.children,
    _props$hasPageContain = props.hasPageContainer,
    hasPageContainer = _props$hasPageContain === void 0 ? 0 : _props$hasPageContain;
  var contentClassName = classnames_default()("".concat(prefixCls, "-content"), hashId, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-has-header"), props.hasHeader), "".concat(prefixCls, "-content-has-page-container"), hasPageContainer > 0));
  var ErrorComponent = props.ErrorBoundary || ErrorBoundary/* ErrorBoundary */.S;
  return props.ErrorBoundary === false ? /*#__PURE__*/(0,jsx_runtime.jsx)(layout/* default */.Z.Content, {
    className: contentClassName,
    style: style,
    children: children
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ErrorComponent, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(layout/* default */.Z.Content, {
      className: contentClassName,
      style: style,
      children: children
    })
  });
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/assert/Logo.js


var Logo = function Logo() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 200 200",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("defs", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        x1: "62.1023273%",
        y1: "0%",
        x2: "108.19718%",
        y2: "37.8635764%",
        id: "linearGradient-1",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#4285EB",
          offset: "0%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#2EC7FF",
          offset: "100%"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        x1: "69.644116%",
        y1: "0%",
        x2: "54.0428975%",
        y2: "108.456714%",
        id: "linearGradient-2",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#29CDFF",
          offset: "0%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#148EFF",
          offset: "37.8600687%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#0A60FF",
          offset: "100%"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        x1: "69.6908165%",
        y1: "-12.9743587%",
        x2: "16.7228981%",
        y2: "117.391248%",
        id: "linearGradient-3",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#FA816E",
          offset: "0%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#F74A5C",
          offset: "41.472606%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#F51D2C",
          offset: "100%"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("linearGradient", {
        x1: "68.1279872%",
        y1: "-35.6905737%",
        x2: "30.4400914%",
        y2: "114.942679%",
        id: "linearGradient-4",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#FA8E7D",
          offset: "0%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#F74A5C",
          offset: "51.2635191%"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("stop", {
          stopColor: "#F51D2C",
          offset: "100%"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
      stroke: "none",
      strokeWidth: 1,
      fill: "none",
      fillRule: "evenodd",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
        transform: "translate(-20.000000, -20.000000)",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("g", {
          transform: "translate(20.000000, 20.000000)",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
              fillRule: "nonzero",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
                  d: "M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C99.2571609,26.9692191 101.032305,26.9692191 102.20193,28.1378823 L129.985225,55.8983314 C134.193707,60.1033528 141.017005,60.1033528 145.225487,55.8983314 C149.433969,51.69331 149.433969,44.8756232 145.225487,40.6706018 L108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z",
                  fill: "url(#linearGradient-1)"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
                  d: "M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C100.999864,25.6271836 105.751642,20.541824 112.729652,19.3524487 C117.915585,18.4685261 123.585219,20.4140239 129.738554,25.1889424 C125.624663,21.0784292 118.571995,14.0340304 108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z",
                  fill: "url(#linearGradient-2)"
                })]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
                d: "M153.685633,135.854579 C157.894115,140.0596 164.717412,140.0596 168.925894,135.854579 L195.959977,108.842726 C200.659183,104.147384 200.659183,96.5636133 195.960527,91.8688194 L168.690777,64.7181159 C164.472332,60.5180858 157.646868,60.5241425 153.435895,64.7316526 C149.227413,68.936674 149.227413,75.7543607 153.435895,79.9593821 L171.854035,98.3623765 C173.02366,99.5310396 173.02366,101.304724 171.854035,102.473387 L153.685633,120.626849 C149.47715,124.83187 149.47715,131.649557 153.685633,135.854579 Z",
                fill: "url(#linearGradient-3)"
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("ellipse", {
              fill: "url(#linearGradient-4)",
              cx: "100.519339",
              cy: "100.436681",
              rx: "23.6001926",
              ry: "23.580786"
            })]
          })
        })
      })
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(55824);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.4.2/node_modules/@ant-design/icons-svg/es/asn/CopyrightOutlined.js
// This icon file is generated automatically.
var CopyrightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z" } }] }, "name": "copyright", "theme": "outlined" };
/* harmony default export */ var asn_CopyrightOutlined = (CopyrightOutlined);

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/AntdIcon.js + 2 modules
var AntdIcon = __webpack_require__(35244);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CopyrightOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var CopyrightOutlined_CopyrightOutlined = function CopyrightOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_CopyrightOutlined
  }));
};

/**![copyright](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUxMiA2NEMyNjQuNiA2NCA2NCAyNjQuNiA2NCA1MTJzMjAwLjYgNDQ4IDQ0OCA0NDggNDQ4LTIwMC42IDQ0OC00NDhTNzU5LjQgNjQgNTEyIDY0em0wIDgyMGMtMjA1LjQgMC0zNzItMTY2LjYtMzcyLTM3MnMxNjYuNi0zNzIgMzcyLTM3MiAzNzIgMTY2LjYgMzcyIDM3Mi0xNjYuNiAzNzItMzcyIDM3MnptNS42LTUzMi43YzUzIDAgODkgMzMuOCA5MyA4My40LjMgNC4yIDMuOCA3LjQgOCA3LjRoNTYuN2MyLjYgMCA0LjctMi4xIDQuNy00LjcgMC04Ni43LTY4LjQtMTQ3LjQtMTYyLjctMTQ3LjRDNDA3LjQgMjkwIDM0NCAzNjQuMiAzNDQgNDg2Ljh2NTIuM0MzNDQgNjYwLjggNDA3LjQgNzM0IDUxNy4zIDczNGM5NCAwIDE2Mi43LTU4LjggMTYyLjctMTQxLjQgMC0yLjYtMi4xLTQuNy00LjctNC43aC01Ni44Yy00LjIgMC03LjYgMy4yLTggNy4zLTQuMiA0Ni4xLTQwLjEgNzcuOC05MyA3Ny44LTY1LjMgMC0xMDIuMS00Ny45LTEwMi4xLTEzMy42di01Mi42Yy4xLTg3IDM3LTEzNS41IDEwMi4yLTEzNS41eiIgLz48L3N2Zz4=) */
var RefIcon = /*#__PURE__*/react.forwardRef(CopyrightOutlined_CopyrightOutlined);
if (false) {}
/* harmony default export */ var icons_CopyrightOutlined = (RefIcon);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-provider@2.15.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_rea_6s3vfui2lajfw6tsxvu6rpn6re/node_modules/@ant-design/pro-provider/es/useStyle/index.js + 1 modules
var useStyle = __webpack_require__(79181);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/GlobalFooter/style.js



var genFooterToolBarStyle = function genFooterToolBarStyle(token) {
  return (0,defineProperty/* default */.Z)({}, token.componentCls, {
    marginBlock: 0,
    marginBlockStart: 48,
    marginBlockEnd: 24,
    marginInline: 0,
    paddingBlock: 0,
    paddingInline: 16,
    textAlign: 'center',
    '&-list': {
      marginBlockEnd: 8,
      color: token.colorTextSecondary,
      '&-link': {
        color: token.colorTextSecondary,
        textDecoration: token.linkDecoration
      },
      '*:not(:last-child)': {
        marginInlineEnd: 8
      },
      '&:hover': {
        color: token.colorPrimary
      }
    },
    '&-copyright': {
      fontSize: '14px',
      color: token.colorText
    }
  });
};
function style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('ProLayoutFooter', function (token) {
    var proCardToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genFooterToolBarStyle(proCardToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/GlobalFooter/index.js






var GlobalFooter = function GlobalFooter(_ref) {
  var className = _ref.className,
    prefixCls = _ref.prefixCls,
    links = _ref.links,
    copyright = _ref.copyright,
    style = _ref.style;
  var context = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext);
  var baseClassName = context.getPrefixCls(prefixCls || 'pro-global-footer');
  var _useStyle = style_useStyle(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if ((links == null || links === false || Array.isArray(links) && links.length === 0) && (copyright == null || copyright === false)) {
    return null;
  }
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: classnames_default()(baseClassName, hashId, className),
    style: style,
    children: [links && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "".concat(baseClassName, "-list ").concat(hashId).trim(),
      children: links.map(function (link) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: "".concat(baseClassName, "-list-link ").concat(hashId).trim(),
          title: link.key,
          target: link.blankTarget ? '_blank' : '_self',
          href: link.href,
          rel: "noreferrer",
          children: link.title
        }, link.key);
      })
    }), copyright && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "".concat(baseClassName, "-copyright ").concat(hashId).trim(),
      children: copyright
    })]
  }));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/Footer.js







var Footer = layout/* default */.Z.Footer;
var DefaultFooter = function DefaultFooter(_ref) {
  var links = _ref.links,
    copyright = _ref.copyright,
    style = _ref.style,
    className = _ref.className,
    prefixCls = _ref.prefixCls;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Footer, {
    className: className,
    style: (0,objectSpread2/* default */.Z)({
      padding: 0
    }, style),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(GlobalFooter, {
      links: links,
      prefixCls: prefixCls,
      copyright: copyright === false ? null : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(icons_CopyrightOutlined, {}), " ", copyright]
      })
    })
  });
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/utils/utils.js

var getOpenKeysFromMenuData = function getOpenKeysFromMenuData(menuData) {
  return (menuData || []).reduce(function (pre, item) {
    if (item.key) {
      pre.push(item.key);
    }
    if (item.children || item.routes) {
      var newArray = pre.concat(getOpenKeysFromMenuData(item.children || item.routes) || []);
      return newArray;
    }
    return pre;
  }, []);
};
var themeConfig = {
  techBlue: '#1677FF',
  daybreak: '#1890ff',
  dust: '#F5222D',
  volcano: '#FA541C',
  sunset: '#FAAD14',
  cyan: '#13C2C2',
  green: '#52C41A',
  geekblue: '#2F54EB',
  purple: '#722ED1'
};
/**
 * Daybreak-> #1890ff
 *
 * @param val
 */
function genStringToTheme(val) {
  return val && themeConfig[val] ? themeConfig[val] : val || '';
}
function clearMenuItem(menusData) {
  return menusData.map(function (item) {
    var children = item.children || [];
    var finalItem = (0,objectSpread2/* default */.Z)({}, item);
    if (!finalItem.children && finalItem.routes) {
      finalItem.children = finalItem.routes;
    }
    if (!finalItem.name || finalItem.hideInMenu) {
      return null;
    }
    if (finalItem && finalItem !== null && finalItem !== void 0 && finalItem.children) {
      if (!finalItem.hideChildrenInMenu && children.some(function (child) {
        return child && child.name && !child.hideInMenu;
      })) {
        return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
          children: clearMenuItem(children)
        });
      }
      // children 为空就直接删掉
      delete finalItem.children;
    }
    delete finalItem.routes;
    return finalItem;
  }).filter(function (item) {
    return item;
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.4.2/node_modules/@ant-design/icons-svg/es/asn/MenuOutlined.js
// This icon file is generated automatically.
var MenuOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" } }] }, "name": "menu", "theme": "outlined" };
/* harmony default export */ var asn_MenuOutlined = (MenuOutlined);

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/MenuOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var MenuOutlined_MenuOutlined = function MenuOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,esm_extends/* default */.Z)({}, props, {
    ref: ref,
    icon: asn_MenuOutlined
  }));
};

/**![menu](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkwNCAxNjBIMTIwYy00LjQgMC04IDMuNi04IDh2NjRjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTY0YzAtNC40LTMuNi04LTgtOHptMCA2MjRIMTIwYy00LjQgMC04IDMuNi04IDh2NjRjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTY0YzAtNC40LTMuNi04LTgtOHptMC0zMTJIMTIwYy00LjQgMC04IDMuNi04IDh2NjRjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTY0YzAtNC40LTMuNi04LTgtOHoiIC8+PC9zdmc+) */
var MenuOutlined_RefIcon = /*#__PURE__*/react.forwardRef(MenuOutlined_MenuOutlined);
if (false) {}
/* harmony default export */ var icons_MenuOutlined = (MenuOutlined_RefIcon);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/popover/index.js
var popover = __webpack_require__(8095);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/AppsLogo.js

/**
 * 默认的应用列表的图标
 *
 */
var AppsLogo = function AppsLogo() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 12 12",
    fill: "currentColor",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M0 0h3v3H0V0zm4.5 0h3v3h-3V0zM9 0h3v3H9V0zM0 4.5h3v3H0v-3zm4.503 0h3v3h-3v-3zM9 4.5h3v3H9v-3zM0 9h3v3H0V9zm4.503 0h3v3h-3V9zM9 9h3v3H9V9z"
    })
  });
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/DefaultContent.js




var DefaultContent = function DefaultContent(props) {
  var appList = props.appList,
    baseClassName = props.baseClassName,
    hashId = props.hashId,
    itemClick = props.itemClick;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "".concat(baseClassName, "-content ").concat(hashId).trim(),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      className: "".concat(baseClassName, "-content-list ").concat(hashId).trim(),
      children: appList === null || appList === void 0 ? void 0 : appList.map(function (app, index) {
        var _app$children;
        if (app !== null && app !== void 0 && (_app$children = app.children) !== null && _app$children !== void 0 && _app$children.length) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "".concat(baseClassName, "-content-list-item-group ").concat(hashId).trim(),
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "".concat(baseClassName, "-content-list-item-group-title ").concat(hashId).trim(),
              children: app.title
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(DefaultContent, {
              hashId: hashId,
              itemClick: itemClick,
              appList: app === null || app === void 0 ? void 0 : app.children,
              baseClassName: baseClassName
            })]
          }, index);
        }
        return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "".concat(baseClassName, "-content-list-item ").concat(hashId).trim(),
          onClick: function onClick(e) {
            e.stopPropagation();
            itemClick === null || itemClick === void 0 || itemClick(app);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
            href: itemClick ? undefined : app.url,
            target: app.target,
            rel: "noreferrer",
            children: [defaultRenderLogo(app.icon), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                children: app.title
              }), app.desc ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: app.desc
              }) : null]
            })]
          })
        }, index);
      })
    })
  });
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-utils@2.17.0_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@_ftolbhh2rvo5cbykfdwocfesei/node_modules/@ant-design/pro-utils/es/isUrl/index.js
/**
 * 判断是不是一个 url
 * @param  {string|undefined} path
 * @returns boolean
 */
var isUrl_isUrl = function isUrl(path) {
  if (!path) return false;
  if (!path.startsWith('http')) {
    return false;
  }
  try {
    var url = new URL(path);
    return !!url;
  } catch (error) {
    return false;
  }
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/SimpleContent.js




/**
 * simple 模式渲染logo的方式
 *
 * @param logo
 * @param title
 * @returns
 */
var renderLogo = function renderLogo(logo, title) {
  if (logo && typeof logo === 'string' && isUrl_isUrl(logo)) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      src: logo,
      alt: "logo"
    });
  }
  if (typeof logo === 'function') {
    return logo();
  }
  if (logo && typeof logo === 'string') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      id: "avatarLogo",
      children: logo
    });
  }
  if (!logo && title && typeof title === 'string') {
    var symbol = title.substring(0, 1);
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      id: "avatarLogo",
      children: symbol
    });
  }
  return logo;
};
var SimpleContent = function SimpleContent(props) {
  var appList = props.appList,
    baseClassName = props.baseClassName,
    hashId = props.hashId,
    itemClick = props.itemClick;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "".concat(baseClassName, "-content ").concat(hashId).trim(),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      className: "".concat(baseClassName, "-content-list ").concat(hashId).trim(),
      children: appList === null || appList === void 0 ? void 0 : appList.map(function (app, index) {
        var _app$children;
        if (app !== null && app !== void 0 && (_app$children = app.children) !== null && _app$children !== void 0 && _app$children.length) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "".concat(baseClassName, "-content-list-item-group ").concat(hashId).trim(),
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "".concat(baseClassName, "-content-list-item-group-title ").concat(hashId).trim(),
              children: app.title
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(SimpleContent, {
              hashId: hashId,
              itemClick: itemClick,
              appList: app === null || app === void 0 ? void 0 : app.children,
              baseClassName: baseClassName
            })]
          }, index);
        }
        return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          className: "".concat(baseClassName, "-content-list-item ").concat(hashId).trim(),
          onClick: function onClick(e) {
            e.stopPropagation();
            itemClick === null || itemClick === void 0 || itemClick(app);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
            href: itemClick ? 'javascript:;' : app.url,
            target: app.target,
            rel: "noreferrer",
            children: [renderLogo(app.icon, app.title), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                children: app.title
              })
            })]
          })
        }, index);
      })
    })
  });
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/style/default.js

var genAppsLogoComponentsDefaultListStyle = function genAppsLogoComponentsDefaultListStyle(token) {
  return {
    '&-content': {
      maxHeight: 'calc(100vh - 48px)',
      overflow: 'auto',
      '&-list': {
        boxSizing: 'content-box',
        maxWidth: 656,
        marginBlock: 0,
        marginInline: 0,
        paddingBlock: 0,
        paddingInline: 0,
        listStyle: 'none',
        '&-item': {
          position: 'relative',
          display: 'inline-block',
          width: 328,
          height: 72,
          paddingInline: 16,
          paddingBlock: 16,
          verticalAlign: 'top',
          listStyleType: 'none',
          transition: 'transform 0.2s cubic-bezier(0.333, 0, 0, 1)',
          borderRadius: token.borderRadius,
          '&-group': {
            marginBottom: 16,
            '&-title': {
              margin: '16px 0 8px 12px',
              fontWeight: 600,
              color: 'rgba(0, 0, 0, 0.88)',
              fontSize: 16,
              opacity: 0.85,
              lineHeight: 1.5,
              '&:first-child': {
                marginTop: 12
              }
            }
          },
          '&:hover': {
            backgroundColor: token.colorBgTextHover
          },
          '* div': useStyle/* resetComponent */.Wf === null || useStyle/* resetComponent */.Wf === void 0 ? void 0 : (0,useStyle/* resetComponent */.Wf)(token),
          a: {
            display: 'flex',
            height: '100%',
            fontSize: 12,
            textDecoration: 'none',
            '& > img': {
              width: 40,
              height: 40
            },
            '& > div': {
              marginInlineStart: 14,
              color: token.colorTextHeading,
              fontSize: 14,
              lineHeight: '22px',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            },
            '& > div > span': {
              color: token.colorTextSecondary,
              fontSize: 12,
              lineHeight: '20px'
            }
          }
        }
      }
    }
  };
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/style/simple.js
var genAppsLogoComponentsSimpleListStyle = function genAppsLogoComponentsSimpleListStyle(token) {
  return {
    '&-content': {
      maxHeight: 'calc(100vh - 48px)',
      overflow: 'auto',
      '&-list': {
        boxSizing: 'border-box',
        maxWidth: 376,
        marginBlock: 0,
        marginInline: 0,
        paddingBlock: 0,
        paddingInline: 0,
        listStyle: 'none',
        '&-item': {
          position: 'relative',
          display: 'inline-block',
          width: 104,
          height: 104,
          marginBlock: 8,
          marginInline: 8,
          paddingInline: 24,
          paddingBlock: 24,
          verticalAlign: 'top',
          listStyleType: 'none',
          transition: 'transform 0.2s cubic-bezier(0.333, 0, 0, 1)',
          borderRadius: token.borderRadius,
          '&-group': {
            marginBottom: 16,
            '&-title': {
              margin: '16px 0 8px 12px',
              fontWeight: 600,
              color: 'rgba(0, 0, 0, 0.88)',
              fontSize: 16,
              opacity: 0.85,
              lineHeight: 1.5,
              '&:first-child': {
                marginTop: 12
              }
            }
          },
          '&:hover': {
            backgroundColor: token.colorBgTextHover
          },
          a: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            fontSize: 12,
            textDecoration: 'none',
            '& > #avatarLogo': {
              width: 40,
              height: 40,
              margin: '0 auto',
              color: token.colorPrimary,
              fontSize: 22,
              lineHeight: '40px',
              textAlign: 'center',
              backgroundImage: 'linear-gradient(180deg, #E8F0FB 0%, #F6F8FC 100%)',
              borderRadius: token.borderRadius
            },
            '& > img': {
              width: 40,
              height: 40
            },
            '& > div': {
              marginBlockStart: 5,
              marginInlineStart: 0,
              color: token.colorTextHeading,
              fontSize: 14,
              lineHeight: '22px',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis'
            },
            '& > div > span': {
              color: token.colorTextSecondary,
              fontSize: 12,
              lineHeight: '20px'
            }
          }
        }
      }
    }
  };
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/style/index.js





var genAppsLogoComponentsStyle = function genAppsLogoComponentsStyle(token) {
  var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5;
  return (0,defineProperty/* default */.Z)({}, token.componentCls, {
    '&-icon': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingInline: 4,
      paddingBlock: 0,
      fontSize: 14,
      lineHeight: '14px',
      height: 28,
      width: 28,
      cursor: 'pointer',
      color: (_token$layout = token.layout) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextAppListIcon,
      borderRadius: token.borderRadius,
      '&:hover': {
        color: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorTextAppListIconHover,
        backgroundColor: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorBgAppListIconHover
      },
      '&-active': {
        color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextAppListIconHover,
        backgroundColor: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgAppListIconHover
      }
    },
    '&-item-title': {
      marginInlineStart: '16px',
      marginInlineEnd: '8px',
      marginBlockStart: 0,
      marginBlockEnd: '12px',
      fontWeight: 600,
      color: 'rgba(0, 0, 0, 0.88)',
      fontSize: 16,
      opacity: 0.85,
      lineHeight: 1.5,
      '&:first-child': {
        marginBlockStart: 12
      }
    },
    '&-popover': (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-popover-arrow"), {
      display: 'none'
    }),
    '&-simple': genAppsLogoComponentsSimpleListStyle(token),
    '&-default': genAppsLogoComponentsDefaultListStyle(token)
  });
};
function AppsLogoComponents_style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('AppsLogoComponents', function (token) {
    var proCardToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genAppsLogoComponentsStyle(proCardToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/index.js














/**
 * 默认渲染logo的方式，如果是个string，用img。否则直接返回
 *
 * @param logo
 * @returns
 */
var defaultRenderLogo = function defaultRenderLogo(logo) {
  if (typeof logo === 'string') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
      width: "auto",
      height: 22,
      src: logo,
      alt: "logo"
    });
  }
  if (typeof logo === 'function') {
    return logo();
  }
  return logo;
};

/**
 * 相关品牌额icon 列表。用于展示相关的品牌
 *
 * @param props
 * @returns
 */
var AppsLogoComponents = function AppsLogoComponents(props) {
  var _props$appList;
  var appList = props.appList,
    appListRender = props.appListRender,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'ant-pro' : _props$prefixCls,
    itemClick = props.onItemClick;
  var ref = react.useRef(null);
  var popoverRef = react.useRef(null);
  var baseClassName = "".concat(prefixCls, "-layout-apps");
  var _useStyle = AppsLogoComponents_style_useStyle(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var cloneItemClick = function cloneItemClick(app) {
    itemClick === null || itemClick === void 0 || itemClick(app, popoverRef);
  };
  var defaultDomContent = (0,react.useMemo)(function () {
    var isSimple = appList === null || appList === void 0 ? void 0 : appList.some(function (app) {
      return !(app !== null && app !== void 0 && app.desc);
    });
    if (isSimple) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(SimpleContent, {
        hashId: hashId,
        appList: appList,
        itemClick: itemClick ? cloneItemClick : undefined,
        baseClassName: "".concat(baseClassName, "-simple")
      });
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)(DefaultContent, {
      hashId: hashId,
      appList: appList,
      itemClick: itemClick ? cloneItemClick : undefined,
      baseClassName: "".concat(baseClassName, "-default")
    });
  }, [appList, baseClassName, hashId]);
  if (!(props !== null && props !== void 0 && (_props$appList = props.appList) !== null && _props$appList !== void 0 && _props$appList.length)) return null;
  var popoverContent = appListRender ? appListRender(props === null || props === void 0 ? void 0 : props.appList, defaultDomContent) : defaultDomContent;
  var popoverOpenProps = (0,openVisibleCompatible/* openVisibleCompatible */.X)(undefined, function (openChange) {
    return setOpen(openChange);
  });
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: ref,
      onClick: function onClick(e) {
        e.stopPropagation();
        e.preventDefault();
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(popover/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      placement: "bottomRight",
      trigger: ['click'],
      zIndex: 9999,
      arrow: false
    }, popoverOpenProps), {}, {
      overlayClassName: "".concat(baseClassName, "-popover ").concat(hashId).trim(),
      content: popoverContent,
      getPopupContainer: function getPopupContainer() {
        return ref.current || document.body;
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        ref: popoverRef,
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        className: classnames_default()("".concat(baseClassName, "-icon"), hashId, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-icon-active"), open)),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(AppsLogo, {})
      })
    }))]
  }));
};
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/avatar/index.js + 4 modules
var avatar = __webpack_require__(88762);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(65611);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/menu/index.js + 10 modules
var es_menu = __webpack_require__(49019);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/SiderMenu/Arrow.js

function ArrowSvgIcon() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 12 12",
    fill: "currentColor",
    "aria-hidden": "true",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M6.432 7.967a.448.448 0 01-.318.133h-.228a.46.46 0 01-.318-.133L2.488 4.85a.305.305 0 010-.43l.427-.43a.293.293 0 01.42 0L6 6.687l2.665-2.699a.299.299 0 01.426 0l.42.431a.305.305 0 010 .43L6.432 7.967z"
    })
  });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/CollapsedIcon/style.js



var genSiderMenuStyle = function genSiderMenuStyle(token) {
  var _token$layout, _token$layout2, _token$layout3;
  return (0,defineProperty/* default */.Z)({}, token.componentCls, {
    position: 'absolute',
    insetBlockStart: '18px',
    zIndex: '101',
    width: '24px',
    height: '24px',
    fontSize: ['14px', '16px'],
    textAlign: 'center',
    borderRadius: '40px',
    insetInlineEnd: '-13px',
    transition: 'transform 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextCollapsedButton,
    backgroundColor: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorBgCollapsedButton,
    boxShadow: '0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(25,15,15,0.07), 0 0 1px 0 rgba(0,0,0,0.08)',
    '&:hover': {
      color: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorTextCollapsedButtonHover,
      boxShadow: '0 4px 16px -4px rgba(0,0,0,0.05), 0 2px 8px -2px rgba(25,15,15,0.07), 0 1px 2px 0 rgba(0,0,0,0.08)'
    },
    '.anticon': {
      fontSize: '14px'
    },
    '& > svg': {
      transition: 'transform  0.3s',
      transform: 'rotate(90deg)'
    },
    '&-collapsed': {
      '& > svg': {
        transform: 'rotate(-90deg)'
      }
    }
  });
};
function CollapsedIcon_style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('SiderMenuCollapsedIcon', function (token) {
    var siderMenuToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genSiderMenuStyle(siderMenuToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/CollapsedIcon/index.js



var CollapsedIcon_excluded = ["isMobile", "collapsed"];




var CollapsedIcon = function CollapsedIcon(props) {
  var isMobile = props.isMobile,
    collapsed = props.collapsed,
    rest = (0,objectWithoutProperties/* default */.Z)(props, CollapsedIcon_excluded);
  var _useStyle = CollapsedIcon_style_useStyle(props.className),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if (isMobile && collapsed) return null;
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsx)("div", (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, rest), {}, {
    className: classnames_default()(props.className, hashId, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(props.className, "-collapsed"), collapsed), "".concat(props.className, "-is-mobile"), isMobile)),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowSvgIcon, {})
  })));
};
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(35979);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(76920);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(59129);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/components/IconFont.js + 1 modules
var IconFont = __webpack_require__(15997);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-utils@2.17.0_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@_ftolbhh2rvo5cbykfdwocfesei/node_modules/@ant-design/pro-utils/es/isImg/index.js
/** 判断是否是图片链接 */
function isImg(path) {
  return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(65069);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/skeleton/index.js + 10 modules
var skeleton = __webpack_require__(13164);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/defaultSettings.js
var defaultSettings = {
  navTheme: 'light',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  iconfontUrl: '',
  colorPrimary: '#1677FF',
  splitMenus: false
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/SiderMenu/style/menu.js



var genProLayoutBaseMenuStyle = function genProLayoutBaseMenuStyle(token, mode) {
  var _token$layout, _token$layout2;
  var menuToken = mode.includes('horizontal') ? (_token$layout = token.layout) === null || _token$layout === void 0 ? void 0 : _token$layout.header : (_token$layout2 = token.layout) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.sider;
  return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.componentCls), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    background: 'transparent',
    color: menuToken === null || menuToken === void 0 ? void 0 : menuToken.colorTextMenu,
    border: 'none'
  }, "".concat(token.componentCls, "-menu-item"), {
    transition: 'none !important'
  }), "".concat(token.componentCls, "-submenu-has-icon"), (0,defineProperty/* default */.Z)({}, "> ".concat(token.antCls, "-menu-sub"), {
    paddingInlineStart: 10
  })), "".concat(token.antCls, "-menu-title-content"), {
    width: '100%',
    height: '100%',
    display: 'inline-flex'
  }), "".concat(token.antCls, "-menu-title-content"), {
    '&:first-child': {
      width: '100%'
    }
  }), "".concat(token.componentCls, "-item-icon"), {
    display: 'flex',
    alignItems: 'center'
  }), "&&-collapsed", (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item, \n        ").concat(token.antCls, "-menu-item-group > ").concat(token.antCls, "-menu-item-group-list > ").concat(token.antCls, "-menu-item, \n        ").concat(token.antCls, "-menu-item-group > ").concat(token.antCls, "-menu-item-group-list > ").concat(token.antCls, "-menu-submenu > ").concat(token.antCls, "-menu-submenu-title, \n        ").concat(token.antCls, "-menu-submenu > ").concat(token.antCls, "-menu-submenu-title"), {
    paddingInline: '0 !important',
    marginBlock: '4px !important'
  }), "".concat(token.antCls, "-menu-item-group > ").concat(token.antCls, "-menu-item-group-list > ").concat(token.antCls, "-menu-submenu-selected > ").concat(token.antCls, "-menu-submenu-title, \n        ").concat(token.antCls, "-menu-submenu-selected > ").concat(token.antCls, "-menu-submenu-title"), {
    backgroundColor: menuToken === null || menuToken === void 0 ? void 0 : menuToken.colorBgMenuItemSelected,
    borderRadius: token.borderRadiusLG
  }), "".concat(token.componentCls, "-group"), (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item-group-title"), {
    paddingInline: 0
  }))), '&-item-title', (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: token.marginXS
  }, "".concat(token.componentCls, "-item-text"), {
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    wordBreak: 'break-all',
    whiteSpace: 'nowrap'
  }), '&-collapsed', (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    minWidth: 40,
    height: 40
  }, "".concat(token.componentCls, "-item-icon"), {
    height: '16px',
    width: '16px',
    lineHeight: '16px !important',
    '.anticon': {
      lineHeight: '16px !important',
      height: '16px'
    }
  }), "".concat(token.componentCls, "-item-text-has-icon"), {
    display: 'none !important'
  })), '&-collapsed-level-0', {
    flexDirection: 'column',
    justifyContent: 'center'
  }), "&".concat(token.componentCls, "-group-item-title"), {
    gap: token.marginXS,
    height: 18,
    overflow: 'hidden'
  }), "&".concat(token.componentCls, "-item-collapsed-show-title"), (0,defineProperty/* default */.Z)({
    lineHeight: '16px',
    gap: 0
  }, "&".concat(token.componentCls, "-item-title-collapsed"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    display: 'flex'
  }, "".concat(token.componentCls, "-item-icon"), {
    height: '16px',
    width: '16px',
    lineHeight: '16px !important',
    '.anticon': {
      lineHeight: '16px!important',
      height: '16px'
    }
  }), "".concat(token.componentCls, "-item-text"), {
    opacity: '1 !important',
    display: 'inline !important',
    textAlign: 'center',
    fontSize: 12,
    height: 12,
    lineHeight: '12px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
    margin: 0,
    padding: 0,
    marginBlockStart: 4
  })))), '&-group', (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item-group-title"), {
    fontSize: 12,
    color: token.colorTextLabel,
    '.anticon': {
      marginInlineEnd: 8
    }
  })), '&-group-divider', {
    color: token.colorTextSecondary,
    fontSize: 12,
    lineHeight: 20
  })), mode.includes('horizontal') ? {} : (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-submenu").concat(token.antCls, "-menu-submenu-popup"), (0,defineProperty/* default */.Z)({}, "".concat(token.componentCls, "-item-title"), {
    alignItems: 'flex-start'
  }))), {}, (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-submenu-popup"), {
    backgroundColor: 'rgba(255, 255, 255, 0.42)',
    '-webkit-backdrop-filter': 'blur(8px)',
    backdropFilter: 'blur(8px)'
  }));
};
function menu_useStyle(prefixCls, mode) {
  return (0,useStyle/* useStyle */.Xj)('ProLayoutBaseMenu' + mode, function (token) {
    var proLayoutMenuToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProLayoutBaseMenuStyle(proLayoutMenuToken, mode || 'inline')];
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/SiderMenu/BaseMenu.js
















// todo



var MenuItemTooltip = function MenuItemTooltip(props) {
  var _useState = (0,react.useState)(props.collapsed),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    collapsed = _useState2[0],
    setCollapsed = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  (0,react.useEffect)(function () {
    setOpen(false);
    setTimeout(function () {
      setCollapsed(props.collapsed);
    }, 400);
  }, [props.collapsed]);
  if (props.disable) {
    return props.children;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
    title: props.title,
    open: collapsed && props.collapsed ? open : false,
    placement: "right",
    onOpenChange: setOpen,
    children: props.children
  });
};
var BaseMenu_IconFont = (0,IconFont/* default */.Z)({
  scriptUrl: defaultSettings.iconfontUrl
});

// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'icon-geren' #For Iconfont ,
//   icon: 'http://demo.com/icon.png',
//   icon: '/favicon.png',
//   icon: <Icon type="setting" />,
var getIcon = function getIcon(icon) {
  var iconPrefixes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'icon-';
  var className = arguments.length > 2 ? arguments[2] : undefined;
  if (typeof icon === 'string' && icon !== '') {
    if (isUrl_isUrl(icon) || isImg(icon)) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        width: 16,
        src: icon,
        alt: "icon",
        className: className
      }, icon);
    }
    if (icon.startsWith(iconPrefixes)) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(BaseMenu_IconFont, {
        type: icon
      });
    }
  }
  return icon;
};
var getMenuTitleSymbol = function getMenuTitleSymbol(title) {
  if (title && typeof title === 'string') {
    var symbol = title.substring(0, 1).toUpperCase();
    return symbol;
  }
  return null;
};
var MenuUtil = /*#__PURE__*/(0,createClass/* default */.Z)(function MenuUtil(props) {
  var _this = this;
  (0,classCallCheck/* default */.Z)(this, MenuUtil);
  (0,defineProperty/* default */.Z)(this, "props", void 0);
  (0,defineProperty/* default */.Z)(this, "getNavMenuItems", function () {
    var menusData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var level = arguments.length > 1 ? arguments[1] : undefined;
    var noGroupLevel = arguments.length > 2 ? arguments[2] : undefined;
    return menusData.map(function (item) {
      return _this.getSubMenuOrItem(item, level, noGroupLevel);
    }).filter(function (item) {
      return item;
    }).flat(1);
  });
  /** Get SubMenu or Item */
  (0,defineProperty/* default */.Z)(this, "getSubMenuOrItem", function (item, level, noGroupLevel) {
    var _this$props = _this.props,
      subMenuItemRender = _this$props.subMenuItemRender,
      baseClassName = _this$props.baseClassName,
      prefixCls = _this$props.prefixCls,
      collapsed = _this$props.collapsed,
      menu = _this$props.menu,
      iconPrefixes = _this$props.iconPrefixes,
      layout = _this$props.layout;
    var isGroup = (menu === null || menu === void 0 ? void 0 : menu.type) === 'group' && layout !== 'top';
    var designToken = _this.props.token;
    var name = _this.getIntlName(item);
    var children = (item === null || item === void 0 ? void 0 : item.children) || (item === null || item === void 0 ? void 0 : item.routes);
    var menuType = isGroup && level === 0 ? 'group' : undefined;
    if (Array.isArray(children) && children.length > 0) {
      var _this$props2, _this$props3, _this$props4, _this$props5, _designToken$layout;
      /** Menu 第一级可以有icon，或者 isGroup 时第二级别也要有 */
      var shouldHasIcon = level === 0 || isGroup && level === 1;

      //  get defaultTitle by menuItemRender
      var iconDom = getIcon(item.icon, iconPrefixes, "".concat(baseClassName, "-icon ").concat((_this$props2 = _this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.hashId));
      /**
       * 如果没有icon在收起的时候用首字母代替
       */
      var defaultIcon = collapsed && shouldHasIcon ? getMenuTitleSymbol(name) : null;
      var defaultTitle = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: classnames_default()("".concat(baseClassName, "-item-title"), (_this$props3 = _this.props) === null || _this$props3 === void 0 ? void 0 : _this$props3.hashId, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-item-title-collapsed"), collapsed), "".concat(baseClassName, "-item-title-collapsed-level-").concat(noGroupLevel), collapsed), "".concat(baseClassName, "-group-item-title"), menuType === 'group'), "".concat(baseClassName, "-item-collapsed-show-title"), (menu === null || menu === void 0 ? void 0 : menu.collapsedShowTitle) && collapsed)),
        children: [menuType === 'group' && collapsed ? null : shouldHasIcon && iconDom ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "".concat(baseClassName, "-item-icon ").concat((_this$props4 = _this.props) === null || _this$props4 === void 0 ? void 0 : _this$props4.hashId).trim(),
          children: iconDom
        }) : defaultIcon, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: classnames_default()("".concat(baseClassName, "-item-text"), (_this$props5 = _this.props) === null || _this$props5 === void 0 ? void 0 : _this$props5.hashId, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-item-text-has-icon"), menuType !== 'group' && shouldHasIcon && (iconDom || defaultIcon))),
          children: name
        })]
      });

      // subMenu only title render
      var title = subMenuItemRender ? subMenuItemRender((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
        isUrl: false
      }), defaultTitle, _this.props) : defaultTitle;

      // 如果收起来，没有子菜单了，就不需要展示 group，所以 level 不增加
      if (isGroup && level === 0 && _this.props.collapsed && !menu.collapsedShowGroupTitle) {
        return _this.getNavMenuItems(children, level + 1, level);
      }
      var childrenList = _this.getNavMenuItems(children, level + 1, isGroup && level === 0 && _this.props.collapsed ? level : level + 1);
      return [{
        type: menuType,
        key: item.key || item.path,
        label: title,
        onClick: isGroup ? undefined : item.onTitleClick,
        children: childrenList,
        className: classnames_default()((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-group"), menuType === 'group'), "".concat(baseClassName, "-submenu"), menuType !== 'group'), "".concat(baseClassName, "-submenu-has-icon"), menuType !== 'group' && shouldHasIcon && iconDom))
      }, isGroup && level === 0 ? {
        type: 'divider',
        prefixCls: prefixCls,
        className: "".concat(baseClassName, "-divider"),
        key: (item.key || item.path) + '-group-divider',
        style: {
          padding: 0,
          borderBlockEnd: 0,
          margin: _this.props.collapsed ? '4px' : '6px 16px',
          marginBlockStart: _this.props.collapsed ? 4 : 8,
          borderColor: designToken === null || designToken === void 0 || (_designToken$layout = designToken.layout) === null || _designToken$layout === void 0 || (_designToken$layout = _designToken$layout.sider) === null || _designToken$layout === void 0 ? void 0 : _designToken$layout.colorMenuItemDivider
        }
      } : undefined].filter(Boolean);
    }
    return {
      className: "".concat(baseClassName, "-menu-item"),
      disabled: item.disabled,
      key: item.key || item.path,
      onClick: item.onTitleClick,
      // eslint-disable-next-line react/no-is-mounted
      label: _this.getMenuItemPath(item, level, noGroupLevel)
    };
  });
  (0,defineProperty/* default */.Z)(this, "getIntlName", function (item) {
    var name = item.name,
      locale = item.locale;
    var _this$props6 = _this.props,
      menu = _this$props6.menu,
      formatMessage = _this$props6.formatMessage;
    var finalName = name;
    if (locale && (menu === null || menu === void 0 ? void 0 : menu.locale) !== false) {
      finalName = formatMessage === null || formatMessage === void 0 ? void 0 : formatMessage({
        id: locale,
        defaultMessage: name
      });
    }
    if (_this.props.menuTextRender) {
      return _this.props.menuTextRender(item, finalName, _this.props);
    }
    return finalName;
  });
  /**
   * 判断是否是http链接.返回 Link 或 a Judge whether it is http link.return a or Link
   *
   * @memberof SiderMenu
   */
  (0,defineProperty/* default */.Z)(this, "getMenuItemPath", function (item, level, noGroupLevel) {
    var _this$props9, _this$props10, _this$props11, _this$props12;
    var itemPath = _this.conversionPath(item.path || '/');
    var _this$props7 = _this.props,
      _this$props7$location = _this$props7.location,
      location = _this$props7$location === void 0 ? {
        pathname: '/'
      } : _this$props7$location,
      isMobile = _this$props7.isMobile,
      onCollapse = _this$props7.onCollapse,
      menuItemRender = _this$props7.menuItemRender,
      iconPrefixes = _this$props7.iconPrefixes;

    // if local is true formatMessage all name。
    var menuItemTitle = _this.getIntlName(item);
    var _this$props8 = _this.props,
      baseClassName = _this$props8.baseClassName,
      menu = _this$props8.menu,
      collapsed = _this$props8.collapsed;
    var isGroup = (menu === null || menu === void 0 ? void 0 : menu.type) === 'group';
    /** Menu 第一级可以有icon，或者 isGroup 时第二级别也要有 */
    var hasIcon = level === 0 || isGroup && level === 1;
    var icon = !hasIcon ? null : getIcon(item.icon, iconPrefixes, "".concat(baseClassName, "-icon ").concat((_this$props9 = _this.props) === null || _this$props9 === void 0 ? void 0 : _this$props9.hashId));

    // 如果没有 icon 在收起的时候用首字母代替
    var defaultIcon = collapsed && hasIcon ? getMenuTitleSymbol(menuItemTitle) : null;
    var defaultItem = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()("".concat(baseClassName, "-item-title"), (_this$props10 = _this.props) === null || _this$props10 === void 0 ? void 0 : _this$props10.hashId, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-item-title-collapsed"), collapsed), "".concat(baseClassName, "-item-title-collapsed-level-").concat(noGroupLevel), collapsed), "".concat(baseClassName, "-item-collapsed-show-title"), (menu === null || menu === void 0 ? void 0 : menu.collapsedShowTitle) && collapsed)),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "".concat(baseClassName, "-item-icon ").concat((_this$props11 = _this.props) === null || _this$props11 === void 0 ? void 0 : _this$props11.hashId).trim(),
        style: {
          display: defaultIcon === null && !icon ? 'none' : ''
        },
        children: icon || /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "anticon",
          children: defaultIcon
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: classnames_default()("".concat(baseClassName, "-item-text"), (_this$props12 = _this.props) === null || _this$props12 === void 0 ? void 0 : _this$props12.hashId, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-item-text-has-icon"), hasIcon && (icon || defaultIcon))),
        children: menuItemTitle
      })]
    }, itemPath);
    var isHttpUrl = isUrl_isUrl(itemPath);

    // Is it a http link
    if (isHttpUrl) {
      var _this$props13, _this$props14, _this$props15;
      defaultItem = /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        onClick: function onClick() {
          var _window, _window$open;
          (_window = window) === null || _window === void 0 || (_window$open = _window.open) === null || _window$open === void 0 || _window$open.call(_window, itemPath, '_blank');
        },
        className: classnames_default()("".concat(baseClassName, "-item-title"), (_this$props13 = _this.props) === null || _this$props13 === void 0 ? void 0 : _this$props13.hashId, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-item-title-collapsed"), collapsed), "".concat(baseClassName, "-item-title-collapsed-level-").concat(noGroupLevel), collapsed), "".concat(baseClassName, "-item-link"), true), "".concat(baseClassName, "-item-collapsed-show-title"), (menu === null || menu === void 0 ? void 0 : menu.collapsedShowTitle) && collapsed)),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "".concat(baseClassName, "-item-icon ").concat((_this$props14 = _this.props) === null || _this$props14 === void 0 ? void 0 : _this$props14.hashId).trim(),
          style: {
            display: defaultIcon === null && !icon ? 'none' : ''
          },
          children: icon || /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "anticon",
            children: defaultIcon
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: classnames_default()("".concat(baseClassName, "-item-text"), (_this$props15 = _this.props) === null || _this$props15 === void 0 ? void 0 : _this$props15.hashId, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-item-text-has-icon"), hasIcon && (icon || defaultIcon))),
          children: menuItemTitle
        })]
      }, itemPath);
    }
    if (menuItemRender) {
      var renderItemProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
        isUrl: isHttpUrl,
        itemPath: itemPath,
        isMobile: isMobile,
        replace: itemPath === location.pathname,
        onClick: function onClick() {
          return onCollapse && onCollapse(true);
        },
        children: undefined
      });
      return level === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(MenuItemTooltip, {
        collapsed: collapsed,
        title: menuItemTitle,
        disable: item.disabledTooltip,
        children: menuItemRender(renderItemProps, defaultItem, _this.props)
      }) : menuItemRender(renderItemProps, defaultItem, _this.props);
    }
    return level === 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(MenuItemTooltip, {
      collapsed: collapsed,
      title: menuItemTitle,
      disable: item.disabledTooltip,
      children: defaultItem
    }) : defaultItem;
  });
  (0,defineProperty/* default */.Z)(this, "conversionPath", function (path) {
    if (path && path.indexOf('http') === 0) {
      return path;
    }
    return "/".concat(path || '').replace(/\/+/g, '/');
  });
  this.props = props;
});
/**
 * 生成openKeys 的对象，因为设置了openKeys 就会变成受控，所以需要一个空对象
 *
 * @param BaseMenuProps
 */
var getOpenKeysProps = function getOpenKeysProps(openKeys, _ref) {
  var layout = _ref.layout,
    collapsed = _ref.collapsed;
  var openKeysProps = {};
  if (openKeys && !collapsed && ['side', 'mix'].includes(layout || 'mix')) {
    openKeysProps = {
      openKeys: openKeys
    };
  }
  return openKeysProps;
};
var BaseMenu = function BaseMenu(props) {
  var mode = props.mode,
    className = props.className,
    handleOpenChange = props.handleOpenChange,
    style = props.style,
    menuData = props.menuData,
    prefixCls = props.prefixCls,
    menu = props.menu,
    matchMenuKeys = props.matchMenuKeys,
    iconfontUrl = props.iconfontUrl,
    propsSelectedKeys = props.selectedKeys,
    onSelect = props.onSelect,
    menuRenderType = props.menuRenderType,
    propsOpenKeys = props.openKeys;
  var _useContext = (0,react.useContext)(es/* ProProvider */.L_),
    dark = _useContext.dark,
    designToken = _useContext.token;
  var baseClassName = "".concat(prefixCls, "-base-menu-").concat(mode);
  // 用于减少 defaultOpenKeys 计算的组件
  var defaultOpenKeysRef = (0,react.useRef)([]);
  var _useMountMergeState = (0,useMergedState/* default */.Z)(menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll),
    _useMountMergeState2 = (0,slicedToArray/* default */.Z)(_useMountMergeState, 2),
    defaultOpenAll = _useMountMergeState2[0],
    setDefaultOpenAll = _useMountMergeState2[1];
  var _useMountMergeState3 = (0,useMergedState/* default */.Z)(function () {
      if (menu !== null && menu !== void 0 && menu.defaultOpenAll) {
        return getOpenKeysFromMenuData(menuData) || [];
      }
      if (propsOpenKeys === false) {
        return false;
      }
      return [];
    }, {
      value: propsOpenKeys === false ? undefined : propsOpenKeys,
      onChange: handleOpenChange
    }),
    _useMountMergeState4 = (0,slicedToArray/* default */.Z)(_useMountMergeState3, 2),
    openKeys = _useMountMergeState4[0],
    setOpenKeys = _useMountMergeState4[1];
  var _useMountMergeState5 = (0,useMergedState/* default */.Z)([], {
      value: propsSelectedKeys,
      onChange: onSelect ? function (keys) {
        if (onSelect && keys) {
          onSelect(keys);
        }
      } : undefined
    }),
    _useMountMergeState6 = (0,slicedToArray/* default */.Z)(_useMountMergeState5, 2),
    selectedKeys = _useMountMergeState6[0],
    setSelectedKeys = _useMountMergeState6[1];
  (0,react.useEffect)(function () {
    if (menu !== null && menu !== void 0 && menu.defaultOpenAll || propsOpenKeys === false) {
      return;
    }
    if (matchMenuKeys) {
      setOpenKeys(matchMenuKeys);
      setSelectedKeys(matchMenuKeys);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchMenuKeys.join('-')]);
  (0,react.useEffect)(function () {
    // reset IconFont
    if (iconfontUrl) {
      BaseMenu_IconFont = (0,IconFont/* default */.Z)({
        scriptUrl: iconfontUrl
      });
    }
  }, [iconfontUrl]);
  (0,react.useEffect)(function () {
    // if pathname can't match, use the nearest parent's key
    if (matchMenuKeys.join('-') !== (selectedKeys || []).join('-')) {
      setSelectedKeys(matchMenuKeys);
    }
    if (!defaultOpenAll && propsOpenKeys !== false && matchMenuKeys.join('-') !== (openKeys || []).join('-')) {
      var newKeys = matchMenuKeys;
      // 如果不自动关闭，我需要把 openKeys 放进去
      if ((menu === null || menu === void 0 ? void 0 : menu.autoClose) === false) {
        newKeys = Array.from(new Set([].concat((0,toConsumableArray/* default */.Z)(matchMenuKeys), (0,toConsumableArray/* default */.Z)(openKeys || []))));
      }
      setOpenKeys(newKeys);
    } else if (menu !== null && menu !== void 0 && menu.ignoreFlatMenu && defaultOpenAll) {
      // 忽略用户手动折叠过的菜单状态，折叠按钮切换之后也可实现默认展开所有菜单
      setOpenKeys(getOpenKeysFromMenuData(menuData));
    } else {
      setDefaultOpenAll(false);
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [matchMenuKeys.join('-')]);
  var openKeysProps = (0,react.useMemo)(function () {
    return getOpenKeysProps(openKeys, props);
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [openKeys && openKeys.join(','), props.layout, props.collapsed]);
  var _useStyle = menu_useStyle(baseClassName, mode),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var menuUtils = (0,react.useMemo)(function () {
    return new MenuUtil((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      token: designToken,
      menuRenderType: menuRenderType,
      baseClassName: baseClassName,
      hashId: hashId
    }));
  }, [props, designToken, menuRenderType, baseClassName, hashId]);
  if (menu !== null && menu !== void 0 && menu.loading) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: mode !== null && mode !== void 0 && mode.includes('inline') ? {
        padding: 24
      } : {
        marginBlockStart: 16
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(skeleton/* default */.Z, {
        active: true,
        title: false,
        paragraph: {
          rows: mode !== null && mode !== void 0 && mode.includes('inline') ? 6 : 1
        }
      })
    });
  }

  // 这次 openKeys === false 的时候的情况，这种情况下帮用户选中一次
  // 第二此不会使用，所以用了 defaultOpenKeys
  // 这里返回 null，是为了让 defaultOpenKeys 生效
  if (props.openKeys === false && !props.handleOpenChange) {
    defaultOpenKeysRef.current = matchMenuKeys;
  }
  var finallyData = props.postMenuData ? props.postMenuData(menuData) : menuData;
  if (finallyData && (finallyData === null || finallyData === void 0 ? void 0 : finallyData.length) < 1) {
    return null;
  }
  return wrapSSR( /*#__PURE__*/(0,react.createElement)(es_menu/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, openKeysProps), {}, {
    _internalDisableMenuItemTitleTooltip: true,
    key: "Menu",
    mode: mode,
    inlineIndent: 16,
    defaultOpenKeys: defaultOpenKeysRef.current,
    theme: dark ? 'dark' : 'light',
    selectedKeys: selectedKeys,
    style: (0,objectSpread2/* default */.Z)({
      backgroundColor: 'transparent',
      border: 'none'
    }, style),
    className: classnames_default()(className, hashId, baseClassName, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-horizontal"), mode === 'horizontal'), "".concat(baseClassName, "-collapsed"), props.collapsed)),
    items: menuUtils.getNavMenuItems(finallyData, 0, 0),
    onOpenChange: function onOpenChange(_openKeys) {
      if (!props.collapsed) {
        setOpenKeys(_openKeys);
      }
    }
  }, props.menuProps)));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/SiderMenu/style/stylish.js



function useStylish(prefixCls, _ref) {
  var stylish = _ref.stylish,
    proLayoutCollapsedWidth = _ref.proLayoutCollapsedWidth;
  return (0,useStyle/* useStyle */.Xj)('ProLayoutSiderMenuStylish', function (token) {
    var siderMenuToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls),
      proLayoutCollapsedWidth: proLayoutCollapsedWidth
    });
    if (!stylish) return [];
    return [(0,defineProperty/* default */.Z)({}, "div".concat(token.proComponentsCls, "-layout"), (0,defineProperty/* default */.Z)({}, "".concat(siderMenuToken.componentCls), stylish === null || stylish === void 0 ? void 0 : stylish(siderMenuToken)))];
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/SiderMenu/SiderMenu.js



var SiderMenu_excluded = ["title", "render"];












var _SafetyWarningProvider = /*#__PURE__*/react.memo(function (props) {
  if (false) {}
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: props.children
  });
});
var Sider = layout/* default */.Z.Sider,
  _Layout$_InternalSide = layout/* default */.Z._InternalSiderContext,
  SiderContext = _Layout$_InternalSide === void 0 ? {
    Provider: _SafetyWarningProvider
  } : _Layout$_InternalSide;
/**
 * 渲染 title 和 logo
 *
 * @param props
 * @param renderKey
 * @returns
 */
var renderLogoAndTitle = function renderLogoAndTitle(props) {
  var renderKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'menuHeaderRender';
  var logo = props.logo,
    title = props.title,
    layout = props.layout;
  var renderFunction = props[renderKey];
  if (renderFunction === false) {
    return null;
  }
  var logoDom = defaultRenderLogo(logo);
  var titleDom = /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
    children: title !== null && title !== void 0 ? title : 'Ant Design Pro'
  });
  if (renderFunction) {
    // when collapsed, no render title
    return renderFunction(logoDom, props.collapsed ? null : titleDom, props);
  }

  /**
   * 收起来时候直接不显示
   */
  if (props.isMobile) {
    return null;
  }
  if (layout === 'mix' && renderKey === 'menuHeaderRender') return false;
  if (props.collapsed) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      children: logoDom
    }, "title");
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
    children: [logoDom, titleDom]
  }, "title");
};
var SiderMenu = function SiderMenu(props) {
  var _props$menu2;
  var collapsed = props.collapsed,
    originCollapsed = props.originCollapsed,
    fixSiderbar = props.fixSiderbar,
    menuFooterRender = props.menuFooterRender,
    _onCollapse = props.onCollapse,
    theme = props.theme,
    siderWidth = props.siderWidth,
    isMobile = props.isMobile,
    onMenuHeaderClick = props.onMenuHeaderClick,
    _props$breakpoint = props.breakpoint,
    breakpoint = _props$breakpoint === void 0 ? 'lg' : _props$breakpoint,
    style = props.style,
    layout = props.layout,
    _props$menuExtraRende = props.menuExtraRender,
    menuExtraRender = _props$menuExtraRende === void 0 ? false : _props$menuExtraRende,
    links = props.links,
    menuContentRender = props.menuContentRender,
    collapsedButtonRender = props.collapsedButtonRender,
    prefixCls = props.prefixCls,
    avatarProps = props.avatarProps,
    rightContentRender = props.rightContentRender,
    actionsRender = props.actionsRender,
    onOpenChange = props.onOpenChange,
    stylish = props.stylish,
    logoStyle = props.logoStyle;
  var _useContext = (0,react.useContext)(es/* ProProvider */.L_),
    hashId = _useContext.hashId;
  var showSiderExtraDom = (0,react.useMemo)(function () {
    if (isMobile) return false;
    if (layout === 'mix') return false;
    return true;
  }, [isMobile, layout]);
  var baseClassName = "".concat(prefixCls, "-sider");

  // 收起的宽度
  var collapsedWidth = 64;

  // 之所以这样写是为了提升样式优先级，不然会被sider 自带的覆盖掉
  var stylishClassName = useStylish("".concat(baseClassName, ".").concat(baseClassName, "-stylish"), {
    stylish: stylish,
    proLayoutCollapsedWidth: collapsedWidth
  });
  var siderClassName = classnames_default()("".concat(baseClassName), hashId, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-fixed"), fixSiderbar), "".concat(baseClassName, "-fixed-mix"), layout === 'mix' && !isMobile && fixSiderbar), "".concat(baseClassName, "-collapsed"), props.collapsed), "".concat(baseClassName, "-layout-").concat(layout), layout && !isMobile), "".concat(baseClassName, "-light"), theme !== 'dark'), "".concat(baseClassName, "-mix"), layout === 'mix' && !isMobile), "".concat(baseClassName, "-stylish"), !!stylish));
  var headerDom = renderLogoAndTitle(props);
  var extraDom = menuExtraRender && menuExtraRender(props);
  var menuDom = (0,react.useMemo)(function () {
    return menuContentRender !== false && /*#__PURE__*/(0,react.createElement)(BaseMenu, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      key: "base-menu",
      mode: collapsed && !isMobile ? 'vertical' : 'inline',
      handleOpenChange: onOpenChange,
      style: {
        width: '100%'
      },
      className: "".concat(baseClassName, "-menu ").concat(hashId).trim()
    }));
  }, [baseClassName, hashId, menuContentRender, onOpenChange, props]);
  var linksMenuItems = (links || []).map(function (node, index) {
    return {
      className: "".concat(baseClassName, "-link"),
      label: node,
      key: index
    };
  });
  var menuRenderDom = (0,react.useMemo)(function () {
    return menuContentRender ? menuContentRender(props, menuDom) : menuDom;
  }, [menuContentRender, menuDom, props]);
  var avatarDom = (0,react.useMemo)(function () {
    if (!avatarProps) return null;
    var title = avatarProps.title,
      render = avatarProps.render,
      rest = (0,objectWithoutProperties/* default */.Z)(avatarProps, SiderMenu_excluded);
    var dom = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "".concat(baseClassName, "-actions-avatar"),
      children: [rest !== null && rest !== void 0 && rest.src || rest !== null && rest !== void 0 && rest.srcSet || rest.icon || rest.children ? /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, (0,objectSpread2/* default */.Z)({
        size: 28
      }, rest)) : null, avatarProps.title && !collapsed && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: title
      })]
    });
    if (render) {
      return render(avatarProps, dom, props);
    }
    return dom;
  }, [avatarProps, baseClassName, collapsed]);
  var actionsDom = (0,react.useMemo)(function () {
    if (!actionsRender) return null;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
      align: "center",
      size: 4,
      direction: collapsed ? 'vertical' : 'horizontal',
      className: classnames_default()(["".concat(baseClassName, "-actions-list"), collapsed && "".concat(baseClassName, "-actions-list-collapsed"), hashId]),
      children: [actionsRender === null || actionsRender === void 0 ? void 0 : actionsRender(props)].flat(1).map(function (item, index) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(baseClassName, "-actions-list-item ").concat(hashId).trim(),
          children: item
        }, index);
      })
    });
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [actionsRender, baseClassName, collapsed]);
  var appsDom = (0,react.useMemo)(function () {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(AppsLogoComponents, {
      onItemClick: props.itemClick,
      appListRender: props.appListRender,
      appList: props.appList,
      prefixCls: props.prefixCls
    });
  }, [props.appList, props.appListRender, props.prefixCls]);
  var collapsedDom = (0,react.useMemo)(function () {
    if (collapsedButtonRender === false) return null;
    var dom = /*#__PURE__*/(0,jsx_runtime.jsx)(CollapsedIcon, {
      isMobile: isMobile,
      collapsed: originCollapsed,
      className: "".concat(baseClassName, "-collapsed-button"),
      onClick: function onClick() {
        _onCollapse === null || _onCollapse === void 0 || _onCollapse(!originCollapsed);
      }
    });
    if (collapsedButtonRender) return collapsedButtonRender(collapsed, dom);
    return dom;
  }, [collapsedButtonRender, isMobile, originCollapsed, baseClassName, collapsed, _onCollapse]);

  /** 操作区域的dom */
  var actionAreaDom = (0,react.useMemo)(function () {
    if (!avatarDom && !actionsDom) return null;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()("".concat(baseClassName, "-actions"), hashId, collapsed && "".concat(baseClassName, "-actions-collapsed")),
      children: [avatarDom, actionsDom]
    });
  }, [actionsDom, avatarDom, baseClassName, collapsed, hashId]);

  /* Using the useMemo hook to create a CSS class that will hide the menu when the menu is collapsed. */
  var hideMenuWhenCollapsedClassName = (0,react.useMemo)(function () {
    var _props$menu;
    // 收起时完全隐藏菜单
    if (props !== null && props !== void 0 && (_props$menu = props.menu) !== null && _props$menu !== void 0 && _props$menu.hideMenuWhenCollapsed && collapsed) {
      return "".concat(baseClassName, "-hide-menu-collapsed");
    }
    return null;
  }, [baseClassName, collapsed, props === null || props === void 0 || (_props$menu2 = props.menu) === null || _props$menu2 === void 0 ? void 0 : _props$menu2.hideMenuWhenCollapsed]);
  var menuFooterDom = menuFooterRender && (menuFooterRender === null || menuFooterRender === void 0 ? void 0 : menuFooterRender(props));
  var menuDomItems = /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [headerDom && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()([classnames_default()("".concat(baseClassName, "-logo"), hashId, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-logo-collapsed"), collapsed))]),
      onClick: showSiderExtraDom ? onMenuHeaderClick : undefined,
      id: "logo",
      style: logoStyle,
      children: [headerDom, appsDom]
    }), extraDom && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: classnames_default()(["".concat(baseClassName, "-extra"), !headerDom && "".concat(baseClassName, "-extra-no-logo"), hashId]),
      children: extraDom
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden'
      },
      children: menuRenderDom
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(SiderContext.Provider, {
      value: {},
      children: [links ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "".concat(baseClassName, "-links ").concat(hashId).trim(),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_menu/* default */.Z, {
          inlineIndent: 16,
          className: "".concat(baseClassName, "-link-menu ").concat(hashId).trim(),
          selectedKeys: [],
          openKeys: [],
          theme: theme,
          mode: "inline",
          items: linksMenuItems
        })
      }) : null, showSiderExtraDom && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [actionAreaDom, !actionsDom && rightContentRender ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: classnames_default()("".concat(baseClassName, "-actions"), hashId, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-actions-collapsed"), collapsed)),
          children: rightContentRender === null || rightContentRender === void 0 ? void 0 : rightContentRender(props)
        }) : null]
      }), menuFooterDom && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: classnames_default()(["".concat(baseClassName, "-footer"), hashId, (0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-footer-collapsed"), collapsed)]),
        children: menuFooterDom
      })]
    })]
  });
  return stylishClassName.wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [fixSiderbar && !isMobile && !hideMenuWhenCollapsedClassName && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: (0,objectSpread2/* default */.Z)({
        width: collapsed ? collapsedWidth : siderWidth,
        overflow: 'hidden',
        flex: "0 0 ".concat(collapsed ? collapsedWidth : siderWidth, "px"),
        maxWidth: collapsed ? collapsedWidth : siderWidth,
        minWidth: collapsed ? collapsedWidth : siderWidth,
        transition: 'all 0.2s ease 0s'
      }, style)
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Sider, {
      collapsible: true,
      trigger: null,
      collapsed: collapsed,
      breakpoint: breakpoint === false ? undefined : breakpoint,
      onCollapse: function onCollapse(collapse) {
        if (isMobile) return;
        _onCollapse === null || _onCollapse === void 0 || _onCollapse(collapse);
      },
      collapsedWidth: collapsedWidth,
      style: style,
      theme: theme,
      width: siderWidth,
      className: classnames_default()(siderClassName, hashId, hideMenuWhenCollapsedClassName),
      children: [hideMenuWhenCollapsedClassName ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "".concat(baseClassName, "-hide-when-collapsed ").concat(hashId).trim(),
        style: {
          height: '100%',
          width: '100%',
          opacity: hideMenuWhenCollapsedClassName ? 0 : 1
        },
        children: menuDomItems
      }) : menuDomItems, collapsedDom]
    })]
  }));
};

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-utils@2.17.0_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@_ftolbhh2rvo5cbykfdwocfesei/node_modules/@ant-design/pro-utils/es/hooks/useDebounceFn/index.js
var useDebounceFn = __webpack_require__(67902);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-resize-observer@1.4.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-resize-observer/es/index.js + 5 modules
var rc_resize_observer_es = __webpack_require__(68050);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/GlobalHeader/rightContentStyle.js



var genTopNavHeaderStyle = function genTopNavHeaderStyle(token) {
  var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5;
  return (0,defineProperty/* default */.Z)({}, token.componentCls, {
    '&-header-actions': {
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      '&-item': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBlock: 0,
        paddingInline: 2,
        color: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextRightActionsItem,
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: token.borderRadius,
        '> *': {
          paddingInline: 6,
          paddingBlock: 6,
          borderRadius: token.borderRadius,
          '&:hover': {
            backgroundColor: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorBgRightActionsItemHover
          }
        }
      },
      '&-avatar': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingInlineStart: token.padding,
        paddingInlineEnd: token.padding,
        cursor: 'pointer',
        color: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorTextRightActionsItem,
        '> div': {
          height: '44px',
          color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextRightActionsItem,
          paddingInline: 8,
          paddingBlock: 8,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          lineHeight: '44px',
          borderRadius: token.borderRadius,
          '&:hover': {
            backgroundColor: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.header) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgRightActionsItemHover
          }
        }
      }
    }
  });
};
function rightContentStyle_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('ProLayoutRightContent', function (token) {
    var proToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genTopNavHeaderStyle(proToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/GlobalHeader/ActionsContent.js






var ActionsContent_excluded = ["rightContentRender", "avatarProps", "actionsRender", "headerContentRender"],
  _excluded2 = ["title", "render"];






/**
 * 抽离出来是为了防止 rightSize 经常改变导致菜单 render
 *
 * @param param0
 */



var ActionsContent = function ActionsContent(_ref) {
  var rightContentRender = _ref.rightContentRender,
    avatarProps = _ref.avatarProps,
    actionsRender = _ref.actionsRender,
    headerContentRender = _ref.headerContentRender,
    props = (0,objectWithoutProperties/* default */.Z)(_ref, ActionsContent_excluded);
  var _useContext = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = "".concat(getPrefixCls(), "-pro-global-header");
  var _useStyle = rightContentStyle_useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useState = (0,react.useState)('auto'),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    rightSize = _useState2[0],
    setRightSize = _useState2[1];
  var avatarDom = (0,react.useMemo)(function () {
    if (!avatarProps) return null;
    var title = avatarProps.title,
      render = avatarProps.render,
      rest = (0,objectWithoutProperties/* default */.Z)(avatarProps, _excluded2);
    var domList = [rest !== null && rest !== void 0 && rest.src || rest !== null && rest !== void 0 && rest.srcSet || rest.icon || rest.children ? /*#__PURE__*/(0,react.createElement)(avatar/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, rest), {}, {
      size: 28,
      key: "avatar"
    })) : null, title ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      style: {
        marginInlineStart: 8
      },
      children: title
    }, "name") : undefined];
    if (render) {
      return render(avatarProps, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: domList
      }), props);
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: domList
    });
  }, [avatarProps]);
  var rightActionsRender = actionsRender || avatarDom ? function (restParams) {
    var doms = actionsRender && (actionsRender === null || actionsRender === void 0 ? void 0 : actionsRender(restParams));
    if (!doms && !avatarDom) return null;
    if (!Array.isArray(doms)) return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "".concat(prefixCls, "-header-actions ").concat(hashId).trim(),
      children: [doms, avatarDom && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "".concat(prefixCls, "-header-actions-avatar ").concat(hashId).trim(),
        children: avatarDom
      })]
    }));
    return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "".concat(prefixCls, "-header-actions ").concat(hashId).trim(),
      children: [doms.filter(Boolean).map(function (dom, index) {
        var hideHover = false;
        // 如果配置了 hideHover 就不展示 hover 效果了
        if ( /*#__PURE__*/react.isValidElement(dom)) {
          var _dom$props;
          hideHover = !!(dom !== null && dom !== void 0 && (_dom$props = dom.props) !== null && _dom$props !== void 0 && _dom$props['aria-hidden']);
        }
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: classnames_default()("".concat(prefixCls, "-header-actions-item ").concat(hashId), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-header-actions-hover"), !hideHover)),
          children: dom
        }, index);
      }), avatarDom && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "".concat(prefixCls, "-header-actions-avatar ").concat(hashId).trim(),
        children: avatarDom
      })]
    }));
  } : undefined;
  /** 减少一下渲染的次数 */
  var setRightSizeDebounceFn = (0,useDebounceFn/* useDebounceFn */.D)( /*#__PURE__*/function () {
    var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(width) {
      return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setRightSize(width);
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), 160);
  var contentRender = rightActionsRender || rightContentRender;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "".concat(prefixCls, "-right-content ").concat(hashId).trim(),
    style: {
      minWidth: rightSize,
      height: '100%'
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        height: '100%'
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(rc_resize_observer_es/* default */.Z, {
        onResize: function onResize(_ref3) {
          var width = _ref3.width;
          setRightSizeDebounceFn.run(width);
        },
        children: contentRender ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'flex-end'
          },
          children: contentRender((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
            // 测试专用
            //@ts-ignore
            rightContentSize: rightSize
          }))
        }) : null
      })
    })
  });
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/TopNavHeader/style.js



var style_genTopNavHeaderStyle = function genTopNavHeaderStyle(token) {
  var _token$layout, _token$layout2;
  return (0,defineProperty/* default */.Z)({}, token.componentCls, {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    '.anticon': {
      color: 'inherit'
    },
    '&-main': {
      display: 'flex',
      height: '100%',
      paddingInlineStart: '16px',
      '&-left': (0,defineProperty/* default */.Z)({
        display: 'flex',
        alignItems: 'center'
      }, "".concat(token.proComponentsCls, "-layout-apps-icon"), {
        marginInlineEnd: 16,
        marginInlineStart: -8
      })
    },
    '&-wide': {
      maxWidth: 1152,
      margin: '0 auto'
    },
    '&-logo': {
      position: 'relative',
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      overflow: 'hidden',
      '> *:first-child': {
        display: 'flex',
        alignItems: 'center',
        minHeight: '22px',
        fontSize: '22px'
      },
      '> *:first-child > img': {
        display: 'inline-block',
        height: '32px',
        verticalAlign: 'middle'
      },
      '> *:first-child > h1': {
        display: 'inline-block',
        marginBlock: 0,
        marginInline: 0,
        lineHeight: '24px',
        marginInlineStart: 6,
        fontWeight: '600',
        fontSize: '16px',
        color: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.colorHeaderTitle,
        verticalAlign: 'top'
      }
    },
    '&-menu': {
      minWidth: 0,
      display: 'flex',
      alignItems: 'center',
      paddingInline: 6,
      paddingBlock: 6,
      lineHeight: "".concat(Math.max((((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.heightLayoutHeader) || 56) - 12, 40), "px")
    }
  });
};
function TopNavHeader_style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('ProLayoutTopNavHeader', function (token) {
    var topNavHeaderToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [style_genTopNavHeaderStyle(topNavHeaderToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/TopNavHeader/index.js














var TopNavHeader = function TopNavHeader(props) {
  var _token$layout13, _token$layout14, _token$layout15, _token$layout16, _token$layout17, _token$layout18, _token$layout19;
  var ref = (0,react.useRef)(null);
  var onMenuHeaderClick = props.onMenuHeaderClick,
    contentWidth = props.contentWidth,
    rightContentRender = props.rightContentRender,
    propsClassName = props.className,
    style = props.style,
    headerContentRender = props.headerContentRender,
    layout = props.layout,
    actionsRender = props.actionsRender;
  var _useContext = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var _useContext2 = (0,react.useContext)(es/* ProProvider */.L_),
    dark = _useContext2.dark;
  var prefixCls = "".concat(props.prefixCls || getPrefixCls('pro'), "-top-nav-header");
  var _useStyle = TopNavHeader_style_useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var renderKey = undefined;
  if (props.menuHeaderRender !== undefined) {
    renderKey = 'menuHeaderRender';
  } else if (layout === 'mix' || layout === 'top') {
    renderKey = 'headerTitleRender';
  }
  var headerDom = renderLogoAndTitle((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    collapsed: false
  }), renderKey);
  var _useContext3 = (0,react.useContext)(es/* ProProvider */.L_),
    token = _useContext3.token;
  var contentDom = (0,react.useMemo)(function () {
    var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _token$layout6, _token$layout7, _token$layout8, _token$layout9, _token$layout10, _token$layout11, _token$layout12, _props$menuProps;
    var defaultDom = /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP // @ts-ignore
    , {
      theme: {
        hashed: (0,es/* isNeedOpenHash */.nu)(),
        components: {
          Layout: {
            headerBg: 'transparent',
            bodyBg: 'transparent'
          },
          Menu: (0,objectSpread2/* default */.Z)({}, coverToNewToken({
            colorItemBg: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.colorBgHeader) || 'transparent',
            colorSubItemBg: ((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorBgHeader) || 'transparent',
            radiusItem: token.borderRadius,
            colorItemBgSelected: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
            itemHoverBg: ((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorBgMenuItemHover) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
            colorItemBgSelectedHorizontal: ((_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.header) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
            colorActiveBarWidth: 0,
            colorActiveBarHeight: 0,
            colorActiveBarBorderSize: 0,
            colorItemText: ((_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.header) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.colorTextMenu) || (token === null || token === void 0 ? void 0 : token.colorTextSecondary),
            colorItemTextHoverHorizontal: ((_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.header) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.colorTextMenuActive) || (token === null || token === void 0 ? void 0 : token.colorText),
            colorItemTextSelectedHorizontal: ((_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.header) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.colorTextMenuSelected) || (token === null || token === void 0 ? void 0 : token.colorTextBase),
            horizontalItemBorderRadius: 4,
            colorItemTextHover: ((_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.header) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.colorTextMenuActive) || 'rgba(0, 0, 0, 0.85)',
            horizontalItemHoverBg: ((_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.header) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.colorBgMenuItemHover) || 'rgba(0, 0, 0, 0.04)',
            colorItemTextSelected: ((_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.header) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.colorTextMenuSelected) || 'rgba(0, 0, 0, 1)',
            popupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
            subMenuItemBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
            darkSubMenuItemBg: 'transparent',
            darkPopupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated
          }))
        },
        token: {
          colorBgElevated: ((_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.header) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.colorBgHeader) || 'transparent'
        }
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(BaseMenu, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
        theme: dark ? 'dark' : 'light'
      }, props), {}, {
        className: "".concat(prefixCls, "-base-menu ").concat(hashId).trim()
      }, props.menuProps), {}, {
        style: (0,objectSpread2/* default */.Z)({
          width: '100%'
        }, (_props$menuProps = props.menuProps) === null || _props$menuProps === void 0 ? void 0 : _props$menuProps.style),
        collapsed: false,
        menuRenderType: "header",
        mode: "horizontal"
      }))
    });
    if (headerContentRender) {
      return headerContentRender(props, defaultDom);
    }
    return defaultDom;
  }, [(_token$layout13 = token.layout) === null || _token$layout13 === void 0 || (_token$layout13 = _token$layout13.header) === null || _token$layout13 === void 0 ? void 0 : _token$layout13.colorBgHeader, (_token$layout14 = token.layout) === null || _token$layout14 === void 0 || (_token$layout14 = _token$layout14.header) === null || _token$layout14 === void 0 ? void 0 : _token$layout14.colorBgMenuItemSelected, (_token$layout15 = token.layout) === null || _token$layout15 === void 0 || (_token$layout15 = _token$layout15.header) === null || _token$layout15 === void 0 ? void 0 : _token$layout15.colorBgMenuItemHover, (_token$layout16 = token.layout) === null || _token$layout16 === void 0 || (_token$layout16 = _token$layout16.header) === null || _token$layout16 === void 0 ? void 0 : _token$layout16.colorTextMenu, (_token$layout17 = token.layout) === null || _token$layout17 === void 0 || (_token$layout17 = _token$layout17.header) === null || _token$layout17 === void 0 ? void 0 : _token$layout17.colorTextMenuActive, (_token$layout18 = token.layout) === null || _token$layout18 === void 0 || (_token$layout18 = _token$layout18.header) === null || _token$layout18 === void 0 ? void 0 : _token$layout18.colorTextMenuSelected, (_token$layout19 = token.layout) === null || _token$layout19 === void 0 || (_token$layout19 = _token$layout19.header) === null || _token$layout19 === void 0 ? void 0 : _token$layout19.colorBgMenuElevated, token.borderRadius, token === null || token === void 0 ? void 0 : token.colorBgTextHover, token === null || token === void 0 ? void 0 : token.colorTextSecondary, token === null || token === void 0 ? void 0 : token.colorText, token === null || token === void 0 ? void 0 : token.colorTextBase, token.colorBgElevated, dark, props, prefixCls, hashId, headerContentRender]);
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: classnames_default()(prefixCls, hashId, propsClassName, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-light"), true)),
    style: style,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      ref: ref,
      className: classnames_default()("".concat(prefixCls, "-main"), hashId, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-wide"), contentWidth === 'Fixed' && layout === 'top')),
      children: [headerDom && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: classnames_default()("".concat(prefixCls, "-main-left ").concat(hashId)),
        onClick: onMenuHeaderClick,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AppsLogoComponents, (0,objectSpread2/* default */.Z)({}, props)), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "".concat(prefixCls, "-logo ").concat(hashId).trim(),
          id: "logo",
          children: headerDom
        }, "logo")]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          flex: 1
        },
        className: "".concat(prefixCls, "-menu ").concat(hashId).trim(),
        children: contentDom
      }), (rightContentRender || actionsRender || props.avatarProps) && /*#__PURE__*/(0,jsx_runtime.jsx)(ActionsContent, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
        rightContentRender: rightContentRender
      }, props), {}, {
        prefixCls: prefixCls
      }))]
    })
  }));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/GlobalHeader/style.js



var genGlobalHeaderStyle = function genGlobalHeaderStyle(token) {
  var _token$layout, _token$layout2, _token$layout3;
  return (0,defineProperty/* default */.Z)({}, token.componentCls, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    position: 'relative',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    marginBlock: 0,
    marginInline: 16,
    height: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.heightLayoutHeader) || 56,
    boxSizing: 'border-box',
    '> a': {
      height: '100%'
    }
  }, "".concat(token.proComponentsCls, "-layout-apps-icon"), {
    marginInlineEnd: 16
  }), '&-collapsed-button', {
    minHeight: '22px',
    color: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorHeaderTitle,
    fontSize: '18px',
    marginInlineEnd: '16px'
  }), '&-logo', {
    position: 'relative',
    marginInlineEnd: '16px',
    a: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      minHeight: '22px',
      fontSize: '20px'
    },
    img: {
      height: '28px'
    },
    h1: {
      height: '32px',
      marginBlock: 0,
      marginInline: 0,
      marginInlineStart: 8,
      fontWeight: '600',
      color: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorHeaderTitle) || token.colorTextHeading,
      fontSize: '18px',
      lineHeight: '32px'
    },
    '&-mix': {
      display: 'flex',
      alignItems: 'center'
    }
  }), '&-logo-mobile', {
    minWidth: '24px',
    marginInlineEnd: 0
  }));
};
function GlobalHeader_style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('ProLayoutGlobalHeader', function (token) {
    var GlobalHeaderToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genGlobalHeaderStyle(GlobalHeaderToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/GlobalHeader/index.js















var GlobalHeader_renderLogo = function renderLogo(menuHeaderRender, logoDom) {
  if (menuHeaderRender === false) {
    return null;
  }
  if (menuHeaderRender) {
    return menuHeaderRender(logoDom, null);
  }
  return logoDom;
};
var GlobalHeader = function GlobalHeader(props) {
  var isMobile = props.isMobile,
    logo = props.logo,
    collapsed = props.collapsed,
    onCollapse = props.onCollapse,
    rightContentRender = props.rightContentRender,
    menuHeaderRender = props.menuHeaderRender,
    onMenuHeaderClick = props.onMenuHeaderClick,
    propClassName = props.className,
    style = props.style,
    layout = props.layout,
    children = props.children,
    splitMenus = props.splitMenus,
    menuData = props.menuData,
    prefixCls = props.prefixCls;
  var _useContext = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls,
    direction = _useContext.direction;
  var baseClassName = "".concat(prefixCls || getPrefixCls('pro'), "-global-header");
  var _useStyle = GlobalHeader_style_useStyle(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var className = classnames_default()(propClassName, baseClassName, hashId);
  if (layout === 'mix' && !isMobile && splitMenus) {
    var noChildrenMenuData = (menuData || []).map(function (item) {
      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
        children: undefined,
        routes: undefined
      });
    });
    var clearMenuData = clearMenuItem(noChildrenMenuData);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(TopNavHeader, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      mode: "horizontal"
    }, props), {}, {
      splitMenus: false,
      menuData: clearMenuData
    }));
  }
  var logoClassNames = classnames_default()("".concat(baseClassName, "-logo"), hashId, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-logo-rtl"), direction === 'rtl'), "".concat(baseClassName, "-logo-mix"), layout === 'mix'), "".concat(baseClassName, "-logo-mobile"), isMobile));
  var logoDom = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    className: logoClassNames,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      children: defaultRenderLogo(logo)
    })
  }, "logo");
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    style: (0,objectSpread2/* default */.Z)({}, style),
    children: [isMobile && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "".concat(baseClassName, "-collapsed-button ").concat(hashId).trim(),
      onClick: function onClick() {
        onCollapse === null || onCollapse === void 0 || onCollapse(!collapsed);
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(icons_MenuOutlined, {})
    }), isMobile && GlobalHeader_renderLogo(menuHeaderRender, logoDom), layout === 'mix' && !isMobile && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AppsLogoComponents, (0,objectSpread2/* default */.Z)({}, props)), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: logoClassNames,
        onClick: onMenuHeaderClick,
        children: renderLogoAndTitle((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
          collapsed: false
        }), 'headerTitleRender')
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        flex: 1
      },
      children: children
    }), (rightContentRender || props.actionsRender || props.avatarProps) && /*#__PURE__*/(0,jsx_runtime.jsx)(ActionsContent, (0,objectSpread2/* default */.Z)({
      rightContentRender: rightContentRender
    }, props))]
  }));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/Header/style/header.js



var genProLayoutHeaderStyle = function genProLayoutHeaderStyle(token) {
  var _token$layout, _token$layout2, _token$layout3, _token$layout4;
  return (0,defineProperty/* default */.Z)({}, "".concat(token.proComponentsCls, "-layout"), (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-layout-header").concat(token.componentCls), {
    height: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.heightLayoutHeader) || 56,
    lineHeight: "".concat(((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.heightLayoutHeader) || 56, "px"),
    // hitu 用了这个属性，不能删除哦 @南取
    zIndex: 19,
    width: '100%',
    paddingBlock: 0,
    paddingInline: 0,
    borderBlockEnd: "1px solid ".concat(token.colorSplit),
    backgroundColor: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorBgHeader) || 'rgba(255, 255, 255, 0.4)',
    WebkitBackdropFilter: 'blur(8px)',
    backdropFilter: 'blur(8px)',
    transition: 'background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
    '&-fixed-header': {
      position: 'fixed',
      insetBlockStart: 0,
      width: '100%',
      zIndex: 100,
      insetInlineEnd: 0
    },
    '&-fixed-header-scroll': {
      backgroundColor: ((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorBgScrollHeader) || 'rgba(255, 255, 255, 0.8)'
    },
    '&-header-actions': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '16',
      cursor: 'pointer',
      '& &-item': {
        paddingBlock: 0,
        paddingInline: 8,
        '&:hover': {
          color: token.colorText
        }
      }
    },
    '&-header-realDark': {
      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 65%)'
    },
    '&-header-actions-header-action': {
      transition: 'width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
    }
  }));
};
function header_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('ProLayoutHeader', function (token) {
    var ProLayoutHeaderToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProLayoutHeaderStyle(ProLayoutHeaderToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/Header/style/stylish.js



function stylish_useStylish(prefixCls, _ref) {
  var stylish = _ref.stylish,
    proLayoutCollapsedWidth = _ref.proLayoutCollapsedWidth;
  return (0,useStyle/* useStyle */.Xj)('ProLayoutHeaderStylish', function (token) {
    var stylishToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls),
      proLayoutCollapsedWidth: proLayoutCollapsedWidth
    });
    if (!stylish) return [];
    return [(0,defineProperty/* default */.Z)({}, "div".concat(token.proComponentsCls, "-layout"), (0,defineProperty/* default */.Z)({}, "".concat(stylishToken.componentCls), stylish === null || stylish === void 0 ? void 0 : stylish(stylishToken)))];
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/Header/index.js















var Header = layout/* default */.Z.Header;
var DefaultHeader = function DefaultHeader(props) {
  var _token$layout2, _token$layout3, _token$layout4;
  var isMobile = props.isMobile,
    fixedHeader = props.fixedHeader,
    propsClassName = props.className,
    style = props.style,
    collapsed = props.collapsed,
    prefixCls = props.prefixCls,
    onCollapse = props.onCollapse,
    layout = props.layout,
    headerRender = props.headerRender,
    headerContentRender = props.headerContentRender;
  var _useContext = (0,react.useContext)(es/* ProProvider */.L_),
    token = _useContext.token;
  var context = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext);
  var _useState = (0,react.useState)(false),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    isFixedHeaderScroll = _useState2[0],
    setIsFixedHeaderScroll = _useState2[1];
  var needFixedHeader = fixedHeader || layout === 'mix';
  var renderContent = (0,react.useCallback)(function () {
    var isTop = layout === 'top';
    var clearMenuData = clearMenuItem(props.menuData || []);
    var defaultDom = /*#__PURE__*/(0,jsx_runtime.jsx)(GlobalHeader, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      onCollapse: onCollapse
    }, props), {}, {
      menuData: clearMenuData,
      children: headerContentRender && headerContentRender(props, null)
    }));
    if (isTop && !isMobile) {
      defaultDom = /*#__PURE__*/(0,jsx_runtime.jsx)(TopNavHeader, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
        mode: "horizontal",
        onCollapse: onCollapse
      }, props), {}, {
        menuData: clearMenuData
      }));
    }
    if (headerRender && typeof headerRender === 'function') {
      return headerRender(props, defaultDom);
    }
    return defaultDom;
  }, [headerContentRender, headerRender, isMobile, layout, onCollapse, props]);
  (0,react.useEffect)(function () {
    var _context$getTargetCon;
    var dom = (context === null || context === void 0 || (_context$getTargetCon = context.getTargetContainer) === null || _context$getTargetCon === void 0 ? void 0 : _context$getTargetCon.call(context)) || document.body;
    var isFixedHeaderFn = function isFixedHeaderFn() {
      var _token$layout;
      var scrollTop = dom.scrollTop;
      if (scrollTop > (((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.heightLayoutHeader) || 56) && !isFixedHeaderScroll) {
        setIsFixedHeaderScroll(true);
        return true;
      }
      if (isFixedHeaderScroll) {
        setIsFixedHeaderScroll(false);
      }
      return false;
    };
    if (!needFixedHeader) return;
    if (typeof window === 'undefined') return;
    dom.addEventListener('scroll', isFixedHeaderFn, {
      passive: true
    });
    return function () {
      dom.removeEventListener('scroll', isFixedHeaderFn);
    };
  }, [(_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.heightLayoutHeader, needFixedHeader, isFixedHeaderScroll]);
  var isTop = layout === 'top';
  var baseClassName = "".concat(prefixCls, "-layout-header");
  var _useStyle = header_useStyle(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var stylish = stylish_useStylish("".concat(baseClassName, ".").concat(baseClassName, "-stylish"), {
    proLayoutCollapsedWidth: 64,
    stylish: props.stylish
  });
  var className = classnames_default()(propsClassName, hashId, baseClassName, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-fixed-header"), needFixedHeader), "".concat(baseClassName, "-fixed-header-scroll"), isFixedHeaderScroll), "".concat(baseClassName, "-mix"), layout === 'mix'), "".concat(baseClassName, "-fixed-header-action"), !collapsed), "".concat(baseClassName, "-top-menu"), isTop), "".concat(baseClassName, "-header"), true), "".concat(baseClassName, "-stylish"), !!props.stylish));
  if (layout === 'side' && !isMobile) return null;
  return stylish.wrapSSR(wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(config_provider/* default */.ZP
    // @ts-ignore
    , {
      theme: {
        hashed: (0,es/* isNeedOpenHash */.nu)(),
        components: {
          Layout: {
            headerBg: 'transparent',
            bodyBg: 'transparent'
          }
        }
      },
      children: [needFixedHeader && /*#__PURE__*/(0,jsx_runtime.jsx)(Header, {
        style: (0,objectSpread2/* default */.Z)({
          height: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.heightLayoutHeader) || 56,
          lineHeight: "".concat(((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.heightLayoutHeader) || 56, "px"),
          backgroundColor: 'transparent',
          zIndex: 19
        }, style)
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Header, {
        className: className,
        style: style,
        children: renderContent()
      })]
    })
  })));
};

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/spin/index.js + 6 modules
var spin = __webpack_require__(98042);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/PageLoading/index.js


var PageLoading_excluded = ["isLoading", "pastDelay", "timedOut", "error", "retry"];



var PageLoading = function PageLoading(_ref) {
  var isLoading = _ref.isLoading,
    pastDelay = _ref.pastDelay,
    timedOut = _ref.timedOut,
    error = _ref.error,
    retry = _ref.retry,
    reset = (0,objectWithoutProperties/* default */.Z)(_ref, PageLoading_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    style: {
      paddingBlockStart: 100,
      textAlign: 'center'
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, (0,objectSpread2/* default */.Z)({
      size: "large"
    }, reset))
  });
};

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/drawer/index.js + 9 modules
var drawer = __webpack_require__(5840);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.23.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var cssinjs_es = __webpack_require__(55921);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/SiderMenu/style/index.js




var proLayoutTitleHide = new cssinjs_es/* Keyframes */.E4('antBadgeLoadingCircle', {
  '0%': {
    display: 'none',
    opacity: 0,
    overflow: 'hidden'
  },
  '80%': {
    overflow: 'hidden'
  },
  '100%': {
    display: 'unset',
    opacity: 1
  }
});
var style_genSiderMenuStyle = function genSiderMenuStyle(token) {
  var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _token$layout6, _token$layout7, _token$layout8, _token$layout9, _token$layout10, _token$layout11, _token$layout12;
  return (0,defineProperty/* default */.Z)({}, "".concat(token.proComponentsCls, "-layout"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-layout-sider").concat(token.componentCls), {
    background: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorMenuBackground) || 'transparent'
  }), token.componentCls, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    position: 'relative',
    boxSizing: 'border-box',
    '&-menu': {
      position: 'relative',
      zIndex: 10,
      minHeight: '100%'
    }
  }, "& ".concat(token.antCls, "-layout-sider-children"), {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingInline: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.paddingInlineLayoutMenu,
    paddingBlock: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.paddingBlockLayoutMenu,
    borderInlineEnd: "1px solid ".concat(token.colorSplit),
    marginInlineEnd: -1
  }), "".concat(token.antCls, "-menu"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item-group-title"), {
    fontSize: token.fontSizeSM,
    paddingBottom: 4
  }), "".concat(token.antCls, "-menu-item:not(").concat(token.antCls, "-menu-item-selected):hover"), {
    color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.sider) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextMenuItemHover
  })), '&-logo', {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingInline: 12,
    paddingBlock: 16,
    color: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.sider) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorTextMenu,
    cursor: 'pointer',
    borderBlockEnd: "1px solid ".concat((_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.sider) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.colorMenuItemDivider),
    '> a': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 22,
      fontSize: 22,
      '> img': {
        display: 'inline-block',
        height: 22,
        verticalAlign: 'middle'
      },
      '> h1': {
        display: 'inline-block',
        height: 22,
        marginBlock: 0,
        marginInlineEnd: 0,
        marginInlineStart: 6,
        color: (_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.sider) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.colorTextMenuTitle,
        animationName: proLayoutTitleHide,
        animationDuration: '.4s',
        animationTimingFunction: 'ease',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: '22px',
        verticalAlign: 'middle'
      }
    },
    '&-collapsed': (0,defineProperty/* default */.Z)({
      flexDirection: 'column-reverse',
      margin: 0,
      padding: 12
    }, "".concat(token.proComponentsCls, "-layout-apps-icon"), {
      marginBlockEnd: 8,
      fontSize: 16,
      transition: 'font-size 0.2s ease-in-out,color 0.2s ease-in-out'
    })
  }), '&-actions', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBlock: 4,
    marginInline: 0,
    color: (_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.sider) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.colorTextMenu,
    '&-collapsed': {
      flexDirection: 'column-reverse',
      paddingBlock: 0,
      paddingInline: 8,
      fontSize: 16,
      transition: 'font-size 0.3s ease-in-out'
    },
    '&-list': {
      color: (_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.sider) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.colorTextMenuSecondary,
      '&-collapsed': {
        marginBlockEnd: 8,
        animationName: 'none'
      },
      '&-item': {
        paddingInline: 6,
        paddingBlock: 6,
        lineHeight: '16px',
        fontSize: 16,
        cursor: 'pointer',
        borderRadius: token.borderRadius,
        '&:hover': {
          background: token.colorBgTextHover
        }
      }
    },
    '&-avatar': {
      fontSize: 14,
      paddingInline: 8,
      paddingBlock: 8,
      display: 'flex',
      alignItems: 'center',
      gap: token.marginXS,
      borderRadius: token.borderRadius,
      '& *': {
        cursor: 'pointer'
      },
      '&:hover': {
        background: token.colorBgTextHover
      }
    }
  }), '&-hide-menu-collapsed', {
    insetInlineStart: "-".concat(token.proLayoutCollapsedWidth - 12, "px"),
    position: 'absolute'
  }), '&-extra', {
    marginBlockEnd: 16,
    marginBlock: 0,
    marginInline: 16,
    '&-no-logo': {
      marginBlockStart: 16
    }
  }), '&-links', {
    width: '100%',
    ul: {
      height: 'auto'
    }
  }), '&-link-menu', {
    border: 'none',
    boxShadow: 'none',
    background: 'transparent'
  }), '&-footer', {
    color: (_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.sider) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.colorTextMenuSecondary,
    paddingBlockEnd: 16,
    fontSize: token.fontSize,
    animationName: proLayoutTitleHide,
    animationDuration: '.4s',
    animationTimingFunction: 'ease'
  })), "".concat(token.componentCls).concat(token.componentCls, "-fixed"), {
    position: 'fixed',
    insetBlockStart: 0,
    insetInlineStart: 0,
    zIndex: '100',
    height: '100%',
    '&-mix': {
      height: "calc(100% - ".concat(((_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.header) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.heightLayoutHeader) || 56, "px)"),
      insetBlockStart: "".concat(((_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.header) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.heightLayoutHeader) || 56, "px")
    }
  }));
};
function SiderMenu_style_useStyle(prefixCls, _ref2) {
  var proLayoutCollapsedWidth = _ref2.proLayoutCollapsedWidth;
  return (0,useStyle/* useStyle */.Xj)('ProLayoutSiderMenu', function (token) {
    var siderMenuToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls),
      proLayoutCollapsedWidth: proLayoutCollapsedWidth
    });
    return [style_genSiderMenuStyle(siderMenuToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/components/SiderMenu/index.js










var SiderMenuWrapper = function SiderMenuWrapper(props) {
  var _token$layout;
  var isMobile = props.isMobile,
    siderWidth = props.siderWidth,
    collapsed = props.collapsed,
    onCollapse = props.onCollapse,
    style = props.style,
    className = props.className,
    hide = props.hide,
    prefixCls = props.prefixCls,
    getContainer = props.getContainer;
  var _useContext = (0,react.useContext)(es/* ProProvider */.L_),
    token = _useContext.token;
  (0,react.useEffect)(function () {
    if (isMobile === true) {
      onCollapse === null || onCollapse === void 0 || onCollapse(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);
  var omitProps = (0,omit/* default */.Z)(props, ['className', 'style']);
  var _React$useContext = react.useContext(config_provider/* default.ConfigContext */.ZP.ConfigContext),
    direction = _React$useContext.direction;
  var _useStyle = SiderMenu_style_useStyle("".concat(prefixCls, "-sider"), {
      proLayoutCollapsedWidth: 64
    }),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var siderClassName = classnames_default()("".concat(prefixCls, "-sider"), className, hashId);
  if (hide) {
    return null;
  }
  var drawerOpenProps = (0,openVisibleCompatible/* openVisibleCompatible */.X)(!collapsed, function () {
    return onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(true);
  });
  return wrapSSR(isMobile ? /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    placement: direction === 'rtl' ? 'right' : 'left',
    className: classnames_default()("".concat(prefixCls, "-drawer-sider"), className)
  }, drawerOpenProps), {}, {
    style: (0,objectSpread2/* default */.Z)({
      padding: 0,
      height: '100vh'
    }, style),
    onClose: function onClose() {
      onCollapse === null || onCollapse === void 0 || onCollapse(true);
    },
    maskClosable: true,
    closable: false,
    getContainer: getContainer || false,
    width: siderWidth,
    styles: {
      body: {
        height: '100vh',
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorMenuBackground
      }
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(SiderMenu, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, omitProps), {}, {
      isMobile: true,
      className: siderClassName,
      collapsed: isMobile ? false : collapsed,
      splitMenus: false,
      originCollapsed: collapsed
    }))
  })) : /*#__PURE__*/(0,jsx_runtime.jsx)(SiderMenu, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    className: siderClassName,
    originCollapsed: collapsed
  }, omitProps), {}, {
    style: style
  })));
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/context/RouteContext.js

var RouteContext = /*#__PURE__*/(0,react.createContext)({});
// EXTERNAL MODULE: ./node_modules/.pnpm/path-to-regexp@8.2.0/node_modules/path-to-regexp/dist/index.js
var dist = __webpack_require__(97406);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/getPageTitle.js


var matchParamsPath = function matchParamsPath(pathname, breadcrumb, breadcrumbMap) {
  // Internal logic use breadcrumbMap to ensure the order
  // 内部逻辑使用 breadcrumbMap 来确保查询顺序
  if (breadcrumbMap) {
    var pathKey = (0,toConsumableArray/* default */.Z)(breadcrumbMap.keys()).find(function (key) {
      try {
        if (key.startsWith('http')) {
          return false;
        }
        return (0,dist/* match */.EQ)(key)(pathname);
      } catch (error) {
        console.log('key', key, error);
        return false;
      }
    });
    if (pathKey) {
      return breadcrumbMap.get(pathKey);
    }
  }

  // External uses use breadcrumb
  // 外部用户使用 breadcrumb 参数
  if (breadcrumb) {
    var _pathKey = Object.keys(breadcrumb).find(function (key) {
      try {
        if (key !== null && key !== void 0 && key.startsWith('http')) {
          return false;
        }
        return (0,dist/* match */.EQ)(key)(pathname);
      } catch (error) {
        console.log('key', key, error);
        return false;
      }
    });
    if (_pathKey) {
      return breadcrumb[_pathKey];
    }
  }
  return {
    path: ''
  };
};
/**
 * 获取关于 pageTitle 的所有信息方便包装
 *
 * @param props
 * @param ignoreTitle
 */
var getPageTitleInfo = function getPageTitleInfo(props, ignoreTitle) {
  var _props$pathname = props.pathname,
    pathname = _props$pathname === void 0 ? '/' : _props$pathname,
    breadcrumb = props.breadcrumb,
    breadcrumbMap = props.breadcrumbMap,
    formatMessage = props.formatMessage,
    title = props.title,
    _props$menu = props.menu,
    menu = _props$menu === void 0 ? {
      locale: false
    } : _props$menu;
  var pageTitle = ignoreTitle ? '' : title || '';
  var currRouterData = matchParamsPath(pathname, breadcrumb, breadcrumbMap);
  if (!currRouterData) {
    return {
      title: pageTitle,
      id: '',
      pageName: pageTitle
    };
  }
  var pageName = currRouterData.name;
  if (menu.locale !== false && currRouterData.locale && formatMessage) {
    pageName = formatMessage({
      id: currRouterData.locale || '',
      defaultMessage: currRouterData.name
    });
  }
  if (!pageName) {
    return {
      title: pageTitle,
      id: currRouterData.locale || '',
      pageName: pageTitle
    };
  }
  if (ignoreTitle || !title) {
    return {
      title: pageName,
      id: currRouterData.locale || '',
      pageName: pageName
    };
  }
  return {
    title: "".concat(pageName, " - ").concat(title),
    id: currRouterData.locale || '',
    pageName: pageName
  };
};
var getPageTitle = function getPageTitle(props, ignoreTitle) {
  return getPageTitleInfo(props, ignoreTitle).title;
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/locales/en-US/settingDrawer.js
/* harmony default export */ var settingDrawer = ({
  'app.setting.pagestyle': 'Page style setting',
  'app.setting.pagestyle.dark': 'Dark Menu style',
  'app.setting.pagestyle.light': 'Light Menu style',
  'app.setting.pagestyle.realdark': 'Dark style (Beta)',
  'app.setting.content-width': 'Content Width',
  'app.setting.content-width.fixed': 'Fixed',
  'app.setting.content-width.fluid': 'Fluid',
  'app.setting.themecolor': 'Theme Color',
  'app.setting.themecolor.dust': 'Dust Red',
  'app.setting.themecolor.volcano': 'Volcano',
  'app.setting.themecolor.sunset': 'Sunset Orange',
  'app.setting.themecolor.cyan': 'Cyan',
  'app.setting.themecolor.green': 'Polar Green',
  'app.setting.themecolor.techBlue': 'Tech Blue (default)',
  'app.setting.themecolor.daybreak': 'Daybreak Blue',
  'app.setting.themecolor.geekblue': 'Geek Blue',
  'app.setting.themecolor.purple': 'Golden Purple',
  'app.setting.sidermenutype': 'SideMenu Type',
  'app.setting.sidermenutype-sub': 'Classic',
  'app.setting.sidermenutype-group': 'Grouping',
  'app.setting.navigationmode': 'Navigation Mode',
  'app.setting.regionalsettings': 'Regional Settings',
  'app.setting.regionalsettings.header': 'Header',
  'app.setting.regionalsettings.menu': 'Menu',
  'app.setting.regionalsettings.footer': 'Footer',
  'app.setting.regionalsettings.menuHeader': 'Menu Header',
  'app.setting.sidemenu': 'Side Menu Layout',
  'app.setting.topmenu': 'Top Menu Layout',
  'app.setting.mixmenu': 'Mix Menu Layout',
  'app.setting.splitMenus': 'Split Menus',
  'app.setting.fixedheader': 'Fixed Header',
  'app.setting.fixedsidebar': 'Fixed Sidebar',
  'app.setting.fixedsidebar.hint': 'Works on Side Menu Layout',
  'app.setting.hideheader': 'Hidden Header when scrolling',
  'app.setting.hideheader.hint': 'Works when Hidden Header is enabled',
  'app.setting.othersettings': 'Other Settings',
  'app.setting.weakmode': 'Weak Mode',
  'app.setting.copy': 'Copy Setting',
  'app.setting.loading': 'Loading theme',
  'app.setting.copyinfo': 'copy success，please replace defaultSettings in src/models/setting.js',
  'app.setting.production.hint': 'Setting panel shows in development environment only, please manually modify'
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/locales/en-US.js


/* harmony default export */ var en_US = ((0,objectSpread2/* default */.Z)({}, settingDrawer));
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/locales/it-IT/settingDrawer.js
/* harmony default export */ var it_IT_settingDrawer = ({
  'app.setting.pagestyle': 'Impostazioni di stile',
  'app.setting.pagestyle.dark': 'Tema scuro',
  'app.setting.pagestyle.light': 'Tema chiaro',
  'app.setting.content-width': 'Largezza contenuto',
  'app.setting.content-width.fixed': 'Fissa',
  'app.setting.content-width.fluid': 'Fluida',
  'app.setting.themecolor': 'Colore del tema',
  'app.setting.themecolor.dust': 'Rosso polvere',
  'app.setting.themecolor.volcano': 'Vulcano',
  'app.setting.themecolor.sunset': 'Arancione tramonto',
  'app.setting.themecolor.cyan': 'Ciano',
  'app.setting.themecolor.green': 'Verde polare',
  'app.setting.themecolor.techBlue': 'Tech Blu (default)',
  'app.setting.themecolor.daybreak': 'Blu cielo mattutino',
  'app.setting.themecolor.geekblue': 'Blu geek',
  'app.setting.themecolor.purple': 'Viola dorato',
  'app.setting.navigationmode': 'Modalità di navigazione',
  'app.setting.sidemenu': 'Menu laterale',
  'app.setting.topmenu': 'Menu in testata',
  'app.setting.mixmenu': 'Menu misto',
  'app.setting.splitMenus': 'Menu divisi',
  'app.setting.fixedheader': 'Testata fissa',
  'app.setting.fixedsidebar': 'Menu laterale fisso',
  'app.setting.fixedsidebar.hint': 'Solo se selezionato Menu laterale',
  'app.setting.hideheader': 'Nascondi testata durante lo scorrimento',
  'app.setting.hideheader.hint': 'Solo se abilitato Nascondi testata durante lo scorrimento',
  'app.setting.othersettings': 'Altre impostazioni',
  'app.setting.weakmode': 'Inverti colori',
  'app.setting.copy': 'Copia impostazioni',
  'app.setting.loading': 'Carico tema...',
  'app.setting.copyinfo': 'Impostazioni copiate con successo! Incolla il contenuto in config/defaultSettings.js',
  'app.setting.production.hint': 'Questo pannello è visibile solo durante lo sviluppo. Le impostazioni devono poi essere modificate manulamente'
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/locales/it-IT.js


/* harmony default export */ var it_IT = ((0,objectSpread2/* default */.Z)({}, it_IT_settingDrawer));
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/locales/ko-KR/settingDrawer.js
/* harmony default export */ var ko_KR_settingDrawer = ({
  'app.setting.pagestyle': '스타일 설정',
  'app.setting.pagestyle.dark': '다크 모드',
  'app.setting.pagestyle.light': '라이트 모드',
  'app.setting.content-width': '컨텐츠 너비',
  'app.setting.content-width.fixed': '고정',
  'app.setting.content-width.fluid': '흐름',
  'app.setting.themecolor': '테마 색상',
  'app.setting.themecolor.dust': 'Dust Red',
  'app.setting.themecolor.volcano': 'Volcano',
  'app.setting.themecolor.sunset': 'Sunset Orange',
  'app.setting.themecolor.cyan': 'Cyan',
  'app.setting.themecolor.green': 'Polar Green',
  'app.setting.themecolor.techBlue': 'Tech Blu (default)',
  'app.setting.themecolor.daybreak': 'Daybreak Blue',
  'app.setting.themecolor.geekblue': 'Geek Blue',
  'app.setting.themecolor.purple': 'Golden Purple',
  'app.setting.navigationmode': '네비게이션 모드',
  'app.setting.regionalsettings': '영역별 설정',
  'app.setting.regionalsettings.header': '헤더',
  'app.setting.regionalsettings.menu': '메뉴',
  'app.setting.regionalsettings.footer': '바닥글',
  'app.setting.regionalsettings.menuHeader': '메뉴 헤더',
  'app.setting.sidemenu': '메뉴 사이드 배치',
  'app.setting.topmenu': '메뉴 상단 배치',
  'app.setting.mixmenu': '혼합형 배치',
  'app.setting.splitMenus': '메뉴 분리',
  'app.setting.fixedheader': '헤더 고정',
  'app.setting.fixedsidebar': '사이드바 고정',
  'app.setting.fixedsidebar.hint': "'메뉴 사이드 배치'를 선택했을 때 동작함",
  'app.setting.hideheader': '스크롤 중 헤더 감추기',
  'app.setting.hideheader.hint': "'헤더 감추기 옵션'을 선택했을 때 동작함",
  'app.setting.othersettings': '다른 설정',
  'app.setting.weakmode': '고대비 모드',
  'app.setting.copy': '설정값 복사',
  'app.setting.loading': '테마 로딩 중',
  'app.setting.copyinfo': '복사 성공. src/models/settings.js에 있는 defaultSettings를 교체해 주세요.',
  'app.setting.production.hint': '설정 판넬은 개발 환경에서만 보여집니다. 직접 수동으로 변경바랍니다.'
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/locales/ko-KR.js


/* harmony default export */ var ko_KR = ((0,objectSpread2/* default */.Z)({}, ko_KR_settingDrawer));
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/locales/zh-CN/settingDrawer.js
/* harmony default export */ var zh_CN_settingDrawer = ({
  'app.setting.pagestyle': '整体风格设置',
  'app.setting.pagestyle.dark': '暗色菜单风格',
  'app.setting.pagestyle.light': '亮色菜单风格',
  'app.setting.pagestyle.realdark': '暗色风格(实验功能)',
  'app.setting.content-width': '内容区域宽度',
  'app.setting.content-width.fixed': '定宽',
  'app.setting.content-width.fluid': '流式',
  'app.setting.themecolor': '主题色',
  'app.setting.themecolor.dust': '薄暮',
  'app.setting.themecolor.volcano': '火山',
  'app.setting.themecolor.sunset': '日暮',
  'app.setting.themecolor.cyan': '明青',
  'app.setting.themecolor.green': '极光绿',
  'app.setting.themecolor.techBlue': '科技蓝（默认）',
  'app.setting.themecolor.daybreak': '拂晓',
  'app.setting.themecolor.geekblue': '极客蓝',
  'app.setting.themecolor.purple': '酱紫',
  'app.setting.navigationmode': '导航模式',
  'app.setting.sidermenutype': '侧边菜单类型',
  'app.setting.sidermenutype-sub': '经典模式',
  'app.setting.sidermenutype-group': '分组模式',
  'app.setting.regionalsettings': '内容区域',
  'app.setting.regionalsettings.header': '顶栏',
  'app.setting.regionalsettings.menu': '菜单',
  'app.setting.regionalsettings.footer': '页脚',
  'app.setting.regionalsettings.menuHeader': '菜单头',
  'app.setting.sidemenu': '侧边菜单布局',
  'app.setting.topmenu': '顶部菜单布局',
  'app.setting.mixmenu': '混合菜单布局',
  'app.setting.splitMenus': '自动分割菜单',
  'app.setting.fixedheader': '固定 Header',
  'app.setting.fixedsidebar': '固定侧边菜单',
  'app.setting.fixedsidebar.hint': '侧边菜单布局时可配置',
  'app.setting.hideheader': '下滑时隐藏 Header',
  'app.setting.hideheader.hint': '固定 Header 时可配置',
  'app.setting.othersettings': '其他设置',
  'app.setting.weakmode': '色弱模式',
  'app.setting.copy': '拷贝设置',
  'app.setting.loading': '正在加载主题',
  'app.setting.copyinfo': '拷贝成功，请到 src/defaultSettings.js 中替换默认配置',
  'app.setting.production.hint': '配置栏只在开发环境用于预览，生产环境不会展现，请拷贝后手动修改配置文件'
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/locales/zh-CN.js


/* harmony default export */ var zh_CN = ((0,objectSpread2/* default */.Z)({}, zh_CN_settingDrawer));
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/locales/zh-TW/settingDrawer.js
/* harmony default export */ var zh_TW_settingDrawer = ({
  'app.setting.pagestyle': '整體風格設置',
  'app.setting.pagestyle.dark': '暗色菜單風格',
  'app.setting.pagestyle.realdark': '暗色風格(实验功能)',
  'app.setting.pagestyle.light': '亮色菜單風格',
  'app.setting.content-width': '內容區域寬度',
  'app.setting.content-width.fixed': '定寬',
  'app.setting.content-width.fluid': '流式',
  'app.setting.themecolor': '主題色',
  'app.setting.themecolor.dust': '薄暮',
  'app.setting.themecolor.volcano': '火山',
  'app.setting.themecolor.sunset': '日暮',
  'app.setting.themecolor.cyan': '明青',
  'app.setting.themecolor.green': '極光綠',
  'app.setting.themecolor.techBlue': '科技蓝（默認）',
  'app.setting.themecolor.daybreak': '拂曉藍',
  'app.setting.themecolor.geekblue': '極客藍',
  'app.setting.themecolor.purple': '醬紫',
  'app.setting.navigationmode': '導航模式',
  'app.setting.sidemenu': '側邊菜單布局',
  'app.setting.topmenu': '頂部菜單布局',
  'app.setting.mixmenu': '混合菜單布局',
  'app.setting.splitMenus': '自动分割菜单',
  'app.setting.fixedheader': '固定 Header',
  'app.setting.fixedsidebar': '固定側邊菜單',
  'app.setting.fixedsidebar.hint': '側邊菜單布局時可配置',
  'app.setting.hideheader': '下滑時隱藏 Header',
  'app.setting.hideheader.hint': '固定 Header 時可配置',
  'app.setting.othersettings': '其他設置',
  'app.setting.weakmode': '色弱模式',
  'app.setting.copy': '拷貝設置',
  'app.setting.loading': '正在加載主題',
  'app.setting.copyinfo': '拷貝成功，請到 src/defaultSettings.js 中替換默認配置',
  'app.setting.production.hint': '配置欄只在開發環境用於預覽，生產環境不會展現，請拷貝後手動修改配置文件'
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/locales/zh-TW.js


/* harmony default export */ var zh_TW = ((0,objectSpread2/* default */.Z)({}, zh_TW_settingDrawer));
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/locales/index.js






var locales = {
  'zh-CN': zh_CN,
  'zh-TW': zh_TW,
  'en-US': en_US,
  'it-IT': it_IT,
  'ko-KR': ko_KR
};
var getLanguage = function getLanguage() {
  // support ssr
  if (!(0,isBrowser/* isBrowser */.j)()) return 'zh-CN';
  var lang = window.localStorage.getItem('umi_locale');
  return lang || window.g_locale || navigator.language;
};
var gLocaleObject = function gLocaleObject() {
  var gLocale = getLanguage();
  return locales[gLocale] || locales['zh-CN'];
};
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/version/index.js + 1 modules
var version = __webpack_require__(63807);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/style/index.js
/* provided dependency */ var process = __webpack_require__(14224);




var getVersion = function getVersion() {
  var _process;
  if (typeof process === 'undefined') return version/* default */.Z;
  return ((_process = process) === null || process === void 0 || (process = ({"NODE_ENV":"production","UMI_APP_API_IRIS_BASE":"/api/iris","UMI_APP_API_IRIS_SSE_BASE":"/api/iris-sse","PUBLIC_PATH":"/web/iris/"})) === null || process === void 0 ? void 0 : process.ANTD_VERSION) || version/* default */.Z;
};

/**
 * 主要区别：
 * 需要手动引入 import 'antd/dist/antd.css';
 * 需要重置 menu 的样式
 * @param token
 * @returns
 */
var compatibleStyle = function compatibleStyle(token) {
  var _getVersion, _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _token$layout6, _token$layout7, _token$layout8, _token$layout9, _token$layout10, _token$layout11, _token$layout12, _token$layout13, _token$layout14, _token$layout15, _token$layout16, _token$layout17, _token$layout18, _token$layout19, _$concat6, _token$layout20, _token$layout21, _token$layout22, _token$layout23, _token$layout24, _token$layout25, _token$layout26, _token$layout27, _token$layout28, _token$layout29, _token$layout30;
  if ((_getVersion = getVersion()) !== null && _getVersion !== void 0 && _getVersion.startsWith('5')) {
    return {};
  }
  return (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, token.componentCls, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    width: '100%',
    height: '100%'
  }, "".concat(token.proComponentsCls, "-base-menu"), (_$concat6 = {
    color: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextMenu
  }, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)(_$concat6, "".concat(token.antCls, "-menu-sub"), {
    backgroundColor: 'transparent!important',
    color: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorTextMenu
  }), "& ".concat(token.antCls, "-layout"), {
    backgroundColor: 'transparent',
    width: '100%'
  }), "".concat(token.antCls, "-menu-submenu-expand-icon, ").concat(token.antCls, "-menu-submenu-arrow"), {
    color: 'inherit'
  }), "&".concat(token.antCls, "-menu"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    color: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorTextMenu
  }, "".concat(token.antCls, "-menu-item"), {
    '*': {
      transition: 'none !important'
    }
  }), "".concat(token.antCls, "-menu-item a"), {
    color: 'inherit'
  })), "&".concat(token.antCls, "-menu-inline"), (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-selected::after,").concat(token.antCls, "-menu-item-selected::after"), {
    display: 'none'
  })), "".concat(token.antCls, "-menu-sub ").concat(token.antCls, "-menu-inline"), {
    backgroundColor: 'transparent!important'
  }), "".concat(token.antCls, "-menu-item:active, \n        ").concat(token.antCls, "-menu-submenu-title:active"), {
    backgroundColor: 'transparent!important'
  }), "&".concat(token.antCls, "-menu-light"), (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item:hover, \n            ").concat(token.antCls, "-menu-item-active,\n            ").concat(token.antCls, "-menu-submenu-active, \n            ").concat(token.antCls, "-menu-submenu-title:hover"), (0,defineProperty/* default */.Z)({
    color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.sider) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextMenuActive,
    borderRadius: token.borderRadius
  }, "".concat(token.antCls, "-menu-submenu-arrow"), {
    color: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.sider) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorTextMenuActive
  }))), "&".concat(token.antCls, "-menu:not(").concat(token.antCls, "-menu-horizontal)"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item-selected"), {
    backgroundColor: (_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.sider) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.colorBgMenuItemSelected,
    borderRadius: token.borderRadius
  }), "".concat(token.antCls, "-menu-item:hover, \n            ").concat(token.antCls, "-menu-item-active,\n            ").concat(token.antCls, "-menu-submenu-title:hover"), (0,defineProperty/* default */.Z)({
    color: (_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.sider) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.colorTextMenuActive,
    borderRadius: token.borderRadius,
    backgroundColor: "".concat((_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.header) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.colorBgMenuItemHover, " !important")
  }, "".concat(token.antCls, "-menu-submenu-arrow"), {
    color: (_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.sider) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.colorTextMenuActive
  }))), "".concat(token.antCls, "-menu-item-selected"), {
    color: (_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.sider) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.colorTextMenuSelected
  }), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)(_$concat6, "".concat(token.antCls, "-menu-submenu-selected"), {
    color: (_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.sider) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.colorTextMenuSelected
  }), "&".concat(token.antCls, "-menu:not(").concat(token.antCls, "-menu-inline) ").concat(token.antCls, "-menu-submenu-open"), {
    color: (_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.sider) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.colorTextMenuSelected
  }), "&".concat(token.antCls, "-menu-vertical"), (0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-submenu-selected"), {
    borderRadius: token.borderRadius,
    color: (_token$layout13 = token.layout) === null || _token$layout13 === void 0 || (_token$layout13 = _token$layout13.sider) === null || _token$layout13 === void 0 ? void 0 : _token$layout13.colorTextMenuSelected
  })), "".concat(token.antCls, "-menu-submenu:hover > ").concat(token.antCls, "-menu-submenu-title > ").concat(token.antCls, "-menu-submenu-arrow"), {
    color: (_token$layout14 = token.layout) === null || _token$layout14 === void 0 || (_token$layout14 = _token$layout14.sider) === null || _token$layout14 === void 0 ? void 0 : _token$layout14.colorTextMenuActive
  }), "&".concat(token.antCls, "-menu-horizontal"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item:hover,\n          ").concat(token.antCls, "-menu-submenu:hover,\n          ").concat(token.antCls, "-menu-item-active,\n          ").concat(token.antCls, "-menu-submenu-active"), {
    borderRadius: 4,
    transition: 'none',
    color: (_token$layout15 = token.layout) === null || _token$layout15 === void 0 || (_token$layout15 = _token$layout15.header) === null || _token$layout15 === void 0 ? void 0 : _token$layout15.colorTextMenuActive,
    backgroundColor: "".concat((_token$layout16 = token.layout) === null || _token$layout16 === void 0 || (_token$layout16 = _token$layout16.header) === null || _token$layout16 === void 0 ? void 0 : _token$layout16.colorBgMenuItemHover, " !important")
  }), "".concat(token.antCls, "-menu-item-open,\n          ").concat(token.antCls, "-menu-submenu-open,\n          ").concat(token.antCls, "-menu-item-selected,\n          ").concat(token.antCls, "-menu-submenu-selected"), (0,defineProperty/* default */.Z)({
    backgroundColor: (_token$layout17 = token.layout) === null || _token$layout17 === void 0 || (_token$layout17 = _token$layout17.header) === null || _token$layout17 === void 0 ? void 0 : _token$layout17.colorBgMenuItemSelected,
    borderRadius: token.borderRadius,
    transition: 'none',
    color: "".concat((_token$layout18 = token.layout) === null || _token$layout18 === void 0 || (_token$layout18 = _token$layout18.header) === null || _token$layout18 === void 0 ? void 0 : _token$layout18.colorTextMenuSelected, " !important")
  }, "".concat(token.antCls, "-menu-submenu-arrow"), {
    color: "".concat((_token$layout19 = token.layout) === null || _token$layout19 === void 0 || (_token$layout19 = _token$layout19.header) === null || _token$layout19 === void 0 ? void 0 : _token$layout19.colorTextMenuSelected, " !important")
  })), "> ".concat(token.antCls, "-menu-item, > ").concat(token.antCls, "-menu-submenu"), {
    paddingInline: 16,
    marginInline: 4
  }), "> ".concat(token.antCls, "-menu-item::after, > ").concat(token.antCls, "-menu-submenu::after"), {
    display: 'none'
  })))), "".concat(token.proComponentsCls, "-top-nav-header-base-menu"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "&".concat(token.antCls, "-menu"), (0,defineProperty/* default */.Z)({
    color: (_token$layout20 = token.layout) === null || _token$layout20 === void 0 || (_token$layout20 = _token$layout20.header) === null || _token$layout20 === void 0 ? void 0 : _token$layout20.colorTextMenu
  }, "".concat(token.antCls, "-menu-item a"), {
    color: 'inherit'
  })), "&".concat(token.antCls, "-menu-light"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item:hover, \n            ").concat(token.antCls, "-menu-item-active,\n            ").concat(token.antCls, "-menu-submenu-active, \n            ").concat(token.antCls, "-menu-submenu-title:hover"), (0,defineProperty/* default */.Z)({
    color: (_token$layout21 = token.layout) === null || _token$layout21 === void 0 || (_token$layout21 = _token$layout21.header) === null || _token$layout21 === void 0 ? void 0 : _token$layout21.colorTextMenuActive,
    borderRadius: token.borderRadius,
    transition: 'none',
    backgroundColor: (_token$layout22 = token.layout) === null || _token$layout22 === void 0 || (_token$layout22 = _token$layout22.header) === null || _token$layout22 === void 0 ? void 0 : _token$layout22.colorBgMenuItemSelected
  }, "".concat(token.antCls, "-menu-submenu-arrow"), {
    color: (_token$layout23 = token.layout) === null || _token$layout23 === void 0 || (_token$layout23 = _token$layout23.header) === null || _token$layout23 === void 0 ? void 0 : _token$layout23.colorTextMenuActive
  })), "".concat(token.antCls, "-menu-item-selected"), {
    color: (_token$layout24 = token.layout) === null || _token$layout24 === void 0 || (_token$layout24 = _token$layout24.header) === null || _token$layout24 === void 0 ? void 0 : _token$layout24.colorTextMenuSelected,
    borderRadius: token.borderRadius,
    backgroundColor: (_token$layout25 = token.layout) === null || _token$layout25 === void 0 || (_token$layout25 = _token$layout25.header) === null || _token$layout25 === void 0 ? void 0 : _token$layout25.colorBgMenuItemSelected
  })))), "".concat(token.antCls, "-menu-sub").concat(token.antCls, "-menu-inline"), {
    backgroundColor: 'transparent!important'
  }), "".concat(token.antCls, "-menu-submenu-popup"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
    backgroundColor: 'rgba(255, 255, 255, 0.42)',
    '-webkit-backdrop-filter': 'blur(8px)',
    backdropFilter: 'blur(8px)'
  }, "".concat(token.antCls, "-menu"), (0,defineProperty/* default */.Z)({
    background: 'transparent !important',
    backgroundColor: 'transparent !important'
  }, "".concat(token.antCls, "-menu-item:active, \n        ").concat(token.antCls, "-menu-submenu-title:active"), {
    backgroundColor: 'transparent!important'
  })), "".concat(token.antCls, "-menu-item-selected"), {
    color: (_token$layout26 = token.layout) === null || _token$layout26 === void 0 || (_token$layout26 = _token$layout26.sider) === null || _token$layout26 === void 0 ? void 0 : _token$layout26.colorTextMenuSelected
  }), "".concat(token.antCls, "-menu-submenu-selected"), {
    color: (_token$layout27 = token.layout) === null || _token$layout27 === void 0 || (_token$layout27 = _token$layout27.sider) === null || _token$layout27 === void 0 ? void 0 : _token$layout27.colorTextMenuSelected
  }), "".concat(token.antCls, "-menu:not(").concat(token.antCls, "-menu-horizontal)"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-menu-item-selected"), {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    borderRadius: token.borderRadius,
    color: (_token$layout28 = token.layout) === null || _token$layout28 === void 0 || (_token$layout28 = _token$layout28.sider) === null || _token$layout28 === void 0 ? void 0 : _token$layout28.colorTextMenuSelected
  }), "".concat(token.antCls, "-menu-item:hover, \n          ").concat(token.antCls, "-menu-item-active,\n          ").concat(token.antCls, "-menu-submenu-title:hover"), (0,defineProperty/* default */.Z)({
    color: (_token$layout29 = token.layout) === null || _token$layout29 === void 0 || (_token$layout29 = _token$layout29.sider) === null || _token$layout29 === void 0 ? void 0 : _token$layout29.colorTextMenuActive,
    borderRadius: token.borderRadius
  }, "".concat(token.antCls, "-menu-submenu-arrow"), {
    color: (_token$layout30 = token.layout) === null || _token$layout30 === void 0 || (_token$layout30 = _token$layout30.sider) === null || _token$layout30 === void 0 ? void 0 : _token$layout30.colorTextMenuActive
  }))));
};
var genProLayoutStyle = function genProLayoutStyle(token) {
  var _token$layout31, _token$layout32, _token$layout33, _token$layout34;
  return (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(token.antCls, "-layout"), {
    backgroundColor: 'transparent !important'
  }), token.componentCls, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "& ".concat(token.antCls, "-layout"), {
    display: 'flex',
    backgroundColor: 'transparent',
    width: '100%'
  }), "".concat(token.componentCls, "-content"), {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: ((_token$layout31 = token.layout) === null || _token$layout31 === void 0 || (_token$layout31 = _token$layout31.pageContainer) === null || _token$layout31 === void 0 ? void 0 : _token$layout31.colorBgPageContainer) || 'transparent',
    position: 'relative',
    paddingBlock: (_token$layout32 = token.layout) === null || _token$layout32 === void 0 || (_token$layout32 = _token$layout32.pageContainer) === null || _token$layout32 === void 0 ? void 0 : _token$layout32.paddingBlockPageContainerContent,
    paddingInline: (_token$layout33 = token.layout) === null || _token$layout33 === void 0 || (_token$layout33 = _token$layout33.pageContainer) === null || _token$layout33 === void 0 ? void 0 : _token$layout33.paddingInlinePageContainerContent,
    '&-has-page-container': {
      padding: 0
    }
  }), "".concat(token.componentCls, "-container"), {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    minHeight: 0,
    backgroundColor: 'transparent'
  }), "".concat(token.componentCls, "-bg-list"), {
    pointerEvents: 'none',
    position: 'fixed',
    overflow: 'hidden',
    insetBlockStart: 0,
    insetInlineStart: 0,
    zIndex: 0,
    height: '100%',
    width: '100%',
    background: (_token$layout34 = token.layout) === null || _token$layout34 === void 0 ? void 0 : _token$layout34.bgLayout
  }));
};
function es_style_useStyle(prefixCls) {
  return (0,useStyle/* useStyle */.Xj)('ProLayout', function (token) {
    var proLayoutToken = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProLayoutStyle(proLayoutToken), compatibleStyle(proLayoutToken)];
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/utils/pathTools.js
// /userInfo/2144/id => ['/userInfo','/userInfo/2144,'/userInfo/2144/id']
function urlToList(url) {
  if (!url || url === '/') {
    return ['/'];
  }
  var urlList = url.split('/').filter(function (i) {
    return i;
  });
  return urlList.map(function (urlItem, index) {
    return "/".concat(urlList.slice(0, index + 1).join('/'));
  });
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/utils/getBreadcrumbProps.js
/* provided dependency */ var getBreadcrumbProps_process = __webpack_require__(14224);






var getBreadcrumbProps_getVersion = function getVersion() {
  var _process;
  if (typeof getBreadcrumbProps_process === 'undefined') return version/* default */.Z;
  return ((_process = getBreadcrumbProps_process) === null || getBreadcrumbProps_process === void 0 || (getBreadcrumbProps_process = ({"NODE_ENV":"production","UMI_APP_API_IRIS_BASE":"/api/iris","UMI_APP_API_IRIS_SSE_BASE":"/api/iris-sse","PUBLIC_PATH":"/web/iris/"})) === null || getBreadcrumbProps_process === void 0 ? void 0 : getBreadcrumbProps_process.ANTD_VERSION) || version/* default */.Z;
};
// 渲染 Breadcrumb 子节点
// Render the Breadcrumb child node
var defaultItemRender = function defaultItemRender(route, _, routes) {
  var _ref = route,
    breadcrumbName = _ref.breadcrumbName,
    title = _ref.title,
    path = _ref.path;
  var last = routes.findIndex(function (i) {
    return (
      // @ts-ignore
      i.linkPath === route.path
    );
  }) === routes.length - 1;
  return last ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    children: title || breadcrumbName
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    onClick: path ? function () {
      return location.href = path;
    } : undefined,
    children: title || breadcrumbName
  });
};
var renderItemLocal = function renderItemLocal(item, props) {
  var formatMessage = props.formatMessage,
    menu = props.menu;
  if (item.locale && formatMessage && (menu === null || menu === void 0 ? void 0 : menu.locale) !== false) {
    return formatMessage({
      id: item.locale,
      defaultMessage: item.name
    });
  }
  return item.name;
};
var getBreadcrumb = function getBreadcrumb(breadcrumbMap, url) {
  var breadcrumbItem = breadcrumbMap.get(url);
  if (!breadcrumbItem) {
    // Find the first matching path in the order defined by route config
    // 按照 route config 定义的顺序找到第一个匹配的路径
    var keys = Array.from(breadcrumbMap.keys()) || [];
    var targetPath = keys.find(function (path) {
      try {
        if (path !== null && path !== void 0 && path.startsWith('http')) return false;
        return (0,dist/* match */.EQ)(path.replace('?', ''))(url);
      } catch (error) {
        console.log('path', path, error);
        return false;
      }
    }
    // remove ? ,不然会重复
    );
    if (targetPath) breadcrumbItem = breadcrumbMap.get(targetPath);
  }
  return breadcrumbItem || {
    path: ''
  };
};
var getBreadcrumbFromProps = function getBreadcrumbFromProps(props) {
  var location = props.location,
    breadcrumbMap = props.breadcrumbMap;
  return {
    location: location,
    breadcrumbMap: breadcrumbMap
  };
};
var conversionFromLocation = function conversionFromLocation(routerLocation, breadcrumbMap, props) {
  // Convertor the url to an array
  var pathSnippets = urlToList(routerLocation === null || routerLocation === void 0 ? void 0 : routerLocation.pathname);
  // Loop data mosaic routing
  var extraBreadcrumbItems = pathSnippets.map(function (url) {
    var currentBreadcrumb = getBreadcrumb(breadcrumbMap, url);
    var name = renderItemLocal(currentBreadcrumb, props);
    var hideInBreadcrumb = currentBreadcrumb.hideInBreadcrumb;
    return name && !hideInBreadcrumb ? {
      linkPath: url,
      breadcrumbName: name,
      title: name,
      component: currentBreadcrumb.component
    } : {
      linkPath: '',
      breadcrumbName: '',
      title: ''
    };
  }).filter(function (item) {
    return item && item.linkPath;
  });
  return extraBreadcrumbItems;
};
/** 将参数转化为面包屑 Convert parameters into breadcrumbs */
var genBreadcrumbProps = function genBreadcrumbProps(props) {
  var _getBreadcrumbFromPro = getBreadcrumbFromProps(props),
    location = _getBreadcrumbFromPro.location,
    breadcrumbMap = _getBreadcrumbFromPro.breadcrumbMap;

  // 根据 location 生成 面包屑
  // Generate breadcrumbs based on location
  if (location && location.pathname && breadcrumbMap) {
    return conversionFromLocation(location, breadcrumbMap, props);
  }
  return [];
};

// 声明一个导出函数，接收两个参数：BreadcrumbProps和ProLayoutProps，返回一个BreadcrumbListReturn类型的对象
var getBreadcrumbProps = function getBreadcrumbProps(props, layoutPros // ProLayoutProps类型的layoutPros
) {
  // 解构赋值获取props中的breadcrumbRender和props中的itemRender，如果props中没有itemRender则使用默认的defaultItemRender函数
  var breadcrumbRender = props.breadcrumbRender,
    propsItemRender = props.itemRender;
  // 解构赋值获取layoutPros.breadcrumbProps.minLenght的值，如果没有设置，则默认为2
  var _ref2 = layoutPros.breadcrumbProps || {},
    _ref2$minLength = _ref2.minLength,
    minLength = _ref2$minLength === void 0 ? 2 : _ref2$minLength;
  // 生成面包屑的路由数组，该数组中包含菜单项和面包屑项
  var routesArray = genBreadcrumbProps(props);
  // 如果props中有itemRender，则使用props中的itemRender，否则使用默认函数defaultItemRender
  var itemRender = function itemRender(item) {
    var renderFunction = propsItemRender || defaultItemRender;
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    return renderFunction === null || renderFunction === void 0 ? void 0 : renderFunction.apply(void 0, [(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, item), {}, {
      // 如果item.linkPath存在，则使用item.linkPath，否则使用item.path
      // @ts-ignore
      path: item.linkPath || item.path
    })].concat(rest));
  };
  var items = routesArray;
  // 如果面包屑渲染函数breadcrumbRender存在，则使用其渲染数组items
  if (breadcrumbRender) {
    items = breadcrumbRender(items || []) || undefined;
  }
  // 如果items（渲染后的数组）的长度小于minLength或者breadcrumbRender为false，则items为undefined
  if (items && items.length < minLength || breadcrumbRender === false) {
    items = undefined;
  }
  // 如果当前 ant design 包的版本大于等于5.3.0，则返回一个对象{items,itemRender},否则返回一个对象{routes:item,itemRender}
  return (0,compareVersions/* compareVersions */.n)(getBreadcrumbProps_getVersion(), '5.3.0') > -1 ? {
    items: items,
    itemRender: itemRender
  } : {
    routes: items,
    itemRender: itemRender
  };
};
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/utils/getMenuData.js



function fromEntries(iterable) {
  return (0,toConsumableArray/* default */.Z)(iterable).reduce(function (obj, _ref) {
    var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 2),
      key = _ref2[0],
      val = _ref2[1];
    // eslint-disable-next-line no-param-reassign
    obj[key] = val;
    return obj;
  }, {});
}
var getMenuData = function getMenuData(routes, menu, formatMessage, menuDataRender) {
  var _transformRoute = transformRoute_transformRoute(routes, (menu === null || menu === void 0 ? void 0 : menu.locale) || false, formatMessage, true),
    menuData = _transformRoute.menuData,
    breadcrumb = _transformRoute.breadcrumb;
  if (!menuDataRender) {
    return {
      breadcrumb: fromEntries(breadcrumb),
      breadcrumbMap: breadcrumb,
      menuData: menuData
    };
  }
  return getMenuData(menuDataRender(menuData), menu, formatMessage, undefined);
};

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(28269);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-utils@2.17.0_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@_ftolbhh2rvo5cbykfdwocfesei/node_modules/@ant-design/pro-utils/es/omitUndefined/index.js
var omitUndefined = __webpack_require__(27719);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/utils/useCurrentMenuLayoutProps.js




var useCurrentMenuLayoutProps = function useCurrentMenuLayoutProps(currentMenu) {
  var _useState = (0,react.useState)({}),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    currentMenuLayoutProps = _useState2[0],
    setCurrentMenuLayoutProps = _useState2[1];
  (0,react.useEffect)(function () {
    setCurrentMenuLayoutProps((0,omitUndefined/* omitUndefined */.Y)({
      // 有时候会变成对象，是原来的方式
      layout: (0,esm_typeof/* default */.Z)(currentMenu.layout) !== 'object' ? currentMenu.layout : undefined,
      navTheme: currentMenu.navTheme,
      menuRender: currentMenu.menuRender,
      footerRender: currentMenu.footerRender,
      menuHeaderRender: currentMenu.menuHeaderRender,
      headerRender: currentMenu.headerRender,
      fixSiderbar: currentMenu.fixSiderbar
    }));
  }, [currentMenu.layout, currentMenu.navTheme, currentMenu.menuRender, currentMenu.footerRender, currentMenu.menuHeaderRender, currentMenu.headerRender, currentMenu.fixSiderbar]);
  return currentMenuLayoutProps;
};

;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+pro-layout@7.22.4_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react_vvonnor2rlmv6mpikyomu6xeou/node_modules/@ant-design/pro-layout/es/ProLayout.js






var ProLayout_excluded = ["id", "defaultMessage"],
  ProLayout_excluded2 = ["fixSiderbar", "navTheme", "layout"];




























var layoutIndex = 0;
var headerRender = function headerRender(props, matchMenuKeys) {
  var _props$stylish;
  if (props.headerRender === false || props.pure) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DefaultHeader, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    matchMenuKeys: matchMenuKeys
  }, props), {}, {
    stylish: (_props$stylish = props.stylish) === null || _props$stylish === void 0 ? void 0 : _props$stylish.header
  }));
};
var footerRender = function footerRender(props) {
  if (props.footerRender === false || props.pure) {
    return null;
  }
  if (props.footerRender) {
    return props.footerRender((0,objectSpread2/* default */.Z)({}, props), /*#__PURE__*/(0,jsx_runtime.jsx)(DefaultFooter, {}));
  }
  return null;
};
var renderSiderMenu = function renderSiderMenu(props, matchMenuKeys) {
  var _props$stylish3;
  var layout = props.layout,
    isMobile = props.isMobile,
    selectedKeys = props.selectedKeys,
    openKeys = props.openKeys,
    splitMenus = props.splitMenus,
    suppressSiderWhenMenuEmpty = props.suppressSiderWhenMenuEmpty,
    menuRender = props.menuRender;
  if (props.menuRender === false || props.pure) {
    return null;
  }
  var menuData = props.menuData;

  /** 如果是分割菜单模式，需要专门实现一下 */
  if (splitMenus && (openKeys !== false || layout === 'mix') && !isMobile) {
    var _ref = selectedKeys || matchMenuKeys,
      _ref2 = (0,slicedToArray/* default */.Z)(_ref, 1),
      key = _ref2[0];
    if (key) {
      var _props$menuData;
      menuData = ((_props$menuData = props.menuData) === null || _props$menuData === void 0 || (_props$menuData = _props$menuData.find(function (item) {
        return item.key === key;
      })) === null || _props$menuData === void 0 ? void 0 : _props$menuData.children) || [];
    } else {
      menuData = [];
    }
  }
  // 这里走了可以少一次循环
  var clearMenuData = clearMenuItem(menuData || []);
  if (clearMenuData && (clearMenuData === null || clearMenuData === void 0 ? void 0 : clearMenuData.length) < 1 && (splitMenus || suppressSiderWhenMenuEmpty)) {
    return null;
  }
  if (layout === 'top' && !isMobile) {
    var _props$stylish2;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(SiderMenuWrapper, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
      matchMenuKeys: matchMenuKeys
    }, props), {}, {
      hide: true,
      stylish: (_props$stylish2 = props.stylish) === null || _props$stylish2 === void 0 ? void 0 : _props$stylish2.sider
    }));
  }
  var defaultDom = /*#__PURE__*/(0,jsx_runtime.jsx)(SiderMenuWrapper, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    matchMenuKeys: matchMenuKeys
  }, props), {}, {
    // 这里走了可以少一次循环
    menuData: clearMenuData,
    stylish: (_props$stylish3 = props.stylish) === null || _props$stylish3 === void 0 ? void 0 : _props$stylish3.sider
  }));
  if (menuRender) {
    return menuRender(props, defaultDom);
  }
  return defaultDom;
};
var defaultPageTitleRender = function defaultPageTitleRender(pageProps, props) {
  var pageTitleRender = props.pageTitleRender;
  var pageTitleInfo = getPageTitleInfo(pageProps);
  if (pageTitleRender === false) {
    return {
      title: props.title || '',
      id: '',
      pageName: ''
    };
  }
  if (pageTitleRender) {
    var title = pageTitleRender(pageProps, pageTitleInfo.title, pageTitleInfo);
    if (typeof title === 'string') {
      return getPageTitleInfo((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, pageTitleInfo), {}, {
        title: title
      }));
    }
    (0,warning/* default */.ZP)(typeof title === 'string', 'pro-layout: renderPageTitle return value should be a string');
  }
  return pageTitleInfo;
};
var getPaddingInlineStart = function getPaddingInlineStart(hasLeftPadding, collapsed, siderWidth) {
  if (hasLeftPadding) {
    return collapsed ? 64 : siderWidth;
  }
  return 0;
};

/**
 * 🌃 Powerful and easy to use beautiful layout 🏄‍ Support multiple topics and layout types
 *
 * @param props
 */
var BaseProLayout = function BaseProLayout(props) {
  var _props$prefixCls, _location$pathname, _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _token$layout6, _token$layout7, _token$layout8, _token$layout9, _token$layout10, _token$layout11, _token$layout12;
  var _ref3 = props || {},
    children = _ref3.children,
    propsOnCollapse = _ref3.onCollapse,
    _ref3$location = _ref3.location,
    location = _ref3$location === void 0 ? {
      pathname: '/'
    } : _ref3$location,
    contentStyle = _ref3.contentStyle,
    route = _ref3.route,
    defaultCollapsed = _ref3.defaultCollapsed,
    style = _ref3.style,
    propsSiderWidth = _ref3.siderWidth,
    menu = _ref3.menu,
    siderMenuType = _ref3.siderMenuType,
    propsIsChildrenLayout = _ref3.isChildrenLayout,
    menuDataRender = _ref3.menuDataRender,
    actionRef = _ref3.actionRef,
    bgLayoutImgList = _ref3.bgLayoutImgList,
    propsFormatMessage = _ref3.formatMessage,
    loading = _ref3.loading;
  var siderWidth = (0,react.useMemo)(function () {
    if (propsSiderWidth) return propsSiderWidth;
    if (props.layout === 'mix') return 215;
    return 256;
  }, [props.layout, propsSiderWidth]);
  var context = (0,react.useContext)(config_provider/* default.ConfigContext */.ZP.ConfigContext);
  var prefixCls = (_props$prefixCls = props.prefixCls) !== null && _props$prefixCls !== void 0 ? _props$prefixCls : context.getPrefixCls('pro');
  var _useMountMergeState = (0,useMergedState/* default */.Z)(false, {
      value: menu === null || menu === void 0 ? void 0 : menu.loading,
      onChange: menu === null || menu === void 0 ? void 0 : menu.onLoadingChange
    }),
    _useMountMergeState2 = (0,slicedToArray/* default */.Z)(_useMountMergeState, 2),
    menuLoading = _useMountMergeState2[0],
    setMenuLoading = _useMountMergeState2[1];

  // give a default key for swr
  var _useState = (0,react.useState)(function () {
      layoutIndex += 1;
      return "pro-layout-".concat(layoutIndex);
    }),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 1),
    defaultId = _useState2[0];

  /**
   * 处理国际化相关 formatMessage
   * 如果有用户配置的以用户为主
   * 如果没有用自己实现的
   */
  var formatMessage = (0,react.useCallback)(function (_ref4) {
    var id = _ref4.id,
      defaultMessage = _ref4.defaultMessage,
      restParams = (0,objectWithoutProperties/* default */.Z)(_ref4, ProLayout_excluded);
    if (propsFormatMessage) {
      return propsFormatMessage((0,objectSpread2/* default */.Z)({
        id: id,
        defaultMessage: defaultMessage
      }, restParams));
    }
    var locales = gLocaleObject();
    return locales[id] ? locales[id] : defaultMessage;
  }, [propsFormatMessage]);
  var _useSWR = (0,index/* default */.ZP)([defaultId, menu === null || menu === void 0 ? void 0 : menu.params], /*#__PURE__*/function () {
      var _ref6 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(_ref5) {
        var _menu$request;
        var _ref7, params, menuDataItems;
        return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _ref7 = (0,slicedToArray/* default */.Z)(_ref5, 2), params = _ref7[1];
              setMenuLoading(true);
              _context.next = 4;
              return menu === null || menu === void 0 || (_menu$request = menu.request) === null || _menu$request === void 0 ? void 0 : _menu$request.call(menu, params || {}, (route === null || route === void 0 ? void 0 : route.children) || (route === null || route === void 0 ? void 0 : route.routes) || []);
            case 4:
              menuDataItems = _context.sent;
              setMenuLoading(false);
              return _context.abrupt("return", menuDataItems);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref6.apply(this, arguments);
      };
    }(), {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      revalidateOnReconnect: false
    }),
    data = _useSWR.data,
    mutate = _useSWR.mutate,
    isLoading = _useSWR.isLoading;
  (0,react.useEffect)(function () {
    setMenuLoading(isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  var _useSWRConfig = (0,_internal/* useSWRConfig */.kY)(),
    cache = _useSWRConfig.cache;
  (0,react.useEffect)(function () {
    return function () {
      if (cache instanceof Map) cache.delete(defaultId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var menuInfoData = (0,react.useMemo)(function () {
    return getMenuData(data || (route === null || route === void 0 ? void 0 : route.children) || (route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender);
  }, [formatMessage, menu, menuDataRender, data, route === null || route === void 0 ? void 0 : route.children, route === null || route === void 0 ? void 0 : route.routes]);
  var _ref8 = menuInfoData || {},
    breadcrumb = _ref8.breadcrumb,
    breadcrumbMap = _ref8.breadcrumbMap,
    _ref8$menuData = _ref8.menuData,
    menuData = _ref8$menuData === void 0 ? [] : _ref8$menuData;
  if (actionRef && menu !== null && menu !== void 0 && menu.request) {
    actionRef.current = {
      reload: function reload() {
        mutate();
      }
    };
  }
  var matchMenus = (0,react.useMemo)(function () {
    return getMatchMenu_getMatchMenu(location.pathname || '/', menuData || [], true);
  }, [location.pathname, menuData]);
  var matchMenuKeys = (0,react.useMemo)(function () {
    return Array.from(new Set(matchMenus.map(function (item) {
      return item.key || item.path || '';
    })));
  }, [matchMenus]);

  // 当前选中的menu，一般不会为空
  var currentMenu = matchMenus[matchMenus.length - 1] || {};
  var currentMenuLayoutProps = useCurrentMenuLayoutProps(currentMenu);
  var _props$currentMenuLay = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), currentMenuLayoutProps),
    fixSiderbar = _props$currentMenuLay.fixSiderbar,
    navTheme = _props$currentMenuLay.navTheme,
    propsLayout = _props$currentMenuLay.layout,
    rest = (0,objectWithoutProperties/* default */.Z)(_props$currentMenuLay, ProLayout_excluded2);
  var colSize = useBreakpoint();
  var isMobile = (0,react.useMemo)(function () {
    return (colSize === 'sm' || colSize === 'xs') && !props.disableMobile;
  }, [colSize, props.disableMobile]);

  // If it is a fix menu, calculate padding
  // don't need padding in phone mode
  /* Checking if the menu is loading and if it is, it will return a skeleton loading screen. */
  var hasLeftPadding = propsLayout !== 'top' && !isMobile;
  var _useMergedState = (0,useMergedState/* default */.Z)(function () {
      if (defaultCollapsed !== undefined) return defaultCollapsed;
      if (false) {}
      if (isMobile) return true;
      if (colSize === 'md') return true;
      return false;
    }, {
      value: props.collapsed,
      onChange: propsOnCollapse
    }),
    _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
    collapsed = _useMergedState2[0],
    onCollapse = _useMergedState2[1];

  // Splicing parameters, adding menuData and formatMessage in props
  var defaultProps = (0,omit/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    prefixCls: prefixCls
  }, props), {}, {
    siderWidth: siderWidth
  }, currentMenuLayoutProps), {}, {
    formatMessage: formatMessage,
    breadcrumb: breadcrumb,
    menu: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, menu), {}, {
      type: siderMenuType || (menu === null || menu === void 0 ? void 0 : menu.type),
      loading: menuLoading
    }),
    layout: propsLayout
  }), ['className', 'style', 'breadcrumbRender']);

  // gen page title
  var pageTitleInfo = defaultPageTitleRender((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    pathname: location.pathname
  }, defaultProps), {}, {
    breadcrumbMap: breadcrumbMap
  }), props);

  // gen breadcrumbProps, parameter for pageHeader
  var breadcrumbProps = getBreadcrumbProps((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, defaultProps), {}, {
    breadcrumbRender: props.breadcrumbRender,
    breadcrumbMap: breadcrumbMap
  }), props);

  // render sider dom
  var siderMenuDom = renderSiderMenu((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, defaultProps), {}, {
    menuData: menuData,
    onCollapse: onCollapse,
    isMobile: isMobile,
    collapsed: collapsed
  }), matchMenuKeys);

  // render header dom
  var headerDom = headerRender((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, defaultProps), {}, {
    children: null,
    hasSiderMenu: !!siderMenuDom,
    menuData: menuData,
    isMobile: isMobile,
    collapsed: collapsed,
    onCollapse: onCollapse
  }), matchMenuKeys);

  // render footer dom
  var footerDom = footerRender((0,objectSpread2/* default */.Z)({
    isMobile: isMobile,
    collapsed: collapsed
  }, defaultProps));
  var _useContext = (0,react.useContext)(RouteContext),
    contextIsChildrenLayout = _useContext.isChildrenLayout;

  // 如果 props 中定义，以 props 为准
  var isChildrenLayout = propsIsChildrenLayout !== undefined ? propsIsChildrenLayout : contextIsChildrenLayout;
  var proLayoutClassName = "".concat(prefixCls, "-layout");
  var _useStyle = es_style_useStyle(proLayoutClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;

  // gen className
  var className = classnames_default()(props.className, hashId, 'ant-design-pro', proLayoutClassName, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "screen-".concat(colSize), colSize), "".concat(proLayoutClassName, "-top-menu"), propsLayout === 'top'), "".concat(proLayoutClassName, "-is-children"), isChildrenLayout), "".concat(proLayoutClassName, "-fix-siderbar"), fixSiderbar), "".concat(proLayoutClassName, "-").concat(propsLayout), propsLayout));

  /** 计算 slider 的宽度 */
  var leftSiderWidth = getPaddingInlineStart(!!hasLeftPadding, collapsed, siderWidth);

  // siderMenuDom 为空的时候，不需要 padding
  var genLayoutStyle = {
    position: 'relative'
  };

  // if is some layout children, don't need min height
  if (isChildrenLayout || contentStyle && contentStyle.minHeight) {
    genLayoutStyle.minHeight = 0;
  }

  /** 页面切换的时候触发 */
  (0,react.useEffect)(function () {
    var _props$onPageChange;
    (_props$onPageChange = props.onPageChange) === null || _props$onPageChange === void 0 || _props$onPageChange.call(props, props.location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, (_location$pathname = location.pathname) === null || _location$pathname === void 0 ? void 0 : _location$pathname.search]);
  var _useState3 = (0,react.useState)(false),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    hasFooterToolbar = _useState4[0],
    setHasFooterToolbar = _useState4[1];
  /**
   * 使用number是因为多标签页的时候有多个 PageContainer，只有有任意一个就应该展示这个className
   */
  var _useState5 = (0,react.useState)(0),
    _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
    hasPageContainer = _useState6[0],
    setHasPageContainer = _useState6[1];
  useDocumentTitle(pageTitleInfo, props.title || false);
  var _useContext2 = (0,react.useContext)(es/* ProProvider */.L_),
    token = _useContext2.token;
  var bgImgStyleList = (0,react.useMemo)(function () {
    if (bgLayoutImgList && bgLayoutImgList.length > 0) {
      return bgLayoutImgList === null || bgLayoutImgList === void 0 ? void 0 : bgLayoutImgList.map(function (item, index) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: item.src,
          style: (0,objectSpread2/* default */.Z)({
            position: 'absolute'
          }, item)
        }, index);
      });
    }
    return null;
  }, [bgLayoutImgList]);
  return wrapSSR( /*#__PURE__*/(0,jsx_runtime.jsx)(RouteContext.Provider, {
    value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, defaultProps), {}, {
      breadcrumb: breadcrumbProps,
      menuData: menuData,
      isMobile: isMobile,
      collapsed: collapsed,
      hasPageContainer: hasPageContainer,
      setHasPageContainer: setHasPageContainer,
      isChildrenLayout: true,
      title: pageTitleInfo.pageName,
      hasSiderMenu: !!siderMenuDom,
      hasHeader: !!headerDom,
      siderWidth: leftSiderWidth,
      hasFooter: !!footerDom,
      hasFooterToolbar: hasFooterToolbar,
      setHasFooterToolbar: setHasFooterToolbar,
      pageTitleInfo: pageTitleInfo,
      matchMenus: matchMenus,
      matchMenuKeys: matchMenuKeys,
      currentMenu: currentMenu
    }),
    children: props.pure ? /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: children
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: className,
      children: [bgImgStyleList || (_token$layout = token.layout) !== null && _token$layout !== void 0 && _token$layout.bgLayout ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: classnames_default()("".concat(proLayoutClassName, "-bg-list"), hashId),
        children: bgImgStyleList
      }) : null, /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* default */.Z, {
        style: (0,objectSpread2/* default */.Z)({
          minHeight: '100%',
          // hack style
          flexDirection: siderMenuDom ? 'row' : undefined
        }, style),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP
        // @ts-ignore
        , {
          theme: {
            hashed: (0,es/* isNeedOpenHash */.nu)(),
            token: {
              controlHeightLG: ((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.menuHeight) || (token === null || token === void 0 ? void 0 : token.controlHeightLG)
            },
            components: {
              Menu: coverToNewToken({
                colorItemBg: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorMenuBackground) || 'transparent',
                colorSubItemBg: ((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.sider) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorMenuBackground) || 'transparent',
                radiusItem: token.borderRadius,
                colorItemBgSelected: ((_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.sider) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
                colorItemBgHover: ((_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.sider) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.colorBgMenuItemHover) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
                colorItemBgActive: ((_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.sider) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.colorBgMenuItemActive) || (token === null || token === void 0 ? void 0 : token.colorBgTextActive),
                colorItemBgSelectedHorizontal: ((_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.sider) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
                colorActiveBarWidth: 0,
                colorActiveBarHeight: 0,
                colorActiveBarBorderSize: 0,
                colorItemText: ((_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.sider) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.colorTextMenu) || (token === null || token === void 0 ? void 0 : token.colorTextSecondary),
                colorItemTextHover: ((_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.sider) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.colorTextMenuItemHover) || 'rgba(0, 0, 0, 0.85)',
                // 悬浮态
                colorItemTextSelected: ((_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.sider) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.colorTextMenuSelected) || 'rgba(0, 0, 0, 1)',
                popupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
                subMenuItemBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
                darkSubMenuItemBg: 'transparent',
                darkPopupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated
              })
            }
          },
          children: siderMenuDom
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: genLayoutStyle,
          className: "".concat(proLayoutClassName, "-container ").concat(hashId).trim(),
          children: [headerDom, /*#__PURE__*/(0,jsx_runtime.jsx)(WrapContent, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
            hasPageContainer: hasPageContainer,
            isChildrenLayout: isChildrenLayout
          }, rest), {}, {
            hasHeader: !!headerDom,
            prefixCls: proLayoutClassName,
            style: contentStyle,
            children: loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(PageLoading, {}) : children
          })), footerDom, hasFooterToolbar && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "".concat(proLayoutClassName, "-has-footer"),
            style: {
              height: 64,
              marginBlockStart: (_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.pageContainer) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.paddingBlockPageContainerContent
            }
          })]
        })]
      })]
    })
  }));
};
var ProLayout = function ProLayout(props) {
  var colorPrimary = props.colorPrimary;
  var darkProps = props.navTheme !== undefined ? {
    dark: props.navTheme === 'realDark'
  } : {};
  return /*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.ZP, {
    theme: colorPrimary ? {
      token: {
        colorPrimary: colorPrimary
      }
    } : undefined,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es/* ProConfigProvider */._Y, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, darkProps), {}, {
      token: props.token,
      prefixCls: props.prefixCls,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(BaseProLayout, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
        logo: /*#__PURE__*/(0,jsx_runtime.jsx)(Logo, {})
      }, defaultSettings), {}, {
        location: (0,isBrowser/* isBrowser */.j)() ? window.location : undefined
      }, props))
    }))
  });
};


/***/ }),

/***/ 6866:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_unused_export__ = ({
  value: true
});
exports.Bo = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
/**
 * Tokenize input string.
 */

function lexer(str) {
  var tokens = [];
  var i = 0;

  while (i < str.length) {
    var char = str[i];

    if (char === '*' || char === '+' || char === '?') {
      tokens.push({
        type: 'MODIFIER',
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (char === '\\') {
      tokens.push({
        type: 'ESCAPED_CHAR',
        index: i++,
        value: str[i++]
      });
      continue;
    }

    if (char === '{') {
      tokens.push({
        type: 'OPEN',
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (char === '}') {
      tokens.push({
        type: 'CLOSE',
        index: i,
        value: str[i++]
      });
      continue;
    }

    if (char === ':') {
      var name = '';
      var j = i + 1;

      while (j < str.length) {
        var code = str.charCodeAt(j);

        if ( // `0-9`
        code >= 48 && code <= 57 || // `A-Z`
        code >= 65 && code <= 90 || // `a-z`
        code >= 97 && code <= 122 || // `_`
        code === 95) {
          name += str[j++];
          continue;
        }

        break;
      }

      if (!name) throw new TypeError('Missing parameter name at ' + i);
      tokens.push({
        type: 'NAME',
        index: i,
        value: name
      });
      i = j;
      continue;
    }

    if (char === '(') {
      var count = 1;
      var pattern = '';
      var j = i + 1;

      if (str[j] === '?') {
        throw new TypeError('Pattern cannot start with "?" at ' + j);
      }

      while (j < str.length) {
        if (str[j] === '\\') {
          pattern += str[j++] + str[j++];
          continue;
        }

        if (str[j] === ')') {
          count--;

          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === '(') {
          count++;

          if (str[j + 1] !== '?') {
            throw new TypeError('Capturing groups are not allowed at ' + j);
          }
        }

        pattern += str[j++];
      }

      if (count) throw new TypeError('Unbalanced pattern at ' + i);
      if (!pattern) throw new TypeError('Missing pattern at ' + i);
      tokens.push({
        type: 'PATTERN',
        index: i,
        value: pattern
      });
      i = j;
      continue;
    }

    tokens.push({
      type: 'CHAR',
      index: i,
      value: str[i++]
    });
  }

  tokens.push({
    type: 'END',
    index: i,
    value: ''
  });
  return tokens;
}
/**
 * Parse a string for the raw tokens.
 */


function parse(str, options) {
  if (options === void 0) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  var tokens = lexer(str);
  var _a = options.prefixes,
      prefixes = _a === void 0 ? './' : _a;
  var defaultPattern = '[^' + escapeString(options.delimiter || '/#?') + ']+?';
  var result = [];
  var key = 0;
  var i = 0;
  var path = '';

  var tryConsume = function tryConsume(type) {
    if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
  };

  var mustConsume = function mustConsume(type) {
    var value = tryConsume(type);
    if (value !== undefined) return value;
    var _a = tokens[i],
        nextType = _a.type,
        index = _a.index;
    throw new TypeError('Unexpected ' + nextType + ' at ' + index + ', expected ' + type);
  };

  var consumeText = function consumeText() {
    var result = '';
    var value; // tslint:disable-next-line

    while (value = tryConsume('CHAR') || tryConsume('ESCAPED_CHAR')) {
      result += value;
    }

    return result;
  };

  while (i < tokens.length) {
    var char = tryConsume('CHAR');
    var name = tryConsume('NAME');
    var pattern = tryConsume('PATTERN');

    if (name || pattern) {
      var prefix = char || '';

      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = '';
      }

      if (path) {
        result.push(path);
        path = '';
      }

      result.push({
        name: name || key++,
        prefix: prefix,
        suffix: '',
        pattern: pattern || defaultPattern,
        modifier: tryConsume('MODIFIER') || ''
      });
      continue;
    }

    var value = char || tryConsume('ESCAPED_CHAR');

    if (value) {
      path += value;
      continue;
    }

    if (path) {
      result.push(path);
      path = '';
    }

    var open = tryConsume('OPEN');

    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume('NAME') || '';
      var pattern_1 = tryConsume('PATTERN') || '';
      var suffix = consumeText();
      mustConsume('CLOSE');
      result.push({
        name: name_1 || (pattern_1 ? key++ : ''),
        pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
        prefix: prefix,
        suffix: suffix,
        modifier: tryConsume('MODIFIER') || ''
      });
      continue;
    }

    mustConsume('END');
  }

  return result;
}

__webpack_unused_export__ = parse;
/**
 * Compile a string to a template function for the path.
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}

__webpack_unused_export__ = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */

function tokensToFunction(tokens, options) {
  if (options === void 0) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  var reFlags = flags(options);
  var _a = options.encode,
      encode = _a === void 0 ? function (x) {
    return x;
  } : _a,
      _b = options.validate,
      validate = _b === void 0 ? true : _b; // Compile all the tokens into regexps.

  var matches = tokens.map(function (token) {
    if (_typeof(token) === 'object') {
      return new RegExp('^(?:' + token.pattern + ')$', reFlags);
    }
  });
  return function (data) {
    var path = '';

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      var value = data ? data[token.name] : undefined;
      var optional = token.modifier === '?' || token.modifier === '*';
      var repeat = token.modifier === '*' || token.modifier === '+';

      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got an array');
        }

        if (value.length === 0) {
          if (optional) continue;
          throw new TypeError('Expected "' + token.name + '" to not be empty');
        }

        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);

          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
          }

          path += token.prefix + segment + token.suffix;
        }

        continue;
      }

      if (typeof value === 'string' || typeof value === 'number') {
        var segment = encode(String(value), token);

        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
        }

        path += token.prefix + segment + token.suffix;
        continue;
      }

      if (optional) continue;
      var typeOfMessage = repeat ? 'an array' : 'a string';
      throw new TypeError('Expected "' + token.name + '" to be ' + typeOfMessage);
    }

    return path;
  };
}

__webpack_unused_export__ = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */

function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}

__webpack_unused_export__ = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */

function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  var _a = options.decode,
      decode = _a === void 0 ? function (x) {
    return x;
  } : _a;
  return function (pathname) {
    var m = re.exec(pathname);
    if (!m) return false;
    var path = m[0],
        index = m.index;
    var params = Object.create(null);

    var _loop_1 = function _loop_1(i) {
      // tslint:disable-next-line
      if (m[i] === undefined) return 'continue';
      var key = keys[i - 1];

      if (key.modifier === '*' || key.modifier === '+') {
        params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i], key);
      }
    };

    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }

    return {
      path: path,
      index: index,
      params: params
    };
  };
}

__webpack_unused_export__ = regexpToFunction;
/**
 * Escape a regular expression string.
 */

function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Get the flags for a regexp from the options.
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Pull out keys from a regexp.
 */


function regexpToRegexp(path, keys) {
  if (!keys) return path; // Use a negative lookahead to match only capturing groups.

  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: '',
        suffix: '',
        modifier: '',
        pattern: ''
      });
    }
  }

  return path;
}
/**
 * Transform an array into a regexp.
 */


function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function (path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp('(?:' + parts.join('|') + ')', flags(options));
}
/**
 * Create a path regexp from string input.
 */


function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */


function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  var _a = options.strict,
      strict = _a === void 0 ? false : _a,
      _b = options.start,
      start = _b === void 0 ? true : _b,
      _c = options.end,
      end = _c === void 0 ? true : _c,
      _d = options.encode,
      encode = _d === void 0 ? function (x) {
    return x;
  } : _d;
  var endsWith = '[' + escapeString(options.endsWith || '') + ']|$';
  var delimiter = '[' + escapeString(options.delimiter || '/#?') + ']';
  var route = start ? '^' : ''; // Iterate over the tokens and create our regexp string.

  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];

    if (typeof token === 'string') {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));

      if (token.pattern) {
        if (keys) keys.push(token);

        if (prefix || suffix) {
          if (token.modifier === '+' || token.modifier === '*') {
            var mod = token.modifier === '*' ? '?' : '';
            route += '(?:' + prefix + '((?:' + token.pattern + ')(?:' + suffix + prefix + '(?:' + token.pattern + '))*)' + suffix + ')' + mod;
          } else {
            route += '(?:' + prefix + '(' + token.pattern + ')' + suffix + ')' + token.modifier;
          }
        } else {
          route += '(' + token.pattern + ')' + token.modifier;
        }
      } else {
        route += '(?:' + prefix + suffix + ')' + token.modifier;
      }
    }
  }

  if (end) {
    if (!strict) route += delimiter + '?';
    route += !options.endsWith ? '$' : '(?=' + endsWith + ')';
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === 'string' ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : // tslint:disable-next-line
    endToken === undefined;

    if (!strict) {
      route += '(?:' + delimiter + '(?=' + endsWith + '))?';
    }

    if (!isEndDelimited) {
      route += '(?=' + delimiter + '|' + endsWith + ')';
    }
  }

  return new RegExp(route, flags(options));
}

__webpack_unused_export__ = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */

function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp) return regexpToRegexp(path, keys);
  if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}

exports.Bo = pathToRegexp;

/***/ }),

/***/ 98859:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ es_layout; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.27.1/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(35979);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(18051);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(70045);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/layout/context.js
var layout_context = __webpack_require__(36200);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(81626);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/layout/Sider.js + 3 modules
var Sider = __webpack_require__(28186);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/layout/hooks/useHasSider.js


function useHasSider(siders, children, hasSider) {
  if (typeof hasSider === 'boolean') {
    return hasSider;
  }
  if (siders.length) {
    return true;
  }
  const childNodes = (0,toArray/* default */.Z)(children);
  return childNodes.some(node => node.type === Sider/* default */.Z);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/layout/style/index.js
var layout_style = __webpack_require__(91526);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/layout/layout.js
"use client";


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};








function generator(_ref) {
  let {
    suffixCls,
    tagName,
    displayName
  } = _ref;
  return BasicComponent => {
    const Adapter = /*#__PURE__*/react.forwardRef((props, ref) => (/*#__PURE__*/react.createElement(BasicComponent, Object.assign({
      ref: ref,
      suffixCls: suffixCls,
      tagName: tagName
    }, props))));
    if (false) {}
    return Adapter;
  };
}
const Basic = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      suffixCls,
      className,
      tagName: TagName
    } = props,
    others = __rest(props, ["prefixCls", "suffixCls", "className", "tagName"]);
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('layout', customizePrefixCls);
  const [wrapSSR, hashId, cssVarCls] = (0,layout_style/* default */.ZP)(prefixCls);
  const prefixWithSuffixCls = suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
  return wrapSSR(/*#__PURE__*/react.createElement(TagName, Object.assign({
    className: classnames_default()(customizePrefixCls || prefixWithSuffixCls, className, hashId, cssVarCls),
    ref: ref
  }, others)));
});
const BasicLayout = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    direction
  } = react.useContext(context/* ConfigContext */.E_);
  const [siders, setSiders] = react.useState([]);
  const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      children,
      hasSider,
      tagName: Tag,
      style
    } = props,
    others = __rest(props, ["prefixCls", "className", "rootClassName", "children", "hasSider", "tagName", "style"]);
  const passedProps = (0,omit/* default */.Z)(others, ['suffixCls']);
  const {
    getPrefixCls,
    className: contextClassName,
    style: contextStyle
  } = (0,context/* useComponentConfig */.dj)('layout');
  const prefixCls = getPrefixCls('layout', customizePrefixCls);
  const mergedHasSider = useHasSider(siders, children, hasSider);
  const [wrapCSSVar, hashId, cssVarCls] = (0,layout_style/* default */.ZP)(prefixCls);
  const classString = classnames_default()(prefixCls, {
    [`${prefixCls}-has-sider`]: mergedHasSider,
    [`${prefixCls}-rtl`]: direction === 'rtl'
  }, contextClassName, className, rootClassName, hashId, cssVarCls);
  const contextValue = react.useMemo(() => ({
    siderHook: {
      addSider: id => {
        setSiders(prev => [].concat((0,toConsumableArray/* default */.Z)(prev), [id]));
      },
      removeSider: id => {
        setSiders(prev => prev.filter(currentId => currentId !== id));
      }
    }
  }), []);
  return wrapCSSVar(/*#__PURE__*/react.createElement(layout_context/* LayoutContext */.V.Provider, {
    value: contextValue
  }, /*#__PURE__*/react.createElement(Tag, Object.assign({
    ref: ref,
    className: classString,
    style: Object.assign(Object.assign({}, contextStyle), style)
  }, passedProps), children)));
});
const Layout = generator({
  tagName: 'div',
  displayName: 'Layout'
})(BasicLayout);
const Header = generator({
  suffixCls: 'header',
  tagName: 'header',
  displayName: 'Header'
})(Basic);
const Footer = generator({
  suffixCls: 'footer',
  tagName: 'footer',
  displayName: 'Footer'
})(Basic);
const Content = generator({
  suffixCls: 'content',
  tagName: 'main',
  displayName: 'Content'
})(Basic);

/* harmony default export */ var layout = (Layout);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/layout/index.js
"use client";



const layout_Layout = layout;
layout_Layout.Header = Header;
layout_Layout.Footer = Footer;
layout_Layout.Content = Content;
layout_Layout.Sider = Sider/* default */.Z;
layout_Layout._InternalSiderContext = Sider/* SiderContext */.D;
/* harmony default export */ var es_layout = (layout_Layout);

/***/ }),

/***/ 97406:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = void 0;
__webpack_unused_export__ = parse;
__webpack_unused_export__ = compile;
exports.EQ = match;
__webpack_unused_export__ = pathToRegexp;
__webpack_unused_export__ = stringify;
const DEFAULT_DELIMITER = "/";
const NOOP_VALUE = (value) => value;
const ID_START = /^[$_\p{ID_Start}]$/u;
const ID_CONTINUE = /^[$\u200c\u200d\p{ID_Continue}]$/u;
const DEBUG_URL = "https://git.new/pathToRegexpError";
const SIMPLE_TOKENS = {
    // Groups.
    "{": "{",
    "}": "}",
    // Reserved.
    "(": "(",
    ")": ")",
    "[": "[",
    "]": "]",
    "+": "+",
    "?": "?",
    "!": "!",
};
/**
 * Escape text for stringify to path.
 */
function escapeText(str) {
    return str.replace(/[{}()\[\]+?!:*]/g, "\\$&");
}
/**
 * Escape a regular expression string.
 */
function escape(str) {
    return str.replace(/[.+*?^${}()[\]|/\\]/g, "\\$&");
}
/**
 * Tokenize input string.
 */
function* lexer(str) {
    const chars = [...str];
    let i = 0;
    function name() {
        let value = "";
        if (ID_START.test(chars[++i])) {
            value += chars[i];
            while (ID_CONTINUE.test(chars[++i])) {
                value += chars[i];
            }
        }
        else if (chars[i] === '"') {
            let pos = i;
            while (i < chars.length) {
                if (chars[++i] === '"') {
                    i++;
                    pos = 0;
                    break;
                }
                if (chars[i] === "\\") {
                    value += chars[++i];
                }
                else {
                    value += chars[i];
                }
            }
            if (pos) {
                throw new TypeError(`Unterminated quote at ${pos}: ${DEBUG_URL}`);
            }
        }
        if (!value) {
            throw new TypeError(`Missing parameter name at ${i}: ${DEBUG_URL}`);
        }
        return value;
    }
    while (i < chars.length) {
        const value = chars[i];
        const type = SIMPLE_TOKENS[value];
        if (type) {
            yield { type, index: i++, value };
        }
        else if (value === "\\") {
            yield { type: "ESCAPED", index: i++, value: chars[i++] };
        }
        else if (value === ":") {
            const value = name();
            yield { type: "PARAM", index: i, value };
        }
        else if (value === "*") {
            const value = name();
            yield { type: "WILDCARD", index: i, value };
        }
        else {
            yield { type: "CHAR", index: i, value: chars[i++] };
        }
    }
    return { type: "END", index: i, value: "" };
}
class Iter {
    constructor(tokens) {
        this.tokens = tokens;
    }
    peek() {
        if (!this._peek) {
            const next = this.tokens.next();
            this._peek = next.value;
        }
        return this._peek;
    }
    tryConsume(type) {
        const token = this.peek();
        if (token.type !== type)
            return;
        this._peek = undefined; // Reset after consumed.
        return token.value;
    }
    consume(type) {
        const value = this.tryConsume(type);
        if (value !== undefined)
            return value;
        const { type: nextType, index } = this.peek();
        throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}: ${DEBUG_URL}`);
    }
    text() {
        let result = "";
        let value;
        while ((value = this.tryConsume("CHAR") || this.tryConsume("ESCAPED"))) {
            result += value;
        }
        return result;
    }
}
/**
 * Tokenized path instance.
 */
class TokenData {
    constructor(tokens) {
        this.tokens = tokens;
    }
}
__webpack_unused_export__ = TokenData;
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options = {}) {
    const { encodePath = NOOP_VALUE } = options;
    const it = new Iter(lexer(str));
    function consume(endType) {
        const tokens = [];
        while (true) {
            const path = it.text();
            if (path)
                tokens.push({ type: "text", value: encodePath(path) });
            const param = it.tryConsume("PARAM");
            if (param) {
                tokens.push({
                    type: "param",
                    name: param,
                });
                continue;
            }
            const wildcard = it.tryConsume("WILDCARD");
            if (wildcard) {
                tokens.push({
                    type: "wildcard",
                    name: wildcard,
                });
                continue;
            }
            const open = it.tryConsume("{");
            if (open) {
                tokens.push({
                    type: "group",
                    tokens: consume("}"),
                });
                continue;
            }
            it.consume(endType);
            return tokens;
        }
    }
    const tokens = consume("END");
    return new TokenData(tokens);
}
/**
 * Compile a string to a template function for the path.
 */
function compile(path, options = {}) {
    const { encode = encodeURIComponent, delimiter = DEFAULT_DELIMITER } = options;
    const data = path instanceof TokenData ? path : parse(path, options);
    const fn = tokensToFunction(data.tokens, delimiter, encode);
    return function path(data = {}) {
        const [path, ...missing] = fn(data);
        if (missing.length) {
            throw new TypeError(`Missing parameters: ${missing.join(", ")}`);
        }
        return path;
    };
}
function tokensToFunction(tokens, delimiter, encode) {
    const encoders = tokens.map((token) => tokenToFunction(token, delimiter, encode));
    return (data) => {
        const result = [""];
        for (const encoder of encoders) {
            const [value, ...extras] = encoder(data);
            result[0] += value;
            result.push(...extras);
        }
        return result;
    };
}
/**
 * Convert a single token into a path building function.
 */
function tokenToFunction(token, delimiter, encode) {
    if (token.type === "text")
        return () => [token.value];
    if (token.type === "group") {
        const fn = tokensToFunction(token.tokens, delimiter, encode);
        return (data) => {
            const [value, ...missing] = fn(data);
            if (!missing.length)
                return [value];
            return [""];
        };
    }
    const encodeValue = encode || NOOP_VALUE;
    if (token.type === "wildcard" && encode !== false) {
        return (data) => {
            const value = data[token.name];
            if (value == null)
                return ["", token.name];
            if (!Array.isArray(value) || value.length === 0) {
                throw new TypeError(`Expected "${token.name}" to be a non-empty array`);
            }
            return [
                value
                    .map((value, index) => {
                    if (typeof value !== "string") {
                        throw new TypeError(`Expected "${token.name}/${index}" to be a string`);
                    }
                    return encodeValue(value);
                })
                    .join(delimiter),
            ];
        };
    }
    return (data) => {
        const value = data[token.name];
        if (value == null)
            return ["", token.name];
        if (typeof value !== "string") {
            throw new TypeError(`Expected "${token.name}" to be a string`);
        }
        return [encodeValue(value)];
    };
}
/**
 * Transform a path into a match function.
 */
function match(path, options = {}) {
    const { decode = decodeURIComponent, delimiter = DEFAULT_DELIMITER } = options;
    const { regexp, keys } = pathToRegexp(path, options);
    const decoders = keys.map((key) => {
        if (decode === false)
            return NOOP_VALUE;
        if (key.type === "param")
            return decode;
        return (value) => value.split(delimiter).map(decode);
    });
    return function match(input) {
        const m = regexp.exec(input);
        if (!m)
            return false;
        const path = m[0];
        const params = Object.create(null);
        for (let i = 1; i < m.length; i++) {
            if (m[i] === undefined)
                continue;
            const key = keys[i - 1];
            const decoder = decoders[i - 1];
            params[key.name] = decoder(m[i]);
        }
        return { path, params };
    };
}
function pathToRegexp(path, options = {}) {
    const { delimiter = DEFAULT_DELIMITER, end = true, sensitive = false, trailing = true, } = options;
    const keys = [];
    const sources = [];
    const flags = sensitive ? "" : "i";
    const paths = Array.isArray(path) ? path : [path];
    const items = paths.map((path) => path instanceof TokenData ? path : parse(path, options));
    for (const { tokens } of items) {
        for (const seq of flatten(tokens, 0, [])) {
            const regexp = sequenceToRegExp(seq, delimiter, keys);
            sources.push(regexp);
        }
    }
    let pattern = `^(?:${sources.join("|")})`;
    if (trailing)
        pattern += `(?:${escape(delimiter)}$)?`;
    pattern += end ? "$" : `(?=${escape(delimiter)}|$)`;
    const regexp = new RegExp(pattern, flags);
    return { regexp, keys };
}
/**
 * Generate a flat list of sequence tokens from the given tokens.
 */
function* flatten(tokens, index, init) {
    if (index === tokens.length) {
        return yield init;
    }
    const token = tokens[index];
    if (token.type === "group") {
        const fork = init.slice();
        for (const seq of flatten(token.tokens, 0, fork)) {
            yield* flatten(tokens, index + 1, seq);
        }
    }
    else {
        init.push(token);
    }
    yield* flatten(tokens, index + 1, init);
}
/**
 * Transform a flat sequence of tokens into a regular expression.
 */
function sequenceToRegExp(tokens, delimiter, keys) {
    let result = "";
    let backtrack = "";
    let isSafeSegmentParam = true;
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        if (token.type === "text") {
            result += escape(token.value);
            backtrack += token.value;
            isSafeSegmentParam || (isSafeSegmentParam = token.value.includes(delimiter));
            continue;
        }
        if (token.type === "param" || token.type === "wildcard") {
            if (!isSafeSegmentParam && !backtrack) {
                throw new TypeError(`Missing text after "${token.name}": ${DEBUG_URL}`);
            }
            if (token.type === "param") {
                result += `(${negate(delimiter, isSafeSegmentParam ? "" : backtrack)}+)`;
            }
            else {
                result += `([\\s\\S]+)`;
            }
            keys.push(token);
            backtrack = "";
            isSafeSegmentParam = false;
            continue;
        }
    }
    return result;
}
function negate(delimiter, backtrack) {
    if (backtrack.length < 2) {
        if (delimiter.length < 2)
            return `[^${escape(delimiter + backtrack)}]`;
        return `(?:(?!${escape(delimiter)})[^${escape(backtrack)}])`;
    }
    if (delimiter.length < 2) {
        return `(?:(?!${escape(backtrack)})[^${escape(delimiter)}])`;
    }
    return `(?:(?!${escape(backtrack)}|${escape(delimiter)})[\\s\\S])`;
}
/**
 * Stringify token data into a path string.
 */
function stringify(data) {
    return data.tokens
        .map(function stringifyToken(token, index, tokens) {
        if (token.type === "text")
            return escapeText(token.value);
        if (token.type === "group") {
            return `{${token.tokens.map(stringifyToken).join("")}}`;
        }
        const isSafe = isNameSafe(token.name) && isNextNameSafe(tokens[index + 1]);
        const key = isSafe ? token.name : JSON.stringify(token.name);
        if (token.type === "param")
            return `:${key}`;
        if (token.type === "wildcard")
            return `*${key}`;
        throw new TypeError(`Unexpected token: ${token}`);
    })
        .join("");
}
function isNameSafe(name) {
    const [first, ...rest] = name;
    if (!ID_START.test(first))
        return false;
    return rest.every((char) => ID_CONTINUE.test(char));
}
function isNextNameSafe(token) {
    if ((token === null || token === void 0 ? void 0 : token.type) !== "text")
        return true;
    return !ID_CONTINUE.test(token.value[0]);
}
//# sourceMappingURL=index.js.map

/***/ })

}]);