import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, Control, Validators} from 'angular2/common';
import {bootstrap}    from 'angular2/platform/browser';
import {CustomValidator} from './customValidator.component';

@Component({
    selector: 'create-desk',
    directives: [FORM_DIRECTIVES],
    templateUrl: 'app/createDesk.template.html'
    
})
export class CreateDesk {
    form = new ControlGroup({
        nameDesk: new Control('', Validators.compose([Validators.required, Validators.minLength(4), CustomValidator.checkDesks]))
    })
    constructor(){
        //debug
        console.log(this.form);
    }
}