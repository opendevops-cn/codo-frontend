"use strict";
(self["webpackChunkiris"] = self["webpackChunkiris"] || []).push([[769],{

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

/***/ 94005:
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
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/api/codo-iris/index.ts + 53 modules
var codo_iris = __webpack_require__(67682);
// EXTERNAL MODULE: ./src/components/table/default-table/index.tsx + 2 modules
var default_table = __webpack_require__(10134);
// EXTERNAL MODULE: ./src/utils/time.ts
var time = __webpack_require__(1810);
// EXTERNAL MODULE: ./node_modules/.pnpm/@joyu+joy-design@0.1.26_babel-plugin-macros@3.1.0_date-fns@3.6.0_moment@2.30.1/node_modules/@joyu/joy-design/dist/index.js + 72 modules
var dist = __webpack_require__(26781);
// EXTERNAL MODULE: ./node_modules/.pnpm/@monaco-editor+react@4.6.0_monaco-editor@0.45.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@monaco-editor/react/dist/index.mjs
var react_dist = __webpack_require__(46842);
// EXTERNAL MODULE: ./node_modules/.pnpm/ahooks@3.8.4_react@18.3.1/node_modules/ahooks/es/useRequest/index.js + 20 modules
var useRequest = __webpack_require__(18871);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/date-picker/index.js
var date_picker = __webpack_require__(49763);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js + 16 modules
var modal = __webpack_require__(20429);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/row/index.js
var row = __webpack_require__(8909);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/col/index.js
var col = __webpack_require__(27352);
// EXTERNAL MODULE: ./node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(16483);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/pages/audit-log/list/style.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var stylemodules = ({"block":"block___ZJ7zo","page":"page___XOME8"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/pages/audit-log/list/index.tsx

















var RangePicker = date_picker["default"].RangePicker;
var AuditLogList = function AuditLogList() {
  var _useRequest = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiAuditLogSelectOption */.$K)().then(function (res) {
        return res.item;
      });
    }),
    selectOption = _useRequest.data;
  // 设置默认值为最近一周
  var _useState = (0,react.useState)([dayjs_min_default()().subtract(7, 'day').startOf('day'),
    // 一周前的开始时间
    dayjs_min_default()().endOf('day') // 今天的结束时间
    ]),
    _useState2 = slicedToArray_default()(_useState, 2),
    rangeDateValue = _useState2[0],
    setRangeDateValue = _useState2[1];

  // 日期改变处理函数
  var handleRangeChange = function handleRangeChange(dates) {
    setRangeDateValue([dates === null || dates === void 0 ? void 0 : dates[0], dates === null || dates === void 0 ? void 0 : dates[1]]);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: stylemodules.page,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
      style: {
        marginBottom: 0
      },
      children: "\u5BA1\u8BA1\u65E5\u5FD7"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(default_table/* default */.Z, {
      columns: [{
        title: '操作时间',
        dataIndex: 'operate_time',
        width: 180,
        render: function render(text) {
          return (0,time/* showSecondTime */.kZ)(text);
        }
      }, {
        title: '操作用户',
        dataIndex: 'user',
        width: 200,
        ellipsis: true
      }, {
        title: '操作类型',
        dataIndex: 'resource_type',
        width: 120,
        ellipsis: true,
        filters: true,
        valueEnum: Object.fromEntries((selectOption === null || selectOption === void 0 ? void 0 : selectOption.resource_type.map(function (item) {
          return [item, {
            text: item
          }];
        })) || [])
      }, {
        title: '操作行为',
        dataIndex: 'action',
        width: 120,
        ellipsis: true,
        filters: true,
        valueEnum: Object.fromEntries((selectOption === null || selectOption === void 0 ? void 0 : selectOption.action.map(function (item) {
          return [item, {
            text: item
          }];
        })) || [])
      }, {
        title: '操作对象',
        dataIndex: 'resource_name',
        width: 140
      },
      // {
      //   title: '请求路径',
      //   dataIndex: 'request_path',
      //   width: 140,
      //   ellipsis: true,
      // },
      {
        title: '操作结果',
        dataIndex: 'status',
        width: 100,
        render: function render(text, record) {
          return record.status === 'AUDIT_LOG_STATUS_SUCCESS' ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            style: {
              color: '#52c41a'
            },
            children: "\u6210\u529F"
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            style: {
              color: '#ff4d4f'
            },
            children: "\u5931\u8D25"
          });
        }
      }, {
        title: '请求唯一ID',
        dataIndex: 'trace_id',
        width: 260,
        ellipsis: true
      }, {
        title: '操作终端IP',
        dataIndex: 'client_ip',
        width: 140
      }, {
        title: '操作详情',
        dataIndex: 'request_body',
        width: 100,
        render: function render(text, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* OperationWithModal */.FW, {
            modalRender: function modalRender(cancel) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
                maskClosable: false,
                width: 800,
                title: "\u64CD\u4F5C\u8BE6\u60C5",
                onCancel: cancel,
                footer: false,
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(row/* default */.Z, {
                  gutter: [16, 16],
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                    span: 4,
                    children: "\u8BF7\u6C42\u8DEF\u5F84"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                    span: 20,
                    children: record.request_path
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                    span: 4,
                    children: "\u8BF7\u6C42\u65B9\u6CD5"
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                    span: 20,
                    children: record.request_method
                  }), [{
                    label: '请求体数据',
                    value: record.request_body
                  }, {
                    label: '响应体数据',
                    value: record.response_body
                  }].map(function (item) {
                    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                        span: 4,
                        children: item.label
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(col/* default */.Z, {
                        span: 20,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_dist/* Editor */.ML, {
                          theme: "slush-poppies",
                          value: item.value,
                          height: 240,
                          language: "json",
                          options: {
                            readOnly: true,
                            minimap: {
                              enabled: false
                            },
                            fontSize: 14,
                            wordWrap: 'on',
                            scrollBeyondLastLine: false,
                            scrollbar: {
                              alwaysConsumeMouseWheel: false
                            }
                          }
                        })
                      })]
                    });
                  })]
                })
              });
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              children: "\u8BE6\u60C5"
            })
          });
        }
        // render: (text: any, record: AuditLogItem) => {
        //   const requestInfo = text ? JSON.stringify(text) : '';
        //   const responseInfo = record.response_body ? JSON.stringify(record.response_body) : '';
        //   return `${requestInfo}${responseInfo ? ` | ${responseInfo}` : ''}`;
        // },
      }],
      search: {
        placeholder: '关键字模糊搜索'
      },
      tableProps: {
        scroll: {
          x: 1500,
          y: 'calc(100vh - 340px)'
        },
        // 由于列较多，启用横向滚动
        size: 'middle',
        rowKey: 'id',
        params: {
          rangeDateValue: rangeDateValue
        }
      },
      rightTitle: [/*#__PURE__*/(0,jsx_runtime.jsx)(RangePicker, {
        value: [rangeDateValue[0], rangeDateValue[1]],
        onChange: handleRangeChange,
        style: {
          width: 360
        },
        showTime: true // 允许选择时间
        ,
        ranges: {
          今天: [dayjs_min_default()().startOf('day'), dayjs_min_default()().endOf('day')],
          最近一周: [dayjs_min_default()().subtract(7, 'day').startOf('day'), dayjs_min_default()().endOf('day')],
          最近30天: [dayjs_min_default()().subtract(30, 'day').startOf('day'), dayjs_min_default()().endOf('day')],
          最近90天: [dayjs_min_default()().subtract(90, 'day').startOf('day'), dayjs_min_default()().endOf('day')]
        },
        format: "YYYY-MM-DD HH:mm:ss"
      }, "RangePicker")],
      request: ( /*#__PURE__*/function () {
        var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(params, sort, filter) {
          var _rangeDateValue$, _rangeDateValue$2;
          var current, pageSize, keyword, res;
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                current = params.current, pageSize = params.pageSize, keyword = params.keyword;
                _context.next = 3;
                return (0,codo_iris/* postApiAuditLogList */.gl)(objectSpread2_default()({
                  keyword: keyword,
                  page: current,
                  page_size: pageSize,
                  operation_time_gte: (_rangeDateValue$ = rangeDateValue[0]) === null || _rangeDateValue$ === void 0 ? void 0 : _rangeDateValue$.valueOf().toString(),
                  operation_time_lte: (_rangeDateValue$2 = rangeDateValue[1]) === null || _rangeDateValue$2 === void 0 ? void 0 : _rangeDateValue$2.valueOf().toString()
                }, filter));
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
        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }())
    })]
  });
};
/* harmony default export */ var list = (AuditLogList);

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