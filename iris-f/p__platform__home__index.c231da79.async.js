"use strict";
(self["webpackChunkiris"] = self["webpackChunkiris"] || []).push([[9774],{

/***/ 8319:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ home; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(335);
var createForOfIteratorHelper_default = /*#__PURE__*/__webpack_require__.n(createForOfIteratorHelper);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(82092);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./src/api/codo-iris/index.ts + 53 modules
var codo_iris = __webpack_require__(67682);
// EXTERNAL MODULE: ./src/hooks/auth/use-topo-permission.ts
var use_topo_permission = __webpack_require__(48517);
// EXTERNAL MODULE: ./node_modules/.pnpm/ahooks@3.8.4_react@18.3.1/node_modules/ahooks/es/useRequest/index.js + 20 modules
var useRequest = __webpack_require__(18871);
;// CONCATENATED MODULE: ./src/hooks/use-sse-request.tsx

// import UseSseListener from '@/hooks/use-sse-listener';

function useSseRequest(listenKey, service, options, plugins) {
  // 默认防抖500ms 因为后端返回事件可能短时发送多个type
  var result = (0,useRequest/* default */.Z)(service, // 后端正式环境失效 没搞定，回退为定时刷新，等后期解决后去掉
  objectSpread2_default()({
    debounceWait: 500,
    pollingInterval: 1000
  }, options), plugins);
  // const { refresh } = result;
  // UseSseListener(listenKey, () => {
  //   refresh();
  // });

  return result;
}
/* harmony default export */ var use_sse_request = (useSseRequest);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(67825);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);
// EXTERNAL MODULE: ./src/utils/form-render.ts + 3 modules
var form_render = __webpack_require__(25329);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/QuestionCircleOutlined.js + 1 modules
var QuestionCircleOutlined = __webpack_require__(94068);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js + 16 modules
var modal = __webpack_require__(20429);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(42663);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(65611);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tooltip/index.js + 3 modules
var tooltip = __webpack_require__(65069);
// EXTERNAL MODULE: ./node_modules/.pnpm/form-render@2.5.2_@types+react@18.3.21_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18._xmbdvenacipsjuyhcmetfr4f7q/node_modules/form-render/es/index.js + 205 modules
var es = __webpack_require__(25588);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/pages/platform/home/components/clone-modal/index.tsx




var _excluded = ["target_name"];









var CloneModal = function CloneModal(props) {
  var data = props.data,
    onCancel = props.onCancel,
    open = props.open,
    onOk = props.onOk,
    treeData = props.treeData;
  var form = (0,es/* useForm */.cI)();
  var _useRequest = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiV1TopologyNodeInitFields */.Wm)({
        topo_id: data.topo_id,
        node_id: data.node_id
      });
    }),
    nodeInitFields = _useRequest.data;
  var schema = (0,react.useMemo)(function () {
    return {
      type: 'object',
      properties: {
        node: {
          title: '节点列表',
          description: '最多10个',
          type: 'array',
          widget: 'tableList',
          max: 10,
          items: {
            type: 'object',
            properties: objectSpread2_default()({
              target_name: {
                title: '节点名称',
                type: 'string',
                widget: 'input',
                required: true,
                defaultValue: data === null || data === void 0 ? void 0 : data.name,
                max: 50
              }
            }, (0,form_render/* getSchemaPropertiesByFieldsDefinitions */.o)(nodeInitFields === null || nodeInitFields === void 0 ? void 0 : nodeInitFields.list))
          }
        },
        advanced: {
          type: 'object',
          title: '高级选项',
          widget: 'collapse',
          column: 1,
          properties: {
            parent_node_id: {
              title: '父节点',
              type: 'string',
              widget: 'treeSelect',
              required: true,
              defaultValue: data === null || data === void 0 ? void 0 : data.parent_node_id,
              props: {
                treeData: treeData,
                fieldNames: {
                  label: 'name',
                  value: 'node_id'
                },
                allowClear: true,
                treeDefaultExpandAll: true
              }
            }
          }
        }
      }
    };
  }, [data === null || data === void 0 ? void 0 : data.name, data === null || data === void 0 ? void 0 : data.parent_node_id, nodeInitFields === null || nodeInitFields === void 0 ? void 0 : nodeInitFields.list, treeData]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
    maskClosable: false,
    open: open,
    width: 900,
    onCancel: onCancel,
    onOk: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var formData, targetNames, hasDuplicates, _loop, i;
      return regeneratorRuntime_default()().wrap(function _callee$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return form.validateFields();
          case 2:
            formData = _context2.sent;
            console.log('data', data);
            // todo data.node 数组中 元素是否存在属性target_name相同的元素
            // 检查节点名称是否重复
            targetNames = formData.node.map(function (item) {
              return item.target_name;
            });
            hasDuplicates = targetNames.length !== new Set(targetNames).size;
            if (!hasDuplicates) {
              _context2.next = 9;
              break;
            }
            message/* default */.ZP.error('节点名称不能重复，请修改后重试');
            return _context2.abrupt("return");
          case 9:
            _context2.prev = 9;
            _loop = /*#__PURE__*/regeneratorRuntime_default()().mark(function _loop() {
              var _formData$advanced;
              var node, target_name, fields, key;
              return regeneratorRuntime_default()().wrap(function _loop$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    node = formData.node[i];
                    target_name = node.target_name, fields = objectWithoutProperties_default()(node, _excluded);
                    key = 'clone-loading-message';
                    message/* default */.ZP.loading({
                      content: "\u6B63\u5728\u514B\u9686\u8282\u70B9 ".concat(i + 1, "/").concat(formData.node.length, ": ").concat(node.target_name),
                      key: key
                    });
                    _context.next = 6;
                    return (0,codo_iris/* postApiV1TopologyNodeClone */.Ue)({
                      source_node_id: data.node_id,
                      topo_id: data.topo_id,
                      target_name: target_name,
                      parent_node_id: (_formData$advanced = formData.advanced) === null || _formData$advanced === void 0 ? void 0 : _formData$advanced.parent_node_id,
                      fields: fields // 包含其他字段信息
                    })["finally"](function () {
                      message/* default */.ZP.destroy(key);
                    });
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _loop);
            });
            i = 0;
          case 12:
            if (!(i < formData.node.length)) {
              _context2.next = 17;
              break;
            }
            return _context2.delegateYield(_loop(), "t0", 14);
          case 14:
            i++;
            _context2.next = 12;
            break;
          case 17:
            message/* default */.ZP.success('克隆成功');
            onOk === null || onOk === void 0 || onOk();
            _context2.next = 24;
            break;
          case 21:
            _context2.prev = 21;
            _context2.t1 = _context2["catch"](9);
            message/* default */.ZP.error('克隆失败：' + _context2.t1.message);
          case 24:
          case "end":
            return _context2.stop();
        }
      }, _callee, null, [[9, 21]]);
    })),
    title: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
      children: ["\u786E\u8BA4\u514B\u9686\u8BE5\u62D3\u6251\u8282\u70B9?", /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
        title: "\u514B\u9686\u65F6\u4EC5\u514B\u9686\u8282\u70B9\u914D\u7F6E\u4FE1\u606F\uFF0C\u5176\u4ED6\u4FE1\u606F\u5C06\u4F1A\u6E05\u6D17",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(QuestionCircleOutlined/* default */.Z, {})
      })]
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es/* default */.ZP, {
      initialValues: {},
      form: form,
      schema: schema,
      widgets: form_render/* widgets */.D
    })
  });
};
/* harmony default export */ var clone_modal = (CloneModal);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/EyeOutlined.js + 1 modules
var EyeOutlined = __webpack_require__(68659);
// EXTERNAL MODULE: ./node_modules/.pnpm/@monaco-editor+react@4.6.0_monaco-editor@0.45.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@monaco-editor/react/dist/index.mjs
var dist = __webpack_require__(46842);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/drawer/index.js + 9 modules
var drawer = __webpack_require__(5840);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(43616);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/popconfirm/index.js + 2 modules
var popconfirm = __webpack_require__(57432);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tabs/index.js + 24 modules
var tabs = __webpack_require__(89569);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/flex/index.js + 2 modules
var flex = __webpack_require__(23538);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tree/index.js + 10 modules
var tree = __webpack_require__(1937);
// EXTERNAL MODULE: ./node_modules/.pnpm/js-yaml@4.1.0/node_modules/js-yaml/dist/js-yaml.mjs
var js_yaml = __webpack_require__(80487);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(32699);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ./node_modules/.pnpm/yaml@2.8.0/node_modules/yaml/browser/index.js + 72 modules
var browser = __webpack_require__(96930);
;// CONCATENATED MODULE: ./src/pages/platform/home/components/edit-tree/style.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var stylemodules = ({"content-item":"content-item___V8Wdz","contentItem":"content-item___V8Wdz","highlighted-line-error":"highlighted-line-error___GdhqC","highlightedLineError":"highlighted-line-error___GdhqC"});
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CopyOutlined.js + 1 modules
var CopyOutlined = __webpack_require__(64771);
;// CONCATENATED MODULE: ./src/pages/platform/home/components/preview-yaml-editor/index.tsx













var PreviewYamlEditor = function PreviewYamlEditor(props) {
  var value = props.value,
    title = props.title,
    _onChange = props.onChange,
    onMount = props.onMount,
    readOnly = props.readOnly;
  var _useState = (0,react.useState)([]),
    _useState2 = slicedToArray_default()(_useState, 2),
    expandedKeys = _useState2[0],
    setExpandedKeys = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = slicedToArray_default()(_useState3, 2),
    treeData = _useState4[0],
    setTreeData = _useState4[1];
  var originalValue = (0,react.useRef)();
  var handlePreview = function handlePreview(str) {
    var keys = [];
    var traverseTree = function traverseTree(tree) {
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return tree === null || tree === void 0 ? void 0 : tree.map(function (item, index) {
        var key = "".concat(prefix).concat(index);
        keys.push(key);
        return objectSpread2_default()(objectSpread2_default()({}, item), {}, {
          title: /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
            placement: "left",
            title: item.name,
            children: item.name
          }),
          key: key,
          children: item.children ? traverseTree(item.children, "".concat(key, "-")) : []
        });
      });
    };
    try {
      var data = js_yaml/* default.load */.ZP.load(str);
      setTreeData(traverseTree(data === null || data === void 0 ? void 0 : data.topology));
      setExpandedKeys(keys);
    } catch (e) {
      message/* default */.ZP.warning('yaml数据有误，请修改');
    }
  };
  (0,react.useEffect)(function () {
    if (originalValue.current !== undefined || value === undefined) {
      return;
    }
    originalValue.current = value;
    handlePreview(value);
  }, [value]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
      justify: "space-between",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: stylemodules.contentItem,
        style: {
          width: 0,
          flex: 1,
          marginRight: 20
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: title
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            margin: '10px 0',
            height: 'calc(100vh - 262px)',
            position: 'relative'
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
              return regeneratorRuntime_default()().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return navigator.clipboard.writeText(value || '');
                  case 3:
                    message/* default */.ZP.success('复制成功');
                    _context.next = 9;
                    break;
                  case 6:
                    _context.prev = 6;
                    _context.t0 = _context["catch"](0);
                    message/* default */.ZP.error('复制失败');
                  case 9:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 6]]);
            })),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(CopyOutlined/* default */.Z, {
              style: {
                position: 'absolute',
                top: -28,
                right: 0,
                zIndex: 9999,
                fontSize: 16
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Editor */.ML, {
            theme: "slush-poppies",
            language: "yaml",
            value: value,
            onChange: function onChange(v) {
              _onChange === null || _onChange === void 0 || _onChange(v || '');
            },
            onMount: onMount,
            options: {
              minimap: {
                enabled: false
              },
              fontSize: 14,
              readOnly: readOnly,
              scrollBeyondLastLine: false
            }
          })]
        }), !readOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(flex/* default */.Z, {
          justify: "flex-end",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.Z, {
              styles: {
                root: {
                  width: 240
                }
              },
              title: "\u786E\u8BA4\u91CD\u7F6Eyaml\uFF1F",
              onConfirm: function onConfirm() {
                _onChange === null || _onChange === void 0 || _onChange(originalValue.current);
                handlePreview(originalValue.current);
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                children: "\u91CD\u7F6E"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              icon: /*#__PURE__*/(0,jsx_runtime.jsx)(EyeOutlined/* default */.Z, {}),
              type: "primary",
              onClick: function onClick() {
                handlePreview(value || '');
              },
              children: "\u9884\u89C8"
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: stylemodules.contentItem,
        style: {
          width: 400
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            backgroundColor: '#ffffff',
            width: '100%',
            height: 'calc(100vh - 188px)',
            overflowY: 'auto'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(tree/* default */.Z, {
            treeData: treeData,
            blockNode: true,
            expandedKeys: expandedKeys,
            onExpand: setExpandedKeys
          })
        })
      })]
    })
  });
};
/* harmony default export */ var preview_yaml_editor = (PreviewYamlEditor);
;// CONCATENATED MODULE: ./src/pages/platform/home/components/preview-history-drawer/index.tsx






var PreviewHistoryDrawer = function PreviewHistoryDrawer(props) {
  var id = props.id,
    title = props.title,
    open = props.open,
    onCancel = props.onCancel;
  var _useRequest = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiV1TopologyVersionDetail */.TS)({
        id: id,
        format: 'YAML'
      });
    }),
    detail = _useRequest.data;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, {
    maskClosable: false,
    open: open,
    title: title,
    onClose: onCancel,
    width: 1200,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(preview_yaml_editor, {
      title: "yaml\u6587\u4EF6",
      readOnly: true,
      value: detail === null || detail === void 0 ? void 0 : detail.item
    })
  });
};
/* harmony default export */ var preview_history_drawer = (PreviewHistoryDrawer);
// EXTERNAL MODULE: ./src/utils/time.ts
var time = __webpack_require__(1810);
// EXTERNAL MODULE: ./node_modules/.pnpm/@joyu+joy-design@0.1.26_babel-plugin-macros@3.1.0_date-fns@3.6.0_moment@2.30.1/node_modules/@joyu/joy-design/dist/index.js + 72 modules
var joy_design_dist = __webpack_require__(26781);
// EXTERNAL MODULE: ./node_modules/.pnpm/ahooks@3.8.4_react@18.3.1/node_modules/ahooks/es/useDebounce/index.js
var useDebounce = __webpack_require__(37665);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(73757);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/radio/index.js + 5 modules
var es_radio = __webpack_require__(93275);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/index.js + 108 modules
var table = __webpack_require__(32670);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/index.js + 5 modules
var tag = __webpack_require__(20089);
;// CONCATENATED MODULE: ./src/pages/platform/home/components/edit-history/index.tsx










var EditHistory = function EditHistory(props) {
  var topo_id = props.topo_id;
  var _useState = (0,react.useState)('TopoVersionAll'),
    _useState2 = slicedToArray_default()(_useState, 2),
    source = _useState2[0],
    setSource = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = slicedToArray_default()(_useState3, 2),
    keyword = _useState4[0],
    setKeyword = _useState4[1];
  var _useState5 = (0,react.useState)({
      current: 1,
      pageSize: 10
    }),
    _useState6 = slicedToArray_default()(_useState5, 2),
    pagination = _useState6[0],
    setPagination = _useState6[1];
  var debouncedKeyword = (0,useDebounce/* default */.Z)(keyword, {
    wait: 500
  });
  var _useRequest = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiV1TopologyVersionList */.Ao)({
        source: source,
        page: pagination.current,
        page_size: pagination.pageSize,
        topo_id: topo_id,
        keyword: debouncedKeyword
      }).then(function (res) {
        return res.list || [];
      });
    }, {
      refreshDeps: [source, debouncedKeyword, pagination.current, pagination.pageSize]
    }),
    versionList = _useRequest.data;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
      justify: "space-between",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
        style: {
          width: 320
        },
        placeholder: "\u5173\u952E\u5B57\u6A21\u7CCA\u641C\u7D22",
        value: keyword,
        onChange: function onChange(e) {
          return setKeyword(e.target.value);
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Group */.ZP.Group, {
        block: true,
        value: source,
        onChange: function onChange(e) {
          return setSource(e.target.value);
        },
        options: [{
          label: '全部版本',
          value: 'TopoVersionAll'
        }, {
          label: 'yaml编辑版本',
          value: 'TopoVersionYAML'
        }],
        style: {
          width: 240
        },
        defaultValue: "Apple",
        optionType: "button",
        buttonStyle: "solid"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
      style: {
        marginTop: 20
      },
      pagination: {
        current: pagination.current,
        pageSize: pagination.pageSize,
        onChange: function onChange(current, pageSize) {
          setPagination({
            current: current,
            pageSize: pageSize
          });
        },
        showSizeChanger: true
      },
      size: "small",
      scroll: {
        y: 'calc(100vh - 306px)'
      },
      columns: [{
        dataIndex: 'version',
        title: '版本号',
        render: function render(value, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
            children: [value, record.is_current && /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
              color: "blue",
              children: "\u5F53\u524D\u7248\u672C"
            })]
          });
        }
      }, {
        dataIndex: 'update_by',
        title: '更新人'
      }, {
        dataIndex: 'update_at',
        title: '更新时间',
        render: time/* showSecondTime */.kZ
      }, {
        dataIndex: 'operation',
        title: '操作',
        render: function render(value, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(joy_design_dist/* OperationWithModal */.FW, {
              modalRender: function modalRender(cancel) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(preview_history_drawer, {
                  id: record.id,
                  title: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                      children: record.version
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                      style: {
                        fontSize: 14,
                        color: 'var(--sub-text-color)'
                      },
                      children: ["\u66F4\u65B0\u65F6\u95F4\uFF1A", (0,time/* showSecondTime */.kZ)(record.update_at)]
                    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                      style: {
                        fontSize: 14,
                        color: 'var(--sub-text-color)'
                      },
                      children: ["\u66F4\u65B0\u4EBA\uFF1A", (0,time/* showSecondTime */.kZ)(record.update_by)]
                    })]
                  }),
                  onCancel: cancel
                });
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
                children: "\u67E5\u770B"
              })
            })
          });
        }
      }],
      dataSource: versionList
    })]
  });
};
/* harmony default export */ var edit_history = (EditHistory);
;// CONCATENATED MODULE: ./src/pages/platform/home/components/edit-tree/index.tsx

















var getErrLineById = function getErrLineById(yamlStr, errId, errMessage) {
  var lineCounter = new browser/* default.LineCounter */.ZP.LineCounter();
  var doc = browser/* default.parseDocument */.ZP.parseDocument(yamlStr, {
    lineCounter: lineCounter
  });
  var errLineList = [];
  var transformDeep = function transformDeep(data) {
    var _data$items, _data$items$find;
    if (!(data !== null && data !== void 0 && (_data$items = data.items) !== null && _data$items !== void 0 && _data$items.length)) {
      return;
    }
    var nodeId = (_data$items$find = data.items.find(function (item) {
      var _item$key;
      return (item === null || item === void 0 || (_item$key = item.key) === null || _item$key === void 0 ? void 0 : _item$key.value) === 'nodeId';
    })) === null || _data$items$find === void 0 || (_data$items$find = _data$items$find.value) === null || _data$items$find === void 0 ? void 0 : _data$items$find.value;
    var i = errId.findIndex(function (id) {
      return nodeId === id;
    });
    if (nodeId && i > -1) {
      errLineList.push({
        start: lineCounter.linePos(data.range[0]).line,
        end: lineCounter.linePos(data.range[1]).line - 1,
        error: errMessage === null || errMessage === void 0 ? void 0 : errMessage[i]
      });
    } else {
      data.items.forEach(function (item) {
        var _item$value;
        if (item !== null && item !== void 0 && item.items) {
          transformDeep(item);
        } else if (item !== null && item !== void 0 && (_item$value = item.value) !== null && _item$value !== void 0 && _item$value.items) {
          transformDeep(item.value);
        }
      });
    }
  };
  if (doc.contents) {
    transformDeep(doc.contents);
  }
  return errLineList;
};
var EditTree = function EditTree(props) {
  var open = props.open,
    onCancel = props.onCancel,
    onOk = props.onOk,
    id = props.id;
  var _useState = (0,react.useState)(''),
    _useState2 = slicedToArray_default()(_useState, 2),
    editValue = _useState2[0],
    setEditValue = _useState2[1];
  var errLineList = (0,react.useRef)([]);
  var _useRequest = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiV1TopologyView */.k6)({
        format: 'YAML',
        topo_id: id
      }).then(function (res) {
        setEditValue(res.item);
        return res.item;
      });
    }),
    topoYaml = _useRequest.data;
  var _useState3 = (0,react.useState)([]),
    _useState4 = slicedToArray_default()(_useState3, 2),
    treeData = _useState4[0],
    setTreeData = _useState4[1];
  var _useState5 = (0,react.useState)([]),
    _useState6 = slicedToArray_default()(_useState5, 2),
    expandedKeys = _useState6[0],
    setExpandedKeys = _useState6[1];
  var editorRef = (0,react.useRef)(null);
  var monacoRef = (0,react.useRef)(null);
  var decorationsCollectionRef = (0,react.useRef)(null);
  var setHighlightedLineError = function setHighlightedLineError() {
    decorationsCollectionRef.current.clear();
    // monacoRef.current.editor.setModelMarkers(editorRef.current.getModel()!, 'errLine', []);
    // 设置错误标记
    monacoRef.current.editor.setModelMarkers(editorRef.current.getModel(), 'errLine', errLineList.current.filter(function (item) {
      return item.error;
    }).map(function (item) {
      return {
        severity: monacoRef.current.MarkerSeverity.Error,
        message: item.error,
        startLineNumber: item.start,
        startColumn: 1,
        endLineNumber: item.end + 1,
        endColumn: 0
      };
    }));
    decorationsCollectionRef.current.set(errLineList.current.map(function (item) {
      return {
        range: new monacoRef.current.Range(item.start, 1, item.end, 1),
        // 第5行
        options: {
          isWholeLine: true,
          className: stylemodules.highlightedLineError
          // linesDecorationsClassName: 'highlighted-line-decoration'
        }
      };
    }));
  };
  var handleEdit = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(str) {
      var data, res;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            data = js_yaml/* default.load */.ZP.load(str);
            _context.next = 8;
            break;
          case 4:
            _context.prev = 4;
            _context.t0 = _context["catch"](0);
            message/* default */.ZP.warning('yaml数据有误，请修改');
            return _context.abrupt("return");
          case 8:
            _context.next = 10;
            return (0,codo_iris/* postApiV1TopologyUpdate */.UM)(objectSpread2_default()(objectSpread2_default()({}, data), {}, {
              id: id
            }));
          case 10:
            res = _context.sent;
            if (res.success) {
              _context.next = 16;
              break;
            }
            errLineList.current = getErrLineById(editValue, res.error_items.map(function (v) {
              return v.node_id || '';
            }), res.error_items.map(function (v) {
              return v.error;
            }));
            setHighlightedLineError();
            message/* default */.ZP.error('编辑拓扑错误，请修改');
            return _context.abrupt("return");
          case 16:
            message/* default */.ZP.success('编辑拓扑结构成功');
            onOk === null || onOk === void 0 || onOk();
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 4]]);
    }));
    return function handleEdit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handlePreview = function handlePreview(str) {
    var keys = [];
    var traverseTree = function traverseTree(tree) {
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return tree === null || tree === void 0 ? void 0 : tree.map(function (item, index) {
        var key = "".concat(prefix).concat(index);
        keys.push(key);
        return objectSpread2_default()(objectSpread2_default()({}, item), {}, {
          title: /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
            placement: "left",
            title: item.name,
            children: item.name
          }),
          key: key,
          children: item.children ? traverseTree(item.children, "".concat(key, "-")) : []
        });
      });
    };
    try {
      var data = js_yaml/* default.load */.ZP.load(str);
      setTreeData(traverseTree(data === null || data === void 0 ? void 0 : data.topology));
      setExpandedKeys(keys);
    } catch (e) {
      message/* default */.ZP.warning('yaml数据有误，请修改');
    }
  };
  var handleEditorDidMount = function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    monacoRef.current = monaco;
    decorationsCollectionRef.current = editorRef.current.createDecorationsCollection();
    setTimeout(function () {
      setHighlightedLineError();
    }, 1000);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, {
    open: open,
    title: "\u62D3\u6251\u7ED3\u6784\u7F16\u8F91",
    onClose: onCancel,
    width: 1200,
    maskClosable: false,
    extra: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        onClick: onCancel,
        children: "\u53D6\u6D88"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.Z, {
        styles: {
          root: {
            width: 240
          }
        },
        title: "\u786E\u8BA4\u66F4\u65B0\u62D3\u6251\u7ED3\u6784\uFF1F",
        onConfirm: function onConfirm() {
          handleEdit(editValue);
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "primary",
          children: "\u786E\u5B9A"
        })
      })]
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* default */.Z, {
      style: {
        marginTop: -20
      }
      // activeKey="history"
      ,
      items: [{
        key: 'edit',
        label: '拓扑编辑',
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
          justify: "space-between",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: stylemodules.contentItem,
            style: {
              width: 0,
              flex: 1,
              marginRight: 20
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              children: "YAML\u7F16\u8F91\u533A\u57DF"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              style: {
                margin: '10px 0',
                height: 'calc(100vh - 262px)'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Editor */.ML, {
                theme: "slush-poppies",
                language: "yaml",
                value: editValue,
                onChange: function onChange(v, ev) {
                  setEditValue(v || '');

                  // errLineList为空不需要判断
                  if (!lodash_default().isEmpty(errLineList.current)) {
                    errLineList.current = errLineList.current.filter(function (item) {
                      return !ev.changes.some(function (d) {
                        return d.range.startLineNumber >= item.start && d.range.endLineNumber <= item.end;
                      });
                    });
                    setHighlightedLineError();
                  }
                },
                onMount: handleEditorDidMount,
                options: {
                  minimap: {
                    enabled: false
                  },
                  fontSize: 14,
                  scrollBeyondLastLine: false
                }
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(flex/* default */.Z, {
              justify: "flex-end",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.Z, {
                  styles: {
                    root: {
                      width: 240
                    }
                  },
                  title: "\u786E\u8BA4\u91CD\u7F6Eyaml\uFF1F",
                  onConfirm: function onConfirm() {
                    setEditValue(topoYaml || '');
                    handlePreview(topoYaml || '');
                  },
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                    children: "\u91CD\u7F6E"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(EyeOutlined/* default */.Z, {}),
                  type: "primary",
                  onClick: function onClick() {
                    handlePreview(editValue);
                  },
                  children: "\u9884\u89C8"
                })]
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: stylemodules.contentItem,
            style: {
              width: 400
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              style: {
                backgroundColor: '#ffffff',
                width: '100%',
                height: 'calc(100vh - 188px)',
                overflowY: 'auto'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(tree/* default */.Z, {
                treeData: treeData,
                blockNode: true,
                expandedKeys: expandedKeys,
                onExpand: setExpandedKeys
              })
            })
          })]
        })
      }, {
        key: 'history',
        label: '历史版本',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(edit_history, {
          topo_id: id
        })
      }]
    })
  });
};
/* harmony default export */ var edit_tree = (EditTree);
;// CONCATENATED MODULE: ./src/pages/platform/home/components/monitor/imgs/icon-1.png
var icon_1_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAIJ0lEQVR4Xu3dMW/bRhjGcX2EfIR8hHyEzJ0CdO3gJVuRqUCXAg7QLkUGA82YIUPTqUA9FGiBdlCATu1iIEsQMYCBLoblQWOTVgmrhxJt+SVFkRR5fE/6H/ADAouSreOT4x155I1GTsv5eXrn9UV6/83l/EFylR4vnCbTj+PJ5cdzWfx7tpAiM1url7O30/S56mxyMT+aTNN7qktbvxRTVElZ2KbpyaISxyWVjN2MVbeqYwK5KqqIyXR+tGrdbIWhX2O1kAcZRh1aCZ0b6sqMk8U+sftp74pau8k066fYSoAP+xlEghcX7SvtM7sfoyuLQ+1dghe1OFtEBS87FVD8QoiQ9mU0g5U3l+kDWr39k+1T761hdsK45I/HPklP7H4fvNDXOzhn2uc2B4MUwneYliPl9J7NQ9CiPyDhmuwhmw3WL5xcpEclfxAOkLJg89FrIXywgoVQTa795YD03iekz4ctZr2Njhntog5lpJcQLj78zP4yoIxCaPOzU1nNUi78ImCjq/TY5qhVYdCBtjQvwOapUVlOmaffh3Z27g8ypQq7UoZsrmoVDr3oSqtWMOHWSHSk8ag4u1Wy5IOAthrdY8LAA12r3QrS90NfarWCCX0/9GRrK0jrh77pqRg2d9clofVD367SU5u7rOiqR8JUKwRQeo+xnpRkNwT6UDoYSTj8IhR7GF4dfosbAj25dRhePpm0uBHQF2XuOoBMOEV4a4/4SOj/IbxxFj76fxhK1g9c3WpZeBHoW3ZVhPN/GEo2EOGZfhiM7pzjvg8MRiekE244x3DGo9X6YvYFoHfKHgHEYLIAJpFPwXr194f017/mB+flq3n23W19RGamANofuvfn5EP6+Nn79LOv3qWffP7PQVMdfPfjv9GGMboAPl1Utt0JWFLd2PryLpoA6n/4l0/fFyodtz168j6q1jCaAD5+RstXl7ontv68iiKAz37+r1DJqBbL4dh9AHU4+fSLYgWjmgYnti49ch/AH36n9WtLdWfr0xv3AVR/xlYs6tGgzdanN+4D+PAbzvW1pbqz9emN+wDS/9uNrU9v3AfQViiasfXpDQEM6OHX79Kf/lhew9W1XF1Cs9vkNIrVIEKXHbW9TkW1ufRo69MbAhiIwld2heLFb8VRvrodCp7dVj9rGkL7Gd4QwEBeVJwSsQOtb7/ffBK56VkB+35vCGAgZa1fToFb31aHabtNTq/Zz65i3+8NAQxEc/jsd8tpAsH6turv2W1yTS9L2vd7QwAD2TRBQP06e6qp6vydDes29v3eEMCA7ASBqkGFZv/YumgzI8h+hjcEMDC1durzPXpSHjy7rS6niW0l67L16Q0B3HO2Pr1xH8BNhyhsF8OULPcBrHOoQjlmw3TAniNDfbrUZ+vTG/cB1EjRVizqqTr57YX7AErTy09Y3h1n69GjKAJYdb4MRaqrsskMHkURQHn5qnjFAOV+qbjs5000ARSFkJZws5havlxUARR1rDW6ozW8oeCpnxxb+CS6AOYURM2xUxhV+TpfeEh0jk/fvWrqVgyiDSD2AwHEoAggBkUAMSgCiEERQAyKAGJQBBCDIoAYVPQBZJ2QYp3EJMoAsk7IDdYJCYx1Qjaz9x3HIJoAsk5IPawT0pM2TwU4VJseA+JRFAFs+kAexHM4dh9A1glpJ4ab0sV9AFknpD3WCekAt2S2x5MROmAfX4v6qp4z6IX7ANL/242tT2/cB9BWKJqx9ekNAQyoyTohOW2TX/fVe/UZdpsqtj69IYCBNFknJKfX7Pb6jCYhtO/3hgAG0mSdEKk6j9dkqQb7Xm8IYCBlrV+u7BmIVYvV6LPs9pvY93pDAAPRHD773XJlSy/o6Qd2u5wePmS338S+1xsCGMimCQJl64TkNj3rpazF3MS+1xsCGJCdILDtuYdlT7tqOh/S1qc3BDCwJuuE5HSIbjsD3NanNwRwz9n69MZ9ANv8r8dS1akcL9wHsMmhCrcxG6YDTUZ8uI11QjrAOiHtVZ389sJ9AIVJqc2xTkiHtp0vw21l5w+9UgBn9ocesU5IfRGtEzIbTS4/npe84BLrhFSLqeUTZS+qAArrhBTFuk5IFsDFP8b2hRiwTsherBNyNkqu0tOSF4DevZ2mzxXAY/sCEMQie6M3l/MHhReAACYX86PR64v0vn0BCGEyTe+Nzs/TO/YFIARlb6SSRDoSRtTGWfiWAUxPSjYAepSeXAeQgQhCU+auA0g/EKFd9//ywglpBHTT/8vLZDo/KtkQ6Fx2/s8WDsMIZFY4/OaFwzACKB5+88JVEfRukTGbu1tlMo1rfiCisrn1ywuDEfRmW+uXF1pBdE2ZsjnbWGgF0TVlyuasstAKokPb+362LEbEd0s+CGiubt/PFs3ZL3wY0EB230fbolaQQzHaUnY2XvWoW95cpkzVQjttD722cOccmlubcNpF4VCMBs5sfnYu9AdRhzKirNj8dFJWp2aieJoWBjHLbrXss+gXlPxioLtBx7YyuUi5VIdblAmbk14LIUQuePjyoiY3oU94yPrv820r+gMYHR+eXke7TctqdHxm/0jsJ1fhWy884uMA6Jl+nov6hRyS94/2qeYF2P3tsmgGBFO59of2pctD7rayGiWP7RdCHNz29ZoW3Q/AYTke2leN7+GIodAi+ra3wbNlLYicxPbgKj3VUzHsftr7osGKnpSU0CqGtwidWrudp8zvS1FFLJ/Ump1LHBcqDLsaq25Vx4SuRslaR13mUwt5lR6vTuucaX2x1fp2HL5vzNbqZZw95WxRZwqbDq2eA/c/8cVK+p9zmT0AAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./src/pages/platform/home/components/monitor/imgs/icon-2.png
var icon_2_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAEfElEQVR4Xu2dPW/UMBjH+xH4CHwHdvZuLOzdWdg6IrEjBqZOXWBiODF1QChDJSSmEwMTQhVLX6Al9FLeBCjk78bF97dzds4vae5s6adK9zg++x/7eWzn4m5sBEjlUX1zdljfuTiuH1fHddEwbSgb6mtCOTuuD5q/E9RxdlRvlQf1DW5H0iREaypSXQrGFR4LxflhfT+pmBDu4qTebe8oV2islNVJ/SC6kPiSFROOEUJyu72TGK6rLRwzRZtZh6USgkN1vQJCKkr4eNajV0J3NhS8ViDIsC5OCRdyYWtLX7/YTk/0gtYYuDLWyZjgPKv19Hk2SqfAUl2uIvjiTANmIqzXXMpBw4Euf4hZeJWHrhX0QuNQzr3PHSxl58TLva8fWi/Mc77+zK1SqnFvSQ1FIcRrhy8bMw6IYZxXHcsjViftNrxmzNiBdvB/Ezak4uzDX+0zxpbHZo9MsTHURumbne/1k1uf6p3bn+uPr39r9unTH1f2d5Ofmh3X7G6eiTz7j75p9kRM0QMHmf9BGDQevLj3VbM/3yqv7M/uftHsuEbaISTbE1FCQP4wCbLxAGKxfXfzVBHoVLOrAgO2pyIL6MkgAsLxs4BHb//MwQKyHcNaLWOoYJJUQAQGbnhIULYp4MQkmYCIlNzgWLx6WGnfH4skAr5/+UtrZGzQ27keMUgioDrlSIUpMMUgioBw6KrDV+d8DAKED1yeBN+p1iFWkAkuoFxh2IDDR8P4+r6YInIXMVYswQVc1NtUTMu3ZUFZXL6JGCuW4ALyBLcLmR/Tjr3t86VQpyxcvokYfjG4gBhS+48u5hrKDVEFRF62uYJrZTlsA2odkDeEy2CCC2iCGwakLaaAXI8YZAE9yQJ6kgX0JLiAWELJneJFyPwxBVTB9CrG8i64gK7zQJk/lYBgFPNA11WBzJ9SwNHMAzHvQmUl3BAg88cUUK3D3vYszwMZm4BcjxhkAT3JAnqSBfQkuIDYWoLTtm16yvwxBVTrgDqF3EKTBBewSzBG5kejMMFdBikIPybtYhTzQJdVCAj5+NH1oRVuLl/rS3ABXYewXFrxA/M+yN7bddNGOYRNuK5OQhKjt5lIIuAQjzWxGuJ6xCCJgBhu3MCYyEeaXI8YJBEQwFe57tT4AH8YMkDZSCYgQK/A71ZMGwyqwzcFHrbzzUCZKDtVz5MkFVCFG892VURTQOCbwPZUQMBBfuK7IgKKn/gO8n7wKggo3h+uBnrNS538mn7PpwpkEhgbpIsETsQkv2jjgXjRpj0XRjNm7Ig3NttDJjRjxs7VWVvVQH5w5Fy+7oqU39jsz9yJRmt4uJgvpXZUHg5SMGTMmDAdfZJ7oTN675MpH33igKn3qSn3woVMWS8t5cPHOnE7fAwpr050ep9mmf3hf/Iplj7YgoYttauUdfSJpfOplbbUBpZBNl6HQDtcLFRq/eLK9kYxhfMdsrYkztpaMSEhHJayUXpdV4KQbZApuEIjohD/2SGlcKYEMVGR9vHApF3NXKceirrAhxfi32E0wSGUaP8AcrJji7fMn88AAAAASUVORK5CYII=";
;// CONCATENATED MODULE: ./src/pages/platform/home/components/monitor/imgs/icon-3.png
var icon_3_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAEwklEQVR4Xu2cu27UQBSG9xGoqBEPAA+QB0CiSpEWtF2aFFBGFDSkJQoVNESCBqEoKUAgKiORhjRbIIQUvDIFeCNRWDQUUSLj35fgPTPOXO317p6RPinJ+HLm95lzZsbxDAYeyrd0ci08i1fH5yfb4dkkGJ/Ho+z3JPs57Qe5LVF4dnIAG49Pfw6jNLpC29FpgWgwJDMsEA2eG4Lvp/G9TsUsvG2yG+ZPVDBoTomT8fnkYetC4ibhQglHKYSk7XYupddF4g0XkyxOjtBmqoNVQXLoV0Loijg5Pp0MqR5GpeyykosvD0gyVBetghPpxZYV47gI16UXYeJVqpO0lIPiJYx5KuJEK7EgA4knMyUR1WuqcNJQ0xgPMQrnrqtFJO3K7H1G7E6Jx95nzLQX8pjPHKxEXQgYzveS1KwIcvGK7itUMhrk3bhcFBUqGR2y2Um5DC+pZFRAuwHeE9AKRpsACSSSVDAa4OUZFkx5/GdNnMADJRWMLiygIzMRcPR3nH7688U79D5d0LqAaNiT4710LXiQ3ti/k159ebtVcA/caye7Jx4Utcc3rQkI4YaHW0IDuwY2tOmdrQi4OXomNGSWXH+1lm59fSHY6QOvAqLLoPvQBvQFeKPvbu1NQBi28nZdMLpv3Ny/61VEbwL2Id7psnG0LdhvixcBEV+okX0HcZq2wwZnAdEdEKSpgX0HXdlHdnYWcHP0VDBOxa0P93Po312BKM9/vMsf6vvfn/OuSo+pg7BD22OKk4A23lePP76HOzKPuiw2w3Z6vClOAr6OA8EoFfVGwktovS3waGpfbuOvj8KxdVBPzzHBScCNo8eCQSrqAuJnWm9Lo4CKh4w20HNMcBLQJo61JSC6o2x8p4rRTcLr4iSgzuIA4pysYRQc4xoTMZCv30tneLXyZl2wxQQnAVUJBALTc1Qgk9LrmIL7qmyrQ20woVUBIQY9R4XqmnXQ/RDDMP82Oa+OayZ2EhDuTw2ioHEYmyHb0YyH7lb9HceYLETQmQTiqY332vSSOk4CziqJNHkNFm7psSrw0Oh1THASUJXhZPgQsKnRNuNKtIFexwQnAW0MxjnV+aoxWhNNsRXL+PRYFbCBXscEJwGBadyB9yD2gcumWSp2vu9N2WGzHtkUCkxwFtAm7vgCGRjJB+M90wcJfCzzOwsIbIyfNU1hwBQvAsILqIF9xzX2VXgRELhOw7rER9et8CYgmAcR6QDcFa8CAp0J/KzwLR7wLiBAfLGZpbQFEoavmEdpRcAKJJdZCom5OoZZ1C6ftCpgBQa56NrDw0f5QBoNwyTeJ9WLKowNIZrs/UgbdCLgIjPgf/F1IU4GxS5DtILRJEIXDiQVjBYnB/yhjQPlhzbYF0asZNTkX2yWuxIJlYyai722Qo6DNhSfu6LwF5vmTO1otGybi7kTJ8JWeWGxJ6DkYIYi3fqEvVAXifdVhbc+USP1vnoJ2QsbwbZYVC+h8OZjTWhuPobCsxMR490sOR7+h3exdECZNFSl2M1yGWMi2qy5a6WqIHgu2caM8i3uXEsRFxfaGyPnLqsqGIUvoJBRxm4rXtdUIGSZZAKJQfNCgJWoToWTFYgJQ4rXA/lWUlG/PBR75Ocvz4LCxnjVl2j/AG4SG0zrs/4mAAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/pages/platform/home/components/monitor/imgs/icon-4.png
var icon_4_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAEI0lEQVR4Xu2dvW7bMBDH8wh9hEx5gOx5gGxesvsBMnTM1iW7s2fImDFD9mjP0i1TUdVKUbQoCqEoiqJFKpV/RUnjI2V+HEVZ1h3wQwGLPJL/ksePWPTOTgSr83z3Ic9ndVEsqqLIquXyrfq3VNQbQqnqlKv6XaGOqq5zVedXtB1JrRGtKOYVBNMrPBayv8vl66RiQjj1v3ihCs8NFRorZX1//6Z3IVFItV3CURohabvZhl5Xbbdwq6gYjjZTHYJMOZpVmzUhpKJUbZ9TPbysHbLU8aTAJEN1cTJkpM6mindcRNelTqYOQhnVyWjthDHFmGcDMXGX6qVZu4ugmYVHcqrXismkYaczHmIVXsnQdSE3DmXpfe5gK7sqnvQ+X1Z7oaz5/MFJ1LOA1biPpIYia8Rrhy99KDjQDGOcztIHghs4hd9pj+G1h4IdaAcBr+iD1Dzc3dW/b2+9QB7qZwAybN1yw4MkfD8/rz8cHNTv9vaCKA4P65/X15rfZKhtL2bgQdZ/aDgVJJQBRSwhIP0wCR+PjjQhQoEv6j8Vgwn4fn9fEyIU+KL+UzGYgFQEgHjoAs0HqP9UbJSANE0XNJ9P3tiIgExEQCYiIJONEpDuNrqg+UTACFD/qRhMQFkHMvlyfKwJEcqn+Vzzn4rBBPyjYlmMXoiFNXxR/6kYTECAI6mvJyfNqcrLnYZJWHz2Mg3yIO+Q4oFBBezi2+mpJiA+o+k2ARGQCVtAHIp+VhNCTDA8qYD4jKbjgrrT9vjCEhAxiDZ0bKANtF0+sAQ0BfuxwV1DsgTsOpsbE2gDbZcPLAERQ2iFxka5WGjt8oElIMA6DEKug1Ya0DRcqH9bGT8uL6OsIdkCukAbBmgaLtR/H2WY6EVAl+Mnmob6sEHzU/8xynAhmoAYDpwDAsyGWFKs+8ZBijJ8iSZgrL/zrvsbb4oyfIkiYMxvGQDTNw1SlBFCFAHLszOtghzgb4gyQogioGnzT4+fujDtZkwHBynKCKE3AV0r6JrXNZ0JTl4bIiATEZCJCMikNwGxYKU7AROmM0VT41KUEUJvAnIwNS5FGSFAQPZXfFOs0VKUEUAZ5f1g7FFpBTn8urkZpAxvlsscPTDTHgRgijMhrBtaKcrwAa+IyIs2DJoXbfC6En0guIHX5J4umdAeCnae79qqIsXBifH4uiusvcaOJhDWsHKj0eQuF+ODO2RWr8pr7wSkCQUDxqtPpBc6o/e+J5OrT+wYe99Lq6QXdoP3g20ml4914nb5GKyW3YlG7XubpcTD/8gtlgysk4bN0HWracZExDy3Wytt1kwsEQ5eR4T5ijuutXFxm3tjzh6yNsMqfAuFxA8VXPTS67oMQraTTGao0FjIcBKVVDiTQczmJyaKYtFcJfV4G9Im9VD8HAZieNb+HMYslmj/APdxR8XKcPr/AAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/pages/platform/home/components/monitor/imgs/icon-5.png
var icon_5_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAEs0lEQVR4Xu2dPYsTQRjHr/AD3AewsPQD3Aew18JOS0E/wPUWloLNIRbapdJG5AoF4ZrgJoUIkgPFA+GIwoGgaFCES8KZcX+TzJl7djez6+5s9mUGfnDJvs3875mZ53l2d7KxUUBRx90LJ5Pgqpr2d2bjXnc26Q1CRiGqIoR1CYZq0tuljifHwQ2lupuyHaUWLVpYkYVgssL1YNrr/hkH26WKiXBq0u/wH41UqL6MQuu841xILtIw4SRaSNnu3AWra7hwkgFtljr8V1Hh5DCr1oRQFiMVjvFSj0xl3mUjJ24VTDJSl1SFA+XJ2krmcRHTlSdpOwxlUqfYMp8wWjnm2Rilmlhm8yhCHuzRBEOp15niJw07ieMhXvjMd90UhDF1XFf21pceQtmz4nnry4iwQu/zZYdM1KmApHXkDh4L415Xi7fovtEdPFZ0N9ZJ0ZiNHjtk4Td0Gj5mo8cO2uG+7MoNVWD666U6/vZUw99yeyVgHFxXohRhfny4q45e3VQfn11SB0+21P7D8+rNvXMrYZ/3nYvq8PllfezXwe11Cjwg9i3N//t5+EAdvriiBZDC5AVhP+1d09eQ13XICAHll4WDlew/sltXUfAP4pqyHi5wKiDd9ODxVqSBZcG1qYOsV5E4E5Bx6Z2DrpoVLF/WrUicCchYJBuzLpisZP2KwpmAzJCyIeuCusj6FYUXMCdewJx4AXPiTEAGbtmQdeHSuXYmIFTBjaEOLkM9pwKu25EmbKytI70MYVWZQuI81z6U+33UiXQdxiICfhfJBM4Zl0zAAuV3ReJMQGY+LOF7QhSAuEw0X15v69QUApBReXt/MyKOgW3sQ+qLYziWcyR1U5PEqOUsvOzG0HA+JzU0CZNQld+vAsuX2Z/aC7gMFoT10Mgiss0IhhUyYSSlzBolYByISlYaYRnHOBYQGcxntrFP2uy1ofECusYLmBMvYE5qKSAuhmzIuqAusn5F4UxAZljZkHWR1RXKgjMBoQpW6NL6wKmAQBiV5J+5hGu6tDyDcwENCFlGQgEfsaxEAjgTkK4T131MDGySCqtiXxscqx/zCKMQzhkX1RwFt+o5Cxs3hoQmQsY1zmCek8Fy2NdEHkQd5hkYYBv7YM227rkcD9dawGVrWY6B5f554Zycm5BQjrmNEFBikgp0ZRpOUsCWXDCPvGGBJkZGMFt+sZECpgGRsyQNkmitgEXhBcxJLQWs0sNFtbwnAp/3rkcaUzbUQdarSBDQ6SO++G55nOU84ETL+hSMfsTX+fvBuB6MQ2UIiQ9Yxg31OcFwo8yVh/DjzL3hItwTw/I94VV+ZNHwioh/0SYH+kUbXleSGzzp0G9sLhaZiGz02Dlda6vMcbAxTBevu1L8G5vZObOiUQsXF8vLKLJU3nxNwMiOnhhilz7xVpiaqPWZ4pc+sRNrfcvFW+FKBlKvSPGLjyWSbvExymLVSnmCVpN5NUs/Hv7Dr2KZA+ukYSuL1SzbOCaOUq9aaSuLicV54rU6JCxxl7csxsUGW2PAevv5uqyt4IU3T0iE63ecWF1SQUg9ydR55bdxr6t/2aFM4eIKYuqKTPs786WkguGsWhZKXQYIpn8Og5/uKEi0v3EbmjL1m5o1AAAAAElFTkSuQmCC";
;// CONCATENATED MODULE: ./src/pages/platform/home/components/monitor/style.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var monitor_stylemodules = ({"grid":"grid___nic6Z","card":"card___qS2bI","title":"title___WiP1C","text":"text___kA1x6"});
;// CONCATENATED MODULE: ./src/pages/platform/home/components/monitor/index.tsx











var Monitor = function Monitor(props) {
  var iconMap = {
    '1': icon_1_namespaceObject,
    '2': icon_2_namespaceObject,
    '3': icon_3_namespaceObject,
    '4': icon_4_namespaceObject,
    '5': icon_5_namespaceObject
  };
  var node_id = props.node_id,
    topo_id = props.topo_id;
  var _useRequest = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiV1TopologyNodeMonitorConfig */.sO)({
        node_id: node_id,
        topo_id: topo_id
      }).then(function (res) {
        return res.list || [];
      });
    }, {
      refreshDeps: [node_id, topo_id]
    }),
    monitorConfigList = _useRequest.data;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: monitor_stylemodules.grid,
    children: monitorConfigList === null || monitorConfigList === void 0 ? void 0 : monitorConfigList.map(function (item) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: monitor_stylemodules.card,
        onClick: function onClick() {
          if (!item.link) {
            return;
          }
          window.open(item.link, '_blank');
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: iconMap[item.icon],
          width: 40
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: monitor_stylemodules.title,
          children: item.name
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: monitor_stylemodules.text,
          children: item.description
        })]
      }, item.name);
    })
  });
};
/* harmony default export */ var monitor = (Monitor);
// EXTERNAL MODULE: ./src/utils/constants.ts
var constants = __webpack_require__(32811);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(674);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/EditOutlined.js + 1 modules
var EditOutlined = __webpack_require__(23299);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/DeleteOutlined.js + 1 modules
var DeleteOutlined = __webpack_require__(86743);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(32347);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/MenuUnfoldOutlined.js + 1 modules
var MenuUnfoldOutlined = __webpack_require__(68514);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SettingOutlined.js + 1 modules
var SettingOutlined = __webpack_require__(62237);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/MenuFoldOutlined.js + 1 modules
var MenuFoldOutlined = __webpack_require__(64584);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(17023);
// EXTERNAL MODULE: ./node_modules/.pnpm/ahooks@3.8.4_react@18.3.1/node_modules/ahooks/es/useLocalStorageState/index.js + 5 modules
var useLocalStorageState = __webpack_require__(90328);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/layout/index.js + 2 modules
var layout = __webpack_require__(98859);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/dropdown/index.js + 1 modules
var dropdown = __webpack_require__(62810);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/splitter/index.js + 8 modules
var splitter = __webpack_require__(78867);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/spin/index.js + 6 modules
var spin = __webpack_require__(98042);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/select/index.js
var es_select = __webpack_require__(21283);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/breadcrumb/index.js + 6 modules
var breadcrumb = __webpack_require__(47655);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/alert/index.js + 4 modules
var es_alert = __webpack_require__(57321);
// EXTERNAL MODULE: ./src/components/edit-operation-with-modal/index.tsx
var edit_operation_with_modal = __webpack_require__(52631);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ahooksjs+use-url-state@3.5.1_react-router@6.30.0_react@18.3.1__react@18.3.1/node_modules/@ahooksjs/use-url-state/es/index.js
var use_url_state_es = __webpack_require__(71688);
// EXTERNAL MODULE: ./node_modules/.pnpm/ahooks@3.8.4_react@18.3.1/node_modules/ahooks/es/useMount/index.js
var useMount = __webpack_require__(72422);
;// CONCATENATED MODULE: ./src/hooks/use-local-url-state.ts





function useLocalUrlState(key, initialState, options) {
  // 本地存储状态
  var _useLocalStorageState = (0,useLocalStorageState/* default */.Z)(key, {
      defaultValue: initialState
    }),
    _useLocalStorageState2 = slicedToArray_default()(_useLocalStorageState, 2),
    localUrlState = _useLocalStorageState2[0],
    setLocalUrlState = _useLocalStorageState2[1];

  // URL 状态
  var _useUrlState = (0,use_url_state_es/* default */.Z)(initialState, options),
    _useUrlState2 = slicedToArray_default()(_useUrlState, 2),
    urlState = _useUrlState2[0],
    setUrlState = _useUrlState2[1];

  // 初始化时同步到 URL
  (0,useMount/* default */.Z)(function () {
    if (localUrlState) {
      setUrlState(localUrlState);
    }
  });
  var callback = (0,react.useCallback)(function (value) {
    var newState = typeof value === 'function' ? value(urlState) : value;
    setLocalUrlState(localUrlState ? objectSpread2_default()(objectSpread2_default()(objectSpread2_default()({}, localUrlState), initialState), newState) : undefined);
    setUrlState(newState);
  }, [initialState, localUrlState, setLocalUrlState, setUrlState, urlState]);

  // 返回组合的状态和更新函数
  return [urlState, callback];
}
/* harmony default export */ var use_local_url_state = (useLocalUrlState);
// EXTERNAL MODULE: ./src/components/td-alink/index.tsx + 1 modules
var td_alink = __webpack_require__(2518);
;// CONCATENATED MODULE: ./src/pages/platform/home/components/edit-ref-drawer/index.tsx







var EditRefDrawer = function EditRefDrawer(props) {
  var onCancel = props.onCancel,
    onOk = props.onOk,
    open = props.open,
    initialValues = props.initialValues,
    treeData = props.treeData;
  var form = (0,es/* useForm */.cI)();
  var schema = (0,react.useMemo)(function () {
    return {
      type: 'object',
      properties: Object.fromEntries(Object.entries(initialValues).map(function (_ref) {
        var _ref2 = slicedToArray_default()(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        return [key, {
          title: key,
          type: 'string',
          widget: 'TreeSelect',
          props: {
            treeData: treeData,
            treeDefaultExpandAll: true,
            fieldNames: {
              label: 'name',
              value: 'node_id'
            },
            disabled: !!value
          }
        }];
      }))
    };
  }, [initialValues, treeData]);
  var handleEdit = function handleEdit() {
    form.validateFields().then(function (values) {
      onOk === null || onOk === void 0 || onOk(values);
    });
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, {
    open: open,
    title: "\u7F16\u8F91\u8D44\u6E90\u4F9D\u8D56",
    onClose: onCancel,
    width: 1200,
    maskClosable: false,
    extra: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "primary",
        onClick: function onClick() {
          handleEdit();
        },
        children: "\u786E\u5B9A\u4FEE\u6539"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        onClick: onCancel,
        children: "\u53D6\u6D88"
      })]
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es/* default */.ZP, {
      initialValues: initialValues,
      form: form,
      schema: schema,
      widgets: form_render/* widgets */.D
    })
  });
};
/* harmony default export */ var edit_ref_drawer = (EditRefDrawer);
;// CONCATENATED MODULE: ./src/pages/platform/home/style.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var home_stylemodules = ({"sider-header":"sider-header___dgBHC","siderHeader":"sider-header___dgBHC","sider-content":"sider-content___aNAXO","siderContent":"sider-content___aNAXO","tree-title":"tree-title___sEC7H","treeTitle":"tree-title___sEC7H","tree-search-value":"tree-search-value___m7ArC","treeSearchValue":"tree-search-value___m7ArC","tree-item-selectable":"tree-item-selectable_____XeO","treeItemSelectable":"tree-item-selectable_____XeO","tree-item-title":"tree-item-title____miZS","treeItemTitle":"tree-item-title____miZS","content":"content___Y6QZs","basic-info-content":"basic-info-content___dbW7S","basicInfoContent":"basic-info-content___dbW7S","sub-text":"sub-text___KiJdk","subText":"sub-text___KiJdk","content-config-text":"content-config-text___A4pAw","contentConfigText":"content-config-text___A4pAw","content-item":"content-item___dh73u","contentItem":"content-item___dh73u","circle":"circle___X4at6","content-item-title":"content-item-title___TuUwO","contentItemTitle":"content-item-title___TuUwO"});
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/col/index.js
var col = __webpack_require__(27352);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-markdown@10.1.0_@types+react@18.3.21_react@18.3.1/node_modules/react-markdown/lib/index.js + 128 modules
var lib = __webpack_require__(59070);
;// CONCATENATED MODULE: ./src/pages/platform/home/components/render-item/index.tsx



var render_item_excluded = ["node"];







var RenderItem = function RenderItem(props) {
  var _definition$form2;
  var type = props.type,
    value = props.value,
    definition = props.definition,
    showLabel = props.showLabel;
  var _useState = (0,react.useState)(50),
    _useState2 = slicedToArray_default()(_useState, 2),
    editorHeight = _useState2[0],
    setEditorHeight = _useState2[1];
  var handleEditorDidMount = (0,react.useCallback)(function (editor, monaco) {
    function updateEditorHeight() {
      var lineHeight = editor.getOption(monaco.editor.EditorOption.lineHeight);
      var lineCount = editor.getModel().getLineCount();
      var editorHeight = lineHeight * lineCount;

      // 设置最小高度，例如5行
      var minHeight = lineHeight * 3;

      // 设置最大高度，例如30行
      var maxHeight = lineHeight * 16;
      var newHeight = Math.max(minHeight, Math.min(editorHeight, maxHeight));
      setEditorHeight(newHeight);
    }
    editor.getModel().onDidChangeContent(function () {
      updateEditorHeight();
    });

    // 初始化高度
    updateEditorHeight();
  }, []);
  var showValue = (0,react.useMemo)(function () {
    var _ref, _definition$form$enum, _definition$form;
    if (!showLabel) {
      return value !== null && value !== void 0 ? value : '-';
    }
    return (_ref = (_definition$form$enum = definition === null || definition === void 0 || (_definition$form = definition.form) === null || _definition$form === void 0 || (_definition$form = _definition$form["enum"]) === null || _definition$form === void 0 || (_definition$form = _definition$form.find(function (item) {
      return item.value === value;
    })) === null || _definition$form === void 0 ? void 0 : _definition$form.label) !== null && _definition$form$enum !== void 0 ? _definition$form$enum : value) !== null && _ref !== void 0 ? _ref : '-';
  }, [definition === null || definition === void 0 || (_definition$form2 = definition.form) === null || _definition$form2 === void 0 ? void 0 : _definition$form2["enum"], showLabel, value]);
  if (type === 'json' || type === 'code') {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
      span: 24,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          color: 'var(--sub-text-color)'
        },
        children: definition.title
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          marginTop: 10,
          height: editorHeight
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* Editor */.ML, {
          theme: "slush-poppies",
          language: type === 'json' ? 'json' : '',
          value: value,
          onMount: handleEditorDidMount,
          options: {
            minimap: {
              enabled: false
            },
            fontSize: 14,
            wordWrap: 'on',
            scrollBeyondLastLine: false,
            readOnly: true,
            scrollbar: {
              alwaysConsumeMouseWheel: false
            }
          }
        })
      })]
    });
  }
  if (type === 'markdown') {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
      span: 24,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          color: 'var(--sub-text-color)'
        },
        children: definition.title
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          marginTop: 10,
          maxHeight: 320,
          overflowY: 'auto'
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(lib/* Markdown */.UG, {
          components: {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            a: function a(_ref2) {
              var node = _ref2.node,
                props = objectWithoutProperties_default()(_ref2, render_item_excluded);
              return /*#__PURE__*/(0,jsx_runtime.jsx)("a", objectSpread2_default()({
                target: "_blank",
                rel: "noopener noreferrer"
              }, props));
            }
          },
          children: value
        })
      })]
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
    xxl: 8,
    xl: 12,
    lg: 24,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        color: 'var(--sub-text-color)'
      },
      children: [definition.title, "(", definition.name, ")"]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: home_stylemodules.contentConfigText,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
        title: "".concat(showValue),
        children: "".concat(showValue)
      })
    })]
  });
};
/* harmony default export */ var render_item = (RenderItem);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 30 modules
var _umi_production_exports = __webpack_require__(88523);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/switch/index.js + 2 modules
var es_switch = __webpack_require__(26761);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/collapse/index.js + 8 modules
var collapse = __webpack_require__(42274);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/row/index.js
var row = __webpack_require__(8909);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/empty/index.js + 3 modules
var empty = __webpack_require__(60334);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(31759);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);
;// CONCATENATED MODULE: ./src/pages/platform/home/components/edit-config-drawer/index.tsx












// 定义类型接口


var traverse = function traverse(fields_meta, fields_data) {
  var result = {};
  fields_meta.forEach(function (field) {
    result["##".concat(field.name)] = {
      title: field.name,
      type: 'object',
      column: 2,
      properties: lodash_default().isEmpty(field.children) ? (0,form_render/* getSchemaPropertiesByFieldsDefinitions */.o)(field.definitions, fields_data) : traverse(field.children, fields_data)
    };
  });
  return result;
};
var EditConfigDrawer = function EditConfigDrawer(props) {
  var open = props.open,
    onCancel = props.onCancel,
    editData = props.editData,
    topoId = props.topoId,
    definition = props.definition,
    onOk = props.onOk;
  var form = (0,es/* useForm */.cI)();

  // 递归函数：深度遍历对象，将以##开头的key的对象都平铺成一层
  var flattenValues = function flattenValues(obj) {
    var result = {};
    var traverse = function traverse(currentObj) {
      if (typeof_default()(currentObj) !== 'object' || currentObj === null) {
        return;
      }
      Object.entries(currentObj).forEach(function (_ref) {
        var _ref2 = slicedToArray_default()(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        if (key.startsWith('##')) {
          // 如果key以##开头，递归处理其值
          traverse(value);
        } else {
          // 如果key不以##开头，直接添加到结果中
          result[key] = value;
        }
      });
    };
    traverse(obj);
    return result;
  };
  var handleEdit = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var values, fields;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return form.validateFields();
          case 2:
            values = _context.sent;
            fields = {}; // 处理values，将以##开头的对象都平铺成一层
            if (values) {
              Object.assign(fields, flattenValues(values));
            }
            _context.next = 7;
            return (0,codo_iris/* postApiV1TopologyNodeUpdate */.p0)({
              node: objectSpread2_default()(objectSpread2_default()({}, editData), {}, {
                raw_fields: fields
              }),
              topo_id: topoId
            });
          case 7:
            message/* default */.ZP.success('编辑成功');
            onOk === null || onOk === void 0 || onOk();
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleEdit() {
      return _ref3.apply(this, arguments);
    };
  }();
  var schema = (0,react.useMemo)(function () {
    if (!definition) return;
    var result = {
      type: 'object',
      properties: {
        '##baisc': {
          type: 'object',
          column: 2,
          title: '配置信息',
          widget: 'collapse',
          properties: traverse(definition.fields_meta, definition.raw_fields)
        }
      }
    };
    return result;
  }, [definition]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, {
    open: open,
    title: "\u914D\u7F6E\u53D8\u66F4",
    onClose: onCancel,
    width: 1200,
    maskClosable: false,
    extra: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "primary",
        onClick: function onClick() {
          handleEdit();
        },
        children: "\u786E\u5B9A\u4FEE\u6539"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        onClick: onCancel,
        children: "\u53D6\u6D88"
      })]
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* default */.Z, {
      style: {
        marginTop: -20
      },
      items: [{
        key: 'basic',
        label: '配置编辑',
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es/* default */.ZP, {
          form: form,
          schema: schema,
          widgets: form_render/* widgets */.D
        })
      }]
    })
  });
};
/* harmony default export */ var edit_config_drawer = (EditConfigDrawer);
;// CONCATENATED MODULE: ./src/pages/platform/home/components/config-info/style.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var config_info_stylemodules = ({"content-item-title":"content-item-title___rF3w5","contentItemTitle":"content-item-title___rF3w5","circle":"circle___luwvr","sub-text":"sub-text___lf1NA","subText":"sub-text___lf1NA"});
;// CONCATENATED MODULE: ./src/pages/platform/home/components/config-info/index.tsx


















var CONFIG_LIST = [
// {
//   name: '健康检查',
//   key: 'health',
//   title: '',
// },
{
  name: '资源依赖',
  key: 'ref',
  editable: false
}, {
  name: '资源状态',
  key: 'status',
  editable: false
}, {
  name: '配置信息',
  key: 'basic',
  editable: true
}];
var NODE_DISPLAY_TAG_COLOR_MAP = {
  NodeDisplayStateUninitialized: '',
  NodeDisplayStateRunning: 'blue',
  NodeDisplayStateHealthy: 'green',
  NodeDisplayStateUnhealthy: 'red'
};
var ConfigInfo = function ConfigInfo(props) {
  var topoConfig = props.topoConfig,
    selectedNode = props.selectedNode,
    topoId = props.topoId,
    onEditOk = props.onEditOk,
    nodeList = props.nodeList,
    readonly = props.readonly,
    topoLogy = props.topoLogy;
  var _useState = (0,react.useState)(true),
    _useState2 = slicedToArray_default()(_useState, 2),
    showRender = _useState2[0],
    setShowRender = _useState2[1];
  var _useLocalStorageState = (0,useLocalStorageState/* default */.Z)('iris-platform-config-info-collapse-default-active-key-map', {
      defaultValue: {}
    }),
    _useLocalStorageState2 = slicedToArray_default()(_useLocalStorageState, 2),
    collapseDefaultActiveKeyMap = _useLocalStorageState2[0],
    setCollapseDefaultActiveKeyMap = _useLocalStorageState2[1];
  var handleChangeCollapseDefaultActiveKey = function handleChangeCollapseDefaultActiveKey(key, value) {
    setCollapseDefaultActiveKeyMap(objectSpread2_default()(objectSpread2_default()({}, collapseDefaultActiveKeyMap), {}, defineProperty_default()({}, key, value)));
  };
  var fileData = (0,react.useMemo)(function () {
    return showRender ? topoConfig.basic.fields_data : topoConfig.basic.raw_fields;
  }, [showRender, topoConfig.basic]);
  return CONFIG_LIST.map(function (item) {
    var _topoConfig$basic, _topoConfig$basic2;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
        justify: "space-between",
        style: {
          marginBottom: 10
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: config_info_stylemodules.contentItemTitle,
            children: item.name
          }), item.editable && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: ["\u6E32\u67D3", /*#__PURE__*/(0,jsx_runtime.jsx)(es_switch/* default */.Z, {
              value: showRender,
              onChange: function onChange(checked) {
                setShowRender(checked);
              }
            })]
          }), item.key === 'basic' && selectedNode.fields_changed && /*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.Z, {
            type: "error",
            message: "\u7EBF\u4E0A\u7248\u672C\u914D\u7F6E\u5DF2\u843D\u540E\u4E8E\u5F53\u524D\u914D\u7F6E\uFF0C\u8BF7\u6CE8\u610F\u66F4\u65B0",
            showIcon: true
          })]
        }), item.editable && !readonly && /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(joy_design_dist/* OperationWithModal */.FW, {
            modalRender: function modalRender(cancel) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(edit_config_drawer, {
                onCancel: cancel,
                editData: selectedNode,
                topoId: topoId,
                definition: topoConfig.basic,
                onOk: function onOk() {
                  cancel();
                  onEditOk === null || onEditOk === void 0 || onEditOk();
                }
              });
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
              type: "primary",
              children: "\u7F16\u8F91"
            })
          })
        }), (topoConfig === null || topoConfig === void 0 ? void 0 : topoConfig.ref) && item.key === 'ref' && !readonly && /*#__PURE__*/(0,jsx_runtime.jsx)(joy_design_dist/* OperationWithModal */.FW, {
          modalRender: function modalRender(cancel) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(edit_ref_drawer, {
              onCancel: cancel,
              initialValues: topoConfig.ref,
              treeData: topoLogy,
              onOk: function onOk(values) {
                (0,codo_iris/* postApiV1TopologyNodePartialUpdate */.OS)({
                  topo_id: topoId,
                  node_id: selectedNode.node_id,
                  resource_version: selectedNode.resource_version,
                  name: selectedNode.name,
                  ref: values
                }).then(function () {
                  message/* default */.ZP.success('编辑资源依赖成功');
                  cancel();
                });
              }
            });
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "primary",
            children: "\u7F16\u8F91"
          })
        })]
      }), item.key === 'ref' && /*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.Z, {
        style: {
          minWidth: 400,
          marginBottom: 24
        },
        defaultActiveKey: (collapseDefaultActiveKeyMap === null || collapseDefaultActiveKeyMap === void 0 ? void 0 : collapseDefaultActiveKeyMap.ref) || [],
        onChange: function onChange(v) {
          handleChangeCollapseDefaultActiveKey('ref', v);
        },
        items: [{
          key: 'ref',
          label: '',
          children: !lodash_default().isEmpty(topoConfig === null || topoConfig === void 0 ? void 0 : topoConfig.ref) ? /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
            gutter: [16, 16],
            children: Object.entries((topoConfig === null || topoConfig === void 0 ? void 0 : topoConfig.ref) || {}).map(function (_ref) {
              var _ref2 = slicedToArray_default()(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];
              var node = nodeList.find(function (d) {
                return d.node_id === value;
              });
              return /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
                xxl: 8,
                xl: 12,
                lg: 24,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  style: {
                    color: 'var(--sub-text-color)',
                    marginBottom: 8
                  },
                  children: key
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  children: node ? /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Link, {
                    to: "/platform?nodeId=".concat(node.node_id, "&topoId=").concat(topoId),
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
                      color: NODE_DISPLAY_TAG_COLOR_MAP[node.display_state],
                      children: (node === null || node === void 0 ? void 0 : node.name) || '-'
                    })
                  }) : '-'
                })]
              }, key);
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z, {
            image: empty/* default */.Z.PRESENTED_IMAGE_SIMPLE
          })
        }]
      }), item.key === 'status' && /*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.Z, {
        style: {
          minWidth: 400,
          marginBottom: 24
        },
        defaultActiveKey: (collapseDefaultActiveKeyMap === null || collapseDefaultActiveKeyMap === void 0 ? void 0 : collapseDefaultActiveKeyMap.status) || [],
        onChange: function onChange(v) {
          handleChangeCollapseDefaultActiveKey('status', v);
        },
        items: [{
          key: 'status',
          label: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            style: {
              fontWeight: 'bold'
            },
            children: "\u8D44\u6E90\u72B6\u6001"
          }),
          children: !lodash_default().isEmpty(topoConfig === null || topoConfig === void 0 ? void 0 : topoConfig.status) ? /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
            gutter: [16, 16],
            children: Object.entries((topoConfig === null || topoConfig === void 0 ? void 0 : topoConfig.status) || {}).map(function (_ref3) {
              var _ref4 = slicedToArray_default()(_ref3, 2),
                key = _ref4[0],
                value = _ref4[1];
              return /*#__PURE__*/(0,jsx_runtime.jsxs)(col/* default */.Z, {
                xxl: 8,
                xl: 12,
                lg: 24,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  style: {
                    color: 'var(--sub-text-color)'
                  },
                  children: key
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  children: [" ", value]
                })]
              }, key);
            })
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z, {
            image: empty/* default */.Z.PRESENTED_IMAGE_SIMPLE
          })
        }]
      }), item.key === 'basic' && (!lodash_default().isEmpty(topoConfig === null || topoConfig === void 0 || (_topoConfig$basic = topoConfig.basic) === null || _topoConfig$basic === void 0 ? void 0 : _topoConfig$basic.fields_meta) ? topoConfig === null || topoConfig === void 0 || (_topoConfig$basic2 = topoConfig.basic) === null || _topoConfig$basic2 === void 0 ? void 0 : _topoConfig$basic2.fields_meta.map(function (data, index) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.Z, {
          style: {
            minWidth: 400,
            marginBottom: 24
          },
          defaultActiveKey: (collapseDefaultActiveKeyMap === null || collapseDefaultActiveKeyMap === void 0 ? void 0 : collapseDefaultActiveKeyMap.basic) || [],
          onChange: function onChange(v) {
            handleChangeCollapseDefaultActiveKey('basic', v);
          },
          className: config_info_stylemodules.basicInfoContent,
          items: [{
            key: 'basic_info',
            label: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: data.name
              }), data.ops_template_id && /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Link, {
                to: "/config-center?category=ConfTemplateCategory_Ops&topoId=".concat(topoId, "&templateId=").concat(data.ops_template_id),
                children: "\u70B9\u51FB\u524D\u5F80\u914D\u7F6E\u53D8\u66F4"
              }), data.business_template_id && /*#__PURE__*/(0,jsx_runtime.jsx)(_umi_production_exports.Link, {
                to: "/config-center?category=ConfTemplateCategory_Business&topoId=".concat(topoId, "&templateId=").concat(data.business_template_id),
                children: "\u70B9\u51FB\u524D\u5F80\u914D\u7F6E\u53D8\u66F4"
              })]
            }),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: (!lodash_default().isEmpty(data === null || data === void 0 ? void 0 : data.children) ? toConsumableArray_default()(data === null || data === void 0 ? void 0 : data.children) : [data]).map(function (item, index) {
                return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                  style: {
                    marginTop: index !== 0 ? 32 : 0
                  },
                  children: [!lodash_default().isEmpty(data === null || data === void 0 ? void 0 : data.children) && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: config_info_stylemodules.subText,
                    children: item.name
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    children: !lodash_default().isEmpty(item.definitions) ? /*#__PURE__*/(0,jsx_runtime.jsx)(row/* default */.Z, {
                      gutter: [16, 16]
                      // style={{ marginTop: index === 0 ? 8 : 24 }}
                      ,
                      children: item.definitions.map(function (d) {
                        var v = fileData === null || fileData === void 0 ? void 0 : fileData[d.name];
                        return /*#__PURE__*/(0,jsx_runtime.jsx)(render_item, {
                          definition: d,
                          type: d.render,
                          showLabel: showRender,
                          value: v
                        }, d.name);
                      })
                    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z, {
                      image: empty/* default */.Z.PRESENTED_IMAGE_SIMPLE
                    })
                  })]
                }, item.name);
              })
            })
          }]
        }, index);
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z, {
        image: empty/* default */.Z.PRESENTED_IMAGE_SIMPLE
      }))]
    }, item.key);
  });
};
/* harmony default export */ var config_info = (ConfigInfo);
// EXTERNAL MODULE: ./src/components/table/default-table/index.tsx + 2 modules
var default_table = __webpack_require__(10134);
// EXTERNAL MODULE: ./src/pages/config/components/diff-params/index.tsx + 1 modules
var diff_params = __webpack_require__(63085);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/ClockCircleOutlined.js + 1 modules
var ClockCircleOutlined = __webpack_require__(7036);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/PauseCircleOutlined.js + 1 modules
var PauseCircleOutlined = __webpack_require__(84774);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/Loading3QuartersOutlined.js + 1 modules
var Loading3QuartersOutlined = __webpack_require__(36221);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js + 1 modules
var CheckCircleOutlined = __webpack_require__(66118);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js + 1 modules
var CloseCircleOutlined = __webpack_require__(42599);
;// CONCATENATED MODULE: ./src/pages/platform/home/constant.tsx



var STATUS_MAP = {
  OperationRecordStatus_Unknown: {
    text: '未执行',
    color: '#AAAAAA',
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(ClockCircleOutlined/* default */.Z, {})
  },
  OperationRecordStatus_Pending: {
    text: '待执行',
    color: '#faad14',
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(PauseCircleOutlined/* default */.Z, {})
  },
  OperationRecordStatus_Running: {
    text: '执行中',
    color: '#1890ff',
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(Loading3QuartersOutlined/* default */.Z, {})
  },
  OperationRecordStatus_Success: {
    text: '成功',
    color: '#52c41a',
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(CheckCircleOutlined/* default */.Z, {})
  },
  OperationRecordStatus_Failed: {
    text: '失败',
    color: '#ff4d4f',
    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(CloseCircleOutlined/* default */.Z, {})
  }
};
;// CONCATENATED MODULE: ./src/pages/platform/home/components/operation-modal/index.tsx









var OperationModal = function OperationModal(props) {
  var data = props.data,
    onCancel = props.onCancel,
    open = props.open,
    onOk = props.onOk;
  var _useSseRequest = use_sse_request([], function () {
      return (0,codo_iris/* getApiNodeOperationRecordList */.yN)(objectSpread2_default()({
        page: 1,
        page_size: 5
      }, data)).then(function (res) {
        return res.list;
      });
    }),
    recordList = _useSseRequest.data;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(modal/* default */.Z, {
    width: 800,
    title: "\u8BF7\u786E\u8BA4\u6267\u884C ".concat(data.operation_name),
    open: open,
    onCancel: onCancel,
    onOk: onOk,
    maskClosable: false,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
      size: 20,
      style: {
        margin: '10px 0'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        style: {
          fontSize: 15,
          fontWeight: 'bold'
        },
        children: ["kind id: ", data === null || data === void 0 ? void 0 : data.kind]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        style: {
          fontSize: 15,
          fontWeight: 'bold'
        },
        children: ["node \u540D\u79F0: ", data === null || data === void 0 ? void 0 : data.name]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10
      },
      children: "\u6700\u8FD1\u64CD\u4F5C\u8BB0\u5F55"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
      pagination: false,
      size: "small",
      columns: [{
        dataIndex: 'task_id',
        title: '任务ID',
        render: function render(v, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
            href: record.link,
            target: "_blank",
            rel: "noreferrer",
            children: ["#", v]
          });
        }
      }, {
        dataIndex: 'created_by',
        title: '操作人'
      }, {
        dataIndex: 'created_at',
        title: '操作时间',
        render: time/* showSecondTime */.kZ
      }, {
        dataIndex: 'status',
        title: '操作状态',
        render: function render(text) {
          var _STATUS_MAP$text, _STATUS_MAP$text2;
          return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            style: {
              color: (_STATUS_MAP$text = STATUS_MAP[text]) === null || _STATUS_MAP$text === void 0 ? void 0 : _STATUS_MAP$text.color
            },
            children: (_STATUS_MAP$text2 = STATUS_MAP[text]) === null || _STATUS_MAP$text2 === void 0 ? void 0 : _STATUS_MAP$text2.text
          });
        }
      }],
      dataSource: recordList
    })]
  });
};
/* harmony default export */ var operation_modal = (OperationModal);
// EXTERNAL MODULE: ./node_modules/.pnpm/@joyu+yapi-to-typescript@0.1.7_encoding@0.1.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@joyu/yapi-to-typescript/lib/esm/types.js
var types = __webpack_require__(68619);
// EXTERNAL MODULE: ./node_modules/.pnpm/@joyu+yapi-to-typescript@0.1.7_encoding@0.1.13_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@joyu/yapi-to-typescript/lib/esm/helpers.js
var helpers = __webpack_require__(6984);
// EXTERNAL MODULE: ./src/api/codo-iris/request.ts + 5 modules
var request = __webpack_require__(38257);
;// CONCATENATED MODULE: ./src/api/codo-iris/get-api-node-operation-record/index.ts
/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore

// @ts-ignore
// prettier-ignore

// @ts-ignore

var mockUrl_0_0_0_3 = 'https://tc-apidoc.123u.com/mock/378';
var devUrl_0_0_0_3 = '';
var prodUrl_0_0_0_3 = '';
var dataKey_0_0_0_3 = 'data';

/**
 * 接口 [查看-操作记录-事务聚合↗](https://tc-apidoc.123u.com/project/378/interface/api/28809) 的 **请求类型**
 *
 * @分类 [OperationRecord↗](https://tc-apidoc.123u.com/project/378/interface/api/cat_4558)
 * @标签 `OperationRecord`
 * @请求头 `GET /api/node/operation_record`
 * @更新时间 `2025-07-30 17:28:57`
 */

/**
 * 接口 [查看-操作记录-事务聚合↗](https://tc-apidoc.123u.com/project/378/interface/api/28809) 的 **返回类型**
 *
 * @分类 [OperationRecord↗](https://tc-apidoc.123u.com/project/378/interface/api/cat_4558)
 * @标签 `OperationRecord`
 * @请求头 `GET /api/node/operation_record`
 * @更新时间 `2025-07-30 17:28:57`
 */

/**
 * 接口 [查看-操作记录-事务聚合↗](https://tc-apidoc.123u.com/project/378/interface/api/28809) 的 **请求配置的类型**
 *
 * @分类 [OperationRecord↗](https://tc-apidoc.123u.com/project/378/interface/api/cat_4558)
 * @标签 `OperationRecord`
 * @请求头 `GET /api/node/operation_record`
 * @更新时间 `2025-07-30 17:28:57`
 */

/**
 * 接口 [查看-操作记录-事务聚合↗](https://tc-apidoc.123u.com/project/378/interface/api/28809) 的 **请求配置**
 *
 * @分类 [OperationRecord↗](https://tc-apidoc.123u.com/project/378/interface/api/cat_4558)
 * @标签 `OperationRecord`
 * @请求头 `GET /api/node/operation_record`
 * @更新时间 `2025-07-30 17:28:57`
 */
var getApiNodeOperationRecordRequestConfig = /*#__PURE__*/{
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/node/operation_record',
  method: types/* Method */.n$.GET,
  requestHeaders: {},
  requestBodyType: types/* RequestBodyType */.Py.query,
  responseBodyType: types/* ResponseBodyType */.b.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: ['id'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'getApiNodeOperationRecord',
  queryStringArrayFormat: types/* QueryStringArrayFormat */.s0.brackets,
  extraInfo: {}
};

/**
 * 接口 [查看-操作记录-事务聚合↗](https://tc-apidoc.123u.com/project/378/interface/api/28809) 的 **请求函数**
 *
 * @分类 [OperationRecord↗](https://tc-apidoc.123u.com/project/378/interface/api/cat_4558)
 * @标签 `OperationRecord`
 * @请求头 `GET /api/node/operation_record`
 * @更新时间 `2025-07-30 17:28:57`
 */
var getApiNodeOperationRecord = /*#__PURE__*/function getApiNodeOperationRecord(requestData) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return request/* default */.Z.apply(void 0, [(0,helpers/* prepare */.Pl)(getApiNodeOperationRecordRequestConfig, requestData)].concat(args));
};
getApiNodeOperationRecord.requestConfig = getApiNodeOperationRecordRequestConfig;
getApiNodeOperationRecord.queryKey = 'codo_iris_get_api_node_operation_record';

/* prettier-ignore-end */
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+pro-table@3.19.0_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@_3jfwm3m7qwnjbryl2vpdkbbpta/node_modules/@ant-design/pro-table/es/Table.js + 100 modules
var Table = __webpack_require__(78273);
;// CONCATENATED MODULE: ./src/pages/platform/home/components/task-event-list-table/index.tsx










var TaskEventListTable = function TaskEventListTable(props) {
  var data = props.data;
  var _useState = (0,react.useState)([]),
    _useState2 = slicedToArray_default()(_useState, 2),
    dataSource = _useState2[0],
    setDataSource = _useState2[1];
  (0,react.useEffect)(function () {
    (0,codo_iris/* getApiTaskEventList */.h4)(objectSpread2_default()(objectSpread2_default()({}, data), {}, {
      list_all: '1'
    })).then(function (res) {
      setDataSource(res.list || []);
    });
  }, [data.task_id, data.node_id, data.topo_id]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Table/* default */.Z, {
    columns: [{
      title: '关键节点名称',
      dataIndex: 'event_name',
      key: 'event_name',
      ellipsis: true
    }, {
      title: '状态',
      dataIndex: 'event_status',
      render: function render(v) {
        var _STATUS_MAP$d, _STATUS_MAP$d2, _STATUS_MAP$d3;
        var d = {
          TaskEventStatus_STARTED: 'OperationRecordStatus_Running',
          TaskEventStatus_SUCCESS: 'OperationRecordStatus_Success',
          TaskEventStatus_FAILED: 'OperationRecordStatus_Failed',
          TaskEventStatus_UNSPECIFIED: 'OperationRecordStatus_Unknown'
        }[v];
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          style: {
            color: (_STATUS_MAP$d = STATUS_MAP[d]) === null || _STATUS_MAP$d === void 0 ? void 0 : _STATUS_MAP$d.color
          },
          children: [(_STATUS_MAP$d2 = STATUS_MAP[d]) === null || _STATUS_MAP$d2 === void 0 ? void 0 : _STATUS_MAP$d2.icon, (_STATUS_MAP$d3 = STATUS_MAP[d]) === null || _STATUS_MAP$d3 === void 0 ? void 0 : _STATUS_MAP$d3.text]
        });
      }
    }, {
      title: '开始时间',
      dataIndex: 'event_timestamp',
      render: function render(v, record) {
        return (0,time/* showSecondTime */.kZ)(record.event_timestamp);
      }
    }],
    headerTitle: false,
    search: false,
    options: false,
    dataSource: dataSource,
    pagination: false
  });
};
/* harmony default export */ var task_event_list_table = (TaskEventListTable);
;// CONCATENATED MODULE: ./src/pages/platform/home/components/operation-progress-modal/index.tsx









var OperationProgressModal = function OperationProgressModal(props) {
  var id = props.id,
    onCancel = props.onCancel,
    open = props.open,
    onOk = props.onOk;
  var expandedRowRender = function expandedRowRender(data) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(task_event_list_table, {
      data: {
        task_id: data.id,
        node_id: data.node_id,
        topo_id: data.topo_id
      }
    });
  };
  var columns = [{
    title: '任务ID',
    dataIndex: 'task_id',
    width: 80
  }, {
    title: '执行操作',
    dataIndex: 'operation_name',
    width: 120,
    ellipsis: true
  }, {
    title: '状态',
    dataIndex: 'status',
    width: 100,
    render: function render(v) {
      var _STATUS_MAP$v, _STATUS_MAP$v2, _STATUS_MAP$v3;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
        style: {
          color: (_STATUS_MAP$v = STATUS_MAP[v]) === null || _STATUS_MAP$v === void 0 ? void 0 : _STATUS_MAP$v.color
        },
        children: [(_STATUS_MAP$v2 = STATUS_MAP[v]) === null || _STATUS_MAP$v2 === void 0 ? void 0 : _STATUS_MAP$v2.icon, (_STATUS_MAP$v3 = STATUS_MAP[v]) === null || _STATUS_MAP$v3 === void 0 ? void 0 : _STATUS_MAP$v3.text]
      });
    }
  }, {
    title: '执行人',
    dataIndex: 'created_by',
    width: 120
  }, {
    title: '开始时间',
    dataIndex: 'created_at',
    width: 120,
    render: time/* showSecondTime */.kZ
  }, {
    title: '结束时间',
    dataIndex: 'updated_at',
    width: 120,
    render: time/* showSecondTime */.kZ
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
    width: 1100,
    title: "\u6267\u884C\u60C5\u51B5",
    open: open,
    onCancel: onCancel,
    onOk: onOk,
    maskClosable: false,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(default_table/* default */.Z, {
      columns: columns,
      search: false,
      tableProps: {
        expandable: {
          expandedRowRender: expandedRowRender
        },
        rowKey: 'id'
      },
      request: function request() {
        return getApiNodeOperationRecord({
          id: id
        }).then(function (res) {
          console.log(res);
          return {
            data: res.list,
            total: res.total
          };
        });
      }
    })
  });
};
/* harmony default export */ var operation_progress_modal = (/*#__PURE__*/react.memo(OperationProgressModal));
;// CONCATENATED MODULE: ./src/pages/platform/home/components/operation-history-drawer/index.tsx















var stringifyValue = function stringifyValue(value) {
  return value === null || value === undefined ? '{}' : JSON.stringify(value, null, 2);
};
var OperationHistoryDrawer = function OperationHistoryDrawer(props) {
  var requestData = props.requestData,
    open = props.open,
    onCancel = props.onCancel,
    topoConfig = props.topoConfig;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, {
    maskClosable: false,
    open: open,
    title: "\u6267\u884C\u60C5\u51B5",
    onClose: onCancel,
    width: 1200,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(default_table/* default */.Z, {
      search: {
        placeholder: '关键字模糊搜索'
      },
      tableProps: {
        scroll: {
          y: 'calc(100vh - 256px)'
        },
        size: 'small',
        params: requestData
      },
      columns: [{
        dataIndex: 'task_id',
        title: '任务ID',
        width: 100,
        render: function render(v, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
            href: record.link,
            target: "_blank",
            rel: "noreferrer",
            children: ["#", v]
          });
        }
      }, {
        dataIndex: 'operation_name',
        title: '执行操作',
        filters: true,
        width: 160,
        ellipsis: true,
        onFilter: function onFilter(v, record) {
          return record.operation_name === v;
        }
      }, {
        dataIndex: 'status',
        title: '状态',
        width: 120,
        onFilter: function onFilter(v, record) {
          return record.status === v;
        },
        filters: [{
          value: 'OperationRecordStatus_Pending',
          text: '未执行'
        }, {
          value: 'OperationRecordStatus_Running',
          text: '执行中'
        }, {
          value: 'OperationRecordStatus_Success',
          text: '成功'
        }, {
          value: 'OperationRecordStatus_Failed',
          text: '失败'
        }],
        render: function render(v) {
          var _STATUS_MAP$v, _STATUS_MAP$v2, _STATUS_MAP$v3;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
            style: {
              color: (_STATUS_MAP$v = STATUS_MAP[v]) === null || _STATUS_MAP$v === void 0 ? void 0 : _STATUS_MAP$v.color
            },
            children: [(_STATUS_MAP$v2 = STATUS_MAP[v]) === null || _STATUS_MAP$v2 === void 0 ? void 0 : _STATUS_MAP$v2.icon, (_STATUS_MAP$v3 = STATUS_MAP[v]) === null || _STATUS_MAP$v3 === void 0 ? void 0 : _STATUS_MAP$v3.text]
          });
        }
      }, {
        dataIndex: 'progress',
        title: '执行进度',
        render: function render(v, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
            modalRender: function modalRender(cancel) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(operation_progress_modal, {
                onCancel: cancel,
                id: record.id
              });
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
              children: "\u67E5\u770B"
            })
          });
        }
      }, {
        dataIndex: 'created_by',
        title: '执行人',
        width: 160,
        ellipsis: true
      }, {
        dataIndex: 'created_at',
        title: '开始时间',
        render: time/* showSecondTime */.kZ,
        width: 150
      }, {
        dataIndex: 'updated_at',
        title: '结束时间',
        render: time/* showSecondTime */.kZ
      }, {
        dataIndex: 'operation',
        title: '操作',
        render: function render(v, record) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
              modalRender: function modalRender(cancel) {
                var _topoConfig$basic, _record$snapshot, _record$snapshot2, _record$snapshot3;
                return /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, {
                  maskClosable: false,
                  open: open,
                  onClose: cancel,
                  width: 1300,
                  closable: true,
                  title: "".concat(record.task_id, "\uFF08").concat(record.operation_name, "\uFF09-\u5FEB\u7167\u8BE6\u60C5"),
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(diff_params/* default */.Z, {
                    oldVersion: {
                      title: '',
                      updater: record === null || record === void 0 ? void 0 : record.created_by,
                      updateTime: (0,time/* showSecondTime */.kZ)((record === null || record === void 0 ? void 0 : record.created_at) || ''),
                      params: [{
                        label: '资源依赖',
                        key: 'ref',
                        value: stringifyValue(topoConfig === null || topoConfig === void 0 ? void 0 : topoConfig.ref)
                      }, {
                        label: '资源状态',
                        key: 'status',
                        value: stringifyValue(topoConfig === null || topoConfig === void 0 ? void 0 : topoConfig.status)
                      }, {
                        label: '节点配置',
                        key: 'fields',
                        value: stringifyValue(topoConfig === null || topoConfig === void 0 || (_topoConfig$basic = topoConfig.basic) === null || _topoConfig$basic === void 0 ? void 0 : _topoConfig$basic.fields_data)
                      }]
                    },
                    newVersion: {
                      title: '',
                      updater: record === null || record === void 0 ? void 0 : record.created_by,
                      updateTime: (0,time/* showSecondTime */.kZ)((record === null || record === void 0 ? void 0 : record.created_at) || ''),
                      params: [{
                        label: '资源依赖',
                        key: 'ref',
                        value: stringifyValue(record === null || record === void 0 || (_record$snapshot = record.snapshot) === null || _record$snapshot === void 0 ? void 0 : _record$snapshot.ref),
                        type: 'code'
                      }, {
                        label: '资源状态',
                        key: 'status',
                        value: stringifyValue(record === null || record === void 0 || (_record$snapshot2 = record.snapshot) === null || _record$snapshot2 === void 0 ? void 0 : _record$snapshot2.status),
                        type: 'code'
                      }, {
                        label: '配置信息',
                        key: 'fields',
                        value: stringifyValue(record === null || record === void 0 || (_record$snapshot3 = record.snapshot) === null || _record$snapshot3 === void 0 ? void 0 : _record$snapshot3.fields),
                        type: 'code'
                      }]
                    }
                  })
                });
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
                children: "\u67E5\u770B\u5FEB\u7167"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
              modalRender: function modalRender(cancel) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(operation_modal, {
                  onCancel: cancel,
                  onOk: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
                    return regeneratorRuntime_default()().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return (0,codo_iris/* postApiV1TopologyNodeDoOperation */.B$)(objectSpread2_default()(objectSpread2_default()({}, requestData), {}, {
                            operation: {
                              kind: record.operation_kind,
                              name: record.operation_name
                            }
                          }));
                        case 2:
                          message/* default */.ZP.success('操作成功');
                          cancel();
                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  })),
                  data: {
                    operation_kind: record.operation_kind,
                    operation_name: record.operation_name,
                    node_id: requestData.node_id,
                    name: record.name,
                    kind: record.kind,
                    topo_id: requestData.topo_id
                  }
                });
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
                children: "\u518D\u6B21\u6267\u884C"
              })
            })]
          });
        }
      }],
      request: ( /*#__PURE__*/function () {
        var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(params) {
          var current, pageSize, keyword, res;
          return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                // 这里需要实现具体的数据请求逻辑
                current = params.current, pageSize = params.pageSize, keyword = params.keyword;
                _context2.next = 3;
                return (0,codo_iris/* getApiNodeOperationRecordList */.yN)(objectSpread2_default()(objectSpread2_default()({}, requestData), {}, {
                  keyword: keyword,
                  page: current,
                  page_size: pageSize
                }));
              case 3:
                res = _context2.sent;
                return _context2.abrupt("return", {
                  total: res.total || 0,
                  data: res.list || []
                });
              case 5:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }())
    })
  });
};
/* harmony default export */ var operation_history_drawer = (OperationHistoryDrawer);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SyncOutlined.js + 1 modules
var SyncOutlined = __webpack_require__(22694);
;// CONCATENATED MODULE: ./src/pages/platform/home/components/basic-info/index.tsx



















var BasicInfo = function BasicInfo(props) {
  var nodeId = props.nodeId,
    topoId = props.topoId,
    topoLogy = props.topoLogy,
    onEdit = props.onEdit,
    type = props.type;
  var nodeOperationInfoKey = (0,react.useRef)('');
  var _useState = (0,react.useState)(false),
    _useState2 = slicedToArray_default()(_useState, 2),
    contentLoading = _useState2[0],
    setContentLoading = _useState2[1];
  (0,react.useEffect)(function () {
    setContentLoading(true);
  }, [nodeId]);
  var _useLocalStorageState = (0,useLocalStorageState/* default */.Z)('iris-platform-home-right-operation-width', {
      defaultValue: 420
    }),
    _useLocalStorageState2 = slicedToArray_default()(_useLocalStorageState, 2),
    operationWidth = _useLocalStorageState2[0],
    setOperationWidth = _useLocalStorageState2[1];
  var auth = (0,use_topo_permission/* default */.Z)(topoId);
  var _useSseRequest = use_sse_request('EVENT_TYPE_OPERATION', function () {
      return (type === 'user' ? codo_iris/* getApiV1TopologyNodeUserOperations */.WZ : codo_iris/* getApiV1TopologyNodeOperationInfo */.hq)({
        node_id: nodeId,
        topo_id: topoId
      }).then(function (res) {
        nodeOperationInfoKey.current = "".concat(nodeId);
        return res.operation_info.operation_definitions;
      });
    }, {
      refreshDeps: [nodeId, topoId]
    }),
    nodeOperationInfo = _useSseRequest.data;
  var _useSseRequest2 = use_sse_request('EVENT_TYPE_OPERATION', function () {
      return (0,codo_iris/* getApiNodeOperationItemStatus */._k)({
        node_id: nodeId,
        topo_id: topoId
      }).then(function (res) {
        return res.list || [];
      });
    }, {
      refreshDeps: [nodeId, topoId]
    }),
    nodeOperationItemStatus = _useSseRequest2.data;
  var _useSseRequest3 = use_sse_request(['EVENT_TYPE_NODE', 'EVENT_TYPE_TOPO', 'EVENT_TYPE_CONFIG'], function () {
      return (type === 'user' ? codo_iris/* getApiV1TopologyNodeUserFields */.cs : codo_iris/* getApiV1TopologyNodeBasicInfo */.e)({
        node_id: nodeId,
        topo_id: topoId
      });
    }, {
      refreshDeps: [nodeId, topoId],
      onSuccess: function onSuccess() {
        setContentLoading(false);
      }
    }),
    topoConfig = _useSseRequest3.data,
    refreshTopoConfig = _useSseRequest3.refresh;
  var nodeList = (0,react.useMemo)(function () {
    return (0,utils/* flattenTree */.fK)(topoLogy || []);
  }, [topoLogy]);
  var selectedNode = (0,react.useMemo)(function () {
    return nodeList === null || nodeList === void 0 ? void 0 : nodeList.find(function (node) {
      return node.node_id === nodeId;
    });
  }, [nodeId, nodeList]);
  var itemsOperation = (0,react.useMemo)(function () {
    if (!nodeOperationInfo) {
      return [];
    }
    return nodeOperationInfo.map(function (item) {
      var _item$operation;
      return {
        key: item.name,
        label: item.name,
        children: (_item$operation = item.operation) === null || _item$operation === void 0 ? void 0 : _item$operation.map(function (d) {
          var _nodeOperationItemSta;
          var isRunning = (nodeOperationItemStatus === null || nodeOperationItemStatus === void 0 || (_nodeOperationItemSta = nodeOperationItemStatus.find(function (item) {
            return item.operation_kind === d.kind && item.operation_name === d.name;
          })) === null || _nodeOperationItemSta === void 0 ? void 0 : _nodeOperationItemSta.status) === 'OperationRecordStatus_Running';
          return /*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
            modalRender: function modalRender(cancel) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(operation_modal, {
                onCancel: cancel,
                onOk: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
                  return regeneratorRuntime_default()().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0,codo_iris/* postApiV1TopologyNodeDoOperation */.B$)({
                          node_id: nodeId,
                          operation: d,
                          topo_id: Number(topoId)
                        });
                      case 2:
                        message/* default */.ZP.success('操作成功');
                        cancel();
                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                })),
                data: {
                  operation_kind: d.kind,
                  operation_name: d.name,
                  node_id: selectedNode.node_id,
                  name: selectedNode.name,
                  kind: selectedNode.kind,
                  topo_id: topoId
                }
              });
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(td_alink/* default */.Z, {
              disabled: !auth.runOperation,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
                style: {
                  marginBottom: 10
                },
                color: isRunning ? 'blue' : '',
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                  children: [d.name, /*#__PURE__*/(0,jsx_runtime.jsx)(SyncOutlined/* default */.Z, {
                    spin: true,
                    style: {
                      display: isRunning ? 'block' : 'none'
                    }
                  }, "SyncOutlined")]
                })
              }, d.kind)
            })
          }, d.name);
        })
      };
    });
  }, [nodeOperationInfo, nodeOperationItemStatus, auth.runOperation, selectedNode, topoId, nodeId]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
    spinning: contentLoading,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(splitter/* default */.Z, {
      onResize: function onResize(_ref2) {
        var _ref3 = slicedToArray_default()(_ref2, 2),
          v = _ref3[1];
        setOperationWidth(v);
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(splitter/* default */.Z.Panel, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: home_stylemodules.contentItem,
          style: {
            marginRight: 20
          },
          children: topoConfig && selectedNode && /*#__PURE__*/(0,jsx_runtime.jsx)(config_info, {
            nodeList: nodeList,
            topoConfig: topoConfig,
            topoLogy: topoLogy,
            selectedNode: selectedNode,
            onEditOk: function onEditOk() {
              // todo 后端sse有问题，需要强制刷新
              refreshTopoConfig();
              onEdit === null || onEdit === void 0 || onEdit();
            },
            topoId: topoId,
            readonly: type === 'user'
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(splitter/* default */.Z.Panel, {
        size: operationWidth,
        min: 160,
        max: "80%",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: home_stylemodules.contentItem,
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
            justify: "space-between",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: home_stylemodules.contentItemTitle,
              children: "\u6267\u884C\u64CD\u4F5C"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
              modalRender: function modalRender(cancel) {
                return /*#__PURE__*/(0,jsx_runtime.jsx)(operation_history_drawer, {
                  onCancel: cancel,
                  requestData: {
                    topo_id: topoId,
                    node_id: nodeId
                  },
                  topoConfig: topoConfig
                });
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
                children: "\u67E5\u770B\u6267\u884C\u60C5\u51B5"
              })
            })]
          }), selectedNode && /*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.Z, {
            defaultActiveKey: itemsOperation.map(function (d) {
              return d.key;
            }),
            ghost: true,
            items: itemsOperation
          }, nodeOperationInfoKey.current)]
        })
      })]
    })
  });
};
/* harmony default export */ var basic_info = (BasicInfo);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/form/index.js + 22 modules
var es_form = __webpack_require__(33313);
;// CONCATENATED MODULE: ./src/pages/platform/home/components/rename-modal/index.tsx






var RenameModal = function RenameModal(props) {
  var onCancel = props.onCancel,
    open = props.open,
    name = props.name,
    _onOk = props.onOk;
  var _Form$useForm = es_form/* default */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
    open: open,
    onCancel: onCancel,
    maskClosable: false,
    title: "\u91CD\u547D\u540D\u8282\u70B9",
    onOk: function onOk() {
      form.validateFields().then(function (values) {
        _onOk === null || _onOk === void 0 || _onOk(values.name);
      });
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z, {
      form: form,
      initialValues: {
        name: name
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        label: "\u8282\u70B9\u540D\u79F0",
        name: "name",
        rules: [{
          required: true,
          message: '请输入节点名称'
        }, {
          validator: function () {
            var _validator = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(rule, value) {
              return regeneratorRuntime_default()().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (value) {
                      _context.next = 2;
                      break;
                    }
                    return _context.abrupt("return");
                  case 2:
                    if (!(value.trim() === (name === null || name === void 0 ? void 0 : name.trim()))) {
                      _context.next = 4;
                      break;
                    }
                    throw new Error('新名称不能与原名称相同');
                  case 4:
                    if (value.trim()) {
                      _context.next = 6;
                      break;
                    }
                    throw new Error('节点名称不能为空');
                  case 6:
                    if (!(value.length > 50)) {
                      _context.next = 8;
                      break;
                    }
                    throw new Error('节点名称不能超过50个字符');
                  case 8:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            function validator(_x, _x2) {
              return _validator.apply(this, arguments);
            }
            return validator;
          }()
        }],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
          placeholder: "\u8BF7\u8F93\u5165\u8282\u70B9\u540D\u79F0"
        })
      })
    })
  });
};
/* harmony default export */ var rename_modal = (RenameModal);
;// CONCATENATED MODULE: ./src/pages/platform/home/index.tsx




























var Sider = layout/* default */.Z.Sider,
  Content = layout/* default */.Z.Content;
function processNode(node) {
  // 如果没有子节点，根据节点自身的show值决定是否保留
  if (!node.children || node.children.length === 0) {
    return node.show === true ? objectSpread2_default()(objectSpread2_default()({}, node), {}, {
      children: []
    }) : null;
  }
  if (node.show === true) {
    return objectSpread2_default()({}, node);
  }

  // 处理子节点
  var filteredChildren = node.children.map(function (child) {
    return processNode(child);
  }).filter(Boolean); // 移除null结果

  // 如果节点自身show为true或有任何子节点被保留，则保留该节点
  if (filteredChildren.length > 0) {
    return objectSpread2_default()(objectSpread2_default()({}, node), {}, {
      children: filteredChildren
    });
  }

  // 否则不保留该节点
  return null;
}
var PlatForm = function PlatForm() {
  var _logConfig$list2;
  var _useLocalStorageState = (0,useLocalStorageState/* default */.Z)('iris-platform-home-left-sider-collapsed', {
      defaultValue: false
    }),
    _useLocalStorageState2 = slicedToArray_default()(_useLocalStorageState, 2),
    siderCollapsed = _useLocalStorageState2[0],
    setSiderCollapsed = _useLocalStorageState2[1];
  var _useLocalStorageState3 = (0,useLocalStorageState/* default */.Z)('iris-platform-home-left-sider-width', {
      defaultValue: 320
    }),
    _useLocalStorageState4 = slicedToArray_default()(_useLocalStorageState3, 2),
    siderWidth = _useLocalStorageState4[0],
    setSiderWidth = _useLocalStorageState4[1];
  var _useLocalUrlState = use_local_url_state('iris-platform-home-url-state', {}),
    _useLocalUrlState2 = slicedToArray_default()(_useLocalUrlState, 2),
    urlState = _useLocalUrlState2[0],
    setUrlState = _useLocalUrlState2[1];
  var _useLocalStorageState5 = (0,useLocalStorageState/* default */.Z)('iris-platform-home-left-tree-expanded-keys-map', {
      defaultValue: {}
    }),
    _useLocalStorageState6 = slicedToArray_default()(_useLocalStorageState5, 2),
    expandedKeysMap = _useLocalStorageState6[0],
    setExpandedKeysMap = _useLocalStorageState6[1];
  var treeKey = (0,react.useRef)(0);
  // antd有bug expandedKeys不能引用相同对象 否则会出现错误展示所有得bug
  var expandedKeys = urlState.topoId && expandedKeysMap !== null && expandedKeysMap !== void 0 && expandedKeysMap[urlState.topoId] ? toConsumableArray_default()(expandedKeysMap[urlState.topoId]) : undefined;

  // const expandedKeys = useMemo(() => {
  //   if (!urlState.topoId || !expandedKeysMap?.[urlState.topoId]) {
  //     return undefined;
  //   }
  //   return [...expandedKeysMap[urlState.topoId]];
  // }, [expandedKeysMap, urlState.topoId]);
  var setExpandedKeys = (0,react.useCallback)(function (v) {
    setExpandedKeysMap(objectSpread2_default()(objectSpread2_default()({}, expandedKeysMap), {}, defineProperty_default()({}, urlState.topoId, v)));
  }, [expandedKeysMap, setExpandedKeysMap, urlState.topoId]);
  var _useState = (0,react.useState)(''),
    _useState2 = slicedToArray_default()(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0,react.useState)('basic'),
    _useState4 = slicedToArray_default()(_useState3, 2),
    activeKey = _useState4[0],
    setActiveKey = _useState4[1];
  var auth = (0,use_topo_permission/* default */.Z)(urlState.topoId);
  var _useSseRequest = use_sse_request(['EVENT_TYPE_NODE', 'EVENT_TYPE_TOPO', 'EVENT_TYPE_CONFIG'], function () {
      return (0,codo_iris/* getApiV1TopologyList */.vB)({}).then(function (res) {
        var _data$;
        var _data = res.list || [];
        if (!urlState.topoId && _data !== null && _data !== void 0 && (_data$ = _data[0]) !== null && _data$ !== void 0 && _data$.id) {
          var _data$2;
          setUrlState({
            topoId: _data === null || _data === void 0 || (_data$2 = _data[0]) === null || _data$2 === void 0 ? void 0 : _data$2.id
          });
        }
        // 可能被删除了当前节点，需要校验当前节点是否存在
        if (urlState.nodeId && _data && !(0,utils/* flattenTree */.fK)(_data.map(function (item) {
          return objectSpread2_default()(objectSpread2_default()({}, item), {}, {
            children: item.topoLogy
          });
        })).find(function (item) {
          return item.node_id === urlState.nodeId;
        })) {
          setUrlState({
            nodeId: undefined
          });
        }
        return _data;
      });
    }),
    topoList = _useSseRequest.data,
    refreshTopo = _useSseRequest.refresh;
  var topo = (0,react.useMemo)(function () {
    if (!topoList || !urlState.topoId) return undefined;
    return topoList === null || topoList === void 0 ? void 0 : topoList.find(function (item) {
      return "".concat(item.id) === urlState.topoId;
    });
  }, [topoList, urlState.topoId]);
  var _useSseRequest2 = use_sse_request(['EVENT_TYPE_NODE', 'EVENT_TYPE_TOPO'], function () {
      return (0,codo_iris/* getApiV1TopologyNodeLogConfig */.lZ)({
        node_id: urlState.nodeId,
        topo_id: topo.id
      });
    }, {
      ready: !!topo && !!urlState.nodeId,
      refreshDeps: [topo === null || topo === void 0 ? void 0 : topo.id, urlState.nodeId]
    }),
    logConfig = _useSseRequest2.data;
  var allExpandedKeys = (0,react.useRef)({
    keys: [],
    topoId: ''
  });
  var breadcrumbItems = (0,react.useMemo)(function () {
    if (!(topo !== null && topo !== void 0 && topo.topoLogy) || !urlState.nodeId) return [];

    // 用于存储找到的路径
    var path = [];

    // 递归查找节点路径
    var findNodePath = function findNodePath(nodes, targetId) {
      var currentPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var _iterator = createForOfIteratorHelper_default()(nodes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var node = _step.value;
          // 将当前节点加入路径
          currentPath.push({
            title: node.name,
            node_id: node.node_id,
            display_state: node.display_state
          });

          // 如果找到目标节点
          if (node.node_id === targetId) {
            // 复制当前路径到最终结果
            path.push.apply(path, toConsumableArray_default()(currentPath));
            return true;
          }

          // 如果有子节点，继续递归查找
          if (node.children && node.children.length > 0) {
            if (findNodePath(node.children, targetId, currentPath)) {
              return true;
            }
          }

          // 如果当前分支未找到，移除当前节点
          currentPath.pop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false;
    };

    // 开始查找路径
    findNodePath(topo.topoLogy, urlState.nodeId);

    // 转换为面包屑需要的格式
    return path.map(function (item, index) {
      return {
        title: index !== path.length - 1 ? /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          onClick: function onClick() {
            setUrlState({
              nodeId: item.node_id
            });
          },
          children: item.title
        }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [item.title, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              color: constants/* NODE_DISPLAY_COLOR_MAP */.im[item.display_state] || '',
              backgroundColor: constants/* NODE_DISPLAY_COLOR_MAP */.im[item.display_state] ? "".concat(constants/* NODE_DISPLAY_COLOR_MAP */.im[item.display_state], "30") : '',
              padding: '0 10px',
              borderRadius: 12
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
              size: 0,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: home_stylemodules.circle,
                style: {
                  backgroundColor: constants/* NODE_DISPLAY_COLOR_MAP */.im[item.display_state] || ''
                }
              }), constants/* NODE_DISPLAY_NAME_MAP */.Bg[item.display_state] || '']
            })
          })]
        })
      };
    });
  }, [topo === null || topo === void 0 ? void 0 : topo.topoLogy, urlState.nodeId, setUrlState]);
  var treeData = (0,react.useMemo)(function () {
    treeKey.current = treeKey.current + 1;
    if (!topo) return [];
    var traverseTree = function traverseTree(data) {
      var _data$level = data.level,
        level = _data$level === void 0 ? 0 : _data$level,
        parent = data.parent,
        _data$searchValue = data.searchValue,
        searchValue = _data$searchValue === void 0 ? '' : _data$searchValue,
        tree = data.tree;
      return tree === null || tree === void 0 ? void 0 : tree.map(function (item) {
        var _item$status;
        var strTitle = item.name;
        var i = strTitle.indexOf(searchValue);
        // searchValue 根据ip前缀后缀判断
        var matchIp = ((_item$status = item.status) === null || _item$status === void 0 ? void 0 : _item$status.ip) && searchValue.trim() && item.status.ip.indexOf(searchValue.trim()) === 0 && item.status.ip.lastIndexOf(searchValue.trim()) === 0;
        var beforeStr = strTitle.substring(0, i);
        var afterStr = strTitle.slice(i + searchValue.length);
        var title = i > -1 ? /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          children: [beforeStr, /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: home_stylemodules.treeSearchValue,
            children: searchValue
          }), afterStr]
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: strTitle
        });

        // todo 后面改为属性判断

        // 产品定4层开始可以选择
        var selectable = level >= 0;
        // 产品定3层开始可以克隆删除
        var operable = level >= 0;
        var key = item.node_id;
        if (!lodash_default().isEmpty(item.children)) {
          allExpandedKeys.current.keys.push(key);
        }
        return objectSpread2_default()(objectSpread2_default()({}, item), {}, {
          className: selectable ? home_stylemodules.treeItemSelectable : '',
          title: operable ? /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
            justify: "space-between",
            onClick: function onClick() {
              if (!selectable) {
                return;
              }
              setUrlState({
                nodeId: item.node_id
              });
            },
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
              align: "center",
              justify: "space-between",
              style: {
                width: 0,
                flex: 1
              },
              children: [selectable && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: home_stylemodules.circle,
                style: {
                  backgroundColor: constants/* NODE_DISPLAY_COLOR_MAP */.im[item.display_state] || ''
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
                title: title,
                placement: "right",
                align: {
                  offset: [24, 0]
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: home_stylemodules.treeItemTitle,
                  children: title
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              onClick: function onClick(event) {
                event.stopPropagation();
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(dropdown/* default */.Z, {
                mouseLeaveDelay: 0.3,
                menu: {
                  items: [{
                    key: '1',
                    label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                      onKeyDown: function onKeyDown(event) {
                        event.stopPropagation();
                      },
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
                        modalRender: function modalRender(cancel) {
                          return /*#__PURE__*/(0,jsx_runtime.jsx)(clone_modal, {
                            treeData: topo.topoLogy,
                            onCancel: cancel,
                            onOk: function onOk() {
                              refreshTopo();
                              cancel();
                            },
                            data: {
                              node_id: item.node_id,
                              name: item.name,
                              topo_id: topo.id,
                              parent_node_id: parent === null || parent === void 0 ? void 0 : parent.node_id
                            }
                          });
                        },
                        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CopyOutlined/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                            style: {
                              width: 60,
                              textAlign: 'center'
                            },
                            children: "\u514B\u9686"
                          })]
                        })
                      })
                    })
                  }, {
                    key: 'rename',
                    label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                      onKeyDown: function onKeyDown(event) {
                        event.stopPropagation();
                      },
                      children: /*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
                        modalRender: function modalRender(cancel) {
                          return /*#__PURE__*/(0,jsx_runtime.jsx)(rename_modal, {
                            onCancel: cancel,
                            onOk: ( /*#__PURE__*/function () {
                              var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(name) {
                                return regeneratorRuntime_default()().wrap(function _callee$(_context) {
                                  while (1) switch (_context.prev = _context.next) {
                                    case 0:
                                      _context.next = 2;
                                      return (0,codo_iris/* postApiV1TopologyNodePartialUpdate */.OS)({
                                        node_id: item.node_id,
                                        name: name,
                                        topo_id: topo.id,
                                        resource_version: item.resource_version
                                      });
                                    case 2:
                                      message/* default */.ZP.success('重命名成功');
                                      refreshTopo();
                                      cancel();
                                    case 5:
                                    case "end":
                                      return _context.stop();
                                  }
                                }, _callee);
                              }));
                              return function (_x) {
                                return _ref.apply(this, arguments);
                              };
                            }()),
                            name: item.name
                          });
                        },
                        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(EditOutlined/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                            style: {
                              width: 60,
                              textAlign: 'center'
                            },
                            children: "\u91CD\u547D\u540D"
                          })]
                        })
                      })
                    })
                  }].concat(toConsumableArray_default()(item.display_state === 'NodeDisplayStateUninitialized' ? [{
                    key: '2',
                    label: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                      onClick: function onClick() {
                        modal/* default */.Z.confirm({
                          title: '确认删除',
                          content: "\u662F\u5426\u5220\u9664 ".concat(item.name, " ?"),
                          onOk: function () {
                            var _onOk = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
                              return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
                                while (1) switch (_context2.prev = _context2.next) {
                                  case 0:
                                    _context2.next = 2;
                                    return (0,codo_iris/* postApiV1TopologyNodeDelete */.Bc)({
                                      node_id: item.node_id,
                                      topo_id: topo.id
                                    });
                                  case 2:
                                    message/* default */.ZP.success('删除成功');
                                    if (item.node_id === urlState.nodeId) {
                                      setUrlState({
                                        nodeId: undefined
                                      });
                                    } else {
                                      refreshTopo();
                                    }
                                  case 4:
                                  case "end":
                                    return _context2.stop();
                                }
                              }, _callee2);
                            }));
                            function onOk() {
                              return _onOk.apply(this, arguments);
                            }
                            return onOk;
                          }()
                        });
                      },
                      style: {
                        width: 60,
                        textAlign: 'center'
                      },
                      children: "\u5220\u9664"
                    }),
                    icon: /*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutlined/* default */.Z, {})
                  }] : []))
                },
                children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(EllipsisOutlined/* default */.Z, {})
                })
              })
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
            title: title,
            placement: "right",
            align: {
              offset: [20, -4]
            },
            children: title
          }),
          key: key,
          children: item.children ? traverseTree({
            tree: item.children,
            searchValue: searchValue,
            level: level + 1,
            parent: item
          }) : [],
          show: !searchValue || i >= 0 || matchIp,
          selectable: selectable
        });
      });
    };
    allExpandedKeys.current.keys = [];
    var tree = traverseTree({
      tree: topo.topoLogy || [],
      searchValue: searchValue
    });
    return searchValue ? tree.map(function (node) {
      return processNode(node);
    }).filter(Boolean) : tree;
  }, [refreshTopo, searchValue, setUrlState, topo, urlState.nodeId]);
  (0,react.useEffect)(function () {
    if (lodash_default().isEmpty(treeData) || expandedKeys) {
      return;
    }
    setExpandedKeys(toConsumableArray_default()(allExpandedKeys.current.keys));
  }, [expandedKeys, setExpandedKeys, treeData]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(layout/* default */.Z, {
    style: {
      padding: 0,
      minHeight: '100%'
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(splitter/* default */.Z, {
      onResize: function onResize(_ref2) {
        var _ref3 = slicedToArray_default()(_ref2, 1),
          v = _ref3[0];
        setSiderWidth(v);
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(splitter/* default */.Z.Panel, {
        size: siderCollapsed ? 26 : siderWidth,
        min: 200,
        max: "80%",
        resizable: !siderCollapsed,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(spin/* default */.Z, {
          spinning: !topoList,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Sider, {
            theme: "light",
            width: "100%",
            collapsed: siderCollapsed,
            collapsedWidth: 26,
            children: [siderCollapsed ? /*#__PURE__*/(0,jsx_runtime.jsx)(MenuUnfoldOutlined/* default */.Z, {
              style: {
                padding: 6
              },
              onClick: function onClick() {
                setSiderCollapsed(false);
              }
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: home_stylemodules.siderHeader,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
                justify: "space-between",
                align: "center",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
                  size: "small",
                  options: topoList === null || topoList === void 0 ? void 0 : topoList.map(function (item) {
                    return {
                      label: item.name,
                      value: "".concat(item.id)
                    };
                  }),
                  value: urlState.topoId,
                  onChange: function onChange(v) {
                    setUrlState({
                      topoId: v,
                      nodeId: undefined
                    });
                  },
                  style: {
                    flex: 1,
                    width: 0,
                    marginRight: 20
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
                  children: [topo && auth.editTopoYaml && /*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
                    modalRender: function modalRender(cancel) {
                      return /*#__PURE__*/(0,jsx_runtime.jsx)(edit_tree, {
                        onCancel: cancel,
                        id: topo.id,
                        onOk: function onOk() {
                          cancel();
                          refreshTopo();
                        }
                      });
                    },
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(SettingOutlined/* default */.Z, {
                      onClick: function onClick() {
                        // 加了onClick有a标签样式
                      }
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(MenuFoldOutlined/* default */.Z, {
                    onClick: function onClick() {
                      setSiderCollapsed(true);
                    }
                  })]
                })]
              })
            }), !siderCollapsed && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: home_stylemodules.siderContent,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
                value: searchValue,
                onChange: function onChange(e) {
                  return setSearchValue(e.target.value);
                },
                suffix: /*#__PURE__*/(0,jsx_runtime.jsx)(SearchOutlined/* default */.Z, {}),
                placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22\u670D\u52A1\u6811(\u652F\u6301IP\u641C\u7D22)",
                style: {
                  marginBottom: 10
                }
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                style: {
                  overflow: 'auto',
                  height: 'calc(100vh - 220px)'
                },
                children: !lodash_default().isEmpty(treeData) && /*#__PURE__*/(0,jsx_runtime.jsx)(tree/* default */.Z, {
                  treeData: treeData,
                  blockNode: true,
                  expandedKeys: expandedKeys,
                  onExpand: setExpandedKeys,
                  selectedKeys: urlState.nodeId ? [urlState.nodeId] : []
                })
              })]
            })]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(splitter/* default */.Z.Panel, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Content, {
          className: home_stylemodules.content,
          style: {
            padding: '10px 20px'
          },
          children: !!urlState.nodeId && topo ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(breadcrumb/* default */.Z, {
              items: breadcrumbItems,
              style: {
                paddingBottom: 10
              }
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* default */.Z, {
              activeKey: activeKey,
              onChange: function onChange(v) {
                if (v === 'log') {
                  var _logConfig$list;
                  var url = logConfig === null || logConfig === void 0 || (_logConfig$list = logConfig.list) === null || _logConfig$list === void 0 || (_logConfig$list = _logConfig$list[0]) === null || _logConfig$list === void 0 ? void 0 : _logConfig$list.link;
                  if (url) {
                    window.open(url, '_blank');
                    return;
                  }
                } else {
                  setActiveKey(v);
                }
              },
              items: [{
                key: 'basic',
                label: '基本信息',
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(basic_info, {
                  type: "user",
                  nodeId: urlState.nodeId,
                  topoId: urlState.topoId,
                  topoLogy: topo === null || topo === void 0 ? void 0 : topo.topoLogy,
                  onEdit: function onEdit() {
                    refreshTopo();
                  }
                })
              }, {
                key: 'config',
                label: '配置信息',
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(basic_info, {
                  type: "all",
                  nodeId: urlState.nodeId,
                  topoId: urlState.topoId,
                  topoLogy: topo === null || topo === void 0 ? void 0 : topo.topoLogy,
                  onEdit: function onEdit() {
                    refreshTopo();
                  }
                })
              }, {
                key: 'log',
                label: '日志',
                disabled: !(logConfig !== null && logConfig !== void 0 && (_logConfig$list2 = logConfig.list) !== null && _logConfig$list2 !== void 0 && (_logConfig$list2 = _logConfig$list2[0]) !== null && _logConfig$list2 !== void 0 && _logConfig$list2.link)
              }, {
                key: 'monitor',
                label: '监控告警',
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(monitor, {
                  topo_id: topo.id,
                  node_id: urlState.nodeId
                })
              }]
            })]
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.Z, {
            message: "\u8BF7\u9009\u62E9\u5DE6\u4FA7\u8282\u70B9",
            type: "info"
          })
        })
      })]
    })
  });
};
/* harmony default export */ var home = (PlatForm);

/***/ })

}]);