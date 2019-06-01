import {Injectable} from '@angular/core';
import {Todo} from '../models/todo';

export let todos: Todo[] = [];

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
  }

  lastTodoId(): number {
    let lastTodoId = 0;
    if (this.getAllTodos().length > 0) {
      lastTodoId = this.getAllTodos()[this.getAllTodos().length - 1].id;
    }
    return lastTodoId;
  }

  // POST /todos
  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = this.lastTodoId() + 1;
    }
    todos.push(todo);
    return this;
  }

  // DELETE /todos/:id
  deleteTodoById(id: number): TodoService {
    todos = todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // GET /todos
  getAllTodos(): Todo[] {
    return todos;
  }

  // GET /todos/:id
  getTodoById(id: number): Todo {
    return todos
      .filter(todo => todo.id === id)
      .pop();
  }


}
