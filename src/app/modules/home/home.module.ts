import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListAddButtonComponent } from './components/todo-list-add-button/todo-list-add-button.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    TodoListComponent,
    TodoListAddButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
