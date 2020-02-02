webpackJsonp([6],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_accessoryModel__ = __webpack_require__(376);

var ShoppingListService = /** @class */ (function () {
    function ShoppingListService() {
        this.accessories = [];
    }
    ShoppingListService.prototype.addAccessory = function (name, amount, color, length) {
        this.accessories.push(new __WEBPACK_IMPORTED_MODULE_0__models_accessoryModel__["a" /* AccessoryModel */](name, amount, color, length));
    };
    ShoppingListService.prototype.addAccessories = function (items) {
        var _a;
        (_a = this.accessories).push.apply(_a, items);
    };
    ShoppingListService.prototype.getAccessories = function () {
        return this.accessories.slice(); // return a copy
    };
    ShoppingListService.prototype.removeAccessory = function (index) {
        this.accessories.splice(index, 1);
    };
    return ShoppingListService;
}());

//# sourceMappingURL=shoppinglist-service.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomizedDressesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customize_a_dress_customize_a_dress__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dresses_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dress_dress__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CustomizedDressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomizedDressesPage = /** @class */ (function () {
    function CustomizedDressesPage(navCtrl, navParams, dressesService, myToastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dressesService = dressesService;
        this.myToastCtrl = myToastCtrl;
    }
    CustomizedDressesPage.prototype.ionViewWillEnter = function () {
        this.dresses = this.dressesService.getDresses();
    };
    CustomizedDressesPage.prototype.addNewDress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__customize_a_dress_customize_a_dress__["a" /* CustomizeADressPage */], { mode: "new" });
    };
    CustomizedDressesPage.prototype.loadDress = function (dress, index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dress_dress__["a" /* DressPage */], {
            dress: dress,
            index: index
        });
        // console.log(dress);
    };
    CustomizedDressesPage.prototype.essay = function (t) {
        console.log(t);
    };
    CustomizedDressesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-customized-dresses",template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/customized-dresses/customized-dresses.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addNewDress()">\n        <span style="margin-right:15px;">Add a new Item</span>\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>ITEMS LIST</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <button ion-item class="dress" (click)=" loadDress(dress,i) " *ngFor="let dress of dresses; let i=index">\n      <h2 class="title">{{dress.title}}</h2>\n      <ion-note>{{dress.difficulty}}</ion-note>\n      <div class="press-color"> Press for more Details</div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/customized-dresses/customized-dresses.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_dresses_service__["a" /* DressesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], CustomizedDressesPage);
    return CustomizedDressesPage;
}());

//# sourceMappingURL=customized-dresses.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customize_a_dress_customize_a_dress__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shoppinglist_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dresses_service__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DressPage = /** @class */ (function () {
    function DressPage(navCtrl, navParams, slService, dressesService, myToastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slService = slService;
        this.dressesService = dressesService;
        this.myToastCtrl = myToastCtrl;
    }
    DressPage.prototype.ngOnInit = function () {
        this.dress = this.navParams.get("dress");
        this.index = this.navParams.get("index");
    };
    DressPage.prototype.editDress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__customize_a_dress_customize_a_dress__["a" /* CustomizeADressPage */], {
            mode: "Edit",
            dress: this.dress,
            index: this.index
        });
    };
    DressPage.prototype.addAccessories = function () {
        this.slService.addAccessories(this.dress.accessories);
        var myToast = this.myToastCtrl.create({
            message: "Accessorie(s) Added in the shopping list",
            duration: 1600,
            position: "right"
        });
        myToast.present();
    };
    DressPage.prototype.deleteDress = function () {
        this.dressesService.removeDress(this.index);
        this.navCtrl.popToRoot();
    };
    DressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-dress",template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/dress/dress.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{dress.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <h2>{{dress.title}}</h2>\n        <div class="">{{dress.difficulty}}</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <p>{{dress.description}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item *ngFor="let accessory of dress.accessories">\n          <ion-grid class="accessory">\n            <ion-row>\n              <ion-col>\n                Name:\n              </ion-col>\n              <ion-col>{{accessory.name}}</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Amount:\n              </ion-col>\n              <ion-col>{{accessory.amount}}</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Color:\n              </ion-col>\n              <ion-col>{{accessory.color}}</ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                Length:\n              </ion-col>\n              <ion-col>{{accessory.length}}</ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="dress.accessories.length>0">\n      <ion-col text-center>\n        <button ion-button clear (click)="addAccessories()">Add Accessories to ShoppingList</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button outline block (click)="editDress()">Edit Dress</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button outline block (click)="deleteDress()" color="danger">Delete Dress</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/dress/dress.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_shoppinglist_service__["a" /* ShoppingListService */], __WEBPACK_IMPORTED_MODULE_4__services_dresses_service__["a" /* DressesService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], DressPage);
    return DressPage;
}());

//# sourceMappingURL=dress.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchingGamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MatchingGamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatchingGamePage = /** @class */ (function () {
    function MatchingGamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MatchingGamePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatchingGamePage');
    };
    MatchingGamePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-matching-game',template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/matching-game.html"*/'<!--\n  Generated template for the MatchingGamePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>MATCHING CARD GAME</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="game-page" padding>\n  <game-container></game-container>\n</ion-content>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/matching-game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MatchingGamePage);
    return MatchingGamePage;
}());

//# sourceMappingURL=matching-game.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shoppinglist_service__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ShoppingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShoppingListPage = /** @class */ (function () {
    function ShoppingListPage(navCtrl, navParams, slService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slService = slService;
    }
    ShoppingListPage.prototype.ionViewWillEnter = function () {
        this.loadAccessories();
    };
    ShoppingListPage.prototype.addAccessory = function (form) {
        this.slService.addAccessory(form.value.accessoryName, form.value.amount, form.value.color, form.value.length);
        form.reset();
        this.loadAccessories(); // actualiser les valeurs changees
    };
    ShoppingListPage.prototype.checkAccessories = function (index) {
        this.slService.removeAccessory(index);
    };
    ShoppingListPage.prototype.loadAccessories = function () {
        this.listAccessories = this.slService.getAccessories();
    };
    ShoppingListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shopping-list',template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/shopping-list/shopping-list.html"*/'<!--\n  Generated template for the ShoppingListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>SHOPPING LIST</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <form #f="ngForm" (ngSubmit)="addAccessory(f)">\n      <ion-list class="forgotten-accessory">\n          <ion-item>\n               <ion-label fixed>Item\'s name</ion-label>\n        <ion-input type="text" name="accessoryName" placeholder="Belt" ngModel required></ion-input>\n          </ion-item>\n          <ion-item>\n               <ion-label fixed>Amount</ion-label>\n        <ion-input type="text" name="amount" placeholder="0" ngModel required></ion-input>\n          </ion-item>\n           <ion-item>\n               <ion-label fixed>Color</ion-label>\n        <ion-input type="text" name="color" placeholder="White" ngModel required></ion-input>\n          </ion-item>\n           <ion-item>\n               <ion-label fixed>Length</ion-label>\n        <ion-input type="text" name="length" placeholder="0" ngModel required></ion-input>\n          </ion-item>\n      </ion-list>\n          <button ion-button type="submit" block [disabled]="!f.valid">Add Forgotten Accessory</button>\n\n    </form>\n\n    <ion-list>\n    <ion-item class="added-items" *ngFor="let accessory of listAccessories; let i=index" (click)="checkAccessories(i)">\n      <h3>{{accessory.name}} ({{accessory.amount}})</h3>\n      <h3>color:{{accessory.color}}</h3>\n      <h3>length:{{accessory.length}}</h3>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/shopping-list/shopping-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_shoppinglist_service__["a" /* ShoppingListService */]])
    ], ShoppingListPage);
    return ShoppingListPage;
}());

//# sourceMappingURL=shopping-list.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customized_dresses_customized_dresses__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matching_game_matching_game__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shopping_list_shopping_list__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slPage = __WEBPACK_IMPORTED_MODULE_4__shopping_list_shopping_list__["a" /* ShoppingListPage */];
        this.matchingGame = __WEBPACK_IMPORTED_MODULE_3__matching_game_matching_game__["a" /* MatchingGamePage */];
        this.customizedDresses = __WEBPACK_IMPORTED_MODULE_2__customized_dresses_customized_dresses__["a" /* CustomizedDressesPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="matchingGame" tabIcon="game-controller-a" tabTitle="MY GAME"></ion-tab>\n    <ion-tab [root]="slPage" tabIcon="list-box" tabTitle="SHOPPING LIST"></ion-tab>\n    <ion-tab [root]="customizedDresses" tabIcon="shirt" tabTitle=" MY ITEMS"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/////////////////////////////


// import {GameCardComponent} from "./game.card.component";
// import {MovesComponent} from "./game.move";
// import {StarsComponent} from "./game.stars";
// //import {TimerComponent} from"./game.timer";
// @Injectable;
var GameService = /** @class */ (function () {
    function GameService() {
        //result:any;
        this.picturesCollection = [
            "diamond",
            "paper-plane-o",
            "anchor",
            "bolt",
            "cube",
            "anchor",
            "leaf",
            "bicycle",
            "diamond",
            "bomb",
            "leaf",
            "bomb",
            "bolt",
            "bicycle",
            "paper-plane-o",
            "cube"
        ];
        this._resetTimerLauncherSignal = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
        this._board = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this._timerLauncherSignal = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
        this._movesCounter = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this._alertSignal = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
        this._stars = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this._continueButton = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
        this._pause = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this._card = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this._resetTimerLauncherSignal = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](false);
        this._resetCardsMatch = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this._pressStartButtonToActivateTheGame = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this._resetStarsColor = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this._getMyTime = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this._checkNumberOfMatchMoves = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this._EndWindowIsVisible = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
    }
    Object.defineProperty(GameService.prototype, "board", {
        ////////////////board reloading////////////////
        get: function () {
            return this._board;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.changeBoard = function (newVal) {
        this._board.next(newVal);
        return this._board;
    };
    Object.defineProperty(GameService.prototype, "timerLauncherSignal", {
        //////////timeractivation/////////////
        get: function () {
            return this._timerLauncherSignal;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.changeTimerLauncherSignal = function (newVal) {
        this._timerLauncherSignal.next(newVal);
    };
    Object.defineProperty(GameService.prototype, "movesCounter", {
        //  1)
        get: function () {
            return this._movesCounter;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.changeMovesCounter = function (newVal) {
        this._movesCounter.next(newVal);
    };
    Object.defineProperty(GameService.prototype, "alertPause", {
        // 2)
        get: function () {
            return this._alertSignal;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.changeAlertPause = function (newVal) {
        this._alertSignal.next(newVal);
        return this._alertSignal;
    };
    Object.defineProperty(GameService.prototype, "stars", {
        //3)
        get: function () {
            return this._stars;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.changeStars = function (newVal) {
        this._stars.next(newVal);
        return this._stars;
    };
    Object.defineProperty(GameService.prototype, "continueButton", {
        //4)
        get: function () {
            return this._continueButton;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.changeContinueButton = function (newVal) {
        this._continueButton.next(newVal);
        return this._continueButton;
    };
    Object.defineProperty(GameService.prototype, "pause", {
        //5)
        get: function () {
            return this._pause;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.changePause = function (newVal) {
        this._pause.next(newVal);
        return this._pause;
    };
    Object.defineProperty(GameService.prototype, "card", {
        //6)
        get: function () {
            return this._card;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.changeCard = function (newVal) {
        this._card.next(newVal);
        return this._card;
    };
    Object.defineProperty(GameService.prototype, "resetTimerLauncherSignal", {
        // 7)
        get: function () {
            return this._resetTimerLauncherSignal;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.changeResetTimerLauncherSignal = function (newVal) {
        this._resetTimerLauncherSignal.next(newVal);
    };
    Object.defineProperty(GameService.prototype, "resetCardsMatch", {
        //8)
        get: function () {
            return this._resetCardsMatch;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.changeResetCardsMatch = function (newVal) {
        this._resetCardsMatch.next(newVal);
    };
    Object.defineProperty(GameService.prototype, "pressStartButtonToActivateTheGame", {
        //9)
        get: function () {
            return this._pressStartButtonToActivateTheGame;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.changePressStartButtonToActivateTheGame = function (newVal) {
        this._pressStartButtonToActivateTheGame.next(newVal);
    };
    Object.defineProperty(GameService.prototype, "resetStarsColor", {
        //10
        get: function () {
            return this._resetStarsColor;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.changeResetStarsColor = function (newVal) {
        this._resetStarsColor.next(newVal);
    };
    Object.defineProperty(GameService.prototype, "getMyTime", {
        //11
        get: function () {
            return this._getMyTime;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.changeGetMyTime = function (newVal) {
        this._getMyTime.next(newVal);
    };
    Object.defineProperty(GameService.prototype, "checkNumberOfMatchMoves", {
        //12
        get: function () {
            return this._checkNumberOfMatchMoves;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.changeCheckNumberOfMatchMoves = function (newVal) {
        this._checkNumberOfMatchMoves.next(newVal);
    };
    Object.defineProperty(GameService.prototype, "endWindowIsVisible", {
        //13
        get: function () {
            return this._EndWindowIsVisible;
        },
        enumerable: true,
        configurable: true
    });
    GameService.prototype.changeEndWindowIsVisible = function (newVal) {
        this._EndWindowIsVisible.next(newVal);
    };
    /////////////////////////////////////
    GameService.prototype.shuffleMyPictureCollection = function (value) {
        var currentIndex = value.length, temporaryValue, randomIndex;
        while (0 != currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = value[currentIndex];
            value[currentIndex] = value[randomIndex];
            value[randomIndex] = temporaryValue;
        }
        return value;
    };
    return GameService;
}());

//# sourceMappingURL=game.service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/customize-a-dress/customize-a-dress.module": [
		699,
		5
	],
	"../pages/customized-dresses/customized-dresses.module": [
		697,
		4
	],
	"../pages/dress/dress.module": [
		698,
		3
	],
	"../pages/matching-game/matching-game.module": [
		700,
		2
	],
	"../pages/shopping-list/shopping-list.module": [
		701,
		1
	],
	"../pages/tabs/tabs.module": [
		702,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_customize_a_dress_customize_a_dress__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_customized_dresses_customized_dresses__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dress_dress__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_matching_game_matching_game__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_dresses_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_shoppinglist_service__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_matching_game_game_game_container__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_matching_game_game_game_endwindow__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_matching_game_game_game_gameboard__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_matching_game_game_game_move__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_matching_game_game_game_mygame__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_matching_game_game_game_restart__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_matching_game_game_game_startbutton__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_matching_game_game_game_stars__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_matching_game_game_game_timer__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_matching_game_game_game_card_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_matching_game_game_game_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_matching_game_game_game_pause_component__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_matching_game_game_game_alert_component__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_matching_game_game_game_continueButton_component__ = __webpack_require__(696);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














////////////Game Component//////////















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_customize_a_dress_customize_a_dress__["a" /* CustomizeADressPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_customized_dresses_customized_dresses__["a" /* CustomizedDressesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dress_dress__["a" /* DressPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_matching_game_matching_game__["a" /* MatchingGamePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_matching_game_game_game_continueButton_component__["a" /* ContinueButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_matching_game_game_game_pause_component__["a" /* PauseComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_matching_game_game_game_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_matching_game_game_game_container__["a" /* GameContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_matching_game_game_game_endwindow__["a" /* GameEndWindowComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_matching_game_game_game_gameboard__["a" /* GameBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_matching_game_game_game_move__["a" /* MovesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_matching_game_game_game_mygame__["a" /* MyGameComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_matching_game_game_game_restart__["a" /* RestartComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_matching_game_game_game_startbutton__["a" /* StartButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_matching_game_game_game_stars__["a" /* StarsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_matching_game_game_game_timer__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_matching_game_game_game_card_component__["a" /* GameCardComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/customized-dresses/customized-dresses.module#CustomizedDressesPageModule', name: 'CustomizedDressesPage', segment: 'customized-dresses', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dress/dress.module#DressPageModule', name: 'DressPage', segment: 'dress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customize-a-dress/customize-a-dress.module#CustomizeADressPageModule', name: 'CustomizeADressPage', segment: 'customize-a-dress', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/matching-game/matching-game.module#MatchingGamePageModule', name: 'MatchingGamePage', segment: 'matching-game', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shopping-list/shopping-list.module#ShoppingListPageModule', name: 'ShoppingListPage', segment: 'shopping-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_customize_a_dress_customize_a_dress__["a" /* CustomizeADressPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_customized_dresses_customized_dresses__["a" /* CustomizedDressesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dress_dress__["a" /* DressPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_matching_game_matching_game__["a" /* MatchingGamePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_shopping_list_shopping_list__["a" /* ShoppingListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_14__pages_matching_game_game_game_container__["a" /* GameContainerComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__services_dresses_service__["a" /* DressesService */], __WEBPACK_IMPORTED_MODULE_12__services_shoppinglist_service__["a" /* ShoppingListService */], __WEBPACK_IMPORTED_MODULE_24__pages_matching_game_game_game_service__["a" /* GameService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(350);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DressModel; });
var DressModel = /** @class */ (function () {
    function DressModel(title, description, difficulty, accessories) {
        this.title = title;
        this.description = description;
        this.difficulty = difficulty;
        this.accessories = accessories;
    }
    return DressModel;
}());

//# sourceMappingURL=dressModel.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessoryModel; });
var AccessoryModel = /** @class */ (function () {
    function AccessoryModel(name, amount, color, length) {
        this.name = name;
        this.amount = amount;
        this.color = color;
        this.length = length;
    }
    return AccessoryModel;
}());

//# sourceMappingURL=accessoryModel.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
// import {
//     Component,
//     ViewChild,
//     AfterViewInit,
//     ElementRef,
//     OnInit,
//     Output,
//     EventEmitter,
//     Input
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// } from "@angular/core";
// @Component({
// selector:'game-container',
//template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.container.html"*/'\n\n<ion-grid class="gamecontainer">\n  <ion-row>\n    <ion-col>\n      <game-end-window></game-end-window>\n      <my-game></my-game>\n  </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.container.html"*/
// })
// export class GameContainerComponent implements OnInit{
//     myTime1:number=0;
//     myRating1:string="debutant";
//     myMoves1:number=0;
//     constructor(){}
//   @ViewChild("mygame") mygame;
//   @ViewChild("gameendwindow") gameendwindow;
//     ngOnInit(){
// console.log(this.mygame);
//     }
//     func5(data){
//         this.myMoves1=data;
//         if(data=8){
//             this.myRating1="Your are expert  keep doing a good job!!!!!!"
//         }else if(data>8 && data<20){
//             this.myRating1="keep improving";
//         }else{
//             this.myRating1="you need more focus";
//         }
//     }
//     func3(data){
//          this.myTime1=data;
//     }
//      func9(data){
//          console.log(data);
//      if(data==8){
//            this.gameendwindow.endWindow.nativeElement.style.display='block';
//      }
//      }
//     // checkAndEndTheGame(gameData:any){
//     //    this.myTime1=gameData.elapsedTime;
//     // }
// }
// //this new component need to be registered in app.module.ts so that we will be able
// //to use it in routing later on.
//////////////////////////

var GameContainerComponent = /** @class */ (function () {
    function GameContainerComponent() {
    }
    GameContainerComponent.prototype.ngOnInit = function () {
    };
    GameContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'game-container',template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.container.html"*/'\n\n<ion-grid class="gamecontainer">\n  <ion-row>\n    <ion-col>\n      <game-end-window></game-end-window>\n      <my-game></my-game>\n  </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.container.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GameContainerComponent);
    return GameContainerComponent;
}());

//this new component need to be registered in app.module.ts so that we will be able
//to use it in routing later on.
//# sourceMappingURL=game.container.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameEndWindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__(21);
/////////////////////////
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameEndWindowComponent = /** @class */ (function () {
    function GameEndWindowComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        this.gameService.movesCounter.subscribe(function (value) {
            _this.myMoves = value;
            _this.evaluateRating(_this.myMoves);
        });
        this.gameService.getMyTime.subscribe(function (value) {
            console.log(value);
            _this.myTime = value;
            // this.essay(value);
        });
        this.gameService.checkNumberOfMatchMoves.subscribe(function (value) {
            if (value == 8) {
                _this.showEndWindow = true;
                gameService.changeEndWindowIsVisible(true);
            }
        });
    }
    GameEndWindowComponent.prototype.ngOnInit = function () {
        this.myRating = "beginner";
        this.myMoves = 0;
        this.showEndWindow = false;
        this.myTime = 0;
    };
    // essay(value:any){
    //     console.log(value);
    // }
    GameEndWindowComponent.prototype.evaluateRating = function (value) {
        if (value == 8) {
            this.myRating = "Your are expert  keep doing a good job!";
        }
        else if (value > 8 && value < 20) {
            this.myRating = "keep improving!";
        }
        else {
            this.myRating = "you need more work!";
        }
    };
    GameEndWindowComponent.prototype.startANewGame = function () {
        this.gameService.changeEndWindowIsVisible(false);
        this.gameService.changePressStartButtonToActivateTheGame(true);
        this.showEndWindow = false;
    };
    GameEndWindowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "game-end-window",template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.endwindow.html"*/'\n\n\n\n<div class="gameendwindow" *ngIf="showEndWindow">\n  <span class="greeting">\n    <div class="replaythegame">Game Over!</div>\n      <div class="yourperformances">\n        <div>\n            <span class="mytime">Time Elapsed</span>\n  <span class="getmytime" >{{myTime}}</span><span>  Secondes</span>\n</div>\n<div>\n  <span class="mynumberofmove" > Number of move needed</span>\n  <span class="getnumberofmove" >{{myMoves}}</span><span>  Moves</span>\n</div>\n<div>\n  <span class="myrating">Rating:</span>\n  <span class="getmyrating">{{myRating}}</span><span></span>\n</div>\n</div>\n<div class="replaythegame" (click)="startANewGame()"> PRESS TO PLAY AGAIN</div>\n</span>\n</div>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.endwindow.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]])
    ], GameEndWindowComponent);
    return GameEndWindowComponent;
}());

//this new component need to be registered in app.module.ts so that we will be able
//to use it in routing later on.
//# sourceMappingURL=game.endwindow.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameBoardComponent = /** @class */ (function () {
    function GameBoardComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        this.myClickedCards = [];
        this.matchCards = [];
        this.notMatchCards = [];
        this.arrayOfPictures = [];
        this.compareTwoCardsArray = [];
        this.matchMoves = 0;
        this.notMatchMoves = 0;
        this.totalMoves = 0;
        this.picturesCollection = [
            "diamond",
            "paper-plane-o",
            "anchor",
            "bolt",
            "cube",
            "anchor",
            "leaf",
            "bicycle",
            "diamond",
            "bomb",
            "leaf",
            "bomb",
            "bolt",
            "bicycle",
            "paper-plane-o",
            "cube"
        ];
        gameService.resetCardsMatch.subscribe(function (value) {
            if (value === true) {
                _this.resetMatchCards();
            }
        });
        this.gameService.movesCounter.subscribe(function (value) {
            if (value == 0) {
                _this.matchMoves = 0;
                _this.notMatchMoves = 0;
                _this.totalMoves = 0;
            }
        });
        this.gameService.endWindowIsVisible.subscribe(function (value) {
            var me = _this;
            if (value == true) {
                setTimeout(function () {
                    console.log("visibility");
                    this.totalMoves = 0;
                    me.resetMatchCards();
                }, 1);
            }
        });
    }
    GameBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.arrayOfPictures = this.gameService.shuffleMyPictureCollection(this.picturesCollection);
        this.mySubscription = this.gameService.board.subscribe(function (pictures) {
            if (pictures) {
                _this.arrayOfPictures = _this.gameService.shuffleMyPictureCollection(pictures);
            }
        });
    };
    GameBoardComponent.prototype.collectClickedCard = function (data) {
        this.myClickedCards.push(data);
        this.compareTwoCardsArray.push(data);
        this.compareTwoCards(this.compareTwoCardsArray);
        //this.myClickedCards[0].animatedCard2();
        //console.log(this.myClickedCards[0]);
    };
    GameBoardComponent.prototype.setMyArray = function (value) {
        this.arrayOfPictures.push(value);
        //console.log(this.arrayOfPictures);
    };
    GameBoardComponent.prototype.compareTwoCards = function (value) {
        if (value.length == 2) {
            if (value[0].cardPicture === value[1].cardPicture) {
                this.matchMoves++;
                // for (let entry in this.matchCards) {
                //   this.matchCards[entry].clickInfo = "clicked";
                //   this.matchCards[entry].noAction = true;
                // }
                value[0].clickInfo = "clicked";
                value[1].clickInfo = "clicked";
                value[0].noAction = true;
                value[1].noAction = true;
                this.matchCards.push(value[0]);
                this.matchCards.push(value[1]);
                this.gameService.changeStars(this.matchMoves);
                this.gameService.changeCheckNumberOfMatchMoves(this.matchMoves);
            }
            else {
                //
                this.notMatchMoves++;
                value[0].animatedCardAfterNotMatch();
                value[1].animatedCardAfterNotMatch();
                this.notMatchCards.push(value[0]);
                this.notMatchCards.push(value[1]);
            }
            this.totalMoves = this.matchMoves + this.notMatchMoves;
            this.gameService.changeMovesCounter(this.totalMoves);
            this.compareTwoCardsArray = [];
        }
    };
    GameBoardComponent.prototype.resetMatchCards = function () {
        for (var entry in this.myClickedCards) {
            this.myClickedCards[entry].clickInfo = "default";
            this.myClickedCards[entry].clickInfo2 = "default";
            this.myClickedCards[entry].noAction = false;
            this.myClickedCards[entry].noAction = false;
            if (this.compareTwoCardsArray.length == 1) {
                this.compareTwoCardsArray = [];
            }
        }
    };
    GameBoardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "gameboard",template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.gameboard.html"*/'<!-- <ul class="deck">\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-bicycle picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-bicycle picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-fa-bicycle picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-bicycle picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-diamond picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-anchor picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-bolt picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-cube picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-anchor picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-bomb picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-paper-plane-o picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-leaf picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-cube picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-diamond picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-bicycle picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n    <li class="cardContainer">\n      <div class="frontandbacksidediv">\n        <div class="card frontside"><i class="fa fa-paper-plane-o picture"></i></div>\n        <div class="card backside"></div>\n      </div>\n    </li>\n  </ul> -->\n\n<!--\n -->\n\n <!-- <ul class="deck">\n  <li class="cardContainer" >\n    <game-card #game_card_ref  (adjustCardAlreadyChoosed)="cardClickedGetObject($event)" (cardAnimationDone)="func11($event)"> </game-card>\n    </li>\n    <li class=" cardContainer ">\n       <game-card   #game_card_ref2  (adjustCardAlreadyChoosed)="cardClickedGetObject($event)"> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card #game_card_ref3 [cardAlreadyChoosed3]=\'signal3\' (adjustCardAlreadyChoosed)="cardClickedGetObject($event)"> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card #game_card_ref4 [cardAlreadyChoosed4]=\'signal4\' (adjustCardAlreadyChoosed)="cardClickedGetObject($event)"> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card #game_card_ref5 [cardAlreadyChoosed5]=\'signal5\' (adjustCardAlreadyChoosed)="cardClickedGetObject($event)"> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card #game_card_ref6 [cardAlreadyChoosed6]=\'signal6\' (adjustCardAlreadyChoosed)="cardClickedGetObject($event)"> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card #game_card_ref7 [cardAlreadyChoosed7]=\'signal7\' (adjustCardAlreadyChoosed)="cardClickedGetObject($event)"> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card #game_card_ref8 [cardAlreadyChoosed8]=\'signal8\' (adjustCardAlreadyChoosed)="cardClickedGetObject($event)"> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card #game_card_ref9 [cardAlreadyChoosed9]=\'signal9\' (adjustCardAlreadyChoosed)="cardClickedGetObject($event)"> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card #game_card_ref10 [cardAlreadyChoosed10]=\'signal10\' (adjustCardAlreadyChoosed)="cardClickedGetObject($event)"> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card #game_card_ref11 [cardAlreadyChoosed11]=\'signal11\' (adjustCardAlreadyChoosed)="cardClickedGetObject($event)"> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card #game_card_ref12 [cardAlreadyChoosed12]=\'signal12\' (adjustCardAlreadyChoosed)="cardClickedGetObject($event)"> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card #game_card_ref13 [cardAlreadyChoosed13]=\'signal13\' (adjustCardAlreadyChoosed)="cardClickedGetObject($event)"> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card #game_card_ref14 [cardAlreadyChoosed14]=\'signal14\' (adjustCardAlreadyChoosed)="cardClickedGetObject($event)"> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card #game_card_ref15 [cardAlreadyChoosed15]=\'signal15\' (adjustCardAlreadyChoosed)="cardClickedGetObject($event)"> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card #game_card_ref16 [cardAlreadyChoosed16]=\'signal16\' (adjustCardAlreadyChoosed)="cardClickedGetObject($event)"> </game-card>\n  </li>\n</ul> -->\n\n<!--  -->\n\n<ul class="deck">\n  <li class="cardContainer" *ngFor="let picture of arrayOfPictures">\n    <game-card [cardPicture]=picture (collectEachCard)="collectClickedCard($event)"> </game-card>\n    </li>\n  </ul>\n   <!--  <ion-list class="deck">\n  <ion-item class="cardContainer" *ngFor="let picture of arrayOfPictures"></ion-item>\n    <game-card [cardPicture]=picture (collectEachCard)="collectClickedCard($event)"> </game-card>\n    </ion-list> -->\n    <!-- <li class=" cardContainer ">\n       <game-card [cardPicture]=arrayOfPicture[1]> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card [cardPicture]=arrayOfPicture[2]> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card [cardPicture]=arrayOfPicture[3]> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card [cardPicture]=arrayOfPicture[4]> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card [cardPicture]=arrayOfPicture[5]> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card [cardPicture]=arrayOfPicture[6]> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card [cardPicture]=arrayOfPicture[7]> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card [cardPicture]=arrayOfPicture[8]> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card [cardPicture]=arrayOfPicture[9]> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card[cardPicture]=arrayOfPicture[10]> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card [cardPicture]=arrayOfPicture[11]> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card [cardPicture]=arrayOfPicture[12]> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card [cardPicture]=arrayOfPicture[13]> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card [cardPicture]=arrayOfPicture[14]> </game-card>\n  </li>\n  <li class="cardContainer">\n    <game-card[cardPicture]=arrayOfPicture[15]> </game-card>\n  </li> -->\n<!-- </ul> -->\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.gameboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]])
    ], GameBoardComponent);
    return GameBoardComponent;
}());

//# sourceMappingURL=game.gameboard.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__(21);
//////////////////////////////////
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovesComponent = /** @class */ (function () {
    function MovesComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        gameService.movesCounter.subscribe(function (value) {
            _this.numberMoves = value;
        });
        this.gameService.endWindowIsVisible.subscribe(function (value) {
            if (value == false) {
                _this.gameService.changeMovesCounter(0);
                // this.numberMoves=0;
            }
        });
    }
    MovesComponent.prototype.ngOnInit = function () {
        this.numberMoves = 0;
    };
    MovesComponent.prototype.ngAfterViewChecked = function () {
    };
    MovesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'moves',template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.move.html"*/'<!--  <span class="moveblock"><span class="moves" #move>0</span> Moves</span>\n -->\n  <span class="moveblock"><span class="moves" >{{numberMoves}}</span><span> Moves</span></span>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.move.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]])
    ], MovesComponent);
    return MovesComponent;
}());

//# sourceMappingURL=game.move.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__(21);
/////////////////////////////////
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyGameComponent = /** @class */ (function () {
    function MyGameComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        gameService.endWindowIsVisible.subscribe(function (value) {
            if (value == true) {
                _this.myGameContainerIsVisible = false;
            }
            else {
                _this.myGameContainerIsVisible = true;
            }
        });
    }
    MyGameComponent.prototype.ngOnInit = function () {
        this.myGameContainerIsVisible = true;
    };
    MyGameComponent.prototype.ngAfterViewChecked = function () { };
    MyGameComponent.prototype.launchTimerHelper = function () { };
    MyGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "my-game",template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.mygame.html"*/'<ion-grid class="container" *ngIf="myGameContainerIsVisible">\n  <ion-row>\n    <ion-col>\n      <stars></stars>\n    </ion-col>\n  </ion-row>\n  <ion-row class="score-panel">\n    <ion-col>\n      <ion-grid>\n        <ion-row class="first_interaction_block">\n          <ion-col>\n            <alert></alert>\n          </ion-col>\n          <ion-col>\n            <start-button> </start-button>\n          </ion-col>\n          <ion-col>\n            <timer></timer>\n          </ion-col>\n          <ion-col >\n            <pause class="clearfix"></pause>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-col>\n    <ion-col>\n      <gameboard></gameboard>\n    </ion-col>\n    <ion-col>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <continue></continue>\n          </ion-col>\n          <ion-col>\n            <moves></moves>\n          </ion-col>\n          <ion-col>\n            <restart></restart>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.mygame.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]])
    ], MyGameComponent);
    return MyGameComponent;
}());

//# sourceMappingURL=game.mygame.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
//////////////////////////////
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestartComponent = /** @class */ (function () {
    function RestartComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        this.testVl = true;
        this.resetButtonNotClickable = true;
        this.fieldArray = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.gameService.pause.subscribe(function (value) {
            if (value == true) {
                _this.resetButtonNotClickable = true;
            }
        });
        this.gameService.continueButton.subscribe(function (value) {
            if (value == true) {
                _this.resetButtonNotClickable = false;
            }
        });
        gameService.pressStartButtonToActivateTheGame.subscribe(function (value) {
            if (value == true) {
                _this.resetButtonNotClickable = false;
            }
        });
    }
    RestartComponent.prototype.ngOnInit = function () {
        //this.click.emit(9998);
    };
    RestartComponent.prototype.ngAfterViewInit = function () { };
    RestartComponent.prototype.sendResetCardsSignal = function () {
        if (!this.resetButtonNotClickable) {
            this.newArray = this.gameService.shuffleMyPictureCollection(this.gameService.picturesCollection);
            this.fieldArray.emit(this.newArray);
            this.gameService.changeResetStarsColor(true);
            this.gameService.changeMovesCounter(0);
            this.gameService.changeResetTimerLauncherSignal(true);
            this.gameService.changeResetCardsMatch(true);
            this.gameService.changeBoard(this.gameService.picturesCollection);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], RestartComponent.prototype, "fieldArray", void 0);
    RestartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "restart",template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.restart.html"*/'<!-- <div class="restart" (click)="resetCards()"> -->\n    <div class="restart" (click)="sendResetCardsSignal()">\n      <i class="fa fa-repeat"></i>\n</div>'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.restart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]])
    ], RestartComponent);
    return RestartComponent;
}());

//# sourceMappingURL=game.restart.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__(21);
/////////////////////////////
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StartButtonComponent = /** @class */ (function () {
    function StartButtonComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        this.startButtonNotClickable = false;
        this.buttonStartHasBeenClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.gameService.pause.subscribe(function (value) {
            if (value == true) {
                _this.startButtonNotClickable = true;
            }
        });
        gameService.endWindowIsVisible.subscribe(function (value) {
            if (value == false) {
                // this.startButtonNotClickable=false;
            }
        });
        gameService.pressStartButtonToActivateTheGame.subscribe(function (value) {
            if (value == true) {
                _this.startButtonNotClickable = false;
            }
            // }else if(value==false){
            //           this.startButtonNotClickable=true;
            // }
        });
        this.gameService.card.subscribe(function (value) {
            if (value == true) {
                // this.startButtonNotClickable=true;
            }
        });
    }
    StartButtonComponent.prototype.ngOnInit = function () { };
    StartButtonComponent.prototype.startHandler = function () {
        // this.startButtonNotClickable=false;
        if (!this.startButtonNotClickable) {
            this.startButtonNotClickable = true;
            this.buttonStartHasBeenClicked.emit();
            this.gameService.changeTimerLauncherSignal(true);
            this.gameService.changePressStartButtonToActivateTheGame(true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], StartButtonComponent.prototype, "buttonStartHasBeenClicked", void 0);
    StartButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "start-button",template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.startbutton.html"*/'<div class="startbutton clearfix"(click)="startHandler()"><span id="startthegame"><span>START</span></span>\n</div>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.startbutton.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]])
    ], StartButtonComponent);
    return StartButtonComponent;
}());

//# sourceMappingURL=game.startbutton.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StarsComponent = /** @class */ (function () {
    function StarsComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        gameService.stars.subscribe(function (value) {
            _this.adjustStars(value);
        });
        gameService.resetStarsColor.subscribe(function (value) {
            if (value == true) {
                _this.resetColor();
            }
        });
        this.gameService.endWindowIsVisible.subscribe(function (value) {
            if (value == true) {
                _this.resetColor();
            }
        });
    }
    StarsComponent.prototype.ngOnInit = function () { };
    StarsComponent.prototype.adjustStars = function (value) {
        if (this.firstStar && this.secondStar && this.thirdStar) {
            if (value == 8) {
                this.firstStar.nativeElement.style.color = "white";
                this.secondStar.nativeElement.style.color = "white";
                this.thirdStar.nativeElement.style.color = "white";
            }
            else if (value == 2) {
                this.thirdStar.nativeElement.style.color = "white";
            }
            else if (value == 5) {
                this.secondStar.nativeElement.style.color = "white";
                this.thirdStar.nativeElement.style.color = "white";
            }
        }
    };
    StarsComponent.prototype.resetColor = function () {
        this.firstStar.nativeElement.style.color = "black";
        this.secondStar.nativeElement.style.color = "black";
        this.thirdStar.nativeElement.style.color = "black";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("firstStar"),
        __metadata("design:type", Object)
    ], StarsComponent.prototype, "firstStar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("secondStar"),
        __metadata("design:type", Object)
    ], StarsComponent.prototype, "secondStar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("thirdStar"),
        __metadata("design:type", Object)
    ], StarsComponent.prototype, "thirdStar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("allStar"),
        __metadata("design:type", Object)
    ], StarsComponent.prototype, "allStar", void 0);
    StarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "stars",template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.stars.html"*/'<ul class="stars">\n  <li class="all-stars" #allStar>\n    <div><i class="fa fa-star star-one star" #firstStar></i></div>\n    <div><i class="fa fa-star star-two star" #secondStar></i></div>\n    <div><i class="fa fa-star star-three star" #thirdStar></i></div>\n  </li>\n</ul>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.stars.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]])
    ], StarsComponent);
    return StarsComponent;
}());

// //this new component need to be registered in app.module.ts so that we will be able
// //to use it in routing later on.
//////////////////////////
//# sourceMappingURL=game.stars.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__(21);
/////////////////////////////
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerComponent = /** @class */ (function () {
    function TimerComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        this.launchMyTimer = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // mySubscription: Subscription;
        this.counterContinue = 0;
        this.counter = 0;
        this.gameService.timerLauncherSignal.subscribe(function (value) {
            if (value == true) {
                _this.start();
            }
        });
        this.gameService.resetTimerLauncherSignal.subscribe(function (value) {
            if (value == true) {
                _this.stop();
            }
        });
        this.gameService.endWindowIsVisible.subscribe(function (value) {
            if (value) {
                _this.stopCounterNotReset();
            }
            else {
                _this.hardStop();
            }
        });
        this.gameService.pause.subscribe(function (value) {
            if (value == true) {
                _this.stopCounterNotReset();
            }
        });
        this.gameService.continueButton.subscribe(function (value) {
            if (value == true) {
                _this.startContinue();
            }
        });
    }
    TimerComponent.prototype.ngOnInit = function () { };
    TimerComponent.prototype.ngAfterViewInit = function () { };
    TimerComponent.prototype.start = function () {
        var _this = this;
        this.intervalId = setInterval(function () {
            _this.increaseCounter();
        }, 1000);
    };
    TimerComponent.prototype.increaseCounter = function () {
        this.counter++;
        //console.log(typeof(this.counter));
        this.gameService.changeGetMyTime(this.counter);
    };
    TimerComponent.prototype.gameEndChecker = function () { };
    TimerComponent.prototype.outputCounterPosition = function () {
        //     return this.counter;
    };
    TimerComponent.prototype.hardStop = function () {
        clearInterval(this.intervalId);
        this.counter = 0;
    };
    TimerComponent.prototype.stop = function () {
        clearInterval(this.intervalId);
        this.counter = 0;
        this.start();
        // this.outputCounter.nativeElement.innerText=0
    };
    TimerComponent.prototype.stopCounterNotReset = function () {
        clearInterval(this.intervalId);
        this.counterContinue = this.counter;
    };
    TimerComponent.prototype.increaseCounterContinue = function () {
        // this.counterContinue++;
        // this.outputCounter.nativeElement.innerText=this.counter;
    };
    TimerComponent.prototype.startContinue = function () {
        var _this = this;
        this.intervalId = setInterval(function () {
            _this.counter++;
            //this.increaseCounterContinue();
        }, 1000);
    };
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "timer",template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.timer.html"*/'<div #timerDiv  class="clearfix"> <span class="blockcount"><span>Time:</span><span id="count" #outputCounter> {{counter}}</span></span>\n</div>\n\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.timer.html"*/,
            animations: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]])
    ], TimerComponent);
    return TimerComponent;
}());

//# sourceMappingURL=game.timer.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///////////////////



var GameCardComponent = /** @class */ (function () {
    function GameCardComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        this.myCards = [];
        this.clickInfo = "default";
        this.clickInfo2 = "default";
        this.startButtonActivated = false;
        this.noAction = false;
        this.collectEachCard = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        gameService.pressStartButtonToActivateTheGame.subscribe(function (value) {
            if (value == true) {
                _this.startButtonActivated = true;
            }
        });
        gameService.pause.subscribe(function (value) {
            if (value == true) {
                _this.startButtonActivated = false;
            }
        });
        this.gameService.continueButton.subscribe(function (value) {
            if (value == true) {
                _this.startButtonActivated = true;
            }
        });
    }
    GameCardComponent.prototype.ngOnInit = function () {
        this.myCards.push(this);
        //console.log(this.myCards);
    };
    // notClickable(){
    //      this.noAction=true;
    // }
    GameCardComponent.prototype.cardClicked = function () {
        var me = this;
        this.gameService.changeCard(true);
        if (this.startButtonActivated) {
            this.noAction || this.animatedCard();
        }
    };
    GameCardComponent.prototype.animatedCard = function () {
        this.collectEachCard.emit(this);
        this.clickInfo = "clicked";
        this.animatedCardFromCloseToScale();
        this.noAction = true;
    };
    GameCardComponent.prototype.animatedCardFromCloseToScale = function () {
        var _this = this;
        this.clickInfo2 = "clicked2";
        setTimeout(function () {
            _this.clickInfo2 = "default2";
        }, 5);
        //this.clickInfo = "default";
    };
    GameCardComponent.prototype.animatedCardAfterNotMatch = function () {
        var _this = this;
        setTimeout(function () {
            _this.clickInfo = "default";
            _this.clickInfo2 = "default";
            _this.noAction = false;
        }, 400);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], GameCardComponent.prototype, "collectEachCard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], GameCardComponent.prototype, "cardPicture", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("frontsideCard"),
        __metadata("design:type", Object)
    ], GameCardComponent.prototype, "frontsideCard", void 0);
    GameCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "game-card",template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.card.html"*/'<!-- <div class="frontandbacksidediv"  #card_ref>\n        <div class="card frontside" #frontsideCard [@clickedState2]="clickInfo2"><i class="fa fa-{{pictureName}} picture" #frontside_picture></i></div>\n        <div class="card backside" #backside_picture></div>\n\n  <div  #backside_picture [@clickedState]="\'default\'"></div>\n -->\n <!-- <div #backside_picture [@clickedState]="clickInfo" (@clickedState.done)="checkCardsList($event)"></div>\n</div>\n -->\n\n<div class="frontandbacksidediv clearfix" (click)="cardClicked()" >\n        <div class="card frontside" #frontsideCard [@clickedState2]="clickInfo2"><i class="fa fa-{{cardPicture}} picture" ></i></div>\n<!--         <div class="card backside" #backside_picture></div>\n -->\n<!--    <div  #backside_picture [@clickedState]="\'default\'"></div>\n -->\n <div #backside_picture  [@clickedState]="clickInfo"></div>\n</div>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.card.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])("clickedState", [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])("default", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        display: "block",
                        backgroundColor: "black",
                        position: "absolute",
                        top: "0",
                        width: "100%",
                        height: "100%",
                        fontSize: "0",
                        borderRadius: "8px",
                        transform: "scale(1)",
                        zIndex: "0"
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])("clicked", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        display: "block",
                        backgroundColor: "black",
                        position: "absolute",
                        top: "0",
                        width: "100%",
                        height: "0%",
                        fontSize: "0",
                        borderRadius: "8px"
                        // zIndex: "4"
                        // transform:'scale(3)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])("default=>clicked", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("0.1ms 0.001ms ease-out"))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])("clickedState2", [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])("default2", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        transform: "scale(1)",
                        zIndex: "0",
                        display: "flex",
                        backgroundColor: "cyan"
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])("clicked2", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        display: "block",
                        zIndex: "25",
                        transform: "scale(2)",
                        backgroundColor: "cyan"
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])("default2=>clicked2", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("2ms 2s ease-in")),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])("clicked2=>default2", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(5))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__game_service__["a" /* GameService */]])
    ], GameCardComponent);
    return GameCardComponent;
}());

//# sourceMappingURL=game.card.component.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PauseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__(21);
///////////////////////////////////////
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PauseComponent = /** @class */ (function () {
    function PauseComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        this.gameService.pressStartButtonToActivateTheGame.subscribe(function (value) {
            if (value == true) {
                _this.pauseButtonEnabled = true;
            }
        });
    }
    PauseComponent.prototype.ngOnInit = function () {
        this.pauseButtonEnabled = false;
    };
    PauseComponent.prototype.pauseHandler = function () {
        if (this.pauseButtonEnabled) {
            this.gameService.changePause(true);
        }
    };
    PauseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "pause",template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.pause.html"*/'<div class="pause" (click)="pauseHandler()">\n      <span>PAUSE</span>\n</div>\n\n\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.pause.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]])
    ], PauseComponent);
    return PauseComponent;
}());

//# sourceMappingURL=game.pause.component.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = /** @class */ (function () {
    function AlertComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        this.gameService.pause.subscribe(function (value) {
            if (value == true) {
                _this.pauseButtonActivated = true;
            }
        });
        this.gameService.continueButton.subscribe(function (value) {
            if (value == true) {
                _this.pauseButtonActivated = false;
            }
        });
    }
    AlertComponent.prototype.ngOnInit = function () {
        this.pauseButtonActivated = false;
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'alert',template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.alert.html"*/'<div class="alert" #alert *ngIf="pauseButtonActivated">\n      <!-- <span>THE GAME IS PAUSED PLEASE PRESS CONTINUE!!!</span> -->\n</div>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.alert.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]])
    ], AlertComponent);
    return AlertComponent;
}());

//# sourceMappingURL=game.alert.component.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContinueButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__(21);
////////////////////////////////
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContinueButtonComponent = /** @class */ (function () {
    function ContinueButtonComponent(gameService) {
        var _this = this;
        this.gameService = gameService;
        this.gameService.pause.subscribe(function (value) {
            if (value == true) {
                _this.pauseButtonActivated = true;
            }
        });
    }
    ContinueButtonComponent.prototype.ngOnInit = function () {
        this.pauseButtonActivated = false;
    };
    ContinueButtonComponent.prototype.continueButtonHandler = function () {
        this.gameService.changeContinueButton(true);
        this.pauseButtonActivated = false;
    };
    ContinueButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "continue",template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.continueButton.html"*/'<!-- <div class="continue" #continue>\n      <span>CONTINUE</span>\n</div> -->\n\n\n<div class="continue" *ngIf="pauseButtonActivated" (click)="continueButtonHandler()">\n      <span>CONTINUE</span>\n</div>'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/matching-game/game/game.continueButton.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]])
    ], ContinueButtonComponent);
    return ContinueButtonComponent;
}());

//# sourceMappingURL=game.continueButton.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DressesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dressModel__ = __webpack_require__(375);

var DressesService = /** @class */ (function () {
    function DressesService() {
        this.dresses = [];
    }
    DressesService.prototype.addNewDress = function (title, description, difficulty, accessories) {
        this.dresses.push(new __WEBPACK_IMPORTED_MODULE_0__models_dressModel__["a" /* DressModel */](title, description, difficulty, accessories));
    };
    DressesService.prototype.getDresses = function () {
        return this.dresses.slice();
    };
    DressesService.prototype.updateDress = function (index, title, description, difficulty, accessories) {
        this.dresses[index] = new __WEBPACK_IMPORTED_MODULE_0__models_dressModel__["a" /* DressModel */](title, description, difficulty, accessories);
    };
    DressesService.prototype.removeDress = function (index) {
        this.dresses.splice(index, 1);
    };
    return DressesService;
}());

//# sourceMappingURL=dresses-service.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomizeADressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dresses_service__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomizeADressPage = /** @class */ (function () {
    function CustomizeADressPage(navCtrl, navParams, actionSheetController, dressesServices, myToastCtrl, myAlertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetController = actionSheetController;
        this.dressesServices = dressesServices;
        this.myToastCtrl = myToastCtrl;
        this.myAlertCtrl = myAlertCtrl;
        this.mode = "new";
        this.selectOptions = ["Easy", "Medium", "Hard"];
    }
    CustomizeADressPage.prototype.ngOnInit = function () {
        this.mode = this.navParams.get("mode");
        if (this.mode == "Edit") {
            this.dress = this.navParams.get("dress");
            this.index = this.navParams.get("index");
        }
        this.initializeForm();
    };
    CustomizeADressPage.prototype.onSubmit = function () {
        var value = this.dressForm.value;
        console.log(value);
        //let accessories=[];
        if (this.mode == "Edit") {
            // index est le nouveau index capture par navparams
            this.dressesServices.updateDress(this.index, value.title, value.description, value.difficulty, value.accessories);
        }
        else {
            this.dressesServices.addNewDress(value.title, value.description, value.difficulty, value.accessories);
        }
        this.dressForm.reset();
        this.navCtrl.popToRoot();
    };
    CustomizeADressPage.prototype.manageAccessories = function () {
        var _this = this;
        var myActionSheet = this.actionSheetController.create({
            title: "Next Step:",
            buttons: [
                {
                    text: "Add Accessory",
                    handler: function () {
                        _this.createNewAccessoryAlert().present();
                    }
                },
                {
                    text: "Remove all Accessories",
                    role: "destructive",
                    handler: function () {
                        var myFormArray = _this.dressForm.get("accessories");
                        var len = myFormArray.length;
                        if (len > 0) {
                            for (var i = len - 1; i >= 0; i--) {
                                myFormArray.removeAt(i);
                            }
                            var myToast = _this.myToastCtrl.create({
                                message: "All Accessories were destroyed!",
                                duration: 1200,
                                position: "right"
                            });
                            myToast.present();
                        }
                    }
                },
                {
                    text: "Cancel",
                    role: "cancel"
                }
            ]
        });
        myActionSheet.present();
    };
    CustomizeADressPage.prototype.createNewAccessoryAlert = function () {
        var _this = this;
        return this.myAlertCtrl.create({
            title: "add Accessories",
            inputs: [
                {
                    name: "name",
                    placeholder: "Name"
                },
                {
                    name: "amount",
                    placeholder: "Amount",
                    type: "number"
                },
                {
                    name: "color",
                    placeholder: "color"
                },
                {
                    name: "length",
                    placeholder: "length",
                    type: "number"
                }
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel"
                },
                {
                    text: "Add",
                    handler: function (data) {
                        // let dataToNumber=Number(data.amount);
                        if (data.name.trim() == "" ||
                            data.name == null ||
                            (data.amount.trim() == "" || data.amount == null) ||
                            (data.color.trim() == "" || data.color == null) ||
                            (data.length.trim() == "" || data.length == null)) {
                            var myToast = _this.myToastCtrl.create({
                                message: "Please enter a valid value",
                                duration: 1600,
                                position: "top"
                            });
                            myToast.present();
                            return;
                        }
                        _this.dressForm.get("accessories").push(new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
                            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](data.name, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                            amount: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](Number(data.amount), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                            color: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](data.color, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
                            length: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](data.length, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required)
                        }));
                        var myToast2 = _this.myToastCtrl.create({
                            message: "Item added",
                            duration: 1600,
                            position: "top"
                        });
                        myToast2.present();
                    }
                }
            ]
        });
    };
    // initializing my form
    CustomizeADressPage.prototype.initializeForm = function () {
        var title = null;
        var description = null;
        var difficulty = "Medium";
        var accessories = [];
        // if (this.mode = "Edit") {
        //     title = this.dress.title;
        //     description = this.dress.description;
        //     difficulty = this.dress.difficulty;
        //     for (let accessory of this.dress.accessories) {
        //         accessories.push(
        //             new FormGroup({
        //                 name: new FormControl(
        //                     accessory.name,
        //                     Validators.required
        //                 ),
        //                 amount: new FormControl(
        //                     Number(accessory.amount),
        //                     Validators.required
        //                 ),
        //                 color: new FormControl(
        //                     accessory.color,
        //                     Validators.required
        //                 ),
        //                 length: new FormControl(
        //                     accessory.length,
        //                     Validators.required
        //                 )
        //             })
        //         );
        //     }
        // }
        this.dressForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            difficulty: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](difficulty, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            accessories: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormArray */](accessories)
        });
    };
    CustomizeADressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-customize-a-dress",template:/*ion-inline-start:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/customize-a-dress/customize-a-dress.html"*/'<!--\n  Generated template for the CustomizeADressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{mode}} Dress</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]="dressForm" (ngSubmit)="onSubmit()">\n    <ion-list class="dress-description">\n      <ion-item>\n        <ion-label floating>Title</ion-label>\n        <ion-input type="text" formControlName="title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Description</ion-label>\n        <ion-textarea formControlName="description"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Difficulty</ion-label>\n        <ion-select formControlName="difficulty">\n          <ion-option *ngFor="let option of selectOptions" [value]="option">{{option}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <button type="button" class="accessory-setting" clear ion-button block (click)="manageAccessories()">Manage Accessories</button>\n    <ion-list formArrayName="accessories">\n      <ion-item *ngFor="let accessoryControl of dressForm.get(\'accessories\').controls; let i=index">\n        <ion-grid class="accessory-block" [formGroupName]="i">\n          <ion-row>\n            <ion-col>Name:</ion-col>\n            <ion-col>\n              <input formControlName="name">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Amount:</ion-col>\n            <ion-col>\n              <input formControlName="amount">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Color:</ion-col>\n            <ion-col>\n              <input formControlName="color">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>Length:</ion-col>\n            <ion-col>\n              <input formControlName="length">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n    <button type="submit" class="dress-mode" ion-button [disabled]="!dressForm.valid">{{mode}} Dress</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/newuser/Downloads/ionic_project/ dress_from_your_region/customize_a_dress_from_your_region copy/src/pages/customize-a-dress/customize-a-dress.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__services_dresses_service__["a" /* DressesService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], CustomizeADressPage);
    return CustomizeADressPage;
}());

//# sourceMappingURL=customize-a-dress.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map