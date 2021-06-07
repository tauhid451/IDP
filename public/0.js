(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/issue/issue.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/issue/issue.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      userName: "",
      soldier_no: "",
      userEmail: "",
      rfid: "",
      rfid_token: "",
      rfid_secret: "",
      gunType: "-1",
      purpose: "-1",
      duty: "-1",
      ledColor: null,
      isIssued: false,
      showInputForm: false
    };
  },
  methods: {
    unlockGun: function unlockGun() {
      var _this = this;

      var formData = new FormData();
      formData.set("gun_id", this.gunType);
      formData.set("purpose", this.purpose);
      formData.set("duty", this.duty);
      formData.set("rfid", this.rfid);
      var url = "/api/admin/issue";
      axios.post(url, formData).then(function (res) {
        console.log(res);
        alert("Issued!");
        if (_this.purpose == "firing") _this.ledColor = "11";else if (_this.purpose == "maintainance") _this.ledColor = "12";else _this.ledColor = "13";
        url = "http://192.168.0.125:5000/gun-lock?gun_no=1&light_no=" + _this.ledColor;
        axios.get(url).then(function (res) {
          window.location.href = "/home";
          console.log(res);
        })["catch"](function (err) {
          console.log(err);
        });
      })["catch"](function (err) {
        console.log(err);
      });
    },
    sendToken: function sendToken() {
      var _this2 = this;

      if (this.rfid.length == 0) return;
      var url = "/api/admin/rfid/" + this.rfid;
      axios.get(url).then(function (res) {
        console.log(res);

        try {
          var secret = Math.floor(Math.random() * 899999 + 100000);
          _this2.rfid_secret = secret;
          emailjs_com__WEBPACK_IMPORTED_MODULE_0___default.a.send("service_gs2qd6c", "template_qzet7so", // "service_war4haq",
          // "template_0p0pf1r",
          {
            to_name: res.data.name,
            from_name: "AMS ADMIN",
            message: secret,
            to_email: res.data.email
          }, "user_rLVOvpWirLrlTJXc5lqMn" // "user_rfwbsMUjACKZTfdsNkBRP"
          ).then(function (result) {
            console.log(result);
            window.alert("rfid token sned to ".concat(res.data.email));
          });
        } catch (error) {
          console.log({
            error: error
          });
        }
      });
      return;
    },
    checkIssued: function checkIssued() {
      var _this3 = this;

      if (this.rfid.length == 0) return;
      console.log(this.rfid_secret, this.rfid, this.rfid_token);

      if (this.rfid_token == this.rfid_secret) {
        var url = "/api/admin/rfid/" + this.rfid;
        axios.get(url).then(function (res) {
          console.log(res);
          _this3.gunType = res.data.body_number;
          _this3.isIssued = res.data.issued;
          _this3.userName = res.data.name;
          _this3.soldier_no = res.data.soldier_id;
          _this3.userEmail = res.data.email;
          _this3.showInputForm = true;
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        window.alert("rfid token not matched");
      }
    },
    lockGun: function lockGun() {
      var formData = new FormData();
      formData.set("rfid", this.rfid);
      var url = "/api/admin/deposite";
      axios.post(url, formData).then(function (res) {
        console.log(res);
        alert("Locked!");
        url = "http://192.168.0.125:5000/gun-lock?gun_no=0&light_no=00";
        axios.get(url).then(function (res) {
          console.log(res);
        })["catch"](function (err) {
          console.log(err);
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/issue/issue.vue?vue&type=style&index=0&id=79226cb0&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/issue/issue.vue?vue&type=style&index=0&id=79226cb0&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.profile-img[data-v-79226cb0] {\r\n    max-width: 120px;\r\n    border-radius: 50%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/emailjs-com/source/index.js":
/*!**************************************************!*\
  !*** ./node_modules/emailjs-com/source/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailJSResponseStatus = exports.sendForm = exports.send = exports.init = void 0;
var EmailJSResponseStatus_1 = __webpack_require__(/*! ./models/EmailJSResponseStatus */ "./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js");
Object.defineProperty(exports, "EmailJSResponseStatus", { enumerable: true, get: function () { return EmailJSResponseStatus_1.EmailJSResponseStatus; } });
var UI_1 = __webpack_require__(/*! ./services/ui/UI */ "./node_modules/emailjs-com/source/services/ui/UI.js");
var _userID = null;
var _origin = 'https://api.emailjs.com';
function sendPost(url, data, headers) {
    if (headers === void 0) { headers = {}; }
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function (event) {
            var responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', function (event) {
            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target));
        });
        xhr.open('POST', url, true);
        for (var key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
        xhr.send(data);
    });
}
function appendGoogleCaptcha(templatePrams) {
    var element = document && document.getElementById('g-recaptcha-response');
    if (element && element.value) {
        templatePrams['g-recaptcha-response'] = element.value;
    }
    element = null;
    return templatePrams;
}
function fixIdSelector(selector) {
    if (selector[0] !== '#' && selector[0] !== '.') {
        return '#' + selector;
    }
    return selector;
}
/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
function init(userID, origin) {
    _userID = userID;
    _origin = origin || 'https://api.emailjs.com';
}
exports.init = init;
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {Object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function send(serviceID, templateID, templatePrams, userID) {
    var params = {
        lib_version: '2.6.4',
        user_id: userID || _userID,
        service_id: serviceID,
        template_id: templateID,
        template_params: appendGoogleCaptcha(templatePrams)
    };
    return sendPost(_origin + '/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
}
exports.send = send;
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function sendForm(serviceID, templateID, form, userID) {
    if (typeof form === 'string') {
        form = document.querySelector(fixIdSelector(form));
    }
    if (!form || form.nodeName !== 'FORM') {
        throw 'Expected the HTML form element or the style selector of form';
    }
    UI_1.UI.progressState(form);
    var formData = new FormData(form);
    formData.append('lib_version', '2.6.4');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', userID || _userID);
    return sendPost(_origin + '/api/v1.0/email/send-form', formData)
        .then(function (response) {
        UI_1.UI.successState(form);
        return response;
    }, function (error) {
        UI_1.UI.errorState(form);
        return Promise.reject(error);
    });
}
exports.sendForm = sendForm;
exports.default = {
    init: init,
    send: send,
    sendForm: sendForm
};


/***/ }),

/***/ "./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js":
/*!*************************************************************************!*\
  !*** ./node_modules/emailjs-com/source/models/EmailJSResponseStatus.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailJSResponseStatus = void 0;
var EmailJSResponseStatus = /** @class */ (function () {
    function EmailJSResponseStatus(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
    return EmailJSResponseStatus;
}());
exports.EmailJSResponseStatus = EmailJSResponseStatus;


/***/ }),

/***/ "./node_modules/emailjs-com/source/services/ui/UI.js":
/*!***********************************************************!*\
  !*** ./node_modules/emailjs-com/source/services/ui/UI.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.clearAll = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.remove(this.DONE);
        form.classList.remove(this.ERROR);
    };
    UI.progressState = function (form) {
        this.clearAll(form);
        form.classList.add(this.PROGRESS);
    };
    UI.successState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.DONE);
    };
    UI.errorState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.ERROR);
    };
    UI.PROGRESS = 'emailjs-sending';
    UI.DONE = 'emailjs-success';
    UI.ERROR = 'emailjs-error';
    return UI;
}());
exports.UI = UI;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/issue/issue.vue?vue&type=style&index=0&id=79226cb0&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/issue/issue.vue?vue&type=style&index=0&id=79226cb0&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./issue.vue?vue&type=style&index=0&id=79226cb0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/issue/issue.vue?vue&type=style&index=0&id=79226cb0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/issue/issue.vue?vue&type=template&id=79226cb0&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/issue/issue.vue?vue&type=template&id=79226cb0&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        "background-image": "url('images/demo/backgrounds/rfid.jpg')",
        height: "50rem",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center center",
        "background-attachment": "fixed"
      }
    },
    [
      _c("navbar", { tag: "component" }),
      _vm._v(" "),
      _vm.showInputForm
        ? _c("div", { staticClass: "container text-center mt-5" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("h3", { staticClass: "mt-2" }, [
              _vm._v("Name: " + _vm._s(_vm.userName))
            ]),
            _vm._v(" "),
            _c("h4", [_vm._v("Soldier no: " + _vm._s(_vm.soldier_no))]),
            _vm._v(" "),
            _c("h4", [_vm._v("Email: " + _vm._s(_vm.userEmail))])
          ])
        : _vm._e(),
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
                  [_vm._v("Body no of gun")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "w-75 p-2" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.gunType) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              !_vm.isIssued
                ? _c("div", { staticClass: "row mb-3" }, [
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
                        _c("option", { attrs: { value: "duty" } }, [
                          _vm._v("Duty")
                        ])
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.isIssued
                ? _c("div", { staticClass: "row mb-3" }, [
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
                          _vm._v("On Station")
                        ])
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.isIssued
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: { click: _vm.unlockGun }
                    },
                    [_vm._v("\n                Unlock\n            ")]
                  )
                : _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: { click: _vm.lockGun }
                    },
                    [_vm._v("\n                Lock\n            ")]
                  )
            ])
          : _c(
              "div",
              {
                staticClass: "m-5 text-center",
                staticStyle: { "margin-top": "9rem !important" }
              },
              [
                _c(
                  "h3",
                  {
                    staticStyle: {
                      "font-size": "xx-large",
                      "font-weight": "bolder",
                      color: "#000000 !important"
                    }
                  },
                  [_vm._v("\n                Insert RFID\n            ")]
                ),
                _vm._v(" "),
                _c("label", { attrs: { for: "rfid" } }, [_vm._v("RFID")]),
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
                  attrs: { type: "text", id: "rfid", autofocus: "" },
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
                _c(
                  "label",
                  { staticClass: "text-white", attrs: { for: "rfid_token" } },
                  [_vm._v("RFID Token")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.rfid_token,
                      expression: "rfid_token"
                    }
                  ],
                  attrs: { type: "text", id: "rfid_token", autofocus: "" },
                  domProps: { value: _vm.rfid_token },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.rfid_token = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "mt-3" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: { click: _vm.sendToken }
                    },
                    [
                      _vm._v(
                        "\n                    Gen Token\n                "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mt-3" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: { click: _vm.checkIssued }
                    },
                    [
                      _vm._v(
                        "\n                    Issue/Deposit\n                "
                      )
                    ]
                  )
                ])
              ]
            )
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
    return _c("div", [
      _c("img", {
        staticClass: "profile-img",
        attrs: { src: "profile_img/avatar2.png", alt: "DP" }
      })
    ])
  }
]
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
/* harmony import */ var _issue_vue_vue_type_template_id_79226cb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./issue.vue?vue&type=template&id=79226cb0&scoped=true& */ "./resources/js/components/issue/issue.vue?vue&type=template&id=79226cb0&scoped=true&");
/* harmony import */ var _issue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./issue.vue?vue&type=script&lang=js& */ "./resources/js/components/issue/issue.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _issue_vue_vue_type_style_index_0_id_79226cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./issue.vue?vue&type=style&index=0&id=79226cb0&scoped=true&lang=css& */ "./resources/js/components/issue/issue.vue?vue&type=style&index=0&id=79226cb0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _issue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _issue_vue_vue_type_template_id_79226cb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _issue_vue_vue_type_template_id_79226cb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "79226cb0",
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

/***/ "./resources/js/components/issue/issue.vue?vue&type=style&index=0&id=79226cb0&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/issue/issue.vue?vue&type=style&index=0&id=79226cb0&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_vue_vue_type_style_index_0_id_79226cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./issue.vue?vue&type=style&index=0&id=79226cb0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/issue/issue.vue?vue&type=style&index=0&id=79226cb0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_vue_vue_type_style_index_0_id_79226cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_vue_vue_type_style_index_0_id_79226cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_vue_vue_type_style_index_0_id_79226cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_vue_vue_type_style_index_0_id_79226cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/issue/issue.vue?vue&type=template&id=79226cb0&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/issue/issue.vue?vue&type=template&id=79226cb0&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_vue_vue_type_template_id_79226cb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./issue.vue?vue&type=template&id=79226cb0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/issue/issue.vue?vue&type=template&id=79226cb0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_vue_vue_type_template_id_79226cb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_issue_vue_vue_type_template_id_79226cb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);