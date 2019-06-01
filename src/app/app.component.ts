import {Component} from '@angular/core';
import {TodoService} from './services/todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoService]
})
export class AppComponent {
  title = 'todo-list-app';

  constructor(private todoService: TodoService) {
    const todo = {
      id: 1,
      title: 'Teste'
    };
    todoService.addTodo(todo);
  }

}
