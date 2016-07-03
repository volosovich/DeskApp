//Angular Module
import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router'; 

//Custom Service
import {DemoService} from '../service/demo.service';


@Component({
    selector: 'deskDetails',
    templateUrl: 'app/component/deskDetails.template.html',
})
export class DeskDetails {
  public id;
  public desk;

  constructor(private _demoService: DemoService, private _routeParams: RouteParams) {
    this.id = this._routeParams.get('id');
    this.desk = this._demoService.getDesk(this.id);
  }
  
  addCard(card){
      this._demoService.addCard(card);
  }


}