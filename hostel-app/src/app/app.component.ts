import { Component, OnInit} from '@angular/core';
//Импорт http сервиса
import { HttpService} from './http.service';
//Импорт классов для бд
import {Occupancys} from './classes/occupancys';
import {Clients} from './classes/clients';
import {Nomers} from './classes/nomers';
import {Categorys} from './classes/categorys';

@Component({
    selector: 'hostel-app',
    styles:  [` 
                    .active {color:red;}
                `],
    template: `
    <div>
        <nav>
            <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Заселение</a>
            <a routerLink="/clients" routerLinkActive="active">О клиентах</a>
            <a routerLink="/nomers" routerLinkActive="active">О номерах</a>
            <a routerLink="/categorys" routerLinkActive="active">О категориях</a>
        </nav>
        <router-outlet></router-outlet>
    </div>`,
    providers: [HttpService]
})

export class AppComponent { 
    
    // category:Categorys [] = [];;
    // nomer:Nomers [] = [];;
    // occup:Occupancys [] = [];;

}