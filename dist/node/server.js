module.exports =
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
/******/ 			var chunk = require("./" + ({"App":"App","Login":"Login","NotFound":"NotFound"}[chunkId]||chunkId) + "." + {"App":"612e78c9b2c5209c5bc2","Login":"846558a375b5643cb3c2","NotFound":"4c6b4174474b299e5941"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./src/containers/Home/style.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--6-1!./node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./src/containers/Home/style.css ***!
  \*******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  background: green;\\n}\\n.src-containers-Home-style__test--d3nG6 {\\n  margin-top: 50px;\\n  background: red;\\n}\\n\", \"\"]);\n\n// Exports\nexports.locals = {\n\t\"test\": \"src-containers-Home-style__test--d3nG6\"\n};\n\n//# sourceURL=webpack:///./src/containers/Home/style.css?./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--6-1!./node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  key: \"app\",\n  path: \"/\",\n  component: _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n    chunkName: function chunkName() {\n      return \"App\";\n    },\n    isReady: function isReady(props) {\n      if (true) {\n        return !!__webpack_require__.m[this.resolve(props)];\n      }\n\n      return false;\n    },\n    requireAsync: function requireAsync() {\n      return __webpack_require__.e(/*! import() | App */ \"App\").then(__webpack_require__.t.bind(null, /*! ./App */ \"./src/App.tsx\", 7));\n    },\n    requireSync: function requireSync(props) {\n      var id = this.resolve(props);\n\n      if (true) {\n        return __webpack_require__(id);\n      }\n\n      return eval('module.require')(id);\n    },\n    resolve: function resolve() {\n      if (true) {\n        return /*require.resolve*/(/*! ./App */ \"./src/App.tsx\");\n      }\n\n      return eval('require.resolve')(\"./App\");\n    }\n  }),\n  routes: [{\n    key: \"Home\",\n    path: \"/\",\n    exact: true,\n    component: _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n      chunkName: function chunkName() {\n        return \"Home\";\n      },\n      isReady: function isReady(props) {\n        if (true) {\n          return !!__webpack_require__.m[this.resolve(props)];\n        }\n\n        return false;\n      },\n      requireAsync: function requireAsync() {\n        return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! ./containers/Home */ \"./src/containers/Home/index.tsx\", 7));\n      },\n      requireSync: function requireSync(props) {\n        var id = this.resolve(props);\n\n        if (true) {\n          return __webpack_require__(id);\n        }\n\n        return eval('module.require')(id);\n      },\n      resolve: function resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ./containers/Home */ \"./src/containers/Home/index.tsx\");\n        }\n\n        return eval('require.resolve')(\"./containers/Home\");\n      }\n    }),\n    loadData: __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.tsx\").default.loadData\n  }, {\n    key: \"Login\",\n    path: \"/login\",\n    exact: true,\n    component: _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n      chunkName: function chunkName() {\n        return \"Login\";\n      },\n      isReady: function isReady(props) {\n        if (true) {\n          return !!__webpack_require__.m[this.resolve(props)];\n        }\n\n        return false;\n      },\n      requireAsync: function requireAsync() {\n        return __webpack_require__.e(/*! import() | Login */ \"Login\").then(__webpack_require__.t.bind(null, /*! ./containers/Login */ \"./src/containers/Login/index.tsx\", 7));\n      },\n      requireSync: function requireSync(props) {\n        var id = this.resolve(props);\n\n        if (true) {\n          return __webpack_require__(id);\n        }\n\n        return eval('module.require')(id);\n      },\n      resolve: function resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ./containers/Login */ \"./src/containers/Login/index.tsx\");\n        }\n\n        return eval('require.resolve')(\"./containers/Login\");\n      }\n    })\n  }, {\n    path: \"*\",\n    component: _loadable_component__WEBPACK_IMPORTED_MODULE_0___default()({\n      chunkName: function chunkName() {\n        return \"NotFound\";\n      },\n      isReady: function isReady(props) {\n        if (true) {\n          return !!__webpack_require__.m[this.resolve(props)];\n        }\n\n        return false;\n      },\n      requireAsync: function requireAsync() {\n        return __webpack_require__.e(/*! import() | NotFound */ \"NotFound\").then(__webpack_require__.t.bind(null, /*! ./containers/NotFound */ \"./src/containers/NotFound/index.tsx\", 7));\n      },\n      requireSync: function requireSync(props) {\n        var id = this.resolve(props);\n\n        if (true) {\n          return __webpack_require__(id);\n        }\n\n        return eval('module.require')(id);\n      },\n      resolve: function resolve() {\n        if (true) {\n          return /*require.resolve*/(/*! ./containers/NotFound */ \"./src/containers/NotFound/index.tsx\");\n        }\n\n        return eval('require.resolve')(\"./containers/NotFound\");\n      }\n    })\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/WithStyle.tsx":
/*!***************************!*\
  !*** ./src/WithStyle.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _tslib = __webpack_require__(/*! tslib */ \"tslib\");\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nvar _default = function _default(DefaultComponent, styles, loadData) {\n  return (\n    /** @class */\n    function (_super) {\n      (0, _tslib.__extends)(WithStyle, _super);\n\n      function WithStyle(props) {\n        var _this = _super.call(this, props) || this;\n\n        if (_this.props.staticContext) {\n          _this.props.staticContext.css.push(styles._getCss());\n        }\n\n        return _this;\n      }\n\n      WithStyle.loadData = function (store) {\n        // 这个函数负责在服务器端渲染之前，把这个路由需要的数据提前加载好\n        if (loadData) {\n          return store.dispatch(loadData());\n        }\n      };\n\n      WithStyle.prototype.render = function () {\n        return _react.default.createElement(DefaultComponent, (0, _tslib.__assign)({}, this.props));\n      };\n\n      return WithStyle;\n    }(_react.Component)\n  );\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/WithStyle.tsx?");

/***/ }),

/***/ "./src/client/clientAxios.ts":
/*!***********************************!*\
  !*** ./src/client/clientAxios.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar serverAxios = _axios.default.create({\n  baseURL: '/'\n});\n\nvar _default = serverAxios;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/clientAxios.ts?");

/***/ }),

/***/ "./src/containers/Home/index.tsx":
/*!***************************************!*\
  !*** ./src/containers/Home/index.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _tslib = __webpack_require__(/*! tslib */ \"tslib\");\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Home/store/actions.ts\");\n\nvar _WithStyle = _interopRequireDefault(__webpack_require__(/*! ../../WithStyle */ \"./src/WithStyle.tsx\"));\n\nvar _style = _interopRequireDefault(__webpack_require__(/*! ./style.css */ \"./src/containers/Home/style.css\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nvar Home =\n/** @class */\nfunction (_super) {\n  (0, _tslib.__extends)(Home, _super);\n\n  function Home() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n\n  Home.prototype.renderItem = function () {\n    return function (item) {\n      return _react.default.createElement(\"div\", {\n        key: item.id\n      }, item.title);\n    };\n  };\n\n  Home.prototype.getList = function () {\n    var list = this.props.list;\n    return list.map(this.renderItem());\n  }; // componentDidMount 这个生命周期只会在客户端渲染的时候执行 所以列表是由客户端渲染出来的\n\n\n  Home.prototype.componentDidMount = function () {\n    if (!this.props.list.length) {\n      this.props.getHomeList();\n    }\n  };\n\n  Home.prototype.render = function () {\n    return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_reactHelmet.Helmet, null, _react.default.createElement(\"title\", null, \"My Titlea\"), _react.default.createElement(\"meta\", {\n      name: \"description\",\n      content: \"Helmet\"\n    })), _react.default.createElement(\"div\", {\n      className: _style.default.test\n    }, this.getList(), _react.default.createElement(\"button\", {\n      onClick: function onClick() {\n        alert('qq');\n      }\n    }, \"click\")));\n  };\n\n  return Home;\n}(_react.PureComponent);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    name: state.home.name,\n    list: state.home.newList\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getHomeList: function getHomeList() {\n      dispatch((0, _actions.getHomeList)());\n    }\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _WithStyle.default)(Home, _style.default, _actions.getHomeList));\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/containers/Home/index.tsx?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _tslib = __webpack_require__(/*! tslib */ \"tslib\");\n\nvar _contants = __webpack_require__(/*! ./contants */ \"./src/containers/Home/store/contants.ts\");\n\nvar defaultState = {\n  name: \"render lee\",\n  newList: []\n};\n\nvar _default = function _default(state, action) {\n  if (state === void 0) {\n    state = defaultState;\n  }\n\n  switch (action.type) {\n    case _contants.CHANGE_LIST:\n      return (0, _tslib.__assign)((0, _tslib.__assign)({}, defaultState), {\n        newList: action.list\n      });\n\n    default:\n      return state;\n  }\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/containers/Home/store/reducer.ts?");

/***/ }),

/***/ "./src/containers/Home/style.css":
/*!***************************************!*\
  !*** ./src/containers/Home/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--6-1!../../../node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./style.css */ \"./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js!./src/containers/Home/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Home/style.css?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _expressHttpProxy = _interopRequireDefault(__webpack_require__(/*! express-http-proxy */ \"express-http-proxy\"));\n\nvar _browserSync = _interopRequireDefault(__webpack_require__(/*! browser-sync */ \"browser-sync\"));\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _utils = __webpack_require__(/*! ./utils */ \"./src/server/utils.tsx\");\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.ts\");\n\nvar _Routes = _interopRequireDefault(__webpack_require__(/*! ../Routes */ \"./src/Routes.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar bs = _browserSync.default.create();\n\nvar app = (0, _express.default)();\napp.use(_express.default.static(_path.default.resolve(process.cwd(), 'dist')));\napp.use('/api', (0, _expressHttpProxy.default)('http://localhost:4000', {\n  proxyReqPathResolver: function proxyReqPathResolver(req) {\n    return '/api' + req.url;\n  }\n}));\napp.get(\"*\", function (req, res) {\n  var store = (0, _store.getStore)();\n  var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Routes.default, req.path);\n  var promises = [];\n  matchedRoutes.forEach(function (item) {\n    if (item.route.loadData) {\n      var promise = new Promise(function (resolve, reject) {\n        item.route.loadData(store).then(resolve).catch(resolve);\n      });\n      promises.push(promise);\n    }\n  });\n  Promise.all(promises).then(function () {\n    var context = {\n      css: []\n    };\n    var html = (0, _utils.render)(store, _Routes.default, req, context);\n\n    if (context.NotFound) {\n      res.status(404);\n      res.send(html);\n    } else {\n      res.send(html);\n    }\n  });\n});\napp.listen(3000, function () {\n  bs.init({\n    open: true,\n    ui: false,\n    notify: true,\n    files: ['./**'],\n    port: 3000\n  });\n  console.log('server qstart at http://localhost:3000');\n});\n\n//# sourceURL=webpack:///./src/server/index.ts?");

/***/ }),

/***/ "./src/server/serverAxios.ts":
/*!***********************************!*\
  !*** ./src/server/serverAxios.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar serverAxios = _axios.default.create({\n  baseURL: 'http://localhost:4000'\n});\n\nvar _default = serverAxios;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/server/serverAxios.ts?");

/***/ }),

/***/ "./src/server/utils.tsx":
/*!******************************!*\
  !*** ./src/server/utils.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _server2 = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = function render(store, routes, req, context) {\n  var statsFile = (0, _path.resolve)(\"./dist/web/client-manifest.json\");\n  var extractor = new _server2.ChunkExtractor({\n    statsFile: statsFile\n  });\n  var content = (0, _server.renderToString)(extractor.collectChunks(_react.default.createElement(_reactRedux.Provider, {\n    store: store\n  }, _react.default.createElement(_reactRouterDom.StaticRouter, {\n    location: req.path,\n    context: context\n  }, _react.default.createElement(\"div\", null, (0, _reactRouterConfig.renderRoutes)(routes))))));\n\n  var helmet = _reactHelmet.Helmet.renderStatic();\n\n  var cssStr = context.css.length ? context.css.join('\\n') : \"\";\n  return \"\\n      <html>\\n        <head>\\n          \" + helmet.title.toString() + \"\\n          \" + helmet.meta.toString() + \"\\n          <style>\" + cssStr + \"</style>\\n        </head> \\n        <body>\\n          <div id=\\\"root\\\">\" + content + \"</div>\\n          <script>\\n            window.context = {\\n              state: \" + JSON.stringify(store.getState()) + \"\\n            }\\n          </script>\\n\" + extractor.getScriptTags() + \"\\n        </body>\\n      </html>\\n    \";\n};\n\nexports.render = render;\n\n//# sourceURL=webpack:///./src/server/utils.tsx?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getClientStore = exports.getStore = void 0;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\n\nvar _store = __webpack_require__(/*! ../containers/Home/store */ \"./src/containers/Home/store/index.ts\");\n\nvar _serverAxios = _interopRequireDefault(__webpack_require__(/*! ../server/serverAxios */ \"./src/server/serverAxios.ts\"));\n\nvar _clientAxios = _interopRequireDefault(__webpack_require__(/*! ../client/clientAxios */ \"./src/client/clientAxios.ts\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n  home: _store.reducer\n});\n\nvar getStore = function getStore() {\n  return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk.default.withExtraArgument(_serverAxios.default)));\n};\n\nexports.getStore = getStore;\n\nvar getClientStore = function getClientStore() {\n  var defaultState = window.context ? window.context.state : {};\n  return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk.default.withExtraArgument(_clientAxios.default)));\n};\n\nexports.getClientStore = getClientStore;\n\n//# sourceURL=webpack:///./src/store/index.ts?");

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

/***/ "browser-sync":
/*!*******************************!*\
  !*** external "browser-sync" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"browser-sync\");\n\n//# sourceURL=webpack:///external_%22browser-sync%22?");

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

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

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

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tslib\");\n\n//# sourceURL=webpack:///external_%22tslib%22?");

/***/ })

/******/ });