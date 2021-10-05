import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodoService } from '../todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { MainRoutingModule } from './main-routing.module';
import { AuthService } from '../auth.service';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [
    MainComponent,
    MyCompComponent,
    NewTodoComponent,
    FilterPipe,
    HomeComponent,
    NotFoundComponent,
    TasksComponent,
    AuthComponent,
    TaskComponent
  ],
  imports: [
    ReactiveFormsModule, 
    FormsModule,
    CommonModule,
    MainRoutingModule
  ],
  providers: [
    TodoService,
    AuthService
  ],
  exports: [
    MainComponent 
  ]
  
})
export class MainModule { }
