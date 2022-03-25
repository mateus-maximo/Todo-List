import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListAddButtonComponent } from './todo-list-add-button.component';

describe('TodoListAddButtonComponent', () => {
  let component: TodoListAddButtonComponent;
  let fixture: ComponentFixture<TodoListAddButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListAddButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
