import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DemoService {
  
  constructor(private http:Http) {}

  // Uses http.get() to load a single JSON file
  getData() {
    return this.http.get('./testData/data.json').map((res:Response) => res.json());
  }

}