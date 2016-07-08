//Angular Module
import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, Control, Validators} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';
import {LocalStorage} from 'angular2-local-storage/local_storage';

//Custom Service
import {DemoService} from '../service/demo.service';

//Custom Module
import {CustomValidator} from './customValidator.component';

@Component({
    selector: 'create-desk',
    directives: [FORM_DIRECTIVES],
    templateUrl: 'app/component/createDesk.template.html'
    
})
export class CreateDesk {
    form = new ControlGroup({
        nameDesk: new Control('', Validators.compose([Validators.required, Validators.minLength(4), CustomValidator.checkDesks]))
    })
    
    private mask: string = 'deskId_';
    private id: number = null;
    
    constructor(private ls: LocalStorage, private _demoService: DemoService){
        //debug
        console.log(this.form);
    }
    
    createDesk() {
        this.newDesk = {"deskName": this.form.value.nameDesk, "deskData": []};
        if(Object.getOwnPropertyNames(this.ls.getObject(this.mask + 1)).length === 0){
            this.ls.setObject(this.mask + 1, this.newDesk);
            this._demoService.desks2.push(this.newDesk);
        } else {
            this.ls.setObject(this.mask + localStorage.length, this.newDesk);
            this._demoService.desks2.push(this.newDesk);
        }
    }

}