import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { AuthService } from '../auth.service';
import { TasksModule } from './tasks/tasks.module';
import { NotFoundModule } from './not-found/not-found.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    TasksModule,
    NotFoundModule,
    AuthModule
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
