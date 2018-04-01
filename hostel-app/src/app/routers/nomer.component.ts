import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Nomers} from '../classes/nomers';
// import {Categorys} from '../classes/categorys';
  
@Component({
    selector: 'nomer-app',
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
                   <th>Номер</th>
                   <th>Категория</th>
                   <th>Кол-во мест</th>
                   <th>Сохранение изменения записи</th>
                    <th>Удаление записи</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let nomer of nomers">
                   <td>{{nomer?.indNomer}}</td>
                   <td>{{nomer?.categoryID?.name}}</td>
                   <td>{{nomer?.lengthNomer}}<td><button>save</button></td>
                </tr>
            </tbody>
        </table>
    </div>`,
    providers: [HttpService]
})
export class NomerComponent  implements OnInit{ 
  nomers:Nomers[]=[];
  error: any;

  constructor(private httpService: HttpService){}

    ngOnInit(){
        console.log("=====> начало загрузки данных о номерах");
        this.httpService.getDataNomer().subscribe( (data:Nomers[]) => {this.nomers=data; console.log("Nomers: ",this.nomers)}, error => {this.error = error.message;} );
        console.log("=====> конец загрузки данных о номерах");
    }
}