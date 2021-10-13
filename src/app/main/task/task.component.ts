import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TodoService } from 'src/app/todo.service';
import { TodoTask } from '../model/todotask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService) {}

    currentTask?: TodoTask;

  ngOnInit(): void {
    let currentTaskId;
    this.route.params.subscribe((params: Params) => {
      currentTaskId = params.id;
    })
    if (currentTaskId) {
      let b = this.todoService.getCurrentTodoTask(currentTaskId);
      if (b) {
        this.currentTask = b;
      } 
    }
  } 
}
