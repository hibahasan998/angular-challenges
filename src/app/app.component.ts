import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-challenges';

  public animals = ['a1.jpg', 'a2.jpg', 'a3.jpg', 'a4.jpg'];
  public colsAnimals = Math.sqrt(this.animals.length);

  public flowers = ['f1.jpg', 'f2.jpg', 'f3.jpg', 'f4.jpg'];
  public colsFlowers = Math.sqrt(this.flowers.length);
}
