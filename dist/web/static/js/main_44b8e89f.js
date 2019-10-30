(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["main"],{

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./src/containers/Home/style.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--6-1!./node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./src/containers/Home/style.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  background: green;\\n}\\n.src-containers-Home-style__test--d3nG6 {\\n  margin-top: 50px;\\n  background: red;\\n}\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"test\": \"src-containers-Home-style__test--d3nG6\"\n};\n\n//# sourceURL=webpack:///./src/containers/Home/style.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--6-1!./node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"./node_modules/_@loadable_component@5.10.3@@loadable/component/dist/loadable.esm.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  key: \"app\",\n  path: \"/\",\n  component: Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    chunkName: function chunkName() {\n      return \"App\";\n    },\n    isReady: function isReady(props) {\n      if (true) {\n        return !!__webpack_require__.m[this.resolve(props)];\n      }\n\n      return false;\n    },\n    requireAsync: function requireAsync() {\n      return __webpack_require__.e(/*! import() | App */ \"App\").then(__webpack_require__.t.bind(null, /*! ./App */ \"./src/App.tsx\", 7));\n    },\n    requireSync: function requireSync(props) {\n      var id = this.resolve(props);\n\n      if (true) {\n        return __webpack_require__(id);\n      }\n\n      return eval('module.require')(id);\n    },\n    resolve: function resolve() {\n      if (true) {\n        return /*require.resolve*/(/*! ./App */ \"./src/App.tsx\");\n      }\n\n      return eval('require.resolve')(\"./App\");\n    }\n  }),\n  routes: [{\n    key: \"Home\",\n    path: \"/\",\n    exact: true,\n    component: Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      chunkName: function chunkName() {\n        return \"Home\";\n      },\n      isReady: function isReady(props) {\n        if (true) {\n          return !!__webpack_require__.m[this.resolve(props)];\n        }\n\n        return false;\n      },\n      requireAsync: function requireAsync() {\n        return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! ./containers/Home */ \"./src/containers/Home/index.tsx\", 7));\n      },\n      requireSync: function requireSync(props) {\n        var id = this.resolve(props);\n\n        if (true) {\n          return __webpack_require__(id);\n        }\n\n        return eval('module.require')(id);\n      },\n      resolve: function resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ./containers/Home */ \"./src/containers/Home/index.tsx\");\n        }\n\n        return eval('require.resolve')(\"./containers/Home\");\n      }\n    }),\n    loadData: __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.tsx\").default.loadData\n  }, {\n    key: \"Login\",\n    path: \"/login\",\n    exact: true,\n    component: Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      chunkName: function chunkName() {\n        return \"Login\";\n      },\n      isReady: function isReady(props) {\n        if (true) {\n          return !!__webpack_require__.m[this.resolve(props)];\n        }\n\n        return false;\n      },\n      requireAsync: function requireAsync() {\n        return __webpack_require__.e(/*! import() | Login */ \"Login\").then(__webpack_require__.t.bind(null, /*! ./containers/Login */ \"./src/containers/Login/index.tsx\", 7));\n      },\n      requireSync: function requireSync(props) {\n        var id = this.resolve(props);\n\n        if (true) {\n          return __webpack_require__(id);\n        }\n\n        return eval('module.require')(id);\n      },\n      resolve: function resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ./containers/Login */ \"./src/containers/Login/index.tsx\");\n        }\n\n        return eval('require.resolve')(\"./containers/Login\");\n      }\n    })\n  }, {\n    path: \"*\",\n    component: Object(_loadable_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      chunkName: function chunkName() {\n        return \"NotFound\";\n      },\n      isReady: function isReady(props) {\n        if (true) {\n          return !!__webpack_require__.m[this.resolve(props)];\n        }\n\n        return false;\n      },\n      requireAsync: function requireAsync() {\n        return __webpack_require__.e(/*! import() | NotFound */ \"NotFound\").then(__webpack_require__.t.bind(null, /*! ./containers/NotFound */ \"./src/containers/NotFound/index.tsx\", 7));\n      },\n      requireSync: function requireSync(props) {\n        var id = this.resolve(props);\n\n        if (true) {\n          return __webpack_require__(id);\n        }\n\n        return eval('module.require')(id);\n      },\n      resolve: function resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ./containers/NotFound */ \"./src/containers/NotFound/index.tsx\");\n        }\n\n        return eval('require.resolve')(\"./containers/NotFound\");\n      }\n    })\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/WithStyle.tsx":
/*!***************************!*\
  !*** ./src/WithStyle.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _tslib = __webpack_require__(/*! tslib */ \"./node_modules/_tslib@1.10.0@tslib/tslib.es6.js\");\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/_react@16.11.0@react/index.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nvar _default = function _default(DefaultComponent, styles, loadData) {\n  return (\n    /** @class */\n    function (_super) {\n      (0, _tslib.__extends)(WithStyle, _super);\n\n      function WithStyle(props) {\n        var _this = _super.call(this, props) || this;\n\n        if (_this.props.staticContext) {\n          _this.props.staticContext.css.push(styles._getCss());\n        }\n\n        return _this;\n      }\n\n      WithStyle.loadData = function (store) {\n        // 这个函数负责在服务器端渲染之前，把这个路由需要的数据提前加载好\n        if (loadData) {\n          return store.dispatch(loadData());\n        }\n      };\n\n      WithStyle.prototype.render = function () {\n        return _react.default.createElement(DefaultComponent, (0, _tslib.__assign)({}, this.props));\n      };\n\n      return WithStyle;\n    }(_react.Component)\n  );\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/WithStyle.tsx?");

/***/ }),

/***/ "./src/client/clientAxios.ts":
/*!***********************************!*\
  !*** ./src/client/clientAxios.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/_axios@0.19.0@axios/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar serverAxios = _axios.default.create({\n  baseURL: '/'\n});\n\nvar _default = serverAxios;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/clientAxios.ts?");

/***/ }),

/***/ "./src/client/index.tsx":
/*!******************************!*\
  !*** ./src/client/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/_react@16.11.0@react/index.js\"));\n\nvar _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ \"./node_modules/_react-dom@16.11.0@react-dom/index.js\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/_react-router-dom@5.1.2@react-router-dom/esm/react-router-dom.js\");\n\nvar _Routes = _interopRequireDefault(__webpack_require__(/*! ../Routes */ \"./src/Routes.js\"));\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.ts\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/_react-redux@7.1.1@react-redux/es/index.js\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"./node_modules/_react-router-config@5.1.1@react-router-config/esm/react-router-config.js\");\n\nvar _component = __webpack_require__(/*! @loadable/component */ \"./node_modules/_@loadable_component@5.10.3@@loadable/component/dist/loadable.esm.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App() {\n  return _react.default.createElement(_reactRedux.Provider, {\n    store: (0, _store.getClientStore)()\n  }, _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(\"div\", null, (0, _reactRouterConfig.renderRoutes)(_Routes.default))));\n}; // 开始渲染之前加载所需的组件\n\n\n(0, _component.loadableReady)().then(function () {\n  _reactDom.default.hydrate(_react.default.createElement(App, null), document.getElementById(\"root\"));\n});\n\n//# sourceURL=webpack:///./src/client/index.tsx?");

/***/ }),

/***/ "./src/containers/Home/index.tsx":
/*!***************************************!*\
  !*** ./src/containers/Home/index.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _tslib = __webpack_require__(/*! tslib */ \"./node_modules/_tslib@1.10.0@tslib/tslib.es6.js\");\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/_react@16.11.0@react/index.js\"));\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"./node_modules/_react-helmet@5.2.1@react-helmet/lib/Helmet.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/_react-redux@7.1.1@react-redux/es/index.js\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Home/store/actions.ts\");\n\nvar _WithStyle = _interopRequireDefault(__webpack_require__(/*! ../../WithStyle */ \"./src/WithStyle.tsx\"));\n\nvar _style = _interopRequireDefault(__webpack_require__(/*! ./style.css */ \"./src/containers/Home/style.css\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nvar Home =\n/** @class */\nfunction (_super) {\n  (0, _tslib.__extends)(Home, _super);\n\n  function Home() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n\n  Home.prototype.renderItem = function () {\n    return function (item) {\n      return _react.default.createElement(\"div\", {\n        key: item.id\n      }, item.title);\n    };\n  };\n\n  Home.prototype.getList = function () {\n    var list = this.props.list;\n    return list.map(this.renderItem());\n  }; // componentDidMount 这个生命周期只会在客户端渲染的时候执行 所以列表是由客户端渲染出来的\n\n\n  Home.prototype.componentDidMount = function () {\n    if (!this.props.list.length) {\n      this.props.getHomeList();\n    }\n  };\n\n  Home.prototype.render = function () {\n    return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_reactHelmet.Helmet, null, _react.default.createElement(\"title\", null, \"My Titlea\"), _react.default.createElement(\"meta\", {\n      name: \"description\",\n      content: \"Helmet\"\n    })), _react.default.createElement(\"div\", {\n      className: _style.default.test\n    }, this.getList(), _react.default.createElement(\"button\", {\n      onClick: function onClick() {\n        alert('qq');\n      }\n    }, \"click\")));\n  };\n\n  return Home;\n}(_react.PureComponent);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    name: state.home.name,\n    list: state.home.newList\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getHomeList: function getHomeList() {\n      dispatch((0, _actions.getHomeList)());\n    }\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _WithStyle.default)(Home, _style.default, _actions.getHomeList));\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/containers/Home/index.tsx?");

/***/ }),

/***/ "./src/containers/Home/store/actions.ts":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getHomeList = void 0;\n\nvar _contants = __webpack_require__(/*! ./contants */ \"./src/containers/Home/store/contants.ts\");\n\nvar changeList = function changeList(list) {\n  return {\n    type: _contants.CHANGE_LIST,\n    list: list\n  };\n};\n\nvar getHomeList = function getHomeList() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/news.json').then(function (res) {\n      var list = res.data.data;\n      dispatch(changeList(list));\n    });\n  };\n};\n\nexports.getHomeList = getHomeList;\n\n//# sourceURL=webpack:///./src/containers/Home/store/actions.ts?");

/***/ }),

/***/ "./src/containers/Home/store/contants.ts":
/*!***********************************************!*\
  !*** ./src/containers/Home/store/contants.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.CHANGE_LIST = void 0;\nvar CHANGE_LIST = 'HOME/CHANGE_LIST';\nexports.CHANGE_LIST = CHANGE_LIST;\n\n//# sourceURL=webpack:///./src/containers/Home/store/contants.ts?");

/***/ }),

/***/ "./src/containers/Home/store/index.ts":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"reducer\", {\n  enumerable: true,\n  get: function get() {\n    return _reducer.default;\n  }\n});\n\nvar _reducer = _interopRequireDefault(__webpack_require__(/*! ./reducer */ \"./src/containers/Home/store/reducer.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/containers/Home/store/index.ts?");

/***/ }),

/***/ "./src/containers/Home/store/reducer.ts":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _tslib = __webpack_require__(/*! tslib */ \"./node_modules/_tslib@1.10.0@tslib/tslib.es6.js\");\n\nvar _contants = __webpack_require__(/*! ./contants */ \"./src/containers/Home/store/contants.ts\");\n\nvar defaultState = {\n  name: \"render lee\",\n  newList: []\n};\n\nvar _default = function _default(state, action) {\n  if (state === void 0) {\n    state = defaultState;\n  }\n\n  switch (action.type) {\n    case _contants.CHANGE_LIST:\n      return (0, _tslib.__assign)((0, _tslib.__assign)({}, defaultState), {\n        newList: action.list\n      });\n\n    default:\n      return state;\n  }\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/containers/Home/store/reducer.ts?");

/***/ }),

/***/ "./src/containers/Home/style.css":
/*!***************************************!*\
  !*** ./src/containers/Home/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--6-1!../../../node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./style.css */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./src/containers/Home/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../../node_modules/_style-loader@1.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@1.0.0@style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/containers/Home/style.css?");

/***/ }),

/***/ "./src/server/serverAxios.ts":
/*!***********************************!*\
  !*** ./src/server/serverAxios.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"./node_modules/_axios@0.19.0@axios/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar serverAxios = _axios.default.create({\n  baseURL: 'http://localhost:4000'\n});\n\nvar _default = serverAxios;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/server/serverAxios.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getClientStore = exports.getStore = void 0;\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/_redux@4.0.4@redux/es/redux.js\");\n\nvar _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ \"./node_modules/_redux-thunk@2.3.0@redux-thunk/es/index.js\"));\n\nvar _store = __webpack_require__(/*! ../containers/Home/store */ \"./src/containers/Home/store/index.ts\");\n\nvar _serverAxios = _interopRequireDefault(__webpack_require__(/*! ../server/serverAxios */ \"./src/server/serverAxios.ts\"));\n\nvar _clientAxios = _interopRequireDefault(__webpack_require__(/*! ../client/clientAxios */ \"./src/client/clientAxios.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n  home: _store.reducer\n});\n\nvar getStore = function getStore() {\n  return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk.default.withExtraArgument(_serverAxios.default)));\n};\n\nexports.getStore = getStore;\n\nvar getClientStore = function getClientStore() {\n  var defaultState = window.context ? window.context.state : {};\n  return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk.default.withExtraArgument(_clientAxios.default)));\n};\n\nexports.getClientStore = getClientStore;\n\n//# sourceURL=webpack:///./src/store/index.ts?");

/***/ })

},[["./src/client/index.tsx","manifest","vendor~main"]]]);