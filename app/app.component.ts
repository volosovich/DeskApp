import {Component} from 'angular2/core';
import {List} from './list.component';

@Component({
    selector: 'my-app',
    template: '<list></list>',
    directives: [List]
})
export class AppComponent { }