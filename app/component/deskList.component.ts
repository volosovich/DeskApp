import {Component} from 'angular2/core';
import {DemoService} from '../service/demo.service';
//Angular Module
import 'rxjs/add/operator/map';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

//Custom Module
import {List} from './list.component';
import {AboutComponent} from './about.component';
import {FeaturesComponent} from './features.component';


@Component({
    selector: 'desk-list',
    templateUrl: 'app/component/deskList.template.html'
    directives: [List, FeaturesComponent, AboutComponent, ROUTER_DIRECTIVES]
})

export class DeskList {

  constructor(private _demoService: DemoService, private router: Router) {}


  sendClick(el){
      console.log('CONSOLE IH DESKLIST.COMPONENT: ', el);
      this._demoService.selectDesk(el);
  }
  
  selectDesk(desk){
      this.router.navigate(['DeskDetails', {id: desk.deskId}]);
  }

}