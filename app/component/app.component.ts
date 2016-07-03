//Angular Module
import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

//Custom Module
import {List} from './list.component';
import {CreateDesk} from './createDesk.component';
import {DeskList} from './deskList.component';
import {AboutComponent} from './about.component';
import {FeaturesComponent} from './features.component';
import {DeskDetails} from './deskDetails.component';

//Custom Service
import {DemoService} from '../service/demo.service';


@Component({
    selector: 'my-app',
    templateUrl: 'app/component/app.template.html',
    directives: [List, CreateDesk, DeskList, FeaturesComponent, AboutComponent, DeskDetails, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', component: List, name: 'List', useAsDefault: true},
    {path: '/features', component: FeaturesComponent, name: 'Features'},
    {path: '/about', component: AboutComponent, name: 'About'},
    {path: '/desk/:id', component: DeskDetails, name: 'DeskDetails'}
])

export class AppComponent {
    
    constructor(public _demoService: DemoService) {}
    
    ngOnInit() {
        this._demoService.getData2();
    }

}