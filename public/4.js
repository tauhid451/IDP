(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/inventory/inventory.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/inventory/inventory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      gunCategory: "-1",
      gunList: [],
      loading: false
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      var url = "/api/admin/issue/" + this.gunCategory;
      axios.get(url).then(function (res) {
        _this.gunList = res.data;
        console.log(res);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/inventory/inventory.vue?vue&type=template&id=eea5cd24&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/inventory/inventory.vue?vue&type=template&id=eea5cd24& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("navbar", { tag: "component" }),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c("form", { attrs: { action: "#" } }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.gunCategory,
                  expression: "gunCategory"
                }
              ],
              staticClass: "mt-5 form-select form-select-lg w-75 p-2",
              attrs: { "aria-label": "Default select example" },
              on: {
                change: [
                  function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.gunCategory = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  _vm.getData
                ]
              }
            },
            [
              _c("option", { attrs: { selected: "", value: "-1" } }, [
                _vm._v("Choose Gun Type...")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "bd-08" } }, [_vm._v("BD-08")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "lmg" } }, [_vm._v("LMG")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "smg" } }, [_vm._v("SMG")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "pistol" } }, [_vm._v("Pistol")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "g3" } }, [_vm._v("G3")])
            ]
          ),
          _vm._v(" "),
          _c("button", { staticClass: "btn btn-primary m-5 p-2" }, [
            _vm._v("Search")
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm.gunList.length > 0
          ? _c("div", { staticClass: "mt-3" }, [
              _c("table", { staticClass: "table" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.gunList, function(val, i) {
                    return _c("tr", { key: i }, [
                      _c("td", [_vm._v(_vm._s(i + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(val.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(val.issue_time))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(val.deposite_time ? val.deposite_time : "N/A")
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(val.purpose))])
                    ])
                  }),
                  0
                )
              ])
            ])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-center" }, [
      _c("h1", [_vm._v("Search Results")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-3 d-flex justify-content-between" }, [
      _c("div", [
        _c("div", [_vm._v("Kote: 10232")]),
        _vm._v(" "),
        _c("div", [_vm._v("Kote NCO: 10203")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Serial")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Issued By")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Issued On")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("DepositionTime")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Purpose")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/inventory/inventory.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/admin/inventory/inventory.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inventory_vue_vue_type_template_id_eea5cd24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory.vue?vue&type=template&id=eea5cd24& */ "./resources/js/components/admin/inventory/inventory.vue?vue&type=template&id=eea5cd24&");
/* harmony import */ var _inventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/inventory/inventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _inventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _inventory_vue_vue_type_template_id_eea5cd24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _inventory_vue_vue_type_template_id_eea5cd24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/inventory/inventory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/inventory/inventory.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/inventory/inventory.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./inventory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/inventory/inventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/inventory/inventory.vue?vue&type=template&id=eea5cd24&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/admin/inventory/inventory.vue?vue&type=template&id=eea5cd24& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_template_id_eea5cd24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./inventory.vue?vue&type=template&id=eea5cd24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/inventory/inventory.vue?vue&type=template&id=eea5cd24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_template_id_eea5cd24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_vue_vue_type_template_id_eea5cd24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);