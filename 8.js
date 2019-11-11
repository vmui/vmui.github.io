webpackJsonpthis([8],{

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(510),
  /* template */
  __webpack_require__(511),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhanghao/Code/vm/examples/src/doc/pages/layout/search.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] search.md: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64675b49", Component.options)
  } else {
    hotAPI.reload("data-v-64675b49", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 510:
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

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', [_vm._v("Search")]), _vm._v(" "), _c('h3', [_vm._v("代码演示")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("vm-overlay")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"overlayVisible\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("style")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"width: 100%; height: 100%;\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("position")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"right\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-search")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":api")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"api\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"wd\"")]), _vm._v(" @"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("confirm")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"hide\"")]), _vm._v(" @"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("cancel")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"hide\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("ref")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"search\"")]), _vm._v(">")]), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-search")]), _vm._v(">")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-overlay")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("wd")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("''")]), _vm._v(",\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("overlayVisible")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v("\n        };\n    },\n\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        api (params) {\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("if")]), _vm._v(" ("), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("typeof")]), _vm._v(" params == "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'string'")]), _vm._v(") {\n                params = {\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("wd")]), _vm._v(": params\n                };\n            }\n\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("return")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("new")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("Promise")]), _vm._v("("), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-function"
    }
  }, [_vm._v("("), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-params"
    }
  }, [_vm._v("resolve, reject")]), _vm._v(") =>")]), _vm._v(" {\n                Ajax({\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("url")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?json=1&cb=?'")]), _vm._v(",\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("data")]), _vm._v(": params,\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("dataType")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'json'")]), _vm._v(",\n                    success (data) {\n                        resolve(data.s);\n                    },\n                    error () {\n                        reject();\n                    }\n                });\n            });\n        },\n\n        onClick () {\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".overlayVisible = "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(";\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".$refs.search.focus();\n        },\n\n        hide () {\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".overlayVisible = "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v(";\n        }\n    }\n};\n")])]), _vm._v(" "), _c('h3', [_vm._v("Props")]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("属性")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("api")]), _vm._v(" "), _c('td', [_vm._v("设置请求地址，返回Promise[resolve:Array]，")]), _vm._v(" "), _c('td', [_vm._v("Function:Promise")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("barStyle")]), _vm._v(" "), _c('td', [_vm._v("搜索框自定义样式")]), _vm._v(" "), _c('td', [_vm._v("String，Object")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("historyId")]), _vm._v(" "), _c('td', [_vm._v("制定搜索历史使用的标识")]), _vm._v(" "), _c('td', [_vm._v("-")]), _vm._v(" "), _c('td', [_vm._v("[hash [,pathname]]")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("placeholder")]), _vm._v(" "), _c('td', [_vm._v("规定帮助用户填写输入字段的提示")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("autofocus")]), _vm._v(" "), _c('td', [_vm._v("规定输入字段在页面加载时是否获得焦点")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("maxlength")]), _vm._v(" "), _c('td', [_vm._v("规定输入字段中的字符的最大长度")]), _vm._v(" "), _c('td', [_vm._v("Number")]), _vm._v(" "), _c('td', [_vm._v("-")])])])])]), _c('h3', [_vm._v("Events")]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("事件名称")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("回调参数")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("input")]), _vm._v(" "), _c('td', [_vm._v("搜索时输入的内容")]), _vm._v(" "), _c('td', [_vm._v("value:[Number,String]")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("confirm")]), _vm._v(" "), _c('td', [_vm._v("点击搜索结果中的选中的值")]), _vm._v(" "), _c('td', [_vm._v("data:Any")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("cancel")]), _vm._v(" "), _c('td', [_vm._v("取消搜索")]), _vm._v(" "), _c('td', [_vm._v("-")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-64675b49", module.exports)
  }
}

/***/ })

});