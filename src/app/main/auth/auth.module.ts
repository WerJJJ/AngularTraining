import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from "src/app/auth.service";
import { TodoService } from "src/app/todo.service";
import { AuthComponent } from "./auth.component";

const routes: Routes = [
    {
      path: '',
      component: AuthComponent
    }
  ];


@NgModule({
    declarations: [
        AuthComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [

    ],
    exports: [
        AuthComponent,
        RouterModule
    ]
  })
  export class AuthModule { }