import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';

import {TodoTask} from './main/model/todotask';
import * as TodoActions from '../app/main/state/actions/product.actions';
import * as TodoSelector from '../app/main/state/selectors/product.selector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private store: Store<any>) { }
  // private todos:TodoTask[] = [
  //   {
  //     id: 1,
  //     title:'Learn Angular',
  //     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat ratione dignissimos voluptatem neque nesciunt obcaecati officiis totam ipsam sit itaque culpa debitis laudantium quod rerum autem, ipsum asperiores quisquam, provident nemo. Illo optio, ex suscipit, officia in alias magni perspiciatis officiis animi dicta quos possimus minima aperiam atque harum?',
  //     date: '2021-10-22',
  //     isDone: false
  //   },
  //   {
  //     id: 2,
  //     title:'Tell Nataliya that she is a great mentor',
  //     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci facilis commodi consequuntur inventore omnis autem vitae architecto, iure quos, illo laborum explicabo! Sunt est quos cupiditate, minima ea aspernatur cumque deleniti iure delectus praesentium non esse. Quae facere dignissimos, corporis vel, magni, placeat doloribus fuga officiis aliquam velit veritatis?',
  //     date: '2021-10-24',
  //     isDone: true
  //   },
  //   {
  //     id: 3,
  //     title:'Self-develop',
  //     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto autem commodi dolor qui molestias debitis cum voluptate ipsa corrupti minima similique maxime accusantium ut eos, nisi cumque esse rem consequatur odio aliquam. Vero, quisquam voluptatum rerum porro amet tempora nisi mollitia debitis doloremque maxime! Quaerat voluptas magni ea cupiditate qui.',
  //     date: '2100-01-01',
  //     isDone: false
  //   }
  // ];

  get todoTasks() : Observable<TodoTask[]>{
    return this.store.pipe(select(TodoSelector.getTodoTask));
  }

/*   findItemById(id: number) : TodoTask | undefined {
    return this.todos.find(item => item.id === id);
  }

  deleteItem(deleteId: number) {
    this.todos = this.todos.filter(item => {
      return item.id !== deleteId;
    })
  } */

  private generateId () : number{
    // return this.todos.length + 1;
    return 1;
  }

  addItem (task: TodoTask) {
    // this.todos.push({...task, id:this.generateId()})
    const todoTask = {...task, id:this.generateId()}
    this.store.dispatch(TodoActions.AddTask({ payload: {todo: todoTask } }))
  }

 /*  editItem(task: TodoTask) {
    let editedTaskIndex = this.todos.findIndex(item => item.id === task.id);
    this.todos[editedTaskIndex] = task;
  }
  completeTask(completeId: number) {
    const completeTask = this.todos.find(item => item.id === completeId);
     completeTask!.isDone = true;
  }  */
}
