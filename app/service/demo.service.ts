//Angular
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {LocalStorage} from 'angular2-local-storage/local_storage';

@Injectable()
export class DemoService {

  public desks;
  public desks2;
  constructor(private http:Http, private ls:LocalStorage) {}


  // Uses http.get() to load a single JSON file
  // getData() {
  //   return this.http.get('./testData/data.json').map((res:Response) => res.json());
  // }
  // selectDesk(desk){
  //   console.log('CONSOLE IH DEMO.SERVICE: ', desk);
  // }
  
  
  // getData2(){
  //   return this.http.get('./testData/data2.json').map((res:Response) => res.json()).subscribe(
  //     // the first argument is a function which runs on success
  //     data => { this.desks = data },
  //     // the second argument is a function which runs on error
  //     err => console.error(err),
  //     // the third argument is a function which runs on completion
  //     () => console.log('done loading Desks in DemoService', this.desks)
  //   );
  // }
  
  // getDesk(id) {
  //   return this.desks.filter(function (desk){
  //     return desk.deskId === id;
  //   })[0];
  // }
  
  getDesk2(id) {
    return this.desks2[id];
  }
  
  
  //Add and remove Card and List in Main Desk
  addCardMainDesk(card, listId) {
    var tmpDesk = this.ls.getObject('deskId_1');
    var d = new Date();
    var tmpCard = {'textCard': card, 'dateCard': d.toString()};
    tmpDesk.deskData[listId].listCard.push(tmpCard);
    this.desks2[0]['deskData'][listId].listCard.push(tmpCard);
    this.ls.setObject('deskId_1', tmpDesk);
    
  }
  addListMainDesk(list) {
    var tmpDesk = this.ls.getObject('deskId_1');
    var tmpList = {'nameList': list, 'listCard': []}
    tmpDesk['deskData'].push(tmpList);
    this.ls.setObject('deskId_1', tmpDesk);
    this.desks2[0]['deskData'].push(tmpList);
  }
  
  // Remove Card and list in Main Desk
  removeListMainDesk(id){
    var tmpDesk = this.ls.getObject('deskId_1');
    tmpDesk.deskData.splice(id, 1);
    this.desks2[0].deskData.splice(id, 1);
    this.ls.setObject('deskId_1', tmpDesk);
  }
  
  removeCardMainDesk(list, id){
    var tmpDesk = this.ls.getObject('deskId_1');
    this.desks2[0].deskData[list].listCard.splice(id, 1);
    tmpDesk.deskData[list].listCard.splice(id, 1);
    this.ls.setObject('deskId_1', tmpDesk);
  }
  
  
  //Add, remove Card and List in Desk List section
  addCardDesk(card, idList, idDesk) {
    var idDeskInLs = Number(idDesk) + 1;
    var tmpDesk = this.ls.getObject('deskId_' + idDeskInLs);
    var d = new Date();
    var tmpCard = {'textCard': card, 'dateCard': d.toString()};
    tmpDesk.deskData[idList].listCard.push(tmpCard);
    this.desks2[idDesk]['deskData'][idList].listCard.push(tmpCard);
    this.ls.setObject('deskId_' + (Number(idDesk) + 1), tmpDesk);
  }
  
  addListDesk(list, idDesk) {
    var idDeskInLs = Number(idDesk) + 1;
    var tmpDesk = this.ls.getObject('deskId_' + idDeskInLs);
    var tmpList = {'nameList': list, 'listCard': []}
    tmpDesk['deskData'].push(tmpList);
    this.ls.setObject('deskId_' + (Number(idDesk) + 1), tmpDesk);
    this.desks2[idDesk]['deskData'].push(tmpList);
  }
  
  removeListDesk(idList, idDesk){
    var idDeskInLs = Number(idDesk) + 1;
    var tmpDesk = this.ls.getObject('deskId_' + idDeskInLs);
    tmpDesk.deskData.splice(idList, 1);
    this.desks2[idDesk].deskData.splice(idList, 1);
    this.ls.setObject('deskId_' + idDeskInLs, tmpDesk);
  }
  
  removeCardDesk(idCard, idList, idDesk){
    var idDeskInLs = Number(idDesk) + 1;
    var tmpDesk = this.ls.getObject('deskId_' + idDeskInLs);
    tmpDesk.deskData[idList].listCard.splice(idCard, 1);
    this.desks2[idDesk].deskData[idList].listCard.splice(idCard, 1);
    this.ls.setObject('deskId_' + idDeskInLs, tmpDesk);
  }
  
  // remove Desk
  removeDesk(idDesk){
    var idDeskInLs = Number(idDesk) + 1
    console.log("REMOVE: ", idDesk);
    console.log("1 REMOVE: ", this.desks2);
    this.desks2.splice(idDesk, 1);
    this.ls.remove('deskId_' + idDeskInLs);
  }
  
  
  //get Data from localStorage
  getData3(){
    this.desks2 = [];
    for(var i = 1; i < localStorage.length; i++){
      this.desks2.push(this.ls.getObject('deskId_' + i));
    }
    return this.desks2;
  }

}