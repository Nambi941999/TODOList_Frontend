import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodolistComponent } from './todolist/todolist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ViewlistComponent } from './components/viewlist/viewlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateTodolistComponent } from './update-todolist/update-todolist.component';




@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    NavbarComponent,
    HomeComponent,
    ViewlistComponent,
    UpdateTodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
