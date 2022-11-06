import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTodolistComponent } from './update-todolist.component';

describe('UpdateTodolistComponent', () => {
  let component: UpdateTodolistComponent;
  let fixture: ComponentFixture<UpdateTodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTodolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
