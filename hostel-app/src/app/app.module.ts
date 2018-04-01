
import { NgModule, LOCALE_ID}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import {Routes, RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
 
import { AppComponent }   from './app.component';
import { OccupancysComponent }   from './routers/occupancys.component';
import { AdminComponent }   from './routers/admin.component';
import { NomerComponent }   from './routers/nomer.component';
import { CategoryComponent }   from './routers/category.component';
import { ClientComponent }   from './routers/client.component';
import { NotFoundComponent }   from './routers/not-found.component';
 
// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: OccupancysComponent},
    { path: 'occupancys', component: OccupancysComponent},
    // { path: 'admins', component: AdminComponent},
    { path: 'clients', component: ClientComponent},
    { path: 'categorys', component: CategoryComponent},
    { path: 'nomers', component: NomerComponent},
    // { path: '**', component: NotFoundComponent }
    { path: '**', redirectTo: '/'}
];

@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
    declarations: [ AppComponent, OccupancysComponent, ClientComponent, NomerComponent, CategoryComponent],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }