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

        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="receivedCategory.name" placeholder = "Название категории" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="receivedCategory.price" placeholder="Цена" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="receivedCategory.convenView" placeholder = "Удобства" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addClient(categoryName, price, convenView)">Добавить</button>
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
  receivedCategory:Categorys;
  done: boolean = false;
  error: any;

  constructor(private httpService: HttpService){}

    ngOnInit(){
        console.log("=====> начало загрузки данных");
        this.httpService.getDataCategory().subscribe( (data:Categorys[]) => this.categorys = data, error => {this.error = error.message; console.log(error)} );
        console.log("=====> конец загрузки данных");
    }

  addClient(newCategory:Categorys){
    if (newCategory.name == null || newCategory.name == undefined || newCategory.name.trim() == "")
      return;
    if (newCategory.price == null || newCategory.price == undefined)
      return;
    if(newCategory.convenView == null || newCategory.convenView == undefined || newCategory.convenView.trim() == "")
      return;
    this.httpService.postCreateCategory(newCategory).subscribe(
                    (data: Categorys) => {this.receivedCategory=data; this.done=true;},
                    error => console.log(error)
    );
  }

}