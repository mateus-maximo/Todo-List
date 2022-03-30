import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false});
  }

  public deleteAll(): void {
    const confirm = window.confirm("Você realmente deseja deletar tudo?");
    if(confirm) this.taskList = [];
  }

  public deleteTask(index: number): void {
    this.taskList.splice(index, 1);
  }

  public verificaTask(event: string, index: number): void {
    if(!event.length){
      const confirm = window.confirm("Deseja deletar a task?");
      if(confirm) this.deleteTask(index);
    }
  }
}
