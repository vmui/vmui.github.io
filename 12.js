webpackJsonpthis([12],{

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(506),
  /* template */
  __webpack_require__(507),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhanghao/Code/vm/examples/src/doc/pages/layout/picker.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] picker.md: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b5cbf2ba", Component.options)
  } else {
    hotAPI.reload("data-v-b5cbf2ba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 506:
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
/* harmony default export */ __webpack_exports__["default"] = ({ components: {} });

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', [_vm._v("Picker")]), _vm._v(" "), _c('h3', [_vm._v("代码演示")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("vm-picker")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("title")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"title\"")]), _vm._v(" @"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("select")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"onSelect\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":options")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"options\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"visible\"")]), _vm._v(">")]), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-picker")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("options")]), _vm._v(": [\n                {"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'option1'")]), _vm._v(", "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("1")]), _vm._v("}, \n                {"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'option2'")]), _vm._v(", "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2")]), _vm._v("}, \n                {"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'option3'")]), _vm._v(", "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("3")]), _vm._v("}, \n                {"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'option4'")]), _vm._v(", "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("4")]), _vm._v("}\n            ],\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("visible")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("false")]), _vm._v("\n        };\n    },\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        onShow () {\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-keyword"
    }
  }, [_vm._v("this")]), _vm._v(".visible = "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-literal"
    }
  }, [_vm._v("true")]), _vm._v(";\n        },\n        confirm (str, arr) {\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("console")]), _vm._v(".log("), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("'您点击了确认'")]), _vm._v(")\n        },\n        onSelect (currData) {\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("console")]), _vm._v(".log(currData);\n        }\n    }\n};\n")])]), _vm._v(" "), _c('h3', [_vm._v("Props")]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("属性")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("options")]), _vm._v(" "), _c('td', [_vm._v("选择项，可直接对象数组,保持{label,value}格式")]), _vm._v(" "), _c('td', [_vm._v("Array")]), _vm._v(" "), _c('td', [_vm._v("[]")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("confirmText")]), _vm._v(" "), _c('td', [_vm._v("确认按钮")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("确定")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("cancelText")]), _vm._v(" "), _c('td', [_vm._v("取消按钮")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("取消")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("title")]), _vm._v(" "), _c('td', [_vm._v("标题文字")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")])])])])]), _c('h3', [_vm._v("Events")]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("事件名称")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("回调参数")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("update:visible")]), _vm._v(" "), _c('td', [_vm._v("遮罩变更时触发")]), _vm._v(" "), _c('td', [_vm._v("Boolean")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("confirm")]), _vm._v(" "), _c('td', [_vm._v("确定时触发（获取当前被选中的值）")]), _vm._v(" "), _c('td', [_vm._v("String, Array")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("cancel")]), _vm._v(" "), _c('td', [_vm._v("隐藏时触发")]), _vm._v(" "), _c('td', [_vm._v("Boolean")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("select")]), _vm._v(" "), _c('td', [_vm._v("当前选择项")]), _vm._v(" "), _c('td', [_vm._v("currData:Any")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b5cbf2ba", module.exports)
  }
}

/***/ })

});