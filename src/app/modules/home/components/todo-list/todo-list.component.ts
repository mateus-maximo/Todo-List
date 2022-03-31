import { Component, DoCheck} from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = [];

  constructor() { }

  ngDoCheck() {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
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
