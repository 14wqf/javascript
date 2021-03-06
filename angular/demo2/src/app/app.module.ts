import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import {RouterModule, Routes} from '@angular/router';

var routeConfig: Routes = [
  {path: '', component: ChildComponent},
  {path: 'child2', component: ChildComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    ChildComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
