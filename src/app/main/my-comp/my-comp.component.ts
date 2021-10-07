import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TodoTask } from '../model/todotask';
@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.scss']
})
export class MyCompComponent{
  @Input() todo!: TodoTask
  @Output() deleteItemEvent = new EventEmitter<number>();
  @Output() editItemEvent = new EventEmitter<number>();
  @Output() completeItemEvent = new EventEmitter<number>();

  isOpen = false; 

  editItem (value: number) {
    this.editItemEvent.emit(value);
  }
  deleteItem (value: number) {
    this.deleteItemEvent.emit(value);
  }
  completeTask(value: number) { 
    this.completeItemEvent.emit(value);
  }
}
