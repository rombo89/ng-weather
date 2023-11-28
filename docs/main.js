(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _components_cache_time_entry_cache_time_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cache-time-entry/cache-time-entry.component */ 7298);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let AppComponent = (_class = class AppComponent {
  constructor(modalService) {
    this.modalService = modalService;
  }
  openCacheTimeModal() {
    this.modalService.open(_components_cache_time_entry_cache_time_entry_component__WEBPACK_IMPORTED_MODULE_1__.CacheTimeEntryComponent);
  }
}, _class.ctorParameters = () => [{
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal
}], _class);
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   CACHE_TIME_MINUTES: () => (/* binding */ CACHE_TIME_MINUTES)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/zipcode-entry/zipcode-entry.component */ 3813);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/location.service */ 5434);
/* harmony import */ var _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forecasts-list/forecasts-list.component */ 726);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/weather.service */ 1125);
/* harmony import */ var _components_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/current-conditions/current-conditions.component */ 6263);
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-page/main-page.component */ 4766);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _components_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tab-item/tab-item.component */ 1083);
/* harmony import */ var _components_tab_group_tab_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tab-group/tab-group.component */ 7536);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _services_cache_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/cache.service */ 248);
/* harmony import */ var _components_current_conditions_data_current_conditions_data_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/current-conditions-data/current-conditions-data.component */ 7196);
/* harmony import */ var _components_cache_time_entry_cache_time_entry_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cache-time-entry/cache-time-entry.component */ 7298);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















const CACHE_TIME_MINUTES = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.InjectionToken('cacheTime');
let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_7__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production
  })],
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent, _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent, _components_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsComponent, _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent, _components_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_9__.TabItemComponent, _components_tab_group_tab_group_component__WEBPACK_IMPORTED_MODULE_10__.TabGroupComponent, _components_current_conditions_data_current_conditions_data_component__WEBPACK_IMPORTED_MODULE_12__.CurrentConditionsDataComponent, _components_cache_time_entry_cache_time_entry_component__WEBPACK_IMPORTED_MODULE_13__.CacheTimeEntryComponent],
  providers: [{
    provide: CACHE_TIME_MINUTES,
    useValue: 120
  }, _services_cache_service__WEBPACK_IMPORTED_MODULE_11__.CacheService, _services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService, _services_weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/forecasts-list/forecasts-list.component */ 726);
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-page/main-page.component */ 4766);



const appRoutes = [{
  path: '',
  component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _components_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 7298:
/*!***************************************************************************!*\
  !*** ./src/app/components/cache-time-entry/cache-time-entry.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheTimeEntryComponent: () => (/* binding */ CacheTimeEntryComponent)
/* harmony export */ });
/* harmony import */ var _cache_time_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache-time-entry.component.html?ngResource */ 262);
/* harmony import */ var _cache_time_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache-time-entry.component.css?ngResource */ 5381);
/* harmony import */ var _cache_time_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cache_time_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var app_services_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/cache.service */ 248);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let CacheTimeEntryComponent = (_class = class CacheTimeEntryComponent {
  constructor(cacheService, activeModal) {
    this.cacheService = cacheService;
    this.activeModal = activeModal;
  }
  ngOnInit() {
    // Get the cache default value
    this.model = {
      cacheTime: this.cacheService.getCacheTime()
    };
  }
  /**
   * Save function:
   * - Edit the cache time;
   * - Clear the local storage, remove the application data cached;
   * - Close the modal;
   */
  save() {
    if (this.model?.cacheTime) {
      this.cacheService.setCacheTime(this.model.cacheTime);
      this.cacheService.cleanLocalStorage();
      this.close();
    }
  }
  /**
   * Close the modal
   */
  close() {
    this.activeModal.close();
  }
}, _class.ctorParameters = () => [{
  type: app_services_cache_service__WEBPACK_IMPORTED_MODULE_2__.CacheService
}, {
  type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal
}], _class);
CacheTimeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-cache-time-entry',
  template: _cache_time_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_cache_time_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CacheTimeEntryComponent);


/***/ }),

/***/ 7196:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/current-conditions-data/current-conditions-data.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsDataComponent: () => (/* binding */ CurrentConditionsDataComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_data_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions-data.component.html?ngResource */ 9687);
/* harmony import */ var _current_conditions_data_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions-data.component.css?ngResource */ 5107);
/* harmony import */ var _current_conditions_data_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_data_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * Current condition detail component
 * - Show the current condition data
 */
let CurrentConditionsDataComponent = (_class = class CurrentConditionsDataComponent {}, _class.propDecorators = {
  location: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  imgSrc: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }]
}, _class);
CurrentConditionsDataComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-current-conditions-data',
  template: _current_conditions_data_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_current_conditions_data_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsDataComponent);


/***/ }),

/***/ 6263:
/*!*******************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 2923);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 4207);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ 1125);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/location.service */ 5434);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor() {
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService);
    this.currentConditionsByZip = this.weatherService.getCurrentConditions();
    this.currentConditionsPresents = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.computed)(() => this.currentConditionsByZip().length > 0);
  }
  /**
   * Remove Location by index
   * @param title
   */
  removeLocation(index) {
    this.locationService.removeLocation(index);
  }
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 726:
/*!***********************************************************************!*\
  !*** ./src/app/components/forecasts-list/forecasts-list.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 5422);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 8314);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ 1125);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ForecastsListComponent = (_class = class ForecastsListComponent {
  constructor(weatherService, route) {
    this.weatherService = weatherService;
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      weatherService.getForecast(this.zipcode).subscribe(data => this.forecast = data);
    });
  }
}, _class.ctorParameters = () => [{
  type: _services_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}], _class);
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 4766:
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 7536:
/*!*************************************************************!*\
  !*** ./src/app/components/tab-group/tab-group.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabGroupComponent: () => (/* binding */ TabGroupComponent)
/* harmony export */ });
/* harmony import */ var _tab_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-group.component.html?ngResource */ 254);
/* harmony import */ var _tab_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-group.component.css?ngResource */ 1229);
/* harmony import */ var _tab_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var app_components_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/tab-item/tab-item.component */ 1083);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TabGroupComponent = (_class = class TabGroupComponent {
  constructor() {
    this.isClosable = false;
    this.onCloseTab = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  /**
   * Show the content of an active tab:
   * - Activate the first if there isn't an active tab
   */
  ngAfterContentInit() {
    if (this.items.length) {
      const activeTabs = this.items.filter(tab => tab.isActive);
      if (activeTabs.length === 0) {
        this.activateTabItem(this.items.first);
      }
    }
  }
  /**
   * Activate the tab selected by the user
   * - Deactivate all
   * - Activate selected tab
   * @param tab the selected tab
   */
  activateTabItem(tab) {
    this.items.toArray().forEach(tab => tab.isActive = false);
    tab.isActive = true;
  }
  /**
   * Close the tab by index:
   * - If the tab closed was active, the first tab became active
   * @param index
   */
  closeTab(index) {
    if (this.items.toArray()[index].isActive && this.items.length > 1) {
      if (index == 0) {
        this.activateTabItem(this.items.toArray()[index + 1]);
      } else {
        this.activateTabItem(this.items.first);
      }
    }
    this.onCloseTab.emit(index);
  }
}, _class.propDecorators = {
  isClosable: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  onCloseTab: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }],
  items: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
    args: [app_components_tab_item_tab_item_component__WEBPACK_IMPORTED_MODULE_2__.TabItemComponent]
  }]
}, _class);
TabGroupComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-tab-group',
  template: _tab_group_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tab_group_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabGroupComponent);


/***/ }),

/***/ 1083:
/*!***********************************************************!*\
  !*** ./src/app/components/tab-item/tab-item.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabItemComponent: () => (/* binding */ TabItemComponent)
/* harmony export */ });
/* harmony import */ var _tab_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-item.component.html?ngResource */ 4633);
/* harmony import */ var _tab_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-item.component.css?ngResource */ 4724);
/* harmony import */ var _tab_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TabItemComponent = (_class = class TabItemComponent {
  constructor() {
    this._tabActive = false;
  }
  set isActive(isActive) {
    setTimeout(() => {
      this._tabActive = isActive;
    }, 0);
  }
  get isActive() {
    return this._tabActive;
  }
}, _class.propDecorators = {
  title: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }],
  isActive: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }]
}, _class);
TabItemComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-tab-item',
  template: _tab_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tab_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabItemComponent);


/***/ }),

/***/ 3813:
/*!*********************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 2647);
/* harmony import */ var _zipcode_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipcode-entry.component.css?ngResource */ 956);
/* harmony import */ var _zipcode_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zipcode_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/location.service */ 5434);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ZipcodeEntryComponent = (_class = class ZipcodeEntryComponent {
  constructor(service) {
    this.service = service;
    this.model = {
      zipcode: ''
    }; // Zipcode model input 
  }

  addLocation() {
    if (this.model.zipcode) {
      this.service.addLocation(this.model.zipcode);
    }
  }
}, _class.ctorParameters = () => [{
  type: _services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService
}], _class);
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_zipcode_entry_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ZipcodeEntryComponent);


/***/ }),

/***/ 1115:
/*!***************************************************!*\
  !*** ./src/app/interfaces/location-state.type.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationAction: () => (/* binding */ LocationAction)
/* harmony export */ });
;
var LocationAction;
(function (LocationAction) {
  LocationAction[LocationAction["ADD"] = 0] = "ADD";
  LocationAction[LocationAction["REMOVE"] = 1] = "REMOVE";
})(LocationAction || (LocationAction = {}));
;

/***/ }),

/***/ 248:
/*!*******************************************!*\
  !*** ./src/app/services/cache.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheService: () => (/* binding */ CacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.module */ 8629);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let CacheService = (_class = class CacheService {
  constructor(cacheMinutes) {
    this.cacheMinutes = cacheMinutes;
  }
  /**
   * Get cached data from local storage
   * @param key
   * @returns data if exists and if it isn't expired, null otherwise
   */
  get(key) {
    const item = localStorage.getItem(key);
    if (item !== null) {
      const record = JSON.parse(item);
      const now = new Date().getTime();
      if (record.hasExpiration && record.expiration > now) {
        return JSON.parse(record.value);
      }
    }
    return null;
  }
  /**
   * Save on the local storage the data
   * - Set the expiration time if presents
   * @param opts
   */
  put(opts) {
    const expirationMins = opts.expirationMins ?? this.cacheMinutes;
    const expirationMS = expirationMins !== 0 ? expirationMins * 60 * 1000 : 0; // Convert in miliseconds 
    const record = {
      value: typeof opts.data === 'string' ? opts.data : JSON.stringify(opts.data),
      expiration: expirationMS !== 0 ? new Date().getTime() + expirationMS : null,
      hasExpiration: expirationMS !== 0 ? true : false
    };
    localStorage.setItem(opts.key, JSON.stringify(record));
  }
  getCacheTime() {
    return this.cacheMinutes;
  }
  setCacheTime(cacheTime) {
    this.cacheMinutes = cacheTime;
  }
  /**
   * Remove a record from local storage
   * @param key
   */
  remove(key) {
    localStorage.removeItem(key);
  }
  /**
   * Clean local storage
   */
  cleanLocalStorage() {
    localStorage.clear();
  }
}, _class.ctorParameters = () => [{
  type: Number,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
    args: [_app_module__WEBPACK_IMPORTED_MODULE_0__.CACHE_TIME_MINUTES]
  }]
}], _class);
CacheService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], CacheService);


/***/ }),

/***/ 5434:
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _interfaces_location_state_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/location-state.type */ 1115);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const LOCATIONS = "locations";
let LocationService = (_class = class LocationService {
  constructor() {
    this._locations = [];
    this.locationState = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({
      locations: []
    });
    const locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this._locations = JSON.parse(locString);
      this.locationState.set({
        locations: this._locations
      }); // Set the location list
    }
  }

  addLocation(zipcode) {
    this._locations.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(this._locations));
    this.locationState.update(state => {
      return {
        locations: [...state.locations, zipcode],
        action: _interfaces_location_state_type__WEBPACK_IMPORTED_MODULE_0__.LocationAction.ADD,
        zipcodeAdded: zipcode
      };
    });
  }
  removeLocation(index) {
    this._locations.splice(index, 1);
    localStorage.setItem(LOCATIONS, JSON.stringify(this._locations));
    this.locationState.mutate(state => {
      state.locations.splice(index, 1);
      state.action = _interfaces_location_state_type__WEBPACK_IMPORTED_MODULE_0__.LocationAction.REMOVE;
      state.zipcodeIndexRemoved = index;
    });
  }
}, _class.ctorParameters = () => [], _class);
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], LocationService);


/***/ }),

/***/ 1125:
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6520);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.service */ 5434);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache.service */ 248);
/* harmony import */ var _interfaces_location_state_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/location-state.type */ 1115);
var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;







let WeatherService = WeatherService_1 = (_class = class WeatherService {
  constructor(http, locationService, cacheService) {
    this.http = http;
    this.locationService = locationService;
    this.cacheService = cacheService;
    this.currentConditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)([]);
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.effect)(() => {
      const state = this.locationService.locationState();
      switch (state.action) {
        case _interfaces_location_state_type__WEBPACK_IMPORTED_MODULE_2__.LocationAction.ADD:
          this.addCurrentConditions(state.zipcodeAdded);
          break;
        case _interfaces_location_state_type__WEBPACK_IMPORTED_MODULE_2__.LocationAction.REMOVE:
          this.removeCurrentConditions(state.zipcodeIndexRemoved);
          break;
        default:
          for (let l of state.locations) {
            this.addCurrentConditions(l);
          }
      }
    }, {
      allowSignalWrites: true
    });
  }
  addCurrentConditions(zipcode) {
    if (zipcode) {
      const url = `${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`;
      const data = this.cacheService.get(url);
      // Use the data from cache if exists and the time is not expired
      if (data !== null) {
        this.currentConditions.mutate(conditions => conditions.push({
          zip: zipcode,
          data
        }));
      } else {
        // Request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
        this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(response => {
          // Cache data
          this.cacheService.put({
            key: url,
            data: response
          });
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(response);
        })).subscribe(data => this.currentConditions.mutate(conditions => conditions.push({
          zip: zipcode,
          data
        })));
      }
    }
  }
  /**
   * Remove a condition by index
   * @param index
   */
  removeCurrentConditions(index) {
    this.currentConditions.mutate(conditions => {
      conditions.splice(index, 1);
    });
  }
  getCurrentConditions() {
    return this.currentConditions.asReadonly();
  }
  getForecast(zipcode) {
    const url = `${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`;
    const data = this.cacheService.get(url);
    // Return data from cache if exists and the cache time is not expired
    if (data !== null) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(data);
    }
    // Request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(response => {
      // Cache data
      this.cacheService.put({
        key: url,
        data: response
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(response);
    }));
  }
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) return WeatherService_1.ICON_URL + "art_storm.png";else if (id >= 501 && id <= 511) return WeatherService_1.ICON_URL + "art_rain.png";else if (id === 500 || id >= 520 && id <= 531) return WeatherService_1.ICON_URL + "art_light_rain.png";else if (id >= 600 && id <= 622) return WeatherService_1.ICON_URL + "art_snow.png";else if (id >= 801 && id <= 804) return WeatherService_1.ICON_URL + "art_clouds.png";else if (id === 741 || id === 761) return WeatherService_1.ICON_URL + "art_fog.png";else return WeatherService_1.ICON_URL + "art_clear.png";
  }
}, _class.URL = 'https://api.openweathermap.org/data/2.5', _class.APPID = '5a4b2d457ecbef9eb2a71e480b947604', _class.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/', _class.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _location_service__WEBPACK_IMPORTED_MODULE_0__.LocationService
}, {
  type: _cache_service__WEBPACK_IMPORTED_MODULE_1__.CacheService
}], _class);
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], WeatherService);


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 5381:
/*!***************************************************************************************!*\
  !*** ./src/app/components/cache-time-entry/cache-time-entry.component.css?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `::ng-deep ngb-modal-backdrop {
    z-index: 1050 !important;
  }`, "",{"version":3,"sources":["webpack://./src/app/components/cache-time-entry/cache-time-entry.component.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;EAC1B","sourcesContent":["::ng-deep ngb-modal-backdrop {\r\n    z-index: 1050 !important;\r\n  }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5107:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/current-conditions-data/current-conditions-data.component.css?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.current-conditions-card {
    display: flex;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    background-color: #f5f5f5;
    padding: 20px !important;
}

.current-conditions-data {
    background-color: inherit;
    float: left;
    width: 50%;
}

.current-conditions-data .link-forecast {
    margin-top: 8px;
    font-size: 16px;
}`, "",{"version":3,"sources":["webpack://./src/app/components/current-conditions-data/current-conditions-data.component.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,yBAAyB;IACzB,kBAAkB;IAClB,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,UAAU;AACd;;AAEA;IACI,eAAe;IACf,eAAe;AACnB","sourcesContent":[".current-conditions-card {\r\n    display: flex;\r\n    border: 1px solid #e3e3e3;\r\n    border-radius: 4px;\r\n    background-color: #f5f5f5;\r\n    padding: 20px !important;\r\n}\r\n\r\n.current-conditions-data {\r\n    background-color: inherit;\r\n    float: left;\r\n    width: 50%;\r\n}\r\n\r\n.current-conditions-data .link-forecast {\r\n    margin-top: 8px;\r\n    font-size: 16px;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4207:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.css?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.close {
  cursor: pointer;
}

.flex {
  display: flex;
  justify-content: space-between;
}

`, "",{"version":3,"sources":["webpack://./src/app/components/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC","sourcesContent":[".close {\r\n  cursor: pointer;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8314:
/*!***********************************************************************************!*\
  !*** ./src/app/components/forecasts-list/forecasts-list.component.css?ngResource ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/components/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\r\n  width: 45px;\r\n  height: 45px;\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1229:
/*!*************************************************************************!*\
  !*** ./src/app/components/tab-group/tab-group.component.css?ngResource ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tab-close {
    cursor: pointer;
    float: right;
}`, "",{"version":3,"sources":["webpack://./src/app/components/tab-group/tab-group.component.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,YAAY;AAChB","sourcesContent":[".tab-close {\r\n    cursor: pointer;\r\n    float: right;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 4724:
/*!***********************************************************************!*\
  !*** ./src/app/components/tab-item/tab-item.component.css?ngResource ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tab-item {
    width: 100%;
    text-align: left;
    padding: 20px !important;
    border: 2px solid;
}`, "",{"version":3,"sources":["webpack://./src/app/components/tab-item/tab-item.component.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,gBAAgB;IAChB,wBAAwB;IACxB,iBAAiB;AACrB","sourcesContent":[".tab-item {\r\n    width: 100%;\r\n    text-align: left;\r\n    padding: 20px !important;\r\n    border: 2px solid;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 956:
/*!*********************************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.css?ngResource ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.zipcode-card {
    background-color: #f5f5f5;
    margin-bottom: 20px !important;
}`, "",{"version":3,"sources":["webpack://./src/app/components/zipcode-entry/zipcode-entry.component.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,8BAA8B;AAClC","sourcesContent":[".zipcode-card {\r\n    background-color: #f5f5f5;\r\n    margin-bottom: 20px !important;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"navbar navbar-dark bg-dark\" style=\"margin-bottom: 20px;\">\r\n    <span class=\"navbar-brand h1\" href=\"/\">Weather App</span>\r\n    <div class=\"form-inline\">\r\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"openCacheTimeModal()\">Edit the cache time</button>\r\n    </div>\r\n</div>\r\n<router-outlet></router-outlet>";

/***/ }),

/***/ 262:
/*!****************************************************************************************!*\
  !*** ./src/app/components/cache-time-entry/cache-time-entry.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<form (ngSubmit)=\"save()\" #cacheForm=\"ngForm\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Edit the cache time (minutes)</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"alert alert-warning mb-2\">\r\n            Changing the cache time, your weather data already cached will be deleted.\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" placeholder=\"Cache time (minutes)\" [(ngModel)]=\"model.cacheTime\" class=\"form-control\"\r\n                name=\"cacheTime\" #cacheTime=\"ngModel\" required>\r\n            <div [hidden]=\"(cacheTime.valid || cacheTime.pristine)\" class=\"alert alert-danger mt-2\">\r\n                Enter the cache time\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!cacheForm.form.valid\">\r\n            Save\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"close()\">Close</button>\r\n    </div>\r\n</form>";

/***/ }),

/***/ 9687:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/current-conditions-data/current-conditions-data.component.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"current-conditions-card\" *ngIf = \"location\">\r\n    <div class=\"current-conditions-data\">\r\n        <h4>Current conditions: {{location.data.weather[0].main}}</h4>\r\n        <h4>Temperatures today:</h4>\r\n        <li>Current: {{location.data.main.temp | number:'.0-0'}}</li>\r\n        <li>Max: {{location.data.main.temp_max | number:'.0-0'}}</li>\r\n        <li>Min: {{location.data.main.temp_min | number:'.0-0'}}</li>\r\n        <p class=\"link-forecast\">\r\n            <a [routerLink]=\"['/forecast', location.zip]\">Show 5-day forecast for {{location.data.name}} ({{location.zip}})</a>\r\n        </p>\r\n    </div>\r\n    <div class=\"current-conditions-data\">\r\n        <img [src]=\"imgSrc\">\r\n    </div>\r\n</div>";

/***/ }),

/***/ 2923:
/*!********************************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-tab-group *ngIf = \"currentConditionsPresents()\" [isClosable] = \"true\" (onCloseTab) = \"removeLocation($event)\">\r\n  <app-tab-item *ngFor=\"let location of currentConditionsByZip()\" title=\"{{location.data.name}} ({{location.zip}})\" class=\"flex\">\r\n      <!--Tab Item content: current conditions data-->\r\n      <app-current-conditions-data [location] = \"location\" imgSrc = \"{{weatherService.getWeatherIcon(location.data.weather[0].id)}}\"></app-current-conditions-data>\r\n  </app-tab-item>\r\n</app-tab-group>\r\n";

/***/ }),

/***/ 5422:
/*!************************************************************************************!*\
  !*** ./src/app/components/forecasts-list/forecasts-list.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\">5-day forecast for {{forecast?.city.name}}</h3>\r\n    </div>\r\n    <ul class=\"list-group\">\r\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\r\n        {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d'}}:\r\n        {{dailyForecast.weather[0].main}}\r\n        - Min: {{dailyForecast.temp.min | number:'.0-0'}}\r\n        - Max: {{dailyForecast.temp.max | number:'.0-0'}}\r\n  \r\n        <img [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\">\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <br>\r\n  <button class=\"btn btn-primary\" [routerLink]=\"'/'\" >< Back to main page</button>\r\n</div>\r\n\r\n";

/***/ }),

/***/ 595:
/*!**************************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n\r\n  <app-zipcode-entry> </app-zipcode-entry>\r\n  <app-current-conditions></app-current-conditions>\r\n\r\n</div>\r\n";

/***/ }),

/***/ 254:
/*!**************************************************************************!*\
  !*** ./src/app/components/tab-group/tab-group.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul class=\"nav nav-pills nav-justified\"> <!--Tabs Header-->\r\n    <li *ngFor=\"let item of items; let i = index\" class = \"nav-link\" [class.active]=\"item.isActive\" (click)=\"activateTabItem(item)\" style=\"cursor: pointer;\">\r\n        <a>{{item.title}}\r\n            <span *ngIf=\"isClosable\" class=\"tab-close\" (click)=\"closeTab(i)\">&times;</span>\r\n        </a>\r\n    </li>\r\n</ul>\r\n<ng-content></ng-content> <!--Content projection for TabItemComponent list-->";

/***/ }),

/***/ 4633:
/*!************************************************************************!*\
  !*** ./src/app/components/tab-item/tab-item.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div [hidden]=\"!_tabActive\" class=\"tab-item\">\r\n    <ng-content></ng-content> <!-- Content projection for tab body content-->\r\n</div>";

/***/ }),

/***/ 2647:
/*!**********************************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card card-body zipcode-card\">\r\n  <h2>Enter a zipcode:</h2>\r\n  <form (ngSubmit)=\"addLocation()\" #zipForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" placeholder=\"Zipcode\" [(ngModel)]=\"model.zipcode\" class=\"form-control\" name=\"zipcode\" #zipcode=\"ngModel\" required>\r\n      <div [hidden]=\"(zipcode.valid || zipcode.pristine)\" class=\"alert alert-danger mt-2\">\r\n        Enter a zipcode to view the weather conditions\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!zipForm.form.valid\">\r\n      Add location\r\n    </button>\r\n  </form>\r\n</div>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map