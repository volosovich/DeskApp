//Angular Module
import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide} from 'angular2/core';
import {LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';

//Custom Module
import {AppComponent} from './component/app.component';

//Custom Service
import {DemoService} from './service/demo.service';

bootstrap(AppComponent, [
  DemoService,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass : HashLocationStrategy})
]);