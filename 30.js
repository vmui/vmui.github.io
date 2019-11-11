webpackJsonpthis([30],{

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(460),
  /* template */
  __webpack_require__(461),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhanghao/Code/vm/examples/src/doc/pages/config.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] config.md: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f0cac92", Component.options)
  } else {
    hotAPI.reload("data-v-0f0cac92", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({ components: {} });

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', [_vm._v("配置")]), _vm._v(" "), _c('p', [_vm._v("vm中提供了足够多的的配置项目供开发者灵活修改，其中包括大量的颜色配置，不同于其他组件库对于修改样式方面相对较为困难（比如只提供一种样式，或需要重新定义less相关文件）")]), _vm._v(" "), _c('p', [_c('a', {
    attrs: {
      "href": "https://github.com/feather-components/vm/blob/master/src/cfg.default.js"
    }
  }, [_vm._v("查看原始配置")])]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    pre: true,
    attrs: {
      "v-pre": "",
      "class": "language-js"
    }
  }, [_vm._v("Vue.use(VM, {\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'theme'")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'#ccc'")]), _vm._v(", "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("//定义主题, 该配置对很多未定义颜色生效")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'topbar.padding-top'")]), _vm._v(": isAnroid() ? "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'0px'")]), _vm._v(" : "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'22px'")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-comment"
    }
  }, [_vm._v("//此处可定义topbar使用时是否自动留出statusbar的height")]), _vm._v("\n});\n")])]), _vm._v(" "), _c('p', [_vm._v("更多配置可自行尝试，vm的配置项还是很容易能看懂的。")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0f0cac92", module.exports)
  }
}

/***/ })

});