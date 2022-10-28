import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms'
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css']
})
export class FormTodoComponent implements OnInit {

  constructor(public todoService: TodoService ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
  }



}
