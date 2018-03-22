var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var Item = /** @class */ (function () {
    function Item(purchase, price) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
    return Item;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.items = [
            { purchase: "Хлеб", done: false, price: 15.9 },
            { purchase: "Масло", done: false, price: 60 },
            { purchase: "Картофель", done: true, price: 22.6 },
            { purchase: "Сыр", done: false, price: 310 }
        ];
    }
    AppComponent.prototype.addItem = function (text, price) {
        if (text == null || text == undefined || text.trim() == "")
            return;
        if (price == null || price == undefined)
            return;
        this.items.push(new Item(text, price));
    };
    AppComponent = __decorate([
        Component({
            selector: 'hostel-app',
            template: " \n              <div>\n                    <nav>\n                        <a routerLink=\"/occupancys\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}>\u0417\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u0435</a>\n                        <a routerLink=\"/clients\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}>\u041A\u043B\u0438\u0435\u043D\u0442\u044B</a>\n                        <a routerLink=\"/nomers\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}>\u041D\u043E\u043C\u0435\u0440\u0430</a>\n                        <a routerLink=\"/categorys\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}>\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</a>\n                    </nav>\n                    <router-outlet></router-outlet>\n               </div>"
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map