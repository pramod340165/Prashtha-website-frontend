import {
  LoadingBarModule,
  LoadingBarService
} from "./chunk-65IWKAY3.js";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule
} from "./chunk-DJDP2ZNX.js";
import "./chunk-5P257MWA.js";
import "./chunk-GV72ZOBW.js";
import "./chunk-EY2TKAEZ.js";
import "./chunk-HCAKLT3Q.js";
import "./chunk-ZMLREZMJ.js";
import {
  APP_INITIALIZER,
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-FBO6U5GP.js";
import "./chunk-ZPDA6Z6E.js";
import "./chunk-6EY7IDZ7.js";
import "./chunk-DMY7NSOM.js";
import "./chunk-HSWANC32.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@ngx-loading-bar/router/fesm2022/ngx-loading-bar-router.mjs
function getCurrentNavigationState(router) {
  const currentNavigation = router.getCurrentNavigation && router.getCurrentNavigation();
  if (currentNavigation && currentNavigation.extras) {
    return currentNavigation.extras.state;
  }
  return {};
}
function registerRouterListener(router, loader) {
  return () => {
    const ref = loader.useRef("router");
    router.events.subscribe((event) => {
      const navState = getCurrentNavigationState(router);
      if (navState && navState.ignoreLoadingBar) {
        return;
      }
      if (event instanceof NavigationStart) {
        ref.start();
      }
      if (event instanceof NavigationError || event instanceof NavigationEnd || event instanceof NavigationCancel) {
        ref.complete();
      }
    });
  };
}
function provideLoadingBarRouter() {
  return {
    provide: APP_INITIALIZER,
    useFactory: registerRouterListener,
    deps: [Router, LoadingBarService],
    multi: true
  };
}
var _LoadingBarRouterModule = class _LoadingBarRouterModule {
  constructor(router, loader) {
    registerRouterListener(router, loader)();
  }
};
_LoadingBarRouterModule.ɵfac = function LoadingBarRouterModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoadingBarRouterModule)(ɵɵinject(Router), ɵɵinject(LoadingBarService));
};
_LoadingBarRouterModule.ɵmod = ɵɵdefineNgModule({
  type: _LoadingBarRouterModule,
  imports: [RouterModule, LoadingBarModule],
  exports: [RouterModule, LoadingBarModule]
});
_LoadingBarRouterModule.ɵinj = ɵɵdefineInjector({
  imports: [RouterModule, LoadingBarModule, RouterModule, LoadingBarModule]
});
var LoadingBarRouterModule = _LoadingBarRouterModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingBarRouterModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, LoadingBarModule],
      exports: [RouterModule, LoadingBarModule]
    }]
  }], function() {
    return [{
      type: Router
    }, {
      type: LoadingBarService
    }];
  }, null);
})();
export {
  LoadingBarRouterModule,
  provideLoadingBarRouter
};
//# sourceMappingURL=@ngx-loading-bar_router.js.map
