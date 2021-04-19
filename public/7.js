(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/issue/issue.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/issue/issue.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
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
      rfid: "",
      gunType: "-1",
      purpose: "-1",
      duty: "-1",
      showInputForm: false
    };
  },
  methods: {
    unlockGun: function unlockGun() {
      var formData = new FormData();
      formData.set("gun_id", this.gunType);
      formData.set("purpose", this.purpose);
      formData.set("duty", this.duty);
      formData.set("rfid", this.rfid);
      var url = "/api/admin/issue";
      axios.post(url, formData).then(function (res) {
        console.log(res);
        alert("Issued!");
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/issue/issue.vue?vue&type=template&id=79226cb0&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/issue/issue.vue?vue&type=template&id=79226cb0& ***!
  \**************************************************************************************************************************************************************************************************************/
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
        _vm.showInputForm
          ? _c("div", { staticClass: "m-5" }, [
              _c("div", { staticClass: "row mb-3" }, [
                _c(
                  "label",
                  {
                    staticClass: "col-sm-2 col-form-label",
                    attrs: { for: "inputEmail3" }
                  },
                  [_vm._v("Type of gun")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.gunType,
                        expression: "gunType"
                      }
                    ],
                    staticClass: "form-select form-select-lg w-75 p-2",
                    attrs: { id: "autoSizingSelect" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.gunType = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { selected: "", value: "-1" } }, [
                      _vm._v("Choose Gun Type...")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "1" } }, [_vm._v("BD-08")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [_vm._v("LMG")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [_vm._v("SMG")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "4" } }, [_vm._v("Pistol")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "5" } }, [_vm._v("G3")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mb-3" }, [
                _c(
                  "label",
                  {
                    staticClass: "col-sm-2 col-form-label",
                    attrs: { for: "inputPassword3" }
                  },
                  [_vm._v("Select Purpose")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.purpose,
                        expression: "purpose"
                      }
                    ],
                    staticClass: "form-select form-select-lg w-75 p-2",
                    attrs: { id: "autoSizingSelect" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.purpose = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { selected: "", value: "-1" } }, [
                      _vm._v("Choose Purpose...")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "firing" } }, [
                      _vm._v("Firing")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "maintainance" } }, [
                      _vm._v("Maintainance")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "training" } }, [
                      _vm._v("Training")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "duty" } }, [_vm._v("Duty")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mb-3" }, [
                _c(
                  "label",
                  {
                    staticClass: "col-sm-2 col-form-label",
                    attrs: { for: "inputPassword3" }
                  },
                  [_vm._v("Select Duty")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.duty,
                        expression: "duty"
                      }
                    ],
                    staticClass: "form-select form-select-lg w-75 p-2",
                    attrs: { id: "autoSizingSelect" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.duty = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { selected: "", value: "-1" } }, [
                      _vm._v("Choose Duty Type...")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "on duty" } }, [
                      _vm._v("On Duty")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "on station" } }, [
                      _vm._v("Out Station")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  on: { click: _vm.unlockGun }
                },
                [_vm._v("Unlock")]
              )
            ])
          : _c("div", { staticClass: "m-5 text-center" }, [
              _c("h3", [_vm._v("Insert RFID")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.rfid,
                    expression: "rfid"
                  }
                ],
                attrs: { type: "text", autofocus: "" },
                domProps: { value: _vm.rfid },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.rfid = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "mt-3" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    on: {
                      click: function($event) {
                        _vm.rfid.length > 0 ? (_vm.showInputForm = true) : ""
                      }
                    }
                  },
                  [_vm._v("\n          Issue\n        ")]
                )
              ])
            ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/issue/issue.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/issue/issue.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _issue_vue_vue_type_template_id_79226cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./issue.vue?vue&type=template&id=79226cb0& */ "./resources/js/components/issue/issue.vue?vue&type=template&id=79226cb0&");
/* harmony import */ var _issue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./issue.vue?vue&type=script&lang=js& */ "./resources/js/components/issue/issue.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _issue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _issue_vue_vue_type_template_id_79226cb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _issue_vue_vue_type_template_id_79226cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/issue/issue.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/issue/issue.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/issue/issue.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./issue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/issue/issue.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/issue/issue.vue?vue&type=template&id=79226cb0&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/issue/issue.vue?vue&type=template&id=79226cb0& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_vue_vue_type_template_id_79226cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./issue.vue?vue&type=template&id=79226cb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/issue/issue.vue?vue&type=template&id=79226cb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_vue_vue_type_template_id_79226cb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_vue_vue_type_template_id_79226cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);