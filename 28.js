webpackJsonpthis([28],{

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(496),
  /* template */
  __webpack_require__(497),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhanghao/Code/vm/examples/src/doc/pages/forms/form.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] form.md: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c3b27320", Component.options)
  } else {
    hotAPI.reload("data-v-c3b27320", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 496:
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
/* harmony default export */ __webpack_exports__["default"] = ({ components: {} });

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h1', [_vm._v("form组件集合")]), _vm._v(" "), _c('p', [_vm._v("form相关组件都是基于FormRow组件进行的封装，且可以通过v-model进行双向绑定，开发者也可以基于FormRow进行自己的组件扩展")]), _vm._v(" "), _c('h3', [_vm._v("代码演示")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("vm-form-row")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("vertical-layout")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"输入价格\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-input")]), _vm._v(" />")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-form-row")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-form-row")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("align")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"right\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"输入价格\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-input")]), _vm._v(" />")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-forward")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":arrow-size")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"14\"")]), _vm._v("/>")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-form-row")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-form-row")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"icon checker\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-checker-group")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":options")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"years\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("icon-type")]), _vm._v(" @"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("change")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"onCheckerChange\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"checkers\"")]), _vm._v(" />")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-form-row")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-form-row")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"checker\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-checker-group")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v(":options")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"years\"")]), _vm._v(" @"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("change")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"onCheckerChange\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("v-model")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"checkers\"")]), _vm._v(" />")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-form-row")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-form-row")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"textarea\"")]), _vm._v(">")]), _vm._v("\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-textarea")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("placeholder")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"多行文本\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("class")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"textarea\"")]), _vm._v(" />")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-form-row")]), _vm._v(">")]), _vm._v("    \n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-form-row")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"开关切换\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("align")]), _vm._v("="), _c('span', {
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
  }, [_vm._v("vm-switch")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checked")]), _vm._v(" />")]), _vm._v("\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-form-row")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-button")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("style")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"margin: 10px auto; width: 90%;\"")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("size")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"large\"")]), _vm._v(" @"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("click")]), _vm._v("="), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-string"
    }
  }, [_vm._v("\"submit\"")]), _vm._v(">")]), _vm._v("提交"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-button")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("checkers")]), _vm._v(": ["), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2018")]), _vm._v("],\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("years")]), _vm._v(": [\n                {"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2015")]), _vm._v(", "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2015")]), _vm._v("},\n                {"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2016")]), _vm._v(", "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2016")]), _vm._v("},\n                {"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2017")]), _vm._v(", "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2017")]), _vm._v("},\n                {"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2018")]), _vm._v(", "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2018")]), _vm._v("}\n            ]\n        }\n    },\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        submit () {\n            ...\n        },\n        onCheckerChange (...args) {\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("console")]), _vm._v(".log(...args);\n        }\n    }\n}\n")])]), _vm._v(" "), _c('h3', [_vm._v("Props")]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("属性")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("label")]), _vm._v(" "), _c('td', [_vm._v("表单标题文字")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("null")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("align")]), _vm._v(" "), _c('td', [_vm._v("显示位置")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("left")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("verticalLayout")]), _vm._v(" "), _c('td', [_vm._v("竖直排版")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c3b27320", module.exports)
  }
}

/***/ })

});