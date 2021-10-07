import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./not-found.component";

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
  ],
  exports: [
    NotFoundComponent 
  ]
  
})
export class NotFoundModule { }