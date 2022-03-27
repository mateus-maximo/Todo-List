import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListAddButtonComponent } from './components/todo-list-add-button/todo-list-add-button.component';
import { TodoListDeleteAllComponent } from './components/todo-list-delete-all/todo-list-delete-all.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    TodoListComponent,
    TodoListAddButtonComponent,
    TodoListDeleteAllComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
