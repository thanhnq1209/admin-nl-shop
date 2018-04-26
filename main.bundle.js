webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("./src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'Accounts/token', this.formatData(data))
            .map(function (response) {
            var tokenObject = response.json();
            return tokenObject;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.formatData = function (data) {
        var returnData = '';
        var count = 0;
        for (var i in data) {
            if (count == 0) {
                returnData += i + '=' + data[i];
            }
            else {
                returnData += '&' + i + '=' + data[i];
            }
            count = count + 1;
        }
        return returnData;
    };
    AuthenticationService.prototype.getProfile = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'Accounts/GetProfile', this.jwt()).map(function (response) { return response.json(); });
    };
    AuthenticationService.prototype.jwt = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'authorization': localStorage.token_type + ' ' + localStorage.access_token
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/brand.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrandService = (function () {
    function BrandService(http) {
        this.http = http;
    }
    BrandService.prototype.getAll = function (sort, page, amount, keysearch) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'ProductBrands/GetAll?sort=' + sort + '&page=' + page + '&amount=' + amount + '&keysearch=' + keysearch)
            .map(function (response) { return response.json(); });
    };
    BrandService.prototype.getById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'ProductBrands/getById?id=' + id)
            .map(function (response) { return response.json(); });
    };
    BrandService.prototype.addProductsToSale = function (products) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'ProductBrands/AddProductsToSale', products, this.jwt()).map(function (response) { return response.json(); });
    };
    BrandService.prototype.create = function (brand) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'ProductBrands/Create', brand, this.jwt()).map(function (response) { return response.json(); });
    };
    BrandService.prototype.update = function (sale) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'ProductBrands/Update', sale, this.jwt()).map(function (response) { return response.json(); });
    };
    BrandService.prototype.getAllForProduct = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'ProductBrands/GetAllForProduct')
            .map(function (response) { return response.json(); });
    };
    BrandService.prototype.delete = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'ProductBrands/Delete?Id=' + id, this.jwt()).map(function (response) { return response; });
    };
    // private helper methods
    BrandService.prototype.jwt = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    BrandService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BrandService);
    return BrandService;
}());



/***/ }),

/***/ "./src/app/_services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getAll = function (sort, page, amount, keysearch) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'categories/GetAll?sort=' + sort + '&page=' + page + '&amount=' + amount + '&keysearch=' + keysearch)
            .map(function (response) { return response.json(); });
    };
    CategoryService.prototype.getAllGroup = function (sort, page, amount, keysearch) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'categories/GetAllGroup?sort=' + sort + '&page=' + page + '&amount=' + amount + '&keysearch=' + keysearch)
            .map(function (response) { return response.json(); });
    };
    CategoryService.prototype.create = function (category) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'categories/Create', category, __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].jwt()).map(function (response) { return response.json(); });
    };
    CategoryService.prototype.createGroup = function (category) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'categories/CreateNewGroup', category, __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].jwt()).map(function (response) { return response.json(); });
    };
    CategoryService.prototype.update = function (category) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'categories/Update', category, __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].jwt()).map(function (response) { return response.json(); });
    };
    CategoryService.prototype.updateGroup = function (category) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'categories/UpdateGroup', category, __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].jwt()).map(function (response) { return response.json(); });
    };
    CategoryService.prototype.delete = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'categories/Delete?Id=' + id, __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].jwt()).map(function (response) { return response; });
    };
    CategoryService.prototype.deleteGroup = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'categories/DeleteGroup?Id=' + id, __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].jwt()).map(function (response) { return response; });
    };
    CategoryService.prototype.getAllForProduct = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'categories/GetAll?sort=Name&page=0&amount=1000&keysearch=')
            .map(function (response) { return response.json(); });
    };
    CategoryService.prototype.getAllGroupForCategory = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'categories/GetAllGroupForCategory')
            .map(function (response) { return response.json(); });
    };
    // getAllForProduct() {
    //     return this.http.get(AppSettings.API_ENDPOINT + 'ProductBrands/GetAllForProduct')
    //         .map((response: Response) => response.json());
    // }
    // private helper methods
    CategoryService.prototype.jwt = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/_services/images.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageService = (function () {
    function ImageService(http) {
        this.http = http;
    }
    ImageService.prototype.deleteImage = function (imageId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'Products/DeleteImage?imageId=' + imageId)
            .map(function (response) { return response; });
    };
    ImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("./src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__("./src/app/_services/category.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__category_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pager_service__ = __webpack_require__("./src/app/_services/pager.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__pager_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("./src/app/_services/product.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__product_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sale_service__ = __webpack_require__("./src/app/_services/sale.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__sale_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_service__ = __webpack_require__("./src/app/_services/images.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__images_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__brand_service__ = __webpack_require__("./src/app/_services/brand.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__brand_service__["a"]; });









/***/ }),

/***/ "./src/app/_services/localstorage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalStorageService = (function () {
    function LocalStorageService(http) {
        this.http = http;
        this.accountLogged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Subject */]();
    }
    LocalStorageService.prototype.loginSuccess = function (account) {
        localStorage.setItem('Cart', JSON.stringify(account));
        this.accountLogged.next();
    };
    LocalStorageService.prototype.logoutSuccess = function () {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
        this.accountLogged.next();
    };
    LocalStorageService.prototype.watchStorage = function () {
        return this.accountLogged.asObservable();
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/_services/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
// import * as _ from './node_modules/underscore/underscore';
var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.range = function (start, end) {
        var array = [];
        for (var i = start; i <= end; i++) {
            array.push(i);
        }
        return array;
    };
    PagerService.prototype.getPager = function (totalPages, totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        currentPage += 1;
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = this.range(startPage, endPage);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());



/***/ }),

/***/ "./src/app/_services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getAll = function (sort, page, amount, keysearch) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'products/GetAll?sort=' + sort + '&page=' + page + '&amount=' + amount + '&keysearch=' + keysearch)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.create = function (product) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'products/Create', product, __WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].jwt()).map(function (response) { return response.json(); });
    };
    ProductService.prototype.update = function (product) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'products/Update', product, this.jwt()).map(function (response) { return response.json(); });
    };
    ProductService.prototype.delete = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'products/Delete?Id=' + id, this.jwt()).map(function (response) { return response; });
    };
    ProductService.prototype.getById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'products/getById?Id=' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    ProductService.prototype.jwt = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    ProductService.prototype.jwtFormData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    ProductService.prototype.getFormUrlEncoded = function (toConvert) {
        var formBody = [];
        for (var property in toConvert) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(toConvert[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/_services/sale.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SaleService = (function () {
    function SaleService(http) {
        this.http = http;
    }
    SaleService.prototype.getAll = function (sort, page, amount, keysearch) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'sales/GetAll?sort=' + sort + '&page=' + page + '&amount=' + amount + '&keysearch=' + keysearch)
            .map(function (response) { return response.json(); });
    };
    SaleService.prototype.getById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'sales/getById?id=' + id)
            .map(function (response) { return response.json(); });
    };
    SaleService.prototype.addProductsToSale = function (products) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'sales/AddProductsToSale', products, this.jwt()).map(function (response) { return response.json(); });
    };
    SaleService.prototype.create = function (sale) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'sales/Create', sale, this.jwt()).map(function (response) { return response.json(); });
    };
    SaleService.prototype.update = function (sale) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'sales/Update', sale, this.jwt()).map(function (response) { return response.json(); });
    };
    SaleService.prototype.delete = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'sales/Delete?Id=' + id, this.jwt()).map(function (response) { return response; });
    };
    // private helper methods
    SaleService.prototype.jwt = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    SaleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SaleService);
    return SaleService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".display-block {\r\n    display: block !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ng4-loading-spinner> </ng4-loading-spinner>\r\n<div class=\"container body\">\r\n\t<div class=\"main_container\">\r\n\t\t<div class=\"col-md-3 left_col\">\r\n\t\t\t<div class=\"left_col scroll-view\">\r\n\t\t\t\t<div class=\"navbar nav_title\" style=\"border: 0;\">\r\n\t\t\t\t\t<a href=\"index.html\" class=\"site_title\">\r\n\t\t\t\t\t\t<i class=\"fa fa-paw\"></i>\r\n\t\t\t\t\t\t<span>Gentelella Alela!</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"clearfix\"></div>\r\n\r\n\t\t\t\t<!-- menu profile quick info -->\r\n\t\t\t\t<div class=\"profile clearfix\">\r\n\t\t\t\t\t<div class=\"profile_pic\">\r\n\t\t\t\t\t\t<img src=\"\" alt=\"...\" class=\"img-circle profile_img\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"profile_info\">\r\n\t\t\t\t\t\t<span>Welcome,</span>\r\n\t\t\t\t\t\t<h2>John Doe</h2>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /menu profile quick info -->\r\n\r\n\t\t\t\t<br />\r\n\r\n\t\t\t\t<!-- sidebar menu -->\r\n\t\t\t\t<div id=\"sidebar-menu\" class=\"main_menu_side hidden-print main_menu\">\r\n\t\t\t\t\t<div class=\"menu_section\">\r\n\t\t\t\t\t\t<h3>General</h3>\r\n\t\t\t\t\t\t<ul class=\"nav side-menu\">\r\n\t\t\t\t\t\t\t<li *ngFor=\"let item of menus; let i = index\" class=\"{{item.isActive? 'active' : 'nl-shop'}}\" (click)=\"onClickMenu(i)\">\r\n\t\t\t\t\t\t\t\t<a *ngIf=\"item.children.length > 0\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-home\"></i> {{item.title}}\r\n\t\t\t\t\t\t\t\t\t<span class=\"fa fa-chevron-down\"></span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<ul *ngIf=\"item.children.length > 0\" class=\"{{item.isActive? 'nav child_menu display-block' : 'nav child_menu'}}\">\r\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let child of item.children; let iChild = index\" class=\"{{child.isActive? 'active' : 'nl-shop'}}\">\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"[child.url]\" (click)=\"gotoUrl(i, iChild)\">{{child.title}}</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t<a *ngIf=\"item.children.length == 0\" [routerLink]=\"[item.url]\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-home\"></i> {{item.title}}\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<!-- <li>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i> Forms\r\n\t\t\t\t\t\t\t\t\t<span class=\"fa fa-chevron-down\"></span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<ul class=\"nav child_menu\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"form.html\">General Form</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"form_advanced.html\">Advanced Components</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"form_validation.html\">Form Validation</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"form_wizards.html\">Form Wizard</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"form_upload.html\">Form Upload</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"form_buttons.html\">Form Buttons</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-desktop\"></i> UI Elements\r\n\t\t\t\t\t\t\t\t\t<span class=\"fa fa-chevron-down\"></span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<ul class=\"nav child_menu\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"general_elements.html\">General Elements</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"media_gallery.html\">Media Gallery</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"typography.html\">Typography</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"icons.html\">Icons</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"glyphicons.html\">Glyphicons</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"widgets.html\">Widgets</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"invoice.html\">Invoice</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"inbox.html\">Inbox</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"calendar.html\">Calendar</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-table\"></i> Tables\r\n\t\t\t\t\t\t\t\t\t<span class=\"fa fa-chevron-down\"></span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<ul class=\"nav child_menu\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"tables.html\">Tables</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"tables_dynamic.html\">Table Dynamic</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-bar-chart-o\"></i> Data Presentation\r\n\t\t\t\t\t\t\t\t\t<span class=\"fa fa-chevron-down\"></span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<ul class=\"nav child_menu\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"chartjs.html\">Chart JS</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"chartjs2.html\">Chart JS2</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"morisjs.html\">Moris JS</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"echarts.html\">ECharts</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"other_charts.html\">Other Charts</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-clone\"></i>Layouts\r\n\t\t\t\t\t\t\t\t\t<span class=\"fa fa-chevron-down\"></span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<ul class=\"nav child_menu\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"fixed_sidebar.html\">Fixed Sidebar</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"fixed_footer.html\">Fixed Footer</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li> -->\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"menu_section\">\r\n\t\t\t\t\t\t<h3>Live On</h3>\r\n\t\t\t\t\t\t<ul class=\"nav side-menu\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-bug\"></i> Additional Pages\r\n\t\t\t\t\t\t\t\t\t<span class=\"fa fa-chevron-down\"></span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<ul class=\"nav child_menu\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"e_commerce.html\">E-commerce</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"projects.html\">Projects</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"project_detail.html\">Project Detail</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"contacts.html\">Contacts</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"profile.html\">Profile</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-windows\"></i> Extras\r\n\t\t\t\t\t\t\t\t\t<span class=\"fa fa-chevron-down\"></span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<ul class=\"nav child_menu\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"page_403.html\">403 Error</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"page_404.html\">404 Error</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"page_500.html\">500 Error</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"plain_page.html\">Plain Page</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"login.html\">Login Page</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"pricing_tables.html\">Pricing Tables</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-sitemap\"></i> Multilevel Menu\r\n\t\t\t\t\t\t\t\t\t<span class=\"fa fa-chevron-down\"></span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<ul class=\"nav child_menu\">\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#level1_1\">Level One</a>\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<a>Level One\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-chevron-down\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav child_menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"sub_menu\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"level2.html\">Level Two</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#level2_1\">Level Two</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#level2_2\">Level Two</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#level1_2\">Level One</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-laptop\"></i> Landing Page\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"label label-success pull-right\">Coming Soon</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /sidebar menu -->\r\n\r\n\t\t\t\t<!-- /menu footer buttons -->\r\n\t\t\t\t<div class=\"sidebar-footer hidden-small\">\r\n\t\t\t\t\t<a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Settings\">\r\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a data-toggle=\"tooltip\" data-placement=\"top\" title=\"FullScreen\">\r\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-fullscreen\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Lock\">\r\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-eye-close\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Logout\" href=\"login.html\">\r\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-off\" aria-hidden=\"true\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- /menu footer buttons -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<!-- top navigation -->\r\n\t\t<div class=\"top_nav\">\r\n\t\t\t<div class=\"nav_menu\">\r\n\t\t\t\t<nav>\r\n\t\t\t\t\t<div class=\"nav toggle\">\r\n\t\t\t\t\t\t<a id=\"menu_toggle\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-bars\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t\t\t<li class=\"\">\r\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"user-profile dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t<img src=\"\" alt=\"\">John Doe\r\n\t\t\t\t\t\t\t\t<span class=\" fa fa-angle-down\"></span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu dropdown-usermenu pull-right\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\"> Profile</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"badge bg-red pull-right\">50%</span>\r\n\t\t\t\t\t\t\t\t\t\t<span>Settings</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:;\">Help</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a href=\"login.html\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-sign-out pull-right\"></i> Log Out</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t<li role=\"presentation\" class=\"dropdown\">\r\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"dropdown-toggle info-number\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-envelope-o\"></i>\r\n\t\t\t\t\t\t\t\t<span class=\"badge bg-green\">6</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<ul id=\"menu1\" class=\"dropdown-menu list-unstyled msg_list\" role=\"menu\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"image\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"\" alt=\"Profile Image\" />\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span>John Smith</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"time\">3 mins ago</span>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"message\">\r\n\t\t\t\t\t\t\t\t\t\t\tFilm festivals used to be do-or-die moments for movie makers. They were where...\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"image\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"\" alt=\"Profile Image\" />\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span>John Smith</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"time\">3 mins ago</span>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"message\">\r\n\t\t\t\t\t\t\t\t\t\t\tFilm festivals used to be do-or-die moments for movie makers. They were where...\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"image\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"\" alt=\"Profile Image\" />\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span>John Smith</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"time\">3 mins ago</span>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"message\">\r\n\t\t\t\t\t\t\t\t\t\t\tFilm festivals used to be do-or-die moments for movie makers. They were where...\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"image\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"\" alt=\"Profile Image\" />\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span>John Smith</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"time\">3 mins ago</span>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"message\">\r\n\t\t\t\t\t\t\t\t\t\t\tFilm festivals used to be do-or-die moments for movie makers. They were where...\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<a>\r\n\t\t\t\t\t\t\t\t\t\t\t<strong>See All Alerts</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</nav>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- /top navigation -->\r\n\r\n\t\t<!-- page content -->\r\n\t\t<div class=\"right_col\" role=\"main\">\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t</div>\r\n\t\t<!-- /page content -->\r\n\r\n\t\t<!-- footer content -->\r\n\t\t<footer>\r\n\t\t\t<div class=\"pull-right\">\r\n\t\t\t\tGentelella - Bootstrap Admin Template by\r\n\t\t\t\t<a href=\"https://colorlib.com\">Colorlib</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"clearfix\"></div>\r\n\t\t</footer>\r\n\t\t<!-- /footer content -->\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_localstorage_service__ = __webpack_require__("./src/app/_services/localstorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(router, storageService, location, authenticationService, toastr, vcr, spinnerService) {
        var _this = this;
        this.router = router;
        this.storageService = storageService;
        this.authenticationService = authenticationService;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.title = 'app';
        this.currentUrl = '';
        this.accountLogged = {};
        this.isLogged = false;
        this.template = "<img src=\"../assets/images/icon_loading.gif\" />";
        this.menus = [
            {
                main_icon: 'fa fa-home',
                title: 'Loại sản phẩm',
                isActive: true,
                url: '',
                children: [
                    {
                        title: 'Loại sản phẩm',
                        url: '/categories',
                        isActive: true
                    },
                    {
                        title: 'Nhóm loại sản phẩm',
                        url: '/group-categories',
                        isActive: false
                    }
                ]
            },
            {
                main_icon: 'fa fa-home',
                title: 'Sản phẩm',
                isActive: false,
                url: '',
                children: [
                    {
                        title: 'Danh sách sản phẩm',
                        url: '/products',
                        isActive: false
                    },
                    {
                        title: 'Tạo sản phẩm',
                        url: '/create-product',
                        isActive: false
                    }
                ]
            },
            {
                main_icon: 'fa fa-home',
                title: 'Nhãn hiệu',
                url: 'product-brand',
                isActive: false,
                children: []
            }
        ];
        this.toastr.setRootViewContainerRef(vcr);
        this.subscription = this.storageService.watchStorage().subscribe(function (message) {
            _this.init();
        });
    }
    AppComponent.prototype.init = function () {
        var token = localStorage.getItem('access_token');
        if (token) {
            this.spinnerService.show();
            this.getInfoUser();
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.init();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    AppComponent.prototype.setActiveRoute = function () {
        var _this = this;
        this.menus.forEach(function (element, index) {
            element.children.forEach(function (child, indexChild) {
                if (_this.currentUrl === child.url) {
                    child.isActive = true;
                    element.isActive = true;
                }
                else {
                    child.isActive = false;
                    element.isActive = false;
                }
            });
        });
    };
    AppComponent.prototype.onClickMenu = function (index) {
        this.menus.forEach(function (element, i) {
            if (index === i) {
                element.isActive = true;
            }
            else {
                element.isActive = false;
            }
        });
    };
    AppComponent.prototype.getInfoUser = function () {
        var _this = this;
        this.authenticationService.getProfile().subscribe(function (response) {
            _this.accountLogged = response;
            _this.isLogged = true;
            _this.spinnerService.hide();
        }, function (error) {
            _this.router.navigate(['/login']);
            console.log(error.json());
            _this.toastr.error(error.json().Message);
            _this.spinnerService.hide();
        });
    };
    AppComponent.prototype.gotoUrl = function (index, iChild) {
        this.menus.forEach(function (element, i) {
            if (index === i) {
                element.isActive = true;
                element.children.forEach(function (child, indexChild) {
                    if (iChild === indexChild) {
                        child.isActive = true;
                    }
                    else {
                        child.isActive = false;
                    }
                });
            }
            else {
                element.children.forEach(function (child, indexChild) {
                    child.isActive = false;
                });
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_localstorage_service__["a" /* LocalStorageService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_5__services__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");

var AppSettings = (function () {
    function AppSettings() {
    }
    AppSettings.jwt = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'authorization': localStorage.token_type + ' ' + localStorage.access_token
        });
        return new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    // public static API_ENDPOINT='http://localhost:17453/api/';
    // public static API_ENDPOINT_IMAGE = 'http://localhost:17453';
    AppSettings.API_ENDPOINT = 'http://nlshop.azurewebsites.net/api/';
    AppSettings.API_ENDPOINT_IMAGE = 'http://nlshop.azurewebsites.net';
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dnd__ = __webpack_require__("./node_modules/ng2-dnd/ng2-dnd.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_slim_loading_bar__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_index__ = __webpack_require__("./src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_index__ = __webpack_require__("./src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_index__ = __webpack_require__("./src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__categories_index__ = __webpack_require__("./src/app/categories/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__products_index__ = __webpack_require__("./src/app/products/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__create_product_index__ = __webpack_require__("./src/app/create-product/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__product_detail_index__ = __webpack_require__("./src/app/product-detail/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sale_programs_sale_programs_component__ = __webpack_require__("./src/app/sale-programs/sale-programs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sale_management_sale_management_component__ = __webpack_require__("./src/app/sale-management/sale-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_localstorage_service__ = __webpack_require__("./src/app/_services/localstorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__group_categories_group_categories_component__ = __webpack_require__("./src/app/group-categories/group-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__product_brand_product_brand_component__ = __webpack_require__("./src/app/product-brand/product-brand.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { TagInputModule } from 'ng2-tag-input';



// service


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_index__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_index__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__categories_index__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__products_index__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__create_product_index__["a" /* CreateProductComponent */],
                __WEBPACK_IMPORTED_MODULE_19__product_detail_index__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_20__sale_programs_sale_programs_component__["a" /* SaleProgramsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__sale_management_sale_management_component__["a" /* SaleManagementComponent */],
                __WEBPACK_IMPORTED_MODULE_23__group_categories_group_categories_component__["a" /* GroupCategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_24__product_brand_product_brand_component__["a" /* ProductBrandComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ng2_dnd__["a" /* DndModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__guards_index__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_7__services_index__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_7__services_index__["c" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_7__services_index__["e" /* PagerService */],
                __WEBPACK_IMPORTED_MODULE_7__services_index__["f" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_7__services_index__["g" /* SaleService */],
                __WEBPACK_IMPORTED_MODULE_22__services_localstorage_service__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_7__services_index__["d" /* ImageService */],
                __WEBPACK_IMPORTED_MODULE_7__services_index__["b" /* BrandService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_index__ = __webpack_require__("./src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_index__ = __webpack_require__("./src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_index__ = __webpack_require__("./src/app/categories/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_index__ = __webpack_require__("./src/app/products/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_product_index__ = __webpack_require__("./src/app/create-product/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_detail_index__ = __webpack_require__("./src/app/product-detail/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sale_programs_sale_programs_component__ = __webpack_require__("./src/app/sale-programs/sale-programs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sale_management_sale_management_component__ = __webpack_require__("./src/app/sale-management/sale-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__group_categories_group_categories_component__ = __webpack_require__("./src/app/group-categories/group-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_brand_product_brand_component__ = __webpack_require__("./src/app/product-brand/product-brand.component.ts");











var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_index__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_index__["a" /* LoginComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_3__categories_index__["a" /* CategoriesComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_4__products_index__["a" /* ProductsComponent */] },
    { path: 'create-product', component: __WEBPACK_IMPORTED_MODULE_5__create_product_index__["a" /* CreateProductComponent */] },
    { path: 'product-detail/:id', component: __WEBPACK_IMPORTED_MODULE_6__product_detail_index__["a" /* ProductDetailComponent */] },
    { path: 'sale-programs', component: __WEBPACK_IMPORTED_MODULE_7__sale_programs_sale_programs_component__["a" /* SaleProgramsComponent */] },
    { path: 'sale-management/:id', component: __WEBPACK_IMPORTED_MODULE_8__sale_management_sale_management_component__["a" /* SaleManagementComponent */] },
    { path: 'group-categories', component: __WEBPACK_IMPORTED_MODULE_9__group_categories_group_categories_component__["a" /* GroupCategoriesComponent */] },
    { path: 'product-brand', component: __WEBPACK_IMPORTED_MODULE_10__product_brand_product_brand_component__["a" /* ProductBrandComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/categories/categories.component.css":
/***/ (function(module, exports) {

module.exports = ".dataTables_info {\r\n    width: 100% !important;\r\n}\r\na:hover {\r\n    cursor: pointer !important;\r\n}"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12 col-md-4\">\r\n        <div class=\"x_panel\">\r\n            <div class=\"x_title\">\r\n                <h2>Tạo thêm loại\r\n                </h2>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"x_content\">\r\n\r\n                <!-- start form for validation -->\r\n                <form>\r\n                    <label for=\"fullname\">Tên loại sản phẩm * :</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"Name\" [(ngModel)]=\"category.Name\" #Name=\"ngModel\" required>\r\n\r\n                    <label for=\"fullname\">Nhóm loại sản phẩm * :</label>\r\n                    <select class=\"form-control\" id=\"select2-group\">\r\n                        <option *ngFor=\"let item of allGroup; let i = index\" value=\"{{item.Id}}\">{{item.Name}}</option>\r\n                    </select>\r\n\r\n                    <label for=\"email\">Mô tả * :</label>\r\n                    <textarea class=\"form-control\" rows=\"3\" name=\"Description\" [(ngModel)]=\"category.Description\" #Description=\"ngModel\"></textarea>\r\n                    <br/>\r\n                    <button type=\"\" (click)=\"CreateCategory()\" class=\"btn btn-primary\">{{nameBtnCreate}}</button>\r\n                    <button type=\"\" (click)=\"cancelUpdate()\" class=\"btn btn-default\">Hủy</button>\r\n\r\n                </form>\r\n                <!-- end form for validations -->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-8\">\r\n        <div class=\"x_panel\">\r\n            <div class=\"x_title\">\r\n                <h2>Danh sách loại sản phẩm\r\n                </h2>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"x_content\">\r\n                <div>\r\n                    <div class=\"row\">\r\n                        <!-- <ul class=\"nav navbar-left panel_toolbox\">\r\n                            <li style=\"margin-right: 10px;\">\r\n                                <label>Show</label>\r\n                            </li>\r\n                            <li style=\"margin-right: 10px;\">\r\n                                <select name=\"datatable_length\" aria-controls=\"datatable\" class=\"form-control input-sm\">\r\n                                    <option value=\"10\">10</option>\r\n                                    <option value=\"25\">25</option>\r\n                                    <option value=\"50\">50</option>\r\n                                    <option value=\"100\">100</option>\r\n                                </select>\r\n                            </li>\r\n                            <li>\r\n                                <label>entries</label>\r\n                            </li>\r\n                        </ul> -->\r\n                        <!-- <div class=\"col-sm-6\">\r\n                            <div style=\"float: left;\">\r\n                                <label>Show\r\n                                    <select name=\"datatable_length\" aria-controls=\"datatable\" class=\"form-control input-sm\">\r\n                                        <option value=\"10\">10</option>\r\n                                        <option value=\"25\">25</option>\r\n                                        <option value=\"50\">50</option>\r\n                                        <option value=\"100\">100</option>\r\n                                    </select> entries</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div id=\"datatable_filter\" class=\"dataTables_filter\">\r\n                                <label>Search:\r\n                                    <input type=\"search\" class=\"form-control input-sm\" placeholder=\"\" aria-controls=\"datatable\">\r\n                                </label>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <table id=\"datatable\" class=\"table table-striped table-bordered dataTable no-footer\" role=\"grid\" aria-describedby=\"datatable_info\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>STT</th>\r\n                                        <th width=\"15%\">Tên loại</th>\r\n                                        <th>Mô tả</th>\r\n                                        <th>Tên nhóm loại</th>\r\n                                        <th width=\"25%\">Hành động</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of pagedItems; let i = index\">\r\n                                        <td>{{page * amount + i + 1}}</td>\r\n                                        <td>{{item.Name}}</td>\r\n                                        <td>{{item.Description}}</td>\r\n                                        <th>{{item.groupCategory.Name}}</th>\r\n                                        <td>\r\n                                            <button class=\"btn btn-sm btn-info\" (click)=\"UpdateCategory(item)\">Sửa</button>\r\n                                            <button class=\"btn btn-sm btn-danger\" (click)=\"DeteleCategory(item.Id)\">Xóa</button>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-5\">\r\n                            <div class=\"dataTables_info\" id=\"datatable_info\" role=\"status\" aria-live=\"polite\">\r\n                                Hiển thị {{amount * page + 1}} đến {{amount * page + categories.length}} của {{totalRecord}} kết quả</div>\r\n                        </div>\r\n                        <div class=\"col-sm-7\">\r\n                            <div class=\"dataTables_paginate paging_simple_numbers\" id=\"datatable_paginate\">\r\n                                <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-sm no-margin pull-right\">\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                        <a (click)=\"setPage(1)\">First</a>\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                        <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                                    </li>\r\n                                    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                                        <a (click)=\"setPage(page)\">{{page}}</a>\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                        <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                        <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"box box-info\">\r\n            <div class=\"box-header\">\r\n                <h3 class=\"box-title\">Danh sách loại sản phẩm</h3>\r\n\r\n                <div class=\"box-tools\">\r\n                    <div class=\"input-group input-group-sm\" style=\"width: 150px;\">\r\n                        <input type=\"text\" name=\"table_search\" [(ngModel)]=\"keysearch\" class=\"form-control pull-right\" placeholder=\"Tìm kiếm\">\r\n\r\n                        <div class=\"input-group-btn\">\r\n                            <button type=\"\" (click)=\"goSearch()\" class=\"btn btn-default\">\r\n                                <i class=\"fa fa-search\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"box-body table-responsive no-padding\">\r\n                <table class=\"table table-hover\">\r\n                    <tbody>\r\n                        <tr>\r\n                            <th>STT</th>\r\n                            <th width=\"15%\">Tên loại</th>\r\n                            <th>Mô tả</th>\r\n                            <th width=\"15%\">Hành động</th>\r\n                        </tr>\r\n                        <tr *ngFor=\"let item of pagedItems; let i = index\">\r\n                            <td>{{page * amount + i + 1}}</td>\r\n                            <td>{{item.Name}}</td>\r\n                            <td>{{item.Description}}</td>\r\n                            <td>\r\n                                <button class=\"btn btn-sm btn-info\" (click)=\"UpdateCategory(item)\">Sửa</button>\r\n                                <button class=\"btn btn-sm btn-danger\" (click)=\"DeteleCategory(item.Id)\">Xóa</button>\r\n                            </td>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"box-footer clearfix\">\r\n                <div class=\"input-group input-group-sm pull-left\" style=\"width: 150px;\">\r\n                    <input class=\"form-control\" [(ngModel)]=\"gopage\" name=\"table_search\" placeholder=\"Tới trang\" type=\"text\">\r\n                    <div class=\"input-group-btn\">\r\n                        <button class=\"btn btn-default\" (click)=\"gotoPage()\" type=\"\">\r\n                            <i class=\"fa fa-arrow-circle-right\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-sm no-margin pull-right\">\r\n                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a (click)=\"setPage(1)\">First</a>\r\n                    </li>\r\n                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                    </li>\r\n                    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                        <a (click)=\"setPage(page)\">{{page}}</a>\r\n                    </li>\r\n                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                    </li>\r\n                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__ = __webpack_require__("./src/app/_services/localstorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CategoriesComponent = (function () {
    function CategoriesComponent(router, categoryService, pagerService, localStorageService, toastr, vcr, spinnerService) {
        this.router = router;
        this.categoryService = categoryService;
        this.pagerService = pagerService;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.categories = [];
        this.totalPage = 1;
        this.category = {};
        this.allDatas = {};
        this.pager = {};
        this.allGroup = [];
        this.idGroup = '';
        this.toastr.setRootViewContainerRef(vcr);
        this.sort = 'Name';
        this.page = 0;
        this.amount = 10;
        this.nameBtnCreate = 'Tạo';
        this.isUpdating = false;
        this.keysearch = '';
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        $('#btn-cancel').hide();
        this.loadAllGroupCategories();
        this.loadAllCategories(this.sort, this.page, this.amount, this.keysearch);
        var currentUrl = this.router.url;
    };
    CategoriesComponent.prototype.loadAllGroupCategories = function () {
        var _this = this;
        this.categoryService.getAllGroupForCategory().subscribe(function (data) {
            _this.allGroup = data;
            $('#select2-group').select2();
        });
    };
    CategoriesComponent.prototype.loadAllCategories = function (sort, page, amount, keysearch) {
        var _this = this;
        this.categoryService.getAll(sort, page, amount, keysearch).subscribe(function (data) {
            _this.categories = data.Data;
            _this.pagedItems = data.Data;
            _this.amount = data.Amount;
            _this.totalPage = data.TotalPage;
            _this.totalRecord = data.TotalRecord;
            _this.allDatas = data;
            _this.pager = _this.pagerService.getPager(_this.allDatas.TotalPage, _this.allDatas.TotalRecord, page, _this.amount);
            _this.page = page;
        });
    };
    CategoriesComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.loadAllCategories(this.sort, page - 1, this.amount, this.keysearch);
    };
    CategoriesComponent.prototype.CreateCategory = function () {
        var _this = this;
        var selectedCates = $("#select2-group").val();
        this.category.GroupId = selectedCates;
        this.spinnerService.show();
        if (this.isUpdating) {
            this.category.Id = this.idUpdate;
            this.categoryService.update(this.category).subscribe(function (data) {
                _this.category.Name = '';
                _this.category.Description = '';
                _this.isUpdating = false;
                _this.nameBtnCreate = 'Tạo';
                $('#btn-cancel').hide();
                _this.spinnerService.hide();
                _this.loadAllCategories(_this.sort, _this.page, _this.amount, _this.keysearch);
                _this.toastr.success('Cập nhật loại sản phẩm thành công!', 'Thành Công!');
            });
        }
        else {
            this.categoryService.create(this.category).subscribe(function (data) {
                _this.category.Name = '';
                _this.category.Description = '';
                _this.spinnerService.hide();
                _this.loadAllCategories(_this.sort, _this.page, _this.amount, _this.keysearch);
                _this.toastr.success('Tạo loại sản phẩm thành công!', 'Thành Công!');
            });
        }
    };
    CategoriesComponent.prototype.UpdateCategory = function (item) {
        this.category.Name = item.Name;
        this.category.Description = item.Description;
        this.nameBtnCreate = 'Sửa';
        this.idUpdate = item.Id;
        this.isUpdating = true;
        $('#select2-group').val(item.groupCategory.Id).trigger('change');
        $('#btn-cancel').show();
    };
    CategoriesComponent.prototype.cancelUpdate = function () {
        this.category.Name = '';
        this.category.Description = '';
        this.nameBtnCreate = 'Tạo';
        this.idUpdate = '';
        this.isUpdating = false;
        $('#btn-cancel').hide();
    };
    CategoriesComponent.prototype.DeteleCategory = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()({
            title: 'Xác nhận xóa?',
            text: "Khi xóa sẽ không khôi phục được!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Hủy',
            confirmButtonText: 'Vâng, Xóa nó đi!'
        }).then(function (result) {
            if (result.value) {
                _this.categoryService.delete(id).subscribe(function (data) {
                    if (_this.categories.length == 1) {
                        _this.page = _this.page - 1;
                    }
                    _this.loadAllCategories(_this.sort, _this.page, _this.amount, _this.keysearch);
                    __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()('Đã xóa!', 'Loại sản phẩm đã xóa thành công.', 'success');
                });
            }
        });
    };
    CategoriesComponent.prototype.gotoPage = function () {
        if (this.gopage != "") {
            this.setPage(+this.gopage);
        }
        else {
            this.setPage(1);
        }
    };
    CategoriesComponent.prototype.goSearch = function () {
        this.setPage(1);
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("./src/app/categories/categories.component.html"),
            styles: [__webpack_require__("./src/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* PagerService */], __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_component__ = __webpack_require__("./src/app/categories/categories.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__categories_component__["a"]; });



/***/ }),

/***/ "./src/app/create-product/create-product.component.css":
/***/ (function(module, exports) {

module.exports = ".bootstrap-tagsinput{\r\n    width: 100% !important;\r\n}\r\n.tag{\r\n    font-size: 14px !important;\r\n}"

/***/ }),

/***/ "./src/app/create-product/create-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"x_panel\">\r\n            <div class=\"x_title\">\r\n                <h2>Tạo mới sản phẩm\r\n                </h2>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"x_content\">\r\n                <br>\r\n                <form class=\"form-horizontal form-label-left\">\r\n\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Tên sản phẩm</label>\r\n                        <div class=\"col-lg-6 col-md-9 col-sm-9 col-xs-12\">\r\n                            <input type=\"text\" name=\"Name\" [(ngModel)]=\"product.Name\" class=\"form-control\" id=\"\" placeholder=\"Tên sản phẩm...\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Nhãn hiệu </label>\r\n                        <div class=\"col-lg-6 col-md-9 col-sm-9 col-xs-12\">\r\n                            <select class=\"form-control\" id=\"select2-brand\">\r\n                                <option *ngFor=\"let item of brands; let i = index\" value=\"{{item.Id}}\">\r\n                                    {{item.Name}}\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Loại sản phẩm </label>\r\n                        <div class=\"col-lg-6 col-md-9 col-sm-9 col-xs-12\">\r\n                            <select class=\"form-control\" id=\"select2-group\">\r\n                                <option *ngFor=\"let item of categories; let i = index\" value=\"{{item.Id}}\">\r\n                                    {{item.Name}} - <p>( Nhóm loại: </p> {{item.groupCategory.Name}} )\r\n                                </option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Link tải driver</label>\r\n                        <div class=\"col-lg-6 col-md-9 col-sm-9 col-xs-12\">\r\n                            <input type=\"text\" name=\"LinkDriver\" [(ngModel)]=\"product.LinkDriver\" class=\"form-control\" id=\"\" placeholder=\"Link tải driver...\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Kích cỡ </label>\r\n                        <div class=\"col-lg-6 col-md-9 col-sm-9 col-xs-12\">\r\n                            <div class=\"x_panel\" *ngFor=\"let item of listSize; let i = index;\">\r\n                                <div class=\"x_title\">\r\n                                    <h2>Kích cỡ số {{i + 1}}\r\n                                    </h2>\r\n                                    <div class=\"clearfix\"></div>\r\n                                </div>\r\n                                <div class=\"x_content\">\r\n                                    <form class=\"form-horizontal\">\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 form-group has-feedback\">\r\n                                            <input type=\"text\" name=\"name-{{i}}\" [(ngModel)]=\"item.Name\" class=\"form-control\" placeholder=\"Tên size\">\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 form-group has-feedback\">\r\n                                            <input type=\"text\" name=\"price-{{i}}\" [(ngModel)]=\"item.Price\" class=\"form-control\" placeholder=\"Giá bán lẻ\">\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 form-group has-feedback\">\r\n                                            <input type=\"text\" name=\"price-retail-{{i}}\" [(ngModel)]=\"item.PriceRetail\" class=\"form-control\" placeholder=\"Giá bán sĩ\">\r\n                                        </div>\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 form-group has-feedback\">\r\n                                            <input type=\"text\" name=\"quantity-{{i}}\" [(ngModel)]=\"item.Quantity\" class=\"form-control\" placeholder=\"Số lượng\">\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-6 col-sm-6 col-xs-12 form-group has-feedback\">\r\n                                            <input type=\"text\" name=\"quantity-warning-{{i}}\" [(ngModel)]=\"item.QuantityWarning\" class=\"form-control\" placeholder=\"Số lượng cảnh báo\">\r\n                                        </div>\r\n                                        <div *ngIf=\"i !== listSize.length - 1\" class=\"col-md-6 col-sm-6 col-xs-12 form-group has-feedback\">\r\n                                            <button type=\"button\" (click)=\"removeSize(i)\" class=\"btn btn-danger\">\r\n                                                <span>\r\n                                                    <i class=\"fa fa-minus\"></i>\r\n                                                </span>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div *ngIf=\"i === listSize.length - 1\" class=\"col-md-6 col-sm-6 col-xs-12 form-group has-feedback\">\r\n                                            <button type=\"button\" (click)=\"addSize()\" class=\"btn btn-success\">\r\n                                                <span>\r\n                                                    <i class=\"fa fa-plus\"></i>\r\n                                                </span>\r\n                                            </button>\r\n                                        </div>\r\n\r\n                                        <div class=\"ln_solid\"></div>\r\n\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Màu sắc</label>\r\n                        <div class=\"col-lg-6 col-md-9 col-sm-9 col-xs-12\">\r\n                            <div class=\"row\" *ngFor=\"let item of listColor; let i = index;trackBy:trackByIndex;\">\r\n                                <div class=\"col-md-11\">\r\n                                    <div id=\"cp-{{i}}\" class=\"input-group colorpicker-component\">\r\n                                        <input name=\"something\" type=\"text\" class=\"form-control input-lg\" value=\"{{item}}\" />\r\n                                        <span class=\"input-group-addon\">\r\n                                            <i></i>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-1\">\r\n                                    <button class=\"btn btn-danger btn-add-color\" *ngIf=\"i !== listColor.length - 1\" (click)=\"removeColor(i)\">\r\n                                        <span>\r\n                                            <i class=\"fa fa-minus\"></i>\r\n                                        </span>\r\n                                    </button>\r\n                                    <button class=\"btn btn-success btn-add-color\" *ngIf=\"i === listColor.length - 1\" (click)=\"addColor()\">\r\n                                        <span>\r\n                                            <i class=\"fa fa-plus\"></i>\r\n                                        </span>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Thông số kỹ thuật\r\n                            <span class=\"required\">*</span>\r\n                        </label>\r\n                        <div class=\"col-lg-6 col-md-9 col-sm-9 col-xs-12\">\r\n                            <div id=\"DescEditor\"></div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Hình ảnh\r\n                            <span class=\"required\">*</span>\r\n                        </label>\r\n                        <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n                            <input type=\"file\" class=\"form-control\" multiple (change)=\"onChange($event)\">\r\n                        </div>\r\n                        <div class=\"col-md-3 col-sm-3 col-xs-12\">\r\n                            <div id=\"progess-load\" class=\"progress-bar progress-bar-green\" style=\"width: 90%;\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Xem hình ảnh\r\n                        </label>\r\n                        <div class=\"col-lg-6 col-md-9 col-sm-9 col-xs-12\">\r\n                            <div class=\"row\">\r\n                                <div *ngFor=\"let image of listImages; let i = index\" class=\"col-md-3 col-sm-3 col-xs-12\">\r\n                                    <div class=\"x_panel\">\r\n                                        <div class=\"x_title\">\r\n                                            <ul class=\"nav navbar-right panel_toolbox\">\r\n                                                <li>\r\n                                                    <a (click)=\"removeImage(image.Id)\">\r\n                                                        <i class=\"fa fa-close\"></i>\r\n                                                    </a>\r\n                                                </li>\r\n                                            </ul>\r\n                                            <div class=\"clearfix\"></div>\r\n                                        </div>\r\n                                        <div class=\"x_content\">\r\n                                            <img style=\"width: 100px; height: 100px;\" src=\"{{image.Path}}\" />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"progress xs\">\r\n                        <div id=\"progess-load\" class=\"progress-bar progress-bar-green\" style=\"width: 90%;\"></div>\r\n                    </div> -->\r\n\r\n                    <div class=\"ln_solid\"></div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-lg-6 col-md-9 col-sm-9 col-xs-12 col-md-offset-3\">\r\n                            <button type=\"button\" class=\"btn btn-primary\">Cancel</button>\r\n                            <button type=\"reset\" class=\"btn btn-primary\">Reset</button>\r\n                            <button type=\"\" (click)=\"createProduct()\" class=\"btn btn-success\">Tạo sản phẩm</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"col-md-12\">\r\n    <div class=\"box box-info\">\r\n        <div class=\"box-header with-border\">\r\n            <h3 class=\"box-title\">Tạo thêm sản phẩm mới</h3>\r\n        </div>\r\n        <form class=\"form-horizontal\">\r\n            <div id=\"uploading\">\r\n                <div class=\"clearfix\">\r\n                    <span class=\"pull-left\">Uploading...</span>\r\n                    <small style=\"margin-left: 30px;\" class=\"\">{{progressUpload}} %</small>\r\n                </div>\r\n                <div class=\"progress xs\">\r\n                    <div id=\"progess-load\" class=\"progress-bar progress-bar-green\" style=\"width: 90%;\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" class=\"col-sm-2 control-label\">Tên sản phẩm</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"text\" name=\"Name\" [(ngModel)]=\"product.Name\" class=\"form-control\" id=\"\" placeholder=\"Tên sản phẩm...\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" class=\"col-sm-2 control-label\">Giá sản phẩm</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"text\" name=\"Price\" [(ngModel)]=\"product.Price\" class=\"form-control\" id=\"\" placeholder=\"giá sản phẩm...\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" class=\"col-sm-2 control-label\">Mô tả ngắn sản phẩm</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <textarea rows=\"4\" name=\"ShortDescription\" [(ngModel)]=\"product.ShortDescription\" class=\"form-control\" id=\"\"></textarea>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" class=\"col-sm-2 control-label\">Size có sẵn</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"text\" value=\"\" data-role=\"tagsinput\" id=\"sizes\" class=\"form-control\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" class=\"col-sm-2 control-label\">Số lượng có sẵn</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"number\" name=\"Quantity\" [(ngModel)]=\"product.Quantity\" class=\"form-control\" id=\"\" placeholder=\"Số lượng\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" class=\"col-sm-2 control-label\">Loại sản phẩm</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <select class=\"form-control\" id=\"select2-categories\" multiple=\"multiple\">\r\n                            <option *ngFor=\"let item of categories; let i = index\" value=\"{{item.Id}}\">{{item.Name}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" class=\"col-sm-2 control-label\">Mô tả cho sản phẩm</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <div id=\"DescEditor\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" class=\"col-sm-2 control-label\">Hình ảnh</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"file\" class=\"form-control\" multiple (change)=\"onChange($event)\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"box-footer\">\r\n                <button type=\"submit\" class=\"btn btn-default\">Hủy</button>\r\n                <button type=\"\" (click)=\"createProduct()\" class=\"btn btn-info pull-right\">Tạo sản phẩm</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/create-product/create-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_brand_service__ = __webpack_require__("./src/app/_services/brand.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateProductComponent = (function () {
    function CreateProductComponent(router, categoryService, pagerService, productService, toastr, vcr, imagesService, brandService) {
        this.router = router;
        this.categoryService = categoryService;
        this.pagerService = pagerService;
        this.productService = productService;
        this.toastr = toastr;
        this.imagesService = imagesService;
        this.brandService = brandService;
        this.categories = [];
        this.brands = [];
        this.product = {};
        this.listColor = ['#DD0F20'];
        this.listSize = [
            {
                Name: '', Price: '', PriceRetail: '', Quantity: '', QuantityWarning: ''
            }
        ];
        this.listImages = [];
        this.description = 'Mô tả cho sản phẩm';
        this.toastr.setRootViewContainerRef(vcr);
    }
    CreateProductComponent.prototype.ngOnInit = function () {
        $('#uploading').hide();
        this.progressUpload = 0;
        this.loadAllBrandsForProduct();
        this.loadAllCatagories();
        $('#sizes').tagsinput();
        var timeOut = setTimeout(function () {
            CKEDITOR.replace('DescEditor', {
                language: 'vi'
            });
            $('#cp-0').colorpicker();
        }, 1000);
    };
    CreateProductComponent.prototype.loadAllBrandsForProduct = function () {
        var _this = this;
        this.brandService.getAllForProduct().subscribe(function (data) {
            _this.brands = data;
            $('#select2-brand').select2();
        });
    };
    CreateProductComponent.prototype.loadAllCatagories = function () {
        var _this = this;
        this.categoryService.getAllForProduct().subscribe(function (data) {
            _this.categories = data.Data;
            $('#select2-group').select2();
        });
    };
    CreateProductComponent.prototype.createProduct = function () {
        var _this = this;
        var selectedCate = $("#select2-group").val();
        var selectedBrand = $("#select2-brand").val();
        // get colors
        var colors = [];
        this.listColor.forEach(function (item, index) {
            var color = $('#cp-' + index + ' input').val();
            colors.push(color);
        });
        $('#uploading').show();
        var content = CKEDITOR.instances.DescEditor.getData();
        this.product.Description = $('<div/>').text(content).html();
        this.product.Description = this.product.Description.replace(/\s{2,}/g, '');
        this.product.CategoryId = selectedCate;
        this.product.BrandId = selectedBrand;
        this.product.Sizes = $('#sizes').val();
        this.product.Colors = colors.join();
        this.product.Sizes = this.listSize;
        this.product.Images = this.listImages;
        this.productService.create(this.product).subscribe(function (res) {
            _this.toastr.success('Tạo sản phẩm thành công!', 'Thành công!');
            _this.router.navigate(['/products']);
        });
    };
    CreateProductComponent.prototype.onChange = function (event) {
        var _this = this;
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        this.images = files;
        // call api upload images
        var formData = new FormData();
        for (var i = 0; i < this.images.length; i++) {
            formData.append('files', this.images[i], this.images[i].name);
        }
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var images = JSON.parse(xhr.response);
                    images.forEach(function (element) {
                        element.Path = __WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* AppSettings */].API_ENDPOINT_IMAGE + element.Path.substr(1);
                        _this.listImages.push(element);
                    });
                }
                else {
                }
            }
        };
        xhr.upload.onprogress = function (event) {
            _this.progressUpload = Math.round(event.loaded / event.total * 100);
            $('#progess-load').css('width', _this.progressUpload + '%');
        };
        // xhr.setRequestHeader('Authorization', localStorage.token_type + ' ' + localStorage.access_token);
        xhr.open("POST", __WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'products/UploadImagesToPreview', true);
        xhr.send(formData);
    };
    CreateProductComponent.prototype.addColor = function () {
        this.listColor.push('#000000');
        var newPosition = this.listColor.length - 1;
        setTimeout(function () {
            $('#cp-' + newPosition).colorpicker();
        }, 100);
    };
    CreateProductComponent.prototype.removeColor = function (index) {
        if (this.listColor.length !== 1) {
            this.listColor.splice(index, 1);
        }
    };
    CreateProductComponent.prototype.addSize = function () {
        this.listSize.push({
            Name: '', Price: '', PriceRetail: '', Quantity: '', QuantityWarning: ''
        });
    };
    CreateProductComponent.prototype.removeSize = function (index) {
        if (this.listSize.length !== 1) {
            this.listSize.splice(index, 1);
        }
    };
    CreateProductComponent.prototype.removeImage = function (id) {
        var _this = this;
        this.imagesService.deleteImage(id).subscribe(function (data) {
            if (data.status == 200) {
                // remove 
                var index = _this.findIndexImage(id);
                if (index != -1) {
                    _this.listImages.splice(index);
                }
            }
        });
    };
    CreateProductComponent.prototype.findIndexImage = function (id) {
        var index = -1;
        this.listImages.forEach(function (item, i) {
            if (item.Id === id) {
                index = i;
            }
        });
        return index;
    };
    CreateProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("./src/app/create-product/create-product.component.html"),
            styles: [__webpack_require__("./src/app/create-product/create-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* PagerService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* ImageService */], __WEBPACK_IMPORTED_MODULE_5__services_brand_service__["a" /* BrandService */]])
    ], CreateProductComponent);
    return CreateProductComponent;
}());



/***/ }),

/***/ "./src/app/create-product/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_product_component__ = __webpack_require__("./src/app/create-product/create-product.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__create_product_component__["a"]; });



/***/ }),

/***/ "./src/app/group-categories/group-categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12 col-md-4\">\r\n        <div class=\"x_panel\">\r\n            <div class=\"x_title\">\r\n                <h2>Tạo thêm loại\r\n                </h2>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"x_content\">\r\n\r\n                <!-- start form for validation -->\r\n                <form>\r\n                    <label for=\"fullname\">Tên loại sản phẩm * :</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"Name\" [(ngModel)]=\"category.Name\" #Name=\"ngModel\" required>\r\n\r\n                    <label for=\"email\">Mô tả * :</label>\r\n                    <textarea class=\"form-control\" rows=\"3\" name=\"Description\" [(ngModel)]=\"category.Description\" #Description=\"ngModel\"></textarea>\r\n                    <br/>\r\n                    <button type=\"\" (click)=\"CreateCategory()\" class=\"btn btn-primary\">{{nameBtnCreate}}</button>\r\n                    <button type=\"\" (click)=\"cancelUpdate()\" class=\"btn btn-default\">Hủy</button>\r\n\r\n                </form>\r\n                <!-- end form for validations -->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-8\">\r\n        <div class=\"x_panel\">\r\n            <div class=\"x_title\">\r\n                <h2>Danh sách loại sản phẩm\r\n                </h2>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"x_content\">\r\n                <div>\r\n                    <div class=\"row\">\r\n                        <!-- <ul class=\"nav navbar-left panel_toolbox\">\r\n                            <li style=\"margin-right: 10px;\">\r\n                                <label>Show</label>\r\n                            </li>\r\n                            <li style=\"margin-right: 10px;\">\r\n                                <select name=\"datatable_length\" aria-controls=\"datatable\" class=\"form-control input-sm\">\r\n                                    <option value=\"10\">10</option>\r\n                                    <option value=\"25\">25</option>\r\n                                    <option value=\"50\">50</option>\r\n                                    <option value=\"100\">100</option>\r\n                                </select>\r\n                            </li>\r\n                            <li>\r\n                                <label>entries</label>\r\n                            </li>\r\n                        </ul> -->\r\n                        <!-- <div class=\"col-sm-6\">\r\n                            <div style=\"float: left;\">\r\n                                <label>Show\r\n                                    <select name=\"datatable_length\" aria-controls=\"datatable\" class=\"form-control input-sm\">\r\n                                        <option value=\"10\">10</option>\r\n                                        <option value=\"25\">25</option>\r\n                                        <option value=\"50\">50</option>\r\n                                        <option value=\"100\">100</option>\r\n                                    </select> entries</label>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n                            <div id=\"datatable_filter\" class=\"dataTables_filter\">\r\n                                <label>Search:\r\n                                    <input type=\"search\" class=\"form-control input-sm\" placeholder=\"\" aria-controls=\"datatable\">\r\n                                </label>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <table id=\"datatable\" class=\"table table-striped table-bordered dataTable no-footer\" role=\"grid\" aria-describedby=\"datatable_info\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>STT</th>\r\n                                        <th width=\"35%\">Tên loại</th>\r\n                                        <th>Mô tả</th>\r\n                                        <th width=\"35%\">Hành động</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of pagedItems; let i = index\">\r\n                                        <td>{{page * amount + i + 1}}</td>\r\n                                        <td>{{item.Name}}</td>\r\n                                        <td>{{item.Description}}</td>\r\n                                        <td>\r\n                                            <button class=\"btn btn-sm btn-info\" (click)=\"UpdateCategory(item)\">Sửa</button>\r\n                                            <button class=\"btn btn-sm btn-danger\" (click)=\"DeteleCategory(item.Id)\">Xóa</button>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-5\">\r\n                            <div class=\"dataTables_info\" id=\"datatable_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 10 of 57 entries</div>\r\n                        </div>\r\n                        <div class=\"col-sm-7\">\r\n                            <div class=\"dataTables_paginate paging_simple_numbers\" id=\"datatable_paginate\">\r\n                                <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-sm no-margin pull-right\">\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                        <a (click)=\"setPage(1)\">First</a>\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                        <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                                    </li>\r\n                                    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                                        <a (click)=\"setPage(page)\">{{page}}</a>\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                        <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                        <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"box box-info\">\r\n            <div class=\"box-header\">\r\n                <h3 class=\"box-title\">Danh sách loại sản phẩm</h3>\r\n\r\n                <div class=\"box-tools\">\r\n                    <div class=\"input-group input-group-sm\" style=\"width: 150px;\">\r\n                        <input type=\"text\" name=\"table_search\" [(ngModel)]=\"keysearch\" class=\"form-control pull-right\" placeholder=\"Tìm kiếm\">\r\n\r\n                        <div class=\"input-group-btn\">\r\n                            <button type=\"\" (click)=\"goSearch()\" class=\"btn btn-default\">\r\n                                <i class=\"fa fa-search\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"box-body table-responsive no-padding\">\r\n                <table class=\"table table-hover\">\r\n                    <tbody>\r\n                        <tr>\r\n                            <th>STT</th>\r\n                            <th width=\"15%\">Tên loại</th>\r\n                            <th>Mô tả</th>\r\n                            <th width=\"15%\">Hành động</th>\r\n                        </tr>\r\n                        <tr *ngFor=\"let item of pagedItems; let i = index\">\r\n                            <td>{{page * amount + i + 1}}</td>\r\n                            <td>{{item.Name}}</td>\r\n                            <td>{{item.Description}}</td>\r\n                            <td>\r\n                                <button class=\"btn btn-sm btn-info\" (click)=\"UpdateCategory(item)\">Sửa</button>\r\n                                <button class=\"btn btn-sm btn-danger\" (click)=\"DeteleCategory(item.Id)\">Xóa</button>\r\n                            </td>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"box-footer clearfix\">\r\n                <div class=\"input-group input-group-sm pull-left\" style=\"width: 150px;\">\r\n                    <input class=\"form-control\" [(ngModel)]=\"gopage\" name=\"table_search\" placeholder=\"Tới trang\" type=\"text\">\r\n                    <div class=\"input-group-btn\">\r\n                        <button class=\"btn btn-default\" (click)=\"gotoPage()\" type=\"\">\r\n                            <i class=\"fa fa-arrow-circle-right\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-sm no-margin pull-right\">\r\n                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a (click)=\"setPage(1)\">First</a>\r\n                    </li>\r\n                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                        <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                    </li>\r\n                    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                        <a (click)=\"setPage(page)\">{{page}}</a>\r\n                    </li>\r\n                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                    </li>\r\n                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                        <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/group-categories/group-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__ = __webpack_require__("./src/app/_services/localstorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroupCategoriesComponent = (function () {
    function GroupCategoriesComponent(router, categoryService, pagerService, localStorageService, toastr, vcr, spinnerService) {
        this.router = router;
        this.categoryService = categoryService;
        this.pagerService = pagerService;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.categories = [];
        this.category = {};
        this.allDatas = {};
        this.pager = {};
        this.toastr.setRootViewContainerRef(vcr);
        this.sort = 'Name';
        this.page = 0;
        this.amount = 10;
        this.nameBtnCreate = 'Tạo';
        this.isUpdating = false;
        this.keysearch = '';
    }
    GroupCategoriesComponent.prototype.ngOnInit = function () {
        $('#btn-cancel').hide();
        this.loadAllCategories(this.sort, this.page, this.amount, this.keysearch);
        var currentUrl = this.router.url;
    };
    GroupCategoriesComponent.prototype.loadAllCategories = function (sort, page, amount, keysearch) {
        var _this = this;
        this.spinnerService.show();
        this.categoryService.getAllGroup(sort, page, amount, keysearch).subscribe(function (data) {
            _this.categories = data.Data;
            _this.pagedItems = data.Data;
            _this.allDatas = data;
            _this.pager = _this.pagerService.getPager(_this.allDatas.TotalPage, _this.allDatas.TotalRecord, page, _this.amount);
            _this.page = page;
            _this.spinnerService.hide();
        });
    };
    GroupCategoriesComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.loadAllCategories(this.sort, page - 1, this.amount, this.keysearch);
    };
    GroupCategoriesComponent.prototype.CreateCategory = function () {
        var _this = this;
        this.spinnerService.show();
        if (this.isUpdating) {
            this.category.Id = this.idUpdate;
            this.categoryService.updateGroup(this.category).subscribe(function (data) {
                _this.loadAllCategories(_this.sort, _this.page, _this.amount, _this.keysearch);
                _this.category.Name = '';
                _this.category.Description = '';
                _this.isUpdating = false;
                _this.nameBtnCreate = 'Tạo';
                $('#btn-cancel').hide();
                _this.spinnerService.hide();
                _this.toastr.success('Cập nhật loại sản phẩm thành công!', 'Thành Công!');
            });
        }
        else {
            this.categoryService.createGroup(this.category).subscribe(function (data) {
                _this.loadAllCategories(_this.sort, _this.page, _this.amount, _this.keysearch);
                _this.category.Name = '';
                _this.category.Description = '';
                _this.spinnerService.hide();
                _this.toastr.success('Tạo loại sản phẩm thành công!', 'Thành Công!');
            });
        }
    };
    GroupCategoriesComponent.prototype.UpdateCategory = function (item) {
        this.category.Name = item.Name;
        this.category.Description = item.Description;
        this.nameBtnCreate = 'Sửa';
        this.idUpdate = item.Id;
        this.isUpdating = true;
        $('#btn-cancel').show();
    };
    GroupCategoriesComponent.prototype.cancelUpdate = function () {
        this.category.Name = '';
        this.category.Description = '';
        this.nameBtnCreate = 'Tạo';
        this.idUpdate = '';
        this.isUpdating = false;
        $('#btn-cancel').hide();
    };
    GroupCategoriesComponent.prototype.DeteleCategory = function (id) {
        var _this = this;
        this.categoryService.deleteGroup(id).subscribe(function (data) {
            _this.loadAllCategories(_this.sort, _this.page, _this.amount, _this.keysearch);
            _this.toastr.info('Xóa loại sản phẩm thành công!', 'Thành Công!');
        });
    };
    GroupCategoriesComponent.prototype.gotoPage = function () {
        if (this.gopage != "") {
            this.setPage(+this.gopage);
        }
        else {
            this.setPage(1);
        }
    };
    GroupCategoriesComponent.prototype.goSearch = function () {
        this.setPage(1);
    };
    GroupCategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("./src/app/group-categories/group-categories.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* PagerService */], __WEBPACK_IMPORTED_MODULE_4__services_localstorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_5_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], GroupCategoriesComponent);
    return GroupCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "Home nè"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.deleteUser = function (id) {
    };
    HomeComponent.prototype.loadAllUsers = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("./src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });



/***/ }),

/***/ "./src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Login</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, toastr, vcr, spinnerService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.model = {};
        this.toastr.setRootViewContainerRef(vcr);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('access_token')) {
            this.getInfoUser();
        }
        // // reset login status
        // this.authenticationService.logout();
        // // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.spinnerService.show();
        this.model.grant_type = 'password';
        this.authenticationService.login(this.model)
            .subscribe(function (data) {
            _this.spinnerService.hide();
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('expires_in', data.expires_in);
            localStorage.setItem('token_type', data.token_type);
            _this.getInfoUser();
            // this.router.navigate([this.returnUrl]);
        }, function (error) {
            _this.spinnerService.hide();
        });
    };
    LoginComponent.prototype.getInfoUser = function () {
        var _this = this;
        this.spinnerService.show();
        var token = localStorage.getItem('access_token');
        if (token) {
            this.authenticationService.getProfile().subscribe(function (response) {
                // this.storageService.loginSuccess(response);
                _this.router.navigate(['/']);
                _this.toastr.success('Login successfully!', 'Yeah!');
                _this.spinnerService.hide();
            }, function (error) {
                _this.spinnerService.hide();
                console.log(error.json());
            });
        }
        else {
            this.spinnerService.hide();
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("./src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/product-brand/product-brand.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-brand/product-brand.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12 col-md-4\">\r\n        <div class=\"x_panel\">\r\n            <div class=\"x_title\">\r\n                <h2>Tạo thương hiệu\r\n                </h2>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"x_content\">\r\n\r\n                <!-- start form for validation -->\r\n                <form>\r\n                    <label for=\"fullname\">Tên thương hiệu * :</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"namebrand\" [(ngModel)]=\"brand.Name\" required placeholder=\"Nhập tên thương hiệu (ví dụ Canon, Samsung...)\">\r\n                    <label for=\"fullname\">Logo thương hiệu * :</label>\r\n                    <input type=\"file\" class=\"form-control\" id=\"logo-image\" (change)=\"onChange($event)\">\r\n                    <br/>\r\n                    <img *ngIf=\"logo.Path !== ''\" id=\"brandImg\" [src]=\"logo.Path\" style=\"max-width: 80px; max-height: 80px;\" />\r\n                    <br/>\r\n                    <br/>\r\n                    <button type=\"\" (click)=\"CreateBrand()\" class=\"btn btn-primary\">{{nameBtnCreate}}</button>\r\n                    <button type=\"\" (click)=\"cancelUpdate()\" class=\"btn btn-default\">Hủy</button>\r\n\r\n                </form>\r\n                <!-- end form for validations -->\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-8\">\r\n        <div class=\"x_panel\">\r\n            <div class=\"x_title\">\r\n                <h2>Danh sách thương hiệu\r\n                </h2>\r\n                <div class=\"clearfix\"></div>\r\n            </div>\r\n            <div class=\"x_content\">\r\n                <div>\r\n                    <div class=\"row\">\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                            <table id=\"datatable\" class=\"table table-striped table-bordered dataTable no-footer\" role=\"grid\" aria-describedby=\"datatable_info\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>STT</th>\r\n                                        <th width=\"5%\">Logo</th>\r\n                                        <th>Tên loại</th>\r\n                                        <th>Hành động</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of pagedItems; let i = index\">\r\n                                        <td>{{page * amount + i + 1}}</td>\r\n                                        <td>\r\n                                            <img style=\"max-width: 80px; max-height: 80px;\" src=\"{{item.Image}}\" />\r\n                                        </td>\r\n                                        <th>{{item.Name}}</th>\r\n                                        <td>\r\n                                            <button class=\"btn btn-sm btn-info\" (click)=\"UpdateCategory(item)\">Sửa</button>\r\n                                            <button class=\"btn btn-sm btn-danger\" (click)=\"DeteleCategory(item.Id)\">Xóa</button>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-5\">\r\n                            <div class=\"dataTables_info\" id=\"datatable_info\" role=\"status\" aria-live=\"polite\">\r\n                                Hiển thị {{amount * page + 1}} đến {{amount * page + Brands.length}} của {{totalRecord}} kết quả</div>\r\n                        </div>\r\n                        <div class=\"col-sm-7\">\r\n                            <div class=\"dataTables_paginate paging_simple_numbers\" id=\"datatable_paginate\">\r\n                                <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-sm no-margin pull-right\">\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                        <a (click)=\"setPage(1)\">First</a>\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                        <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                                    </li>\r\n                                    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                                        <a (click)=\"setPage(page)\">{{page}}</a>\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                        <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                                    </li>\r\n                                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                        <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/product-brand/product-brand.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductBrandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_brand_service__ = __webpack_require__("./src/app/_services/brand.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_localstorage_service__ = __webpack_require__("./src/app/_services/localstorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__ = __webpack_require__("./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_images_service__ = __webpack_require__("./src/app/_services/images.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductBrandComponent = (function () {
    function ProductBrandComponent(router, brandService, pagerService, localStorageService, toastr, vcr, spinnerService, imagesService) {
        this.router = router;
        this.brandService = brandService;
        this.pagerService = pagerService;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.spinnerService = spinnerService;
        this.imagesService = imagesService;
        this.Brands = [];
        this.totalPage = 1;
        this.brand = {};
        this.allDatas = {};
        this.pager = {};
        this.allGroup = [];
        this.idGroup = '';
        this.logo = {
            Id: '',
            Path: ''
        };
        this.toastr.setRootViewContainerRef(vcr);
        this.sort = 'Name';
        this.page = 0;
        this.amount = 10;
        this.nameBtnCreate = 'Tạo';
        this.isUpdating = false;
        this.keysearch = '';
    }
    ProductBrandComponent.prototype.ngOnInit = function () {
        $('#btn-cancel').hide();
        this.loadAllBrands(this.sort, this.page, this.amount, this.keysearch);
        var currentUrl = this.router.url;
    };
    ProductBrandComponent.prototype.loadAllBrands = function (sort, page, amount, keysearch) {
        var _this = this;
        this.brandService.getAll(sort, page, amount, keysearch).subscribe(function (data) {
            console.log(data);
            _this.Brands = data.Data;
            _this.pagedItems = data.Data;
            _this.amount = data.Amount;
            _this.totalPage = data.TotalPage;
            _this.totalRecord = data.TotalRecord;
            _this.allDatas = data;
            _this.pager = _this.pagerService.getPager(_this.allDatas.TotalPage, _this.allDatas.TotalRecord, page, _this.amount);
            _this.page = page;
        });
    };
    ProductBrandComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.loadAllBrands(this.sort, page - 1, this.amount, this.keysearch);
    };
    ProductBrandComponent.prototype.CreateBrand = function () {
        var _this = this;
        this.spinnerService.show();
        this.brand.Image = this.logo.Path;
        if (this.isUpdating) {
            // 
        }
        else {
            this.brand.Id = this.idUpdate;
            // this.categoryService.update(this.category).subscribe(data => {
            // 	this.category.Name = '';
            // 	this.category.Description = '';
            // 	this.isUpdating = false;
            // 	this.nameBtnCreate = 'Tạo';
            // 	$('#btn-cancel').hide();
            // 	this.spinnerService.hide();
            // 	this.loadAllBrands(this.sort, this.page, this.amount, this.keysearch);
            // 	this.toastr.success('Cập nhật loại sản phẩm thành công!', 'Thành Công!');
            // });
            this.brandService.create(this.brand).subscribe(function (data) {
                _this.brand.Name = '';
                _this.logo = { Id: '', Path: '' };
                $('#logo-image').val(null);
                _this.spinnerService.hide();
                _this.loadAllBrands(_this.sort, _this.page, _this.amount, _this.keysearch);
                _this.toastr.success('Tạo nhãn hàng thành công!', 'Thành Công!');
            });
        }
    };
    // UpdateCategory(item: any) {
    // 	this.category.Name = item.Name;
    // 	this.category.Description = item.Description;
    // 	this.nameBtnCreate = 'Sửa';
    // 	this.idUpdate = item.Id;
    // 	this.isUpdating = true;
    // 	$('#select2-group').val(item.groupCategory.Id).trigger('change');
    // 	$('#btn-cancel').show();
    // }
    // cancelUpdate() {
    // 	this.category.Name = '';
    // 	this.category.Description = '';
    // 	this.nameBtnCreate = 'Tạo';
    // 	this.idUpdate = '';
    // 	this.isUpdating = false;
    // 	$('#btn-cancel').hide();
    // }
    // DeteleCategory(id: any) {
    // 	Swal({
    // 		title: 'Xác nhận xóa?',
    // 		text: "Khi xóa sẽ không khôi phục được!",
    // 		type: 'warning',
    // 		showCancelButton: true,
    // 		confirmButtonColor: '#3085d6',
    // 		cancelButtonColor: '#d33',
    // 		cancelButtonText: 'Hủy',
    // 		confirmButtonText: 'Vâng, Xóa nó đi!'
    // 	}).then((result) => {
    // 		if (result.value) {
    // 			this.categoryService.delete(id).subscribe(data => {
    // 				if (this.Brands.length == 1) {
    // 					this.page = this.page - 1;
    // 				}
    // 				this.loadAllBrands(this.sort, this.page, this.amount, this.keysearch);
    // 				Swal(
    // 					'Đã xóa!',
    // 					'Loại sản phẩm đã xóa thành công.',
    // 					'success'
    // 				)
    // 			});
    // 		}
    // 	});
    // }
    ProductBrandComponent.prototype.gotoPage = function () {
        if (this.gopage != "") {
            this.setPage(+this.gopage);
        }
        else {
            this.setPage(1);
        }
    };
    ProductBrandComponent.prototype.goSearch = function () {
        this.setPage(1);
    };
    ProductBrandComponent.prototype.onChange = function (event) {
        var _this = this;
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        // call api upload images
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append('files', files[i], files[i].name);
        }
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var images = JSON.parse(xhr.response);
                    images.forEach(function (element) {
                        element.Path = __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* AppSettings */].API_ENDPOINT_IMAGE + element.Path.substr(1);
                    });
                    // delete old image
                    if (_this.logo.Id !== '') {
                        _this.imagesService.deleteImage(_this.logo.Id).subscribe(function (data) {
                        });
                    }
                    _this.logo = images[0];
                }
            }
        };
        // xhr.setRequestHeader('Authorization', localStorage.token_type + ' ' + localStorage.access_token);
        xhr.open("POST", __WEBPACK_IMPORTED_MODULE_7__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'products/UploadImagesToPreview', true);
        xhr.send(formData);
    };
    ProductBrandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-brand',
            template: __webpack_require__("./src/app/product-brand/product-brand.component.html"),
            styles: [__webpack_require__("./src/app/product-brand/product-brand.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_brand_service__["a" /* BrandService */],
            __WEBPACK_IMPORTED_MODULE_4__services__["e" /* PagerService */], __WEBPACK_IMPORTED_MODULE_3__services_localstorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
            __WEBPACK_IMPORTED_MODULE_6_ng4_loading_spinner__["Ng4LoadingSpinnerService"], __WEBPACK_IMPORTED_MODULE_8__services_images_service__["a" /* ImageService */]])
    ], ProductBrandComponent);
    return ProductBrandComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_detail_component__ = __webpack_require__("./src/app/product-detail/product-detail.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__product_detail_component__["a"]; });



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n        <div class=\"box box-info\">\r\n            <div class=\"box-header with-border\">\r\n                <h3 class=\"box-title\">Chi tiết sản phẩm</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form class=\"form-horizontal\" *ngIf=\"loadedContent\">\r\n                <div class=\"box-body\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\" class=\"col-sm-2 control-label\">Tên sản phẩm</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" name=\"Name\" [(ngModel)]=\"product.Name\" class=\"form-control\" id=\"\" placeholder=\"Tên sản phẩm...\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\" class=\"col-sm-2 control-label\">Số lượng có sẵn</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"number\" name=\"Quantity\" [(ngModel)]=\"product.Quantity\" class=\"form-control\" id=\"\" placeholder=\"Số lượng\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\" class=\"col-sm-2 control-label\">Loại sản phẩm</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <select class=\"form-control\" id=\"select2-categories-detail\" multiple=\"multiple\">\r\n                                <option *ngFor=\"let item of categories; let i = index\" value=\"{{item.Id}}\">{{item.Name}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\" class=\"col-sm-2 control-label\">Mô tả cho sản phẩm</label>\r\n                        <div class=\"col-sm-10\" id=\"abc\">\r\n                            <!-- {{product.Description}} -->\r\n                            <ckeditor [(ngModel)]=\"product.Description\" name=\"description\" debounce=\"500\">\r\n                                <p>Hello\r\n                                    <strong>world</strong>\r\n                                </p>\r\n                            </ckeditor>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                            <label for=\"\" class=\"col-sm-2 control-label\">Hình ảnh</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <span style=\"margin-right: 3px;\" *ngFor=\"let item of product.ProductImages\">\r\n                                    <img class=\"image-detail\" style=\"max-width: 90px; max-height: 60px;\" src=\"{{item.Path}}\" />\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    <div class=\"form-group\">\r\n                            <label for=\"\" class=\"col-sm-2 control-label\">Thêm hình ảnh</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"file\" class=\"form-control\" multiple (change)=\"onChange($event)\">\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n                <!-- /.box-body -->\r\n                <div class=\"box-footer\">\r\n                    <button type=\"submit\" class=\"btn btn-default\">Hủy</button>\r\n                    <button type=\"\" (click)=\"createProduct()\" class=\"btn btn-info pull-right\">Tạo sản phẩm</button>\r\n                </div>\r\n                <!-- /.box-footer -->\r\n            </form>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService, categoryService, route, toastr, vcr) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.route = route;
        this.toastr = toastr;
        this.categories = [];
        this.toastr.setRootViewContainerRef(vcr);
        this.loadedContent = false;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.desc = '';
        this.id = this.route.snapshot.params['id'];
        this.loadAllCatagories();
        this.getInfoProduct(this.id);
    };
    ProductDetailComponent.prototype.loadAllCatagories = function () {
        var _this = this;
        this.categoryService.getAllForProduct().subscribe(function (data) {
            _this.categories = data;
            setTimeout(function () {
                $('#select2-categories-detail').select2();
            }, 100);
        });
    };
    ProductDetailComponent.prototype.getInfoProduct = function (id) {
        var _this = this;
        this.productService.getById(id).subscribe(function (product) {
            product.Description = $('<div/>').html(product.Description).text();
            ;
            _this.product = product;
            _this.loadedContent = true;
            /// set value selected categories
            var selectedCates = [];
            _this.product.Categories.forEach(function (e) {
                selectedCates.push(e.Id);
            });
            setTimeout(function () {
                $('#select2-categories-detail').select2().val(selectedCates).trigger('change');
            }, 100);
            _this.product.ProductImages.forEach(function (image) {
                image.Path = __WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* AppSettings */].API_ENDPOINT_IMAGE + image.Path.substr(1);
            });
        });
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__("./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("./src/app/product-detail/product-detail.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["f" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.css":
/***/ (function(module, exports) {

module.exports = ".image-detail{\r\n    padding: 5px;\r\n    border: 1px solid green;\r\n}"

/***/ }),

/***/ "./src/app/products/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_component__ = __webpack_require__("./src/app/products/products.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__products_component__["a"]; });



/***/ }),

/***/ "./src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"x_panel\">\r\n    <div class=\"x_title\">\r\n        <h2>Danh sách sản phẩm\r\n        </h2>\r\n        <ul class=\"nav navbar-right panel_toolbox\">\r\n            <li>\r\n                <a class=\"collapse-link\">\r\n                    <i class=\"fa fa-chevron-up\"></i>\r\n                </a>\r\n            </li>\r\n            <li class=\"dropdown\">\r\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">\r\n                    <i class=\"fa fa-wrench\"></i>\r\n                </a>\r\n                <ul class=\"dropdown-menu\" role=\"menu\">\r\n                    <li>\r\n                        <a href=\"#\">Settings 1</a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#\">Settings 2</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li>\r\n                <a class=\"close-link\">\r\n                    <i class=\"fa fa-close\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n    <div class=\"x_content\">\r\n        <div id=\"datatable-responsive_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap no-footer\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <div class=\"dataTables_length\" id=\"datatable-responsive_length\">\r\n                        <label>Show\r\n                            <select name=\"datatable-responsive_length\" aria-controls=\"datatable-responsive\" class=\"form-control input-sm\">\r\n                                <option value=\"10\">10</option>\r\n                                <option value=\"25\">25</option>\r\n                                <option value=\"50\">50</option>\r\n                                <option value=\"100\">100</option>\r\n                            </select> entries</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                    <div id=\"datatable-responsive_filter\" class=\"dataTables_filter\">\r\n                        <label>Search:\r\n                            <input type=\"search\" class=\"form-control input-sm\" placeholder=\"\" aria-controls=\"datatable-responsive\">\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <table id=\"datatable-responsive\" class=\"table table-striped table-bordered dt-responsive nowrap dataTable no-footer dtr-inline collapsed\"\r\n                        cellspacing=\"0\" width=\"100%\" role=\"grid\" aria-describedby=\"datatable-responsive_info\" style=\"width: 100%;\">\r\n                        <thead>\r\n                            <tr role=\"row\">\r\n                                <th>STT</th>\r\n                                <th width=\"15%\">Tên sản phẩm</th>\r\n                                <th>Loại sản phẩm</th>\r\n                                <th>Nhãn hiệu</th>\r\n                                <th>Hình ảnh</th>\r\n                                <th>Hành động</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let item of pagedItems; let i = index\">\r\n                                <td>{{i + 1}}</td>\r\n                                <td>{{item.Name}}</td>\r\n                                <td>\r\n                                    <strong>{{item.Category.Name}} - ({{item.Category.groupCategory.Name}}) </strong>\r\n                                </td>\r\n                                <td>\r\n                                    <strong>{{item.ProductBrand.Name}}</strong>\r\n                                </td>\r\n                                <td>\r\n                                    <span style=\"margin-right: 3px;\" *ngFor=\"let image of item.ProductImages\">\r\n                                        <img style=\"max-width:80px; max-height:50px;\" src=\"{{image.Path}}\" />\r\n                                    </span>\r\n                                </td>\r\n                                <td>\r\n                                    <button class=\"btn btn-sm btn-info\" (click)=\"detailProduct(item.Id)\">Sửa</button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-5\">\r\n                    <div class=\"dataTables_info\" id=\"datatable-responsive_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 10 of 57 entries</div>\r\n                </div>\r\n                <div class=\"col-sm-7\">\r\n                    <div class=\"dataTables_paginate paging_simple_numbers\" id=\"datatable-responsive_paginate\">\r\n                        <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-sm no-margin pull-right\">\r\n                            <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                <a (click)=\"setPage(1)\">First</a>\r\n                            </li>\r\n                            <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                                <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                            </li>\r\n                            <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                                <a (click)=\"setPage(page)\">{{page}}</a>\r\n                            </li>\r\n                            <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                            </li>\r\n                            <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                                <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n<!-- <div class=\"col-md-12\">\r\n    <div class=\"box box-success\">\r\n        <div class=\"box-header\">\r\n            <h3 class=\"box-title\">Danh sách sản phẩm</h3>\r\n\r\n            <div class=\"box-tools\">\r\n                <div class=\"input-group input-group-sm\" style=\"width: 150px;\">\r\n                    <input type=\"text\" name=\"table_search\" [(ngModel)]=\"keysearch\" class=\"form-control pull-right\" placeholder=\"Tìm kiếm\">\r\n\r\n                    <div class=\"input-group-btn\">\r\n                        <button type=\"\" (click)=\"goSearch()\" class=\"btn btn-default\">\r\n                            <i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"box-body table-responsive no-padding\">\r\n            <ng2-slim-loading-bar color=\"red\" height=\"3px\"></ng2-slim-loading-bar>\r\n            <table class=\"table table-hover\">\r\n                <tbody>\r\n                    <tr>\r\n                        <th>STT</th>\r\n                        <th width=\"15%\">Tên sản phẩm</th>\r\n                        <th width=\"10%\">Số lượng</th>\r\n                        <th>Loại sản phẩm</th>\r\n                        <th>Hình ảnh</th>\r\n                        <th>Hành động</th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of pagedItems; let i = index\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>{{item.Name}}</td>\r\n                        <td>{{item.Quantity}}</td>\r\n                        <td>\r\n                            <span style=\"margin-right: 3px;\" *ngFor=\"let cate of item.Categories\" class=\"label label-success\">{{cate.Name}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span style=\"margin-right: 3px;\" *ngFor=\"let image of item.ProductImages\">\r\n                                <img style=\"max-width:80px; max-height:50px;\" src=\"{{image.Path}}\" />\r\n                            </span>\r\n                        </td>\r\n                        <td>\r\n                            <button class=\"btn btn-sm btn-info\" (click)=\"detailProduct(item.Id)\">Sửa</button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"box-footer clearfix\">\r\n            <div class=\"input-group input-group-sm pull-left\" style=\"width: 150px;\">\r\n                <input class=\"form-control\" [(ngModel)]=\"gopage\" name=\"table_search\" placeholder=\"Tới trang\" type=\"text\">\r\n                <div class=\"input-group-btn\">\r\n                    <button class=\"btn btn-default\" (click)=\"gotoPage()\" type=\"\">\r\n                        <i class=\"fa fa-arrow-circle-right\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-sm no-margin pull-right\">\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a (click)=\"setPage(1)\">First</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                </li>\r\n                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                    <a (click)=\"setPage(page)\">{{page}}</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsComponent = (function () {
    function ProductsComponent(router, categoryService, pagerService, productService, slimLoadingBarService) {
        this.router = router;
        this.categoryService = categoryService;
        this.pagerService = pagerService;
        this.productService = productService;
        this.slimLoadingBarService = slimLoadingBarService;
        this.products = [];
        this.category = {};
        this.allDatas = {};
        this.pager = {};
        this.sort = 'Name';
        this.page = 0;
        this.amount = 10;
        this.keysearch = '';
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.loadAllProducts(this.sort, this.page, this.amount, this.keysearch);
    };
    ProductsComponent.prototype.loadAllProducts = function (sort, page, amount, keysearch) {
        var _this = this;
        this.slimLoadingBarService.start(function () {
            console.log('Loading complete');
        });
        this.productService.getAll(sort, page, amount, keysearch).subscribe(function (data) {
            data.Data.forEach(function (e) {
                e.ProductImages.forEach(function (image) {
                    image.Path = __WEBPACK_IMPORTED_MODULE_3__app_constant__["a" /* AppSettings */].API_ENDPOINT_IMAGE + image.Path.substr(1);
                });
            });
            _this.products = data.Data;
            _this.pagedItems = data.Data;
            _this.allDatas = data;
            _this.pager = _this.pagerService.getPager(_this.allDatas.TotalPage, _this.allDatas.TotalRecord, page, _this.amount);
            _this.page = page;
            _this.slimLoadingBarService.complete();
        });
    };
    ProductsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.loadAllProducts(this.sort, page - 1, this.amount, this.keysearch);
    };
    ProductsComponent.prototype.detailProduct = function (id) {
        this.router.navigateByUrl('/product-detail/' + id);
    };
    ProductsComponent.prototype.DeteleCategory = function (id) {
        var _this = this;
        this.categoryService.delete(id).subscribe(function (data) {
            _this.loadAllProducts(_this.sort, _this.page, _this.amount, _this.keysearch);
        });
    };
    ProductsComponent.prototype.gotoPage = function () {
        if (this.gopage != "") {
            this.setPage(+this.gopage);
        }
        else {
            this.setPage(1);
        }
    };
    ProductsComponent.prototype.goSearch = function () {
        this.setPage(1);
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("./src/app/products/products.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* PagerService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/sale-management/sale-management.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sale-management/sale-management.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-10\">\r\n            <div class=\"panel panel-info\">\r\n                <div class=\"panel-heading\">\r\n                    Filter products by category\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div>category</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n            <div class=\"panel panel-success\">\r\n                <div class=\"panel-heading\">Save</div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-body\">\r\n                            <button class=\"btn btn-success\" (click)=\"saveAddedProducts()\">Save</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"box box-primary\" dnd-droppable (onDropSuccess)=\"addProduct($event)\">\r\n                <div class=\"box-header with-border\">\r\n                    <h3 class=\"box-title\">Added Products</h3>\r\n                    <div class=\"box-tools pull-right\">\r\n                        <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\">\r\n                            <i class=\"fa fa-minus\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"box-body\">\r\n                    <ul class=\"products-list product-list-in-box\">\r\n                        <li *ngFor=\"let item of productsAdded; let i = index\" class=\"item\" dnd-draggable [dragData]=\"item\">\r\n                            <div class=\"product-img\">\r\n                                <img src=\"{{item.ProductImages[0].Path}}\" alt=\"Product Image\">\r\n                            </div>\r\n                            <div class=\"product-info\">\r\n                                <a href=\"\" (click)=\"detailProduct(item.Id)\" class=\"product-title\">{{item.Name}}\r\n                                    <div class=\"pull-right box-tools\">\r\n                                        <span class=\"label label-info pull-right\">$ {{item.Price | number:'.'}}</span>\r\n                                    </div>\r\n                                </a>\r\n                                <span class=\"product-description\">\r\n                                    {{item.SortDescription}}\r\n                                </span>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"box-footer text-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"uppercase\">View All Products</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"box box-primary\" dnd-droppable (onDropSuccess)=\"removeProduct($event)\">\r\n                <div class=\"box-header with-border\">\r\n                    <h3 class=\"box-title\">Available Products to drag</h3>\r\n                    <div class=\"box-tools\">\r\n                        <div class=\"input-group input-group-sm\" style=\"width: 150px;\">\r\n                            <input type=\"text\" name=\"table_search\" [(ngModel)]=\"keysearch\" class=\"form-control pull-right\" placeholder=\"Tìm kiếm\">\r\n\r\n                            <div class=\"input-group-btn\">\r\n                                <button type=\"\" (click)=\"goSearch()\" class=\"btn btn-default\">\r\n                                    <i class=\"fa fa-search\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"box-body\">\r\n                    <ul class=\"products-list product-list-in-box\">\r\n                        <li *ngFor=\"let item of pagedItems; let i = index\" class=\"item\" dnd-draggable [dragData]=\"item\">\r\n                            <div class=\"product-img\">\r\n                                <img src=\"{{item.ProductImages[0].Path}}\" alt=\"Product Image\">\r\n                            </div>\r\n                            <div class=\"product-info\">\r\n                                <a href=\"\" (click)=\"detailProduct(item.Id)\" class=\"product-title\">{{item.Name}}\r\n                                    <div class=\"pull-right box-tools\">\r\n                                        <span class=\"label label-info pull-right\">$ {{item.Price | number:'.'}}</span>\r\n                                    </div>\r\n                                </a>\r\n                                <span class=\"product-description\">\r\n                                    {{item.SortDescription}}\r\n                                </span>\r\n                            </div>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n                <div class=\"box-footer clearfix\">\r\n                    <div class=\"input-group input-group-sm pull-left\" style=\"width: 150px;\">\r\n                        <input class=\"form-control\" [(ngModel)]=\"gopage\" name=\"table_search\" placeholder=\"Tới trang\" type=\"text\">\r\n                        <div class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" (click)=\"gotoPage()\" type=\"\">\r\n                                <i class=\"fa fa-arrow-circle-right\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-sm no-margin pull-right\">\r\n                        <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                            <a (click)=\"setPage(1)\">First</a>\r\n                        </li>\r\n                        <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                            <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                        </li>\r\n                        <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                            <a (click)=\"setPage(page)\">{{page}}</a>\r\n                        </li>\r\n                        <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                            <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                        </li>\r\n                        <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                            <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/sale-management/sale-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SaleManagementComponent = (function () {
    function SaleManagementComponent(router, categoryService, pagerService, saleService, productService, slimLoadingBarService, route, toastr) {
        this.router = router;
        this.categoryService = categoryService;
        this.pagerService = pagerService;
        this.saleService = saleService;
        this.productService = productService;
        this.slimLoadingBarService = slimLoadingBarService;
        this.route = route;
        this.toastr = toastr;
        this.products = [];
        this.category = {};
        this.allDatas = {};
        this.pager = {};
        this.pagedItems = [];
        this.productsAdded = [];
        this.sort = 'Name';
        this.page = 0;
        this.amount = 10;
        this.keysearch = '';
        this.pagedItems = [];
        this.productsAdded = [];
    }
    SaleManagementComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.getSaleProgram(this.id);
    };
    SaleManagementComponent.prototype.getSaleProgram = function (id) {
        var _this = this;
        this.saleService.getById(id).subscribe(function (data) {
            data.Products.forEach(function (e) {
                e.ProductImages.forEach(function (image) {
                    image.Path = __WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* AppSettings */].API_ENDPOINT_IMAGE + image.Path.substr(1);
                });
            });
            _this.productsAdded = data.Products;
            _this.loadAllProducts(_this.sort, _this.page, _this.amount, _this.keysearch);
        });
    };
    SaleManagementComponent.prototype.removeProduct = function ($event) {
        if (!this.containsObject($event.dragData, this.pagedItems)) {
            this.pagedItems.push($event.dragData);
            this.productsAdded = this.productsAdded.filter(function (element) {
                return element.Id !== $event.dragData.Id;
            });
        }
    };
    SaleManagementComponent.prototype.addProduct = function ($event) {
        if (!this.containsObject($event.dragData, this.productsAdded)) {
            this.productsAdded.push($event.dragData);
            this.pagedItems = this.pagedItems.filter(function (element) {
                return element.Id !== $event.dragData.Id;
            });
        }
    };
    SaleManagementComponent.prototype.loadAllProducts = function (sort, page, amount, keysearch) {
        var _this = this;
        this.slimLoadingBarService.start(function () {
            console.log('Loading complete');
        });
        this.productService.getAll(sort, page, amount, keysearch).subscribe(function (data) {
            data.Data.forEach(function (e) {
                e.ProductImages.forEach(function (image) {
                    image.Path = __WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* AppSettings */].API_ENDPOINT_IMAGE + image.Path.substr(1);
                });
            });
            console.log(_this.productsAdded);
            data.Data.forEach(function (e) {
                if (!this.containsObject(e, this.productsAdded)) {
                    this.products.push(e);
                    this.pagedItems.push(e);
                }
            });
            _this.allDatas = data;
            _this.pager = _this.pagerService.getPager(_this.allDatas.TotalPage, _this.allDatas.TotalRecord, page, _this.amount);
            _this.page = page;
            _this.slimLoadingBarService.complete();
            // check 
        });
    };
    SaleManagementComponent.prototype.saveAddedProducts = function () {
        var _this = this;
        /// get Products Id
        var productIds = [];
        this.productsAdded.forEach(function (e) {
            productIds.push(e.Id);
        });
        var objectAdd = {
            SaleId: this.id,
            ProductsId: productIds
        };
        console.log(objectAdd);
        this.saleService.addProductsToSale(objectAdd).subscribe(function (data) {
            _this.toastr.success('Thêm sản phẩm vào chương trình Sale!', 'Thành Công!');
        });
    };
    SaleManagementComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        console.log(this.keysearch);
        this.loadAllProducts(this.sort, page - 1, this.amount, this.keysearch);
    };
    SaleManagementComponent.prototype.detailProduct = function (id) {
        this.router.navigateByUrl('/product-detail/' + id);
    };
    SaleManagementComponent.prototype.DeteleCategory = function (id) {
        var _this = this;
        this.categoryService.delete(id).subscribe(function (data) {
            _this.loadAllProducts(_this.sort, _this.page, _this.amount, _this.keysearch);
        });
    };
    SaleManagementComponent.prototype.gotoPage = function () {
        if (this.gopage != "") {
            this.setPage(+this.gopage);
        }
        else {
            this.setPage(1);
        }
    };
    SaleManagementComponent.prototype.goSearch = function () {
        this.setPage(1);
    };
    SaleManagementComponent.prototype.containsObject = function (obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }
        return false;
    };
    SaleManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sale-management',
            template: __webpack_require__("./src/app/sale-management/sale-management.component.html"),
            styles: [__webpack_require__("./src/app/sale-management/sale-management.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* PagerService */], __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* SaleService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]])
    ], SaleManagementComponent);
    return SaleManagementComponent;
}());



/***/ }),

/***/ "./src/app/sale-programs/sale-programs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sale-programs/sale-programs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">ahihi\r\n    <!-- <div class=\"box box-success\">\r\n        <div class=\"box-header with-border\">\r\n            <h3 class=\"box-title\">Tạo thêm chương trình khuyến mãi</h3>\r\n        </div>\r\n        <div class=\"box-body\">\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && CreateSale()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"form-group\">\r\n                    <label>Tên chương trình</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"Name\" [(ngModel)]=\"sale.Name\" #Name=\"ngModel\" required>\r\n                    <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">Name is required</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Giảm</label>\r\n                    <div class='input-group date'>\r\n                        <input type=\"text\" class=\"form-control\" name=\"Discount\" [(ngModel)]=\"sale.Discount\" #Discount=\"ngModel\" required>\r\n                        <span class=\"input-group-addon\">\r\n                            <span class=\"fa fa-percent\"></span>\r\n                        </span>\r\n                    </div>\r\n                    <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">Discount is required</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Thời gian bắt đầu</label>\r\n                    <input id=\"timestart\" type=\"text\" class=\"form-control\" name=\"TimeStart\" [(ngModel)]=\"sale.TimeStart\" #TimeStart=\"ngModel\"\r\n                        required>\r\n                    <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">Time start is required</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Thời gian kết thúc</label>\r\n                    <input id=\"timeend\" type=\"text\" class=\"form-control\" name=\"EndTime\" [(ngModel)]=\"sale.EndTime\" #EndTime=\"ngModel\" required>\r\n                    <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">Time end is required</div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Mô tả</label>\r\n                    <textarea class=\"form-control\" rows=\"3\" name=\"Description\" [(ngModel)]=\"sale.Description\" #Description=\"ngModel\"></textarea>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Thêm hình ảnh</label>\r\n                    <input type=\"file\" class=\"form-control\" (change)=\"onChange($event)\">\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"box-footer\">\r\n            <button type=\"\" (click)=\"CreateSale()\" class=\"btn btn-primary\">{{nameBtnCreate}}</button>\r\n            <button id=\"btn-cancel\" type=\"\" (click)=\"cancelUpdate()\" class=\"btn btn-default\">Hủy</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"col-md-8\">\r\n    <div class=\"box box-info\">\r\n        <div class=\"box-header\">\r\n            <h3 class=\"box-title\">Danh sách loại sản phẩm</h3>\r\n\r\n            <div class=\"box-tools\">\r\n                <div class=\"input-group input-group-sm\" style=\"width: 150px;\">\r\n                    <input type=\"text\" name=\"table_search\" [(ngModel)]=\"keysearch\" class=\"form-control pull-right\" placeholder=\"Tìm kiếm\">\r\n\r\n                    <div class=\"input-group-btn\">\r\n                        <button type=\"\" (click)=\"goSearch()\" class=\"btn btn-default\">\r\n                            <i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"box-body table-responsive no-padding\">\r\n            <table class=\"table table-hover\">\r\n                <tbody>\r\n                    <tr>\r\n                        <th>STT</th>\r\n                        <th width=\"15%\">Tên</th>\r\n                        <th>% Giảm</th>\r\n                        <th>Bắt đầu</th>\r\n                        <th>Kết thúc</th>\r\n                        <th>Kết thúc</th>\r\n                        <th width=\"15%\">Hành động</th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of pagedItems; let i = index\">\r\n                        <td>{{page * amount + i + 1}}</td>\r\n                        <td>{{item.Name}}</td>\r\n                        <th>{{item.Discount}}</th>\r\n                        <th>{{item.TimeStart}}</th>\r\n                        <th>{{item.EndTime}}</th>\r\n                        <th>{{item.IsEnd}}</th>\r\n                        <td>\r\n                            <button class=\"btn btn-sm btn-success\" (click)=\"seeProducts(item.Id)\">Manage</button>\r\n                            <button class=\"btn btn-sm btn-info\" (click)=\"UpdateSale(item)\">Sửa</button>\r\n                            <button class=\"btn btn-sm btn-danger\" (click)=\"DeteleSale(item.Id)\">Xóa</button>\r\n                        </td>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"box-footer clearfix\">\r\n            <div class=\"input-group input-group-sm pull-left\" style=\"width: 150px;\">\r\n                <input class=\"form-control\" [(ngModel)]=\"gopage\" name=\"table_search\" placeholder=\"Tới trang\" type=\"text\">\r\n                <div class=\"input-group-btn\">\r\n                    <button class=\"btn btn-default\" (click)=\"gotoPage()\" type=\"\">\r\n                        <i class=\"fa fa-arrow-circle-right\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-sm no-margin pull-right\">\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a (click)=\"setPage(1)\">First</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                </li>\r\n                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                    <a (click)=\"setPage(page)\">{{page}}</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/sale-programs/sale-programs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleProgramsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constant__ = __webpack_require__("./src/app/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_localstorage_service__ = __webpack_require__("./src/app/_services/localstorage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SaleProgramsComponent = (function () {
    function SaleProgramsComponent(router, saleService, pagerService, localStorageService, toastr, vcr) {
        this.router = router;
        this.saleService = saleService;
        this.pagerService = pagerService;
        this.localStorageService = localStorageService;
        this.toastr = toastr;
        this.sales = [];
        this.sale = {};
        this.allDatas = {};
        this.pager = {};
        this.toastr.setRootViewContainerRef(vcr);
        this.sort = 'Name';
        this.page = 0;
        this.amount = 10;
        this.nameBtnCreate = 'Tạo';
        this.isUpdating = false;
        this.keysearch = '';
    }
    SaleProgramsComponent.prototype.ngOnInit = function () {
        $('#btn-cancel').hide();
        // $('#timestart').datetimepicker();
        // $('#timeend').datetimepicker();
        this.loadAllSales(this.sort, this.page, this.amount, this.keysearch);
        var currentUrl = this.router.url;
    };
    SaleProgramsComponent.prototype.loadAllSales = function (sort, page, amount, keysearch) {
        var _this = this;
        this.saleService.getAll(sort, page, amount, keysearch).subscribe(function (data) {
            _this.sales = data.Data;
            _this.pagedItems = data.Data;
            _this.allDatas = data;
            _this.pager = _this.pagerService.getPager(_this.allDatas.TotalPage, _this.allDatas.TotalRecord, page, _this.amount);
            _this.page = page;
        });
    };
    SaleProgramsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.loadAllSales(this.sort, page - 1, this.amount, this.keysearch);
    };
    SaleProgramsComponent.prototype.CreateSale = function () {
        var _this = this;
        if (this.isUpdating) {
            this.sale.Id = this.idUpdate;
            this.saleService.update(this.sale).subscribe(function (data) {
                _this.loadAllSales(_this.sort, _this.page, _this.amount, _this.keysearch);
                _this.sale.Name = '';
                _this.sale.Description = '';
                _this.isUpdating = false;
                _this.nameBtnCreate = 'Tạo';
                $('#btn-cancel').hide();
                _this.toastr.success('Cập nhật loại sale thành công!', 'Thành Công!');
            });
        }
        else {
            this.sale.ProductIds = [];
            this.sale.TimeStart = $('#timestart').val();
            this.sale.EndTime = $('#timeend').val();
            var formData = new FormData();
            for (var i = 0; i < this.images.length; i++) {
                formData.append('files', this.images[i], this.images[i].name);
            }
            formData.append('objCreateSaleModel', JSON.stringify(this.sale));
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        _this.toastr.success('Tạo chương trình khuyến mãi thành công!', 'Thành công!');
                        _this.loadAllSales(_this.sort, _this.page, _this.amount, _this.keysearch);
                    }
                    else {
                        _this.toastr.error('Lỗi trong quá trình tạo chương trình!', 'Oops!');
                    }
                }
            };
            console.log(this.sale);
            xhr.open("POST", __WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'sales/Create', true);
            xhr.send(formData);
        }
    };
    SaleProgramsComponent.prototype.UpdateSale = function (item) {
        this.sale.Name = item.Name;
        this.sale.Description = item.Description;
        this.nameBtnCreate = 'Sửa';
        this.idUpdate = item.Id;
        this.isUpdating = true;
        $('#btn-cancel').show();
    };
    SaleProgramsComponent.prototype.cancelUpdate = function () {
        this.sale.Name = '';
        this.sale.Description = '';
        this.nameBtnCreate = 'Tạo';
        this.idUpdate = '';
        this.isUpdating = false;
        $('#btn-cancel').hide();
    };
    SaleProgramsComponent.prototype.seeProducts = function (id) {
        this.router.navigateByUrl('/sale-management/' + id);
    };
    SaleProgramsComponent.prototype.DeteleSale = function (id) {
        var _this = this;
        this.saleService.delete(id).subscribe(function (data) {
            _this.loadAllSales(_this.sort, _this.page, _this.amount, _this.keysearch);
            _this.toastr.info('Xóa loại sale thành công!', 'Thành Công!');
        });
    };
    SaleProgramsComponent.prototype.gotoPage = function () {
        if (this.gopage != "") {
            this.setPage(+this.gopage);
        }
        else {
            this.setPage(1);
        }
    };
    SaleProgramsComponent.prototype.goSearch = function () {
        this.setPage(1);
    };
    SaleProgramsComponent.prototype.onChange = function (event) {
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        this.images = files;
    };
    SaleProgramsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sale-programs',
            template: __webpack_require__("./src/app/sale-programs/sale-programs.component.html"),
            styles: [__webpack_require__("./src/app/sale-programs/sale-programs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* SaleService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["e" /* PagerService */], __WEBPACK_IMPORTED_MODULE_5__services_localstorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], SaleProgramsComponent);
    return SaleProgramsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map