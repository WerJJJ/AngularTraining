import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { TodoTask } from '../model/todotask';
@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  @Output() task = new EventEmitter<TodoTask>();
  @Output() editedTask = new EventEmitter<TodoTask>();
  @Input() objectToEdit: any;
  value:string = "";
  isEdit:boolean = false;

  profileForm = this.fb.group({
    title: ['', [Validators.required, this.checkLessThanFourWords()]],
    description: ['', [Validators.required, Validators.maxLength(256)]],
    id: ['', ],
    date: ['', [Validators.required, this.checkDate()]],
    isDone:['']
  })

  checkLessThanFourWords(): ValidatorFn {  
    return (control: AbstractControl): { [key: string]: any } | null =>  
      control.value.split(' ').length <= 4 ? null : {error : "More that 4 words"};
  }

  
  checkDate(): ValidatorFn {  
    return (control: AbstractControl): { [key: string]: any } | null => {
      const currentDate = new Date().toJSON().slice(0,10).split('-').join('');
      const inputDate = control.value.split('-').join('');
      return currentDate <= inputDate ? null : {error : "More that 4 words"};
    }
      
  }
  
  ngOnInit() {
    if (this.objectToEdit) {
      this.isEdit = true;
      this.profileForm = this.fb.group({
        title: [this.objectToEdit.title, [Validators.required, this.checkLessThanFourWords()]],
        description: [this.objectToEdit.description, [Validators.maxLength(256)]],
        id: [this.objectToEdit.id],
        date: [this.objectToEdit.date, [Validators.required, this.checkDate()]],
        isDone: [false]
      })
    }
  }

  inputHandler(value: any) {
    this.value = value;
  }

  saveTask() {
    try { 
      const controlList = this.profileForm.controls
      for (let controlKey in controlList) {
        if (controlList[controlKey].status === "INVALID") {
          throw "Fill the form correctly"
        }
      }
      const obj = {
        title: this.profileForm.get('title')?.value,
        description: this.profileForm.get('description')?.value, 
        id: this.objectToEdit ? this.objectToEdit.id : 0,
        date: this.profileForm.get('date')?.value,
        isDone: false
      }
  
        if (this.isEdit) {
          this.editedTask.emit(obj)
        } else {
          this.task.emit(obj);
        }
    }
    catch (err: any) {
    }
  }

    constructor(private fb: FormBuilder) {
      // this.profileForm.valueChanges.subscribe(changes => console.log(this.profileForm.get('title')))
    }
}


