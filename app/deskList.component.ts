import {Component, Inject, EventEmitter, Output} from 'angular2/core';
import {DemoService} from './demo.service';
// import {SendPage} from './sendPage.service';
import 'rxjs/add/operator/map';


import {List} from './list.component';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'; //t
import {AboutComponent} from './about.component'; //t
import {FeaturesComponent} from './features.component'; //t


@Component({
    selector: 'desk-list',
    templateUrl: 'app/deskList.template.html'
    directives: [List, FeaturesComponent, AboutComponent, ROUTER_DIRECTIVES], //
})

@RouteConfig([
    {path: '/', component: List, name: 'List', useAsDefault: true},
    {path: '/features', component: FeaturesComponent, name: 'Features'},
    {path: '/about', component: AboutComponent, name: 'About'},
    {path: '/list/:id', component: List, name: 'List'}
])

export class DeskList {
  public Desks;
  
  constructor(private _demoService: DemoService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._demoService.getData().subscribe(
      // the first argument is a function which runs on success
      data => { this.Desks = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading Desks')
    );
    //debugger;
  }

  sendClick(el){
      console.log('CONSOLE IH DESKLIST.COMPONENT: ', el);
      this._demoService.selectDesk(el);
  }

}