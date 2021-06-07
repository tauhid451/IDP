(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/report/report.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/report/report.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted: function mounted() {
    var _this = this;

    console.log(window.User.id);
    axios.get("/api/admin/user/" + window.User.id).then(function (res) {
      console.log(res);
      _this.gunId = res.data;
    });
  },
  data: function data() {
    return {
      fromDate: "",
      toDate: "",
      user: window.User,
      gunId: "",
      generate: false,
      rifleCount: 0,
      rifleOnStation: 0,
      rifleOnDuty: 0,
      smgCount: 0,
      smgOnStation: 0,
      smgOnDuty: 0,
      mgCount: 0,
      mgOnStation: 0,
      mgOnDuty: 0,
      pistolCount: 0,
      pistolOnStation: 0,
      pistolOnDuty: 0
    };
  },
  methods: {
    getData: function getData() {
      var _this2 = this;

      console.log(this.fromDate);
      console.log(this.toDate);
      if (this.fromDate == "" || this.toDate == "") return;
      axios.post("/api/admin/report", {
        fromDate: this.fromDate,
        toDate: this.toDate,
        gun_id: this.gunId
      }).then(function (res) {
        console.log(res);
        _this2.rifleCount = res.data.rifleCount;
        _this2.rifleOnDuty = res.data.rifleOnDuty;
        _this2.rifleOnStation = res.data.rifleOnStation;
        _this2.smgCount = res.data.smgCount;
        _this2.smgOnDuty = res.data.smgOnDuty;
        _this2.smgOnStation = res.data.smgOnStation;
        _this2.lmgCount = res.data.lmgCount;
        _this2.lmgOnDuty = res.data.lmgOnDuty;
        _this2.lmgOnStation = res.data.lmgOnStation;
        _this2.mgCount = res.data.mgCount;
        _this2.mgOnDuty = res.data.mgOnDuty;
        _this2.mgOnStation = res.data.mgOnStation;
        _this2.pistolCount = res.data.pistolCount;
        _this2.pistolOnDuty = res.data.pistolOnDuty;
        _this2.pistolOnStation = res.data.pistolOnStation;
        _this2.generate = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/report/report.vue?vue&type=template&id=811df398&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/report/report.vue?vue&type=template&id=811df398& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "d-flex justify-content-center" }, [
          _c("div", { staticClass: "w-75" }, [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", [
              _c("form", [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4 d-flex flex-column" }, [
                  _c("label", { attrs: { for: "opening_kote" } }, [
                    _vm._v("Time of Opening Kote")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.fromDate,
                        expression: "fromDate"
                      }
                    ],
                    attrs: {
                      type: "date",
                      name: "opening_kote",
                      id: "opening_kote"
                    },
                    domProps: { value: _vm.fromDate },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.fromDate = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-4 d-flex flex-column" }, [
                  _c("label", { attrs: { for: "closing_kote" } }, [
                    _vm._v("Time of closing Kote")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.toDate,
                        expression: "toDate"
                      }
                    ],
                    attrs: {
                      type: "date",
                      name: "closing_kote",
                      id: "closing_kote"
                    },
                    domProps: { value: _vm.toDate },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.toDate = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "d-flex justify-content-center" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.getData($event)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                                Go Report\n                            "
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.generate
        ? _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "mt-3" }, [
              _c("table", { staticClass: "table" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("tbody", [
                  _c("tr", [
                    _c("td", [_vm._v("Rifle")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            _vm.rifleCount -
                              (_vm.rifleOnDuty + _vm.rifleOnStation)
                          ) +
                          "\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.rifleOnDuty))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.rifleOnStation))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.rifleCount))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Pistol")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            _vm.pistolCount -
                              (_vm.pistolOnDuty + _vm.pistolOnStation)
                          ) +
                          "\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.pistolOnDuty))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.pistolOnStation))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.pistolCount))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("SMG")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            _vm.smgCount - (_vm.smgOnDuty + _vm.smgOnStation)
                          ) +
                          "\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.smgOnDuty))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.smgOnStation))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.smgCount))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("MG")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            _vm.mgCount - (_vm.mgOnDuty + _vm.mgOnStation)
                          ) +
                          "\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.mgOnDuty))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.mgOnStation))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.mgCount))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("LMG")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n                            " +
                          _vm._s(
                            _vm.lmgCount - (_vm.lmgOnDuty + _vm.lmgOnStation)
                          ) +
                          "\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.lmgOnDuty))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.lmgOnStation))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.lmgCount))])
                  ])
                ])
              ])
            ])
          ])
        : _vm._e()
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
      _c("img", {
        staticClass: "w-25 h-25",
        attrs: { alt: "logo", src: __webpack_require__(/*! ./logo.jpeg */ "./resources/js/components/admin/report/logo.jpeg") }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex justify-content-center" }, [
      _c("h1", [_vm._v("Admin Panel")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-4 d-flex flex-column" }, [
      _c("label", { staticClass: "font-weight-bold", attrs: { for: "kote" } }, [
        _vm._v("Kote")
      ]),
      _vm._v("\n                            Kote ID\n                        ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Weapon")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("In Kote")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("On Duty")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Out Station")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Total")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/report/logo.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/components/admin/report/logo.jpeg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.jpeg?c087a8443731297d7d7eecf784f00b61";

/***/ }),

/***/ "./resources/js/components/admin/report/report.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/report/report.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _report_vue_vue_type_template_id_811df398___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.vue?vue&type=template&id=811df398& */ "./resources/js/components/admin/report/report.vue?vue&type=template&id=811df398&");
/* harmony import */ var _report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/report/report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _report_vue_vue_type_template_id_811df398___WEBPACK_IMPORTED_MODULE_0__["render"],
  _report_vue_vue_type_template_id_811df398___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/report/report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/report/report.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/report/report.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/report/report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/report/report.vue?vue&type=template&id=811df398&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/report/report.vue?vue&type=template&id=811df398& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_template_id_811df398___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./report.vue?vue&type=template&id=811df398& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/report/report.vue?vue&type=template&id=811df398&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_template_id_811df398___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_vue_vue_type_template_id_811df398___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);