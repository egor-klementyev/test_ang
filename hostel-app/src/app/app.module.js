var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OccupancysComponent } from './routers/occupancys.component';
import { NomerComponent } from './routers/nomer.component';
import { CategoryComponent } from './routers/category.component';
import { ClientComponent } from './routers/client.component';
import { NotFoundComponent } from './routers/not-found.component';
// определение маршрутов
var appRoutes = [
    { path: '', component: OccupancysComponent },
    { path: 'occupancys', component: OccupancysComponent },
    // { path: 'admins', component: AdminComponent},
    { path: 'clients', component: ClientComponent },
    { path: 'categorys', component: CategoryComponent },
    { path: 'nomers', component: NomerComponent },
    // { path: '**', component: NotFoundComponent }
    { path: '**', redirectTo: '/' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
            declarations: [AppComponent, OccupancysComponent, NotFoundComponent],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map