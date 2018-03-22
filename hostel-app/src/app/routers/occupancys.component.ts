import { Component} from '@angular/core';
  
@Component({
    selector: 'occupancys-app',
    template: 
    `     <div class="page-header">
        <h1> Информация о заселенцах </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" placeholder="Поиск..." />
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
                <tr >
                    <td>(ФИО)</td>
                    <td>(НОМЕР)</td>
                    <td>(Дата заселения)</td>
                    <td>(Дата выселения)</td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" /></td>
                </tr>
            </tbody>
        </table>
    </div>`
})
export class OccupancysComponent { }