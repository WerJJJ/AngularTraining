import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import {TodoTask} from './main/model/todotask';
import * as TodoActions from '../app/main/state/actions/product.actions';
import * as TodoSelector from '../app/main/state/selectors/product.selector';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private store: Store<any>) { }

  get todoTasks() : Observable<TodoTask[]>{
    return this.store.pipe(select(TodoSelector.getTodoTask));
  }

  getCurrentTodoTask(id : number) : any {
    let currentTodoTask;
    this.store.pipe(select(TodoSelector.getCurrentTask(id))).subscribe(item => currentTodoTask = item);
    return currentTodoTask;
  }

  findItemById(id: number) : TodoTask | undefined {
    return this.getCurrentTodoTask(id);
  }

  deleteItem(deleteId: number) {
    this.store.dispatch(TodoActions.DeleteTask({ id: deleteId }))
  }

  private generateId () : any{
    let id;
    this.todoTasks.subscribe(item => id = item.length + 1);
    return id;
  }

  private findEditedTaskIndex (task : TodoTask) : any {
    let index;
    this.todoTasks.subscribe(item => index = item.findIndex(item => item.id === task.id));
    return index;
  }
  
  addItem (task: TodoTask) {
    const todoTask = {...task, id:this.generateId()}
    this.store.dispatch(TodoActions.AddTask({ payload: {todo: todoTask } }))
  }

  editItem(task: TodoTask) {
    let index = this.findEditedTaskIndex(task);
    this.store.dispatch(TodoActions.EditTask({ payload: {todo: task }, idx : index}))
  }

  completeTask(completeTaskId: number) {
    this.store.dispatch(TodoActions.CompleteTask({ id: completeTaskId }))
  }
}
