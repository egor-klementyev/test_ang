import { Component } from '@angular/core';

class Item{
    purchase: string;
    done: boolean;
    price: number;
     
    constructor(purchase: string, price: number) {
  
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}
     
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
    </div>`
})

export class AppComponent { 
    items: Item[] = 
    [
        { purchase: "Хлеб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картофель", done: true, price: 22.6 },
        { purchase: "Сыр", done: false, price:310 }
    ];
    addItem(text: string, price: number): void {
         
        if(text==null || text==undefined || text.trim()=="")
            return;
        if(price==null || price==undefined)
            return;
        this.items.push(new Item(text, price));
    }
}