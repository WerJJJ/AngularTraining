import { Injectable } from '@angular/core';
import {TodoTask} from './main/model/todotask';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }
  private todos:TodoTask[] = [
    {
      id: 1,
      title:'Todo number 1',
      description:'Description of todo number 1',
      date: '0',
      isDone: false
    },
    {
      id: 2,
      title:'Todo number 2',
      description:'Description of todo number 2',
      date: '0',
      isDone: true
    },
    {
      id: 3,
      title:'Todo number 3',
      description:'Description of todo number 3',
      date: '0',
      isDone: false
    }
  ];

  get todoTasks() : TodoTask[]{
    return this.todos;
  }

  findItemById(id: number) : TodoTask | undefined {
    return this.todos.find(item => item.id === id);
  }

  deleteItem(deleteId: number) {
    this.todos = this.todos.filter(item => {
      return item.id !== deleteId;
    })
  }

  private generateId () : number{
    return this.todos.length + 1;
  }

  addItem (task: TodoTask) {
    this.todos.push({...task, id:this.generateId()})
  }

  editItem(task: TodoTask) {
    let editedTaskIndex = this.todos.findIndex(item => item.id === task.id);
    this.todos[editedTaskIndex] = task;
  }
  completeTask(completeId: number) {
    const completeTask = this.todos.find(item => item.id === completeId);
     completeTask!.isDone = true;
  }
}
