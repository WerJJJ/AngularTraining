import { Component, OnInit } from '@angular/core';
import { TodoTask } from './model/todotask';
import { TodoService } from '../todo.service';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private httpService: HttpService){
    this.httpService.getConfig().subscribe(x => console.log(x))
  }
}
