import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { Subscription, timer } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators'
import { TodoService } from 'src/app/todo.service';
import { TodoTask } from '../model/todotask';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnDestroy {
  filterField = ''
  subscription: Subscription;

  // @ViewChild('searchInput', { static: false }) searchInput!: ElementRef;
  constructor(private todoService: TodoService, private fb: FormBuilder) {
    // let timer2Sec: Subscription;
    this.subscription = this.filterControl.valueChanges.pipe(debounceTime(2000), map((x: string): string => x.trim())).subscribe(x => {console.log(x); this.filterField = x})
    // this.filterForm.valueChanges.subscribe(changes => {
    //   if (timer2Sec !== undefined) {
    //     timer2Sec.unsubscribe();
    //   }
    //   let inputValue = this.filterForm.get('value')?.value;
    //   inputValue = inputValue.trim();
    //   timer2Sec = this.source.subscribe(val => {
    //     this.filterList(inputValue);
    //   });
    // })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  editObject!: TodoTask | null;
  isOpenModal = false;
  value = "";
  search = "";
  source = timer(2000);

  filterForm = this.fb.group({
    value: ''
  })

  filterControl = this.fb.control('')
  createNewTodo() {
    this.isOpenModal = true;
  }
  
  editItem(editId: number) {
    this.editObject =  this.todoService.findItemById(editId) || null;
    this.isOpenModal = true;
  }

  deleteItem(deleteId: number) {
    this.todoService.deleteItem(deleteId);
  }

  inputHandler(value: string) {
    this.value = value;
  }

  addTodoPress(task: TodoTask) {
    this.todoService.addItem(task);
    this.isOpenModal = !this.isOpenModal;
  }

  editTodoTask(editedTask: TodoTask) {
    this.todoService.editItem(editedTask);
    this.editObject = null;
    this.isOpenModal = false;
  }

  completeTodoTask(completeId: number) {
    this.todoService.completeTask(completeId);
  }

  filterList(value: string) {
    console.log(value)
  }

  get todoTasks () : TodoTask[] {
    return this.todoService.todoTasks;
  }
}
