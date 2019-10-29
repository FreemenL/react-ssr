(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["App"],{

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./src/components/styles.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--6-1!./src/components/styles.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".src-components-styles__test--17SI-{\\n  background: pink;\\n}\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"test\": \"src-components-styles__test--17SI-\"\n};\n\n//# sourceURL=webpack:///./src/components/styles.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--6-1");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/_react@16.11.0@react/index.js\"));\n\nvar _Header = _interopRequireDefault(__webpack_require__(/*! ./components/Header */ \"./src/components/Header.tsx\"));\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"./node_modules/_react-router-config@5.1.1@react-router-config/esm/react-router-config.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(props) {\n  return _react.default.createElement(\"div\", null, _react.default.createElement(_Header.default, {\n    staticContext: props.staticContext\n  }), (0, _reactRouterConfig.renderRoutes)(props.route.routes));\n};\n\nvar _default = App;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _tslib = __webpack_require__(/*! tslib */ \"./node_modules/_tslib@1.10.0@tslib/tslib.es6.js\");\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/_react@16.11.0@react/index.js\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/_react-router-dom@5.1.2@react-router-dom/esm/react-router-dom.js\");\n\nvar _WithStyle = _interopRequireDefault(__webpack_require__(/*! ../WithStyle */ \"./src/WithStyle.tsx\"));\n\nvar _styles = _interopRequireDefault(__webpack_require__(/*! ./styles.css */ \"./src/components/styles.css\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nvar _default = (0, _WithStyle.default)(\n/** @class */\nfunction (_super) {\n  (0, _tslib.__extends)(Header, _super);\n\n  function Header() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n\n  Header.prototype.render = function () {\n    return _react.default.createElement(\"div\", {\n      className: _styles.default.test\n    }, _react.default.createElement(_reactRouterDom.Link, {\n      to: '/'\n    }, \"home\"), _react.default.createElement(\"br\", null), _react.default.createElement(_reactRouterDom.Link, {\n      to: '/login'\n    }, \"login\"));\n  };\n\n  return Header;\n}(_react.Component), _styles.default);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/components/Header.tsx?");

/***/ }),

/***/ "./src/components/styles.css":
/*!***********************************!*\
  !*** ./src/components/styles.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--6-1!./styles.css */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./src/components/styles.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/_style-loader@1.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@1.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/components/styles.css?");

/***/ })

}]);