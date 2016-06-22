import {Component} from 'angular2/core';

import {DemoService} from './demo.service';

@Component({
    templateUrl: 'app/features.template.html'
})
export class FeaturesComponent {
    public Data;
  
    constructor(private _demoService: DemoService) { }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this._demoService.getData().subscribe(
            // the first argument is a function which runs on success
            data => { this.Data = data},
            // the second argument is a function which runs on error
            err => console.error(err),
            // the third argument is a function which runs on completion
            () => console.log('done loading Data FAETURES')
        );
        //debugger;
    }
}