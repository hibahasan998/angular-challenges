import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users: User [] = [
    { "id": 1, "name": "Hiba" },
    { "id": 2, "name": "Youssef" },
    { "id": 3, "name": "Hasan" },
    { "id": 4, "name": "Aline" },
    { "id": 5, "name": "Hamoudi" }
  ];
  displayedColumns: string [] = ["id", "name", "plans"];
}
