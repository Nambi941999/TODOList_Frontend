import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ViewlistComponent } from './components/viewlist/viewlist.component';
import { UpdateTodolistComponent } from './update-todolist/update-todolist.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',

  },
  {
    path:'todolist',
    component:TodolistComponent,
    pathMatch:'full',
  },
  {
    path:'viewlist',
    component:ViewlistComponent,
    pathMatch:'full'
  },
  {
    path:'updatetodolist/:id',
    component:UpdateTodolistComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
