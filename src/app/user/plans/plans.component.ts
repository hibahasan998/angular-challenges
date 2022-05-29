import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plan } from './plans';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  displayedColumns: string[] = ['id', 'title', 'todo'];
  userId?: number;
  userPlans: Plan[] = [];

  plans: Plan[] = [
    { "id": 0, "title": "plan0", "userId": 1 },
    { "id": 1, "title": "plan1", "userId": 1 },
    { "id": 2, "title": "plan2", "userId": 2 },
    { "id": 3, "title": "plan3", "userId": 3 },
    { "id": 4, "title": "plan4", "userId": 4 },
    { "id": 5, "title": "plan5", "userId": 4 },
    { "id": 6, "title": "plan6", "userId": 5 },
    { "id": 7, "title": "plan7", "userId": 5 }
  ]

  ngOnInit(): void {
    this.userId = Number(this.activatedRoute.snapshot.params['id']);
    this.userPlans = this.plans.filter(plan => plan.userId==this.userId);
  }
}
