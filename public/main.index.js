(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["main"],{

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"./node_modules/_@loadable_component@5.10.3@@loadable/component/dist/loadable.esm.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  key: \"app\",\n  path: \"/\",\n  component: Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    chunkName: function chunkName() {\n      return \"App\";\n    },\n    isReady: function isReady(props) {\n      if (true) {\n        return !!__webpack_require__.m[this.resolve(props)];\n      }\n\n      return false;\n    },\n    requireAsync: function requireAsync() {\n      return __webpack_require__.e(/*! import() | App */ \"App\").then(__webpack_require__.bind(null, /*! ./App */ \"./src/App.js\"));\n    },\n    requireSync: function requireSync(props) {\n      var id = this.resolve(props);\n\n      if (true) {\n        return __webpack_require__(id);\n      }\n\n      return eval('module.require')(id);\n    },\n    resolve: function resolve() {\n      if (true) {\n        return /*require.resolve*/(/*! ./App */ \"./src/App.js\");\n      }\n\n      return eval('require.resolve')(\"./App\");\n    }\n  }),\n  routes: [{\n    key: \"Home\",\n    path: \"/\",\n    exact: true,\n    component: Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      chunkName: function chunkName() {\n        return \"containers-Home\";\n      },\n      isReady: function isReady(props) {\n        if (true) {\n          return !!__webpack_require__.m[this.resolve(props)];\n        }\n\n        return false;\n      },\n      requireAsync: function requireAsync() {\n        return __webpack_require__.e(/*! import() | containers-Home */ \"containers-Home\").then(__webpack_require__.bind(null, /*! ./containers/Home */ \"./src/containers/Home/index.js\"));\n      },\n      requireSync: function requireSync(props) {\n        var id = this.resolve(props);\n\n        if (true) {\n          return __webpack_require__(id);\n        }\n\n        return eval('module.require')(id);\n      },\n      resolve: function resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n        }\n\n        return eval('require.resolve')(\"./containers/Home\");\n      }\n    }),\n    loadData: Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      chunkName: function chunkName() {\n        return \"containers-Home\";\n      },\n      isReady: function isReady(props) {\n        if (true) {\n          return !!__webpack_require__.m[this.resolve(props)];\n        }\n\n        return false;\n      },\n      requireAsync: function requireAsync() {\n        return __webpack_require__.e(/*! import() | containers-Home */ \"containers-Home\").then(__webpack_require__.bind(null, /*! ./containers/Home */ \"./src/containers/Home/index.js\"));\n      },\n      requireSync: function requireSync(props) {\n        var id = this.resolve(props);\n\n        if (true) {\n          return __webpack_require__(id);\n        }\n\n        return eval('module.require')(id);\n      },\n      resolve: function resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n        }\n\n        return eval('require.resolve')(\"./containers/Home\");\n      }\n    }).loadData\n  }, {\n    key: \"Login\",\n    path: \"/login\",\n    exact: true,\n    component: Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      chunkName: function chunkName() {\n        return \"containers-Login\";\n      },\n      isReady: function isReady(props) {\n        if (true) {\n          return !!__webpack_require__.m[this.resolve(props)];\n        }\n\n        return false;\n      },\n      requireAsync: function requireAsync() {\n        return __webpack_require__.e(/*! import() | containers-Login */ \"containers-Login\").then(__webpack_require__.bind(null, /*! ./containers/Login */ \"./src/containers/Login/index.js\"));\n      },\n      requireSync: function requireSync(props) {\n        var id = this.resolve(props);\n\n        if (true) {\n          return __webpack_require__(id);\n        }\n\n        return eval('module.require')(id);\n      },\n      resolve: function resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ./containers/Login */ \"./src/containers/Login/index.js\");\n        }\n\n        return eval('require.resolve')(\"./containers/Login\");\n      }\n    })\n  }, {\n    path: \"*\",\n    component: Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      chunkName: function chunkName() {\n        return \"containers-NotFound\";\n      },\n      isReady: function isReady(props) {\n        if (true) {\n          return !!__webpack_require__.m[this.resolve(props)];\n        }\n\n        return false;\n      },\n      requireAsync: function requireAsync() {\n        return __webpack_require__.e(/*! import() | containers-NotFound */ \"containers-NotFound\").then(__webpack_require__.bind(null, /*! ./containers/NotFound */ \"./src/containers/NotFound/index.js\"));\n      },\n      requireSync: function requireSync(props) {\n        var id = this.resolve(props);\n\n        if (true) {\n          return __webpack_require__(id);\n        }\n\n        return eval('module.require')(id);\n      },\n      resolve: function resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ./containers/NotFound */ \"./src/containers/NotFound/index.js\");\n        }\n\n        return eval('require.resolve')(\"./containers/NotFound\");\n      }\n    })\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.10.2@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/_react-dom@16.10.2@react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/_react-router-dom@5.1.2@react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/_react-redux@7.1.1@react-redux/es/index.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-config */ \"./node_modules/_react-router-config@5.1.1@react-router-config/esm/react-router-config.js\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @loadable/component */ \"./node_modules/_@loadable_component@5.10.3@@loadable/component/dist/loadable.esm.js\");\n\n\n\n\n\n\n\n\n\nvar App = function App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    store: Object(_store__WEBPACK_IMPORTED_MODULE_4__[\"getClientStore\"])()\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_6__[\"renderRoutes\"])(_Routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"]))));\n}; // 开始渲染之前加载所需的组件\n\n\nObject(_loadable_component__WEBPACK_IMPORTED_MODULE_7__[\"loadableReady\"])().then(function () {\n  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById(\"root\"));\n});\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ }),

/***/ "./src/client/serverAxios.js":
/*!***********************************!*\
  !*** ./src/client/serverAxios.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.19.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar serverAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: '/'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (serverAxios);\n\n//# sourceURL=webpack:///./src/client/serverAxios.js?");

/***/ }),

/***/ "./src/containers/Home/store/contants.js":
/*!***********************************************!*\
  !*** ./src/containers/Home/store/contants.js ***!
  \***********************************************/
/*! exports provided: CHANGE_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_LIST\", function() { return CHANGE_LIST; });\nvar CHANGE_LIST = 'HOME/CHANGE_LIST';\n\n//# sourceURL=webpack:///./src/containers/Home/store/contants.js?");

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/containers/Home/store/reducer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/containers/Home/store/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contants */ \"./src/containers/Home/store/contants.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar defaultState = {\n  name: \"render lee\",\n  newList: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _contants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_LIST\"]:\n      return _objectSpread({}, defaultState, {\n        newList: action.list\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/containers/Home/store/reducer.js?");

/***/ }),

/***/ "./src/server/serverAxios.js":
/*!***********************************!*\
  !*** ./src/server/serverAxios.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.19.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar serverAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: 'http://localhost:4000'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (serverAxios);\n\n//# sourceURL=webpack:///./src/server/serverAxios.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: getStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStore\", function() { return getStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/_redux@4.0.4@redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/_redux-thunk@2.3.0@redux-thunk/es/index.js\");\n/* harmony import */ var _containers_Home_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Home/store */ \"./src/containers/Home/store/index.js\");\n/* harmony import */ var _server_serverAxios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server/serverAxios */ \"./src/server/serverAxios.js\");\n/* harmony import */ var _client_serverAxios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/serverAxios */ \"./src/client/serverAxios.js\");\n\n\n\n\n\nvar reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  home: _containers_Home_store__WEBPACK_IMPORTED_MODULE_2__[\"reducer\"]\n});\nvar getStore = function getStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"].withExtraArgument(_server_serverAxios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])));\n};\nvar getClientStore = function getClientStore() {\n  var defaultState = window.context ? window.context.state : {};\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"].withExtraArgument(_client_serverAxios__WEBPACK_IMPORTED_MODULE_4__[\"default\"])));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ })

},[["./src/client/index.js","manifest","vendor~main"]]]);