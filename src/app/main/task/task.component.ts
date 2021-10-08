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
    // this.route.params.subscribe((params: Params) => {
    //   this.currentTask = this.todoService.todoTasks.find(item => item.id === +params.id)
    // })
    // селектор чтобы искать таск по id
  }

}
