import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListDeleteAllComponent } from './todo-list-delete-all.component';

describe('TodoListDeleteAllComponent', () => {
  let component: TodoListDeleteAllComponent;
  let fixture: ComponentFixture<TodoListDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListDeleteAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
