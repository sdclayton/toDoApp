import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    // this.todos = this.todoService.getTodos();
  }

}
