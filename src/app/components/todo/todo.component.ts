import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  todo: Todo;

  constructor(private todoService: TodoService, private route: ActivatedRoute) {
    this.todo = this.getTodoById();
  }

  ngOnInit() {
  }

  getTodoById(): Todo{
    const id = +this.route.snapshot.paramMap.get('id');
    return this.todoService.getTodoById(id);
  }

}
