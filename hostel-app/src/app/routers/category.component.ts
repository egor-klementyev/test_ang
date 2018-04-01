import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Categorys} from '../classes/categorys';

@Component({
    selector: 'category-app',
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
                   <th>Вид категории</th>
                   <th>Цена</th>
                   <th>Удобства</th>
                   <th>Сохранение изменения записи</th>
                    <th>Удаление записи</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let category of categorys">
                   <td>{{category?.name}}</td>
                   <td>{{(category?.price/100)}} RUB</td>
                   <td>{{category?.convenView}}</td>
                   <td><input type="checkbox" /></td>
                   <td><input type="checkbox" /></td>
                   <td><button>save</button></td>
                </tr>
            </tbody>
        </table>
    </div>`,
    providers:[HttpService]
})
export class CategoryComponent implements OnInit{ 
  categorys:Categorys[]=[];
  error: any;

  returnPriceRub(price:number):number{
    return price / 100;
  }

  constructor(private httpService: HttpService){}

    ngOnInit(){
        console.log("=====> начало загрузки данных");
        this.httpService.getDataCategory().subscribe( (data:Categorys[]) => this.categorys = data, error => {this.error = error.message; console.log(error)} );
        console.log("=====> конец загрузки данных");
    }
}