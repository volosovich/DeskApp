//Angular Module
import {Component, Inject, OnInit} from 'angular2/core';

//Custom Service
import {DemoService} from '../service/demo.service';


@Component({
    selector: 'list',
    templateUrl: 'app/component/list.template.html',
})
export class List {

  constructor(private _demoService: DemoService) {}
  
  addCard(card){
      this._demoService.addCard(card);
  }


}