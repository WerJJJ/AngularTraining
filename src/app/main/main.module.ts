import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoService } from '../todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { MyCompComponent } from './my-comp/my-comp.component';



@NgModule({
  declarations: [
    MainComponent,
    MyCompComponent,
    NewTodoComponent,
    FilterPipe
  ],
  imports: [
    ReactiveFormsModule, 
    FormsModule,
    CommonModule
  ],
  providers: [
    TodoService
  ],
  exports: [
    MainComponent 
  ]
  
})
export class MainModule { }
