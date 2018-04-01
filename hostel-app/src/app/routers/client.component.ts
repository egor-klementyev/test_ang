import { Component, OnInit} from '@angular/core';
import { HttpService} from '../http.service';
import {Clients} from '../classes/clients';

@Component({
    selector: 'client-app',
    template:`
    <div class="page-header">
        <h1> Информация о клиентах </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-6">
                   <input class="form-control" placeholder = "Поиск..." />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button>Найти</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Паспортные данные</th>
                    <th>Цель приезда</th>
                    <th>Сохранение изменения записи</th>
                    <th>Удаление записи</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let client of clients">
                   <td>{{client?.lastName}}</td>
                   <td>{{client?.firstName}}</td>
                   <td>{{client?.threeName}}</td>
                   <td>{{client?.passData}}</td>
                   <td>{{client?.reasonComming}}</td>
                   <td><input type="checkbox" /></td>
                   <td><input type="checkbox" /></td>
                   <td><button>save</button></td>
                </tr>
            </tbody>
        </table>
    </div>`,
    providers: [HttpService]
})

export class ClientComponent implements OnInit{ 
  clients:Clients[]=[];
  // public data:Clients[]=[];
  error: any;

  constructor(private httpService: HttpService){}

    ngOnInit(){
        console.log("=====> начало загрузки данных клиента");
        this.httpService.getDataClient().subscribe( (data:Clients[]) => this.clients = data, error => {this.error = error.message; console.log(error)} );
        console.log(this.clients);
        console.log("=====> конец загрузки данных клиента");
    }
}