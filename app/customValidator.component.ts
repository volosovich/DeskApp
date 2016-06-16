//In this module we have all custom validators that need to us
import {Control} from 'angular2/common';

export class CustomValidator {

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
