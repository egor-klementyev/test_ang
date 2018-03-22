import { Component} from '@angular/core';
  
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
                <tr >
                   <td>Номер</td>
                   <td>Категория</td>
                   <td>Кол-во мест</td>
                   <td><input type="checkbox" /></td>
                   <td><input type="checkbox" /></td>
                   <td><button>save</button></td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class NomerComponent { }