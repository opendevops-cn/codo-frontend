"use strict";
(self["webpackChunkiris"] = self["webpackChunkiris"] || []).push([[2012],{

/***/ 61969:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ list; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(15558);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(90228);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(87999);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(26068);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.6/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(48305);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./src/api/codo-iris/index.ts + 53 modules
var codo_iris = __webpack_require__(67682);
// EXTERNAL MODULE: ./src/components/edit-operation-with-modal/index.tsx
var edit_operation_with_modal = __webpack_require__(52631);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/form/index.js + 22 modules
var es_form = __webpack_require__(33313);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js + 16 modules
var modal = __webpack_require__(20429);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 6 modules
var input = __webpack_require__(73757);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/select/index.js
var es_select = __webpack_require__(21283);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(75271);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(52676);
;// CONCATENATED MODULE: ./src/pages/config/components/add-config-modal/index.tsx







var AddConfigModal = function AddConfigModal(props) {
  var _onCancel = props.onCancel,
    onOk = props.onOk,
    open = props.open,
    templateKindList = props.templateKindList;
  var _Form$useForm = es_form/* default */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _React$useState = react.useState(false),
    _React$useState2 = slicedToArray_default()(_React$useState, 2),
    confirmLoading = _React$useState2[0],
    setConfirmLoading = _React$useState2[1];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
    title: "\u65B0\u589E\u914D\u7F6E",
    maskClosable: false,
    open: open,
    onOk: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var values;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return form.validateFields();
          case 2:
            values = _context.sent;
            _context.next = 5;
            return onOk === null || onOk === void 0 ? void 0 : onOk(values);
          case 5:
            setConfirmLoading(true);
            _onCancel === null || _onCancel === void 0 || _onCancel();
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })),
    onCancel: function onCancel() {
      setConfirmLoading(false);
      _onCancel === null || _onCancel === void 0 || _onCancel();
    },
    confirmLoading: confirmLoading,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z, {
      style: {
        marginTop: 20
      },
      form: form,
      labelCol: {
        span: 6
      },
      labelAlign: "left",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        name: "name",
        label: "\u914D\u7F6E\u540D\u79F0",
        required: true,
        rules: [{
          required: true
        }, {
          max: 50,
          message: '配置名称最大长度50字符'
        }],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        name: "kind",
        label: "\u6A21\u677F\u7C7B\u578B",
        required: true,
        rules: [{
          required: true
        }],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
          options: templateKindList
        })
      })]
    })
  });
};
/* harmony default export */ var add_config_modal = (AddConfigModal);
;// CONCATENATED MODULE: ./src/pages/config/components/clone-config-modal/index.tsx






var CloneConfigModal = function CloneConfigModal(props) {
  var _onCancel = props.onCancel,
    onOk = props.onOk,
    open = props.open,
    defaultName = props.defaultName;
  var _Form$useForm = es_form/* default */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var _React$useState = react.useState(false),
    _React$useState2 = slicedToArray_default()(_React$useState, 2),
    confirmLoading = _React$useState2[0],
    setConfirmLoading = _React$useState2[1];
  react.useEffect(function () {
    if (open && defaultName) {
      form.setFieldsValue({
        name: defaultName
      });
    }
  }, [open, defaultName, form]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
    title: "\u514B\u9686\u914D\u7F6E",
    open: open,
    onOk: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
      var values;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return form.validateFields();
          case 2:
            values = _context.sent;
            _context.next = 5;
            return onOk === null || onOk === void 0 ? void 0 : onOk(values);
          case 5:
            setConfirmLoading(true);
            _onCancel === null || _onCancel === void 0 || _onCancel();
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })),
    onCancel: function onCancel() {
      setConfirmLoading(false);
      _onCancel === null || _onCancel === void 0 || _onCancel();
    },
    maskClosable: false,
    confirmLoading: confirmLoading,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z, {
      style: {
        marginTop: 20
      },
      form: form,
      labelCol: {
        span: 6
      },
      labelAlign: "left",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, {
        name: "name",
        label: "\u914D\u7F6E\u540D\u79F0",
        initialValue: defaultName,
        rules: [{
          required: true,
          message: '请输入配置名称'
        }],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {})
      })
    })
  });
};
/* harmony default export */ var clone_config_modal = (CloneConfigModal);
// EXTERNAL MODULE: ./src/hooks/auth/use-topo-permission.ts
var use_topo_permission = __webpack_require__(48517);
// EXTERNAL MODULE: ./src/components/td-alink/index.tsx + 1 modules
var td_alink = __webpack_require__(2518);
// EXTERNAL MODULE: ./src/pages/config/components/diff-params/index.tsx + 1 modules
var diff_params = __webpack_require__(63085);
// EXTERNAL MODULE: ./src/utils/time.ts
var time = __webpack_require__(1810);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(674);
// EXTERNAL MODULE: ./node_modules/.pnpm/ahooks@3.8.4_react@18.3.1/node_modules/ahooks/es/useRequest/index.js + 20 modules
var useRequest = __webpack_require__(18871);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/drawer/index.js + 9 modules
var drawer = __webpack_require__(5840);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 2 modules
var space = __webpack_require__(65611);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js + 9 modules
var es_button = __webpack_require__(43616);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 4 modules
var message = __webpack_require__(42663);
;// CONCATENATED MODULE: ./src/pages/config/components/edit-config-drawer/version-detail.tsx














var VersionDetail = function VersionDetail(props) {
  var treeData = props.treeData,
    onClose = props.onClose,
    open = props.open,
    id = props.id,
    confTemplateId = props.confTemplateId,
    showAuditButton = props.showAuditButton,
    showRollbackButton = props.showRollbackButton,
    fieldsDefinitions = props.fieldsDefinitions,
    onOK = props.onOK,
    category = props.category;
  var flattenTreeData = (0,react.useMemo)(function () {
    return (0,utils/* flattenTree */.fK)(treeData);
  }, [treeData]);
  var isOps = category === 'ConfTemplateCategory_Ops';
  var _useRequest = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiConfTemplateVersionDetail */.By)({
        id: id
      }).then(function (res) {
        return res.item;
      });
    }),
    detailData = _useRequest.data;
  var _useRequest2 = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiConfTemplateVersionLatestDetail */.RL)({
        conf_template_id: confTemplateId
      }).then(function (res) {
        return res === null || res === void 0 ? void 0 : res.item;
      });
    }),
    latestDetail = _useRequest2.data;
  var _useMemo = (0,react.useMemo)(function () {
      if (!detailData) {
        return [];
      }
      return [latestDetail, detailData].map(function (item) {
        var data = isOps ? JSON.parse((item === null || item === void 0 ? void 0 : item.content) || '{}') : {};
        return [{
          label: '名称',
          key: 'name',
          value: item === null || item === void 0 ? void 0 : item.name
        }].concat(toConsumableArray_default()(isOps ? (fieldsDefinitions === null || fieldsDefinitions === void 0 ? void 0 : fieldsDefinitions.map(function (item) {
          return {
            label: item.title,
            key: item.name,
            value: data[item.name],
            type: item.render === 'json' ? 'code' : item.render
          };
        })) || [] : [{
          label: 'env.json',
          key: 'content',
          value: item === null || item === void 0 ? void 0 : item.content,
          type: 'code'
        }]));
      });
    }, [detailData, latestDetail, isOps, fieldsDefinitions, flattenTreeData]),
    _useMemo2 = slicedToArray_default()(_useMemo, 2),
    oldParams = _useMemo2[0],
    newParams = _useMemo2[1];
  if (!detailData) {
    return;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, {
    open: open,
    onClose: onClose,
    width: 1300,
    maskClosable: false,
    title: "\u7248\u672C\u8BE6\u60C5",
    extra: /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
      children: [showRollbackButton && /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "primary",
        onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
          return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                modal/* default */.Z.confirm({
                  content: "\u786E\u8BA4\u56DE\u6EDA ".concat(detailData.version, "  \u914D\u7F6E"),
                  onOk: function () {
                    var _onOk = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
                      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0,codo_iris/* postApiConfTemplateVersionRollback */.k9)({
                              id: id
                            });
                          case 2:
                            message/* default */.ZP.success('回滚成功');
                            onOK === null || onOK === void 0 || onOK();
                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    }));
                    function onOk() {
                      return _onOk.apply(this, arguments);
                    }
                    return onOk;
                  }()
                });
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })),
        children: "\u56DE\u6EDA"
      }), showAuditButton && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          danger: true,
          onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3() {
            return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return (0,codo_iris/* postApiConfTemplateVersionAudit */.Vd)({
                    id: id,
                    action: 'AuditConfTemplateVersionAction_Reject'
                  });
                case 2:
                  message/* default */.ZP.success('拒绝审核成功');
                  onOK === null || onOK === void 0 || onOK();
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          })),
          children: "\u62D2\u7EDD"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          type: "primary",
          onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
            return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0,codo_iris/* postApiConfTemplateVersionAudit */.Vd)({
                    id: id,
                    action: 'AuditConfTemplateVersionAction_Approve'
                  });
                case 2:
                  message/* default */.ZP.success('通过审核成功');
                  onOK === null || onOK === void 0 || onOK();
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          })),
          children: "\u901A\u8FC7"
        })]
      })]
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(diff_params/* default */.Z, {
      oldVersion: {
        title: (latestDetail === null || latestDetail === void 0 ? void 0 : latestDetail.version) || '',
        updater: (latestDetail === null || latestDetail === void 0 ? void 0 : latestDetail.updated_by) || '',
        updateTime: (0,time/* showSecondTime */.kZ)((latestDetail === null || latestDetail === void 0 ? void 0 : latestDetail.created_at) || ''),
        params: oldParams
      },
      newVersion: {
        title: detailData.version,
        updater: detailData.updated_by,
        updateTime: (0,time/* showSecondTime */.kZ)(detailData.created_at),
        params: newParams
      }
    })
  });
};
/* harmony default export */ var version_detail = (VersionDetail);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/SyncOutlined.js + 1 modules
var SyncOutlined = __webpack_require__(22694);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js + 1 modules
var CheckCircleOutlined = __webpack_require__(66118);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@5.6.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js + 1 modules
var CloseCircleOutlined = __webpack_require__(42599);
// EXTERNAL MODULE: ./node_modules/.pnpm/ahooks@3.8.4_react@18.3.1/node_modules/ahooks/es/useDebounce/index.js
var useDebounce = __webpack_require__(37665);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tag/index.js + 5 modules
var tag = __webpack_require__(20089);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/table/index.js + 108 modules
var table = __webpack_require__(32670);
;// CONCATENATED MODULE: ./src/pages/config/components/edit-config-drawer/template-version-list.tsx















var TemplateVersionList = function TemplateVersionList(props) {
  var id = props.id,
    topoId = props.topoId,
    category = props.category,
    treeData = props.treeData,
    fieldsDefinitions = props.fieldsDefinitions,
    onAudit = props.onAudit;
  var _useState = (0,react.useState)({
      current: 1,
      pageSize: 10
    }),
    _useState2 = slicedToArray_default()(_useState, 2),
    pagination = _useState2[0],
    setPagination = _useState2[1];
  var _useState3 = (0,react.useState)(0),
    _useState4 = slicedToArray_default()(_useState3, 2),
    total = _useState4[0],
    setTotal = _useState4[1];
  var _useState5 = (0,react.useState)(''),
    _useState6 = slicedToArray_default()(_useState5, 2),
    keyword = _useState6[0],
    setKeyword = _useState6[1];
  var debouncedKeyword = (0,useDebounce/* default */.Z)(keyword, {
    wait: 500
  });
  var auth = (0,use_topo_permission/* default */.Z)(topoId);
  var versionTableColumns = [{
    title: '版本号',
    dataIndex: 'version',
    key: 'version',
    render: function render(text, record) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: text
        }), record.is_current && /*#__PURE__*/(0,jsx_runtime.jsx)(tag/* default */.Z, {
          color: "blue",
          children: "\u5F53\u524D\u7248\u672C"
        })]
      });
    }
  }, {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: function render(status) {
      if (status === 'ConfTemplateVersionStatus_Pending_Approval') {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SyncOutlined/* default */.Z, {
            style: {
              color: '#faad14'
            }
          }), " \u5BA1\u6838\u4E2D"]
        });
      }
      if (status === 'ConfTemplateVersionStatus_Approved') {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CheckCircleOutlined/* default */.Z, {
            style: {
              color: '#52c41a'
            }
          }), " \u901A\u8FC7"]
        });
      }
      if (status === 'ConfTemplateVersionStatus_Rejected') {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CloseCircleOutlined/* default */.Z, {
            style: {
              color: '#ff4d4f'
            }
          }), " \u62D2\u7EDD"]
        });
      }
      if (status === 'ConfTemplateVersionStatus_Obsolete') {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CloseCircleOutlined/* default */.Z, {
            style: {
              color: '#c3c3c3'
            }
          }), " \u5E9F\u5F03"]
        });
      }
      return null;
    }
  }, {
    title: '更新人',
    dataIndex: 'created_by',
    key: 'created_by'
  }, {
    title: '更新时间',
    dataIndex: 'created_at',
    key: 'created_at',
    render: time/* showSecondTime */.kZ
  }, {
    title: '审核时间',
    dataIndex: 'updated_at',
    key: 'updated_at',
    render: time/* showSecondTime */.kZ
  }, {
    title: '操作',
    key: 'action',
    render: function render(v, record) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
        size: "middle",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
          modalRender: function modalRender(cancel) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(version_detail, {
              onClose: cancel,
              fieldsDefinitions: fieldsDefinitions,
              id: record.id,
              confTemplateId: id,
              treeData: treeData,
              category: category
            });
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(td_alink/* default */.Z, {
            children: "\u8BE6\u60C5"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
          modalRender: function modalRender(cancel) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(version_detail, {
              onClose: cancel,
              onOK: function onOK() {
                cancel();
                onAudit === null || onAudit === void 0 || onAudit();
                setPagination(objectSpread2_default()(objectSpread2_default()({}, pagination), {}, {
                  current: 1
                }));
              },
              id: record.id,
              confTemplateId: id,
              treeData: treeData,
              showAuditButton: true,
              fieldsDefinitions: fieldsDefinitions,
              category: category
            });
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(td_alink/* default */.Z, {
            disabled: record.status !== 'ConfTemplateVersionStatus_Pending_Approval' || category === 'ConfTemplateCategory_Business' && !auth.auditBusinessTemplateVersion,
            children: "\u5BA1\u6838"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
          modalRender: function modalRender(cancel) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(version_detail, {
              onClose: cancel,
              id: record.id,
              confTemplateId: id,
              treeData: treeData,
              showRollbackButton: true,
              category: category,
              fieldsDefinitions: fieldsDefinitions,
              onOK: function onOK() {
                cancel();
                setPagination(objectSpread2_default()(objectSpread2_default()({}, pagination), {}, {
                  current: 1
                }));
              }
            });
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(td_alink/* default */.Z, {
            disabled: record.is_current || record.status === 'ConfTemplateVersionStatus_Pending_Approval',
            children: "\u56DE\u6EDA"
          })
        })]
      });
    }
  }];
  var _useRequest = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiConfTemplateVersionList */.Bh)({
        conf_template_id: id,
        keyword: debouncedKeyword,
        page: pagination.current,
        page_size: pagination.pageSize,
        topo_id: topoId,
        category: category
      }).then(function (res) {
        setTotal(res.total);
        return res.list || [];
      });
    }, {
      refreshDeps: [pagination, debouncedKeyword]
    }),
    templateVersionList = _useRequest.data;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
      placeholder: "\u5173\u952E\u5B57\u6A21\u7CCA\u641C\u7D22",
      style: {
        marginBottom: 16
      },
      value: keyword,
      onChange: function onChange(e) {
        return setKeyword(e.target.value);
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(table/* default */.Z, {
      columns: versionTableColumns,
      dataSource: templateVersionList,
      pagination: objectSpread2_default()(objectSpread2_default()({}, pagination), {}, {
        total: total,
        onChange: function onChange(page, pageSize) {
          setPagination({
            current: page,
            pageSize: pageSize
          });
        }
      })
    })]
  });
};
/* harmony default export */ var template_version_list = (TemplateVersionList);
// EXTERNAL MODULE: ./src/utils/form-render.ts + 3 modules
var form_render = __webpack_require__(25329);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tabs/index.js + 24 modules
var tabs = __webpack_require__(89569);
// EXTERNAL MODULE: ./node_modules/.pnpm/form-render@2.5.2_@types+react@18.3.21_antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18._xmbdvenacipsjuyhcmetfr4f7q/node_modules/form-render/es/index.js + 205 modules
var es = __webpack_require__(25588);
;// CONCATENATED MODULE: ./src/pages/config/components/edit-config-drawer/style.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var stylemodules = ({"no-xform-render-block":"no-xform-render-block___erNBm","noXformRenderBlock":"no-xform-render-block___erNBm"});
;// CONCATENATED MODULE: ./src/pages/config/components/edit-config-drawer/index.tsx















var TabPane = tabs/* default */.Z.TabPane;
var EditConfigDrawer = function EditConfigDrawer(props) {
  var open = props.open,
    onClose = props.onClose,
    currentConfigData = props.currentConfigData,
    treeData = props.treeData,
    id = props.id,
    topoId = props.topoId,
    category = props.category,
    kind = props.kind,
    defaultTabActiveKey = props.defaultTabActiveKey;
  var form = (0,es/* useForm */.cI)();
  var _useState = (0,react.useState)(defaultTabActiveKey || 'edit'),
    _useState2 = slicedToArray_default()(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var isOps = category === 'ConfTemplateCategory_Ops';
  var auth = (0,use_topo_permission/* default */.Z)(topoId);
  var _useRequest = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiFormTemplateMeta */.Ul)({
        category: category,
        kind: kind
      }).then(function (res) {
        return res.items;
      });
    }, {
      ready: isOps && open
    }),
    templateMeta = _useRequest.data;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z, {
    open: open,
    onClose: onClose,
    width: 1200,
    maskClosable: false,
    title: "\u914D\u7F6E\u8BE6\u60C5-\u914D\u7F6E\u540D\u79F0",
    extra: activeKey === 'edit' && /*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        style: {
          marginRight: 8
        },
        onClick: onClose,
        children: "\u53D6\u6D88"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "primary",
        disabled: isOps && !auth.editOpsConf,
        onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2() {
          var values;
          return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return form.validateFields();
              case 2:
                values = _context2.sent;
                modal/* default */.Z.confirm({
                  title: '配置通过审核后将应用于全部使用该配置的节点，确认提交配置?',
                  onOk: function () {
                    var _onOk = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
                      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0,codo_iris/* postApiConfTemplateSubmitAudit */.jE)(objectSpread2_default()(objectSpread2_default()({
                              id: id
                            }, values), {}, {
                              content: isOps ? JSON.stringify(values.content) : values.content
                            }));
                          case 2:
                            message/* default */.ZP.success('提交成功');
                            setActiveKey('version');
                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    }));
                    function onOk() {
                      return _onOk.apply(this, arguments);
                    }
                    return onOk;
                  }()
                });
              case 4:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        })),
        children: "\u63D0\u4EA4"
      })]
    }),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        marginTop: -20
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(tabs/* default */.Z, {
        activeKey: activeKey,
        style: {
          marginBottom: 24
        },
        onChange: function onChange(v) {
          setActiveKey(v);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TabPane, {
          tab: "\u914D\u7F6E\u7F16\u8F91",
          children: open && /*#__PURE__*/(0,jsx_runtime.jsx)(es/* default */.ZP, {
            form: form,
            schema: {
              type: 'object',
              column: 2,
              properties: objectSpread2_default()({
                name: {
                  title: '配置名称',
                  type: 'string',
                  cellSpan: 2,
                  defaultValue: currentConfigData === null || currentConfigData === void 0 ? void 0 : currentConfigData.name,
                  rules: [{
                    max: 50,
                    message: '配置名称最大长度50字符'
                  }]
                }
              }, isOps ? {
                content: {
                  type: 'object',
                  className: stylemodules.noXformRenderBlock,
                  properties: (0,form_render/* getSchemaPropertiesByFieldsDefinitions */.o)(templateMeta, JSON.parse(currentConfigData.content || '{}'))
                }
              } : {
                content: {
                  title: 'env.json',
                  type: 'string',
                  widget: 'Editor',
                  cellSpan: 2,
                  defaultValue: currentConfigData === null || currentConfigData === void 0 ? void 0 : currentConfigData.content,
                  props: {
                    theme: 'slush-poppies',
                    height: 300,
                    options: {
                      minimap: {
                        enabled: false
                      },
                      fontSize: 14,
                      scrollBeyondLastLine: false
                    }
                  }
                }
              })
            },
            widgets: form_render/* widgets */.D
          })
        }, "edit"), /*#__PURE__*/(0,jsx_runtime.jsx)(TabPane, {
          tab: "\u914D\u7F6E\u7248\u672C",
          children: open && /*#__PURE__*/(0,jsx_runtime.jsx)(template_version_list, {
            fieldsDefinitions: templateMeta,
            topoId: topoId,
            id: id,
            category: category,
            treeData: treeData,
            kind: kind,
            onAudit: function onAudit() {
              onClose();
            }
          })
        }, "version")]
      })
    })
  });
};
/* harmony default export */ var edit_config_drawer = (EditConfigDrawer);
// EXTERNAL MODULE: ./node_modules/.pnpm/@joyu+joy-design@0.1.26_babel-plugin-macros@3.1.0_date-fns@3.6.0_moment@2.30.1/node_modules/@joyu/joy-design/dist/index.js + 72 modules
var dist = __webpack_require__(26781);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tree/index.js + 10 modules
var tree = __webpack_require__(1937);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(32699);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// CONCATENATED MODULE: ./src/pages/config/components/tree-node-item/index.tsx









var TreeNodeItem = function TreeNodeItem(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? [] : _props$value,
    open = props.open,
    onChange = props.onChange,
    treeData = props.treeData,
    children = props.children,
    onOk = props.onOk,
    okButtonProps = props.okButtonProps;
  var _React$useState = react.useState(value),
    _React$useState2 = slicedToArray_default()(_React$useState, 2),
    selectedKeys = _React$useState2[0],
    setSelectedKeys = _React$useState2[1];

  // Helper function to collect node IDs that should be expanded
  var getExpandedKeys = function getExpandedKeys(nodes) {
    if (!nodes) return [];
    var expandedKeys = [];
    var checkNode = function checkNode(node) {
      if (!node) return false;

      // If the current node is not disabled, return true
      if (node.disabled !== true) {
        return true;
      }

      // If node has children, check all children recursively
      if (node.children && node.children.length > 0) {
        var hasEnabledDescendant = node.children.some(checkNode);
        if (hasEnabledDescendant) {
          // If any descendant is enabled, add current node to expanded keys
          expandedKeys.push(node.node_id);
        }
        return hasEnabledDescendant;
      }
      return false;
    };
    nodes.forEach(checkNode);
    return expandedKeys;
  };

  // Calculate expanded keys when treeData changes
  var defaultExpandedKeys = (0,react.useMemo)(function () {
    return getExpandedKeys(treeData || []);
  }, [treeData]);
  (0,react.useEffect)(function () {
    setSelectedKeys(value);
  }, [value]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(dist/* OperationWithModal */.FW, {
    modalRender: function modalRender(cancel) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
        style: {
          top: 20
        },
        open: open,
        title: "\u914D\u7F6E\u5E94\u7528\u8282\u70B9",
        onCancel: cancel,
        maskClosable: false,
        width: 900,
        footer: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
          onClick: cancel,
          children: "\u53D6\u6D88"
        }, "cancel"), /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, objectSpread2_default()(objectSpread2_default()({
          type: "primary",
          onClick: /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
            return regeneratorRuntime_default()().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  onChange === null || onChange === void 0 || onChange(selectedKeys);
                  _context.next = 3;
                  return onOk === null || onOk === void 0 ? void 0 : onOk(selectedKeys);
                case 3:
                  cancel();
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))
        }, okButtonProps), {}, {
          children: "\u786E\u8BA4"
        }), "ok")],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            background: '#fff',
            padding: 32,
            maxHeight: 'calc(100vh - 180px)',
            overflow: 'auto'
          },
          children: treeData && /*#__PURE__*/(0,jsx_runtime.jsx)(tree/* default */.Z, {
            checkable: true,
            defaultExpandedKeys: defaultExpandedKeys,
            checkedKeys: selectedKeys,
            onCheck: function onCheck(keys, info) {
              setSelectedKeys(keys.filter(function (key, index) {
                var _info$checkedNodes;
                return lodash_default().isEmpty((_info$checkedNodes = info.checkedNodes) === null || _info$checkedNodes === void 0 ? void 0 : _info$checkedNodes[index].children);
              }));
            },
            treeData: treeData,
            fieldNames: {
              title: 'name',
              key: 'node_id'
            }
          })
        })
      });
    },
    children: children
  });
};
/* harmony default export */ var tree_node_item = (TreeNodeItem);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ahooksjs+use-url-state@3.5.1_react-router@6.30.0_react@18.3.1__react@18.3.1/node_modules/@ahooksjs/use-url-state/es/index.js
var use_url_state_es = __webpack_require__(71688);
// EXTERNAL MODULE: ./src/components/table/default-table/index.tsx + 2 modules
var default_table = __webpack_require__(10134);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/flex/index.js + 2 modules
var flex = __webpack_require__(23538);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@5.25.1_date-fns@3.6.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/menu/index.js + 10 modules
var menu = __webpack_require__(49019);
;// CONCATENATED MODULE: ./src/pages/config/list/index.tsx






















var ConfigCenter = function ConfigCenter() {
  var _useUrlState = (0,use_url_state_es/* default */.Z)({
      category: 'ConfTemplateCategory_Business'
    }),
    _useUrlState2 = slicedToArray_default()(_useUrlState, 2),
    urlState = _useUrlState2[0],
    setUrlState = _useUrlState2[1];
  var isOps = urlState.category === 'ConfTemplateCategory_Ops';
  var tableRef = (0,react.useRef)();
  var auth = (0,use_topo_permission/* default */.Z)(urlState.topoId);
  var _useRequest = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiV1TopologyList */.vB)({}).then(function (res) {
        var _data$;
        var _data = res.list || [];
        if (!urlState.topoId && _data !== null && _data !== void 0 && (_data$ = _data[0]) !== null && _data$ !== void 0 && _data$.id) {
          var _data$2;
          setUrlState({
            topoId: "".concat(_data === null || _data === void 0 || (_data$2 = _data[0]) === null || _data$2 === void 0 ? void 0 : _data$2.id)
          });
        } else if (urlState.topoId && !(_data !== null && _data !== void 0 && _data.some(function (item) {
          return "".concat(item.id) === urlState.topoId;
        }))) {
          setUrlState({
            topoId: ''
          });
        }
        return _data;
      });
    }),
    topoList = _useRequest.data,
    refreshTopoList = _useRequest.refresh;
  var getTreeDataByKind = function getTreeDataByKind(kind) {
    var _topoList$find;
    var topology = topoList === null || topoList === void 0 || (_topoList$find = topoList.find(function (item) {
      return "".concat(item.id) === urlState.topoId;
    })) === null || _topoList$find === void 0 ? void 0 : _topoList$find.topoLogy;
    var processNode = function processNode(node) {
      var newNode = objectSpread2_default()({}, node);
      if (kind && node.kind !== kind) {
        newNode.disabled = true;
      }
      if (node.children) {
        newNode.children = node.children.map(processNode);
      }
      return newNode;
    };
    return topology ? topology.map(function (item) {
      return processNode(item);
    }) : [];
  };
  var treeData = (0,react.useMemo)(function () {
    var _topoList$find2;
    return topoList === null || topoList === void 0 || (_topoList$find2 = topoList.find(function (item) {
      return "".concat(item.id) === urlState.topoId;
    })) === null || _topoList$find2 === void 0 ? void 0 : _topoList$find2.topoLogy;
  }, [topoList, urlState.topoId]);
  var _useRequest2 = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiFormTemplateKind */.cJ)({
        list_all: 1
      }).then(function (res) {
        return (res.list || []).map(function (item) {
          return {
            label: "".concat(item.kind).concat(item.description ? "(".concat(item.description, ")") : ''),
            value: item.kind
          };
        });
      });
    }),
    templateKindList = _useRequest2.data;
  var _useRequest3 = (0,useRequest/* default */.Z)(function () {
      return (0,codo_iris/* getApiConfTemplateDetail */.VN)({
        id: urlState.templateId
      }).then(function (res) {
        return res.item;
      });
    }, {
      ready: !!urlState.templateId
    }),
    templateDetail = _useRequest3.data;
  var handleDelete = function handleDelete(record) {
    modal/* default */.Z.confirm({
      title: "\u786E\u8BA4\u5220\u9664 ".concat(record.name, "?"),
      content: '删除后无法找回，请谨慎操作',
      okText: '确认',
      cancelText: '取消',
      onOk: function () {
        var _onOk = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee() {
          var _tableRef$current;
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,codo_iris/* postApiConfTemplateDelete */.ox)({
                  id: record.id
                });
              case 2:
                message/* default */.ZP.success('删除成功');
                tableRef === null || tableRef === void 0 || (_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 || _tableRef$current.reload();
                // todo 这里可能存在删除当页最后一条 需要处理
                // tableRef?.current?.pageInfo?.total
                // if (confTemplateList && confTemplateList.length <= 1 && pagination.current > 1) {
                //   setPagination({ ...pagination, current: pagination.current - 1 });
                // } else {
                //   handleRefreshList();
                // }
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function onOk() {
          return _onOk.apply(this, arguments);
        }
        return onOk;
      }()
    });
  };
  var columns = [{
    title: '配置名称',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '当前版本',
    dataIndex: 'version',
    key: 'version'
  }, {
    title: '配置类型',
    dataIndex: 'kind',
    key: 'kind'
  }, {
    title: '应用节点',
    dataIndex: 'target_nodes',
    key: 'target_nodes',
    render: function render(v, record) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(tree_node_item, {
        value: v,
        treeData: getTreeDataByKind(record.kind),
        okButtonProps: {
          disabled: isOps && !auth.editOpsConf
        },
        onOk: ( /*#__PURE__*/function () {
          var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(value) {
            var _tableRef$current2;
            return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return (0,codo_iris/* postApiConfTemplateApply */.Ej)({
                    id: record.id,
                    target_nodes: value
                  }).then(function () {
                    message/* default */.ZP.success('修改应用节点成功');
                  });
                case 2:
                  (_tableRef$current2 = tableRef.current) === null || _tableRef$current2 === void 0 || _tableRef$current2.reload();
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          onClick: function onClick() {
            refreshTopoList();
          },
          children: "\u67E5\u770B"
        })
      });
    }
  }, {
    title: '更新人',
    dataIndex: 'updated_by'
  }, {
    title: '更新时间',
    dataIndex: 'updated_at',
    render: time/* showSecondTime */.kZ
  }, {
    title: '操作',
    key: 'action',
    render: function render(_, record) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
          modalRender: function modalRender(cancel) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(edit_config_drawer, {
              category: urlState.category,
              topoId: urlState.topoId,
              id: record.id,
              onClose: function onClose() {
                var _tableRef$current3;
                cancel();
                (_tableRef$current3 = tableRef.current) === null || _tableRef$current3 === void 0 || _tableRef$current3.reload();
              },
              currentConfigData: record,
              treeData: getTreeDataByKind(record.kind),
              kind: record.kind
            });
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            style: {
              marginRight: 8
            },
            children: "\u914D\u7F6E\u7F16\u8F91"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
          modalRender: function modalRender(cancel) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(edit_config_drawer, {
              category: urlState.category,
              topoId: urlState.topoId,
              id: record.id,
              onClose: function onClose() {
                var _tableRef$current4;
                cancel();
                (_tableRef$current4 = tableRef.current) === null || _tableRef$current4 === void 0 || _tableRef$current4.reload();
              },
              onOk: function onOk() {
                var _tableRef$current5;
                tableRef === null || tableRef === void 0 || (_tableRef$current5 = tableRef.current) === null || _tableRef$current5 === void 0 || _tableRef$current5.reload();
              },
              currentConfigData: record,
              treeData: treeData,
              kind: record.kind,
              defaultTabActiveKey: "version"
            });
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            style: {
              marginRight: 8
            },
            children: "\u914D\u7F6E\u7248\u672C"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
          modalRender: function modalRender(cancel) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(clone_config_modal, {
              open: true,
              defaultName: record.name + '_copy',
              onCancel: cancel,
              onOk: ( /*#__PURE__*/function () {
                var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3(data) {
                  var _tableRef$current6;
                  return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return (0,codo_iris/* postApiConfTemplateClone */.kR)({
                          id: record.id,
                          name: data.name
                        });
                      case 2:
                        cancel();
                        tableRef === null || tableRef === void 0 || (_tableRef$current6 = tableRef.current) === null || _tableRef$current6 === void 0 || _tableRef$current6.reload(true);
                        message/* default */.ZP.success('克隆成功');
                      case 5:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }())
            });
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(td_alink/* default */.Z, {
            disabled: isOps && !auth.editOpsConf,
            style: {
              marginRight: 8
            },
            children: "\u514B\u9686"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(td_alink/* default */.Z, {
          disabled: isOps && !auth.editOpsConf,
          onClick: function onClick() {
            return handleDelete(record);
          },
          children: "\u5220\u9664"
        })]
      });
    }
  }];
  var handleAddOk = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4(data) {
      var _tableRef$current7;
      return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (urlState.topoId) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return");
          case 2:
            _context4.next = 4;
            return (0,codo_iris/* postApiConfTemplateCreate */.$o)(objectSpread2_default()(objectSpread2_default()({}, data), {}, {
              topo_id: urlState.topoId,
              category: urlState.category
            }));
          case 4:
            tableRef === null || tableRef === void 0 || (_tableRef$current7 = tableRef.current) === null || _tableRef$current7 === void 0 || _tableRef$current7.reload(true);
          case 5:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function handleAddOk(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(flex/* default */.Z, {
    style: {
      height: '100%'
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(menu/* default */.Z, {
      mode: "inline",
      defaultOpenKeys: ['sub1'],
      selectedKeys: [urlState.category],
      onSelect: function onSelect(_ref4) {
        var key = _ref4.key;
        setUrlState({
          category: key
        });
      },
      style: {
        width: 256,
        height: '100%'
      },
      items: [{
        key: 'sub1',
        label: '配置中心',
        children: [{
          key: 'ConfTemplateCategory_Business',
          label: '业务配置'
        }, {
          key: 'ConfTemplateCategory_Ops',
          label: '运维配置'
        }]
      }]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        width: 0,
        flex: 1,
        height: '100%',
        padding: 20,
        backgroundColor: '#fff'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        children: urlState.category === 'ConfTemplateCategory_Business' ? '业务配置' : '运维配置'
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(default_table/* default */.Z, {
        tableProps: {
          style: {
            marginTop: 10
          },
          params: {
            topoId: urlState.topoId,
            kind: urlState.kind,
            category: urlState.category
          }
        },
        actionRef: tableRef,
        search: {
          placeholder: '关键字模糊搜索'
        },
        requestReady: [!!urlState.topoId],
        request: ( /*#__PURE__*/function () {
          var _ref5 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5(params) {
            var current, pageSize, keyword, res;
            return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  current = params.current, pageSize = params.pageSize, keyword = params.keyword;
                  _context5.next = 3;
                  return (0,codo_iris/* getApiConfTemplateList */.tc)({
                    page: current,
                    page_size: pageSize,
                    topo_id: urlState.topoId,
                    category: urlState.category,
                    keyword: keyword,
                    kind: urlState.kind
                  });
                case 3:
                  res = _context5.sent;
                  return _context5.abrupt("return", {
                    total: res.total || 0,
                    data: res.list || []
                  });
                case 5:
                case "end":
                  return _context5.stop();
              }
            }, _callee5);
          }));
          return function (_x4) {
            return _ref5.apply(this, arguments);
          };
        }()),
        columns: columns,
        rightTitle: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
          style: {
            width: 240
          },
          value: urlState.topoId,
          options: topoList === null || topoList === void 0 ? void 0 : topoList.map(function (item) {
            return {
              label: item.name,
              value: "".concat(item.id)
            };
          }),
          onChange: function onChange(value) {
            setUrlState({
              topoId: value
            });
          }
        }, "topo")].concat(toConsumableArray_default()(isOps ? [/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
          placeholder: "\u7B5B\u9009\u6A21\u677F\u7C7B\u578B",
          style: {
            width: 240
          },
          options: templateKindList,
          value: urlState.kind,
          onChange: function onChange(value) {
            setUrlState({
              kind: value
            });
          },
          allowClear: true
        }, "kind")] : [])),
        leftTitle: auth.editOpsConf && /*#__PURE__*/(0,jsx_runtime.jsx)(edit_operation_with_modal/* OperationWithModal */.F, {
          modalRender: function modalRender(cancel) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(add_config_modal, {
              templateKindList: templateKindList,
              onCancel: cancel,
              onOk: handleAddOk
            });
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
            type: "primary",
            children: "\u65B0\u589E"
          })
        })
      })]
    }), templateDetail && /*#__PURE__*/(0,jsx_runtime.jsx)(edit_config_drawer, {
      open: !!urlState.templateId,
      category: urlState.category,
      topoId: urlState.topoId,
      id: templateDetail.id,
      onClose: function onClose() {
        setUrlState({
          templateId: undefined
        });
      },
      currentConfigData: templateDetail,
      treeData: treeData,
      kind: templateDetail.kind
    })]
  });
};
/* harmony default export */ var list = (ConfigCenter);

/***/ })

}]);