(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0147":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ":root{--heading-line-height:1.2;--body-line-height:1.4;--measure:60ch;--spacing-ratio:1.61803398875;--s-base:1rem;--s0:0;--s1:calc(var(--s-base)*0.25);--s2:calc(var(--s-base)*0.5);--s3:calc(var(--s-base)*0.75);--s4:var(--s-base);--s5:calc(var(--s4)*var(--spacing-ratio));--s6:calc(var(--s5)*var(--spacing-ratio));--s7:calc(var(--s6)*var(--spacing-ratio));--s8:calc(var(--s7)*var(--spacing-ratio));--s9:calc(var(--s8)*var(--spacing-ratio));-webkit-box-sizing:border-box;box-sizing:border-box}", ""]);

// exports


/***/ }),

/***/ "01f5":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "0f9c":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".heading[data-v-0b98e844]{max-width:60ch;margin:0;line-height:var(--heading-line-height)}.heading[data-v-0b98e844]:before{display:var(--heading-clamp);width:0;height:0;margin-top:calc((.8 - var(--heading-line-height))*0.5em);content:\"\"}", ""]);

// exports


/***/ }),

/***/ "1114":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "2179":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".center[data-v-5759451f]{-webkit-box-sizing:content-box;box-sizing:content-box;max-width:var(--measure);margin-right:auto;margin-left:auto}", ""]);

// exports


/***/ }),

/***/ "21f0":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "24ae":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "26b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Center_vue_vue_type_style_index_0_id_5759451f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8245");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Center_vue_vue_type_style_index_0_id_5759451f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Center_vue_vue_type_style_index_0_id_5759451f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Center_vue_vue_type_style_index_0_id_5759451f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2915":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VStack_vue_vue_type_style_index_0_id_a6fe6d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ea75");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VStack_vue_vue_type_style_index_0_id_a6fe6d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VStack_vue_vue_type_style_index_0_id_a6fe6d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_VStack_vue_vue_type_style_index_0_id_a6fe6d9e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2ab7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("876d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2c79":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Inline_vue_vue_type_style_index_0_id_54fe231c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f39f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Inline_vue_vue_type_style_index_0_id_54fe231c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Inline_vue_vue_type_style_index_0_id_54fe231c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Inline_vue_vue_type_style_index_0_id_54fe231c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "30ab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Box_vue_vue_type_style_index_0_id_ebc4c05e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bb10");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Box_vue_vue_type_style_index_0_id_ebc4c05e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Box_vue_vue_type_style_index_0_id_ebc4c05e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Box_vue_vue_type_style_index_0_id_ebc4c05e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "35f8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0f9c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("ed2e51a2", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "395b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame_vue_vue_type_style_index_0_id_7b53f186_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bdd4");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame_vue_vue_type_style_index_0_id_7b53f186_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame_vue_vue_type_style_index_0_id_7b53f186_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Frame_vue_vue_type_style_index_0_id_7b53f186_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3ac2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_style_index_0_id_0b98e844_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("35f8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_style_index_0_id_0b98e844_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_style_index_0_id_0b98e844_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Heading_vue_vue_type_style_index_0_id_0b98e844_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4837":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseText_vue_vue_type_style_index_0_id_75b5fd8b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f11a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseText_vue_vue_type_style_index_0_id_75b5fd8b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseText_vue_vue_type_style_index_0_id_75b5fd8b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseText_vue_vue_type_style_index_0_id_75b5fd8b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4863":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".box[data-v-ebc4c05e]{padding:var(--box-pad);--color-light:#fff;--color-dark:#000}.box *[data-v-ebc4c05e]{color:inherit}", ""]);

// exports


/***/ }),

/***/ "4975":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "4c26":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".v-stack[data-v-a6fe6d9e]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:var(--v-stack-padY) var(--v-stack-padX)}.v-stack>*[data-v-a6fe6d9e]{margin-top:0;margin-bottom:0}.v-stack>*+*[data-v-a6fe6d9e]{margin-top:var(--v-stack-gap)}", ""]);

// exports


/***/ }),

/***/ "4e9a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HStack_vue_vue_type_style_index_0_id_4968875a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("53b8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HStack_vue_vue_type_style_index_0_id_4968875a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HStack_vue_vue_type_style_index_0_id_4968875a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HStack_vue_vue_type_style_index_0_id_4968875a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "52f4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9d57");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("939068cc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "53b8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("bc5c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("db6b1efe", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "57a1":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "57cd":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "5939":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "5ada":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "69b9":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".text[data-v-75b5fd8b]{max-width:var(--measure);margin:0;line-height:var(--body-line-height)}", ""]);

// exports


/***/ }),

/***/ "6e87":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_style_index_0_id_5f48b3e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9054");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_style_index_0_id_5f48b3e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_style_index_0_id_5f48b3e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_style_index_0_id_5f48b3e2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7040":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "7390":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "73ca":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "7786":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "8245":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2179");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("96b27714", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "86ff":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "876d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0147");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("7bdfd994", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "8eed":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "9054":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("faf9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3e9213fc", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "9675":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "99a9":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "9b11":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "9d57":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".cover[data-v-4af0cede]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:var(--cover-height);padding:0}.cover>*[data-v-4af0cede]{margin-top:var(--cover-gap);margin-bottom:var(--cover-gap)}.cover[data-v-4af0cede]>:first-child:not(.centered){margin-top:0}.cover[data-v-4af0cede]>:last-child:not(.centered){margin-bottom:0}.cover>.centered[data-v-4af0cede]{margin-top:auto;margin-bottom:auto}", ""]);

// exports


/***/ }),

/***/ "a3cf":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "bb10":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4863");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3b9784c2", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "bc5c":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".h-stack[data-v-4968875a]{padding:var(--h-stack-padY) var(--h-stack-padX)}.h-stack>*[data-v-4968875a]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:calc(var(--h-stack-gap)/2*-1)}.h-stack>*>*[data-v-4968875a]{-ms-flex-preferred-size:calc((var(--measure) - 100% - var(--h-stack-gap))*999);flex-basis:calc((var(--measure) - 100% - var(--h-stack-gap))*999);-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin:calc(var(--h-stack-gap)/2)}.h-stack>*[data-v-4968875a]>:nth-last-child(n+5),.h-stack>*>:nth-last-child(n+5)~*[data-v-4968875a]{-ms-flex-preferred-size:100%;flex-basis:100%}", ""]);

// exports


/***/ }),

/***/ "bdd4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d66e");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("6720e468", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "d531":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "d59f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Cover_vue_vue_type_style_index_0_id_4af0cede_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("52f4");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Cover_vue_vue_type_style_index_0_id_4af0cede_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Cover_vue_vue_type_style_index_0_id_4af0cede_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_build_utils_global_vue_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Cover_vue_vue_type_style_index_0_id_4af0cede_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d66e":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".frame[data-v-7b53f186]{position:relative;padding-bottom:var(--frame-pad)}.frame>*[data-v-7b53f186]{position:absolute;top:0;right:0;bottom:0;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden}.frame>img[data-v-7b53f186],.frame>video[data-v-7b53f186]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}", ""]);

// exports


/***/ }),

/***/ "dc32":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".inline[data-v-54fe231c]{padding-top:var(--inline-pad);overflow:hidden}.inline[data-v-54fe231c]:not(:last-child){padding-bottom:var(--inline-pad)}.inline>*[data-v-54fe231c]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:var(--inline-align);-ms-flex-align:var(--inline-align);align-items:var(--inline-align);-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin:calc(var(--inline-gap)/2*-1)}.inline>*>*[data-v-54fe231c]{margin:calc(var(--inline-gap)/2)}", ""]);

// exports


/***/ }),

/***/ "e4c8":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "ea75":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4c26");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("79e64b2a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f11a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("69b9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("22f71a2a", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f39f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("dc32");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("6fbefd87", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "f69f":
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "faf9":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".grid[data-v-5f48b3e2]{display:grid;grid-gap:var(--grid-gap);padding:var(--grid-padY) var(--grid-padX)}", ""]);

// exports


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/BaseText/BaseText.vue?vue&type=script&lang=js&
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('BaseText', component.exports);
}

/* harmony default export */ var BaseTextvue_type_script_lang_js_ = ({
  props: {
    as: {
      type: String,
      default: 'p'
    }
  },
  render: function render(createElement) {
    return createElement(this.as, // tag name
    {
      class: 'text'
    }, this.$slots.default // array of children
    );
  }
});
// CONCATENATED MODULE: ./src/BaseText/BaseText.vue?vue&type=script&lang=js&
 /* harmony default export */ var BaseText_BaseTextvue_type_script_lang_js_ = (BaseTextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/BaseText/BaseText.vue?vue&type=style&index=0&id=75b5fd8b&scoped=true&lang=css&
var BaseTextvue_type_style_index_0_id_75b5fd8b_scoped_true_lang_css_ = __webpack_require__("4837");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// EXTERNAL MODULE: ./src/BaseText/BaseText.vue?vue&type=custom&index=0&blockType=meta
var BaseTextvue_type_custom_index_0_blockType_meta = __webpack_require__("57a1");
var BaseTextvue_type_custom_index_0_blockType_meta_default = /*#__PURE__*/__webpack_require__.n(BaseTextvue_type_custom_index_0_blockType_meta);

// EXTERNAL MODULE: ./src/BaseText/BaseText.vue?vue&type=custom&index=1&blockType=example
var BaseTextvue_type_custom_index_1_blockType_example = __webpack_require__("d531");
var BaseTextvue_type_custom_index_1_blockType_example_default = /*#__PURE__*/__webpack_require__.n(BaseTextvue_type_custom_index_1_blockType_example);

// CONCATENATED MODULE: ./src/BaseText/BaseText.vue
var render, staticRenderFns





/* normalize component */

var BaseText_component = normalizeComponent(
  BaseText_BaseTextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "75b5fd8b",
  null
  
)

/* custom blocks */

if (typeof BaseTextvue_type_custom_index_0_blockType_meta_default.a === 'function') BaseTextvue_type_custom_index_0_blockType_meta_default()(BaseText_component)

if (typeof BaseTextvue_type_custom_index_1_blockType_example_default.a === 'function') BaseTextvue_type_custom_index_1_blockType_example_default()(BaseText_component)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('BaseText', BaseText_component.exports)
}
/* harmony default export */ var BaseText = (BaseText_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Box/Box.vue?vue&type=script&lang=js&
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Box', component.exports);
}

/* harmony default export */ var Boxvue_type_script_lang_js_ = ({
  props: {
    pad: {
      type: String,
      default: null
    },
    padX: {
      type: [String, Array],
      default: '0'
    },
    padY: {
      type: [String, Array],
      default: '0'
    },
    as: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    padding: function padding() {
      if (this.pad) {
        return "var(--s".concat(this.pad, ")");
      } else {
        return "var(--s".concat(this.padY, ") var(--s").concat(this.padX, ")");
      }
    }
  },
  render: function render(createElement) {
    return createElement(this.as, // tag name
    {
      class: 'box',
      style: "--box-pad: ".concat(this.padding, ";")
    }, this.$slots.default // array of children
    );
  }
});
// CONCATENATED MODULE: ./src/Box/Box.vue?vue&type=script&lang=js&
 /* harmony default export */ var Box_Boxvue_type_script_lang_js_ = (Boxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Box/Box.vue?vue&type=style&index=0&id=ebc4c05e&scoped=true&lang=css&
var Boxvue_type_style_index_0_id_ebc4c05e_scoped_true_lang_css_ = __webpack_require__("30ab");

// EXTERNAL MODULE: ./src/Box/Box.vue?vue&type=custom&index=0&blockType=meta
var Boxvue_type_custom_index_0_blockType_meta = __webpack_require__("7786");
var Boxvue_type_custom_index_0_blockType_meta_default = /*#__PURE__*/__webpack_require__.n(Boxvue_type_custom_index_0_blockType_meta);

// EXTERNAL MODULE: ./src/Box/Box.vue?vue&type=custom&index=1&blockType=example
var Boxvue_type_custom_index_1_blockType_example = __webpack_require__("8eed");
var Boxvue_type_custom_index_1_blockType_example_default = /*#__PURE__*/__webpack_require__.n(Boxvue_type_custom_index_1_blockType_example);

// CONCATENATED MODULE: ./src/Box/Box.vue
var Box_render, Box_staticRenderFns





/* normalize component */

var Box_component = normalizeComponent(
  Box_Boxvue_type_script_lang_js_,
  Box_render,
  Box_staticRenderFns,
  false,
  null,
  "ebc4c05e",
  null
  
)

/* custom blocks */

if (typeof Boxvue_type_custom_index_0_blockType_meta_default.a === 'function') Boxvue_type_custom_index_0_blockType_meta_default()(Box_component)

if (typeof Boxvue_type_custom_index_1_blockType_example_default.a === 'function') Boxvue_type_custom_index_1_blockType_example_default()(Box_component)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Box', Box_component.exports)
}
/* harmony default export */ var Box = (Box_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Center/Center.vue?vue&type=script&lang=js&
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Center', component.exports);
}

/* harmony default export */ var Centervue_type_script_lang_js_ = ({
  props: {
    as: {
      type: String,
      default: 'div'
    }
  },
  render: function render(createElement) {
    return createElement(this.as, // tag name
    {
      class: 'center'
    }, this.$slots.default // array of children
    );
  }
});
// CONCATENATED MODULE: ./src/Center/Center.vue?vue&type=script&lang=js&
 /* harmony default export */ var Center_Centervue_type_script_lang_js_ = (Centervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Center/Center.vue?vue&type=style&index=0&id=5759451f&scoped=true&lang=css&
var Centervue_type_style_index_0_id_5759451f_scoped_true_lang_css_ = __webpack_require__("26b6");

// EXTERNAL MODULE: ./src/Center/Center.vue?vue&type=custom&index=0&blockType=meta
var Centervue_type_custom_index_0_blockType_meta = __webpack_require__("e4c8");
var Centervue_type_custom_index_0_blockType_meta_default = /*#__PURE__*/__webpack_require__.n(Centervue_type_custom_index_0_blockType_meta);

// EXTERNAL MODULE: ./src/Center/Center.vue?vue&type=custom&index=1&blockType=example
var Centervue_type_custom_index_1_blockType_example = __webpack_require__("a3cf");
var Centervue_type_custom_index_1_blockType_example_default = /*#__PURE__*/__webpack_require__.n(Centervue_type_custom_index_1_blockType_example);

// CONCATENATED MODULE: ./src/Center/Center.vue
var Center_render, Center_staticRenderFns





/* normalize component */

var Center_component = normalizeComponent(
  Center_Centervue_type_script_lang_js_,
  Center_render,
  Center_staticRenderFns,
  false,
  null,
  "5759451f",
  null
  
)

/* custom blocks */

if (typeof Centervue_type_custom_index_0_blockType_meta_default.a === 'function') Centervue_type_custom_index_0_blockType_meta_default()(Center_component)

if (typeof Centervue_type_custom_index_1_blockType_example_default.a === 'function') Centervue_type_custom_index_1_blockType_example_default()(Center_component)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Center', Center_component.exports)
}
/* harmony default export */ var Center = (Center_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"37c3599e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Cover/Cover.vue?vue&type=template&id=4af0cede&scoped=true&
var Covervue_type_template_id_4af0cede_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cover",style:(("--cover-gap: var(--s" + _vm.gap + "); --cover-height: " + _vm.height + ";"))},[_vm._t("header"),_c('div',{staticClass:"centered"},[_vm._t("default")],2),_vm._t("footer")],2)}
var Covervue_type_template_id_4af0cede_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/Cover/Cover.vue?vue&type=template&id=4af0cede&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Cover/Cover.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Cover', component.exports);
}

/* harmony default export */ var Covervue_type_script_lang_js_ = ({
  props: {
    gap: {
      type: String,
      default: '0'
    },
    height: {
      type: String,
      default: '100vh'
    }
  }
});
// CONCATENATED MODULE: ./src/Cover/Cover.vue?vue&type=script&lang=js&
 /* harmony default export */ var Cover_Covervue_type_script_lang_js_ = (Covervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Cover/Cover.vue?vue&type=style&index=0&id=4af0cede&scoped=true&lang=css&
var Covervue_type_style_index_0_id_4af0cede_scoped_true_lang_css_ = __webpack_require__("d59f");

// EXTERNAL MODULE: ./src/Cover/Cover.vue?vue&type=custom&index=0&blockType=meta
var Covervue_type_custom_index_0_blockType_meta = __webpack_require__("4975");
var Covervue_type_custom_index_0_blockType_meta_default = /*#__PURE__*/__webpack_require__.n(Covervue_type_custom_index_0_blockType_meta);

// EXTERNAL MODULE: ./src/Cover/Cover.vue?vue&type=custom&index=1&blockType=example
var Covervue_type_custom_index_1_blockType_example = __webpack_require__("73ca");
var Covervue_type_custom_index_1_blockType_example_default = /*#__PURE__*/__webpack_require__.n(Covervue_type_custom_index_1_blockType_example);

// CONCATENATED MODULE: ./src/Cover/Cover.vue






/* normalize component */

var Cover_component = normalizeComponent(
  Cover_Covervue_type_script_lang_js_,
  Covervue_type_template_id_4af0cede_scoped_true_render,
  Covervue_type_template_id_4af0cede_scoped_true_staticRenderFns,
  false,
  null,
  "4af0cede",
  null
  
)

/* custom blocks */

if (typeof Covervue_type_custom_index_0_blockType_meta_default.a === 'function') Covervue_type_custom_index_0_blockType_meta_default()(Cover_component)

if (typeof Covervue_type_custom_index_1_blockType_example_default.a === 'function') Covervue_type_custom_index_1_blockType_example_default()(Cover_component)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Cover', Cover_component.exports)
}
/* harmony default export */ var Cover = (Cover_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Frame/Frame.vue?vue&type=script&lang=js&
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Frame', component.exports);
}

/* harmony default export */ var Framevue_type_script_lang_js_ = ({
  props: {
    ratio: {
      type: String,
      default: '16:9'
    },
    as: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    padding: function padding() {
      var _this$ratio$split = this.ratio.split(':'),
          _this$ratio$split2 = _slicedToArray(_this$ratio$split, 2),
          d = _this$ratio$split2[0],
          n = _this$ratio$split2[1];

      if (n && d) {
        return "calc(".concat(n, " / ").concat(d, " * 100%);");
      } else {
        return 'calc(9 / 16 * 100%);';
      }
    }
  },
  render: function render(createElement) {
    return createElement(this.as, // tag name
    {
      class: 'frame',
      style: "--frame-pad: ".concat(this.padding, ";")
    }, this.$slots.default // array of children
    );
  }
});
// CONCATENATED MODULE: ./src/Frame/Frame.vue?vue&type=script&lang=js&
 /* harmony default export */ var Frame_Framevue_type_script_lang_js_ = (Framevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Frame/Frame.vue?vue&type=style&index=0&id=7b53f186&scoped=true&lang=css&
var Framevue_type_style_index_0_id_7b53f186_scoped_true_lang_css_ = __webpack_require__("395b");

// EXTERNAL MODULE: ./src/Frame/Frame.vue?vue&type=custom&index=0&blockType=meta
var Framevue_type_custom_index_0_blockType_meta = __webpack_require__("9675");
var Framevue_type_custom_index_0_blockType_meta_default = /*#__PURE__*/__webpack_require__.n(Framevue_type_custom_index_0_blockType_meta);

// EXTERNAL MODULE: ./src/Frame/Frame.vue?vue&type=custom&index=1&blockType=example
var Framevue_type_custom_index_1_blockType_example = __webpack_require__("99a9");
var Framevue_type_custom_index_1_blockType_example_default = /*#__PURE__*/__webpack_require__.n(Framevue_type_custom_index_1_blockType_example);

// CONCATENATED MODULE: ./src/Frame/Frame.vue
var Frame_render, Frame_staticRenderFns





/* normalize component */

var Frame_component = normalizeComponent(
  Frame_Framevue_type_script_lang_js_,
  Frame_render,
  Frame_staticRenderFns,
  false,
  null,
  "7b53f186",
  null
  
)

/* custom blocks */

if (typeof Framevue_type_custom_index_0_blockType_meta_default.a === 'function') Framevue_type_custom_index_0_blockType_meta_default()(Frame_component)

if (typeof Framevue_type_custom_index_1_blockType_example_default.a === 'function') Framevue_type_custom_index_1_blockType_example_default()(Frame_component)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Frame', Frame_component.exports)
}
/* harmony default export */ var Frame = (Frame_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"37c3599e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Grid/Grid.vue?vue&type=template&id=5f48b3e2&scoped=true&
var Gridvue_type_template_id_5f48b3e2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid",style:(("--grid-gap: var(--s" + _vm.gap + "); --grid-padY: var(--s" + _vm.padY + "); --grid-padX: var(--s" + _vm.padX + "); grid-template-columns: " + _vm.gridTemplateColumns + ";"))},[_vm._t("default")],2)}
var Gridvue_type_template_id_5f48b3e2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/Grid/Grid.vue?vue&type=template&id=5f48b3e2&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Grid/Grid.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Grid', component.exports);
}

/* harmony default export */ var Gridvue_type_script_lang_js_ = ({
  props: {
    gap: {
      type: String,
      default: '0'
    },
    width: {
      type: String
    },
    columns: {
      type: String
    },
    padX: {
      type: [String, Array],
      default: '0'
    },
    padY: {
      type: [String, Array],
      default: '0'
    }
  },
  // methods: {
  // 	widthToColumns(width) {
  // 		return Array.isArray(width)
  // 			? width.map(this.widthToColumns)
  // 			: !!width && `repeat(auto-fit, minmax(${this.width}, 1fr))`;
  // 	},
  // 	countToColumns(count) {
  // 		return Array.isArray(count)
  // 			? count.map(countToColumns)
  // 			: !!count && `repeat(${count}, 1fr)`;
  // 	}
  // },
  computed: {
    gridTemplateColumns: function gridTemplateColumns() {
      if (this.width) {
        return "repeat(auto-fill, minmax(".concat(this.width, ", 1fr))");
      } else {
        return "repeat(".concat(this.columns, ", 1fr)");
      }
    }
  }
});
// CONCATENATED MODULE: ./src/Grid/Grid.vue?vue&type=script&lang=js&
 /* harmony default export */ var Grid_Gridvue_type_script_lang_js_ = (Gridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Grid/Grid.vue?vue&type=style&index=0&id=5f48b3e2&scoped=true&lang=css&
var Gridvue_type_style_index_0_id_5f48b3e2_scoped_true_lang_css_ = __webpack_require__("6e87");

// EXTERNAL MODULE: ./src/Grid/Grid.vue?vue&type=custom&index=0&blockType=meta
var Gridvue_type_custom_index_0_blockType_meta = __webpack_require__("57cd");
var Gridvue_type_custom_index_0_blockType_meta_default = /*#__PURE__*/__webpack_require__.n(Gridvue_type_custom_index_0_blockType_meta);

// EXTERNAL MODULE: ./src/Grid/Grid.vue?vue&type=custom&index=1&blockType=example
var Gridvue_type_custom_index_1_blockType_example = __webpack_require__("7040");
var Gridvue_type_custom_index_1_blockType_example_default = /*#__PURE__*/__webpack_require__.n(Gridvue_type_custom_index_1_blockType_example);

// CONCATENATED MODULE: ./src/Grid/Grid.vue






/* normalize component */

var Grid_component = normalizeComponent(
  Grid_Gridvue_type_script_lang_js_,
  Gridvue_type_template_id_5f48b3e2_scoped_true_render,
  Gridvue_type_template_id_5f48b3e2_scoped_true_staticRenderFns,
  false,
  null,
  "5f48b3e2",
  null
  
)

/* custom blocks */

if (typeof Gridvue_type_custom_index_0_blockType_meta_default.a === 'function') Gridvue_type_custom_index_0_blockType_meta_default()(Grid_component)

if (typeof Gridvue_type_custom_index_1_blockType_example_default.a === 'function') Gridvue_type_custom_index_1_blockType_example_default()(Grid_component)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Grid', Grid_component.exports)
}
/* harmony default export */ var Grid = (Grid_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"37c3599e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/HStack/HStack.vue?vue&type=template&id=4968875a&scoped=true&
var HStackvue_type_template_id_4968875a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"h-stack",style:(("--h-stack-gap: var(--s" + _vm.gap + "); --h-stack-padY: var(--s" + _vm.padY + ");  --h-stack-padX: var(--s" + _vm.padX + ");"))},[_c('div',[_vm._t("default")],2)])}
var HStackvue_type_template_id_4968875a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/HStack/HStack.vue?vue&type=template&id=4968875a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/HStack/HStack.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('HStack', component.exports);
}

/* harmony default export */ var HStackvue_type_script_lang_js_ = ({
  // functional: true,
  props: {
    gap: {
      type: [String, Array],
      default: '0'
    },
    padX: {
      type: [String, Array],
      default: '0'
    },
    padY: {
      type: [String, Array],
      default: '0'
    },
    as: {
      type: String,
      default: 'div'
    } // render: function(createElement) {
    // 	return createElement(
    // 		this.as, // tag name
    // 		{
    // 			class: 'h-stack',
    // 			style: `--h-stack-gap: var(--s${this.gap}); --h-stack-padY: var(--s${this.padY});  --h-stack-padX: var(--s${this.padX});`
    // 		},
    // 		this.$slots.default // array of children
    // 	);
    // }

  }
});
// CONCATENATED MODULE: ./src/HStack/HStack.vue?vue&type=script&lang=js&
 /* harmony default export */ var HStack_HStackvue_type_script_lang_js_ = (HStackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/HStack/HStack.vue?vue&type=style&index=0&id=4968875a&scoped=true&lang=css&
var HStackvue_type_style_index_0_id_4968875a_scoped_true_lang_css_ = __webpack_require__("4e9a");

// EXTERNAL MODULE: ./src/HStack/HStack.vue?vue&type=custom&index=0&blockType=meta
var HStackvue_type_custom_index_0_blockType_meta = __webpack_require__("1114");
var HStackvue_type_custom_index_0_blockType_meta_default = /*#__PURE__*/__webpack_require__.n(HStackvue_type_custom_index_0_blockType_meta);

// EXTERNAL MODULE: ./src/HStack/HStack.vue?vue&type=custom&index=1&blockType=example
var HStackvue_type_custom_index_1_blockType_example = __webpack_require__("9b11");
var HStackvue_type_custom_index_1_blockType_example_default = /*#__PURE__*/__webpack_require__.n(HStackvue_type_custom_index_1_blockType_example);

// CONCATENATED MODULE: ./src/HStack/HStack.vue






/* normalize component */

var HStack_component = normalizeComponent(
  HStack_HStackvue_type_script_lang_js_,
  HStackvue_type_template_id_4968875a_scoped_true_render,
  HStackvue_type_template_id_4968875a_scoped_true_staticRenderFns,
  false,
  null,
  "4968875a",
  null
  
)

/* custom blocks */

if (typeof HStackvue_type_custom_index_0_blockType_meta_default.a === 'function') HStackvue_type_custom_index_0_blockType_meta_default()(HStack_component)

if (typeof HStackvue_type_custom_index_1_blockType_example_default.a === 'function') HStackvue_type_custom_index_1_blockType_example_default()(HStack_component)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('HStack', HStack_component.exports)
}
/* harmony default export */ var HStack = (HStack_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Heading/Heading.vue?vue&type=script&lang=js&
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Heading', component.exports);
}

/* harmony default export */ var Headingvue_type_script_lang_js_ = ({
  props: {
    level: {
      type: String,
      required: true
    },
    clamp: {
      type: Boolean,
      default: true
    }
  },
  render: function render(createElement) {
    return createElement('h' + this.level, // tag name
    {
      class: 'heading',
      style: "--heading-clamp: ".concat(this.clamp ? 'block' : 'none')
    }, this.$slots.default // array of children
    );
  }
});
// CONCATENATED MODULE: ./src/Heading/Heading.vue?vue&type=script&lang=js&
 /* harmony default export */ var Heading_Headingvue_type_script_lang_js_ = (Headingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Heading/Heading.vue?vue&type=style&index=0&id=0b98e844&scoped=true&lang=css&
var Headingvue_type_style_index_0_id_0b98e844_scoped_true_lang_css_ = __webpack_require__("3ac2");

// EXTERNAL MODULE: ./src/Heading/Heading.vue?vue&type=custom&index=0&blockType=meta
var Headingvue_type_custom_index_0_blockType_meta = __webpack_require__("21f0");
var Headingvue_type_custom_index_0_blockType_meta_default = /*#__PURE__*/__webpack_require__.n(Headingvue_type_custom_index_0_blockType_meta);

// EXTERNAL MODULE: ./src/Heading/Heading.vue?vue&type=custom&index=1&blockType=example
var Headingvue_type_custom_index_1_blockType_example = __webpack_require__("86ff");
var Headingvue_type_custom_index_1_blockType_example_default = /*#__PURE__*/__webpack_require__.n(Headingvue_type_custom_index_1_blockType_example);

// CONCATENATED MODULE: ./src/Heading/Heading.vue
var Heading_render, Heading_staticRenderFns





/* normalize component */

var Heading_component = normalizeComponent(
  Heading_Headingvue_type_script_lang_js_,
  Heading_render,
  Heading_staticRenderFns,
  false,
  null,
  "0b98e844",
  null
  
)

/* custom blocks */

if (typeof Headingvue_type_custom_index_0_blockType_meta_default.a === 'function') Headingvue_type_custom_index_0_blockType_meta_default()(Heading_component)

if (typeof Headingvue_type_custom_index_1_blockType_example_default.a === 'function') Headingvue_type_custom_index_1_blockType_example_default()(Heading_component)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Heading', Heading_component.exports)
}
/* harmony default export */ var Heading = (Heading_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"37c3599e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Inline/Inline.vue?vue&type=template&id=54fe231c&scoped=true&
var Inlinevue_type_template_id_54fe231c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inline",style:(("--inline-gap: var(--s" + _vm.gap + "); --inline-pad: var(--s" + _vm.padY + "); --inline-align: " + _vm.align + ";"))},[_c('div',[_vm._t("default")],2)])}
var Inlinevue_type_template_id_54fe231c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/Inline/Inline.vue?vue&type=template&id=54fe231c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Inline/Inline.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Inline', component.exports);
}

/* harmony default export */ var Inlinevue_type_script_lang_js_ = ({
  props: {
    gap: {
      type: String,
      default: '0'
    },
    padY: {
      type: String,
      default: '0'
    },
    align: {
      type: String,
      default: 'center',
      validator: function validator(value) {
        return ['baseline', 'center', 'flex-end', 'flex-start', 'initial', 'stretch', 'unset'].indexOf(value) !== -1;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/Inline/Inline.vue?vue&type=script&lang=js&
 /* harmony default export */ var Inline_Inlinevue_type_script_lang_js_ = (Inlinevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Inline/Inline.vue?vue&type=style&index=0&id=54fe231c&scoped=true&lang=css&
var Inlinevue_type_style_index_0_id_54fe231c_scoped_true_lang_css_ = __webpack_require__("2c79");

// EXTERNAL MODULE: ./src/Inline/Inline.vue?vue&type=custom&index=0&blockType=meta
var Inlinevue_type_custom_index_0_blockType_meta = __webpack_require__("01f5");
var Inlinevue_type_custom_index_0_blockType_meta_default = /*#__PURE__*/__webpack_require__.n(Inlinevue_type_custom_index_0_blockType_meta);

// EXTERNAL MODULE: ./src/Inline/Inline.vue?vue&type=custom&index=1&blockType=example
var Inlinevue_type_custom_index_1_blockType_example = __webpack_require__("f69f");
var Inlinevue_type_custom_index_1_blockType_example_default = /*#__PURE__*/__webpack_require__.n(Inlinevue_type_custom_index_1_blockType_example);

// CONCATENATED MODULE: ./src/Inline/Inline.vue






/* normalize component */

var Inline_component = normalizeComponent(
  Inline_Inlinevue_type_script_lang_js_,
  Inlinevue_type_template_id_54fe231c_scoped_true_render,
  Inlinevue_type_template_id_54fe231c_scoped_true_staticRenderFns,
  false,
  null,
  "54fe231c",
  null
  
)

/* custom blocks */

if (typeof Inlinevue_type_custom_index_0_blockType_meta_default.a === 'function') Inlinevue_type_custom_index_0_blockType_meta_default()(Inline_component)

if (typeof Inlinevue_type_custom_index_1_blockType_example_default.a === 'function') Inlinevue_type_custom_index_1_blockType_example_default()(Inline_component)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Inline', Inline_component.exports)
}
/* harmony default export */ var Inline = (Inline_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/Layout/Layout.vue?vue&type=script&lang=js&
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Layout', component.exports);
}

/* harmony default export */ var Layoutvue_type_script_lang_js_ = ({
  props: {
    as: {
      type: String,
      default: 'div'
    }
  },
  render: function render(createElement) {
    return createElement(this.as, // tag name
    {
      class: 'layout'
    }, this.$slots.default // array of children
    );
  }
});
// CONCATENATED MODULE: ./src/Layout/Layout.vue?vue&type=script&lang=js&
 /* harmony default export */ var Layout_Layoutvue_type_script_lang_js_ = (Layoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/Layout/Layout.vue?vue&type=style&index=0&lang=css&
var Layoutvue_type_style_index_0_lang_css_ = __webpack_require__("2ab7");

// EXTERNAL MODULE: ./src/Layout/Layout.vue?vue&type=custom&index=0&blockType=meta
var Layoutvue_type_custom_index_0_blockType_meta = __webpack_require__("5939");
var Layoutvue_type_custom_index_0_blockType_meta_default = /*#__PURE__*/__webpack_require__.n(Layoutvue_type_custom_index_0_blockType_meta);

// EXTERNAL MODULE: ./src/Layout/Layout.vue?vue&type=custom&index=1&blockType=example
var Layoutvue_type_custom_index_1_blockType_example = __webpack_require__("7390");
var Layoutvue_type_custom_index_1_blockType_example_default = /*#__PURE__*/__webpack_require__.n(Layoutvue_type_custom_index_1_blockType_example);

// CONCATENATED MODULE: ./src/Layout/Layout.vue
var Layout_render, Layout_staticRenderFns





/* normalize component */

var Layout_component = normalizeComponent(
  Layout_Layoutvue_type_script_lang_js_,
  Layout_render,
  Layout_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof Layoutvue_type_custom_index_0_blockType_meta_default.a === 'function') Layoutvue_type_custom_index_0_blockType_meta_default()(Layout_component)

if (typeof Layoutvue_type_custom_index_1_blockType_example_default.a === 'function') Layoutvue_type_custom_index_1_blockType_example_default()(Layout_component)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Layout', Layout_component.exports)
}
/* harmony default export */ var Layout = (Layout_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"37c3599e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/VStack/VStack.vue?vue&type=template&id=a6fe6d9e&scoped=true&
var VStackvue_type_template_id_a6fe6d9e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"v-stack",style:(("--v-stack-gap: var(--s" + _vm.gap + "); --v-stack-padY: var(--s" + _vm.padY + ");  --v-stack-padX: var(--s" + _vm.padX + ");"))},[_vm._t("default")],2)}
var VStackvue_type_template_id_a6fe6d9e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/VStack/VStack.vue?vue&type=template&id=a6fe6d9e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./build-utils/global-vue-loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/VStack/VStack.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('VStack', component.exports);
}

/* harmony default export */ var VStackvue_type_script_lang_js_ = ({
  props: {
    gap: {
      type: [String, Array],
      default: '0'
    },
    padX: {
      type: [String, Array],
      default: '0'
    },
    padY: {
      type: [String, Array],
      default: '0'
    }
  }
});
// CONCATENATED MODULE: ./src/VStack/VStack.vue?vue&type=script&lang=js&
 /* harmony default export */ var VStack_VStackvue_type_script_lang_js_ = (VStackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/VStack/VStack.vue?vue&type=style&index=0&id=a6fe6d9e&scoped=true&lang=css&
var VStackvue_type_style_index_0_id_a6fe6d9e_scoped_true_lang_css_ = __webpack_require__("2915");

// EXTERNAL MODULE: ./src/VStack/VStack.vue?vue&type=custom&index=0&blockType=meta
var VStackvue_type_custom_index_0_blockType_meta = __webpack_require__("24ae");
var VStackvue_type_custom_index_0_blockType_meta_default = /*#__PURE__*/__webpack_require__.n(VStackvue_type_custom_index_0_blockType_meta);

// EXTERNAL MODULE: ./src/VStack/VStack.vue?vue&type=custom&index=1&blockType=example
var VStackvue_type_custom_index_1_blockType_example = __webpack_require__("5ada");
var VStackvue_type_custom_index_1_blockType_example_default = /*#__PURE__*/__webpack_require__.n(VStackvue_type_custom_index_1_blockType_example);

// CONCATENATED MODULE: ./src/VStack/VStack.vue






/* normalize component */

var VStack_component = normalizeComponent(
  VStack_VStackvue_type_script_lang_js_,
  VStackvue_type_template_id_a6fe6d9e_scoped_true_render,
  VStackvue_type_template_id_a6fe6d9e_scoped_true_staticRenderFns,
  false,
  null,
  "a6fe6d9e",
  null
  
)

/* custom blocks */

if (typeof VStackvue_type_custom_index_0_blockType_meta_default.a === 'function') VStackvue_type_custom_index_0_blockType_meta_default()(VStack_component)

if (typeof VStackvue_type_custom_index_1_blockType_example_default.a === 'function') VStackvue_type_custom_index_1_blockType_example_default()(VStack_component)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('VStack', VStack_component.exports)
}
/* harmony default export */ var VStack = (VStack_component.exports);
// CONCATENATED MODULE: ./src/index.js
// THIS FILE IS AUTOMATICALLY GENERATED IN:
//
//   build-utils/update-file-index.js
//
// YOU SHOULD NEVER UPDATE THIS FILE DIRECTLY










 // Export components individually

 // What should happen if the user installs the library as a plugin

function install(Vue) {
  Vue.component('BaseText', BaseText);
  Vue.component('Box', Box);
  Vue.component('Center', Center);
  Vue.component('Cover', Cover);
  Vue.component('Frame', Frame);
  Vue.component('Grid', Grid);
  Vue.component('HStack', HStack);
  Vue.component('Heading', Heading);
  Vue.component('Inline', Inline);
  Vue.component('Layout', Layout);
  Vue.component('VStack', VStack);
} // Export the library as a plugin


/* harmony default export */ var src = ({
  install: install
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport BaseText */__webpack_require__.d(__webpack_exports__, "BaseText", function() { return BaseText; });
/* concated harmony reexport Box */__webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* concated harmony reexport Center */__webpack_require__.d(__webpack_exports__, "Center", function() { return Center; });
/* concated harmony reexport Cover */__webpack_require__.d(__webpack_exports__, "Cover", function() { return Cover; });
/* concated harmony reexport Frame */__webpack_require__.d(__webpack_exports__, "Frame", function() { return Frame; });
/* concated harmony reexport Grid */__webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* concated harmony reexport HStack */__webpack_require__.d(__webpack_exports__, "HStack", function() { return HStack; });
/* concated harmony reexport Heading */__webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* concated harmony reexport Inline */__webpack_require__.d(__webpack_exports__, "Inline", function() { return Inline; });
/* concated harmony reexport Layout */__webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* concated harmony reexport VStack */__webpack_require__.d(__webpack_exports__, "VStack", function() { return VStack; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map