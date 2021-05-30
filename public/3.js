(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/addMember/add_member.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/addMember/add_member.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      name: "",
      email: "",
      password: "",
      gunNo: "",
      rfid: "",
      soldierNo: ""
    };
  },
  methods: {
    submitData: function submitData() {
      var formData = new FormData();
      formData.set("name", this.name);
      formData.set("email", this.email);
      formData.set("password", this.password);
      formData.set("gunNo", this.gunNo);
      formData.set("rfid", this.rfid);
      formData.set("soldierNo", this.soldierNo);
      var url = "/api/admin/add-user";
      axios.post(url, formData).then(function (res) {
        console.log(res);
        window.location.href = "/home";
      })["catch"](function (err) {
        alert("Error!");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/addMember/add_member.vue?vue&type=template&id=51fe9992&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/addMember/add_member.vue?vue&type=template&id=51fe9992& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    {
      staticStyle: {
        "background-image": "url('images/demo/backgrounds/adduserback.jpg')",
        height: "50rem",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center center",
        "background-attachment": "fixed"
      },
      attrs: { id: "app" }
    },
    [
      _c("navbar", { tag: "component" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "container mt-5",
          staticStyle: { "background-color": "#ffffff80" }
        },
        [
          _c("div", { staticClass: "row text-center justify-content-center" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-5" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.submitData($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticStyle: { display: "flex" } }, [
                      _vm._v("Name")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.name,
                          expression: "name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Name" },
                      domProps: { value: _vm.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.name = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticStyle: { display: "flex" } }, [
                      _vm._v("Rfid No")
                    ]),
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
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Rfid" },
                      domProps: { value: _vm.rfid },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.rfid = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticStyle: { display: "flex" } }, [
                      _vm._v("Email address")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.email,
                          expression: "email"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "email", placeholder: "Enter email" },
                      domProps: { value: _vm.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.email = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticStyle: { display: "flex" } }, [
                      _vm._v("Password")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.password,
                          expression: "password"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "password", placeholder: "Password" },
                      domProps: { value: _vm.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.password = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticStyle: { display: "flex" } }, [
                      _vm._v("Gun No")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.gunNo,
                          expression: "gunNo"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Gun No" },
                      domProps: { value: _vm.gunNo },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.gunNo = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { staticStyle: { display: "flex" } }, [
                      _vm._v("Soldier No")
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.soldierNo,
                          expression: "soldierNo"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Soldier No" },
                      domProps: { value: _vm.soldierNo },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.soldierNo = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [_vm._v("Submit")]
                  )
                ]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-3",
        staticStyle: {
          "max-width": "20%",
          "margin-top": "10rem",
          "margin-right": "7rem"
        }
      },
      [
        _c("img", {
          staticStyle: { width: "90%" },
          attrs: { src: "/img/add-member.png" }
        }),
        _vm._v(" "),
        _c("h3", { staticClass: "mt-3" }, [_vm._v("Add New User")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/addMember/add_member.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/admin/addMember/add_member.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_member_vue_vue_type_template_id_51fe9992___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_member.vue?vue&type=template&id=51fe9992& */ "./resources/js/components/admin/addMember/add_member.vue?vue&type=template&id=51fe9992&");
/* harmony import */ var _add_member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_member.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/addMember/add_member.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _add_member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_member_vue_vue_type_template_id_51fe9992___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_member_vue_vue_type_template_id_51fe9992___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/addMember/add_member.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/addMember/add_member.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/admin/addMember/add_member.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_member.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/addMember/add_member.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/addMember/add_member.vue?vue&type=template&id=51fe9992&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/admin/addMember/add_member.vue?vue&type=template&id=51fe9992& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_member_vue_vue_type_template_id_51fe9992___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./add_member.vue?vue&type=template&id=51fe9992& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/addMember/add_member.vue?vue&type=template&id=51fe9992&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_member_vue_vue_type_template_id_51fe9992___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_member_vue_vue_type_template_id_51fe9992___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);