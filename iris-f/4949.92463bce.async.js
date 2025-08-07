"use strict";
(self["webpackChunkiris"] = self["webpackChunkiris"] || []).push([[4949],{

/***/ 52631:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ OperationWithModal; }
/* harmony export */ });
/* harmony import */ var _app_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48305);
/* harmony import */ var _app_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75271);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52676);




/**
 * 文本点击项需要弹出一个modal 使用此组件，不要使用useState维护open 避免页面多个modal 多个open state
 * @param props
 * @constructor
 */
var OperationWithModal = function OperationWithModal(props) {
  var children = props.children,
    modalRender = props.modalRender,
    defaultOpen = props.defaultOpen;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultOpen !== null && defaultOpen !== void 0 ? defaultOpen : false),
    _useState2 = _app_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    showModal = _useState2[0],
    setShowModal = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultOpen !== null && defaultOpen !== void 0 ? defaultOpen : false),
    _useState4 = _app_node_modules_pnpm_babel_runtime_7_23_6_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, function (child) {
      if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(child)) {
        var originalOnClick = child.props.onClick;
        var handleWrappedClick = function handleWrappedClick(event) {
          setShowModal(true);
          setOpen(true);
          if (originalOnClick) {
            originalOnClick(event);
          }
        };
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(child, {
          onClick: handleWrappedClick
        });
      }
      return child;
    }), showModal && modalRender && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(modalRender(function () {
      setOpen(false);
      setTimeout(function () {
        setShowModal(false);
      }, 300);
    }), {
      open: open
    })]
  });
};

/***/ }),

/***/ 10134:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ default_table; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(17023);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-table@3.19.0_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@_3jfwm3m7qwnjbryl2vpdkbbpta/node_modules/@ant-design/pro-table/es/Table.js + 100 modules
var Table = __webpack_require__(78273);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/hooks/use-ref-by-props.ts

var useRefByProps = function useRefByProps(ref, init) {
  var internalRef = (0,react.useRef)(init);
  return ref ? ref : internalRef;
};
// EXTERNAL MODULE: ./node_modules/.pnpm/ahooks@3.8.4_react@18.3.1/node_modules/ahooks/es/useDebounceFn/index.js
var useDebounceFn = __webpack_require__(71676);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(73757);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/components/table/default-table/style.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var stylemodules = ({"table":"table___Rup7Y","no-left-title":"no-left-title___t8LWq","noLeftTitle":"no-left-title___t8LWq"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/components/table/default-table/index.tsx












var processRightTitleElements = function processRightTitleElements() {
  var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return elements.map(function (element) {
    if ( /*#__PURE__*/react.isValidElement(element)) {
      var _elementProps$style;
      var elementProps = element.props;
      if (((_elementProps$style = elementProps.style) === null || _elementProps$style === void 0 ? void 0 : _elementProps$style.width) === undefined && elementProps.width === undefined) {
        return /*#__PURE__*/react.cloneElement(element, {
          style: objectSpread2_default()(objectSpread2_default()({}, elementProps.style), {}, {
            width: 240
          })
        });
      }
    }
    return element;
  });
};
var DefaultTable = function DefaultTable(props) {
  var request = props.request,
    columns = props.columns,
    leftTitle = props.leftTitle,
    componentTableProps = props.tableProps,
    dataSource = props.dataSource,
    _props$rightTitle = props.rightTitle,
    rightTitle = _props$rightTitle === void 0 ? [] : _props$rightTitle,
    actionRef = props.actionRef,
    hideTitle = props.hideTitle,
    search = props.search,
    requestReady = props.requestReady;
  var proTableRef = useRefByProps(actionRef);
  var _useState = (0,react.useState)(''),
    _useState2 = slicedToArray_default()(_useState, 2),
    keyword = _useState2[0],
    setKeyword = _useState2[1];
  var latestKeywordRef = (0,react.useRef)('');
  var _useDebounceFn = (0,useDebounceFn/* default */.Z)(function () {
      var _proTableRef$current, _proTableRef$current$;
      (_proTableRef$current = proTableRef.current) === null || _proTableRef$current === void 0 || (_proTableRef$current$ = _proTableRef$current.reloadAndRest) === null || _proTableRef$current$ === void 0 || _proTableRef$current$.call(_proTableRef$current);
    }, {
      wait: 500
    }),
    searchDebounce = _useDebounceFn.run;

  // useUpdateEffect(() => {
  //   proTableRef.current?.reload();
  // }, refreshDeps || []);

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Table/* default */.Z, objectSpread2_default()({
    className: classnames_default()(stylemodules.table, (leftTitle === '' || leftTitle === undefined) && stylemodules.noLeftTitle),
    actionRef: proTableRef,
    headerTitle: leftTitle,
    dataSource: dataSource,
    search: false
    // @ts-ignore todo ts报错
    ,
    columns: columns,
    request: request && !(requestReady && requestReady.some(function (item) {
      return !item;
    })) ? function (params, sort, filter) {
      return request(objectSpread2_default()(objectSpread2_default()({}, params), {}, {
        keyword: latestKeywordRef.current
      }), sort, filter);
    } : undefined,
    pagination: {
      showSizeChanger: true
    },
    options: {
      reload: !!request
    },
    toolBarRender: !hideTitle && function () {
      return [].concat(toConsumableArray_default()(processRightTitleElements(rightTitle)), toConsumableArray_default()(search !== false ? [/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, objectSpread2_default()(objectSpread2_default()({
        value: keyword,
        onChange: function onChange(e) {
          setKeyword(e.target.value);
          latestKeywordRef.current = e.target.value;
          searchDebounce();
        },
        allowClear: true,
        suffix: /*#__PURE__*/(0,jsx_runtime.jsx)(SearchOutlined/* default */.Z, {
          style: {
            color: '#918f8f'
          }
        })
      }, search), {}, {
        style: objectSpread2_default()({
          width: 240
        }, search === null || search === void 0 ? void 0 : search.style)
      }), "__search__input")] : []));
    }
  }, componentTableProps));
};
/* harmony default export */ var default_table = (DefaultTable);

/***/ }),

/***/ 2518:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ td_alink; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(67825);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/components/td-alink/style.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var stylemodules = ({"disabled":"disabled___nnQy2"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/components/td-alink/index.tsx


var _excluded = ["disabled", "children", "onClick", "className", "style"];



var TdAlink = function TdAlink(props) {
  var disabled = props.disabled,
    children = props.children,
    _onClick = props.onClick,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    style = props.style,
    rest = objectWithoutProperties_default()(props, _excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("a", objectSpread2_default()(objectSpread2_default()({
    style: style,
    className: disabled ? stylemodules.disabled + ' ' + className : className,
    onClick: function onClick() {
      if (disabled) {
        return;
      }
      _onClick === null || _onClick === void 0 || _onClick();
    }
  }, rest), {}, {
    children: children
  }));
};
/* harmony default export */ var td_alink = (TdAlink);

/***/ }),

/***/ 48517:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _umijs_max__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88523);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75271);


var useTopoAuth = function useTopoAuth(topoId) {
  var _useModel = (0,_umijs_max__WEBPACK_IMPORTED_MODULE_0__.useModel)('@@initialState'),
    initialState = _useModel.initialState;
  var _ref = (initialState === null || initialState === void 0 ? void 0 : initialState.permission) || {},
    list = _ref.list,
    superuser = _ref.superuser;
  var checkByType = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (type) {
    if (superuser) {
      return true;
    }
    if (!topoId) {
      return false;
    }
    return (list === null || list === void 0 ? void 0 : list.some(function (p) {
      var _p$topo_id;
      return type === p.type && ((_p$topo_id = p.topo_id) === null || _p$topo_id === void 0 ? void 0 : _p$topo_id.some(function (id) {
        return "".concat(id) === "".concat(topoId);
      }));
    })) || false;
  }, [list, superuser, topoId]);
  var isSRE = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return checkByType('PERMISSION_GROUP_TYPE_SRE');
  }, [checkByType]);
  var isBizAuditor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return checkByType('PERMISSION_GROUP_TYPE_BIZ_AUDITOR');
  }, [checkByType]);

  // const isBiz = useMemo(() => {
  //   return checkByType('PERMISSION_GROUP_TYPE_BIZ');
  // }, [checkByType]);
  // const noRole = !isSRE && !isBizAuditor && !isBizAuditor;

  return {
    editTopoYaml: isSRE,
    runOperation: isSRE,
    auditBusinessTemplateVersion: isSRE || isBizAuditor,
    editOpsConf: isSRE
  };
};
/* harmony default export */ __webpack_exports__.Z = (useTopoAuth);

/***/ }),

/***/ 63085:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ diff_params; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js + 1 modules
var InfoCircleOutlined = __webpack_require__(44689);
// EXTERNAL MODULE: ./node_modules/.pnpm/@joyu+joy-design@0.1.26_babel-plugin-macros@3.1.0_date-fns@3.6.0_moment@2.30.1/node_modules/@joyu/joy-design/dist/index.js + 72 modules
var dist = __webpack_require__(26781);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(65611);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/index.js + 5 modules
var tag = __webpack_require__(20089);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/flex/index.js + 2 modules
var flex = __webpack_require__(23538);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(65069);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 20 modules
var typography = __webpack_require__(59326);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(32699);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/pages/config/components/diff-params/style.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var stylemodules = ({"text-ellipsis":"text-ellipsis___leIbU","textEllipsis":"text-ellipsis___leIbU"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/pages/config/components/diff-params/index.tsx









var MemoizedDiffEditor = /*#__PURE__*/react.memo(dist/* DiffEditor */.SV);
function countLines(text) {
  if (!text) return 0;
  return text.split('\n').length;
}
var FlexItem = function FlexItem(props) {
  var label = props.label,
    newValue = props.newValue,
    oldValue = props.oldValue,
    type = props.type;
  var isDifferent = !lodash_default().isEqual(oldValue, newValue);
  var titles = (0,react.useMemo)(function () {
    return {
      original: label,
      modified: label
    };
  }, [label]);
  var renderValue = function renderValue(value) {
    if (type === 'tag') {
      var addedItems = lodash_default().difference(newValue, oldValue);
      var removedItems = lodash_default().difference(newValue, oldValue);
      return /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
        children: value === null || value === void 0 ? void 0 : value.map(function (v, i) {
          var color = '';
          if (addedItems.some(function (d) {
            return d === v;
          })) {
            color = 'green';
          } else if (removedItems.some(function (d) {
            return d === v;
          })) {
            color = 'red';
          }
          return /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
            color: color,
            children: v
          }, i);
        })
      });
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      style: {
        color: isDifferent ? '#1890ff' : ''
      },
      children: value
    });
  };
  if (type === 'code') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        marginTop: 20
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(MemoizedDiffEditor, {
        modifiedContent: newValue,
        originalContent: oldValue,
        titles: titles,
        height: Math.min(Math.max(3, countLines(newValue), countLines(oldValue)), 10) * 19
      })
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
    style: {
      marginBottom: 10
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
      justify: "space-between",
      style: {
        width: '50%',
        paddingRight: 16
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
        title: label,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
          style: {
            width: 120
          },
          className: stylemodules.textEllipsis,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold',
              color: isDifferent ? '#1890ff' : ''
            },
            children: label
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
        type: "secondary",
        style: {
          width: 0,
          flex: 1,
          paddingLeft: 16
        },
        children: renderValue(oldValue)
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
      justify: "space-between",
      style: {
        width: '50%',
        paddingRight: 16
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
        title: label,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
          strong: true,
          style: {
            width: 120
          },
          className: stylemodules.textEllipsis,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold',
              color: isDifferent ? '#1890ff' : ''
            },
            children: label
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(typography/* default */.Z.Text, {
        type: "secondary",
        style: {
          width: 0,
          flex: 1,
          paddingLeft: 16
        },
        children: renderValue(newValue)
      })]
    })]
  });
};
var DiffParams = function DiffParams(props) {
  var oldVersion = props.oldVersion,
    newVersion = props.newVersion;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
        justify: "space-between",
        style: {
          width: '50%',
          paddingRight: 16,
          marginBottom: 10
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          align: "center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              fontWeight: 'bold',
              fontSize: 16
            },
            children: oldVersion.title
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
            color: "blue",
            children: "\u5F53\u524D\u7248\u672C"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(tooltip/* default */.Z, {
          title: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: ["\u66F4\u65B0\u5B8C\u6210\u65F6\u95F4:", oldVersion.updateTime]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: ["\u66F4\u65B0\u4EBA:", oldVersion.updater]
            })]
          }),
          children: ["\u66F4\u65B0\u4FE1\u606F", /*#__PURE__*/(0,jsx_runtime.jsx)(InfoCircleOutlined/* default */.Z, {
            style: {
              marginLeft: 4
            }
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
        justify: "space-between",
        style: {
          width: '50%',
          paddingRight: 16,
          marginBottom: 10
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          align: "center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              fontWeight: 'bold',
              fontSize: 16
            },
            children: newVersion.title
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
            children: "\u9009\u62E9\u7248\u672C"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(tooltip/* default */.Z, {
          title: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: ["\u66F4\u65B0\u5B8C\u6210\u65F6\u95F4:", newVersion.updateTime]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: ["\u66F4\u65B0\u4EBA:", newVersion.updater]
            })]
          }),
          children: ["\u66F4\u65B0\u4FE1\u606F", /*#__PURE__*/(0,jsx_runtime.jsx)(InfoCircleOutlined/* default */.Z, {
            style: {
              marginLeft: 4
            }
          })]
        })]
      })]
    }), newVersion.params.map(function (item, index) {
      var _oldVersion$params;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(FlexItem, {
        label: item.label,
        newValue: item.value,
        oldValue: oldVersion === null || oldVersion === void 0 || (_oldVersion$params = oldVersion.params) === null || _oldVersion$params === void 0 || (_oldVersion$params = _oldVersion$params[index]) === null || _oldVersion$params === void 0 ? void 0 : _oldVersion$params.value,
        type: item.type
      }, item.key || index);
    })]
  });
};
/* harmony default export */ var diff_params = (DiffParams);

/***/ }),

/***/ 25329:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: function() { return /* binding */ getSchemaPropertiesByFieldsDefinitions; },
  D: function() { return /* binding */ widgets; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(67825);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/select/index.js
var es_select = __webpack_require__(21283);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/components/trim-select/index.tsx


var _excluded = ["single"];



var trim = function trim(text) {
  return text === 'string' ? text.trim() : text;
};
var TrimSelect = function TrimSelect(props) {
  var single = props.single,
    rest = objectWithoutProperties_default()(props, _excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, rest), {}, {
    mode: "tags",
    onChange: function onChange(value) {
      if (Array.isArray(value)) {
        var _props$onChange;
        props === null || props === void 0 || (_props$onChange = props.onChange) === null || _props$onChange === void 0 || _props$onChange.call(props, single ? trim(value === null || value === void 0 ? void 0 : value[0]) : value.map(function (item) {
          return trim(item);
        }));
      }
    }
  }));
};
/* harmony default export */ var trim_select = (TrimSelect);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(32699);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// CONCATENATED MODULE: ./src/components/x-render-widget/advance-select/index.tsx







// function deduplicateByValue1(arr: any[], key = 'value') {
//   const map = new Map();
//
//   // 遍历数组，后面的会覆盖前面的
//   arr.forEach((item, index) => {
//     map.set(item[key], { ...item, originalIndex: index });
//   });
//
//   return Array.from(map.values());
// }

var parseValue = function parseValue(value) {
  var data = JSON.parse(value);
  return lodash_default().isObject(data) ? data === null || data === void 0 ? void 0 : data.value : data;
};

// 因为select不支持value为数字 所以分装了这个组件
var AdvanceSelect = function AdvanceSelect(props) {
  var _useState = (0,react.useState)(''),
    _useState2 = slicedToArray_default()(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var value = props.value,
    _onChange = props.onChange,
    options = props.options;
  var innerValue = (0,react.useMemo)(function () {
    if (Array.isArray(value)) {
      return value.map(function (v) {
        return JSON.stringify({
          value: v
        });
      });
    } else {
      return value === '' || value === undefined ? value : JSON.stringify({
        value: value
      });
    }
  }, [value]);
  var innerOptions = (0,react.useMemo)(function () {
    return toConsumableArray_default()((options === null || options === void 0 ? void 0 : options.map(function (item) {
      return objectSpread2_default()(objectSpread2_default()({}, item), {}, {
        label: "".concat(item.label),
        value: JSON.stringify({
          value: item.value
        })
      });
    })) || []);
  }, [options]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, props), {}, {
    value: innerValue,
    onChange: function onChange(value) {
      if (Array.isArray(value)) {
        _onChange === null || _onChange === void 0 || _onChange(value.map(function (v) {
          return parseValue(v);
        }));
      } else {
        _onChange === null || _onChange === void 0 || _onChange(parseValue(value));
      }
    },
    options: innerOptions,
    searchValue: searchValue,
    onSearch: setSearchValue
  }));
};
/* harmony default export */ var advance_select = (AdvanceSelect);
// EXTERNAL MODULE: ./node_modules/.pnpm/@monaco-editor+react@4.6.0_monaco-editor@0.45.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@monaco-editor/react/dist/index.mjs
var dist = __webpack_require__(46842);
;// CONCATENATED MODULE: ./src/components/x-render-widget/editor/index.tsx




var Editor = function Editor(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Editor */.ML, objectSpread2_default()(objectSpread2_default()({
    theme: "slush-poppies"
  }, props), {}, {
    options: objectSpread2_default()({
      minimap: {
        enabled: false
      },
      fontSize: 14,
      wordWrap: 'on',
      scrollBeyondLastLine: false,
      scrollbar: {
        alwaysConsumeMouseWheel: false
      }
    }, props === null || props === void 0 ? void 0 : props.options)
  }));
};
/* harmony default export */ var editor = (Editor);
;// CONCATENATED MODULE: ./src/utils/form-render.ts




var defineTypeMap = {
  input: {
    type: 'string',
    widget: 'input'
  },
  select: {
    type: 'string',
    widget: 'AdvanceSelect'
  },
  multiSelect: {
    type: 'array',
    widget: 'AdvanceSelect',
    props: {
      mode: 'multiple'
    }
  },
  inputSelect: {
    type: 'string',
    widget: 'TrimSelect',
    props: {
      mode: 'tags',
      maxCount: 1,
      single: true
    }
  },
  multiInputSelect: {
    type: 'array',
    widget: 'TrimSelect',
    props: {
      mode: 'tags',
      tokenSeparators: [',', ' ', '\n']
    }
  },
  checkbox: {
    type: 'array',
    widget: 'checkboxes'
  },
  textarea: {
    type: 'string',
    widget: 'textArea',
    cellSpan: 2
  },
  code: {
    type: 'string',
    widget: 'Editor',
    cellSpan: 2,
    props: {
      height: 240
    }
  },
  json: {
    type: 'string',
    widget: 'Editor',
    cellSpan: 2,
    props: {
      height: 240,
      language: 'json'
    }
  },
  // datetime: {},
  number: {
    type: 'number',
    widget: 'inputNumber'
  }
};
var widgets = {
  AdvanceSelect: advance_select,
  Editor: editor,
  TrimSelect: trim_select
};
var getSchemaPropertiesByFieldsDefinitions = function getSchemaPropertiesByFieldsDefinitions(definitions, data) {
  var properties = {};
  if (!definitions) {
    return properties;
  }
  definitions.forEach(function (d) {
    var _defineTypeMap$d$form;
    properties[d.name] = objectSpread2_default()(objectSpread2_default()({
      title: d.title,
      required: !d.optional,
      defaultValue: data === null || data === void 0 ? void 0 : data[d.name]
    }, defineTypeMap[d.form.type]), {}, {
      props: objectSpread2_default()(objectSpread2_default()({}, (_defineTypeMap$d$form = defineTypeMap[d.form.type]) === null || _defineTypeMap$d$form === void 0 ? void 0 : _defineTypeMap$d$form.props), {}, {
        options: d.form["enum"]
      })
    });
  });
  return properties;
};

/***/ }),

/***/ 1810:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kZ: function() { return /* binding */ showSecondTime; }
/* harmony export */ });
/* unused harmony exports getApproximateTime, getFloorDurationTime, durationTimeV1, durationTimeV2 */
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16483);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99312);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__);


dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default()));
var getApproximateTime = function getApproximateTime(time) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '约';
  var d = dayjs(time);
  var timestamp = Date.now();
  var duration = (timestamp - d.utc().valueOf()) / 1000;
  if (duration < 60) {
    return '1分钟内';
  }
  // 1分钟 60，60 分钟60*60
  if (duration < 60 * 60) {
    return "".concat(unit).concat(Math.floor(duration / 60), "\u5206\u949F");
  }
  // 1小时 60*60，24小时 24 * 60 * 60
  if (duration < 24 * 60 * 60) {
    return "".concat(unit).concat(Math.floor(duration / (60 * 60)), "\u5C0F\u65F6");
  }
  if (duration >= 24 * 60 * 60) {
    return "".concat(unit).concat(Math.floor(duration / (60 * 60 * 24)), "\u5929");
  }
  return '';
};
var getFloorDurationTime = function getFloorDurationTime(time) {
  var timestamp = Date.now() / 1000;
  var duration = timestamp - time;
  if (duration < 60) {
    return {
      duration: duration,
      unit: 'second'
    };
  }
  // 1分钟 60，60 分钟60*60
  if (duration < 60 * 60) {
    return {
      duration: Math.floor(duration / 60),
      unit: 'minute'
    };
  }
  // 1小时 60*60，24小时 24 * 60 * 60
  if (duration < 24 * 60 * 60) {
    return {
      duration: Math.floor(duration / (60 * 60)),
      unit: 'hour'
    };
  }
  return {
    duration: Math.floor(duration / (60 * 60 * 24)),
    unit: 'day'
  };
};
var durationTimeV1 = function durationTimeV1(time) {
  var unitZh = {
    second: '秒',
    minute: '分钟',
    hour: '小时',
    day: '天'
  };
  var d = getFloorDurationTime(time);
  if (d.unit === 'second') {
    return '1分钟内';
  }
  return "".concat(d.duration, " ").concat(unitZh[d.unit], "\u524D");
};
var durationTimeV2 = function durationTimeV2(time) {
  var unitZh = {
    second: '秒',
    minute: '分钟',
    hour: '小时',
    day: '天'
  };
  var d = getFloorDurationTime(time);
  if (d.unit === 'second') {
    return '1分钟内';
  }
  return "\u7EA6".concat(d.duration).concat(unitZh[d.unit]);
};
var showSecondTime = function showSecondTime(time) {
  if (!isNaN(Number(time))) {
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(Number(time)).format('YYYY-MM-DD HH:mm:ss');
  }
  return time;
};

/***/ })

}]);