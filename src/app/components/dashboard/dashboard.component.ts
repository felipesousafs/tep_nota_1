import { Component, OnInit } from '@angular/core';
import {todos} from '../../services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  todos = todos;
  constructor() { }

  ngOnInit() {
  }

}
