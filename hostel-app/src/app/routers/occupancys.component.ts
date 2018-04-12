import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Occupancys} from '../classes/occupancys';
import {Nomers} from '../classes/nomers';
import {Categorys} from '../classes/categorys';
import {Clients} from '../classes/clients';

@Component({
    selector: 'occupancys-app',
    template: `
    <div class="page-header">
        <h1> Информация о заселенцах </h1>
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
                    <th>ФИО</th>
                    <th>Номер</th>
                    <th>Дата заселения</th>
                    <th>Дата выселения</th>
                    <th>Сохранение изменения записи</th>
                    <th>Удаление записи</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let occup of occups">
                    <td>{{occup?.clientID?.lastName}} {{occup?.clientID?.firstName}} {{occup?.clientID?.threeName}}</td>
                    <td>{{occup?.nomerID?.indNomer}}</td>
                    <td>{{occup?.dataOccup | date:"dd/MM/yyyy"}}</td>
                    <td>{{occup?.dataExpulsion | date:"dd/MM/yyyy"}}</td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                    <td><button>save</button></td>
                </tr>
            </tbody>
        </table>
    </div>`,
    providers:[HttpService]
})
export class OccupancysComponent implements OnInit{ 
  occups:Occupancys[]=[];
  // nomer:Nomers[]=[];
  // category:Categorys[]=[];
  // client:Clients[]=[];
  error: any;

  constructor(private httpService: HttpService){}

    ngOnInit(){
        console.log("=====> начало загрузки данных о заселенцах");
        this.httpService.getDataOccup().subscribe( (data:Occupancys[]) => {this.occups = data; console.log(this.occups)}, error => {this.error = error.message; console.log(error)} );
        console.log("=====> конец загрузки данных о заселенцах");
    }
}