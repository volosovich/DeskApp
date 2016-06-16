import {bootstrap}    from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component';
import {DemoService} from './demo.service';
import {ROUTER_PROVIDERS} from 'angular2/router'; //t

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS, //t
  DemoService
]);