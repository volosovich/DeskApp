//Angular Module
import {Component} from 'angular2/core';

//Custom Service
import {DemoService} from '../service/demo.service';



@Component({
    templateUrl: 'app/component/features.template.html'
})
export class FeaturesComponent {

    constructor(private _demoService: DemoService) { }

}