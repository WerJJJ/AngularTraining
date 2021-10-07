import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "src/app/auth.service";
import { TodoService } from "src/app/todo.service";
import { MainRoutingModule } from "../main-routing.module";
import { MyCompComponent } from "../my-comp/my-comp.component";
import { NewTodoComponent } from "../new-todo/new-todo.component";
import { FilterPipe } from "../pipes/filter.pipe";
import { TaskComponent } from "../task/task.component";
import { TasksComponent } from "./tasks.component";

@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    MyCompComponent,
    NewTodoComponent,
    FilterPipe
  ],
  imports: [
    ReactiveFormsModule, 
    FormsModule,
    CommonModule,
    MainRoutingModule
  ],
  providers: [
  
  ],
  exports: [
    TasksComponent 
  ]
  
})
export class TasksModule { }