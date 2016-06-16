import {Component} from 'angular2/core';
import {List} from './list.component';
import {CreateDesk} from './createDesk.component';
import {DeskList} from './deskList.component';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {AboutComponent} from './about.component';
import {FeaturesComponent} from './features.component';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.template.html',
    directives: [List, CreateDesk, DeskList,FeaturesComponent, AboutComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', component: List, name: 'List', useAsDefault: true},
    {path: '/features', component: FeaturesComponent, name: 'Features'},
    {path: '/about', component: AboutComponent, name: 'About'}
])

export class AppComponent { }