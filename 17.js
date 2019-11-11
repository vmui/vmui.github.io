webpackJsonpthis([17],{

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(514),
  /* template */
  __webpack_require__(515),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhanghao/Code/vm/examples/src/doc/pages/layout/image.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] image.md: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b96b3c44", Component.options)
  } else {
    hotAPI.reload("data-v-b96b3c44", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 514:
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
/* harmony default export */ __webpack_exports__["default"] = ({ components: {} });

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', [_vm._v("Image")]), _vm._v(" "), _c('h3', [_vm._v("代码演示")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("图片异步加载")])]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("vm-image")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("src")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"http://xx.com/96d8cf0375f64c24a819d50ae190b51820170601175516.jpeg\"")]), _vm._v(" />")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-image")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":src")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"url\"")]), _vm._v(" />")]), _vm._v("\n")])]), _vm._v(" "), _c('pre', {
    pre: true
  }, [_c('code', {
    pre: true,
    attrs: {
      "v-pre": "",
      "class": "language-js"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("export")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("default")]), _vm._v(" {\n    data () {\n        "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" {\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("url")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(",\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("src")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'http://xx.com/96d8cf0375f64c24a819d50ae190b51820170601175516.jpeg'")]), _vm._v("\n        };\n    },\n    mounted () {\n        setTimeout("), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-function"
    }
  }, [_c('span', {
    pre: true,
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("()")]), _vm._v(" =>")]), _vm._v(" {\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".url = "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".src;\n        }, "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1000")]), _vm._v(");\n    }\n};\n")])]), _vm._v(" "), _c('h3', [_vm._v("Props")]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("属性")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("src")]), _vm._v(" "), _c('td', [_vm._v("图片地址")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b96b3c44", module.exports)
  }
}

/***/ })

});