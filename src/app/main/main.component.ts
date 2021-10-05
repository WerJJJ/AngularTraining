import { Component, OnInit } from '@angular/core';
import { TodoTask } from './model/todotask';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private todoService: TodoService) {

  }

  editObject!: TodoTask | null;
  isOpenModal = false;
  value = "";
  search = "";


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

  get todoTasks () : TodoTask[] {
    return this.todoService.todoTasks;
  }

}
