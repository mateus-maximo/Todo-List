import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [
    {
      task: 'teste',
      checked: true
    },
    {
      task: 'testando',
      checked: false
    }
  ];  

  constructor() { }

  ngOnInit(): void {
  }

  deleteAll(): void {
    const confirm = window.confirm("Você realmente deseja deletar tudo?");
    if(confirm) this.taskList = [];
  }

}
