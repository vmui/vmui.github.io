webpackJsonpthis([31],{

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(462),
  /* template */
  __webpack_require__(463),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhanghao/Code/vm/examples/src/doc/pages/base/button.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] button.md: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-85e106b4", Component.options)
  } else {
    hotAPI.reload("data-v-85e106b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 462:
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
/* harmony default export */ __webpack_exports__["default"] = ({ components: {} });

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', [_vm._v("Button")]), _vm._v(" "), _c('h3', [_vm._v("代码演示")]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    pre: true,
    attrs: {
      "v-pre": "",
      "class": "language-html"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-button")]), _vm._v(">")]), _vm._v("button"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-button")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('h3', [_vm._v("Props")]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("属性")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("type")]), _vm._v(" "), _c('td', [_vm._v("按钮类型，可选值为'large', 'normal', 'small', 'mini'或者不设")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("primary")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("size")]), _vm._v(" "), _c('td', [_vm._v("按钮大小，可选值为large、small")]), _vm._v(" "), _c('td', [_vm._v("string")]), _vm._v(" "), _c('td', [_vm._v("normal")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("radius")]), _vm._v(" "), _c('td', [_vm._v("设置圆角值")]), _vm._v(" "), _c('td', [_vm._v("string、number")]), _vm._v(" "), _c('td', [_vm._v("normal")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("hollow")]), _vm._v(" "), _c('td', [_vm._v("是否空心")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("设置禁用")]), _vm._v(" "), _c('td', [_vm._v("boolean")]), _vm._v(" "), _c('td', [_vm._v("false")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-85e106b4", module.exports)
  }
}

/***/ })

});