//Angular
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DemoService {

  public desks;
  constructor(private http:Http) {}


  // Uses http.get() to load a single JSON file
  // getData() {
  //   return this.http.get('./testData/data.json').map((res:Response) => res.json());
  // }
  // selectDesk(desk){
  //   console.log('CONSOLE IH DEMO.SERVICE: ', desk);
  // }
  
  
  getData2(){
    return this.http.get('./testData/data2.json').map((res:Response) => res.json()).subscribe(
      // the first argument is a function which runs on success
      data => { this.desks = data },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading Desks in DemoService', this.desks)
    );
  }
  
  getDesk(id) {
    return this.desks.filter(function (desk){
      return desk.deskId === id;
    })[0];
  }
  
  addCard(card) {
    console.log('addCardServ in service: ', card);
  }

}