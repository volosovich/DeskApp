//Angular Module
import {Component, Inject, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, Control, Validators} from 'angular2/common';


//Custom Service
import {DemoService} from '../service/demo.service';


@Component({
    selector: 'list',
    directives: [FORM_DIRECTIVES],
    templateUrl: 'app/component/list.template.html'
})
export class List {
  
  
  form = new ControlGroup({
    newList: new Control();
    newCard: new Control();
  })

  constructor(private _demoService: DemoService) {}
  
  addCard(card, listId){
      this._demoService.addCardMainDesk(card, listId);
      console.log('FORM ', this.form);
  }
  
  addList(list){
      this._demoService.addListMainDesk(list);
  }
  
  removeList(id){
    this._demoService.removeListMainDesk(id);
  }
  removeCard(list, id){
    this._demoService.removeCardMainDesk(list, id);
  }


}