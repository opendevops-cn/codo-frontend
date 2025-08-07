(self["webpackChunkiris"] = self["webpackChunkiris"] || []).push([[3420],{

/***/ 10134:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

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

/***/ 39038:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
// EXTERNAL MODULE: ./src/api/codo-iris/index.ts + 53 modules
var codo_iris = __webpack_require__(67682);
// EXTERNAL MODULE: ./src/components/table/default-table/index.tsx + 2 modules
var default_table = __webpack_require__(10134);
// EXTERNAL MODULE: ./src/utils/time.ts
var time = __webpack_require__(1810);
// EXTERNAL MODULE: ./node_modules/.pnpm/ahooks@3.8.4_react@18.3.1/node_modules/ahooks/es/useRequest/index.js + 20 modules
var useRequest = __webpack_require__(18871);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
;// CONCATENATED MODULE: ./src/pages/alarm/list/style.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var stylemodules = ({"block":"block___dRprF","page":"page___wSx1r"});
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/pages/alarm/list/index.tsx











var STATUS_MAP = {
  ALARM_STATUS_FIRING: '告警中',
  ALARM_STATUS_RESOLVED: '已恢复'
};
var AlArm = function AlArm() {
  var _useRequest = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiAlarmEventSelectOption */.fP)().then(function (res) {
        return res.item;
      });
    }),
    selectOption = _useRequest.data;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: stylemodules.page,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
      style: {
        marginBottom: 0
      },
      children: "\u544A\u8B66\u4E8B\u4EF6"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(default_table/* default */.Z, {
      columns: [{
        title: '监控项',
        dataIndex: 'name',
        width: 200,
        ellipsis: true
      }, {
        title: '告警级别',
        dataIndex: 'level',
        width: 100,
        valueType: 'select',
        filters: true,
        valueEnum: Object.fromEntries((selectOption === null || selectOption === void 0 ? void 0 : selectOption.level.map(function (item) {
          return [item, {
            text: item
          }];
        })) || [])
      }, {
        title: '告警描述',
        dataIndex: 'description',
        ellipsis: true
      }, {
        title: '业务',
        dataIndex: 'biz',
        width: 120,
        valueType: 'select',
        filters: true,
        valueEnum: Object.fromEntries((selectOption === null || selectOption === void 0 ? void 0 : selectOption.biz.map(function (item) {
          return [item, {
            text: item
          }];
        })) || [])
      }, {
        title: '游戏大区',
        dataIndex: 'big_area',
        width: 120,
        valueType: 'select',
        filters: true,
        valueEnum: Object.fromEntries((selectOption === null || selectOption === void 0 ? void 0 : selectOption.big_area.map(function (item) {
          return [item, {
            text: item
          }];
        })) || [])
      }, {
        title: '集群',
        dataIndex: 'cluster_id',
        width: 100,
        valueType: 'select',
        filters: true,
        valueEnum: Object.fromEntries((selectOption === null || selectOption === void 0 ? void 0 : selectOption.cluster_id.map(function (item) {
          return [item, {
            text: item
          }];
        })) || [])
      }, {
        title: '状态',
        dataIndex: 'status',
        width: 100,
        valueType: 'select',
        filters: true,
        defaultFilteredValue: ['ALARM_STATUS_FIRING'],
        valueEnum: STATUS_MAP,
        render: function render(text, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            style: {
              color: record.status === 'ALARM_STATUS_FIRING' ? '#ff4d4f' : '#52c41a'
            },
            children: STATUS_MAP[record.status]
          });
        }
      }, {
        title: '告警时间',
        dataIndex: 'start_time',
        width: 180,
        sorter: true,
        render: time/* showSecondTime */.kZ
      }, {
        title: '恢复时间',
        dataIndex: 'end_time',
        width: 180,
        sorter: true,
        render: time/* showSecondTime */.kZ
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
        rowKey: 'id'
      },
      request: ( /*#__PURE__*/function () {
        var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(params, sort, filter) {
          var _Object$keys;
          var current, pageSize, keyword, orderBy, res;
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                current = params.current, pageSize = params.pageSize, keyword = params.keyword;
                orderBy = (_Object$keys = Object.keys(sort)) === null || _Object$keys === void 0 ? void 0 : _Object$keys[0];
                _context.next = 4;
                return (0,codo_iris/* postApiAlarmEventList */.M)(objectSpread2_default()({
                  end_time: undefined,
                  keyword: keyword,
                  page: current,
                  page_size: pageSize,
                  start_time: undefined,
                  order_by: orderBy,
                  sort: sort[orderBy] ? {
                    ascend: 'asc',
                    descend: 'desc'
                  }[sort[orderBy]] : undefined
                }, filter));
              case 4:
                res = _context.sent;
                return _context.abrupt("return", {
                  total: res.total || 0,
                  data: res.list || []
                });
              case 6:
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
/* harmony default export */ var list = (AlArm);

/***/ }),

/***/ 1810:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ }),

/***/ 99312:
/***/ (function(module) {

!function(t,i){ true?module.exports=i():0}(this,(function(){"use strict";var t="minute",i=/[+-]\d\d(?::?\d\d)?/g,e=/([+-]|\d\d)/g;return function(s,f,n){var u=f.prototype;n.utc=function(t){var i={date:t,utc:!0,args:arguments};return new f(i)},u.utc=function(i){var e=n(this.toDate(),{locale:this.$L,utc:!0});return i?e.add(this.utcOffset(),t):e},u.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var o=u.parse;u.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var r=u.init;u.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else r.call(this)};var a=u.utcOffset;u.utcOffset=function(s,f){var n=this.$utils().u;if(n(s))return this.$u?0:n(this.$offset)?a.call(this):this.$offset;if("string"==typeof s&&(s=function(t){void 0===t&&(t="");var s=t.match(i);if(!s)return null;var f=(""+s[0]).match(e)||["-",0,0],n=f[0],u=60*+f[1]+ +f[2];return 0===u?0:"+"===n?u:-u}(s),null===s))return this;var u=Math.abs(s)<=16?60*s:s,o=this;if(f)return o.$offset=u,o.$u=0===s,o;if(0!==s){var r=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(u+r,t)).$offset=u,o.$x.$localOffset=r}else o=this.utc();return o};var h=u.format;u.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,i)},u.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var l=u.toDate;u.toDate=function(t){return"s"===t&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var c=u.diff;u.diff=function(t,i,e){if(t&&this.$u===t.$u)return c.call(this,t,i,e);var s=this.local(),f=n(t).local();return c.call(s,f,i,e)}}}));

/***/ })

}]);