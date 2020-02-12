function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pg/home-pg.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-pg/home-pg.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomePgHomePgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"container py-4\">\n    <div class=\"d-flex justify-content-between align-items-center\">\n        <nav id=\"dropMenu\">\n            <a href=\"\">Home</a>\n            <a href=\"\">Shop</a>\n            <a href=\"\">Journal</a>\n        </nav>\n        <a href=\"\" id=\"logo\"></a>\n        <nav id=\"logMenu\">\n            <a href=\"\">Login</a>\n            <a href=\"\" id=\"search\"></a>\n            <a href=\"\" id=\"like\"></a>\n            <a href=\"\" id=\"cart\"></a>\n        </nav>\n    </div>\n</header>\n<section class=\"container py-4\" id=\"goMobile\">\n    <div class=\"d-flex flex-column flex-lg-row align-items-center justify-content-center\">\n        <article>\n            <h1>MrVR Web Application Designer</h1>\n            <p>Multipurpose HTML template for Mobile and Tablet. Clean design and more feature.</p>\n            <div class=\"scanTab d-flex align-items-start\">\n                <img src=\"assets/images/gofruite.png\" alt=\"gofruite\" class=\"mr-4\" />\n                <a href=\"\">\n                    <img src=\"assets/images/curlyarrow2.png\" alt=\"curlyarrow2\" /><br />\n                    View Demo Yes It's Working\n                </a>\n            </div>\n        </article>\n        <aside class=\"mobileSec mt-5 mt-lg-0 ml-5\">\n            <owl-carousel\n            [options]=\"owlOption\"\n            [items]=\"images\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"item\" *ngFor=\"let img of images;let i = index\" >\n                    <img [src]=\"img\" [alt]=\"img\">\n                    <a [href]=\"img.BannerUrl\" target=\"_blank\">{{img.BannerTitle}}</a>\n                </div>\n            </owl-carousel>\n        </aside>\n    </div>\n</section>\n<section id=\"infoSec\" class=\"container py-5\">\n    <a href=\"\" id=\"bigLogo\"></a>\n    <p>GoMobile:UX Multipurpose Mobile HTML Template</p>\n    <div class=\"d-flex flex-column flex-lg-row align-items-center justify-content-center my-5\">\n        <aside class=\"mobileSec mr-lg-5\">\n            <owl-carousel\n            [options]=\"owlOption\"\n            [items]=\"images\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"item\" *ngFor=\"let img of images;let i = index\" >\n                    <img [src]=\"img\" [alt]=\"img\">\n                    <a [href]=\"img.BannerUrl\" target=\"_blank\">{{img.BannerTitle}}</a>\n                </div>\n            </owl-carousel>\n        </aside>\n        <article class=\"mt-lg-0 mt-4 ml-lg-5 sideSec\">\n            <h2>Bootstrap</h2>\n            <p>Version 4.3.1</p>\n            <div class=\"scanTab d-flex align-items-start justify-content-between my-5\">\n                <a href=\"\">\n                    <img src=\"assets/images/curlyarrow2.png\" alt=\"curlyarrow2\" /><br />\n                    View Demo Yes It's Working\n                </a>\n                <img src=\"assets/images/gofruite.png\" alt=\"gofruite\" />\n            </div>\n            <a href=\"\" class=\"btn\">Buy Now &rarr;</a>\n        </article>\n    </div>\n    <article id=\"mobileInfo\">\n        <p>Go Mobile UX Multipurpose Mobile HTML Template, GoMobileUX is HTML, CSS and js templates. We have covered major HTML elements. Also customized widget elements with this. We’ll also expand it and always HTML 5 and major use of CSS3 we targeted.</p>\n        <p>The framework we have used are  bootstrap 4.3.1 version and Framework 7  v5.1.0. So its uses flex-box properties and gives much smooth responsive utilities. The framework itself comes with responsive adjust into major devices small to large. Bootstrap templates and Framework 7 designs also have wide range of Mobile HTML Template.</p>\n        <p>As the latest technology and framework targeted it comes with Major all latest versions of browser Chrome, Safari, Firefox, IE 10+, Edge and opera. We also consider devices layout will be responsive which gives new touch.</p>\n        <p>Images: Dummy/Demo images used from pixabay.com. You can check licenses with respective website and use it.</p>\n    </article>\n    <div class=\"row text-center my-5\" id=\"frameworkSec\">\n        <aside class=\"col-12 col-lg-6\">\n            <aside class=\"mobileSec\">\n                <owl-carousel\n                [options]=\"owlOption\"\n                [items]=\"images\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                    <div class=\"item\" *ngFor=\"let img of images;let i = index\" >\n                        <img [src]=\"img\" [alt]=\"img\">\n                        <a [href]=\"img.BannerUrl\" target=\"_blank\">{{img.BannerTitle}}</a>\n                    </div>\n                </owl-carousel>\n            </aside>\n            <h3 class=\"red\">Framework 7</h3>\n            <p>core js, Version 5.1.0</p>\n        </aside>\n        <aside class=\"col-12 col-lg-6\">\n            <aside class=\"mobileSec\">\n                <owl-carousel\n                [options]=\"owlOption\"\n                [items]=\"images\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                    <div class=\"item\" *ngFor=\"let img of images;let i = index\" >\n                        <img [src]=\"img\" [alt]=\"img\">\n                        <a [href]=\"img.BannerUrl\" target=\"_blank\">{{img.BannerTitle}}</a>\n                    </div>\n                </owl-carousel>\n            </aside>\n            <h3 class=\"blue\">Framework 7 Vue</h3>\n            <p>Starter kit F7 Version 5.1.0</p>\n        </aside>\n    </div>\n</section>\n\n<section id=\"scanBar\" class=\"container\">\n    <div class=\"row\">\n        <aside class=\"col-12 col-md-5\">\n            <div class=\"scanTab d-flex align-items-start justify-content-between\">\n                <a href=\"\">\n                    <img src=\"assets/images/curlyarrow2.png\" alt=\"curlyarrow2\" /><br />\n                    View Demo Yes It's Working\n                </a>\n                <img src=\"assets/images/gofruite.png\" alt=\"gofruite\" />\n            </div>\n        </aside>\n        <aside class=\"col-12 col-md-2 my-4 my-md-0\"></aside>\n        <aside class=\"col-12 col-md-5\">\n            <div class=\"scanTab d-flex align-items-start justify-content-between\">\n                <a href=\"\">\n                    <img src=\"assets/images/curlyarrow2.png\" alt=\"curlyarrow2\" /><br />\n                    View Demo Yes It's Working\n                </a>\n                <img src=\"assets/images/gofruite.png\" alt=\"gofruite\" />\n            </div>\n        </aside>\n    </div>\n</section>\n\n<section id=\"kitInfo\" class=\"container\">\n    <aside class=\"mobileSec mx-auto\">\n        <owl-carousel\n        [options]=\"owlOption\"\n        [items]=\"images\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n            <div class=\"item\" *ngFor=\"let img of images;let i = index\" >\n                <img [src]=\"img\" [alt]=\"img\">\n                <a [href]=\"img.BannerUrl\" target=\"_blank\">{{img.BannerTitle}}</a>\n            </div>\n        </owl-carousel>\n    </aside>\n    <h2>Angular Starterkit</h2>\n    <p>Angular Version 8</p>\n\n    <div class=\"scanTab d-flex align-items-start justify-content-between\">\n        <a href=\"\">\n            <img src=\"assets/images/curlyarrow2.png\" alt=\"curlyarrow2\" /><br />\n            View Demo Yes It's Working\n        </a>\n        <img src=\"assets/images/gofruite.png\" alt=\"gofruite\" />\n    </div>\n    <img src=\"assets/images/cover-1.png\" alt=\"cover\" class=\"bigImg\" />\n</section>\n\n<section id=\"designSec\" class=\"py-4\">\n    <div class=\"container\">\n        <div class=\"d-flex flex-column flex-md-row justify-content-center align-items-center\">\n            <article>\n                <h2>Unique Design</h2>\n                <h4>Easy to customize and update</h4>\n                <p>GoMobileUX comes with a lot of unique design, elements with 50+ pages and different demos.</p>\n            </article>\n            <img src=\"assets/images/GoMobileUX-1-content-graphics-2.png\" alt=\"\" />\n        </div>\n    </div>\n</section>\n\n<section id=\"moreFeature\" class=\"py-4\">\n    <div class=\"container\">\n        <div class=\"d-flex flex-column flex-md-row justify-content-center align-items-center\">\n            <img src=\"assets/images/GoMobileUX-1-content-graphics-4.png\" alt=\"\" />\n            <article>\n                <h2>Menu & Navigation</h2>\n                <h4>Provide more elasticity</h4>\n                <p>Template comes with 3 kinds of menu Left side menu, Footer Menu and Right side filter area. Which gives more space to manage primary and secondary content. Go Mobile UX Multipurpose template.</p>\n            </article>\n        </div>\n    </div>\n</section>\n\n<section id=\"quickShare\" class=\"py-4\">\n    <div class=\"container\">\n        <div class=\"d-flex flex-column flex-md-row justify-content-center align-items-center\">\n            <article>\n                <h2>Quick Share</h2>\n                <h4>Modal box with share options</h4>\n                <p>We have placed share modal box for quick sharing. Also accessible as user’s thumb near to screen at bottom part in mobile devices. Also added recently connected people so user can easily share with near one.  Mobile HTML Template.</p>\n            </article>\n            <img src=\"assets/images/GoMobileUX-1-content-graphics-5.png\" alt=\"\" />\n        </div>\n    </div>\n</section>\n\n<section id=\"moreDeme\" class=\"py-4\">\n    <div class=\"container\">\n        <h2>More Demo | Mobile HTML Template</h2>\n        <p>Showcasing different colors scheme and demo applications</p>\n        <div class=\"my-5 d-flex flex-column flex-lg-row align-items-center justify-content-center\">\n            <aside class=\"mobileSec mr-lg-5\">\n                <owl-carousel\n                [options]=\"owlOption\"\n                [items]=\"images\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                    <div class=\"item\" *ngFor=\"let img of images;let i = index\" >\n                        <img [src]=\"img\" [alt]=\"img\">\n                        <a [href]=\"img.BannerUrl\" target=\"_blank\">{{img.BannerTitle}}</a>\n                    </div>\n                </owl-carousel>\n            </aside>\n            <article class=\"mt-4 mt-lg-0\">\n                <h3>GoFurniture</h3>\n                <p>bootstrap 4</p>\n                <p>Shop for a furniture and wooden material with brown color scheme</p>\n                <div class=\"scanTab d-flex align-items-start justify-content-between\">\n                    <a href=\"\">\n                        <img src=\"assets/images/curlyarrow2.png\" alt=\"curlyarrow2\" /><br />\n                        View Demo Yes It's Working\n                    </a>\n                    <img src=\"assets/images/gofruite.png\" alt=\"gofruite\" />\n                </div>\n            </article>\n        </div>\n        <div class=\"d-flex flex-column flex-lg-row align-items-center justify-content-center mt-3\">\n            <article>\n                <h3>GoElectro</h3>\n                <p>bootstrap 4</p>\n                <p>Shop for a electronics and electric material with blue color scheme</p>\n                <div class=\"scanTab d-flex align-items-start justify-content-between\">\n                    <a href=\"\">\n                        <img src=\"assets/images/curlyarrow2.png\" alt=\"curlyarrow2\" /><br />\n                        View Demo Yes It's Working\n                    </a>\n                    <img src=\"assets/images/gofruite.png\" alt=\"gofruite\" />\n                </div>\n            </article>\n            <aside class=\"mobileSec mt-4 mt-lg-0 ml-lg-5\">\n                <owl-carousel\n                [options]=\"owlOption\"\n                [items]=\"images\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                    <div class=\"item\" *ngFor=\"let img of images;let i = index\" >\n                        <img [src]=\"img\" [alt]=\"img\">\n                        <a [href]=\"img.BannerUrl\" target=\"_blank\">{{img.BannerTitle}}</a>\n                    </div>\n                </owl-carousel>\n            </aside>\n        </div>\n    </div>\n</section>\n\n<section id=\"tabResponsive\" class=\"py-5\">\n    <div class=\"container\">\n        <h2>Go ahead with Tablet Responsive</h2>\n        <p>Template gives more flexibility with its own Elastic and Responsiveness</p>\n        <aside class=\"mobileSec\">\n            <owl-carousel\n            [options]=\"owlOption\"\n            [items]=\"imagesBig\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"item\" *ngFor=\"let img of imagesBig;let i = index\" >\n                    <img [src]=\"img\" [alt]=\"img\">\n                    <a [href]=\"img.BannerUrl\" target=\"_blank\">{{img.BannerTitle}}</a>\n                </div>\n            </owl-carousel>\n        </aside>\n\n        <div class=\"scanTab d-flex align-items-start justify-content-between my-5\">\n            <a href=\"\">\n                <img src=\"assets/images/curlyarrow2.png\" alt=\"curlyarrow2\" /><br />\n                View Demo Yes It's Working\n            </a>\n            <img src=\"assets/images/gofruite.png\" alt=\"gofruite\" />\n        </div>\n        <a href=\"\" class=\"btn\">Buy Now &rarr;</a>\n\n        <h2 class=\"mt-5\">Thank you!</h2>\n        <p>Do Share with world</p>\n    </div>\n</section>\n\n<footer class=\"py-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"col-12 col-md-3\">\n                <h4>About Us</h4>\n                <a href=\"\">Our Company</a>\n                <a href=\"\">Portfolio</a>\n                <a href=\"\">Journal</a>\n                <a href=\"\">Contact</a>\n            </nav>\n            <nav class=\"col-12 col-md-3\">\n                <h4>Shop</h4>\n                <a href=\"\">Graphics</a>\n                <a href=\"\">Mobile</a>\n                <a href=\"\">Website</a>\n            </nav>\n            <nav class=\"col-12 col-md-3\">\n                <h4>How We Can Help</h4>\n                <a href=\"\">FAQs</a>\n                <a href=\"\">Terms & Conditions</a>\n                <a href=\"\">Privacy Policy</a>\n            </nav>\n            <aside class=\"col-12 col-md-3\">\n                <form action=\"\" class=\"d-flex justify-content-between align-items-center\">\n                    <input type=\"text\" placeholder=\"Type your search here\" />\n                    <button type=\"submit\"></button>\n                </form>\n\n                <h4 class=\"mt-4\">Follow Us</h4>\n                <a href=\"\" class=\"facebook\"></a>\n                <a href=\"\" class=\"twitter\"></a>\n                <a href=\"\" class=\"instagram\"></a>\n                <a href=\"\" class=\"contact\"></a>\n\n                <h4 class=\"mt-4\">Payment Options</h4>\n                <a href=\"\" id=\"paypal\"></a>\n            </aside>\n        </div>\n        <div id=\"copyRight\">\n            &copy; 2020 by Maxartkiler\n        </div>\n    </div>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_pg_home_pg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-pg/home-pg.component */
    "./src/app/home-pg/home-pg.component.ts");

    var routes = [{
      path: "",
      component: _home_pg_home_pg_component__WEBPACK_IMPORTED_MODULE_3__["HomePgComponent"],
      pathMatch: "full"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'goMobile';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-owl-carousel */
    "./node_modules/ngx-owl-carousel/index.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_pg_home_pg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-pg/home-pg.component */
    "./src/app/home-pg/home-pg.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_pg_home_pg_component__WEBPACK_IMPORTED_MODULE_6__["HomePgComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3__["OwlModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home-pg/home-pg.component.scss":
  /*!************************************************!*\
    !*** ./src/app/home-pg/home-pg.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomePgHomePgComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "aside.mobileSec {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  max-width: 340px;\n  height: 580px;\n  border-radius: 10px;\n  border: #2B2B2B solid 4px;\n  box-shadow: 0 2px 20px 3px #A8A8A8;\n}\n@media (min-width: 576px) {\n  aside.mobileSec {\n    height: 690px;\n  }\n}\ndiv.scanTab img {\n  width: 100px;\n}\ndiv.scanTab a {\n  width: 120px;\n  text-align: left;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  color: #2b2b2b;\n  -webkit-transition: 0.2s all linear;\n  transition: 0.2s all linear;\n  text-decoration: none;\n}\ndiv.scanTab a:hover {\n  color: #ff6f00;\n}\ndiv.scanTab a img {\n  width: 80px;\n  margin-bottom: 8px;\n}\na.btn {\n  color: #ffffff;\n  background-color: #000000;\n  border-radius: 20px;\n  font-weight: 500;\n  font-size: 15px;\n  -webkit-transition: 0.2s all linear;\n  transition: 0.2s all linear;\n}\na.btn:hover {\n  background-color: #FF6F00;\n}\nheader nav#logMenu a,\nheader nav#dropMenu a {\n  margin-right: 25px;\n  font-size: 15px;\n  font-weight: 500;\n  text-decoration: none;\n  color: #2B2B2B;\n}\nheader nav#logMenu a:last-child,\nheader nav#dropMenu a:last-child {\n  margin-right: 0;\n}\nheader nav#logMenu a:hover,\nheader nav#dropMenu a:hover {\n  text-decoration: underline;\n}\nheader nav#logMenu a#search,\nheader nav#logMenu a#like,\nheader nav#logMenu a#cart {\n  display: inline-block;\n  vertical-align: middle;\n  width: 18px;\n  height: 18px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\nheader nav#logMenu a#search {\n  background-image: url('search.svg');\n}\nheader nav#logMenu a#like {\n  background-image: url('heart.svg');\n}\nheader nav#logMenu a#cart {\n  background-image: url('bag.svg');\n}\nheader a#logo {\n  width: 50px;\n  height: 50px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url('maxartkiller.png');\n}\nsection#goMobile article {\n  width: 100%;\n  max-width: 550px;\n}\nsection#goMobile article h1 {\n  font-weight: 800;\n  font-size: 40px;\n  color: #2b2b2b;\n}\n@media (min-width: 768px) {\n  section#goMobile article h1 {\n    font-size: 60px;\n  }\n}\nsection#goMobile article p {\n  font-size: 18px;\n  font-weight: 500;\n  color: #898989;\n  margin-bottom: 20px;\n}\nsection#infoSec {\n  text-align: center;\n}\nsection#infoSec a#bigLogo {\n  display: inline-block;\n  width: 300px;\n  height: 80px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-image: url('logo-mobileux-1.png');\n}\nsection#infoSec article.sideSec {\n  width: 100%;\n  max-width: 350px;\n}\nsection#infoSec article h2 {\n  color: #274EBB;\n}\nsection#infoSec article#mobileInfo {\n  margin: 80px auto;\n  width: 100%;\n  max-width: 750px;\n}\nsection#infoSec article#mobileInfo p {\n  text-align: left;\n  font-size: 15px;\n  line-height: 30px;\n}\nsection#infoSec div#frameworkSec aside.mobileSec {\n  margin: 0 auto;\n}\nsection#infoSec div#frameworkSec h3 {\n  margin-top: 40px;\n}\nsection#infoSec div#frameworkSec h3.red {\n  color: #C23332;\n}\nsection#infoSec div#frameworkSec h3.blue {\n  color: #1D78AA;\n}\nsection#infoSec div#frameworkSec p {\n  color: #898989;\n}\nsection#scanBar {\n  padding: 30px 0;\n}\nsection#scanBar div.row {\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n}\nsection#kitInfo {\n  text-align: center;\n  margin-top: 80px;\n  margin-bottom: 80px;\n}\nsection#kitInfo h2 {\n  color: #C23332;\n  margin-top: 30px;\n}\nsection#kitInfo p {\n  color: #898989;\n}\nsection#kitInfo div.scanTab {\n  width: 100%;\n  max-width: 500px;\n  margin: 80px auto;\n}\nsection#kitInfo img.bigImg {\n  width: 100%;\n  max-width: 800px;\n}\nsection#designSec {\n  background-color: #F4D9E1;\n}\nsection#quickShare article,\nsection#moreFeature article,\nsection#designSec article {\n  width: 100%;\n  max-width: 450px;\n}\nsection#quickShare article h2,\nsection#moreFeature article h2,\nsection#designSec article h2 {\n  font-weight: normal;\n  font-size: 35px;\n}\nsection#quickShare article h4,\nsection#moreFeature article h4,\nsection#designSec article h4 {\n  font-size: 18px;\n  font-weight: normal;\n  margin: 10px 0;\n}\nsection#quickShare article p,\nsection#moreFeature article p,\nsection#designSec article p {\n  color: #898989;\n  font-size: 15px;\n}\nsection#quickShare img,\nsection#moreFeature img,\nsection#designSec img {\n  width: 300px;\n}\nsection#moreDeme {\n  text-align: center;\n}\nsection#moreDeme h2 {\n  font-size: 40px;\n}\nsection#moreDeme h3 {\n  font-size: 30px;\n}\nsection#moreDeme p {\n  font-size: 18px;\n}\nsection#moreDeme article {\n  width: 100%;\n  max-width: 400px;\n}\nsection#tabResponsive {\n  text-align: center;\n}\nsection#tabResponsive div.scanTab,\nsection#tabResponsive aside.mobileSec {\n  width: 100%;\n  max-width: 750px;\n  margin: 0 auto;\n}\nsection#tabResponsive div.scanTab {\n  max-width: 300px;\n}\nsection#tabResponsive aside.mobileSec {\n  height: 200px;\n}\n@media (min-width: 576px) {\n  section#tabResponsive aside.mobileSec {\n    height: 300px;\n  }\n}\n@media (min-width: 768px) {\n  section#tabResponsive aside.mobileSec {\n    height: 500px;\n  }\n}\nfooter {\n  background-color: #F5F5F5;\n}\nfooter h4 {\n  font-size: 15px;\n  font-weight: 500;\n  color: #898989;\n}\nfooter a {\n  display: inline-block;\n  width: 100%;\n  margin: 3px 0;\n  font-size: 13px;\n  color: #181818;\n}\nfooter a.facebook,\nfooter a.twitter,\nfooter a.instagram,\nfooter a.contact {\n  width: 20px;\n  height: 20px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-right: 8px;\n}\nfooter a.facebook {\n  background-image: url('facebook.svg');\n}\nfooter a.twitter {\n  background-image: url('twitter.svg');\n}\nfooter a.instagram {\n  background-image: url('instagram.svg');\n}\nfooter a.contact {\n  background-image: url('at.svg');\n}\nfooter form {\n  border-bottom: #898989 solid 2px;\n  padding-bottom: 5px;\n}\nfooter form input[type=text] {\n  width: calc(100% - 25px);\n  border: none;\n  background-color: transparent;\n}\nfooter form button[type=submit] {\n  border: none;\n  width: 20px;\n  height: 20px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url('search.svg');\n}\nfooter div#copyRight {\n  font-size: 12px;\n  color: #2b2b2b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wZy9EOlxcTVJWUkNvcnBcXEZlYl8wM19GaXJlU3RhcnRlclxcZ29Nb2JpbGUvc3JjXFxhcHBcXGhvbWUtcGdcXGhvbWUtcGcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGcvaG9tZS1wZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS1wZy9EOlxcTVJWUkNvcnBcXEZlYl8wM19GaXJlU3RhcnRlclxcZ29Nb2JpbGUvc3JjXFxhc3NldHNcXHNjc3NcXGxpYi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBRUEsa0NBQUE7QUNESjtBQ1JHO0VGQUg7SUFXUSxhQUFBO0VDQ047QUFDRjtBREVBO0VBQ0ksWUFBQTtBQ0NKO0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0VBQ0EscUJBQUE7QUNDSjtBREVBO0VBQXNCLGNBQUE7QUNFdEI7QURBQTtFQUFvQixXQUFBO0VBQWEsa0JBQUE7QUNLakM7QURIQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtBQ01KO0FESEE7RUFBYyx5QkFBQTtBQ09kO0FETEE7O0VBRUksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNRSjtBRExBOztFQUNtQyxlQUFBO0FDU25DO0FEUEE7O0VBQzhCLDBCQUFBO0FDVzlCO0FEVEE7OztFQUdJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ1lKO0FEVEE7RUFBOEIsbUNBQUE7QUNhOUI7QURYQTtFQUE0QixrQ0FBQTtBQ2U1QjtBRGJBO0VBQTRCLGdDQUFBO0FDaUI1QjtBRGZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtBQ2tCSjtBRGRBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDaUJKO0FEZEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDaUJKO0FDMUdHO0VGc0ZIO0lBS1EsZUFBQTtFQ21CTjtBQUNGO0FEaEJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDbUJKO0FEaEJBO0VBQ0ksa0JBQUE7QUNtQko7QURoQkE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7QUNtQko7QURoQkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNtQko7QURoQkE7RUFBNkIsY0FBQTtBQ29CN0I7QURqQkE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ29CSjtBRGpCQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDb0JKO0FEakJBO0VBQW1ELGNBQUE7QUNxQm5EO0FEbkJBO0VBQXNDLGdCQUFBO0FDdUJ0QztBRHJCQTtFQUEwQyxjQUFBO0FDeUIxQztBRHZCQTtFQUEyQyxjQUFBO0FDMkIzQztBRHpCQTtFQUFxQyxjQUFBO0FDNkJyQztBRDNCQTtFQUFrQixlQUFBO0FDK0JsQjtBRDdCQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNnQ0o7QUQ3QkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNnQ0o7QUQ3QkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNnQ0o7QUQ3QkE7RUFBb0IsY0FBQTtBQ2lDcEI7QUQvQkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2tDSjtBRC9CQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ2tDSjtBRC9CQTtFQUNJLHlCQUFBO0FDa0NKO0FEL0JBOzs7RUFHSSxXQUFBO0VBQ0EsZ0JBQUE7QUNrQ0o7QUQvQkE7OztFQUdJLG1CQUFBO0VBQ0EsZUFBQTtBQ2tDSjtBRC9CQTs7O0VBR0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ2tDSjtBRC9CQTs7O0VBR0ksY0FBQTtFQUNBLGVBQUE7QUNrQ0o7QUQvQkE7OztFQUV3QixZQUFBO0FDbUN4QjtBRGhDQTtFQUNJLGtCQUFBO0FDbUNKO0FEaENBO0VBQXNCLGVBQUE7QUNvQ3RCO0FEbENBO0VBQXNCLGVBQUE7QUNzQ3RCO0FEcENBO0VBQ0ksZUFBQTtBQ3VDSjtBRHBDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ3VDSjtBRHBDQTtFQUNJLGtCQUFBO0FDdUNKO0FEcENBOztFQUVJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUN1Q0o7QURwQ0E7RUFBb0MsZ0JBQUE7QUN3Q3BDO0FEdENBO0VBQ0ksYUFBQTtBQ3lDSjtBQ3ZTRztFRjZQSDtJQUdRLGFBQUE7RUMyQ047QUFDRjtBQ3JTRztFRnNQSDtJQU1RLGFBQUE7RUM2Q047QUFDRjtBRDFDQTtFQUNJLHlCQUFBO0FDNkNKO0FEMUNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQzZDSjtBRDFDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQzZDSjtBRDFDQTs7OztFQUlJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUM2Q0o7QUQxQ0E7RUFBb0IscUNBQUE7QUM4Q3BCO0FEN0NBO0VBQW1CLG9DQUFBO0FDaURuQjtBRGhEQTtFQUFxQixzQ0FBQTtBQ29EckI7QURuREE7RUFBbUIsK0JBQUE7QUN1RG5CO0FEckRBO0VBQ0ksZ0NBQUE7RUFDQSxtQkFBQTtBQ3dESjtBRHJEQTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDd0RKO0FEckRBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7QUN3REo7QURyREE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ3dESiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGcvaG9tZS1wZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zY3NzL2xpYi5zY3NzJztcblxuYXNpZGUubW9iaWxlU2VjIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDM0MHB4O1xuICAgIGhlaWdodDogNTgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6ICMyQjJCMkIgc29saWQgNHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMjBweCAzcHggI0E4QThBODtcbiAgICBib3gtc2hhZG93OiAwIDJweCAyMHB4IDNweCAjQThBOEE4O1xuICAgIEBpbmNsdWRlIHNtIHtcbiAgICAgICAgaGVpZ2h0OiA2OTBweDtcbiAgICB9XG59XG5cbmRpdi5zY2FuVGFiIGltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG5kaXYuc2NhblRhYiBhIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogIzJiMmIyYjtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBsaW5lYXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5kaXYuc2NhblRhYiBhOmhvdmVyIHsgY29sb3I6ICNmZjZmMDA7IH1cblxuZGl2LnNjYW5UYWIgYSBpbWcgeyB3aWR0aDogODBweDsgbWFyZ2luLWJvdHRvbTogOHB4OyB9XG5cbmEuYnRuIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xufVxuXG5hLmJ0bjpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6ICNGRjZGMDA7IH1cblxuaGVhZGVyIG5hdiNsb2dNZW51IGEsXG5oZWFkZXIgbmF2I2Ryb3BNZW51IGEge1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMyQjJCMkI7XG59XG5cbmhlYWRlciBuYXYjbG9nTWVudSBhOmxhc3QtY2hpbGQsXG5oZWFkZXIgbmF2I2Ryb3BNZW51IGE6bGFzdC1jaGlsZCB7IG1hcmdpbi1yaWdodDogMDsgfVxuXG5oZWFkZXIgbmF2I2xvZ01lbnUgYTpob3ZlcixcbmhlYWRlciBuYXYjZHJvcE1lbnUgYTpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG5cbmhlYWRlciBuYXYjbG9nTWVudSBhI3NlYXJjaCxcbmhlYWRlciBuYXYjbG9nTWVudSBhI2xpa2UsXG5oZWFkZXIgbmF2I2xvZ01lbnUgYSNjYXJ0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaGVhZGVyIG5hdiNsb2dNZW51IGEjc2VhcmNoIHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ljb25zL3NlYXJjaC5zdmcnKTsgfVxuXG5oZWFkZXIgbmF2I2xvZ01lbnUgYSNsaWtlIHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ljb25zL2hlYXJ0LnN2ZycpOyB9XG5cbmhlYWRlciBuYXYjbG9nTWVudSBhI2NhcnQgeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaWNvbnMvYmFnLnN2ZycpOyB9XG5cbmhlYWRlciBhI2xvZ28ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvbWF4YXJ0a2lsbGVyLnBuZycpO1xufVxuXG5cbnNlY3Rpb24jZ29Nb2JpbGUgYXJ0aWNsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1NTBweDtcbn1cblxuc2VjdGlvbiNnb01vYmlsZSBhcnRpY2xlIGgxIHtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogIzJiMmIyYjtcbiAgICBAaW5jbHVkZSBtZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICB9XG59XG5cbnNlY3Rpb24jZ29Nb2JpbGUgYXJ0aWNsZSBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzg5ODk4OTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5zZWN0aW9uI2luZm9TZWMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuc2VjdGlvbiNpbmZvU2VjIGEjYmlnTG9nbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby1tb2JpbGV1eC0xLnBuZycpO1xufVxuXG5zZWN0aW9uI2luZm9TZWMgYXJ0aWNsZS5zaWRlU2VjIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xufVxuXG5zZWN0aW9uI2luZm9TZWMgYXJ0aWNsZSBoMiB7IGNvbG9yOiAjMjc0RUJCOyB9XG5cblxuc2VjdGlvbiNpbmZvU2VjIGFydGljbGUjbW9iaWxlSW5mbyB7XG4gICAgbWFyZ2luOiA4MHB4IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA3NTBweDtcbn1cblxuc2VjdGlvbiNpbmZvU2VjIGFydGljbGUjbW9iaWxlSW5mbyBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuc2VjdGlvbiNpbmZvU2VjIGRpdiNmcmFtZXdvcmtTZWMgYXNpZGUubW9iaWxlU2VjIHsgbWFyZ2luOiAwIGF1dG87IH1cblxuc2VjdGlvbiNpbmZvU2VjIGRpdiNmcmFtZXdvcmtTZWMgaDMgeyBtYXJnaW4tdG9wOiA0MHB4OyB9XG5cbnNlY3Rpb24jaW5mb1NlYyBkaXYjZnJhbWV3b3JrU2VjIGgzLnJlZCB7IGNvbG9yOiAjQzIzMzMyOyB9XG5cbnNlY3Rpb24jaW5mb1NlYyBkaXYjZnJhbWV3b3JrU2VjIGgzLmJsdWUgeyBjb2xvcjogIzFENzhBQTsgfVxuXG5zZWN0aW9uI2luZm9TZWMgZGl2I2ZyYW1ld29ya1NlYyBwIHsgY29sb3I6ICM4OTg5ODk7IH1cblxuc2VjdGlvbiNzY2FuQmFyIHsgcGFkZGluZzogMzBweCAwOyB9XG5cbnNlY3Rpb24jc2NhbkJhciBkaXYucm93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG5zZWN0aW9uI2tpdEluZm8ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbnNlY3Rpb24ja2l0SW5mbyBoMiB7XG4gICAgY29sb3I6ICNDMjMzMzI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuc2VjdGlvbiNraXRJbmZvIHAgeyBjb2xvcjogIzg5ODk4OTsgfVxuXG5zZWN0aW9uI2tpdEluZm8gZGl2LnNjYW5UYWIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiA4MHB4IGF1dG87XG59XG5cbnNlY3Rpb24ja2l0SW5mbyBpbWcuYmlnSW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG5zZWN0aW9uI2Rlc2lnblNlYyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RDlFMTtcbn1cblxuc2VjdGlvbiNxdWlja1NoYXJlIGFydGljbGUsXG5zZWN0aW9uI21vcmVGZWF0dXJlIGFydGljbGUsXG5zZWN0aW9uI2Rlc2lnblNlYyBhcnRpY2xlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xufVxuXG5zZWN0aW9uI3F1aWNrU2hhcmUgYXJ0aWNsZSBoMixcbnNlY3Rpb24jbW9yZUZlYXR1cmUgYXJ0aWNsZSBoMixcbnNlY3Rpb24jZGVzaWduU2VjIGFydGljbGUgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuXG5zZWN0aW9uI3F1aWNrU2hhcmUgYXJ0aWNsZSBoNCxcbnNlY3Rpb24jbW9yZUZlYXR1cmUgYXJ0aWNsZSBoNCxcbnNlY3Rpb24jZGVzaWduU2VjIGFydGljbGUgaDQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG5zZWN0aW9uI3F1aWNrU2hhcmUgYXJ0aWNsZSBwLFxuc2VjdGlvbiNtb3JlRmVhdHVyZSBhcnRpY2xlIHAsXG5zZWN0aW9uI2Rlc2lnblNlYyBhcnRpY2xlIHAge1xuICAgIGNvbG9yOiAjODk4OTg5O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuc2VjdGlvbiNxdWlja1NoYXJlIGltZyxcbnNlY3Rpb24jbW9yZUZlYXR1cmUgaW1nLFxuc2VjdGlvbiNkZXNpZ25TZWMgaW1nIHsgd2lkdGg6IDMwMHB4OyB9XG5cblxuc2VjdGlvbiNtb3JlRGVtZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5zZWN0aW9uI21vcmVEZW1lIGgyIHsgZm9udC1zaXplOiA0MHB4OyB9XG5cbnNlY3Rpb24jbW9yZURlbWUgaDMgeyBmb250LXNpemU6IDMwcHg7IH1cblxuc2VjdGlvbiNtb3JlRGVtZSBwIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbnNlY3Rpb24jbW9yZURlbWUgYXJ0aWNsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuc2VjdGlvbiN0YWJSZXNwb25zaXZlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24jdGFiUmVzcG9uc2l2ZSBkaXYuc2NhblRhYixcbnNlY3Rpb24jdGFiUmVzcG9uc2l2ZSBhc2lkZS5tb2JpbGVTZWMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNzUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbnNlY3Rpb24jdGFiUmVzcG9uc2l2ZSBkaXYuc2NhblRhYiB7IG1heC13aWR0aDogMzAwcHg7IH1cblxuc2VjdGlvbiN0YWJSZXNwb25zaXZlIGFzaWRlLm1vYmlsZVNlYyB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBAaW5jbHVkZSBzbSB7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxuICAgIEBpbmNsdWRlIG1kIHtcbiAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICB9XG59XG5cbmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbn1cblxuZm9vdGVyIGg0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzg5ODk4OTtcbn1cblxuZm9vdGVyIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDNweCAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzE4MTgxODtcbn1cblxuZm9vdGVyIGEuZmFjZWJvb2ssXG5mb290ZXIgYS50d2l0dGVyLFxuZm9vdGVyIGEuaW5zdGFncmFtLFxuZm9vdGVyIGEuY29udGFjdCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbmZvb3RlciBhLmZhY2Vib29rIHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ljb25zL2ZhY2Vib29rLnN2ZycpOyB9XG5mb290ZXIgYS50d2l0dGVyIHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ljb25zL3R3aXR0ZXIuc3ZnJyk7IH1cbmZvb3RlciBhLmluc3RhZ3JhbSB7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pY29ucy9pbnN0YWdyYW0uc3ZnJyk7IH1cbmZvb3RlciBhLmNvbnRhY3QgeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaWNvbnMvYXQuc3ZnJyk7IH1cblxuZm9vdGVyIGZvcm0ge1xuICAgIGJvcmRlci1ib3R0b206ICM4OTg5ODkgc29saWQgMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbmZvb3RlciBmb3JtIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmZvb3RlciBmb3JtIGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaWNvbnMvc2VhcmNoLnN2ZycpO1xufVxuXG5mb290ZXIgZGl2I2NvcHlSaWdodCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMmIyYjJiO1xufSIsImFzaWRlLm1vYmlsZVNlYyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzQwcHg7XG4gIGhlaWdodDogNTgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogIzJCMkIyQiBzb2xpZCA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMjBweCAzcHggI0E4QThBODtcbiAgYm94LXNoYWRvdzogMCAycHggMjBweCAzcHggI0E4QThBODtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICBhc2lkZS5tb2JpbGVTZWMge1xuICAgIGhlaWdodDogNjkwcHg7XG4gIH1cbn1cblxuZGl2LnNjYW5UYWIgaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG5kaXYuc2NhblRhYiBhIHtcbiAgd2lkdGg6IDEyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzJiMmIyYjtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmRpdi5zY2FuVGFiIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmNmYwMDtcbn1cblxuZGl2LnNjYW5UYWIgYSBpbWcge1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5hLmJ0biB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsIGxpbmVhcjtcbn1cblxuYS5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2RjAwO1xufVxuXG5oZWFkZXIgbmF2I2xvZ01lbnUgYSxcbmhlYWRlciBuYXYjZHJvcE1lbnUgYSB7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMkIyQjJCO1xufVxuXG5oZWFkZXIgbmF2I2xvZ01lbnUgYTpsYXN0LWNoaWxkLFxuaGVhZGVyIG5hdiNkcm9wTWVudSBhOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbmhlYWRlciBuYXYjbG9nTWVudSBhOmhvdmVyLFxuaGVhZGVyIG5hdiNkcm9wTWVudSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmhlYWRlciBuYXYjbG9nTWVudSBhI3NlYXJjaCxcbmhlYWRlciBuYXYjbG9nTWVudSBhI2xpa2UsXG5oZWFkZXIgbmF2I2xvZ01lbnUgYSNjYXJ0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmhlYWRlciBuYXYjbG9nTWVudSBhI3NlYXJjaCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaWNvbnMvc2VhcmNoLnN2Z1wiKTtcbn1cblxuaGVhZGVyIG5hdiNsb2dNZW51IGEjbGlrZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaWNvbnMvaGVhcnQuc3ZnXCIpO1xufVxuXG5oZWFkZXIgbmF2I2xvZ01lbnUgYSNjYXJ0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pY29ucy9iYWcuc3ZnXCIpO1xufVxuXG5oZWFkZXIgYSNsb2dvIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9tYXhhcnRraWxsZXIucG5nXCIpO1xufVxuXG5zZWN0aW9uI2dvTW9iaWxlIGFydGljbGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1NTBweDtcbn1cblxuc2VjdGlvbiNnb01vYmlsZSBhcnRpY2xlIGgxIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzJiMmIyYjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBzZWN0aW9uI2dvTW9iaWxlIGFydGljbGUgaDEge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgfVxufVxuXG5zZWN0aW9uI2dvTW9iaWxlIGFydGljbGUgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM4OTg5ODk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbnNlY3Rpb24jaW5mb1NlYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuc2VjdGlvbiNpbmZvU2VjIGEjYmlnTG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltYWdlcy9sb2dvLW1vYmlsZXV4LTEucG5nXCIpO1xufVxuXG5zZWN0aW9uI2luZm9TZWMgYXJ0aWNsZS5zaWRlU2VjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzUwcHg7XG59XG5cbnNlY3Rpb24jaW5mb1NlYyBhcnRpY2xlIGgyIHtcbiAgY29sb3I6ICMyNzRFQkI7XG59XG5cbnNlY3Rpb24jaW5mb1NlYyBhcnRpY2xlI21vYmlsZUluZm8ge1xuICBtYXJnaW46IDgwcHggYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNzUwcHg7XG59XG5cbnNlY3Rpb24jaW5mb1NlYyBhcnRpY2xlI21vYmlsZUluZm8gcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbnNlY3Rpb24jaW5mb1NlYyBkaXYjZnJhbWV3b3JrU2VjIGFzaWRlLm1vYmlsZVNlYyB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5zZWN0aW9uI2luZm9TZWMgZGl2I2ZyYW1ld29ya1NlYyBoMyB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbnNlY3Rpb24jaW5mb1NlYyBkaXYjZnJhbWV3b3JrU2VjIGgzLnJlZCB7XG4gIGNvbG9yOiAjQzIzMzMyO1xufVxuXG5zZWN0aW9uI2luZm9TZWMgZGl2I2ZyYW1ld29ya1NlYyBoMy5ibHVlIHtcbiAgY29sb3I6ICMxRDc4QUE7XG59XG5cbnNlY3Rpb24jaW5mb1NlYyBkaXYjZnJhbWV3b3JrU2VjIHAge1xuICBjb2xvcjogIzg5ODk4OTtcbn1cblxuc2VjdGlvbiNzY2FuQmFyIHtcbiAgcGFkZGluZzogMzBweCAwO1xufVxuXG5zZWN0aW9uI3NjYW5CYXIgZGl2LnJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuc2VjdGlvbiNraXRJbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG5zZWN0aW9uI2tpdEluZm8gaDIge1xuICBjb2xvcjogI0MyMzMzMjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuc2VjdGlvbiNraXRJbmZvIHAge1xuICBjb2xvcjogIzg5ODk4OTtcbn1cblxuc2VjdGlvbiNraXRJbmZvIGRpdi5zY2FuVGFiIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogODBweCBhdXRvO1xufVxuXG5zZWN0aW9uI2tpdEluZm8gaW1nLmJpZ0ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG5zZWN0aW9uI2Rlc2lnblNlYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEQ5RTE7XG59XG5cbnNlY3Rpb24jcXVpY2tTaGFyZSBhcnRpY2xlLFxuc2VjdGlvbiNtb3JlRmVhdHVyZSBhcnRpY2xlLFxuc2VjdGlvbiNkZXNpZ25TZWMgYXJ0aWNsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xufVxuXG5zZWN0aW9uI3F1aWNrU2hhcmUgYXJ0aWNsZSBoMixcbnNlY3Rpb24jbW9yZUZlYXR1cmUgYXJ0aWNsZSBoMixcbnNlY3Rpb24jZGVzaWduU2VjIGFydGljbGUgaDIge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbnNlY3Rpb24jcXVpY2tTaGFyZSBhcnRpY2xlIGg0LFxuc2VjdGlvbiNtb3JlRmVhdHVyZSBhcnRpY2xlIGg0LFxuc2VjdGlvbiNkZXNpZ25TZWMgYXJ0aWNsZSBoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbnNlY3Rpb24jcXVpY2tTaGFyZSBhcnRpY2xlIHAsXG5zZWN0aW9uI21vcmVGZWF0dXJlIGFydGljbGUgcCxcbnNlY3Rpb24jZGVzaWduU2VjIGFydGljbGUgcCB7XG4gIGNvbG9yOiAjODk4OTg5O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbnNlY3Rpb24jcXVpY2tTaGFyZSBpbWcsXG5zZWN0aW9uI21vcmVGZWF0dXJlIGltZyxcbnNlY3Rpb24jZGVzaWduU2VjIGltZyB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuc2VjdGlvbiNtb3JlRGVtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuc2VjdGlvbiNtb3JlRGVtZSBoMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuc2VjdGlvbiNtb3JlRGVtZSBoMyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuc2VjdGlvbiNtb3JlRGVtZSBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5zZWN0aW9uI21vcmVEZW1lIGFydGljbGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuc2VjdGlvbiN0YWJSZXNwb25zaXZlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5zZWN0aW9uI3RhYlJlc3BvbnNpdmUgZGl2LnNjYW5UYWIsXG5zZWN0aW9uI3RhYlJlc3BvbnNpdmUgYXNpZGUubW9iaWxlU2VjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNzUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5zZWN0aW9uI3RhYlJlc3BvbnNpdmUgZGl2LnNjYW5UYWIge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG5zZWN0aW9uI3RhYlJlc3BvbnNpdmUgYXNpZGUubW9iaWxlU2VjIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICBzZWN0aW9uI3RhYlJlc3BvbnNpdmUgYXNpZGUubW9iaWxlU2VjIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgc2VjdGlvbiN0YWJSZXNwb25zaXZlIGFzaWRlLm1vYmlsZVNlYyB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG5mb290ZXIgaDQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjODk4OTg5O1xufVxuXG5mb290ZXIgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogM3B4IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICMxODE4MTg7XG59XG5cbmZvb3RlciBhLmZhY2Vib29rLFxuZm9vdGVyIGEudHdpdHRlcixcbmZvb3RlciBhLmluc3RhZ3JhbSxcbmZvb3RlciBhLmNvbnRhY3Qge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG5mb290ZXIgYS5mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaWNvbnMvZmFjZWJvb2suc3ZnXCIpO1xufVxuXG5mb290ZXIgYS50d2l0dGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pY29ucy90d2l0dGVyLnN2Z1wiKTtcbn1cblxuZm9vdGVyIGEuaW5zdGFncmFtIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pY29ucy9pbnN0YWdyYW0uc3ZnXCIpO1xufVxuXG5mb290ZXIgYS5jb250YWN0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pY29ucy9hdC5zdmdcIik7XG59XG5cbmZvb3RlciBmb3JtIHtcbiAgYm9yZGVyLWJvdHRvbTogIzg5ODk4OSBzb2xpZCAycHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbmZvb3RlciBmb3JtIGlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmZvb3RlciBmb3JtIGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pY29ucy9zZWFyY2guc3ZnXCIpO1xufVxuXG5mb290ZXIgZGl2I2NvcHlSaWdodCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMyYjJiMmI7XG59IiwiLy8gU21hbGwgZGV2aWNlc1xuQG1peGluIHNtIHtcbiAgIEBtZWRpYSAobWluLXdpZHRoOiAjezU3NnB4fSkge1xuICAgICAgIEBjb250ZW50O1xuICAgfVxufVxuXG4vLyBNZWRpdW0gZGV2aWNlc1xuQG1peGluIG1kIHtcbiAgIEBtZWRpYSAobWluLXdpZHRoOiAjezc2OHB4fSkge1xuICAgICAgIEBjb250ZW50O1xuICAgfVxufVxuXG4vLyBMYXJnZSBkZXZpY2VzXG5AbWl4aW4gbGcge1xuICAgQG1lZGlhIChtaW4td2lkdGg6ICN7OTkycHh9KSB7XG4gICAgICAgQGNvbnRlbnQ7XG4gICB9XG59XG5cbi8vIEV4dHJhIGxhcmdlIGRldmljZXNcbkBtaXhpbiB4bCB7XG4gICBAbWVkaWEgKG1pbi13aWR0aDogI3sxMjAwcHh9KSB7XG4gICAgICAgQGNvbnRlbnQ7XG4gICB9XG59XG5cbi8vIFggRXh0cmEgbGFyZ2UgZGV2aWNlc1xuQG1peGluIHh4bCB7XG4gICBAbWVkaWEgKG1pbi13aWR0aDogI3sxMzUwcHh9KSB7XG4gICAgICAgQGNvbnRlbnQ7XG4gICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home-pg/home-pg.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/home-pg/home-pg.component.ts ***!
    \**********************************************/

  /*! exports provided: HomePgComponent */

  /***/
  function srcAppHomePgHomePgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePgComponent", function () {
      return HomePgComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomePgComponent =
    /*#__PURE__*/
    function () {
      function HomePgComponent() {
        _classCallCheck(this, HomePgComponent);

        this.images = ['assets/images/slide1.jpg', 'assets/images/slide2.jpg', 'assets/images/slide3.jpg'];
        this.imagesBig = ['assets/images/slide-big1.jpg', 'assets/images/slide-big2.jpg', 'assets/images/slide-big3.jpg'];
        this.owlOption = {
          loop: true,
          items: 1,
          dots: true,
          autoplay: 10000,
          autoplayTimeout: 5000,
          autoplayHoverPause: false,
          navigation: false,
          responsiveClass: true
        };
      }

      _createClass(HomePgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePgComponent;
    }();

    HomePgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-pg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-pg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-pg/home-pg.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-pg.component.scss */
      "./src/app/home-pg/home-pg.component.scss")).default]
    })], HomePgComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\MRVRCorp\Feb_03_FireStarter\goMobile\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map