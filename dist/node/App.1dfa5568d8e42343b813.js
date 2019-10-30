exports.ids = ["App"];
exports.modules = {

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./src/components/styles.less":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--6-1!./node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./src/components/styles.less ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".src-components-styles__test--2JHLs {\\n  background: purple;\\n}\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"test\": \"src-components-styles__test--2JHLs\"\n};\n\n//# sourceURL=webpack:///./src/components/styles.less?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--6-1!./node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _Header = _interopRequireDefault(__webpack_require__(/*! ./components/Header */ \"./src/components/Header.tsx\"));\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(props) {\n  return _react.default.createElement(\"div\", null, _react.default.createElement(_Header.default, {\n    staticContext: props.staticContext\n  }), (0, _reactRouterConfig.renderRoutes)(props.route.routes));\n};\n\nvar _default = App;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _tslib = __webpack_require__(/*! tslib */ \"tslib\");\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _WithStyle = _interopRequireDefault(__webpack_require__(/*! ../WithStyle */ \"./src/WithStyle.tsx\"));\n\nvar _styles = _interopRequireDefault(__webpack_require__(/*! ./styles.less */ \"./src/components/styles.less\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nvar _default = (0, _WithStyle.default)(\n/** @class */\nfunction (_super) {\n  (0, _tslib.__extends)(Header, _super);\n\n  function Header() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n\n  Header.prototype.render = function () {\n    return _react.default.createElement(\"div\", {\n      className: _styles.default.test\n    }, _react.default.createElement(_reactRouterDom.Link, {\n      to: '/'\n    }, \"home\"), _react.default.createElement(\"br\", null), _react.default.createElement(_reactRouterDom.Link, {\n      to: '/login'\n    }, \"login\"));\n  };\n\n  return Header;\n}(_react.PureComponent), _styles.default);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/components/Header.tsx?");

/***/ }),

/***/ "./src/components/styles.less":
/*!************************************!*\
  !*** ./src/components/styles.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--6-1!../../node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./styles.less */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./src/components/styles.less\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/styles.less?");

/***/ })

};;