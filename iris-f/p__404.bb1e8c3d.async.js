"use strict";
(self["webpackChunkiris"] = self["webpackChunkiris"] || []).push([[2571],{

/***/ 30697:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _umijs_max__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88523);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12218);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75271);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52676);




var NoFoundPage = function NoFoundPage() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
    status: "404",
    title: "404",
    subTitle: (0,_umijs_max__WEBPACK_IMPORTED_MODULE_0__.useIntl)().formatMessage({
      id: 'pages.404.subTitle'
    }),
    extra: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
      type: "primary",
      onClick: function onClick() {
        return _umijs_max__WEBPACK_IMPORTED_MODULE_0__.history.push('/');
      },
      children: (0,_umijs_max__WEBPACK_IMPORTED_MODULE_0__.useIntl)().formatMessage({
        id: 'pages.404.buttonText'
      })
    })
  });
};
/* harmony default export */ __webpack_exports__["default"] = (NoFoundPage);

/***/ })

}]);