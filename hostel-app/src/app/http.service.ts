import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {Clients} from './classes/clients';
import {Categorys} from './classes/categorys';
import {Nomers} from './classes/nomers';
import {Occupancys} from './classes/occupancys';

@Injectable()
export class HttpService{
    constructor(private http: HttpClient){ }
      
      //-----
      // Для получения данных
      //-----

    getDataClient(){
      const body = {};
      return this.http.post('http://127.0.0.1:8382/app/clients/getall',body);
    }

    getDataCategory(){
      const body = {};
      return this.http.post('http://localhost:8382/app/category/getall', body);
    }

    getDataNomer(){
      const body = {};
      return this.http.post('http://localhost:8382/app/nomer/getall', body);
    }

    getDataOccup(){
      const body = {};
      return this.http.post('http://localhost:8382/app/occupancy/getall', body);
    }
    //-----
    // Для отправки данных
    //-----

    // 
  postCreateClient(client:Clients){
    const body = {firstName:client.firstName, lastname:client.lastName, threeName:client.threeName, passData:client.passData, reason:client.reasonComming, flgDelete:client.flgDelete};
    return this.http.post('http://localhost:8382/app/client/ins',body);
  }

  postCreateCategory(category:Categorys){
    const body = {name:category.name,conven:category.convenView, price:category.price, flgDlt:category.flgDelete};
    return this.http.post('http://localhost:8382/app/category/ins', body);
  }

  postCreateNomer(nomers:Nomers){
    const body = {nomer:nomers.idNomer,category:nomers.categoryID, length:nomers.lengthNomer, flgDlt:nomers.flgDelete};
    return  this.http.post('http://localhost:8382/app/nomer/ins', body);
  }

  postCreateOccup(occup:Occupancys ){
    const body = {client:occup.clientID, nomer:occup.nomerID, dataOccup:occup.dateOccup, dataExpul:occup.dataExpulsion, flgDlt:occup.flgDelete};
    return  this.http.post('http://localhost:8382/app/nomer/ins', body);
  }

}