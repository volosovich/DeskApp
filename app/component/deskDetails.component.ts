//Angular Module
import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {FORM_DIRECTIVES, ControlGroup, Control, Validators} from 'angular2/common';

//Custom Service
import {DemoService} from '../service/demo.service';


@Component({
    selector: 'deskDetails',
    directives: [FORM_DIRECTIVES],
    templateUrl: 'app/component/deskDetails.template.html',
})
export class DeskDetails {
  public id;
  public desk;
  
  form = new ControlGroup({
    newList: new Control();
    newCard: new Control();
  })

  constructor(private _demoService: DemoService, private _routeParams: RouteParams) {
    this.id = this._routeParams.get('id');
    this.desk = this._demoService.getDesk2(this.id);
  }
  
  addCard(card, idList){
      this._demoService.addCardDesk(card, idList, this.id);
  }
  addList(list){
      this._demoService.addListDesk(list, this.id);
  }
  
  removeList(idList){
    this._demoService.removeListDesk(idList, this.id);
  }
  removeCard(idCard, idList){
    this._demoService.removeCardDesk(idCard, idList, this.id);
  }


}