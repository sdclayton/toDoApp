import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { FormTodoComponent } from './todos/form-todo/form-todo.component';
import { FormsModule, NgForm } from '@angular/forms';
import { DetailTodoComponent } from './todos/detail-todo/detail-todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListTodosComponent } from './todos/list-todos/list-todos.component';
import { TodoService } from './todos/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    FormTodoComponent,
    DetailTodoComponent,
    NavbarComponent,
    ListTodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
