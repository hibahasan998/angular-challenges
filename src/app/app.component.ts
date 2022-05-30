import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-challenges';

  name1 = "Ongoing";
  name2 = "Pending";
  name3 = "Completed";

  todos1 = ["Eat", "Drink"];
  todos2 = ["Cleaning", "Laundry", "Sports"];
  todos3 = ["Watering the plants"];
}
