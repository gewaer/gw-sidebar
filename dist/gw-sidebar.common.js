module.exports =
/******/ (function(modules) { // webpackBootstrap
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

/***/ "175e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fbcc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "23dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fa7cf664_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e3c6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fa7cf664_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fa7cf664_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fa7cf664_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "353d":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "e3c6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"85911b60-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/index.vue?vue&type=template&id=fa7cf664&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-sidebar",class:{ 'open' : _vm.showSidebar },attrs:{"id":"page-sidebar","data-pages":"sidebar"},on:{"mouseenter":function($event){return _vm.$emit('handle-sidebar', true)},"mouseleave":function($event){return _vm.$emit('handle-sidebar', false)}}},[_c('div',{staticClass:"row no-gutters align-items-start"},[_c('router-link',{staticClass:"col sidebar-app-logo",attrs:{"to":{ name: 'dashboard'}}},[_vm._t("app-logo")],2),_vm._m(0)],1),_c('div',{staticClass:"sidebar-menu",attrs:{"id":"sidebar-menu"}},[_c('ul',{staticClass:"menu-items"},[_c('li',{staticClass:"m-t-30"},[_c('router-link',{attrs:{"id":"dashboard-menu-link","to":{ name: 'dashboard'}}},[_c('span',{staticClass:"title"},[_vm._v("Dashboard")])]),_vm._m(1)],1),(_vm.resources)?_vm._l((_vm.resources),function(resource,index){return _c('li',{key:index},[_c('router-link',{attrs:{"to":{ name: 'browse', params: { resource: resource.slug }}}},[_c('span',{staticClass:"title"},[_vm._v(_vm._s(resource.name))])]),_c('span',{staticClass:"icon-thumbnail"},[(resource.icon)?_c('img',{attrs:{"src":resource.icon,"width":"50%"}}):_c('span',[_vm._v(_vm._s(_vm._f("firstLetter")(resource.slug)))])])],1)}):_vm._e()],2),_c('div',{staticClass:"clearfix"})])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-auto menu-icon d-none d-lg-flex"},[_c('img',{attrs:{"src":__webpack_require__("353d")}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"icon-thumbnail"},[_c('i',{staticClass:"fa fa-pie-chart"})])}]


// CONCATENATED MODULE: ./src/index.vue?vue&type=template&id=fa7cf664&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var lib_vue_loader_options_srcvue_type_script_lang_js_ = ({
  name: "GwSidebar",
  filters: {
    firstLetter(value) {
      return value.charAt(0);
    }

  },
  props: {
    resources: {
      type: Array,

      default() {
        return [];
      },

      validator(options) {
        return options.every(option => option.name && option.slug);
      }

    },
    showSidebar: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var srcvue_type_script_lang_js_ = (lib_vue_loader_options_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/index.vue?vue&type=style&index=0&id=fa7cf664&lang=scss&scoped=true&
var srcvue_type_style_index_0_id_fa7cf664_lang_scss_scoped_true_ = __webpack_require__("23dc");

// EXTERNAL MODULE: ./src/index.vue?vue&type=style&index=1&lang=scss&
var srcvue_type_style_index_1_lang_scss_ = __webpack_require__("175e");

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

// CONCATENATED MODULE: ./src/index.vue







/* normalize component */

var component = normalizeComponent(
  srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "fa7cf664",
  null
  
)

/* harmony default export */ var src = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ }),

/***/ "fbcc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ })["default"];
//# sourceMappingURL=gw-sidebar.common.js.map