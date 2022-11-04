import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from './todo.model'

export class TodoService {
  todoSelected = new EventEmitter<Todo>();

  private todos: Todo[] = [
    new Todo('Watch Angular Videos', 'CodeLabs','Complete HTTP Request video and project'),
    new Todo('Grade Marketing Assignments', 'Launch', 'Grades need to be updated and posted by 12 pm')
  ];

  todosSubject = new Subject<Todo[]>()

  getTodos() {
    return this.todos.slice();
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)

    // execute a broadcast
    // Update the view/or what we see on the page
    this.todosSubject.next(this.getTodos())
  }

  removeTodo(){
  //remove item from array
  this.todosSubject.next(this.getTodos())

  }
}
