"use strict";
(self["webpackChunkiris"] = self["webpackChunkiris"] || []).push([[7679],{

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

/***/ 21466:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ list; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./src/api/codo-iris/index.ts + 53 modules
var codo_iris = __webpack_require__(67682);
// EXTERNAL MODULE: ./src/components/edit-operation-with-modal/index.tsx
var edit_operation_with_modal = __webpack_require__(52631);
// EXTERNAL MODULE: ./src/components/table/default-table/index.tsx + 2 modules
var default_table = __webpack_require__(10134);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(65611);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(65069);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/index.js + 5 modules
var tag = __webpack_require__(20089);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/components/tag-list/style.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var stylemodules = ({"tag":"tag___Cjdmk"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/components/tag-list/index.tsx







var TagList = function TagList(props) {
  var items = props.items,
    max = props.max,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
    tagStyle = props.tagStyle;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
      direction: direction,
      size: [4, 0],
      wrap: true,
      children: items.slice(0, max).map(function (item, i) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
          title: item.value,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
            className: stylemodules.tag,
            color: item.color,
            style: objectSpread2_default()({}, tagStyle),
            children: item.value
          }, i)
        }, i);
      })
    }), max && items.length > max && /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
      color: "#ffffff",
      title: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: 12
        },
        children: items.slice(max).map(function (item, i) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
            className: stylemodules.tag,
            color: item.color,
            children: item.value
          }, i);
        })
      }),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
        className: stylemodules.tag,
        children: "..."
      })
    })]
  });
};
/* harmony default export */ var tag_list = (TagList);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/form/index.js + 22 modules
var es_form = __webpack_require__(33313);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/drawer/index.js + 9 modules
var drawer = __webpack_require__(5840);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(43616);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(73757);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/select/index.js
var es_select = __webpack_require__(21283);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/radio/index.js + 5 modules
var es_radio = __webpack_require__(93275);
;// CONCATENATED MODULE: ./src/pages/permission-manage/components/edit-drawer/index.tsx









var EditDrawer = function EditDrawer(_ref) {
  var open = _ref.open,
    onClose = _ref.onClose,
    onSubmit = _ref.onSubmit,
    initialValues = _ref.initialValues,
    topoList = _ref.topoList,
    roleList = _ref.roleList;
  var _Form$useForm = es_form/* default */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  (0,react.useEffect)(function () {
    if (open && initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [open, initialValues, form]);
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var _values;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return form.validateFields();
          case 3:
            _values = _context.sent;
            if (initialValues) {
              _context.next = 9;
              break;
            }
            _context.next = 7;
            return (0,codo_iris/* postApiPermissionGroupCreate */.oo)(objectSpread2_default()({}, _values));
          case 7:
            _context.next = 11;
            break;
          case 9:
            _context.next = 11;
            return (0,codo_iris/* postApiPermissionGroupUpdate */.Uw)(objectSpread2_default()(objectSpread2_default()({}, initialValues), _values));
          case 11:
            onSubmit(_values);
            _context.next = 17;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.error('Validation failed:', _context.t0);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 14]]);
    }));
    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, {
    title: initialValues ? '编辑权限组' : '新增权限组',
    width: 800,
    open: open,
    onClose: onClose,
    maskClosable: false,
    extra: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        onClick: onClose,
        children: "\u53D6\u6D88"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "primary",
        onClick: handleSubmit,
        children: "\u786E\u5B9A"
      })]
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z, {
      form: form,
      layout: "horizontal",
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 20
      },
      initialValues: {
        type: 'PERMISSION_GROUP_TYPE_SRE'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        name: "name",
        label: "\u6743\u9650\u7EC4\u540D\u79F0",
        rules: [{
          required: true,
          message: '请输入权限组名称'
        }, {
          max: 20
        }],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
          placeholder: "\u8BF7\u8F93\u5165\u6743\u9650\u7EC4\u540D\u79F0"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        name: "topo_id",
        label: "\u670D\u52A1\u6811",
        rules: [{
          required: true,
          message: '请选择服务树'
        }],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
          placeholder: "\u8BF7\u9009\u62E9\u670D\u52A1\u6811",
          mode: "multiple",
          children: topoList === null || topoList === void 0 ? void 0 : topoList.map(function (topo) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z.Option, {
              value: topo.id,
              children: topo.name
            }, topo.id);
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        name: "type",
        label: "\u7C7B\u578B",
        rules: [{
          required: true,
          message: '请选择类型'
        }],
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_radio/* default.Group */.ZP.Group, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default */.ZP, {
            value: "PERMISSION_GROUP_TYPE_SRE",
            children: "SRE"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default */.ZP, {
            value: "PERMISSION_GROUP_TYPE_BIZ",
            children: "\u4E1A\u52A1\u4EBA\u5458"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default */.ZP, {
            value: "PERMISSION_GROUP_TYPE_BIZ_AUDITOR",
            children: "\u4E1A\u52A1\u5BA1\u6838\u4EBA"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        name: "role_id",
        label: "\u6388\u6743\u7528\u6237\u7EC4",
        rules: [{
          required: true,
          message: '请输入授权人员'
        }],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
          placeholder: "\u8BF7\u9009\u62E9\u6388\u6743\u4EBA\u5458\u7EC4",
          mode: "tags",
          children: roleList === null || roleList === void 0 ? void 0 : roleList.map(function (topo) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z.Option, {
              value: topo.id,
              children: topo.name
            }, topo.id);
          })
        })
      })]
    })
  });
};
/* harmony default export */ var edit_drawer = (EditDrawer);
// EXTERNAL MODULE: ./node_modules/.pnpm/ahooks@3.8.4_react@18.3.1/node_modules/ahooks/es/useRequest/index.js + 20 modules
var useRequest = __webpack_require__(18871);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js + 16 modules
var modal = __webpack_require__(20429);
;// CONCATENATED MODULE: ./src/pages/permission-manage/list/style.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var list_stylemodules = ({"block":"block___Ou5Xs","page":"page___XU8f_"});
;// CONCATENATED MODULE: ./src/pages/permission-manage/list/index.tsx













var PermissionList = function PermissionList() {
  var tableRef = (0,react.useRef)();
  var _useRequest = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiProxyMgBizList */.Dk)({
        list_all: '1'
      }).then(function (res) {
        return res.list;
      });
    }),
    bizList = _useRequest.data;
  var _useRequest2 = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiProxyMgRoleList */.No)({
        list_all: '1'
      }).then(function (res) {
        return res.list;
      });
    }),
    roleList = _useRequest2.data;
  var _useRequest3 = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiV1TopologyList */.vB)({}).then(function (res) {
        return res.list || [];
      });
    }),
    topoList = _useRequest3.data;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: list_stylemodules.page,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
      style: {
        marginBottom: 0
      },
      children: "\u6743\u9650\u7BA1\u7406"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(default_table/* default */.Z, {
      actionRef: tableRef,
      columns: [{
        title: '权限组',
        dataIndex: 'name',
        width: 200,
        ellipsis: true
      },
      // {
      //   title: '业务',
      //   dataIndex: 'biz_id',
      //   width: 120,
      //   render: (text: any, record: any) =>
      //     bizList?.find((item) => item.biz_id === record.biz_id)?.biz_cn_name,
      // },
      {
        title: '服务树',
        dataIndex: 'topo_id',
        width: 300,
        render: function render(_, record) {
          var _record$topo_id;
          // 根据图片显示多个蓝色标签和+N的样式

          return /*#__PURE__*/(0,jsx_runtime.jsx)(tag_list, {
            max: 3,
            items: (record === null || record === void 0 || (_record$topo_id = record.topo_id) === null || _record$topo_id === void 0 ? void 0 : _record$topo_id.map(function (d) {
              var _topoList$find;
              return {
                value: topoList === null || topoList === void 0 || (_topoList$find = topoList.find(function (v) {
                  return v.id === d;
                })) === null || _topoList$find === void 0 ? void 0 : _topoList$find.name
              };
            })) || []
          });
        }
      }, {
        title: '类型',
        dataIndex: 'type',
        width: 120,
        render: function render(text) {
          var typeMap = {
            PERMISSION_GROUP_TYPE_SRE: {
              color: '#1890ff',
              background: '#e6f7ff',
              text: 'SRE'
            },
            PERMISSION_GROUP_TYPE_BIZ: {
              color: '#52c41a',
              background: '#f6ffed',
              text: '业务人员'
            },
            PERMISSION_GROUP_TYPE_BIZ_AUDITOR: {
              color: '#fa8c16',
              background: '#fff7e6',
              text: '业务审核人'
            }
          };
          var v = typeMap[text] || {};
          return /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
              style: {
                color: v.color,
                backgroundColor: v.background,
                border: "1px solid ".concat(v.color)
              },
              children: v.text
            })
          });
        }
      }, {
        title: '授权用户组',
        dataIndex: 'role_id',
        width: 400,
        render: function render(users, record) {
          var _record$role_id;
          // 根据图片显示多个蓝色标签和+N的样式
          return /*#__PURE__*/(0,jsx_runtime.jsx)(tag_list, {
            max: 3,
            items: ((_record$role_id = record.role_id) === null || _record$role_id === void 0 ? void 0 : _record$role_id.map(function (d) {
              var _roleList$find;
              return {
                value: roleList === null || roleList === void 0 || (_roleList$find = roleList.find(function (v) {
                  return v.id === d;
                })) === null || _roleList$find === void 0 ? void 0 : _roleList$find.name
              };
            })) || []
          });
        }
      }, {
        title: '操作',
        width: 120,
        render: function render(v, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
              modalRender: function modalRender(cancel) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(edit_drawer, {
                  onClose: cancel,
                  bizList: bizList,
                  topoList: topoList,
                  roleList: roleList,
                  initialValues: record,
                  onSubmit: function onSubmit() {
                    var _tableRef$current;
                    cancel();
                    tableRef === null || tableRef === void 0 || (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 || _tableRef$current.reload();
                  }
                });
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
                children: "\u7F16\u8F91"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              onClick: function onClick() {
                modal/* default */.Z.confirm({
                  title: "\u786E\u8BA4\u5220\u9664\u3010".concat(record.name, "\u3011\u6743\u9650\u7EC4"),
                  onOk: function onOk() {
                    (0,codo_iris/* postApiPermissionGroupDelete */.Co)({
                      id: record.id
                    }).then(function () {
                      var _tableRef$current2;
                      tableRef === null || tableRef === void 0 || (_tableRef$current2 = tableRef.current) === null || _tableRef$current2 === void 0 || _tableRef$current2.reload();
                    });
                  }
                });
              },
              children: "\u5220\u9664"
            })]
          });
        }
      }],
      search: {
        placeholder: '关键字模糊搜索'
      },
      tableProps: {
        scroll: {
          x: 1500,
          y: 'calc(100vh - 340px)'
        },
        // 由于列较多，启用横向滚动,
        rowKey: 'id'
      },
      leftTitle: /*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
        modalRender: function modalRender(cancel) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(edit_drawer, {
            onClose: cancel,
            bizList: bizList,
            topoList: topoList,
            roleList: roleList,
            onSubmit: function onSubmit() {
              var _tableRef$current3;
              cancel();
              tableRef === null || tableRef === void 0 || (_tableRef$current3 = tableRef.current) === null || _tableRef$current3 === void 0 || _tableRef$current3.reload(true);
            }
          });
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "primary",
          children: "\u65B0\u589E\u6743\u9650\u7EC4"
        })
      }),
      request: ( /*#__PURE__*/function () {
        var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(params) {
          var current, pageSize, keyword, res;
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                // 这里需要实现具体的数据请求逻辑
                current = params.current, pageSize = params.pageSize, keyword = params.keyword;
                _context.next = 3;
                return (0,codo_iris/* getApiPermissionGroupList */.qm)({
                  keyword: keyword,
                  page: current,
                  page_size: pageSize
                });
              case 3:
                res = _context.sent;
                return _context.abrupt("return", {
                  total: res.total || 0,
                  data: res.list || []
                });
              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }())
    })]
  });
};
/* harmony default export */ var list = (PermissionList);

/***/ }),

/***/ 20089:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ tag; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__(82187);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/rc-util@5.44.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/rc-util/es/omit.js
var omit = __webpack_require__(18051);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/colors.js
var colors = __webpack_require__(94145);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useClosable.js
var useClosable = __webpack_require__(45098);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(71022);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/wave/index.js + 4 modules
var wave = __webpack_require__(66241);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(70045);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs@1.23.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var es = __webpack_require__(55921);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+fast-color@2.0.6/node_modules/@ant-design/fast-color/es/index.js + 1 modules
var fast_color_es = __webpack_require__(84432);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/style/index.js
var style = __webpack_require__(42247);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@1.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83509);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(96968);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/style/index.js




// ============================== Styles ==============================
const genBaseStyle = token => {
  const {
    paddingXXS,
    lineWidth,
    tagPaddingHorizontal,
    componentCls,
    calc
  } = token;
  const paddingInline = calc(tagPaddingHorizontal).sub(lineWidth).equal();
  const iconMarginInline = calc(paddingXXS).sub(lineWidth).equal();
  return {
    // Result
    [componentCls]: Object.assign(Object.assign({}, (0,style/* resetComponent */.Wf)(token)), {
      display: 'inline-block',
      height: 'auto',
      // https://github.com/ant-design/ant-design/pull/47504
      marginInlineEnd: token.marginXS,
      paddingInline,
      fontSize: token.tagFontSize,
      lineHeight: token.tagLineHeight,
      whiteSpace: 'nowrap',
      background: token.defaultBg,
      border: `${(0,es/* unit */.bf)(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
      borderRadius: token.borderRadiusSM,
      opacity: 1,
      transition: `all ${token.motionDurationMid}`,
      textAlign: 'start',
      position: 'relative',
      // RTL
      [`&${componentCls}-rtl`]: {
        direction: 'rtl'
      },
      '&, a, a:hover': {
        color: token.defaultColor
      },
      [`${componentCls}-close-icon`]: {
        marginInlineStart: iconMarginInline,
        fontSize: token.tagIconSize,
        color: token.colorIcon,
        cursor: 'pointer',
        transition: `all ${token.motionDurationMid}`,
        '&:hover': {
          color: token.colorTextHeading
        }
      },
      [`&${componentCls}-has-color`]: {
        borderColor: 'transparent',
        [`&, a, a:hover, ${token.iconCls}-close, ${token.iconCls}-close:hover`]: {
          color: token.colorTextLightSolid
        }
      },
      '&-checkable': {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        cursor: 'pointer',
        [`&:not(${componentCls}-checkable-checked):hover`]: {
          color: token.colorPrimary,
          backgroundColor: token.colorFillSecondary
        },
        '&:active, &-checked': {
          color: token.colorTextLightSolid
        },
        '&-checked': {
          backgroundColor: token.colorPrimary,
          '&:hover': {
            backgroundColor: token.colorPrimaryHover
          }
        },
        '&:active': {
          backgroundColor: token.colorPrimaryActive
        }
      },
      '&-hidden': {
        display: 'none'
      },
      // To ensure that a space will be placed between character and `Icon`.
      [`> ${token.iconCls} + span, > span + ${token.iconCls}`]: {
        marginInlineStart: paddingInline
      }
    }),
    [`${componentCls}-borderless`]: {
      borderColor: 'transparent',
      background: token.tagBorderlessBg
    }
  };
};
// ============================== Export ==============================
const prepareToken = token => {
  const {
    lineWidth,
    fontSizeIcon,
    calc
  } = token;
  const tagFontSize = token.fontSizeSM;
  const tagToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, {
    tagFontSize,
    tagLineHeight: (0,es/* unit */.bf)(calc(token.lineHeightSM).mul(tagFontSize).equal()),
    tagIconSize: calc(fontSizeIcon).sub(calc(lineWidth).mul(2)).equal(),
    // Tag icon is much smaller
    tagPaddingHorizontal: 8,
    // Fixed padding.
    tagBorderlessBg: token.defaultBg
  });
  return tagToken;
};
const prepareComponentToken = token => ({
  defaultBg: new fast_color_es/* FastColor */.t(token.colorFillQuaternary).onBackground(token.colorBgContainer).toHexString(),
  defaultColor: token.colorText
});
/* harmony default export */ var tag_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Tag', token => {
  const tagToken = prepareToken(token);
  return genBaseStyle(tagToken);
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/CheckableTag.js
"use client";

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




const CheckableTag = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      prefixCls: customizePrefixCls,
      style,
      className,
      checked,
      onChange,
      onClick
    } = props,
    restProps = __rest(props, ["prefixCls", "style", "className", "checked", "onChange", "onClick"]);
  const {
    getPrefixCls,
    tag
  } = react.useContext(context/* ConfigContext */.E_);
  const handleClick = e => {
    onChange === null || onChange === void 0 ? void 0 : onChange(!checked);
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  const prefixCls = getPrefixCls('tag', customizePrefixCls);
  // Style
  const [wrapCSSVar, hashId, cssVarCls] = tag_style(prefixCls);
  const cls = classnames_default()(prefixCls, `${prefixCls}-checkable`, {
    [`${prefixCls}-checkable-checked`]: checked
  }, tag === null || tag === void 0 ? void 0 : tag.className, className, hashId, cssVarCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement("span", Object.assign({}, restProps, {
    ref: ref,
    style: Object.assign(Object.assign({}, style), tag === null || tag === void 0 ? void 0 : tag.style),
    className: cls,
    onClick: handleClick
  })));
});
/* harmony default export */ var tag_CheckableTag = (CheckableTag);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genPresetColor.js
var genPresetColor = __webpack_require__(78656);
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/style/presetCmp.js
// Style as status component


// ============================== Preset ==============================
const genPresetStyle = token => (0,genPresetColor/* default */.Z)(token, (colorKey, _ref) => {
  let {
    textColor,
    lightBorderColor,
    lightColor,
    darkColor
  } = _ref;
  return {
    [`${token.componentCls}${token.componentCls}-${colorKey}`]: {
      color: textColor,
      background: lightColor,
      borderColor: lightBorderColor,
      // Inverse color
      '&-inverse': {
        color: token.colorTextLightSolid,
        background: darkColor,
        borderColor: darkColor
      },
      [`&${token.componentCls}-borderless`]: {
        borderColor: 'transparent'
      }
    }
  };
});
// ============================== Export ==============================
/* harmony default export */ var presetCmp = ((0,genStyleUtils/* genSubStyleComponent */.bk)(['Tag', 'preset'], token => {
  const tagToken = prepareToken(token);
  return genPresetStyle(tagToken);
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/capitalize.js
function capitalize(str) {
  if (typeof str !== 'string') {
    return str;
  }
  const ret = str.charAt(0).toUpperCase() + str.slice(1);
  return ret;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/style/statusCmp.js



const genTagStatusStyle = (token, status, cssVariableType) => {
  const capitalizedCssVariableType = capitalize(cssVariableType);
  return {
    [`${token.componentCls}${token.componentCls}-${status}`]: {
      color: token[`color${cssVariableType}`],
      background: token[`color${capitalizedCssVariableType}Bg`],
      borderColor: token[`color${capitalizedCssVariableType}Border`],
      [`&${token.componentCls}-borderless`]: {
        borderColor: 'transparent'
      }
    }
  };
};
// ============================== Export ==============================
/* harmony default export */ var statusCmp = ((0,genStyleUtils/* genSubStyleComponent */.bk)(['Tag', 'status'], token => {
  const tagToken = prepareToken(token);
  return [genTagStatusStyle(tagToken, 'success', 'Success'), genTagStatusStyle(tagToken, 'processing', 'Info'), genTagStatusStyle(tagToken, 'error', 'Error'), genTagStatusStyle(tagToken, 'warning', 'Warning')];
}, prepareComponentToken));
;// CONCATENATED MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/index.js
"use client";

var tag_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};













const InternalTag = /*#__PURE__*/react.forwardRef((tagProps, ref) => {
  const {
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      style,
      children,
      icon,
      color,
      onClose,
      bordered = true,
      visible: deprecatedVisible
    } = tagProps,
    props = tag_rest(tagProps, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "bordered", "visible"]);
  const {
    getPrefixCls,
    direction,
    tag: tagContext
  } = react.useContext(context/* ConfigContext */.E_);
  const [visible, setVisible] = react.useState(true);
  const domProps = (0,omit/* default */.Z)(props, ['closeIcon', 'closable']);
  // Warning for deprecated usage
  if (false) {}
  react.useEffect(() => {
    if (deprecatedVisible !== undefined) {
      setVisible(deprecatedVisible);
    }
  }, [deprecatedVisible]);
  const isPreset = (0,colors/* isPresetColor */.o2)(color);
  const isStatus = (0,colors/* isPresetStatusColor */.yT)(color);
  const isInternalColor = isPreset || isStatus;
  const tagStyle = Object.assign(Object.assign({
    backgroundColor: color && !isInternalColor ? color : undefined
  }, tagContext === null || tagContext === void 0 ? void 0 : tagContext.style), style);
  const prefixCls = getPrefixCls('tag', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = tag_style(prefixCls);
  // Style
  const tagClassName = classnames_default()(prefixCls, tagContext === null || tagContext === void 0 ? void 0 : tagContext.className, {
    [`${prefixCls}-${color}`]: isInternalColor,
    [`${prefixCls}-has-color`]: color && !isInternalColor,
    [`${prefixCls}-hidden`]: !visible,
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-borderless`]: !bordered
  }, className, rootClassName, hashId, cssVarCls);
  const handleCloseClick = e => {
    e.stopPropagation();
    onClose === null || onClose === void 0 ? void 0 : onClose(e);
    if (e.defaultPrevented) {
      return;
    }
    setVisible(false);
  };
  const [, mergedCloseIcon] = (0,useClosable/* default */.Z)((0,useClosable/* pickClosable */.w)(tagProps), (0,useClosable/* pickClosable */.w)(tagContext), {
    closable: false,
    closeIconRender: iconNode => {
      const replacement = /*#__PURE__*/react.createElement("span", {
        className: `${prefixCls}-close-icon`,
        onClick: handleCloseClick
      }, iconNode);
      return (0,reactNode/* replaceElement */.wm)(iconNode, replacement, originProps => ({
        onClick: e => {
          var _a;
          (_a = originProps === null || originProps === void 0 ? void 0 : originProps.onClick) === null || _a === void 0 ? void 0 : _a.call(originProps, e);
          handleCloseClick(e);
        },
        className: classnames_default()(originProps === null || originProps === void 0 ? void 0 : originProps.className, `${prefixCls}-close-icon`)
      }));
    }
  });
  const isNeedWave = typeof props.onClick === 'function' || children && children.type === 'a';
  const iconNode = icon || null;
  const kids = iconNode ? (/*#__PURE__*/react.createElement(react.Fragment, null, iconNode, children && /*#__PURE__*/react.createElement("span", null, children))) : children;
  const tagNode = /*#__PURE__*/react.createElement("span", Object.assign({}, domProps, {
    ref: ref,
    className: tagClassName,
    style: tagStyle
  }), kids, mergedCloseIcon, isPreset && /*#__PURE__*/react.createElement(presetCmp, {
    key: "preset",
    prefixCls: prefixCls
  }), isStatus && /*#__PURE__*/react.createElement(statusCmp, {
    key: "status",
    prefixCls: prefixCls
  }));
  return wrapCSSVar(isNeedWave ? /*#__PURE__*/react.createElement(wave/* default */.Z, {
    component: "Tag"
  }, tagNode) : tagNode);
});
const Tag = InternalTag;
if (false) {}
Tag.CheckableTag = tag_CheckableTag;
/* harmony default export */ var tag = (Tag);

/***/ })

}]);