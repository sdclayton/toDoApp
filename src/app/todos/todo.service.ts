import { EventEmitter } from '@angular/core';
import { Todo } from './todo.model'

export class TodoService {
  todoSelected = new EventEmitter<Todo>();

  private todos: Todo[] = [
    new Todo('Watch Angular Videos', 'CodeLabs', 'High', 'Complete HTTP Request video and project'),
    new Todo('Grade Marketing Assignments', 'Launch', 'Medium', 'Grades need to be updated and posted by 12 pm')
  ];

  getTodos() {
    return this.todos.slice();
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }
}
