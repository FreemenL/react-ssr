/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  key: \"app\",\n  path: \"/\",\n  component: _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n    chunkName: function chunkName() {\n      return \"App\";\n    },\n    isReady: function isReady(props) {\n      if (true) {\n        return !!__webpack_require__.m[this.resolve(props)];\n      }\n\n      return false;\n    },\n    requireAsync: function requireAsync() {\n      return __webpack_require__.e(/*! import() | App */ \"App\").then(__webpack_require__.bind(null, /*! ./App */ \"./src/App.js\"));\n    },\n    requireSync: function requireSync(props) {\n      var id = this.resolve(props);\n\n      if (true) {\n        return __webpack_require__(id);\n      }\n\n      return eval('module.require')(id);\n    },\n    resolve: function resolve() {\n      if (true) {\n        return /*require.resolve*/(/*! ./App */ \"./src/App.js\");\n      }\n\n      return eval('require.resolve')(\"./App\");\n    }\n  }),\n  routes: [{\n    key: \"Home\",\n    path: \"/\",\n    exact: true,\n    component: _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n      chunkName: function chunkName() {\n        return \"containers-Home\";\n      },\n      isReady: function isReady(props) {\n        if (true) {\n          return !!__webpack_require__.m[this.resolve(props)];\n        }\n\n        return false;\n      },\n      requireAsync: function requireAsync() {\n        return __webpack_require__.e(/*! import() | containers-Home */ \"containers-Home\").then(__webpack_require__.bind(null, /*! ./containers/Home */ \"./src/containers/Home/index.js\"));\n      },\n      requireSync: function requireSync(props) {\n        var id = this.resolve(props);\n\n        if (true) {\n          return __webpack_require__(id);\n        }\n\n        return eval('module.require')(id);\n      },\n      resolve: function resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n        }\n\n        return eval('require.resolve')(\"./containers/Home\");\n      }\n    }),\n    loadData: _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n      chunkName: function chunkName() {\n        return \"containers-Home\";\n      },\n      isReady: function isReady(props) {\n        if (true) {\n          return !!__webpack_require__.m[this.resolve(props)];\n        }\n\n        return false;\n      },\n      requireAsync: function requireAsync() {\n        return __webpack_require__.e(/*! import() | containers-Home */ \"containers-Home\").then(__webpack_require__.bind(null, /*! ./containers/Home */ \"./src/containers/Home/index.js\"));\n      },\n      requireSync: function requireSync(props) {\n        var id = this.resolve(props);\n\n        if (true) {\n          return __webpack_require__(id);\n        }\n\n        return eval('module.require')(id);\n      },\n      resolve: function resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n        }\n\n        return eval('require.resolve')(\"./containers/Home\");\n      }\n    }).loadData\n  }, {\n    key: \"Login\",\n    path: \"/login\",\n    exact: true,\n    component: _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n      chunkName: function chunkName() {\n        return \"containers-Login\";\n      },\n      isReady: function isReady(props) {\n        if (true) {\n          return !!__webpack_require__.m[this.resolve(props)];\n        }\n\n        return false;\n      },\n      requireAsync: function requireAsync() {\n        return __webpack_require__.e(/*! import() | containers-Login */ \"containers-Login\").then(__webpack_require__.bind(null, /*! ./containers/Login */ \"./src/containers/Login/index.js\"));\n      },\n      requireSync: function requireSync(props) {\n        var id = this.resolve(props);\n\n        if (true) {\n          return __webpack_require__(id);\n        }\n\n        return eval('module.require')(id);\n      },\n      resolve: function resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ./containers/Login */ \"./src/containers/Login/index.js\");\n        }\n\n        return eval('require.resolve')(\"./containers/Login\");\n      }\n    })\n  }, {\n    path: \"*\",\n    component: _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n      chunkName: function chunkName() {\n        return \"containers-NotFound\";\n      },\n      isReady: function isReady(props) {\n        if (true) {\n          return !!__webpack_require__.m[this.resolve(props)];\n        }\n\n        return false;\n      },\n      requireAsync: function requireAsync() {\n        return __webpack_require__.e(/*! import() | containers-NotFound */ \"containers-NotFound\").then(__webpack_require__.bind(null, /*! ./containers/NotFound */ \"./src/containers/NotFound/index.js\"));\n      },\n      requireSync: function requireSync(props) {\n        var id = this.resolve(props);\n\n        if (true) {\n          return __webpack_require__(id);\n        }\n\n        return eval('module.require')(id);\n      },\n      resolve: function resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ./containers/NotFound */ \"./src/containers/NotFound/index.js\");\n        }\n\n        return eval('require.resolve')(\"./containers/NotFound\");\n      }\n    })\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/client/serverAxios.js":
/*!***********************************!*\
  !*** ./src/client/serverAxios.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar serverAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: '/'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (serverAxios);\n\n//# sourceURL=webpack:///./src/client/serverAxios.js?");

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

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n/* harmony import */ var express_http_proxy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_http_proxy__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public'));\napp.use('/api', express_http_proxy__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:4000', {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    return '/api' + req.url;\n  }\n}));\napp.get(\"*\", function (req, res) {\n  var store = Object(_store__WEBPACK_IMPORTED_MODULE_3__[\"getStore\"])();\n  var matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_5__[\"matchRoutes\"])(_Routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], req.path);\n  var promises = [];\n  matchedRoutes.forEach(function (item) {\n    if (item.route.loadData) {\n      var promise = new Promise(function (resolve, reject) {\n        item.route.loadData(store).then(resolve).catch(resolve);\n      });\n      promises.push(promise);\n    }\n  });\n  Promise.all(promises).then(function () {\n    var context = {};\n    var html = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(store, _Routes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], req, context);\n\n    if (context.NotFound) {\n      res.status(404);\n      res.send(html);\n    } else {\n      res.send(html);\n    }\n  });\n});\napp.listen(3000, function () {\n  console.log('server qstart at http://localhost:3000');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/serverAxios.js":
/*!***********************************!*\
  !*** ./src/server/serverAxios.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar serverAxios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: 'http://localhost:4000'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (serverAxios);\n\n//# sourceURL=webpack:///./src/server/serverAxios.js?");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar render = function render(store, routes, req, context) {\n  var statsFile = Object(path__WEBPACK_IMPORTED_MODULE_6__[\"resolve\"])(\"./public/client-manifest.json\");\n  var extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_5__[\"ChunkExtractor\"]({\n    statsFile: statsFile\n  });\n  var linkTags = extractor.getLinkTags();\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(extractor.collectChunks(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"StaticRouter\"], {\n    location: req.path,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(routes))))));\n  return \"\\n      <html>\\n        <head>\\n          <title>react ssr</title>\\n        </head> \\n        <body>\\n          <div id=\\\"root\\\">\".concat(content, \"</div>\\n          <script>\\n            window.context = {\\n              state: \").concat(JSON.stringify(store.getState()), \"\\n            }\\n          </script>\\n\").concat(extractor.getScriptTags(), \"\\n        </body>\\n      </html>\\n    \");\n};\n\n//# sourceURL=webpack:///./src/server/utils.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: getStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStore\", function() { return getStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _containers_Home_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Home/store */ \"./src/containers/Home/store/index.js\");\n/* harmony import */ var _server_serverAxios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server/serverAxios */ \"./src/server/serverAxios.js\");\n/* harmony import */ var _client_serverAxios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/serverAxios */ \"./src/client/serverAxios.js\");\n\n\n\n\n\nvar reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  home: _containers_Home_store__WEBPACK_IMPORTED_MODULE_2__[\"reducer\"]\n});\nvar getStore = function getStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(_server_serverAxios__WEBPACK_IMPORTED_MODULE_3__[\"default\"])));\n};\nvar getClientStore = function getClientStore() {\n  var defaultState = window.context ? window.context.state : {};\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(_client_serverAxios__WEBPACK_IMPORTED_MODULE_4__[\"default\"])));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/component\");\n\n//# sourceURL=webpack:///external_%22@loadable/component%22?");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/server\");\n\n//# sourceURL=webpack:///external_%22@loadable/server%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });