import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-add-button',
  templateUrl: './todo-list-add-button.component.html',
  styleUrls: ['./todo-list-add-button.component.css']
})
export class TodoListAddButtonComponent implements OnInit {

  constructor() { }

  @Output() public emitItemTaskList = new EventEmitter();
  public addItemTaskList: string = "";

  ngOnInit(): void {
  }

  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim();
    if(this.addItemTaskList){
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }

}
