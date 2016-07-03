//In this component we have all custom validators that need to us

//Angular Module
import {Control} from 'angular2/common';

//Custom service
import {DemoService} from '../service/demo.service';

export class CustomValidator {
    
    constructor(private _demoService: DemoService) {}
    static checkDesks(control: Control) {
        var arr = ['first','second', 'third']; //need load array from another component
        for(var i= 0; i < arr.length; i++){
            if(control.value == arr[i]){
                return {foundSameNameOfDesk: true};
            }
        }
        return {foundSameNameOfDesk: false};
    }
}
