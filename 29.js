webpackJsonpthis([29],{

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(504),
  /* template */
  __webpack_require__(505),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/zhanghao/Code/vm/examples/src/doc/pages/forms/checker.md"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] checker.md: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67d368a1", Component.options)
  } else {
    hotAPI.reload("data-v-67d368a1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 504:
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
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({ components: {} });

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', [_c('h2', [_vm._v("Textarea")]), _vm._v(" "), _c('h3', [_vm._v("代码演示")]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("vm-checker")]), _vm._v(">")]), _vm._v("选中"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-checker")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("<"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-checker")]), _vm._v(" "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("square")]), _vm._v(">")]), _vm._v("确定"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-checker")]), _vm._v(">")]), _vm._v("\n\n"), _c('span', {
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
  }, [_vm._v("\"checkers\"")]), _vm._v(" />")]), _vm._v("\n\n"), _c('span', {
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
  }, [_vm._v("radio")]), _vm._v(" @"), _c('span', {
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
  }, [_vm._v("\"checkers\"")]), _vm._v(">")]), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-tag"
    }
  }, [_vm._v("</"), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-name"
    }
  }, [_vm._v("vm-checker-group")]), _vm._v(">")]), _vm._v("\n")])]), _vm._v(" "), _c('pre', {
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
  }, [_vm._v("years")]), _vm._v(": [\n                {\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2015")]), _vm._v(",\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2015")]), _vm._v("\n                },\n                {\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2016")]), _vm._v(",\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2016")]), _vm._v("\n                },\n                {\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2017")]), _vm._v(",\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2017")]), _vm._v("\n                },\n                {\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("label")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2018")]), _vm._v(",\n                    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("value")]), _vm._v(": "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2018")]), _vm._v("\n                }\n            ],\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("checkers")]), _vm._v(": ["), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-number"
    }
  }, [_vm._v("2018")]), _vm._v("]\n        }\n    },\n    "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-attr"
    }
  }, [_vm._v("methods")]), _vm._v(": {\n        onCheckerChange (...args) {\n            "), _c('span', {
    pre: true,
    attrs: {
      "class": "hljs-built_in"
    }
  }, [_vm._v("console")]), _vm._v(".log(...args);\n        }\n    }\n}\n")])]), _vm._v(" "), _c('h3', [_vm._v("Props")]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("属性")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("label")]), _vm._v(" "), _c('td', [_vm._v("指定文字")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("disabled")]), _vm._v(" "), _c('td', [_vm._v("禁止改变状态")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("square")]), _vm._v(" "), _c('td', [_vm._v("设置圆角像素,可设置公共配置")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false[,100px]")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("highColor")]), _vm._v(" "), _c('td', [_vm._v("设置是否为圆形，可设置公共配置")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")])])])])]), _c('h3', [_vm._v("Events")]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("事件名称")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("回调参数")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("change")]), _vm._v(" "), _c('td', [_vm._v("切换是否选中状态")]), _vm._v(" "), _c('td', [_vm._v("checked => void")])])])])]), _c('h3', [_vm._v("Config")]), _vm._v(" "), _c('p', [_vm._v("checker.square-radius"), _c('br'), _vm._v("\nchecker.high-color"), _c('br'), _vm._v("\nchecker.icon-size")]), _vm._v(" "), _c('h3', [_vm._v("checker-group")]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("属性")]), _vm._v(" "), _c('th', [_vm._v("说明")]), _vm._v(" "), _c('th', [_vm._v("类型")]), _vm._v(" "), _c('th', [_vm._v("默认值")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("options")]), _vm._v(" "), _c('td', [_vm._v("配置指定数据")]), _vm._v(" "), _c('td', [_vm._v("Array[Object{label,value}]")]), _vm._v(" "), _c('td', [_vm._v("-")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("radio")]), _vm._v(" "), _c('td', [_vm._v("是否为单选")]), _vm._v(" "), _c('td', [_vm._v("Boolean")]), _vm._v(" "), _c('td', [_vm._v("false")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("iconType")]), _vm._v(" "), _c('td', [_vm._v("是否显示iocn，可设置公共配置")]), _vm._v(" "), _c('td', [_vm._v("String")]), _vm._v(" "), _c('td', [_vm._v("-")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-67d368a1", module.exports)
  }
}

/***/ })

});