import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.planId = Number(this.activatedRoute.snapshot.params['id']);
    this.planTodos = this.todos.filter(todo => todo.planId==this.planId);
  }

  displayedColumns: string[] = ['id', 'detail', 'completed'];
  planId?: number;
  planTodos: Todo[] = [];

  todos: Todo[] = [
    { "id": 0, "detail": "todo0", "completed": false, "planId": 1 },
    { "id": 1, "detail": "todo1", "completed": true, "planId": 0 },
    { "id": 2, "detail": "todo2", "completed": false, "planId": 0 },
    { "id": 3, "detail": "todo3", "completed": false, "planId": 0 },
    { "id": 4, "detail": "todo4", "completed": false, "planId": 1 },
    { "id": 5, "detail": "todo5", "completed": true, "planId": 1 },
    { "id": 6, "detail": "todo6", "completed": true, "planId": 4 },
    { "id": 7, "detail": "todo7", "completed": false, "planId": 5 },
    { "id": 8, "detail": "todo8", "completed": true, "planId": 1 },
    { "id": 9, "detail": "todo9", "completed": false, "planId": 6 }
  ]

}
